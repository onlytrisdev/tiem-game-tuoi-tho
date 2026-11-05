var game = {
    paused: false
}
var audio = new Sound1();
var adcnt = 0;
setInterval(function() {
    adcnt++;
}, 999);

function app() {
    var key = {}
    try {
        canvas.onkeydown = function(e) {
            key[e.keyCode.toString()] = true;
        };
        canvas.onkeyup = function(e) {
            delete key[e.keyCode.toString()]
        };
        canvas.onblur = function(e) {
            for (var keyName in key) delete key[keyName]
        }
    } catch (e) {
        console.log(e);
        document.onkeydown = function(e) {
            key[e.keyCode.toString()] = true;
        };
        document.onkeyup = function(e) {
            delete key[e.keyCode.toString()]
        };
        document.onblur = function(e) {
            for (var keyName in key) delete key[keyName]
        }
    }
    var stage = new createjs.Stage("canvas");
    canvas.setAttribute('tabindex', '0');
    stage.on("stagemousedown", function(e) {
        canvas.focus();
    });
    var stageWidth = stage.canvas.width;
    var stageHeight = stage.canvas.height;
    var progressTarget = 0;
    var progressValue = 0;
    var mute = false;
    var scene = new createjs.Container();
    stage.addChild(scene);
    createjs.Touch.enable(stage);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", enterFrame);
    stage.on("stagemousedown", mouseDown);
    stage.on("stagemouseup", mouseUp);
    stage.on("stagemousemove", mouseMove);

    function stagePoint() {
        return new createjs.Point(stage.mouseX, stage.mouseY)
    }

    function touchPoint(e) {
        return new createjs.Point(e.localX, e.localY)
    }

    function translate(m, x, y) {
        m.prepend(1, 0, 0, 1, x, y);
        return m;
    }

    function scale(m, x, y) {
        m.prepend(x, 0, 0, y, 0, 0);
        return m;
    }

    function rotate(m, a) {
        m.prepend(Math.cos(a), Math.sin(a), -Math.sin(a), Math.cos(a), 0, 0);
        return m;
    }

    function concat(m, m2) {
        m.prependMatrix(m2);
        return m;
    }

    function setTransformMatrix(d, m) {
        d.transformMatrix = m.clone();
    }

    function getTransformMatrix(d) {
        return d.transformMatrix.clone()
    }

    function transformPoint(m, p) {
        return new createjs.Point(m.transformPoint(p.x, p.y).x, m.transformPoint(p.x, p.y).y)
    }

    function lineStyle(d, thickness, color) {
        d.graphics.setStrokeStyle(thickness);
        d.graphics.beginStroke(color);
    }

    function beginFill(d, color) {
        d.graphics.beginFill(color);
    }

    function beginBitmapFill(d, bitmap, matrix) {
        d.graphics.beginBitmapFill(bitmap.image, "repeat", matrix);
    }

    function clear(d) {
        d.graphics.clear();
    }

    function endFill(d) {
        d.graphics.endFill();
    }

    function arrayToVector(a) {
        return a;
    }

    function openURL(url) {
        window.open(url, '_blank');
    }

    function spriteCache(sprite, x, y, w, h, scale) {
        sprite.cache(x, y, w, h, scale);
    }

    function sortOn(list, name) {
        list.sort(function compare(a, b) {
            return a[name] - b[name]
        });
    }

    function localStorageGet(name) {
        if (window.localStorage) return window.localStorage.getItem("MonsterSoccerData")
        return null;
    }

    function localStorageSet(name, value) {
        if (window.localStorage) window.localStorage.setItem("MonsterSoccerData", value)
    }
    var lastLoop = new Date;

    function getFPS() {
        var thisLoop = new Date;
        var fps = 1000 / (thisLoop - lastLoop);
        lastLoop = thisLoop;
        return fps;
    }
    var lib = {};
    var libLoadingBitmap;
    var libBitmapList = [];
    var libNumChildren = 0;
    var libNumLoaded = 0;

    function loadBitmap(url) {
        libNumChildren++;
        if (libLoadingBitmap == null) {
            libLoadingBitmap = new createjs.Bitmap("assets/" + url);
            libLoadingBitmap.image.onload = function(e) {
                libLoadingBitmap = null;
                libNumLoaded++;
                if (libBitmapList.length) {
                    libNumChildren--;
                    loadBitmap(libBitmapList.shift());
                }
            }
            lib[url] = libLoadingBitmap;
        } else libBitmapList.push(url);
    }

    function createBitmap0(url) {
        var i = lib[url].image
        var b = new createjs.Bitmap(i)
        b.width = i.width;
        b.height = i.height;
        return b;
    }

    function createBitmap(url) {
        for (var i = 0; i < spriteSheet.length; i++) {
            var d = spriteSheet[i].frames[url];
            if (d)
                return createRectBitmap(createBitmap0(spriteSheet[i].meta.image), d.frame.x, d.frame.y, d.frame.w, d.frame.h);
        }
        return null;
    }
    var spriteSheet = [{
        "frames": {
            "logo-ship.png": {
                "frame": {
                    "x": 2,
                    "y": 2,
                    "w": 617,
                    "h": 524
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 617,
                    "h": 524
                },
                "sourceSize": {
                    "w": 617,
                    "h": 524
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "logo.png": {
                "frame": {
                    "x": 623,
                    "y": 2,
                    "w": 617,
                    "h": 176
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 617,
                    "h": 176
                },
                "sourceSize": {
                    "w": 617,
                    "h": 176
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "green_0.png": {
                "frame": {
                    "x": 1244,
                    "y": 2,
                    "w": 594,
                    "h": 428
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 594,
                    "h": 428
                },
                "sourceSize": {
                    "w": 594,
                    "h": 428
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house3_2.png": {
                "frame": {
                    "x": 1842,
                    "y": 2,
                    "w": 197,
                    "h": 377
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 197,
                    "h": 377
                },
                "sourceSize": {
                    "w": 197,
                    "h": 377
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house3_1.png": {
                "frame": {
                    "x": 1842,
                    "y": 383,
                    "w": 197,
                    "h": 376
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 197,
                    "h": 376
                },
                "sourceSize": {
                    "w": 197,
                    "h": 376
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "green_1.png": {
                "frame": {
                    "x": 623,
                    "y": 182,
                    "w": 594,
                    "h": 428
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 594,
                    "h": 428
                },
                "sourceSize": {
                    "w": 594,
                    "h": 428
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "gun_2.png": {
                "frame": {
                    "x": 1221,
                    "y": 182,
                    "w": 16,
                    "h": 50
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 16,
                    "h": 50
                },
                "sourceSize": {
                    "w": 16,
                    "h": 50
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "gun_3.png": {
                "frame": {
                    "x": 1221,
                    "y": 236,
                    "w": 16,
                    "h": 50
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 16,
                    "h": 50
                },
                "sourceSize": {
                    "w": 16,
                    "h": 50
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "handgun_2.png": {
                "frame": {
                    "x": 1221,
                    "y": 290,
                    "w": 16,
                    "h": 44
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 16,
                    "h": 44
                },
                "sourceSize": {
                    "w": 16,
                    "h": 44
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "handgun_3.png": {
                "frame": {
                    "x": 1221,
                    "y": 338,
                    "w": 16,
                    "h": 44
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 16,
                    "h": 44
                },
                "sourceSize": {
                    "w": 16,
                    "h": 44
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "handgun_8.png": {
                "frame": {
                    "x": 1221,
                    "y": 386,
                    "w": 16,
                    "h": 44
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 16,
                    "h": 44
                },
                "sourceSize": {
                    "w": 16,
                    "h": 44
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "green_2.png": {
                "frame": {
                    "x": 2,
                    "y": 530,
                    "w": 594,
                    "h": 428
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 594,
                    "h": 428
                },
                "sourceSize": {
                    "w": 594,
                    "h": 428
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "handgun_9.png": {
                "frame": {
                    "x": 600,
                    "y": 530,
                    "w": 16,
                    "h": 44
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 16,
                    "h": 44
                },
                "sourceSize": {
                    "w": 16,
                    "h": 44
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "gun_8.png": {
                "frame": {
                    "x": 600,
                    "y": 578,
                    "w": 15,
                    "h": 49
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 15,
                    "h": 49
                },
                "sourceSize": {
                    "w": 15,
                    "h": 49
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "green_3.png": {
                "frame": {
                    "x": 1221,
                    "y": 434,
                    "w": 594,
                    "h": 428
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 594,
                    "h": 428
                },
                "sourceSize": {
                    "w": 594,
                    "h": 428
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house5_1.png": {
                "frame": {
                    "x": 1819,
                    "y": 763,
                    "w": 226,
                    "h": 334
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 226,
                    "h": 334
                },
                "sourceSize": {
                    "w": 226,
                    "h": 334
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "gun_9.png": {
                "frame": {
                    "x": 1819,
                    "y": 614,
                    "w": 15,
                    "h": 49
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 15,
                    "h": 49
                },
                "sourceSize": {
                    "w": 15,
                    "h": 49
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "road1_0.png": {
                "frame": {
                    "x": 619,
                    "y": 614,
                    "w": 594,
                    "h": 428
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 594,
                    "h": 428
                },
                "sourceSize": {
                    "w": 594,
                    "h": 428
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "road1_2.png": {
                "frame": {
                    "x": 619,
                    "y": 1046,
                    "w": 594,
                    "h": 428
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 594,
                    "h": 428
                },
                "sourceSize": {
                    "w": 594,
                    "h": 428
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "road1_1.png": {
                "frame": {
                    "x": 619,
                    "y": 1478,
                    "w": 594,
                    "h": 427
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 594,
                    "h": 427
                },
                "sourceSize": {
                    "w": 594,
                    "h": 427
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "road1_3.png": {
                "frame": {
                    "x": 1217,
                    "y": 866,
                    "w": 594,
                    "h": 427
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 594,
                    "h": 427
                },
                "sourceSize": {
                    "w": 594,
                    "h": 427
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "pavement1_3.png": {
                "frame": {
                    "x": 1217,
                    "y": 1297,
                    "w": 593,
                    "h": 428
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 593,
                    "h": 428
                },
                "sourceSize": {
                    "w": 593,
                    "h": 428
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house5_2.png": {
                "frame": {
                    "x": 1815,
                    "y": 1101,
                    "w": 225,
                    "h": 333
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 225,
                    "h": 333
                },
                "sourceSize": {
                    "w": 225,
                    "h": 333
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house6_0.png": {
                "frame": {
                    "x": 1815,
                    "y": 1438,
                    "w": 221,
                    "h": 328
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 221,
                    "h": 328
                },
                "sourceSize": {
                    "w": 221,
                    "h": 328
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house1s_1.png": {
                "frame": {
                    "x": 1217,
                    "y": 1770,
                    "w": 456,
                    "h": 275
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 456,
                    "h": 275
                },
                "sourceSize": {
                    "w": 456,
                    "h": 275
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house2s_3.png": {
                "frame": {
                    "x": 1677,
                    "y": 1770,
                    "w": 369,
                    "h": 201
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 369,
                    "h": 201
                },
                "sourceSize": {
                    "w": 369,
                    "h": 201
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "shotgun_6.png": {
                "frame": {
                    "x": 1217,
                    "y": 1729,
                    "w": 67,
                    "h": 35
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 67,
                    "h": 35
                },
                "sourceSize": {
                    "w": 67,
                    "h": 35
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "shotgun_0.png": {
                "frame": {
                    "x": 1288,
                    "y": 1729,
                    "w": 67,
                    "h": 34
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 67,
                    "h": 34
                },
                "sourceSize": {
                    "w": 67,
                    "h": 34
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "shotgun_11.png": {
                "frame": {
                    "x": 1359,
                    "y": 1729,
                    "w": 67,
                    "h": 34
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 67,
                    "h": 34
                },
                "sourceSize": {
                    "w": 67,
                    "h": 34
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "shotgun_5.png": {
                "frame": {
                    "x": 1430,
                    "y": 1729,
                    "w": 67,
                    "h": 34
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 67,
                    "h": 34
                },
                "sourceSize": {
                    "w": 67,
                    "h": 34
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "gun_0.png": {
                "frame": {
                    "x": 1501,
                    "y": 1729,
                    "w": 42,
                    "h": 31
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 42,
                    "h": 31
                },
                "sourceSize": {
                    "w": 42,
                    "h": 31
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "gun_5.png": {
                "frame": {
                    "x": 1547,
                    "y": 1729,
                    "w": 42,
                    "h": 31
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 42,
                    "h": 31
                },
                "sourceSize": {
                    "w": 42,
                    "h": 31
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "gun_6.png": {
                "frame": {
                    "x": 1593,
                    "y": 1729,
                    "w": 41,
                    "h": 31
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 41,
                    "h": 31
                },
                "sourceSize": {
                    "w": 41,
                    "h": 31
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "shotgun_2.png": {
                "frame": {
                    "x": 1677,
                    "y": 1975,
                    "w": 24,
                    "h": 65
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 24,
                    "h": 65
                },
                "sourceSize": {
                    "w": 24,
                    "h": 65
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "shotgun_3.png": {
                "frame": {
                    "x": 1705,
                    "y": 1975,
                    "w": 24,
                    "h": 65
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 24,
                    "h": 65
                },
                "sourceSize": {
                    "w": 24,
                    "h": 65
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "shotgun_8.png": {
                "frame": {
                    "x": 1733,
                    "y": 1975,
                    "w": 24,
                    "h": 65
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 24,
                    "h": 65
                },
                "sourceSize": {
                    "w": 24,
                    "h": 65
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "shotgun_9.png": {
                "frame": {
                    "x": 1761,
                    "y": 1975,
                    "w": 24,
                    "h": 65
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 24,
                    "h": 65
                },
                "sourceSize": {
                    "w": 24,
                    "h": 65
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "gun_11.png": {
                "frame": {
                    "x": 1638,
                    "y": 1729,
                    "w": 42,
                    "h": 30
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 42,
                    "h": 30
                },
                "sourceSize": {
                    "w": 42,
                    "h": 30
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "handgun_6.png": {
                "frame": {
                    "x": 1684,
                    "y": 1729,
                    "w": 37,
                    "h": 30
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 37,
                    "h": 30
                },
                "sourceSize": {
                    "w": 37,
                    "h": 30
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "handgun_0.png": {
                "frame": {
                    "x": 1725,
                    "y": 1729,
                    "w": 36,
                    "h": 30
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 36,
                    "h": 30
                },
                "sourceSize": {
                    "w": 36,
                    "h": 30
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "handgun_11.png": {
                "frame": {
                    "x": 1765,
                    "y": 1729,
                    "w": 36,
                    "h": 30
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 36,
                    "h": 30
                },
                "sourceSize": {
                    "w": 36,
                    "h": 30
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "shotgun_1.png": {
                "frame": {
                    "x": 1789,
                    "y": 1975,
                    "w": 53,
                    "h": 55
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 53,
                    "h": 55
                },
                "sourceSize": {
                    "w": 53,
                    "h": 55
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "shotgun_10.png": {
                "frame": {
                    "x": 1846,
                    "y": 1975,
                    "w": 53,
                    "h": 55
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 53,
                    "h": 55
                },
                "sourceSize": {
                    "w": 53,
                    "h": 55
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "shotgun_7.png": {
                "frame": {
                    "x": 1903,
                    "y": 1975,
                    "w": 53,
                    "h": 55
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 53,
                    "h": 55
                },
                "sourceSize": {
                    "w": 53,
                    "h": 55
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "shotgun_4.png": {
                "frame": {
                    "x": 1960,
                    "y": 1975,
                    "w": 52,
                    "h": 55
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 52,
                    "h": 55
                },
                "sourceSize": {
                    "w": 52,
                    "h": 55
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "handgun_4.png": {
                "frame": {
                    "x": 2016,
                    "y": 1975,
                    "w": 30,
                    "h": 40
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 30,
                    "h": 40
                },
                "sourceSize": {
                    "w": 30,
                    "h": 40
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "money_0.png": {
                "frame": {
                    "x": 2016,
                    "y": 2019,
                    "w": 30,
                    "h": 19
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 30,
                    "h": 19
                },
                "sourceSize": {
                    "w": 30,
                    "h": 19
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "soundOff.png": {
                "frame": {
                    "x": 2,
                    "y": 1909,
                    "w": 120,
                    "h": 120
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 120,
                    "h": 120
                },
                "sourceSize": {
                    "w": 120,
                    "h": 120
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house1s_0.png": {
                "frame": {
                    "x": 126,
                    "y": 962,
                    "w": 472,
                    "h": 264
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 472,
                    "h": 264
                },
                "sourceSize": {
                    "w": 472,
                    "h": 264
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "soundOn.png": {
                "frame": {
                    "x": 2,
                    "y": 962,
                    "w": 120,
                    "h": 120
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 120,
                    "h": 120
                },
                "sourceSize": {
                    "w": 120,
                    "h": 120
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "car1_11.png": {
                "frame": {
                    "x": 2,
                    "y": 1086,
                    "w": 119,
                    "h": 94
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 119,
                    "h": 94
                },
                "sourceSize": {
                    "w": 119,
                    "h": 94
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "car1_6.png": {
                "frame": {
                    "x": 2,
                    "y": 1184,
                    "w": 119,
                    "h": 94
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 119,
                    "h": 94
                },
                "sourceSize": {
                    "w": 119,
                    "h": 94
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house1s_3.png": {
                "frame": {
                    "x": 126,
                    "y": 1230,
                    "w": 472,
                    "h": 264
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 472,
                    "h": 264
                },
                "sourceSize": {
                    "w": 472,
                    "h": 264
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "car2_11.png": {
                "frame": {
                    "x": 2,
                    "y": 1282,
                    "w": 119,
                    "h": 94
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 119,
                    "h": 94
                },
                "sourceSize": {
                    "w": 119,
                    "h": 94
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "car2_6.png": {
                "frame": {
                    "x": 2,
                    "y": 1380,
                    "w": 119,
                    "h": 94
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 119,
                    "h": 94
                },
                "sourceSize": {
                    "w": 119,
                    "h": 94
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "car3_11.png": {
                "frame": {
                    "x": 2,
                    "y": 1478,
                    "w": 119,
                    "h": 94
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 119,
                    "h": 94
                },
                "sourceSize": {
                    "w": 119,
                    "h": 94
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house6_3.png": {
                "frame": {
                    "x": 2,
                    "y": 1576,
                    "w": 221,
                    "h": 328
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 221,
                    "h": 328
                },
                "sourceSize": {
                    "w": 221,
                    "h": 328
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house7s_3.png": {
                "frame": {
                    "x": 227,
                    "y": 1498,
                    "w": 387,
                    "h": 218
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 387,
                    "h": 218
                },
                "sourceSize": {
                    "w": 387,
                    "h": 218
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house7s_0.png": {
                "frame": {
                    "x": 227,
                    "y": 1720,
                    "w": 386,
                    "h": 218
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 386,
                    "h": 218
                },
                "sourceSize": {
                    "w": 386,
                    "h": 218
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "tree3s_0.png": {
                "frame": {
                    "x": 126,
                    "y": 1942,
                    "w": 193,
                    "h": 102
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 193,
                    "h": 102
                },
                "sourceSize": {
                    "w": 193,
                    "h": 102
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "handgun_5.png": {
                "frame": {
                    "x": 126,
                    "y": 1908,
                    "w": 36,
                    "h": 30
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 36,
                    "h": 30
                },
                "sourceSize": {
                    "w": 36,
                    "h": 30
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "tree3s_3.png": {
                "frame": {
                    "x": 323,
                    "y": 1942,
                    "w": 193,
                    "h": 102
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 193,
                    "h": 102
                },
                "sourceSize": {
                    "w": 193,
                    "h": 102
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "tree3s_1.png": {
                "frame": {
                    "x": 520,
                    "y": 1942,
                    "w": 193,
                    "h": 101
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 193,
                    "h": 101
                },
                "sourceSize": {
                    "w": 193,
                    "h": 101
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "car1_2.png": {
                "frame": {
                    "x": 717,
                    "y": 1909,
                    "w": 84,
                    "h": 119
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 84,
                    "h": 119
                },
                "sourceSize": {
                    "w": 84,
                    "h": 119
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "car1_8.png": {
                "frame": {
                    "x": 805,
                    "y": 1909,
                    "w": 84,
                    "h": 119
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 84,
                    "h": 119
                },
                "sourceSize": {
                    "w": 84,
                    "h": 119
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "car1_9.png": {
                "frame": {
                    "x": 893,
                    "y": 1909,
                    "w": 84,
                    "h": 119
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 84,
                    "h": 119
                },
                "sourceSize": {
                    "w": 84,
                    "h": 119
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "tree4s_0.png": {
                "frame": {
                    "x": 981,
                    "y": 1909,
                    "w": 216,
                    "h": 114
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 216,
                    "h": 114
                },
                "sourceSize": {
                    "w": 216,
                    "h": 114
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "gun_4.png": {
                "frame": {
                    "x": 125,
                    "y": 1498,
                    "w": 33,
                    "h": 44
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 33,
                    "h": 44
                },
                "sourceSize": {
                    "w": 33,
                    "h": 44
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "aidkit_0.png": {
                "frame": {
                    "x": 162,
                    "y": 1498,
                    "w": 41,
                    "h": 42
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 41,
                    "h": 42
                },
                "sourceSize": {
                    "w": 41,
                    "h": 42
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            }
        },
        "meta": {
            "app": "http://free-tex-packer.com",
            "version": "0.6.6",
            "image": "texture-0.png",
            "format": "RGBA8888",
            "size": {
                "w": 2048,
                "h": 2047
            },
            "scale": 1
        }
    }, {
        "frames": {
            "pavement1_0.png": {
                "frame": {
                    "x": 2,
                    "y": 2,
                    "w": 593,
                    "h": 427
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 593,
                    "h": 427
                },
                "sourceSize": {
                    "w": 593,
                    "h": 427
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "pavement1_1.png": {
                "frame": {
                    "x": 599,
                    "y": 2,
                    "w": 593,
                    "h": 427
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 593,
                    "h": 427
                },
                "sourceSize": {
                    "w": 593,
                    "h": 427
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "pavement1_2.png": {
                "frame": {
                    "x": 1196,
                    "y": 2,
                    "w": 593,
                    "h": 427
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 593,
                    "h": 427
                },
                "sourceSize": {
                    "w": 593,
                    "h": 427
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house2_0.png": {
                "frame": {
                    "x": 1793,
                    "y": 2,
                    "w": 245,
                    "h": 348
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 245,
                    "h": 348
                },
                "sourceSize": {
                    "w": 245,
                    "h": 348
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house2_3.png": {
                "frame": {
                    "x": 1793,
                    "y": 354,
                    "w": 245,
                    "h": 348
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 245,
                    "h": 348
                },
                "sourceSize": {
                    "w": 245,
                    "h": 348
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house1_1.png": {
                "frame": {
                    "x": 2,
                    "y": 706,
                    "w": 268,
                    "h": 498
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 268,
                    "h": 498
                },
                "sourceSize": {
                    "w": 268,
                    "h": 498
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "tree4_0.png": {
                "frame": {
                    "x": 2,
                    "y": 433,
                    "w": 90,
                    "h": 263
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 90,
                    "h": 263
                },
                "sourceSize": {
                    "w": 90,
                    "h": 263
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "tree4_1.png": {
                "frame": {
                    "x": 96,
                    "y": 433,
                    "w": 90,
                    "h": 263
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 90,
                    "h": 263
                },
                "sourceSize": {
                    "w": 90,
                    "h": 263
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "tree4_2.png": {
                "frame": {
                    "x": 190,
                    "y": 433,
                    "w": 90,
                    "h": 263
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 90,
                    "h": 263
                },
                "sourceSize": {
                    "w": 90,
                    "h": 263
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house1_2.png": {
                "frame": {
                    "x": 2,
                    "y": 1208,
                    "w": 267,
                    "h": 498
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 267,
                    "h": 498
                },
                "sourceSize": {
                    "w": 267,
                    "h": 498
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house5_0.png": {
                "frame": {
                    "x": 2,
                    "y": 1710,
                    "w": 265,
                    "h": 306
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 265,
                    "h": 306
                },
                "sourceSize": {
                    "w": 265,
                    "h": 306
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house5_3.png": {
                "frame": {
                    "x": 271,
                    "y": 1710,
                    "w": 265,
                    "h": 306
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 265,
                    "h": 306
                },
                "sourceSize": {
                    "w": 265,
                    "h": 306
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house1_0.png": {
                "frame": {
                    "x": 273,
                    "y": 1208,
                    "w": 284,
                    "h": 487
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 284,
                    "h": 487
                },
                "sourceSize": {
                    "w": 284,
                    "h": 487
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house3_3.png": {
                "frame": {
                    "x": 540,
                    "y": 1699,
                    "w": 241,
                    "h": 346
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 241,
                    "h": 346
                },
                "sourceSize": {
                    "w": 241,
                    "h": 346
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house3_0.png": {
                "frame": {
                    "x": 785,
                    "y": 1699,
                    "w": 240,
                    "h": 346
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 240,
                    "h": 346
                },
                "sourceSize": {
                    "w": 240,
                    "h": 346
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house1_3.png": {
                "frame": {
                    "x": 274,
                    "y": 706,
                    "w": 284,
                    "h": 487
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 284,
                    "h": 487
                },
                "sourceSize": {
                    "w": 284,
                    "h": 487
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "tree4_3.png": {
                "frame": {
                    "x": 284,
                    "y": 433,
                    "w": 90,
                    "h": 263
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 90,
                    "h": 263
                },
                "sourceSize": {
                    "w": 90,
                    "h": 263
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house4s_1.png": {
                "frame": {
                    "x": 378,
                    "y": 433,
                    "w": 392,
                    "h": 259
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 392,
                    "h": 259
                },
                "sourceSize": {
                    "w": 392,
                    "h": 259
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "road2_0.png": {
                "frame": {
                    "x": 561,
                    "y": 1197,
                    "w": 593,
                    "h": 427
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 593,
                    "h": 427
                },
                "sourceSize": {
                    "w": 593,
                    "h": 427
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house4_1.png": {
                "frame": {
                    "x": 1029,
                    "y": 1628,
                    "w": 261,
                    "h": 414
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 261,
                    "h": 414
                },
                "sourceSize": {
                    "w": 261,
                    "h": 414
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "gun_1.png": {
                "frame": {
                    "x": 561,
                    "y": 1628,
                    "w": 33,
                    "h": 43
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 33,
                    "h": 43
                },
                "sourceSize": {
                    "w": 33,
                    "h": 43
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "gun_10.png": {
                "frame": {
                    "x": 598,
                    "y": 1628,
                    "w": 33,
                    "h": 43
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 33,
                    "h": 43
                },
                "sourceSize": {
                    "w": 33,
                    "h": 43
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "gun_7.png": {
                "frame": {
                    "x": 635,
                    "y": 1628,
                    "w": 33,
                    "h": 43
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 33,
                    "h": 43
                },
                "sourceSize": {
                    "w": 33,
                    "h": 43
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "handgun_1.png": {
                "frame": {
                    "x": 672,
                    "y": 1628,
                    "w": 31,
                    "h": 40
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 31,
                    "h": 40
                },
                "sourceSize": {
                    "w": 31,
                    "h": 40
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "handgun_10.png": {
                "frame": {
                    "x": 707,
                    "y": 1628,
                    "w": 31,
                    "h": 40
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 31,
                    "h": 40
                },
                "sourceSize": {
                    "w": 31,
                    "h": 40
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "handgun_7.png": {
                "frame": {
                    "x": 742,
                    "y": 1628,
                    "w": 31,
                    "h": 40
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 31,
                    "h": 40
                },
                "sourceSize": {
                    "w": 31,
                    "h": 40
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "road2_1.png": {
                "frame": {
                    "x": 1158,
                    "y": 433,
                    "w": 593,
                    "h": 427
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 593,
                    "h": 427
                },
                "sourceSize": {
                    "w": 593,
                    "h": 427
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "road4_0.png": {
                "frame": {
                    "x": 562,
                    "y": 696,
                    "w": 592,
                    "h": 427
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 592,
                    "h": 427
                },
                "sourceSize": {
                    "w": 592,
                    "h": 427
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "email.png": {
                "frame": {
                    "x": 1755,
                    "y": 706,
                    "w": 289,
                    "h": 38
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 289,
                    "h": 38
                },
                "sourceSize": {
                    "w": 289,
                    "h": 38
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house3s_0.png": {
                "frame": {
                    "x": 774,
                    "y": 433,
                    "w": 371,
                    "h": 191
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 371,
                    "h": 191
                },
                "sourceSize": {
                    "w": 371,
                    "h": 191
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house4_2.png": {
                "frame": {
                    "x": 1755,
                    "y": 748,
                    "w": 261,
                    "h": 414
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 261,
                    "h": 414
                },
                "sourceSize": {
                    "w": 261,
                    "h": 414
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "road2_2.png": {
                "frame": {
                    "x": 1158,
                    "y": 864,
                    "w": 593,
                    "h": 427
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 593,
                    "h": 427
                },
                "sourceSize": {
                    "w": 593,
                    "h": 427
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house7_3.png": {
                "frame": {
                    "x": 1755,
                    "y": 1166,
                    "w": 259,
                    "h": 370
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 259,
                    "h": 370
                },
                "sourceSize": {
                    "w": 259,
                    "h": 370
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house1s_2.png": {
                "frame": {
                    "x": 1294,
                    "y": 1295,
                    "w": 455,
                    "h": 275
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 455,
                    "h": 275
                },
                "sourceSize": {
                    "w": 455,
                    "h": 275
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house4_3.png": {
                "frame": {
                    "x": 1753,
                    "y": 1540,
                    "w": 293,
                    "h": 391
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 293,
                    "h": 391
                },
                "sourceSize": {
                    "w": 293,
                    "h": 391
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "tree3s_2.png": {
                "frame": {
                    "x": 1294,
                    "y": 1935,
                    "w": 193,
                    "h": 101
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 193,
                    "h": 101
                },
                "sourceSize": {
                    "w": 193,
                    "h": 101
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house7_0.png": {
                "frame": {
                    "x": 1491,
                    "y": 1574,
                    "w": 258,
                    "h": 370
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 258,
                    "h": 370
                },
                "sourceSize": {
                    "w": 258,
                    "h": 370
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "car3_6.png": {
                "frame": {
                    "x": 1491,
                    "y": 1948,
                    "w": 119,
                    "h": 94
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 119,
                    "h": 94
                },
                "sourceSize": {
                    "w": 119,
                    "h": 94
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "car4_11.png": {
                "frame": {
                    "x": 1614,
                    "y": 1948,
                    "w": 119,
                    "h": 94
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 119,
                    "h": 94
                },
                "sourceSize": {
                    "w": 119,
                    "h": 94
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "car4_6.png": {
                "frame": {
                    "x": 1737,
                    "y": 1948,
                    "w": 119,
                    "h": 94
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 119,
                    "h": 94
                },
                "sourceSize": {
                    "w": 119,
                    "h": 94
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "tree2s_1.png": {
                "frame": {
                    "x": 1860,
                    "y": 1935,
                    "w": 176,
                    "h": 92
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 176,
                    "h": 92
                },
                "sourceSize": {
                    "w": 176,
                    "h": 92
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "car1_0.png": {
                "frame": {
                    "x": 1158,
                    "y": 1295,
                    "w": 118,
                    "h": 93
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 118,
                    "h": 93
                },
                "sourceSize": {
                    "w": 118,
                    "h": 93
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "car1_5.png": {
                "frame": {
                    "x": 1158,
                    "y": 1392,
                    "w": 118,
                    "h": 93
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 118,
                    "h": 93
                },
                "sourceSize": {
                    "w": 118,
                    "h": 93
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "car2_0.png": {
                "frame": {
                    "x": 1158,
                    "y": 1489,
                    "w": 118,
                    "h": 93
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 118,
                    "h": 93
                },
                "sourceSize": {
                    "w": 118,
                    "h": 93
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "tree2s_0.png": {
                "frame": {
                    "x": 1294,
                    "y": 1574,
                    "w": 175,
                    "h": 93
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 175,
                    "h": 93
                },
                "sourceSize": {
                    "w": 175,
                    "h": 93
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "tree2s_2.png": {
                "frame": {
                    "x": 1294,
                    "y": 1671,
                    "w": 175,
                    "h": 92
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 175,
                    "h": 92
                },
                "sourceSize": {
                    "w": 175,
                    "h": 92
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "tree2s_3.png": {
                "frame": {
                    "x": 1294,
                    "y": 1767,
                    "w": 175,
                    "h": 92
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 175,
                    "h": 92
                },
                "sourceSize": {
                    "w": 175,
                    "h": 92
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            }
        },
        "meta": {
            "app": "http://free-tex-packer.com",
            "version": "0.6.6",
            "image": "texture-1.png",
            "format": "RGBA8888",
            "size": {
                "w": 2048,
                "h": 2047
            },
            "scale": 1
        }
    }, {
        "frames": {
            "road2_3.png": {
                "frame": {
                    "x": 2,
                    "y": 2,
                    "w": 593,
                    "h": 427
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 593,
                    "h": 427
                },
                "sourceSize": {
                    "w": 593,
                    "h": 427
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "road3_0.png": {
                "frame": {
                    "x": 599,
                    "y": 2,
                    "w": 593,
                    "h": 427
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 593,
                    "h": 427
                },
                "sourceSize": {
                    "w": 593,
                    "h": 427
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "road3_1.png": {
                "frame": {
                    "x": 1196,
                    "y": 2,
                    "w": 593,
                    "h": 427
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 593,
                    "h": 427
                },
                "sourceSize": {
                    "w": 593,
                    "h": 427
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house7_1.png": {
                "frame": {
                    "x": 1793,
                    "y": 2,
                    "w": 236,
                    "h": 385
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 236,
                    "h": 385
                },
                "sourceSize": {
                    "w": 236,
                    "h": 385
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house7_2.png": {
                "frame": {
                    "x": 1793,
                    "y": 391,
                    "w": 236,
                    "h": 385
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 236,
                    "h": 385
                },
                "sourceSize": {
                    "w": 236,
                    "h": 385
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "road3_2.png": {
                "frame": {
                    "x": 2,
                    "y": 780,
                    "w": 593,
                    "h": 427
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 593,
                    "h": 427
                },
                "sourceSize": {
                    "w": 593,
                    "h": 427
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house4s_2.png": {
                "frame": {
                    "x": 2,
                    "y": 433,
                    "w": 392,
                    "h": 259
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 392,
                    "h": 259
                },
                "sourceSize": {
                    "w": 392,
                    "h": 259
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house4s_0.png": {
                "frame": {
                    "x": 398,
                    "y": 433,
                    "w": 423,
                    "h": 236
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 423,
                    "h": 236
                },
                "sourceSize": {
                    "w": 423,
                    "h": 236
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "car2_5.png": {
                "frame": {
                    "x": 398,
                    "y": 673,
                    "w": 118,
                    "h": 93
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 118,
                    "h": 93
                },
                "sourceSize": {
                    "w": 118,
                    "h": 93
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "car3_0.png": {
                "frame": {
                    "x": 520,
                    "y": 673,
                    "w": 118,
                    "h": 93
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 118,
                    "h": 93
                },
                "sourceSize": {
                    "w": 118,
                    "h": 93
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "road3_3.png": {
                "frame": {
                    "x": 825,
                    "y": 433,
                    "w": 593,
                    "h": 427
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 593,
                    "h": 427
                },
                "sourceSize": {
                    "w": 593,
                    "h": 427
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house7s_1.png": {
                "frame": {
                    "x": 1422,
                    "y": 433,
                    "w": 364,
                    "h": 233
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 364,
                    "h": 233
                },
                "sourceSize": {
                    "w": 364,
                    "h": 233
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house7s_2.png": {
                "frame": {
                    "x": 1422,
                    "y": 670,
                    "w": 364,
                    "h": 233
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 364,
                    "h": 233
                },
                "sourceSize": {
                    "w": 364,
                    "h": 233
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "tree4s_2.png": {
                "frame": {
                    "x": 599,
                    "y": 770,
                    "w": 216,
                    "h": 114
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 216,
                    "h": 114
                },
                "sourceSize": {
                    "w": 216,
                    "h": 114
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "car3_5.png": {
                "frame": {
                    "x": 642,
                    "y": 673,
                    "w": 118,
                    "h": 93
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 118,
                    "h": 93
                },
                "sourceSize": {
                    "w": 118,
                    "h": 93
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "road4_1.png": {
                "frame": {
                    "x": 819,
                    "y": 864,
                    "w": 593,
                    "h": 427
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 593,
                    "h": 427
                },
                "sourceSize": {
                    "w": 593,
                    "h": 427
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "tree4s_3.png": {
                "frame": {
                    "x": 599,
                    "y": 907,
                    "w": 216,
                    "h": 113
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 216,
                    "h": 113
                },
                "sourceSize": {
                    "w": 216,
                    "h": 113
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "tree4s_1.png": {
                "frame": {
                    "x": 599,
                    "y": 1024,
                    "w": 215,
                    "h": 114
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 215,
                    "h": 114
                },
                "sourceSize": {
                    "w": 215,
                    "h": 114
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house2_1.png": {
                "frame": {
                    "x": 599,
                    "y": 1142,
                    "w": 214,
                    "h": 370
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 214,
                    "h": 370
                },
                "sourceSize": {
                    "w": 214,
                    "h": 370
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "road4_2.png": {
                "frame": {
                    "x": 2,
                    "y": 1211,
                    "w": 593,
                    "h": 427
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 593,
                    "h": 427
                },
                "sourceSize": {
                    "w": 593,
                    "h": 427
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house4_0.png": {
                "frame": {
                    "x": 2,
                    "y": 1642,
                    "w": 292,
                    "h": 391
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 292,
                    "h": 391
                },
                "sourceSize": {
                    "w": 292,
                    "h": 391
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house2_2.png": {
                "frame": {
                    "x": 298,
                    "y": 1642,
                    "w": 214,
                    "h": 369
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 214,
                    "h": 369
                },
                "sourceSize": {
                    "w": 214,
                    "h": 369
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "road4_3.png": {
                "frame": {
                    "x": 1416,
                    "y": 907,
                    "w": 593,
                    "h": 427
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 593,
                    "h": 427
                },
                "sourceSize": {
                    "w": 593,
                    "h": 427
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "car2_2.png": {
                "frame": {
                    "x": 1790,
                    "y": 780,
                    "w": 84,
                    "h": 119
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 84,
                    "h": 119
                },
                "sourceSize": {
                    "w": 84,
                    "h": 119
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "car2_8.png": {
                "frame": {
                    "x": 1878,
                    "y": 780,
                    "w": 84,
                    "h": 119
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 84,
                    "h": 119
                },
                "sourceSize": {
                    "w": 84,
                    "h": 119
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house6_1.png": {
                "frame": {
                    "x": 516,
                    "y": 1642,
                    "w": 166,
                    "h": 367
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 166,
                    "h": 367
                },
                "sourceSize": {
                    "w": 166,
                    "h": 367
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "car2_9.png": {
                "frame": {
                    "x": 599,
                    "y": 1516,
                    "w": 84,
                    "h": 119
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 84,
                    "h": 119
                },
                "sourceSize": {
                    "w": 84,
                    "h": 119
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house6_2.png": {
                "frame": {
                    "x": 686,
                    "y": 1639,
                    "w": 165,
                    "h": 367
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 165,
                    "h": 367
                },
                "sourceSize": {
                    "w": 165,
                    "h": 367
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "car3_2.png": {
                "frame": {
                    "x": 687,
                    "y": 1516,
                    "w": 84,
                    "h": 119
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 84,
                    "h": 119
                },
                "sourceSize": {
                    "w": 84,
                    "h": 119
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "car3_8.png": {
                "frame": {
                    "x": 775,
                    "y": 1516,
                    "w": 84,
                    "h": 119
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 84,
                    "h": 119
                },
                "sourceSize": {
                    "w": 84,
                    "h": 119
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "tree2_0.png": {
                "frame": {
                    "x": 817,
                    "y": 1295,
                    "w": 73,
                    "h": 214
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 73,
                    "h": 214
                },
                "sourceSize": {
                    "w": 73,
                    "h": 214
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house4s_3.png": {
                "frame": {
                    "x": 894,
                    "y": 1295,
                    "w": 423,
                    "h": 236
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 423,
                    "h": 236
                },
                "sourceSize": {
                    "w": 423,
                    "h": 236
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "car3_9.png": {
                "frame": {
                    "x": 1321,
                    "y": 1295,
                    "w": 84,
                    "h": 119
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 84,
                    "h": 119
                },
                "sourceSize": {
                    "w": 84,
                    "h": 119
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "tree3_1.png": {
                "frame": {
                    "x": 855,
                    "y": 1639,
                    "w": 81,
                    "h": 235
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 81,
                    "h": 235
                },
                "sourceSize": {
                    "w": 81,
                    "h": 235
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "car4_0.png": {
                "frame": {
                    "x": 863,
                    "y": 1535,
                    "w": 118,
                    "h": 93
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 118,
                    "h": 93
                },
                "sourceSize": {
                    "w": 118,
                    "h": 93
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "car4_2.png": {
                "frame": {
                    "x": 855,
                    "y": 1878,
                    "w": 84,
                    "h": 119
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 84,
                    "h": 119
                },
                "sourceSize": {
                    "w": 84,
                    "h": 119
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "tree3_3.png": {
                "frame": {
                    "x": 940,
                    "y": 1632,
                    "w": 81,
                    "h": 235
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 81,
                    "h": 235
                },
                "sourceSize": {
                    "w": 81,
                    "h": 235
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "car4_5.png": {
                "frame": {
                    "x": 985,
                    "y": 1535,
                    "w": 118,
                    "h": 93
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 118,
                    "h": 93
                },
                "sourceSize": {
                    "w": 118,
                    "h": 93
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house6s_0.png": {
                "frame": {
                    "x": 943,
                    "y": 1871,
                    "w": 354,
                    "h": 170
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 354,
                    "h": 170
                },
                "sourceSize": {
                    "w": 354,
                    "h": 170
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "tree3_0.png": {
                "frame": {
                    "x": 1025,
                    "y": 1632,
                    "w": 80,
                    "h": 235
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 80,
                    "h": 235
                },
                "sourceSize": {
                    "w": 80,
                    "h": 235
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "tree1s_0.png": {
                "frame": {
                    "x": 1107,
                    "y": 1535,
                    "w": 161,
                    "h": 85
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 161,
                    "h": 85
                },
                "sourceSize": {
                    "w": 161,
                    "h": 85
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "tree3_2.png": {
                "frame": {
                    "x": 1109,
                    "y": 1624,
                    "w": 80,
                    "h": 235
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 80,
                    "h": 235
                },
                "sourceSize": {
                    "w": 80,
                    "h": 235
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house5s_1.png": {
                "frame": {
                    "x": 1193,
                    "y": 1624,
                    "w": 318,
                    "h": 224
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 318,
                    "h": 224
                },
                "sourceSize": {
                    "w": 318,
                    "h": 224
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "tree1s_1.png": {
                "frame": {
                    "x": 1272,
                    "y": 1535,
                    "w": 161,
                    "h": 85
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 161,
                    "h": 85
                },
                "sourceSize": {
                    "w": 161,
                    "h": 85
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house3s_3.png": {
                "frame": {
                    "x": 1409,
                    "y": 1338,
                    "w": 371,
                    "h": 191
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 371,
                    "h": 191
                },
                "sourceSize": {
                    "w": 371,
                    "h": 191
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "tree1s_2.png": {
                "frame": {
                    "x": 1437,
                    "y": 1533,
                    "w": 161,
                    "h": 85
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 161,
                    "h": 85
                },
                "sourceSize": {
                    "w": 161,
                    "h": 85
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house6s_3.png": {
                "frame": {
                    "x": 1301,
                    "y": 1852,
                    "w": 354,
                    "h": 170
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 354,
                    "h": 170
                },
                "sourceSize": {
                    "w": 354,
                    "h": 170
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house5s_2.png": {
                "frame": {
                    "x": 1515,
                    "y": 1622,
                    "w": 318,
                    "h": 224
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 318,
                    "h": 224
                },
                "sourceSize": {
                    "w": 318,
                    "h": 224
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house5s_0.png": {
                "frame": {
                    "x": 1659,
                    "y": 1850,
                    "w": 358,
                    "h": 196
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 358,
                    "h": 196
                },
                "sourceSize": {
                    "w": 358,
                    "h": 196
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "tree1s_3.png": {
                "frame": {
                    "x": 1602,
                    "y": 1533,
                    "w": 161,
                    "h": 85
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 161,
                    "h": 85
                },
                "sourceSize": {
                    "w": 161,
                    "h": 85
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "tree2_3.png": {
                "frame": {
                    "x": 1784,
                    "y": 1338,
                    "w": 73,
                    "h": 214
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 73,
                    "h": 214
                },
                "sourceSize": {
                    "w": 73,
                    "h": 214
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "tree2_1.png": {
                "frame": {
                    "x": 1861,
                    "y": 1338,
                    "w": 73,
                    "h": 213
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 73,
                    "h": 213
                },
                "sourceSize": {
                    "w": 73,
                    "h": 213
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "car4_8.png": {
                "frame": {
                    "x": 1938,
                    "y": 1338,
                    "w": 84,
                    "h": 119
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 84,
                    "h": 119
                },
                "sourceSize": {
                    "w": 84,
                    "h": 119
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "car4_9.png": {
                "frame": {
                    "x": 1938,
                    "y": 1461,
                    "w": 84,
                    "h": 119
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 84,
                    "h": 119
                },
                "sourceSize": {
                    "w": 84,
                    "h": 119
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "tree2_2.png": {
                "frame": {
                    "x": 1861,
                    "y": 1555,
                    "w": 73,
                    "h": 213
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 73,
                    "h": 213
                },
                "sourceSize": {
                    "w": 73,
                    "h": 213
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "car1_3.png": {
                "frame": {
                    "x": 1938,
                    "y": 1584,
                    "w": 84,
                    "h": 118
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 84,
                    "h": 118
                },
                "sourceSize": {
                    "w": 84,
                    "h": 118
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "car2_3.png": {
                "frame": {
                    "x": 1938,
                    "y": 1706,
                    "w": 84,
                    "h": 118
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 84,
                    "h": 118
                },
                "sourceSize": {
                    "w": 84,
                    "h": 118
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            }
        },
        "meta": {
            "app": "http://free-tex-packer.com",
            "version": "0.6.6",
            "image": "texture-2.png",
            "format": "RGBA8888",
            "size": {
                "w": 2031,
                "h": 2048
            },
            "scale": 1
        }
    }, {
        "frames": {
            "house2s_0.png": {
                "frame": {
                    "x": 2,
                    "y": 2,
                    "w": 369,
                    "h": 200
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 369,
                    "h": 200
                },
                "sourceSize": {
                    "w": 369,
                    "h": 200
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house5s_3.png": {
                "frame": {
                    "x": 375,
                    "y": 2,
                    "w": 358,
                    "h": 196
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 358,
                    "h": 196
                },
                "sourceSize": {
                    "w": 358,
                    "h": 196
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house2s_1.png": {
                "frame": {
                    "x": 737,
                    "y": 2,
                    "w": 339,
                    "h": 223
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 339,
                    "h": 223
                },
                "sourceSize": {
                    "w": 339,
                    "h": 223
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house2s_2.png": {
                "frame": {
                    "x": 375,
                    "y": 202,
                    "w": 338,
                    "h": 222
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 338,
                    "h": 222
                },
                "sourceSize": {
                    "w": 338,
                    "h": 222
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house3s_1.png": {
                "frame": {
                    "x": 2,
                    "y": 206,
                    "w": 328,
                    "h": 222
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 328,
                    "h": 222
                },
                "sourceSize": {
                    "w": 328,
                    "h": 222
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house3s_2.png": {
                "frame": {
                    "x": 1080,
                    "y": 2,
                    "w": 327,
                    "h": 222
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 327,
                    "h": 222
                },
                "sourceSize": {
                    "w": 327,
                    "h": 222
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house6s_1.png": {
                "frame": {
                    "x": 1411,
                    "y": 2,
                    "w": 299,
                    "h": 209
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 299,
                    "h": 209
                },
                "sourceSize": {
                    "w": 299,
                    "h": 209
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "house6s_2.png": {
                "frame": {
                    "x": 1714,
                    "y": 2,
                    "w": 298,
                    "h": 209
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 298,
                    "h": 209
                },
                "sourceSize": {
                    "w": 298,
                    "h": 209
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "car1_1.png": {
                "frame": {
                    "x": 1411,
                    "y": 215,
                    "w": 117,
                    "h": 118
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 117,
                    "h": 118
                },
                "sourceSize": {
                    "w": 117,
                    "h": 118
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "car2_1.png": {
                "frame": {
                    "x": 1080,
                    "y": 228,
                    "w": 117,
                    "h": 118
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 117,
                    "h": 118
                },
                "sourceSize": {
                    "w": 117,
                    "h": 118
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "car3_1.png": {
                "frame": {
                    "x": 1201,
                    "y": 228,
                    "w": 117,
                    "h": 118
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 117,
                    "h": 118
                },
                "sourceSize": {
                    "w": 117,
                    "h": 118
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "car3_3.png": {
                "frame": {
                    "x": 1322,
                    "y": 228,
                    "w": 84,
                    "h": 118
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 84,
                    "h": 118
                },
                "sourceSize": {
                    "w": 84,
                    "h": 118
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "car4_1.png": {
                "frame": {
                    "x": 717,
                    "y": 229,
                    "w": 117,
                    "h": 118
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 117,
                    "h": 118
                },
                "sourceSize": {
                    "w": 117,
                    "h": 118
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "car1_10.png": {
                "frame": {
                    "x": 838,
                    "y": 229,
                    "w": 117,
                    "h": 117
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 117,
                    "h": 117
                },
                "sourceSize": {
                    "w": 117,
                    "h": 117
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "car1_4.png": {
                "frame": {
                    "x": 959,
                    "y": 229,
                    "w": 117,
                    "h": 117
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 117,
                    "h": 117
                },
                "sourceSize": {
                    "w": 117,
                    "h": 117
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "car1_7.png": {
                "frame": {
                    "x": 1532,
                    "y": 215,
                    "w": 117,
                    "h": 117
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 117,
                    "h": 117
                },
                "sourceSize": {
                    "w": 117,
                    "h": 117
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "car2_10.png": {
                "frame": {
                    "x": 1653,
                    "y": 215,
                    "w": 117,
                    "h": 117
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 117,
                    "h": 117
                },
                "sourceSize": {
                    "w": 117,
                    "h": 117
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "car2_4.png": {
                "frame": {
                    "x": 1774,
                    "y": 215,
                    "w": 117,
                    "h": 117
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 117,
                    "h": 117
                },
                "sourceSize": {
                    "w": 117,
                    "h": 117
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "car2_7.png": {
                "frame": {
                    "x": 1895,
                    "y": 215,
                    "w": 117,
                    "h": 117
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 117,
                    "h": 117
                },
                "sourceSize": {
                    "w": 117,
                    "h": 117
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "car3_10.png": {
                "frame": {
                    "x": 1532,
                    "y": 336,
                    "w": 117,
                    "h": 117
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 117,
                    "h": 117
                },
                "sourceSize": {
                    "w": 117,
                    "h": 117
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "car3_4.png": {
                "frame": {
                    "x": 1410,
                    "y": 337,
                    "w": 117,
                    "h": 117
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 117,
                    "h": 117
                },
                "sourceSize": {
                    "w": 117,
                    "h": 117
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "car3_7.png": {
                "frame": {
                    "x": 1653,
                    "y": 336,
                    "w": 117,
                    "h": 117
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 117,
                    "h": 117
                },
                "sourceSize": {
                    "w": 117,
                    "h": 117
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "car4_10.png": {
                "frame": {
                    "x": 1774,
                    "y": 336,
                    "w": 117,
                    "h": 117
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 117,
                    "h": 117
                },
                "sourceSize": {
                    "w": 117,
                    "h": 117
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "car4_4.png": {
                "frame": {
                    "x": 1895,
                    "y": 336,
                    "w": 117,
                    "h": 117
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 117,
                    "h": 117
                },
                "sourceSize": {
                    "w": 117,
                    "h": 117
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "car4_7.png": {
                "frame": {
                    "x": 1531,
                    "y": 457,
                    "w": 117,
                    "h": 117
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 117,
                    "h": 117
                },
                "sourceSize": {
                    "w": 117,
                    "h": 117
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "car4_3.png": {
                "frame": {
                    "x": 1652,
                    "y": 457,
                    "w": 84,
                    "h": 118
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 84,
                    "h": 118
                },
                "sourceSize": {
                    "w": 84,
                    "h": 118
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "tree1_0.png": {
                "frame": {
                    "x": 1740,
                    "y": 457,
                    "w": 67,
                    "h": 196
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 67,
                    "h": 196
                },
                "sourceSize": {
                    "w": 67,
                    "h": 196
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "tree1_1.png": {
                "frame": {
                    "x": 1811,
                    "y": 457,
                    "w": 67,
                    "h": 196
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 67,
                    "h": 196
                },
                "sourceSize": {
                    "w": 67,
                    "h": 196
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "tree1_2.png": {
                "frame": {
                    "x": 1882,
                    "y": 457,
                    "w": 67,
                    "h": 196
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 67,
                    "h": 196
                },
                "sourceSize": {
                    "w": 67,
                    "h": 196
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            },
            "tree1_3.png": {
                "frame": {
                    "x": 1953,
                    "y": 457,
                    "w": 67,
                    "h": 196
                },
                "rotated": false,
                "trimmed": false,
                "spriteSourceSize": {
                    "x": 0,
                    "y": 0,
                    "w": 67,
                    "h": 196
                },
                "sourceSize": {
                    "w": 67,
                    "h": 196
                },
                "pivot": {
                    "x": 0.5,
                    "y": 0.5
                }
            }
        },
        "meta": {
            "app": "http://free-tex-packer.com",
            "version": "0.6.6",
            "image": "texture-3.png",
            "format": "RGBA8888",
            "size": {
                "w": 2022,
                "h": 655
            },
            "scale": 1
        }
    }]

    function createRectBitmap(b, x, y, w, h) {
        b = b.clone();
        b.sourceRect = new createjs.Rectangle(x, y, w, h);
        b.width = w;
        b.height = h;
        return b;
    }

    function loadSound(url) {}

    function getSound(url) {
        return lib[url];
    }

    function playSound(url, volume, loop) {
        return null;
    }

    function aspect() {
        return canvas.clientWidth / canvas.clientHeight * canvas.height / canvas.width;
    }

    function progress() {
        progressTarget = libNumChildren == 0 ? 0 : libNumLoaded / libNumChildren;
        progressValue += Math.min(Math.max(progressTarget - progressValue, 0), 100 * 1 / 3 * 1 / fps);
        if (preloadLoaded == false) progressValue = progressTarget;
        return progressValue
    }
    var testPing = 100;

    function toServer(message) {
        if (online) {
            client.send(message)
        } else setTimeout(fromUser, testPing / 2, {
            uid: uid
        }, message);
    }

    function toUser(user, message) {
        setTimeout(fromServer, testPing / 2, message);
    }
    var client;

    function socketInit() {
        var HOST = location.origin.replace(/^http/, 'ws')
        client = new WebSocket(HOST);
        client.onmessage = function(message) {
            fromServer(message.data);
        };
    }
    var online = false;
    var main = new createjs.Container();
    var gameLoaded = false;
    var preloadLoaded = false;
    var bg = new createjs.Shape();
    var preload = new createjs.Container();
    var preloadBar = new createjs.Shape();
    var fps = 20;
    var sec
    var ms
    var shadowLayer = new createjs.Container();
    var roadLayer = new createjs.Container();
    var layer = new createjs.Shape();
    var layer2 = new createjs.Shape();
    var layerJoystick = new createjs.Shape();
    var deathCircle = new createjs.Shape();
    var botBalanceData = null;
    var deathCircleR = 13 * 9 / 2;
    var deathCircleR0 = 13 * 9 / 2;
    var deathCircleR1 = 8;
    var deathCircleTimer = 0;
    var deathCircleTimerMax = 50;
    var touches = [];
    var joystickMove = {};
    var joystickAim = {};
    var spriteAim = new createjs.Container();
    var spriteMove = new createjs.Container();
    var bitmapFill;
    var bitmapFillMatrix;
    var level = 0;
    var imagePacker;
    var timeShift = 1;
    var scores = 0;
    var gameTimer = 0;
    var bestScores = 0;
    var gameState = "title";
    var startTimer = 0;
    var startPos = null;
    var titleTF
    var sponsor
    var soundOn
    var soundOff
    var email
    var scoresTF
    var bulletsTF
    var scoresMenuTF
    var bestScoresMenuTF
    var box = null;
    var botSortingIndex = 0;
    var myCar = null;
    var player = null;
    var effectList = [];
    var worldScale;
    var lib = {};
    var axis;
    var axis0;
    var ray;
    var cam;
    var camTarget;
    var camVel = new createjs.Point();
    var modelDataLib = {};
    var seed = 12343453;
    var g
    var map
    var roadMap
    var patternList;
    var floorList;
    var floorModelList = [];
    var bulletList = [];
    var moneyList = [];
    var batList = [];
    var shoots = [];
    var botTurningDelay = 0;
    var targetArrow;
    var music

    function random() {
        seed = seed * 16807 % 2147483647
        return (seed - 1) / 2147483646
    }

    function randomXY(x, y) {
        seed = ((x % 234723) + 23472332) * ((y % 562343) + 53456231);
        return random();
    }

    function mouseUp(e) {
        var id = e.hasOwnProperty("pointerID") ? e.pointerID : 0;
        for (var i = touches.length - 1; i >= 0; i--) {
            if (touches[i].id == id) {
                var joystick = null;
                if (joystickMove.touch == touches[i]) joystick = joystickMove;
                if (joystickAim.touch == touches[i]) joystick = joystickAim;
                if (joystick && joystick.t < 0.3) {
                    joystick.tap = true;
                    if (joystick == joystickAim && botList[0] && botList[0].bulletDelay == 0) {
                        shoots = [botList[0].rad + angle1(botList[0].rad, Math.atan2(joystickVector(true).y, joystickVector(true).x)) * joystickVector(true).length]
                    }
                }
                if (joystick) joystick.touch = null;
                touches = touches.slice(0, i).concat(touches.slice(i + 1));
            }
        }
    }

    function mouseMove(e) {
        var id = e.hasOwnProperty("pointerID") ? e.pointerID : 0;
        for (var i = touches.length - 1; i >= 0; i--)
            if (touches[i].id == id) {
                touches[i].p.x = touchPoint(e).x * aspect();
                touches[i].p.y = touchPoint(e).y;
            }
    }

    function soundToggle() {
        soundOn.visible = !soundOn.visible;
        soundOff.visible = !soundOff.visible;
    }

    function mouseDown(e) {
        var m = getTransformMatrix(sponsor).clone();
        m.invert();
        var p = transformPoint(m, scenePoint());
        if (gameState != "game")
            if (p.x > 0 && p.x < sponsor.getChildAt(0).width && p.y > 0 && p.y < sponsor.getChildAt(0).height) {
                window.open("http://www.localhost", '_blank');
                return;
            }
        m = getTransformMatrix(soundOn).clone();
        m.invert();
        p = transformPoint(m, scenePoint());
        if (p.x > 0 && p.x < sponsor.getChildAt(0).width && p.y > 0 && p.y < sponsor.getChildAt(0).height) {
            soundToggle();
            return;
        }
        if (gameState == "title") {
            gameState = "game";
            newGame();
        }
        var id = e.hasOwnProperty("pointerID") ? e.pointerID : 0;
        var touch = {
            id: id,
            p: new createjs.Point(touchPoint(e).x * aspect(), touchPoint(e).y)
        };
        touches.push(touch);
        var joystick = touch.p.x < sceneSize().x / 2 ? joystickMove : joystickAim;
        if (!isMobile.any) joystick = joystickAim;
        if (!joystick.touch) {
            joystick.touch = touch;
            joystick.p = joystickPoint(touch.p);
            joystick.p0 = joystickPoint(touch.p);
            if (joystick == joystickAim) {}
            joystick.t = 0;
        }
    }

    function init() {
        //LaggedApiInit();
        clear(bg);
        beginFill(bg, "#cccccc");
        bg.graphics.drawRect(0, 0, 100, 100);
        endFill(bg);
        scene.addChild(bg);
        scene.addChild(roadLayer);
        scene.addChild(shadowLayer);
        scene.addChild(main);
        scene.addChild(layer2);
        scene.addChild(layerJoystick);
        titleTF = new createjs.Text("NGƯỜI QUE\nBẮN SÚNG\nSINH TỒN", "bold 12px Arial", "#ffffff");
        titleTF.name = "12";
        titleTF.textAlign = "center", scoresTF = new createjs.Text("a", "bold 10px Arial", "#ffffff");
        scoresTF.name = "10";
        bulletsTF = new createjs.Text("a", "bold 10px Arial", "#ffffff");
        bulletsTF.name = "10";
        scoresMenuTF = new createjs.Text("ab", "bold 15px Arial", "#ffffff");
        scoresMenuTF.name = "15";
        scoresMenuTF.textAlign = "center", bestScoresMenuTF = new createjs.Text("abc", "bold 10px Arial", "#ffffff");
        bestScoresMenuTF.name = "10";
        bestScoresMenuTF.textAlign = "center", loadBitmap("logo-ship.png");
    }

    function scenePoint() {
        return new createjs.Point(stagePoint().x * aspect(), stagePoint().y)
    }

    function sceneSize() {
        return new createjs.Point(stageWidth * aspect(), stageHeight)
    }

    function angle0(a, b) {
        return Math.atan2(a.x * b.y - a.y * b.x, a.x * b.x + a.y * b.y);
    }

    function angle1(a, b) {
        return angle0(new createjs.Point(Math.cos(a), Math.sin(a)), new createjs.Point(Math.cos(b), Math.sin(b)))
    }

    function vp(v) {
        return new createjs.Point(v.x, v.y)
    }

    function vp2(v) {
        return new createjs.Point(v.x, v.y - v.z)
    }

    function pv(p) {
        return new createjs.Vector3D(p.x, p.y, 0)
    }

    function truncate1(v, max) {
        return Math.min(Math.max(v, -max), max)
    };

    function truncate2(v, max) {
        v = v.clone();
        v.normalize(Math.min(v.length, max));
        return v
    };

    function truncate3(v, max) {
        v = v.clone();
        var s = v.length;
        v.normalize();
        v.scaleBy(Math.min(s, max));
        return v
    };

    function gameInit() {
        soundFootstep1 = audio.sound.play("footstep1");
        audio.sound.volume(0, soundFootstep1);
        streetSound = audio.sound.play("nature");
        trafficSound = audio.sound.play("engine");
        audio.sound.volume(0.7, streetSound);
        audio.sound.volume(0, trafficSound);
        sponsor = new createjs.Container().addChild(createBitmap("logo.png")).parent;
        soundOn = new createjs.Container().addChild(createBitmap("soundOn.png")).parent;
        soundOff = new createjs.Container().addChild(createBitmap("soundOff.png")).parent;
        soundOff.visible = false;
        email = new createjs.Container().addChild(createBitmap("email.png")).parent;
        axis = new createjs.Matrix3D();
        axis.appendScale(1, -1, 1);
        axis.appendRotation(15, createjs.Vector3D.Z_AXIS);
        axis.appendRotation(45, createjs.Vector3D.X_AXIS);
        axis0 = axis.clone();
        axis0.invert();
        ray = axis0.transformVector(new createjs.Vector3D(0, 0, 1));
        modelDataLib = {
            "car2": [
                [
                    [
                        [],
                        [
                            [1, [1, 0, 0, 0, 0, 1, 0, 0.05, 0, 0, 1, 0, 0, 0, 0, 1], "border"],
                            [2, [1, 0, 0, 0, 0, 1, 0, -0.09, 0, 0, 1, 0, 0, 0, 0, 1], "instance_1"]
                        ], "car2"
                    ],
                    [
                        [
                            [
                                [0, -0.04935, 1.26904, 0, -0.04935, 0, 2.78999, -0.04935, 1.26904, 2.78999, -0.04935, 0, 2.88999, 0.705, 0, 2.88999, 0.705, 1.26904, 2.78999, 1.45934, 1.26904, 0, 1.45934, 1.26904, 0, 1.45934, 0, 2.78999, 1.45934, 0]
                            ]
                        ],
                        [], "border1"
                    ],
                    [
                        [
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            []
                        ],
                        [
                            [3, [0, -0.7, 0, 0.67594, 0.7, 0, 0, -0.00001, 0, 0, 0.7, 0, 0, 0, 0, 1], "instance_2"],
                            [3, [0, -0.7, 0, 2.41594, 0.7, 0, 0, -0.00001, 0, 0, 0.7, 0, 0, 0, 0, 1], "instance_3"],
                            [4, [0, -0.7, 0, 0.67594, -0.7, 0, 0, 1.68999, 0, 0, 0.7, 0, 0, 0, 0, 1], "instance_4"],
                            [4, [0, -0.7, 0, 2.41594, -0.7, 0, 0, 1.68999, 0, 0, 0.7, 0, 0, 0, 0, 1], "instance_5"]
                        ], "Component_51"
                    ],
                    [
                        [
                            [],
                            []
                        ],
                        [], "Group_1"
                    ],
                    [
                        [
                            [],
                            []
                        ],
                        [], "Group_1"
                    ]
                ],
                [
                    [
                        [16777215, [0, 1, 2, 3],
                            [1, 70.00001, 0, 1, 68.99998, 0, 0, 68.99998, 0, 0, 70.00001, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                            [35.87094, 31.9026, 0, 32.00725, 30.86732, 0, 32.00725, 30.86732, 3.99999, 35.87094, 31.9026, 3.99999, 35.87094, 31.9026, 0, 36.90622, 28.0389, 0, 33.0425, 27.00362, 0, 32.00725, 30.86732, 0, 32.00725, 30.86732, 0, 33.0425, 27.00362, 0, 32.00725, 30.86732, 3.99999, 36.90622, 28.0389, 0, 35.87094, 31.9026, 3.99999, 32.00725, 30.86732, 3.99999, 33.0425, 27.00362, 0, 35.87094, 31.9026, 0, 35.87094, 31.9026, 3.99999, 36.90622, 28.0389, 0],
                            [-0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.02453, 0.00657, 0, 0.02453, 0.00657, 0, 0.02453, 0.00657, 0],
                            [4, 4, 3, 4, 3]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [70.00001, 70.00001, 0, 70.00001, 68.99998, 0, 68.99998, 68.99998, 0, 68.99998, 70.00001, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [70.00001, 1, 0, 70.00001, 0, 0, 68.99998, 0, 0, 68.99998, 1, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [
                            [0, 68.99998, 0, 0, 1, 0]
                        ],
                        [
                            [1, 0, 0, 68.99998, 0, 0]
                        ],
                        [
                            [70.00001, 1, 0, 70.00001, 68.99998, 0]
                        ],
                        [
                            [68.99998, 70.00001, 0, 1, 70.00001, 0]
                        ]
                    ],
                    [
                        [0, [1, 0, 0, 16.75833, 0, 1, 0, 34.54412, 0, 0, 1, 0, 0, 0, 0, 1], "instance_0"],
                        [0, [0.8660254, 0.5, 0, 23.20748, -0.5, 0.8660254, 0, 39.90428, 0, 0, 1, 0, 0, 0, 0, 1], "instance_6"],
                        [0, [0.5, 0.8660254, 0, 31.4727, -0.8660254, 0.5, 0, 41.32176, 0, 0, 1, 0, 0, 0, 0, 1], "instance_7"],
                        [0, [-1.608123e-16, 1, 0, 39.33931, -1, -1.608123e-16, 0, 38.41671, 0, 0, 1, 0, 0, 0, 0, 1], "instance_8"],
                        [0, [-0.5, 0.8660254, 0, 44.6995, -0.8660254, -0.5, 0, 31.96757, 0, 0, 1, 0, 0, 0, 0, 1], "instance_9"],
                        [0, [-0.8660254, 0.5, 0, 46.11697, -0.5, -0.8660254, 0, 23.70235, 0, 0, 1, 0, 0, 0, 0, 1], "instance_10"],
                        [0, [-1, -7.657137e-16, 0, 43.21192, 7.657137e-16, -1, 0, 15.83573, 0, 0, 1, 0, 0, 0, 0, 1], "instance_11"],
                        [0, [-0.8660254, -0.5, 0, 36.76276, 0.5, -0.8660254, 0, 10.47556, 0, 0, 1, 0, 0, 0, 0, 1], "instance_12"],
                        [0, [-0.5, -0.8660254, 0, 28.49755, 0.8660254, -0.5, 0, 9.05809, 0, 0, 1, 0, 0, 0, 0, 1], "instance_13"],
                        [0, [1.59266e-15, -1, 0, 20.63093, 1, 1.59266e-15, 0, 11.96313, 0, 0, 1, 0, 0, 0, 0, 1], "instance_14"],
                        [0, [0.5, -0.8660254, 0, 15.27075, 0.8660254, 0.5, 0, 18.41228, 0, 0, 1, 0, 0, 0, 0, 1], "instance_15"],
                        [0, [0.8660254, -0.5, 0, 13.85329, 0.5, 0.8660254, 0, 26.67749, 0, 0, 1, 0, 0, 0, 0, 1], "instance_16"]
                    ], "SketchUp"
                ]
            ],
            "house6": [
                [
                    [
                        [],
                        [
                            [1, [0.87, 0, 0, 2.8971, 0, 0.87, 0, 2.74873, 0, 0, 0.87, 0.61299, 0, 0, 0, 1], "instance_1"],
                            [1, [-0.87, -1.065443e-16, 0, 0.13049, 1.065443e-16, -0.87, 0, 4.05466, 0, 0, 0.87, 0.61299, 0, 0, 0, 1], "instance_2"],
                            [1, [0.87, 0, 0, 2.8971, 0, 0.87, 0, 0.99133, 0, 0, 0.87, 3.64929, 0, 0, 0, 1], "instance_3"],
                            [1, [-0.87, -1.065443e-16, 0, 0.13049, 1.065443e-16, -0.87, 0, 4.05466, 0, 0, 0.87, 3.64929, 0, 0, 0, 1], "instance_4"],
                            [1, [-0.87, -1.065443e-16, 0, 0.13049, 1.065443e-16, -0.87, 0, 2.29726, 0, 0, 0.87, 3.64929, 0, 0, 0, 1], "instance_5"],
                            [1, [-0.87, -1.065443e-16, 0, 0.13049, 1.065443e-16, -0.87, 0, 2.29726, 0, 0, 0.87, 0.61299, 0, 0, 0, 1], "instance_6"],
                            [1, [0.87, 0, 0, 2.8971, 0, 0.87, 0, 0.99133, 0, 0, 1.106783, 0, 0, 0, 0, 1], "instance_7"],
                            [2, [0.87, 0, 0, 0.13049, 0, 0.87, 0, 0.16529, 0, 0, 0.87, 0, 0, 0, 0, 1], "instance_8"],
                            [3, [6.123234000000001e-17, -1, 0, 3.91694, 1, 6.123234000000001e-17, 0, 0.16529, 0, 0, 1, 2.29479, 0, 0, 0, 1], "instance_9"],
                            [1, [0.87, 0, 0, 2.8971, 0, 0.87, 0, 2.74873, 0, 0, 0.87, 3.64929, 0, 0, 0, 1], "instance_10"],
                            [4, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], "border"]
                        ], "house6"
                    ],
                    [
                        [
                            [],
                            []
                        ],
                        [], "Component_21"
                    ],
                    [
                        [
                            [],
                            [],
                            []
                        ],
                        [], "Component_19"
                    ],
                    [
                        [
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            []
                        ],
                        [], "Component_29"
                    ],
                    [
                        [
                            [
                                [0, 0, 7.77536, 3.0885, 0, 7.77536, 0, 5.12429, 7.77536, 0, 5.12429, 0, 3.0885, 5.12429, 0, 3.0885, 0, 0, 0, 0, 0, 3.0885, 5.12429, 7.77536]
                            ]
                        ],
                        [], "Component_32"
                    ]
                ],
                [
                    [
                        [16777215, [0, 1, 2, 3],
                            [1, 70.00001, 0, 1, 68.99998, 0, 0, 68.99998, 0, 0, 70.00001, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                            [35.87094, 31.9026, 0, 32.00725, 30.86732, 0, 32.00725, 30.86732, 3.99999, 35.87094, 31.9026, 3.99999, 35.87094, 31.9026, 0, 36.90622, 28.0389, 0, 33.0425, 27.00362, 0, 32.00725, 30.86732, 0, 32.00725, 30.86732, 0, 33.0425, 27.00362, 0, 32.00725, 30.86732, 3.99999, 36.90622, 28.0389, 0, 35.87094, 31.9026, 3.99999, 32.00725, 30.86732, 3.99999, 33.0425, 27.00362, 0, 35.87094, 31.9026, 0, 35.87094, 31.9026, 3.99999, 36.90622, 28.0389, 0],
                            [-0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.02453, 0.00657, 0, 0.02453, 0.00657, 0, 0.02453, 0.00657, 0],
                            [4, 4, 3, 4, 3]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [70.00001, 70.00001, 0, 70.00001, 68.99998, 0, 68.99998, 68.99998, 0, 68.99998, 70.00001, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [70.00001, 1, 0, 70.00001, 0, 0, 68.99998, 0, 0, 68.99998, 1, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [
                            [0, 68.99998, 0, 0, 1, 0]
                        ],
                        [
                            [1, 0, 0, 68.99998, 0, 0]
                        ],
                        [
                            [70.00001, 1, 0, 70.00001, 68.99998, 0]
                        ],
                        [
                            [68.99998, 70.00001, 0, 1, 70.00001, 0]
                        ]
                    ],
                    [
                        [0, [6.123234000000001e-17, 1, 0, 45.06378, -1, 6.123234000000001e-17, 0, 45.78131, 0, 0, 1, 0, 0, 0, 0, 1], "instance_0"],
                        [0, [1, 0, 0, 16.13833, 0, 1, 0, 34.54412, 0, 0, 1, 0, 0, 0, 0, 1], "instance_11"],
                        [0, [-1, 1.224647e-16, 0, 56.301, -1.224647e-16, -1, 0, 16.85585, 0, 0, 1, 0, 0, 0, 0, 1], "instance_12"],
                        [0, [-1.83697e-16, -1, 0, 27.37553, 1, -1.83697e-16, 0, 5.61866, 0, 0, 1, 0, 0, 0, 0, 1], "instance_13"]
                    ], "SketchUp"
                ]
            ],
            "road4": [
                [
                    [
                        [],
                        [
                            [1, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.2, 0, 0, 0, 1], "instance_1"],
                            [2, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.2, 0, 0, 0, 1], "border"]
                        ], "road4"
                    ],
                    [
                        [
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            []
                        ],
                        [], "Component_85"
                    ],
                    [
                        [
                            [
                                [8.99999, 8.99999, 0.2, 8.99999, 8.99999, 0, 8.99999, 0, 0.2, 0, 0, 0.2, 0, 0, 0, 0, 8.99999, 0, 0, 8.99999, 0.2, 8.99999, 0, 0]
                            ]
                        ],
                        [], "Component_67"
                    ]
                ],
                [
                    [
                        [16777215, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                            [54.47954, -47.41213, 0, 50.61584, -48.4474, 0, 50.61584, -48.4474, 3.99999, 54.47954, -47.41213, 3.99999, 54.47954, -47.41213, 0, 55.51482, -51.27582, 0, 51.65112, -52.3111, 0, 50.61584, -48.4474, 0, 50.61584, -48.4474, 0, 51.65112, -52.3111, 0, 50.61584, -48.4474, 3.99999, 55.51482, -51.27582, 0, 54.47954, -47.41213, 3.99999, 50.61584, -48.4474, 3.99999, 51.65112, -52.3111, 0, 54.47954, -47.41213, 0, 54.47954, -47.41213, 3.99999, 55.51482, -51.27582, 0],
                            [-0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.02453, 0.00657, 0, 0.02453, 0.00657, 0, 0.02453, 0.00657, 0],
                            [4, 4, 3, 4, 3]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [29.6086, -72.24474, 0, 29.6086, -73.24474, 0, 28.6086, -73.24474, 0, 28.6086, -72.24474, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [29.6086, -23.24473, 0, 29.6086, -24.24473, 0, 28.6086, -24.24473, 0, 28.6086, -23.24473, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [78.6086, -72.24474, 0, 78.6086, -73.24474, 0, 77.6086, -73.24474, 0, 77.6086, -72.24474, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [78.6086, -23.24473, 0, 78.6086, -24.24473, 0, 77.6086, -24.24473, 0, 77.6086, -23.24473, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [
                            [28.6086, -24.24473, 0, 28.6086, -72.24474, 0]
                        ],
                        [
                            [77.6086, -23.24473, 0, 29.6086, -23.24473, 0]
                        ],
                        [
                            [78.6086, -72.24474, 0, 78.6086, -24.24473, 0]
                        ],
                        [
                            [29.6086, -73.24474, 0, 77.6086, -73.24474, 0]
                        ]
                    ],
                    [
                        [0, [1, 0, 0, 33.25291, 0, 1, 0, -36.74192, 0, 0, 1, 0.2, 0, 0, 0, 1], "instance_0"],
                        [0, [6.123234000000001e-17, 1, 0, 64.10091, -1, 6.123234000000001e-17, 0, -30.68887, 0, 0, 1, 0.2, 0, 0, 0, 1], "instance_2"],
                        [0, [-1, 1.224647e-16, 0, 70.15395, -1.224647e-16, -1, 0, -61.53686, 0, 0, 1, 0.2, 0, 0, 0, 1], "instance_3"],
                        [0, [-1.83697e-16, -1, 0, 39.30596, 1, -1.83697e-16, 0, -67.58991, 0, 0, 1, 0.2, 0, 0, 0, 1], "instance_4"]
                    ], "SketchUp"
                ]
            ],
            "tree2": [
                [
                    [
                        [],
                        [
                            [1, [1.09, 0, 0, 0, 0, 1.09, 0, 0, 0, 0, 1.09, 0, 0, 0, 0, 1], "instance_1"],
                            [2, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], "border"]
                        ], "tree2"
                    ],
                    [
                        [
                            [],
                            []
                        ],
                        [], "Component_39"
                    ],
                    [
                        [
                            [
                                [0, 1.55215, 5.96432, 0, 0, 5.96432, 0, 1.55215, 0, 1.55215, 1.55215, 0, 1.55215, 0, 0, 1.55215, 0, 5.96432, 1.55215, 1.55215, 5.96432, 0, 0, 0]
                            ]
                        ],
                        [], "Component_43"
                    ]
                ],
                [
                    [
                        [16777215, [0, 1, 2, 3],
                            [1, 70.00001, 0, 1, 68.99998, 0, 0, 68.99998, 0, 0, 70.00001, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                            [35.87094, 31.9026, 0, 32.00725, 30.86732, 0, 32.00725, 30.86732, 3.99999, 35.87094, 31.9026, 3.99999, 35.87094, 31.9026, 0, 36.90622, 28.0389, 0, 33.0425, 27.00362, 0, 32.00725, 30.86732, 0, 32.00725, 30.86732, 0, 33.0425, 27.00362, 0, 32.00725, 30.86732, 3.99999, 36.90622, 28.0389, 0, 35.87094, 31.9026, 3.99999, 32.00725, 30.86732, 3.99999, 33.0425, 27.00362, 0, 35.87094, 31.9026, 0, 35.87094, 31.9026, 3.99999, 36.90622, 28.0389, 0],
                            [-0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.02453, 0.00657, 0, 0.02453, 0.00657, 0, 0.02453, 0.00657, 0],
                            [4, 4, 3, 4, 3]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [70.00001, 70.00001, 0, 70.00001, 68.99998, 0, 68.99998, 68.99998, 0, 68.99998, 70.00001, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [70.00001, 1, 0, 70.00001, 0, 0, 68.99998, 0, 0, 68.99998, 1, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [
                            [0, 68.99998, 0, 0, 1, 0]
                        ],
                        [
                            [1, 0, 0, 68.99998, 0, 0]
                        ],
                        [
                            [70.00001, 1, 0, 70.00001, 68.99998, 0]
                        ],
                        [
                            [68.99998, 70.00001, 0, 1, 70.00001, 0]
                        ]
                    ],
                    [
                        [0, [6.123234000000001e-17, 1, 0, 45.06378, -1, 6.123234000000001e-17, 0, 45.78131, 0, 0, 1, 0, 0, 0, 0, 1], "instance_0"],
                        [0, [1, 0, 0, 16.13833, 0, 1, 0, 34.54412, 0, 0, 1, 0, 0, 0, 0, 1], "instance_2"],
                        [0, [-1, 1.224647e-16, 0, 56.301, -1.224647e-16, -1, 0, 16.85585, 0, 0, 1, 0, 0, 0, 0, 1], "instance_3"],
                        [0, [-1.83697e-16, -1, 0, 27.37553, 1, -1.83697e-16, 0, 5.61866, 0, 0, 1, 0, 0, 0, 0, 1], "instance_4"]
                    ], "SketchUp"
                ]
            ],
            "house5": [
                [
                    [
                        [],
                        [
                            [1, [0.92, 0, 0, 4.13999, 0, 1.932, 0, 2.16612, 0, 0, 1.242, 0.64822, 0, 0, 0, 1], "instance_1"],
                            [1, [0.92, 0, 0, 4.13999, 0, 0.92, 0, 0.39788, 0, 0, 1.264023, 0, 0, 0, 0, 1], "instance_2"],
                            [2, [0.92, 0, 0, 0.4784, 0, 0.92, 0, 0.2852, 0, 0, 0.92, 0, 0, 0, 0, 1], "instance_3"],
                            [3, [-0.92, -2.501219e-16, 0, 0.4784, 1.126675e-16, -2.0424, 0, 4.59771, 0, 0, 0.92, 0.64822, 0, 0, 0, 1], "instance_4"],
                            [4, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], "border"]
                        ], "house5"
                    ],
                    [
                        [
                            [],
                            []
                        ],
                        [], "Component_21"
                    ],
                    [
                        [
                            [],
                            [],
                            []
                        ],
                        [], "Component_18"
                    ],
                    [
                        [
                            [],
                            []
                        ],
                        [], "Component_21"
                    ],
                    [
                        [
                            [
                                [0, 5.9432, 5.39782, 0, 0, 5.39782, 4.48039, 5.9432, 5.39782, 4.48039, 5.9432, 0, 0, 5.9432, 0, 0, 0, 0, 4.48039, 0, 0, 4.48039, 0, 5.39782]
                            ]
                        ],
                        [], "Component_37"
                    ]
                ],
                [
                    [
                        [16777215, [0, 1, 2, 3],
                            [1, 70.00001, 0, 1, 68.99998, 0, 0, 68.99998, 0, 0, 70.00001, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                            [35.87094, 31.9026, 0, 32.00725, 30.86732, 0, 32.00725, 30.86732, 3.99999, 35.87094, 31.9026, 3.99999, 35.87094, 31.9026, 0, 36.90622, 28.0389, 0, 33.0425, 27.00362, 0, 32.00725, 30.86732, 0, 32.00725, 30.86732, 0, 33.0425, 27.00362, 0, 32.00725, 30.86732, 3.99999, 36.90622, 28.0389, 0, 35.87094, 31.9026, 3.99999, 32.00725, 30.86732, 3.99999, 33.0425, 27.00362, 0, 35.87094, 31.9026, 0, 35.87094, 31.9026, 3.99999, 36.90622, 28.0389, 0],
                            [-0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.02453, 0.00657, 0, 0.02453, 0.00657, 0, 0.02453, 0.00657, 0],
                            [4, 4, 3, 4, 3]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [70.00001, 70.00001, 0, 70.00001, 68.99998, 0, 68.99998, 68.99998, 0, 68.99998, 70.00001, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [70.00001, 1, 0, 70.00001, 0, 0, 68.99998, 0, 0, 68.99998, 1, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [
                            [0, 68.99998, 0, 0, 1, 0]
                        ],
                        [
                            [1, 0, 0, 68.99998, 0, 0]
                        ],
                        [
                            [70.00001, 1, 0, 70.00001, 68.99998, 0]
                        ],
                        [
                            [68.99998, 70.00001, 0, 1, 70.00001, 0]
                        ]
                    ],
                    [
                        [0, [6.123234000000001e-17, 1, 0, 45.06378, -1, 6.123234000000001e-17, 0, 45.78131, 0, 0, 1, 0, 0, 0, 0, 1], "instance_0"],
                        [0, [1, 0, 0, 16.13833, 0, 1, 0, 34.54412, 0, 0, 1, 0, 0, 0, 0, 1], "instance_5"],
                        [0, [-1, 1.224647e-16, 0, 56.301, -1.224647e-16, -1, 0, 16.85585, 0, 0, 1, 0, 0, 0, 0, 1], "instance_6"],
                        [0, [-1.83697e-16, -1, 0, 27.37553, 1, -1.83697e-16, 0, 5.61866, 0, 0, 1, 0, 0, 0, 0, 1], "instance_7"]
                    ], "SketchUp"
                ]
            ],
            "car1": [
                [
                    [
                        [],
                        [
                            [1, [1, 0, 0, 0, 0, 1, 0, 0.05, 0, 0, 1, 0, 0, 0, 0, 1], "border"],
                            [2, [1, 0, 0, 0, 0, 1, 0, -0.09, 0, 0, 1, 0, 0, 0, 0, 1], "instance_1"]
                        ], "car1"
                    ],
                    [
                        [
                            [
                                [0, -0.04935, 1.26904, 0, -0.04935, 0, 2.78999, -0.04935, 1.26904, 2.78999, -0.04935, 0, 2.88999, 0.705, 0, 2.88999, 0.705, 1.26904, 2.78999, 1.45934, 1.26904, 0, 1.45934, 1.26904, 0, 1.45934, 0, 2.78999, 1.45934, 0]
                            ]
                        ],
                        [], "border1"
                    ],
                    [
                        [
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            []
                        ],
                        [
                            [3, [0, -0.7, 0, 0.67594, 0.7, 0, 0, -0.00001, 0, 0, 0.7, 0, 0, 0, 0, 1], "instance_2"],
                            [3, [0, -0.7, 0, 2.41594, 0.7, 0, 0, -0.00001, 0, 0, 0.7, 0, 0, 0, 0, 1], "instance_3"],
                            [4, [0, -0.7, 0, 0.67594, -0.7, 0, 0, 1.68999, 0, 0, 0.7, 0, 0, 0, 0, 1], "instance_4"],
                            [4, [0, -0.7, 0, 2.41594, -0.7, 0, 0, 1.68999, 0, 0, 0.7, 0, 0, 0, 0, 1], "instance_5"]
                        ], "Component_51"
                    ],
                    [
                        [
                            [],
                            []
                        ],
                        [], "Group_1"
                    ],
                    [
                        [
                            [],
                            []
                        ],
                        [], "Group_1"
                    ]
                ],
                [
                    [
                        [16777215, [0, 1, 2, 3],
                            [1, 70.00001, 0, 1, 68.99998, 0, 0, 68.99998, 0, 0, 70.00001, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                            [35.87094, 31.9026, 0, 32.00725, 30.86732, 0, 32.00725, 30.86732, 3.99999, 35.87094, 31.9026, 3.99999, 35.87094, 31.9026, 0, 36.90622, 28.0389, 0, 33.0425, 27.00362, 0, 32.00725, 30.86732, 0, 32.00725, 30.86732, 0, 33.0425, 27.00362, 0, 32.00725, 30.86732, 3.99999, 36.90622, 28.0389, 0, 35.87094, 31.9026, 3.99999, 32.00725, 30.86732, 3.99999, 33.0425, 27.00362, 0, 35.87094, 31.9026, 0, 35.87094, 31.9026, 3.99999, 36.90622, 28.0389, 0],
                            [-0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.02453, 0.00657, 0, 0.02453, 0.00657, 0, 0.02453, 0.00657, 0],
                            [4, 4, 3, 4, 3]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [70.00001, 70.00001, 0, 70.00001, 68.99998, 0, 68.99998, 68.99998, 0, 68.99998, 70.00001, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [70.00001, 1, 0, 70.00001, 0, 0, 68.99998, 0, 0, 68.99998, 1, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [
                            [0, 68.99998, 0, 0, 1, 0]
                        ],
                        [
                            [1, 0, 0, 68.99998, 0, 0]
                        ],
                        [
                            [70.00001, 1, 0, 70.00001, 68.99998, 0]
                        ],
                        [
                            [68.99998, 70.00001, 0, 1, 70.00001, 0]
                        ]
                    ],
                    [
                        [0, [1, 0, 0, 16.75833, 0, 1, 0, 34.54412, 0, 0, 1, 0, 0, 0, 0, 1], "instance_0"],
                        [0, [0.8660254, 0.5, 0, 23.20748, -0.5, 0.8660254, 0, 39.90428, 0, 0, 1, 0, 0, 0, 0, 1], "instance_6"],
                        [0, [0.5, 0.8660254, 0, 31.4727, -0.8660254, 0.5, 0, 41.32176, 0, 0, 1, 0, 0, 0, 0, 1], "instance_7"],
                        [0, [-1.608123e-16, 1, 0, 39.33931, -1, -1.608123e-16, 0, 38.41671, 0, 0, 1, 0, 0, 0, 0, 1], "instance_8"],
                        [0, [-0.5, 0.8660254, 0, 44.6995, -0.8660254, -0.5, 0, 31.96757, 0, 0, 1, 0, 0, 0, 0, 1], "instance_9"],
                        [0, [-0.8660254, 0.5, 0, 46.11697, -0.5, -0.8660254, 0, 23.70235, 0, 0, 1, 0, 0, 0, 0, 1], "instance_10"],
                        [0, [-1, -7.657137e-16, 0, 43.21192, 7.657137e-16, -1, 0, 15.83573, 0, 0, 1, 0, 0, 0, 0, 1], "instance_11"],
                        [0, [-0.8660254, -0.5, 0, 36.76276, 0.5, -0.8660254, 0, 10.47556, 0, 0, 1, 0, 0, 0, 0, 1], "instance_12"],
                        [0, [-0.5, -0.8660254, 0, 28.49755, 0.8660254, -0.5, 0, 9.05809, 0, 0, 1, 0, 0, 0, 0, 1], "instance_13"],
                        [0, [1.59266e-15, -1, 0, 20.63093, 1, 1.59266e-15, 0, 11.96313, 0, 0, 1, 0, 0, 0, 0, 1], "instance_14"],
                        [0, [0.5, -0.8660254, 0, 15.27075, 0.8660254, 0.5, 0, 18.41228, 0, 0, 1, 0, 0, 0, 0, 1], "instance_15"],
                        [0, [0.8660254, -0.5, 0, 13.85329, 0.5, 0.8660254, 0, 26.67749, 0, 0, 1, 0, 0, 0, 0, 1], "instance_16"]
                    ], "SketchUp"
                ]
            ],
            "cells": [
                [
                    [
                        [],
                        [
                            [1, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], "instance_1"],
                            [2, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.2, 0, 0, 0, 1], "border"]
                        ], "pavement1"
                    ],
                    [
                        [
                            []
                        ],
                        [], "Component_48"
                    ],
                    [
                        [
                            []
                        ],
                        [], "Component_49"
                    ],
                    [
                        [],
                        [
                            [4, [1, 0, 0, 2.00578, 0, 1, 0, 1.2819, 0, 0, 1, 0, 0, 0, 0, 1], "instance_3"],
                            [0, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], "instance_23"]
                        ], "cell1"
                    ],
                    [
                        [],
                        [
                            [5, [0.85, 0, 0, 6.07736, 0, 0.85, 0, 0.68849, 0, 0, 0.85, 6.7869, 0, 0, 0, 1], "instance_4"],
                            [6, [-0.85, -1.04095e-16, 0, 0.86686, 1.04095e-16, -0.85, 0, 5.4825, 0, 0, 0.85, 3.6929, 0, 0, 0, 1], "instance_5"],
                            [5, [0.85, 0, 0, 6.07736, 0, 0.85, 0, 2.40549, 0, 0, 0.85, 3.6929, 0, 0, 0, 1], "instance_6"],
                            [6, [-0.85, -1.04095e-16, 0, 0.86686, 1.04095e-16, -0.85, 0, 2.0485, 0, 0, 0.85, 3.6929, 0, 0, 0, 1], "instance_7"],
                            [5, [0.85, 0, 0, 6.07736, 0, 0.85, 0, 0.68849, 0, 0, 0.85, 0.5989, 0, 0, 0, 1], "instance_8"],
                            [7, [-0.85, 0, 0, 6.24736, 0, 0.85, 0, 2.40549, 0, 0, 1.189474, 0, 0, 0, 0, 1], "instance_9"],
                            [6, [-0.85, -1.04095e-16, 0, 0.86686, 1.04095e-16, -0.85, 0, 5.4825, 0, 0, 0.85, 0.5989, 0, 0, 0, 1], "instance_10"],
                            [8, [0.85, 0, 0, 0.86686, 0, 0.85, 0, 0.16999, 0, 0, 0.85, 0, 0, 0, 0, 1], "instance_11"],
                            [6, [-0.85, -1.04095e-16, 0, 0.86686, 1.04095e-16, -0.85, 0, 5.4825, 0, 0, 0.85, 6.7869, 0, 0, 0, 1], "instance_12"],
                            [6, [-0.85, -1.04095e-16, 0, 0.86686, 1.04095e-16, -0.85, 0, 2.0485, 0, 0, 0.85, 6.7869, 0, 0, 0, 1], "instance_13"],
                            [5, [0.85, 0, 0, 6.07736, 0, 0.85, 0, 4.12249, 0, 0, 0.85, 3.6929, 0, 0, 0, 1], "instance_14"],
                            [6, [-0.85, -1.04095e-16, 0, 0.86686, 1.04095e-16, -0.85, 0, 3.76549, 0, 0, 0.85, 6.7869, 0, 0, 0, 1], "instance_15"],
                            [6, [-0.85, -1.04095e-16, 0, 0.86686, 1.04095e-16, -0.85, 0, 3.76549, 0, 0, 0.85, 3.6929, 0, 0, 0, 1], "instance_16"],
                            [6, [-0.85, -1.04095e-16, 0, 0.86686, 1.04095e-16, -0.85, 0, 2.0485, 0, 0, 0.85, 0.5989, 0, 0, 0, 1], "instance_17"],
                            [5, [0.85, 0, 0, 6.07736, 0, 0.85, 0, 0.68849, 0, 0, 0.85, 3.6929, 0, 0, 0, 1], "instance_18"],
                            [6, [-0.85, -1.04095e-16, 0, 0.86686, 1.04095e-16, -0.85, 0, 3.76549, 0, 0, 0.85, 0.5989, 0, 0, 0, 1], "instance_19"],
                            [9, [1, 0, 0, 0.69686, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], "border"],
                            [5, [0.85, 0, 0, 6.07736, 0, 0.85, 0, 4.12249, 0, 0, 0.85, 0.5989, 0, 0, 0, 1], "instance_20"],
                            [5, [0.85, 0, 0, 6.07736, 0, 0.85, 0, 4.12249, 0, 0, 0.85, 6.7869, 0, 0, 0, 1], "instance_21"],
                            [5, [0.85, 0, 0, 6.07736, 0, 0.85, 0, 2.40549, 0, 0, 0.85, 6.7869, 0, 0, 0, 1], "instance_22"]
                        ], "house1"
                    ],
                    [
                        [
                            [],
                            []
                        ],
                        [], "Component_21"
                    ],
                    [
                        [
                            [],
                            []
                        ],
                        [], "Component_21"
                    ],
                    [
                        [
                            [],
                            []
                        ],
                        [], "Component_21"
                    ],
                    [
                        [
                            [],
                            [],
                            []
                        ],
                        [], "Component_14"
                    ],
                    [
                        [
                            []
                        ],
                        [], "Component_36"
                    ],
                    [
                        [],
                        [
                            [11, [1, 0, 0, 3.09253, 0, 1, 0, 1.77322, 0, 0, 1, 0, 0, 0, 0, 1], "instance_25"],
                            [0, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], "instance_35"]
                        ], "cell2"
                    ],
                    [
                        [],
                        [
                            [6, [-0.85, -1.04095e-16, 0, 0.34, 1.04095e-16, -0.85, 0, 2.68604, 0, 0, 0.85, 0.5989, 0, 0, 0, 1], "instance_26"],
                            [6, [-0.85, -1.04095e-16, 0, 0.34, 1.04095e-16, -0.85, 0, 4.40304, 0, 0, 0.85, 0.5989, 0, 0, 0, 1], "instance_27"],
                            [6, [-0.85, -1.04095e-16, 0, 0.34, 1.04095e-16, -0.85, 0, 2.68604, 0, 0, 0.85, 3.5654, 0, 0, 0, 1], "instance_28"],
                            [5, [0.85, 0, 0, 4.13949, 0, 0.85, 0, 0.96895, 0, 0, 0.85, 3.6504, 0, 0, 0, 1], "instance_29"],
                            [5, [0.85, 0, 0, 4.13949, 0, 0.85, 0, 3.03445, 0, 0, 0.85, 3.6504, 0, 0, 0, 1], "instance_30"],
                            [5, [0.85, 0, 0, 4.13949, 0, 0.85, 0, 0.96895, 0, 0, 0.85, 0.5989, 0, 0, 0, 1], "instance_31"],
                            [6, [-0.85, -1.04095e-16, 0, 0.34, 1.04095e-16, -0.85, 0, 4.40304, 0, 0, 0.85, 3.5654, 0, 0, 0, 1], "instance_32"],
                            [12, [0.85, 0, 0, 0.34, 0, 0.85, 0, 0.16999, 0, 0, 0.85, 0, 0, 0, 0, 1], "instance_33"],
                            [5, [0.85, 0, 0, 4.13949, 0, 0.85, 0, 3.03445, 0, 0, 1.167847, 0, 0, 0, 0, 1], "instance_34"],
                            [13, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], "border"]
                        ], "house2"
                    ],
                    [
                        [
                            [],
                            [],
                            []
                        ],
                        [], "Component_15"
                    ],
                    [
                        [
                            []
                        ],
                        [], "Component_35"
                    ],
                    [
                        [],
                        [
                            [15, [1, 0, 0, 3.42176, 0, 1, 0, 1.23404, 0, 0, 1, 0, 0, 0, 0, 1], "instance_37"],
                            [20, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], "instance_48"],
                            [23, [1, 0, 0, 1.15746, 0, 1, 0, 5.57615, 0, 0, 1, 0, 0, 0, 0, 1], "instance_50"]
                        ], "cell3"
                    ],
                    [
                        [],
                        [
                            [16, [1, 0, 0, 0.69145, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], "border"],
                            [5, [0.91, 0, 0, 4.35875, 0, 0.91, 0, 2.984, 0, 0, 0.91, 3.81708, 0, 0, 0, 1], "instance_38"],
                            [5, [0.91, 0, 0, 4.35875, 0, 0.91, 0, 1.1458, 0, 0, 0.91, 0.64118, 0, 0, 0, 1], "instance_39"],
                            [17, [-0.91, -1.114429e-16, 0, 0.92805, 1.114429e-16, -0.91, 0, 2.33949, 0, 0, 0.91, 0.64118, 0, 0, 0, 1], "instance_40"],
                            [17, [-0.91, -1.114429e-16, 0, 0.92805, 1.114429e-16, -0.91, 0, 2.33949, 0, 0, 0.91, 3.81708, 0, 0, 0, 1], "instance_41"],
                            [5, [0.91, 0, 0, 4.35875, 0, 0.91, 0, 1.1458, 0, 0, 0.91, 3.81708, 0, 0, 0, 1], "instance_42"],
                            [17, [-0.91, -1.114429e-16, 0, 0.92805, 1.114429e-16, -0.91, 0, 4.17769, 0, 0, 0.91, 3.81708, 0, 0, 0, 1], "instance_43"],
                            [17, [-0.91, -1.114429e-16, 0, 0.92805, 1.114429e-16, -0.91, 0, 4.17769, 0, 0, 0.91, 0.64118, 0, 0, 0, 1], "instance_44"],
                            [18, [0.91, 0, 0, 0.92805, 0, 0.91, 0, 0.24569, 0, 0, 0.91, 0, 0, 0, 0, 1], "instance_45"],
                            [5, [0.91, 0, 0, 4.35875, 0, 0.91, 0, 2.984, 0, 0, 0.91, 0.64118, 0, 0, 0, 1], "instance_46"],
                            [19, [6.123234000000001e-17, -1, 0, 5.3786, 1, 6.123234000000001e-17, 0, 0.4222, 0, 0, 1, 2.31549, 0, 0, 0, 1], "instance_47"]
                        ], "house3"
                    ],
                    [
                        [
                            []
                        ],
                        [], "Component_34"
                    ],
                    [
                        [
                            [],
                            []
                        ],
                        [], "Component_21"
                    ],
                    [
                        [
                            [],
                            [],
                            []
                        ],
                        [], "Component_16"
                    ],
                    [
                        [
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            []
                        ],
                        [], "Component_29"
                    ],
                    [
                        [],
                        [
                            [21, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], "instance_49"],
                            [22, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.2, 0, 0, 0, 1], "border"]
                        ], "green"
                    ],
                    [
                        [
                            []
                        ],
                        [], "Component_46"
                    ],
                    [
                        [
                            []
                        ],
                        [], "Component_47"
                    ],
                    [
                        [],
                        [
                            [24, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], "border"],
                            [25, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], "instance_51"]
                        ], "tree1"
                    ],
                    [
                        [
                            []
                        ],
                        [], "Component_42"
                    ],
                    [
                        [
                            [],
                            []
                        ],
                        [], "Component_38"
                    ],
                    [
                        [],
                        [
                            [0, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], "instance_53"],
                            [27, [1, 0, 0, 2.19551, 0, 1, 0, 1.00689, 0, 0, 1, 0, 0, 0, 0, 1], "instance_54"]
                        ], "cell4"
                    ],
                    [
                        [],
                        [
                            [28, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], "border"],
                            [29, [0.7917, 0, 0, 0.26917, 0, 0.7917, 0, 0.35626, 0, 0, 0.7917, 0, 0, 0, 0, 1], "instance_55"],
                            [5, [0.7917, 0, 7.88757e-17, 5.09062, 0, 0.7917, 0, 1.07671, 6.334414e-17, 0, 1.09426, 0, 0, 0, 0, 1], "instance_56"],
                            [5, [0.7917, 0, 6.334414e-17, 5.09062, 0, 0.7917, 0, 2.67594, 6.334414e-17, 0, 0.878787, 0.55782, 0, 0, 0, 1], "instance_57"],
                            [30, [-0.7917, -9.695529000000001e-17, -6.334414e-17, 0.26917, 9.695529000000001e-17, -0.7917, 7.757418999999999e-33, 2.34343, 6.334414e-17, 0, 0.878787, 3.62479, 0, 0, 0, 1], "instance_58"],
                            [30, [-0.7917, -9.695529000000001e-17, -6.334414e-17, 0.26917, 9.695529000000001e-17, -0.7917, 7.757418999999999e-33, 5.54189, 6.334414e-17, 0, 0.878787, 0.55782, 0, 0, 0, 1], "instance_59"],
                            [5, [0.7917, 0, 6.334414e-17, 5.09062, 0, 0.7917, 0, 1.07671, 6.334414e-17, 0, 0.878787, 3.62479, 0, 0, 0, 1], "instance_60"],
                            [31, [6.845438000000001e-17, -0.7917, 0, 6.04846, 1.117945, 4.8477640000000007e-17, 0, 0.71949, 0, 0, 0.7917, 2.33643, 0, 0, 0, 1], "instance_61"],
                            [30, [-0.7917, -9.695529000000001e-17, -6.334414e-17, 0.26917, 9.695529000000001e-17, -0.7917, 7.757418999999999e-33, 2.34343, 6.334414e-17, 0, 0.878787, 0.55782, 0, 0, 0, 1], "instance_62"],
                            [5, [0.7917, 0, 6.334414e-17, 5.09062, 0, 0.7917, 0, 4.27518, 6.334414e-17, 0, 0.878787, 0.55782, 0, 0, 0, 1], "instance_63"],
                            [5, [0.7917, 0, 6.334414e-17, 5.09062, 0, 0.7917, 0, 4.27518, 6.334414e-17, 0, 0.878787, 3.62479, 0, 0, 0, 1], "instance_64"],
                            [30, [-0.7917, -9.695529000000001e-17, -6.334414e-17, 0.26917, 9.695529000000001e-17, -0.7917, 7.757418999999999e-33, 5.54189, 6.334414e-17, 0, 0.878787, 3.62479, 0, 0, 0, 1], "instance_65"],
                            [30, [-0.7917, -9.695529000000001e-17, -6.334414e-17, 0.26917, 9.695529000000001e-17, -0.7917, 7.757418999999999e-33, 3.94266, 6.334414e-17, 0, 0.878787, 0.55782, 0, 0, 0, 1], "instance_66"],
                            [30, [-0.7917, -9.695529000000001e-17, -6.334414e-17, 0.26917, 9.695529000000001e-17, -0.7917, 7.757418999999999e-33, 3.94266, 6.334414e-17, 0, 0.878787, 3.62479, 0, 0, 0, 1], "instance_67"],
                            [5, [0.7917, 0, 6.334414e-17, 5.09062, 0, 0.7917, 0, 2.67594, 6.334414e-17, 0, 0.878787, 3.62479, 0, 0, 0, 1], "instance_68"]
                        ], "house4"
                    ],
                    [
                        [
                            []
                        ],
                        [], "Component_33"
                    ],
                    [
                        [
                            [],
                            [],
                            []
                        ],
                        [], "Component_17"
                    ],
                    [
                        [
                            [],
                            []
                        ],
                        [], "Component_21"
                    ],
                    [
                        [
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            []
                        ],
                        [], "Component_30"
                    ],
                    [
                        [],
                        [
                            [0, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], "instance_70"],
                            [33, [1, 0, 0, 2.63646, 0, 1, 0, 1.50612, 0, 0, 1, 0, 0, 0, 0, 1], "instance_71"]
                        ], "cell5"
                    ],
                    [
                        [],
                        [
                            [30, [0.92, 0, 0, 4.59985, 0, 0.92, 0, 0.39788, 0, 0, 1.264023, 0, 0, 0, 0, 1], "instance_72"],
                            [6, [-0.92, -2.501219e-16, 0, 0.93825, 1.126675e-16, -2.0424, 0, 4.59771, 0, 0, 0.92, 0.64822, 0, 0, 0, 1], "instance_73"],
                            [34, [0.92, 0, 0, 0.93825, 0, 0.92, 0, 0.2852, 0, 0, 0.92, 0, 0, 0, 0, 1], "instance_74"],
                            [30, [0.92, 0, 0, 4.59985, 0, 1.932, 0, 2.16612, 0, 0, 1.242, 0.64822, 0, 0, 0, 1], "instance_75"],
                            [35, [1, 0, 0, 0.45985, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], "border"]
                        ], "house5"
                    ],
                    [
                        [
                            [],
                            [],
                            []
                        ],
                        [], "Component_18"
                    ],
                    [
                        [
                            []
                        ],
                        [], "Component_37"
                    ],
                    [
                        [],
                        [
                            [37, [1, 0, 0, 5.03231, 0, 1, 0, 1.90292, 0, 0, 1, 0, 0, 0, 0, 1], "instance_77"],
                            [20, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], "instance_88"],
                            [23, [1, 0, 0, 1.92208, 0, 1, 0, 1.6845, 0, 0, 1, 0, 0, 0, 0, 1], "instance_89"]
                        ], "cell6"
                    ],
                    [
                        [],
                        [
                            [38, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], "border"],
                            [6, [0.87, 0, 0, 2.8971, 0, 0.87, 0, 2.74873, 0, 0, 0.87, 3.64929, 0, 0, 0, 1], "instance_78"],
                            [6, [-0.87, -1.065443e-16, 0, 0.13049, 1.065443e-16, -0.87, 0, 2.29726, 0, 0, 0.87, 0.61299, 0, 0, 0, 1], "instance_79"],
                            [6, [0.87, 0, 0, 2.8971, 0, 0.87, 0, 0.99133, 0, 0, 1.106783, 0, 0, 0, 0, 1], "instance_80"],
                            [6, [-0.87, -1.065443e-16, 0, 0.13049, 1.065443e-16, -0.87, 0, 4.05466, 0, 0, 0.87, 3.64929, 0, 0, 0, 1], "instance_81"],
                            [6, [-0.87, -1.065443e-16, 0, 0.13049, 1.065443e-16, -0.87, 0, 2.29726, 0, 0, 0.87, 3.64929, 0, 0, 0, 1], "instance_82"],
                            [6, [0.87, 0, 0, 2.8971, 0, 0.87, 0, 2.74873, 0, 0, 0.87, 0.61299, 0, 0, 0, 1], "instance_83"],
                            [6, [-0.87, -1.065443e-16, 0, 0.13049, 1.065443e-16, -0.87, 0, 4.05466, 0, 0, 0.87, 0.61299, 0, 0, 0, 1], "instance_84"],
                            [6, [0.87, 0, 0, 2.8971, 0, 0.87, 0, 0.99133, 0, 0, 0.87, 3.64929, 0, 0, 0, 1], "instance_85"],
                            [39, [0.87, 0, 0, 0.13049, 0, 0.87, 0, 0.16529, 0, 0, 0.87, 0, 0, 0, 0, 1], "instance_86"],
                            [19, [6.123234000000001e-17, -1, 0, 3.91694, 1, 6.123234000000001e-17, 0, 0.16529, 0, 0, 1, 2.29479, 0, 0, 0, 1], "instance_87"]
                        ], "house6"
                    ],
                    [
                        [
                            []
                        ],
                        [], "Component_32"
                    ],
                    [
                        [
                            [],
                            [],
                            []
                        ],
                        [], "Component_19"
                    ],
                    [
                        [],
                        [
                            [41, [1, 0, 0, 3.44474, 0, 1, 0, 1.24138, 0, 0, 1, 0, 0, 0, 0, 1], "instance_91"],
                            [0, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], "instance_106"]
                        ], "cell7"
                    ],
                    [
                        [],
                        [
                            [42, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], "border"],
                            [43, [-0.8064, -9.875552000000001e-17, 0, 0.25804, 9.875552000000001e-17, -0.8064, 0, 1.85633, 0, 0, 0.8064, 3.38252, 0, 0, 0, 1], "instance_92"],
                            [5, [0.8064, 0, 0, 4.69324, 0, 0.8064, 0, 4.02232, 0, 0, 0.8064, 0.56818, 0, 0, 0, 1], "instance_93"],
                            [5, [0.8064, 0, 0, 4.69324, 0, 0.8064, 0, 2.39339, 0, 0, 0.8064, 0.56818, 0, 0, 0, 1], "instance_94"],
                            [5, [0.8064, 0, 0, 4.69324, 0, 0.8064, 0, 0.76446, 0, 0, 0.8064, 3.38252, 0, 0, 0, 1], "instance_95"],
                            [43, [-0.8064, -9.875552000000001e-17, 0, 0.25804, 9.875552000000001e-17, -0.8064, 0, 5.11419, 0, 0, 0.8064, 3.38252, 0, 0, 0, 1], "instance_96"],
                            [5, [0.8064, 0, 0, 4.69324, 0, 0.8064, 0, 4.02232, 0, 0, 0.8064, 3.38252, 0, 0, 0, 1], "instance_97"],
                            [5, [0.8064, 0, 0, 4.69324, 0, 0.8064, 0, 0.76446, 0, 0, 0.8064, 0.56818, 0, 0, 0, 1], "instance_98"],
                            [5, [0.8064, 0, 0, 4.69324, 0, 0.8064, 0, 2.39339, 0, 0, 0.8064, 3.38252, 0, 0, 0, 1], "instance_99"],
                            [43, [-0.8064, -9.875552000000001e-17, 0, 0.25804, 9.875552000000001e-17, -0.8064, 0, 5.11419, 0, 0, 0.8064, 0.56818, 0, 0, 0, 1], "instance_100"],
                            [43, [-0.8064, -9.875552000000001e-17, 0, 0.25804, 9.875552000000001e-17, -0.8064, 0, 3.48526, 0, 0, 0.8064, 3.38252, 0, 0, 0, 1], "instance_101"],
                            [43, [-0.8064, -9.875552000000001e-17, 0, 0.25804, 9.875552000000001e-17, -0.8064, 0, 3.48526, 0, 0, 0.8064, 0.56818, 0, 0, 0, 1], "instance_102"],
                            [44, [0.8064, 0, 0, 0.25804, 0, 0.8064, 0, 0.31449, 0, 0, 0.8064, 0, 0, 0, 0, 1], "instance_103"],
                            [43, [-0.8064, -9.875552000000001e-17, 0, 0.25804, 9.875552000000001e-17, -0.8064, 0, 1.85633, 0, 0, 0.8064, 0.56818, 0, 0, 0, 1], "instance_105"]
                        ], "house7"
                    ],
                    [
                        [
                            []
                        ],
                        [], "Component_31"
                    ],
                    [
                        [
                            [],
                            []
                        ],
                        [], "Component_21"
                    ],
                    [
                        [
                            [],
                            [],
                            []
                        ],
                        [
                            [45, [8.006023000000001e-17, -1, 0, 6.51984, 1.307483, 6.123234000000001e-17, 0, 0.30499, 0, 0, 1, 2.57995, 0, 0, 0, 1], "instance_104"]
                        ], "Component_20"
                    ],
                    [
                        [
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            []
                        ],
                        [], "Component_30"
                    ],
                    [
                        [],
                        [
                            [47, [1, 0, 0, 2.25289, 0, 1, 0, 5.08619, 0, 0, 1, 0, 0, 0, 0, 1], "instance_108"],
                            [20, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], "instance_110"]
                        ], "green2"
                    ],
                    [
                        [],
                        [
                            [48, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], "border"],
                            [49, [1.34, 0, 0, 0, 0, 1.34, 0, 0, 0, 0, 1.34, 0, 0, 0, 0, 1], "instance_109"]
                        ], "tree4"
                    ],
                    [
                        [
                            []
                        ],
                        [], "Component_45"
                    ],
                    [
                        [
                            [],
                            []
                        ],
                        [], "Component_41"
                    ],
                    [
                        [],
                        [
                            [51, [1, 0, 0, 2.05994, 0, 1, 0, 5.61106, 0, 0, 1, 0, 0, 0, 0, 1], "instance_112"],
                            [47, [1, 0, 0, 5.88533, 0, 1, 0, 0.89357, 0, 0, 1, 0, 0, 0, 0, 1], "instance_114"],
                            [20, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], "instance_115"]
                        ], "green3"
                    ],
                    [
                        [],
                        [
                            [52, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], "border"],
                            [53, [1.2, 0, 0, 0, 0, 1.2, 0, 0, 0, 0, 1.2, 0, 0, 0, 0, 1], "instance_113"]
                        ], "tree3"
                    ],
                    [
                        [
                            []
                        ],
                        [], "Component_44"
                    ],
                    [
                        [
                            [],
                            []
                        ],
                        [], "Component_40"
                    ],
                    [
                        [],
                        [
                            [23, [1, 0, 0, 1.95911, 0, 1, 0, 2.20953, 0, 0, 1, 0, 0, 0, 0, 1], "instance_117"],
                            [55, [1, 0, 0, 5.65911, 0, 1, 0, 4.1873, 0, 0, 1, 0, 0, 0, 0, 1], "instance_118"],
                            [20, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], "instance_120"]
                        ], "cell8"
                    ],
                    [
                        [],
                        [
                            [56, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], "border"],
                            [57, [1.09, 0, 0, 0, 0, 1.09, 0, 0, 0, 0, 1.09, 0, 0, 0, 0, 1], "instance_119"]
                        ], "tree2"
                    ],
                    [
                        [
                            []
                        ],
                        [], "Component_43"
                    ],
                    [
                        [
                            [],
                            []
                        ],
                        [], "Component_39"
                    ],
                    [
                        [],
                        [
                            [20, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], "instance_122"]
                        ], "green1"
                    ],
                    [
                        [],
                        [
                            [60, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.2, 0, 0, 0, 1], "instance_124"],
                            [61, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.2, 0, 0, 0, 1], "border"]
                        ], "road2"
                    ],
                    [
                        [
                            [],
                            [],
                            [],
                            []
                        ],
                        [], "Component_65"
                    ],
                    [
                        [
                            []
                        ],
                        [], "Component_70"
                    ],
                    [
                        [],
                        [
                            [63, [1, 0, 0, 0, 0, 1, 0, -0.00001, 0, 0, 1, -0.2, 0, 0, 0, 1], "instance_126"],
                            [64, [1, 0, 0, 0, 0, 1, 0, -0.00001, 0, 0, 1, -0.2, 0, 0, 0, 1], "border"]
                        ], "road3"
                    ],
                    [
                        [
                            [],
                            [],
                            [],
                            []
                        ],
                        [], "Component_64"
                    ],
                    [
                        [
                            []
                        ],
                        [], "Component_69"
                    ],
                    [
                        [],
                        [
                            [66, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.2, 0, 0, 0, 1], "instance_128"],
                            [67, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.2, 0, 0, 0, 1], "border"]
                        ], "road1"
                    ],
                    [
                        [
                            [],
                            [],
                            [],
                            [],
                            [],
                            []
                        ],
                        [], "Component_63"
                    ],
                    [
                        [
                            []
                        ],
                        [], "Component_68"
                    ],
                    [
                        [],
                        [
                            [69, [1, 0, 0, -0.00001, 0, 1, 0, 0, 0, 0, 1, -0.2, 0, 0, 0, 1], "instance_130"],
                            [70, [1, 0, 0, -0.00001, 0, 1, 0, 0, 0, 0, 1, -0.2, 0, 0, 0, 1], "border"]
                        ], "road4"
                    ],
                    [
                        [
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            []
                        ],
                        [], "Component_62"
                    ],
                    [
                        [
                            []
                        ],
                        [], "Component_67"
                    ]
                ],
                [
                    [],
                    [
                        [0, [1, 0, 0, 225.04439, 0, 1, 0, -16.14541, 0, 0, 1, 0, 0, 0, 0, 1], "instance_0"],
                        [3, [1, 0, 0, 176.09758, 0, 1, 0, 1.51647, 0, 0, 1, 0, 0, 0, 0, 1], "instance_2"],
                        [10, [1, 0, 0, 188.33759, 0, 1, 0, 1.51647, 0, 0, 1, -0.00001, 0, 0, 0, 1], "instance_24"],
                        [14, [1, 0, 0, 200.57759, 0, 1, 0, 1.51647, 0, 0, 1, -0.00001, 0, 0, 0, 1], "instance_36"],
                        [26, [1, 0, 0, 212.8176, 0, 1, 0, 1.51647, 0, 0, 1, -0.00001, 0, 0, 0, 1], "instance_52"],
                        [32, [1, 0, 0, 225.05758, 0, 1, 0, 1.51647, 0, 0, 1, -0.00001, 0, 0, 0, 1], "instance_69"],
                        [36, [1, 0, 0, 237.29758, 0, 1, 0, 1.51647, 0, 0, 1, -0.00001, 0, 0, 0, 1], "instance_76"],
                        [40, [1, 0, 0, 249.53759, 0, 1, 0, 1.51647, 0, 0, 1, -0.00001, 0, 0, 0, 1], "instance_90"],
                        [46, [1, 0, 0, 193.5855, 0, 1, 0, -13.51908, 0, 0, 1, 0, 0, 0, 0, 1], "instance_107"],
                        [50, [1, 0, 0, 211.0115, 0, 1, 0, -13.67531, 0, 0, 1, 0, 0, 0, 0, 1], "instance_111"],
                        [54, [1, 0, 0, 241.09824, 0, 1, 0, -13.85866, 0, 0, 1, 0, 0, 0, 0, 1], "instance_116"],
                        [58, [1, 0, 0, 176.26438, 0, 1, 0, -16.14541, 0, 0, 1, 0, 0, 0, 0, 1], "instance_121"],
                        [59, [1, 0, 0, 232.07257, 0, 1, 0, -31.38638, 0, 0, 1, 0.2, 0, 0, 0, 1], "instance_123"],
                        [62, [1, 0, 0, 217.70092, 0, 1, 0, -31.15757, 0, 0, 1, 0.2, 0, 0, 0, 1], "instance_125"],
                        [65, [1, 0, 0, 202.49643, 0, 1, 0, -32.33883, 0, 0, 1, 0.2, 0, 0, 0, 1], "instance_127"],
                        [68, [1, 0, 0, 190.15569, 0, 1, 0, -33.21083, 0, 0, 1, 0.2, 0, 0, 0, 1], "instance_129"]
                    ], "SketchUp"
                ]
            ],
            "road3": [
                [
                    [
                        [],
                        [
                            [1, [1, 0, 0, 0, 0, 1, 0, -0.00001, 0, 0, 1, -0.2, 0, 0, 0, 1], "border"],
                            [2, [1, 0, 0, 0, 0, 1, 0, -0.00001, 0, 0, 1, -0.2, 0, 0, 0, 1], "instance_1"]
                        ], "road3"
                    ],
                    [
                        [
                            [
                                [8.99999, 8.99999, 0.2, 8.99999, 8.99999, 0, 8.99999, 0, 0.2, 8.99999, 0, 0, 0, 0, 0, 0, 8.99999, 0, 0, 8.99999, 0.2, 0, 0, 0.2]
                            ]
                        ],
                        [], "Component_69"
                    ],
                    [
                        [
                            [],
                            [],
                            [],
                            []
                        ],
                        [], "Component_85"
                    ]
                ],
                [
                    [
                        [16777215, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                            [54.01774, -43.72242, 0, 55.05302, -47.58612, 0, 51.18932, -48.62139, 0, 50.15405, -44.75767, 0, 54.01774, -43.72242, 0, 54.01774, -43.72242, 3.99999, 55.05302, -47.58612, 0, 55.05302, -47.58612, 0, 54.01774, -43.72242, 3.99999, 50.15405, -44.75767, 3.99999, 51.18932, -48.62139, 0, 50.15405, -44.75767, 0, 51.18932, -48.62139, 0, 50.15405, -44.75767, 3.99999, 54.01774, -43.72242, 0, 50.15405, -44.75767, 0, 50.15405, -44.75767, 3.99999, 54.01774, -43.72242, 3.99999],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0.02453, 0.00657, 0, 0.02453, 0.00657, 0, 0.02453, 0.00657, 0, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0],
                            [4, 3, 4, 3, 4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [29.6086, -23.24473, 0, 29.6086, -24.24473, 0, 28.6086, -24.24473, 0, 28.6086, -23.24473, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [78.6086, -72.24474, 0, 78.6086, -73.24474, 0, 77.6086, -73.24474, 0, 77.6086, -72.24474, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [29.6086, -72.24474, 0, 29.6086, -73.24474, 0, 28.6086, -73.24474, 0, 28.6086, -72.24474, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [78.6086, -23.24473, 0, 78.6086, -24.24473, 0, 77.6086, -24.24473, 0, 77.6086, -23.24473, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [
                            [28.6086, -24.24473, 0, 28.6086, -72.24474, 0]
                        ],
                        [
                            [77.6086, -23.24473, 0, 29.6086, -23.24473, 0]
                        ],
                        [
                            [78.6086, -72.24474, 0, 78.6086, -24.24473, 0]
                        ],
                        [
                            [29.6086, -73.24474, 0, 77.6086, -73.24474, 0]
                        ]
                    ],
                    [
                        [0, [1, 0, 0, 33.37747, 0, 1, 0, -35.87534, 0, 0, 1, 0.2, 0, 0, 0, 1], "instance_0"],
                        [0, [6.123234000000001e-17, 1, 0, 66.1977, -1, 6.123234000000001e-17, 0, -32.4974, 0, 0, 1, 0.2, 0, 0, 0, 1], "instance_2"],
                        [0, [-1, 1.224647e-16, 0, 63.96568, -1.224647e-16, -1, 0, -59.70763, 0, 0, 1, 0.2, 0, 0, 0, 1], "instance_3"],
                        [0, [-1.83697e-16, -1, 0, 42.36542, 1, -1.83697e-16, 0, -63.0856, 0, 0, 1, 0.2, 0, 0, 0, 1], "instance_4"]
                    ], "SketchUp"
                ]
            ],
            "house2": [
                [
                    [
                        [],
                        [
                            [1, [0.85, 0, 0, 4.13949, 0, 0.85, 0, 3.03445, 0, 0, 1.167847, 0, 0, 0, 0, 1], "instance_1"],
                            [2, [-0.85, -1.04095e-16, 0, 0.34, 1.04095e-16, -0.85, 0, 2.68604, 0, 0, 0.85, 3.5654, 0, 0, 0, 1], "instance_2"],
                            [1, [0.85, 0, 0, 4.13949, 0, 0.85, 0, 0.96895, 0, 0, 0.85, 3.6504, 0, 0, 0, 1], "instance_3"],
                            [1, [0.85, 0, 0, 4.13949, 0, 0.85, 0, 3.03445, 0, 0, 0.85, 3.6504, 0, 0, 0, 1], "instance_4"],
                            [3, [0.85, 0, 0, 0.34, 0, 0.85, 0, 0.16999, 0, 0, 0.85, 0, 0, 0, 0, 1], "instance_5"],
                            [2, [-0.85, -1.04095e-16, 0, 0.34, 1.04095e-16, -0.85, 0, 2.68604, 0, 0, 0.85, 0.5989, 0, 0, 0, 1], "instance_6"],
                            [4, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], "border"],
                            [2, [-0.85, -1.04095e-16, 0, 0.34, 1.04095e-16, -0.85, 0, 4.40304, 0, 0, 0.85, 0.5989, 0, 0, 0, 1], "instance_7"],
                            [2, [-0.85, -1.04095e-16, 0, 0.34, 1.04095e-16, -0.85, 0, 4.40304, 0, 0, 0.85, 3.5654, 0, 0, 0, 1], "instance_8"],
                            [1, [0.85, 0, 0, 4.13949, 0, 0.85, 0, 0.96895, 0, 0, 0.85, 0.5989, 0, 0, 0, 1], "instance_9"]
                        ], "house2"
                    ],
                    [
                        [
                            [],
                            []
                        ],
                        [], "Component_21"
                    ],
                    [
                        [
                            [],
                            []
                        ],
                        [], "Component_21"
                    ],
                    [
                        [
                            [],
                            [],
                            []
                        ],
                        [], "Component_15"
                    ],
                    [
                        [
                            [
                                [0, 0, 0, 0, 0, 7.23961, 0, 5.43999, 0, 4.3095, 5.43999, 0, 4.3095, 5.43999, 7.23961, 0, 5.43999, 7.23961, 4.3095, 0, 7.23961, 4.3095, 0, 0]
                            ]
                        ],
                        [], "Component_35"
                    ]
                ],
                [
                    [
                        [16777215, [0, 1, 2, 3],
                            [1, 70.00001, 0, 1, 68.99998, 0, 0, 68.99998, 0, 0, 70.00001, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                            [35.87094, 31.9026, 0, 32.00725, 30.86732, 0, 32.00725, 30.86732, 3.99999, 35.87094, 31.9026, 3.99999, 35.87094, 31.9026, 0, 36.90622, 28.0389, 0, 33.0425, 27.00362, 0, 32.00725, 30.86732, 0, 32.00725, 30.86732, 0, 33.0425, 27.00362, 0, 32.00725, 30.86732, 3.99999, 36.90622, 28.0389, 0, 35.87094, 31.9026, 3.99999, 32.00725, 30.86732, 3.99999, 33.0425, 27.00362, 0, 35.87094, 31.9026, 0, 35.87094, 31.9026, 3.99999, 36.90622, 28.0389, 0],
                            [-0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.02453, 0.00657, 0, 0.02453, 0.00657, 0, 0.02453, 0.00657, 0],
                            [4, 4, 3, 4, 3]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [70.00001, 70.00001, 0, 70.00001, 68.99998, 0, 68.99998, 68.99998, 0, 68.99998, 70.00001, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [70.00001, 1, 0, 70.00001, 0, 0, 68.99998, 0, 0, 68.99998, 1, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [
                            [0, 68.99998, 0, 0, 1, 0]
                        ],
                        [
                            [1, 0, 0, 68.99998, 0, 0]
                        ],
                        [
                            [70.00001, 1, 0, 70.00001, 68.99998, 0]
                        ],
                        [
                            [68.99998, 70.00001, 0, 1, 70.00001, 0]
                        ]
                    ],
                    [
                        [0, [6.123234000000001e-17, 1, 0, 45.06378, -1, 6.123234000000001e-17, 0, 45.78131, 0, 0, 1, 0, 0, 0, 0, 1], "instance_0"],
                        [0, [1, 0, 0, 16.13833, 0, 1, 0, 34.54412, 0, 0, 1, 0, 0, 0, 0, 1], "instance_10"],
                        [0, [-1, 1.224647e-16, 0, 56.301, -1.224647e-16, -1, 0, 16.85585, 0, 0, 1, 0, 0, 0, 0, 1], "instance_11"],
                        [0, [-1.83697e-16, -1, 0, 27.37553, 1, -1.83697e-16, 0, 5.61866, 0, 0, 1, 0, 0, 0, 0, 1], "instance_12"]
                    ], "SketchUp"
                ]
            ],
            "house4": [
                [
                    [
                        [],
                        [
                            [1, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], "border"],
                            [2, [0.7917, 0, 0, 0.26917, 0, 0.7917, 0, 0.35626, 0, 0, 0.7917, 0, 0, 0, 0, 1], "instance_1"],
                            [3, [0.7917, 0, 7.88757e-17, 5.09062, 0, 0.7917, 0, 1.07671, 6.334414e-17, 0, 1.09426, 0, 0, 0, 0, 1], "instance_2"],
                            [3, [0.7917, 0, 6.334414e-17, 5.09062, 0, 0.7917, 0, 2.67594, 6.334414e-17, 0, 0.878787, 0.55782, 0, 0, 0, 1], "instance_3"],
                            [4, [-0.7917, -9.695529000000001e-17, -6.334414e-17, 0.26917, 9.695529000000001e-17, -0.7917, 7.757418999999999e-33, 5.54189, 6.334414e-17, 0, 0.878787, 0.55782, 0, 0, 0, 1], "instance_4"],
                            [3, [0.7917, 0, 6.334414e-17, 5.09062, 0, 0.7917, 0, 1.07671, 6.334414e-17, 0, 0.878787, 3.62479, 0, 0, 0, 1], "instance_5"],
                            [4, [-0.7917, -9.695529000000001e-17, -6.334414e-17, 0.26917, 9.695529000000001e-17, -0.7917, 7.757418999999999e-33, 2.34343, 6.334414e-17, 0, 0.878787, 3.62479, 0, 0, 0, 1], "instance_6"],
                            [3, [0.7917, 0, 6.334414e-17, 5.09062, 0, 0.7917, 0, 4.27518, 6.334414e-17, 0, 0.878787, 3.62479, 0, 0, 0, 1], "instance_7"],
                            [4, [-0.7917, -9.695529000000001e-17, -6.334414e-17, 0.26917, 9.695529000000001e-17, -0.7917, 7.757418999999999e-33, 5.54189, 6.334414e-17, 0, 0.878787, 3.62479, 0, 0, 0, 1], "instance_8"],
                            [4, [-0.7917, -9.695529000000001e-17, -6.334414e-17, 0.26917, 9.695529000000001e-17, -0.7917, 7.757418999999999e-33, 3.94266, 6.334414e-17, 0, 0.878787, 0.55782, 0, 0, 0, 1], "instance_9"],
                            [3, [0.7917, 0, 6.334414e-17, 5.09062, 0, 0.7917, 0, 2.67594, 6.334414e-17, 0, 0.878787, 3.62479, 0, 0, 0, 1], "instance_10"],
                            [4, [-0.7917, -9.695529000000001e-17, -6.334414e-17, 0.26917, 9.695529000000001e-17, -0.7917, 7.757418999999999e-33, 3.94266, 6.334414e-17, 0, 0.878787, 3.62479, 0, 0, 0, 1], "instance_11"],
                            [4, [-0.7917, -9.695529000000001e-17, -6.334414e-17, 0.26917, 9.695529000000001e-17, -0.7917, 7.757418999999999e-33, 2.34343, 6.334414e-17, 0, 0.878787, 0.55782, 0, 0, 0, 1], "instance_12"],
                            [3, [0.7917, 0, 6.334414e-17, 5.09062, 0, 0.7917, 0, 4.27518, 6.334414e-17, 0, 0.878787, 0.55782, 0, 0, 0, 1], "instance_13"],
                            [5, [6.845438000000001e-17, -0.7917, 0, 6.04846, 1.117945, 4.8477640000000007e-17, 0, 0.71949, 0, 0, 0.7917, 2.33643, 0, 0, 0, 1], "instance_14"]
                        ], "house4"
                    ],
                    [
                        [
                            [
                                [5.30439, 6.45235, 7.62185, 0, 6.45235, 7.62185, 5.30439, 0, 7.62185, 5.30439, 0, 0, 0, 0, 0, 0, 0, 7.62185, 0, 6.45235, 0, 5.30439, 6.45235, 0]
                            ]
                        ],
                        [], "Component_33"
                    ],
                    [
                        [
                            [],
                            [],
                            []
                        ],
                        [], "Component_17"
                    ],
                    [
                        [
                            [],
                            []
                        ],
                        [], "Component_21"
                    ],
                    [
                        [
                            [],
                            []
                        ],
                        [], "Component_21"
                    ],
                    [
                        [
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            []
                        ],
                        [], "Component_30"
                    ]
                ],
                [
                    [
                        [16777215, [0, 1, 2, 3],
                            [1, 70.00001, 0, 1, 68.99998, 0, 0, 68.99998, 0, 0, 70.00001, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                            [35.87094, 31.9026, 0, 32.00725, 30.86732, 0, 32.00725, 30.86732, 3.99999, 35.87094, 31.9026, 3.99999, 35.87094, 31.9026, 0, 36.90622, 28.0389, 0, 33.0425, 27.00362, 0, 32.00725, 30.86732, 0, 32.00725, 30.86732, 0, 33.0425, 27.00362, 0, 32.00725, 30.86732, 3.99999, 36.90622, 28.0389, 0, 35.87094, 31.9026, 3.99999, 32.00725, 30.86732, 3.99999, 33.0425, 27.00362, 0, 35.87094, 31.9026, 0, 35.87094, 31.9026, 3.99999, 36.90622, 28.0389, 0],
                            [-0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.02453, 0.00657, 0, 0.02453, 0.00657, 0, 0.02453, 0.00657, 0],
                            [4, 4, 3, 4, 3]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [70.00001, 70.00001, 0, 70.00001, 68.99998, 0, 68.99998, 68.99998, 0, 68.99998, 70.00001, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [70.00001, 1, 0, 70.00001, 0, 0, 68.99998, 0, 0, 68.99998, 1, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [
                            [0, 68.99998, 0, 0, 1, 0]
                        ],
                        [
                            [1, 0, 0, 68.99998, 0, 0]
                        ],
                        [
                            [70.00001, 1, 0, 70.00001, 68.99998, 0]
                        ],
                        [
                            [68.99998, 70.00001, 0, 1, 70.00001, 0]
                        ]
                    ],
                    [
                        [0, [6.123234000000001e-17, 1, 0, 45.06378, -1, 6.123234000000001e-17, 0, 45.78131, 0, 0, 1, 0, 0, 0, 0, 1], "instance_0"],
                        [0, [1, 0, 0, 16.13833, 0, 1, 0, 34.54412, 0, 0, 1, 0, 0, 0, 0, 1], "instance_15"],
                        [0, [-1, 1.224647e-16, 0, 56.301, -1.224647e-16, -1, 0, 16.85585, 0, 0, 1, 0, 0, 0, 0, 1], "instance_16"],
                        [0, [-1.83697e-16, -1, 0, 27.37553, 1, -1.83697e-16, 0, 5.61866, 0, 0, 1, 0, 0, 0, 0, 1], "instance_17"]
                    ], "SketchUp"
                ]
            ],
            "road2": [
                [
                    [
                        [],
                        [
                            [1, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.2, 0, 0, 0, 1], "instance_1"],
                            [2, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.2, 0, 0, 0, 1], "border"]
                        ], "road2"
                    ],
                    [
                        [
                            [],
                            [],
                            [],
                            []
                        ],
                        [], "Component_85"
                    ],
                    [
                        [
                            [
                                [8.99999, 0, 0, 0, 0, 0, 8.99999, 8.99999, 0, 8.99999, 8.99999, 0.2, 0, 8.99999, 0.2, 0, 8.99999, 0, 0, 0, 0.2, 8.99999, 0, 0.2]
                            ]
                        ],
                        [], "Component_70"
                    ]
                ],
                [
                    [
                        [16777215, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                            [54.16448, -46.58043, 0, 50.30076, -47.61571, 0, 50.30076, -47.61571, 3.99999, 54.16448, -46.58043, 3.99999, 54.16448, -46.58043, 0, 55.19976, -50.44412, 0, 51.33603, -51.4794, 0, 50.30076, -47.61571, 0, 50.30076, -47.61571, 0, 51.33603, -51.4794, 0, 50.30076, -47.61571, 3.99999, 55.19976, -50.44412, 0, 54.16448, -46.58043, 3.99999, 50.30076, -47.61571, 3.99999, 51.33603, -51.4794, 0, 54.16448, -46.58043, 0, 54.16448, -46.58043, 3.99999, 55.19976, -50.44412, 0],
                            [-0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.02453, 0.00657, 0, 0.02453, 0.00657, 0, 0.02453, 0.00657, 0],
                            [4, 4, 3, 4, 3]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [29.6086, -72.24474, 0, 29.6086, -73.24474, 0, 28.6086, -73.24474, 0, 28.6086, -72.24474, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [29.6086, -23.24473, 0, 29.6086, -24.24473, 0, 28.6086, -24.24473, 0, 28.6086, -23.24473, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [78.6086, -23.24473, 0, 78.6086, -24.24473, 0, 77.6086, -24.24473, 0, 77.6086, -23.24473, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [78.6086, -72.24474, 0, 78.6086, -73.24474, 0, 77.6086, -73.24474, 0, 77.6086, -72.24474, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [
                            [28.6086, -24.24473, 0, 28.6086, -72.24474, 0]
                        ],
                        [
                            [77.6086, -23.24473, 0, 29.6086, -23.24473, 0]
                        ],
                        [
                            [78.6086, -72.24474, 0, 78.6086, -24.24473, 0]
                        ],
                        [
                            [29.6086, -73.24474, 0, 77.6086, -73.24474, 0]
                        ]
                    ],
                    [
                        [0, [1, 0, 0, 36.93998, 0, 1, 0, -35.96143, 0, 0, 1, 0.2, 0, 0, 0, 1], "instance_0"],
                        [0, [6.123234000000001e-17, 1, 0, 67.87705, -1, 6.123234000000001e-17, 0, -32.72336, 0, 0, 1, 0.2, 0, 0, 0, 1], "instance_2"],
                        [0, [-1, 1.224647e-16, 0, 71.11512, -1.224647e-16, -1, 0, -63.66045, 0, 0, 1, 0.2, 0, 0, 0, 1], "instance_3"],
                        [0, [-1.83697e-16, -1, 0, 40.17802, 1, -1.83697e-16, 0, -66.8985, 0, 0, 1, 0.2, 0, 0, 0, 1], "instance_4"]
                    ], "SketchUp"
                ]
            ],
            "tree1": [
                [
                    [
                        [],
                        [
                            [1, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], "instance_1"],
                            [2, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], "border"]
                        ], "tree1"
                    ],
                    [
                        [
                            [],
                            []
                        ],
                        [], "Component_38"
                    ],
                    [
                        [
                            [
                                [1.42399, 1.42399, 5.47185, 0, 1.42399, 5.47185, 1.42399, 1.42399, 0, 0, 1.42399, 0, 0, 0, 0, 0, 0, 5.47185, 1.42399, 0, 5.47185, 1.42399, 0, 0]
                            ]
                        ],
                        [], "Component_42"
                    ]
                ],
                [
                    [
                        [16777215, [0, 1, 2, 3],
                            [1, 70.00001, 0, 1, 68.99998, 0, 0, 68.99998, 0, 0, 70.00001, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                            [35.87094, 31.9026, 0, 32.00725, 30.86732, 0, 32.00725, 30.86732, 3.99999, 35.87094, 31.9026, 3.99999, 35.87094, 31.9026, 0, 36.90622, 28.0389, 0, 33.0425, 27.00362, 0, 32.00725, 30.86732, 0, 32.00725, 30.86732, 0, 33.0425, 27.00362, 0, 32.00725, 30.86732, 3.99999, 36.90622, 28.0389, 0, 35.87094, 31.9026, 3.99999, 32.00725, 30.86732, 3.99999, 33.0425, 27.00362, 0, 35.87094, 31.9026, 0, 35.87094, 31.9026, 3.99999, 36.90622, 28.0389, 0],
                            [-0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.02453, 0.00657, 0, 0.02453, 0.00657, 0, 0.02453, 0.00657, 0],
                            [4, 4, 3, 4, 3]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [70.00001, 70.00001, 0, 70.00001, 68.99998, 0, 68.99998, 68.99998, 0, 68.99998, 70.00001, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [70.00001, 1, 0, 70.00001, 0, 0, 68.99998, 0, 0, 68.99998, 1, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [
                            [0, 68.99998, 0, 0, 1, 0]
                        ],
                        [
                            [1, 0, 0, 68.99998, 0, 0]
                        ],
                        [
                            [70.00001, 1, 0, 70.00001, 68.99998, 0]
                        ],
                        [
                            [68.99998, 70.00001, 0, 1, 70.00001, 0]
                        ]
                    ],
                    [
                        [0, [6.123234000000001e-17, 1, 0, 45.06378, -1, 6.123234000000001e-17, 0, 45.78131, 0, 0, 1, 0, 0, 0, 0, 1], "instance_0"],
                        [0, [1, 0, 0, 16.13833, 0, 1, 0, 34.54412, 0, 0, 1, 0, 0, 0, 0, 1], "instance_2"],
                        [0, [-1, 1.224647e-16, 0, 56.301, -1.224647e-16, -1, 0, 16.85585, 0, 0, 1, 0, 0, 0, 0, 1], "instance_3"],
                        [0, [-1.83697e-16, -1, 0, 27.37553, 1, -1.83697e-16, 0, 5.61866, 0, 0, 1, 0, 0, 0, 0, 1], "instance_4"]
                    ], "SketchUp"
                ]
            ],
            "gun": [
                [
                    [
                        [],
                        [
                            [1, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], "border"],
                            [2, [0.6, 0, 0, 0, 0, 0.6, 0, 0, 0, 0, 0.6, 0, 0, 0, 0, 1], "instance_1"]
                        ], "gun"
                    ],
                    [
                        [
                            [
                                [0, 0, 0, 0.78108, 0, 0, 0, 0, 0.5196, 0, 0.08999, 0.5196, 0, 0.08999, 0, 0.78108, 0.08999, 0, 0.78108, 0.08999, 0.5196, 0.78108, 0, 0.5196]
                            ]
                        ],
                        [], "Component_5"
                    ],
                    [
                        [
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            []
                        ],
                        [], "Component_3"
                    ]
                ],
                [
                    [
                        [16777215, [0, 1, 2, 3],
                            [2.67558, 3.02305, 0, 2.67558, 2.02305, 0, 1.67558, 2.02305, 0, 1.67558, 3.02305, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [2.67558, 52.02305, 0, 2.67558, 51.02306, 0, 1.67558, 51.02306, 0, 1.67558, 52.02305, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [51.67558, 52.02305, 0, 51.67558, 51.02306, 0, 50.67558, 51.02306, 0, 50.67558, 52.02305, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [51.67558, 3.02305, 0, 51.67558, 2.02305, 0, 50.67558, 2.02305, 0, 50.67558, 3.02305, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                            [35.43988, 13.66529, 0, 35.43988, 13.66529, 5, 36.73396, 8.83566, 0, 35.43988, 13.66529, 0, 30.61025, 12.37119, 0, 30.61025, 12.37119, 5, 35.43988, 13.66529, 5, 36.73396, 8.83566, 0, 35.43988, 13.66529, 5, 30.61025, 12.37119, 5, 31.90432, 7.54156, 0, 35.43988, 13.66529, 0, 36.73396, 8.83566, 0, 31.90432, 7.54156, 0, 30.61025, 12.37119, 0, 30.61025, 12.37119, 0, 31.90432, 7.54156, 0, 30.61025, 12.37119, 5],
                            [0.02453, 0.00657, 0, 0.02453, 0.00657, 0, 0.02453, 0.00657, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0],
                            [3, 4, 4, 4, 3]
                        ],
                        [
                            [1.67558, 51.02306, 0, 1.67558, 3.02305, 0]
                        ],
                        [
                            [50.67558, 52.02305, 0, 2.67558, 52.02305, 0]
                        ],
                        [
                            [51.67558, 3.02305, 0, 51.67558, 51.02306, 0]
                        ],
                        [
                            [2.67558, 2.02305, 0, 50.67558, 2.02305, 0]
                        ]
                    ],
                    [
                        [0, [1, 0, 0, 31.83651, 0, 1, 0, 34.93317, 0, 0, 1, 0, 0, 0, 0, 1], "instance_0"],
                        [0, [0.8660254, 0.5, 0, 30.24758, -0.5, 0.8660254, 0, 29.69917, 0, 0, 1, 0, 0, 0, 0, 1], "instance_2"],
                        [0, [0.5, 0.8660254, 0, 26.25455, -0.8660254, 0.5, 0, 25.96085, 0, 0, 1, 0, 0, 0, 0, 1], "instance_3"],
                        [0, [-1.608123e-16, 1, 0, 20.92733, -1, -1.608123e-16, 0, 24.71989, 0, 0, 1, 0, 0, 0, 0, 1], "instance_4"],
                        [0, [-0.5, 0.8660254, 0, 15.69334, -0.8660254, -0.5, 0, 26.30881, 0, 0, 1, 0, 0, 0, 0, 1], "instance_5"],
                        [0, [-0.8660254, 0.5, 0, 11.95502, -0.5, -0.8660254, 0, 30.30184, 0, 0, 1, 0, 0, 0, 0, 1], "instance_6"],
                        [0, [-1, -7.657137e-16, 0, 10.71406, 7.657137e-16, -1, 0, 35.62906, 0, 0, 1, 0, 0, 0, 0, 1], "instance_7"],
                        [0, [-0.8660254, -0.5, 0, 12.30296, 0.5, -0.8660254, 0, 40.86306, 0, 0, 1, 0, 0, 0, 0, 1], "instance_8"],
                        [0, [-0.5, -0.8660254, 0, 16.296, 0.8660254, -0.5, 0, 44.60138, 0, 0, 1, 0, 0, 0, 0, 1], "instance_9"],
                        [0, [1.59266e-15, -1, 0, 21.62323, 1, 1.59266e-15, 0, 45.84235, 0, 0, 1, 0, 0, 0, 0, 1], "instance_10"],
                        [0, [0.5, -0.8660254, 0, 26.85722, 0.8660254, 0.5, 0, 44.25342, 0, 0, 1, 0, 0, 0, 0, 1], "instance_11"],
                        [0, [0.8660254, -0.5, 0, 30.59554, 0.5, 0.8660254, 0, 40.26039, 0, 0, 1, 0, 0, 0, 0, 1], "instance_12"]
                    ], "SketchUp"
                ]
            ],
            "road1": [
                [
                    [
                        [],
                        [
                            [1, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.2, 0, 0, 0, 1], "instance_1"],
                            [2, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.2, 0, 0, 0, 1], "border"]
                        ], "road1"
                    ],
                    [
                        [
                            [],
                            [],
                            [],
                            [],
                            [],
                            []
                        ],
                        [], "Component_86"
                    ],
                    [
                        [
                            [
                                [8.99999, 0, 0.2, 0, 0, 0.2, 8.99999, 8.99999, 0.2, 0, 8.99999, 0.2, 0, 8.99999, 0, 8.99999, 8.99999, 0, 8.99999, 0, 0, 0, 0, 0]
                            ]
                        ],
                        [], "Component_68"
                    ]
                ],
                [
                    [
                        [16777215, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                            [53.68498, -45.8676, 0, 49.82128, -46.90288, 0, 49.82128, -46.90288, 3.99999, 53.68498, -45.8676, 3.99999, 53.68498, -45.8676, 0, 54.72025, -49.7313, 0, 50.85653, -50.76658, 0, 49.82128, -46.90288, 0, 49.82128, -46.90288, 0, 50.85653, -50.76658, 0, 49.82128, -46.90288, 3.99999, 54.72025, -49.7313, 0, 53.68498, -45.8676, 3.99999, 49.82128, -46.90288, 3.99999, 50.85653, -50.76658, 0, 53.68498, -45.8676, 0, 53.68498, -45.8676, 3.99999, 54.72025, -49.7313, 0],
                            [-0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.02453, 0.00657, 0, 0.02453, 0.00657, 0, 0.02453, 0.00657, 0],
                            [4, 4, 3, 4, 3]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [29.6086, -72.24474, 0, 29.6086, -73.24474, 0, 28.6086, -73.24474, 0, 28.6086, -72.24474, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [29.6086, -23.24473, 0, 29.6086, -24.24473, 0, 28.6086, -24.24473, 0, 28.6086, -23.24473, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [78.6086, -23.24473, 0, 78.6086, -24.24473, 0, 77.6086, -24.24473, 0, 77.6086, -23.24473, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [78.6086, -72.24474, 0, 78.6086, -73.24474, 0, 77.6086, -73.24474, 0, 77.6086, -72.24474, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [
                            [28.6086, -24.24473, 0, 28.6086, -72.24474, 0]
                        ],
                        [
                            [77.6086, -23.24473, 0, 29.6086, -23.24473, 0]
                        ],
                        [
                            [78.6086, -72.24474, 0, 78.6086, -24.24473, 0]
                        ],
                        [
                            [29.6086, -73.24474, 0, 77.6086, -73.24474, 0]
                        ]
                    ],
                    [
                        [0, [1, 0, 0, 33.70778, 0, 1, 0, -35.54713, 0, 0, 1, 0.39999, 0, 0, 0, 1], "instance_0"],
                        [0, [6.123234000000001e-17, 1, 0, 66.20616, -1, 6.123234000000001e-17, 0, -28.55781, 0, 0, 1, 0.39999, 0, 0, 0, 1], "instance_2"],
                        [0, [-1, 1.224647e-16, 0, 73.1955, -1.224647e-16, -1, 0, -61.05619, 0, 0, 1, 0.39999, 0, 0, 0, 1], "instance_3"],
                        [0, [-1.83697e-16, -1, 0, 40.69712, 1, -1.83697e-16, 0, -68.04554, 0, 0, 1, 0.39999, 0, 0, 0, 1], "instance_4"]
                    ], "SketchUp"
                ]
            ],
            "aidkit": [
                [
                    [
                        [],
                        [
                            [1, [0.5, 0, 0, 0.025, 0, 0.5, 0, 0.02, 0, 0, 0.5, 0, 0, 0, 0, 1], "instance_1"],
                            [3, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], "border"]
                        ], "aidkit"
                    ],
                    [
                        [
                            [],
                            []
                        ],
                        [
                            [2, [1, 0, 0, 0, 0, 1, 0, 0.01, 0, 0, 1, 0, 0, 0, 0, 1], "instance_2"]
                        ], "Component_5"
                    ],
                    [
                        [
                            []
                        ],
                        [], "Component_3"
                    ],
                    [
                        [
                            [
                                [0.705, 0, 0.615, 0.705, 0, 0, 0, 0, 0.615, 0, 0, 0, 0, 0.32, 0, 0, 0.32, 0.615, 0.705, 0.32, 0.615, 0.705, 0.32, 0]
                            ]
                        ],
                        [], "Component_7"
                    ]
                ],
                [
                    [
                        [16777215, [0, 1, 2, 3],
                            [2.67558, 3.02305, 0, 2.67558, 2.02305, 0, 1.67558, 2.02305, 0, 1.67558, 3.02305, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [2.67558, 52.02305, 0, 2.67558, 51.02306, 0, 1.67558, 51.02306, 0, 1.67558, 52.02305, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [51.67558, 52.02305, 0, 51.67558, 51.02306, 0, 50.67558, 51.02306, 0, 50.67558, 52.02305, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [51.67558, 3.02305, 0, 51.67558, 2.02305, 0, 50.67558, 2.02305, 0, 50.67558, 3.02305, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                            [35.43988, 13.66529, 0, 35.43988, 13.66529, 5, 36.73396, 8.83566, 0, 35.43988, 13.66529, 0, 30.61025, 12.37119, 0, 30.61025, 12.37119, 5, 35.43988, 13.66529, 5, 36.73396, 8.83566, 0, 35.43988, 13.66529, 5, 30.61025, 12.37119, 5, 31.90432, 7.54156, 0, 35.43988, 13.66529, 0, 36.73396, 8.83566, 0, 31.90432, 7.54156, 0, 30.61025, 12.37119, 0, 30.61025, 12.37119, 0, 31.90432, 7.54156, 0, 30.61025, 12.37119, 5],
                            [0.02453, 0.00657, 0, 0.02453, 0.00657, 0, 0.02453, 0.00657, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0],
                            [3, 4, 4, 4, 3]
                        ],
                        [
                            [1.67558, 51.02306, 0, 1.67558, 3.02305, 0]
                        ],
                        [
                            [50.67558, 52.02305, 0, 2.67558, 52.02305, 0]
                        ],
                        [
                            [51.67558, 3.02305, 0, 51.67558, 51.02306, 0]
                        ],
                        [
                            [2.67558, 2.02305, 0, 50.67558, 2.02305, 0]
                        ]
                    ],
                    [
                        [0, [1, 0, 0, 30.85398, 0, 1, 0, 37.04544, 0, 0, 1, 0, 0, 0, 0, 1], "instance_0"]
                    ], "SketchUp"
                ]
            ],
            "green": [
                [
                    [
                        [],
                        [
                            [1, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], "instance_1"],
                            [2, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.2, 0, 0, 0, 1], "border"]
                        ], "green"
                    ],
                    [
                        [
                            []
                        ],
                        [], "Component_85"
                    ],
                    [
                        [
                            [
                                [0, 8.99999, 0.2, 8.99999, 8.99999, 0.2, 0, 0, 0.2, 0, 0, 0, 8.99999, 0, 0, 8.99999, 0, 0.2, 8.99999, 8.99999, 0, 0, 8.99999, 0]
                            ]
                        ],
                        [], "Component_86"
                    ]
                ],
                [
                    [
                        [16777215, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                            [54.27255, -48.38771, 0, 53.23728, -44.52399, 3.99999, 49.37358, -45.55927, 3.99999, 50.40886, -49.42299, 0, 53.23728, -44.52399, 0, 53.23728, -44.52399, 3.99999, 54.27255, -48.38771, 0, 53.23728, -44.52399, 0, 49.37358, -45.55927, 0, 49.37358, -45.55927, 3.99999, 53.23728, -44.52399, 3.99999, 49.37358, -45.55927, 0, 50.40886, -49.42299, 0, 49.37358, -45.55927, 3.99999, 53.23728, -44.52399, 0, 54.27255, -48.38771, 0, 50.40886, -49.42299, 0, 49.37358, -45.55927, 0],
                            [0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.02453, 0.00657, 0, 0.02453, 0.00657, 0, 0.02453, 0.00657, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4, 3, 4, 3, 4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [78.6086, -72.24474, 0, 78.6086, -73.24474, 0, 77.6086, -73.24474, 0, 77.6086, -72.24474, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [29.6086, -72.24474, 0, 29.6086, -73.24474, 0, 28.6086, -73.24474, 0, 28.6086, -72.24474, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [78.6086, -23.24473, 0, 78.6086, -24.24473, 0, 77.6086, -24.24473, 0, 77.6086, -23.24473, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [29.6086, -23.24473, 0, 29.6086, -24.24473, 0, 28.6086, -24.24473, 0, 28.6086, -23.24473, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [
                            [28.6086, -24.24473, 0, 28.6086, -72.24474, 0]
                        ],
                        [
                            [77.6086, -23.24473, 0, 29.6086, -23.24473, 0]
                        ],
                        [
                            [78.6086, -72.24474, 0, 78.6086, -24.24473, 0]
                        ],
                        [
                            [29.6086, -73.24474, 0, 77.6086, -73.24474, 0]
                        ]
                    ],
                    [
                        [0, [1, 0, 0, 31.73516, 0, 1, 0, -35.3865, 0, 0, 1, 0.2, 0, 0, 0, 1], "instance_0"],
                        [0, [6.123234000000001e-17, 1, 0, 67.17481, -1, 6.123234000000001e-17, 0, -30.11145, 0, 0, 1, 0.2, 0, 0, 0, 1], "instance_2"],
                        [0, [-1, 1.224647e-16, 0, 69.61987, -1.224647e-16, -1, 0, -62.72111, 0, 0, 1, 0.2, 0, 0, 0, 1], "instance_3"],
                        [0, [-1.83697e-16, -1, 0, 39.8402, 1, -1.83697e-16, 0, -67.99616, 0, 0, 1, 0.2, 0, 0, 0, 1], "instance_4"]
                    ], "SketchUp"
                ]
            ],
            "house3": [
                [
                    [
                        [],
                        [
                            [1, [-0.91, -1.114429e-16, 0, 0.2366, 1.114429e-16, -0.91, 0, 4.17769, 0, 0, 0.91, 0.64118, 0, 0, 0, 1], "instance_1"],
                            [2, [6.123234000000001e-17, -1, 0, 4.68714, 1, 6.123234000000001e-17, 0, 0.4222, 0, 0, 1, 2.31549, 0, 0, 0, 1], "instance_2"],
                            [1, [-0.91, -1.114429e-16, 0, 0.2366, 1.114429e-16, -0.91, 0, 2.33949, 0, 0, 0.91, 0.64118, 0, 0, 0, 1], "instance_3"],
                            [1, [-0.91, -1.114429e-16, 0, 0.2366, 1.114429e-16, -0.91, 0, 2.33949, 0, 0, 0.91, 3.81708, 0, 0, 0, 1], "instance_4"],
                            [1, [-0.91, -1.114429e-16, 0, 0.2366, 1.114429e-16, -0.91, 0, 4.17769, 0, 0, 0.91, 3.81708, 0, 0, 0, 1], "instance_5"],
                            [3, [0.91, 0, 0, 3.6673, 0, 0.91, 0, 2.984, 0, 0, 0.91, 3.81708, 0, 0, 0, 1], "instance_6"],
                            [3, [0.91, 0, 0, 3.6673, 0, 0.91, 0, 1.1458, 0, 0, 0.91, 3.81708, 0, 0, 0, 1], "instance_7"],
                            [4, [0.91, 0, 0, 0.2366, 0, 0.91, 0, 0.24569, 0, 0, 0.91, 0, 0, 0, 0, 1], "instance_8"],
                            [3, [0.91, 0, 0, 3.6673, 0, 0.91, 0, 1.1458, 0, 0, 0.91, 0.64118, 0, 0, 0, 1], "instance_9"],
                            [3, [0.91, 0, 0, 3.6673, 0, 0.91, 0, 2.984, 0, 0, 0.91, 0.64118, 0, 0, 0, 1], "instance_10"],
                            [5, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], "border"]
                        ], "house3"
                    ],
                    [
                        [
                            [],
                            []
                        ],
                        [], "Component_21"
                    ],
                    [
                        [
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            []
                        ],
                        [], "Component_29"
                    ],
                    [
                        [
                            [],
                            []
                        ],
                        [], "Component_21"
                    ],
                    [
                        [
                            [],
                            [],
                            []
                        ],
                        [], "Component_16"
                    ],
                    [
                        [
                            [
                                [3.8402, 5.45999, 7.60505, 0, 5.45999, 7.60505, 3.8402, 5.45999, 0, 0, 5.45999, 0, 0, 0, 0, 0, 0, 7.60505, 3.8402, 0, 7.60505, 3.8402, 0, 0]
                            ]
                        ],
                        [], "Component_34"
                    ]
                ],
                [
                    [
                        [16777215, [0, 1, 2, 3],
                            [1, 70.00001, 0, 1, 68.99998, 0, 0, 68.99998, 0, 0, 70.00001, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                            [35.87094, 31.9026, 0, 32.00725, 30.86732, 0, 32.00725, 30.86732, 3.99999, 35.87094, 31.9026, 3.99999, 35.87094, 31.9026, 0, 36.90622, 28.0389, 0, 33.0425, 27.00362, 0, 32.00725, 30.86732, 0, 32.00725, 30.86732, 0, 33.0425, 27.00362, 0, 32.00725, 30.86732, 3.99999, 36.90622, 28.0389, 0, 35.87094, 31.9026, 3.99999, 32.00725, 30.86732, 3.99999, 33.0425, 27.00362, 0, 35.87094, 31.9026, 0, 35.87094, 31.9026, 3.99999, 36.90622, 28.0389, 0],
                            [-0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.02453, 0.00657, 0, 0.02453, 0.00657, 0, 0.02453, 0.00657, 0],
                            [4, 4, 3, 4, 3]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [70.00001, 70.00001, 0, 70.00001, 68.99998, 0, 68.99998, 68.99998, 0, 68.99998, 70.00001, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [70.00001, 1, 0, 70.00001, 0, 0, 68.99998, 0, 0, 68.99998, 1, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [
                            [0, 68.99998, 0, 0, 1, 0]
                        ],
                        [
                            [1, 0, 0, 68.99998, 0, 0]
                        ],
                        [
                            [70.00001, 1, 0, 70.00001, 68.99998, 0]
                        ],
                        [
                            [68.99998, 70.00001, 0, 1, 70.00001, 0]
                        ]
                    ],
                    [
                        [0, [6.123234000000001e-17, 1, 0, 45.06378, -1, 6.123234000000001e-17, 0, 45.78131, 0, 0, 1, 0, 0, 0, 0, 1], "instance_0"],
                        [0, [1, 0, 0, 16.13833, 0, 1, 0, 34.54412, 0, 0, 1, 0, 0, 0, 0, 1], "instance_11"],
                        [0, [-1, 1.224647e-16, 0, 56.301, -1.224647e-16, -1, 0, 16.85585, 0, 0, 1, 0, 0, 0, 0, 1], "instance_12"],
                        [0, [-1.83697e-16, -1, 0, 27.37553, 1, -1.83697e-16, 0, 5.61866, 0, 0, 1, 0, 0, 0, 0, 1], "instance_13"]
                    ], "SketchUp"
                ]
            ],
            "shotgun": [
                [
                    [
                        [],
                        [
                            [1, [0.8, 0, 0, 0, 0, 0.8, 0, 0, 0, 0, 0.8, 0, 0, 0, 0, 1], "instance_1"],
                            [2, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], "border"]
                        ], "shotgun"
                    ],
                    [
                        [
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            []
                        ],
                        [], "Component_4"
                    ],
                    [
                        [
                            [
                                [0, 0, 0.456, 1.26722, 0, 0.456, 0, 0.11999, 0.456, 1.26722, 0.11999, 0.456, 1.26722, 0.11999, 0, 0, 0.11999, 0, 0, 0, 0, 1.26722, 0, 0]
                            ]
                        ],
                        [], "Component_6"
                    ]
                ],
                [
                    [
                        [16777215, [0, 1, 2, 3],
                            [2.67558, 3.02305, 0, 2.67558, 2.02305, 0, 1.67558, 2.02305, 0, 1.67558, 3.02305, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [2.67558, 52.02305, 0, 2.67558, 51.02306, 0, 1.67558, 51.02306, 0, 1.67558, 52.02305, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [51.67558, 52.02305, 0, 51.67558, 51.02306, 0, 50.67558, 51.02306, 0, 50.67558, 52.02305, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [51.67558, 3.02305, 0, 51.67558, 2.02305, 0, 50.67558, 2.02305, 0, 50.67558, 3.02305, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                            [35.43988, 13.66529, 0, 35.43988, 13.66529, 5, 36.73396, 8.83566, 0, 35.43988, 13.66529, 0, 30.61025, 12.37119, 0, 30.61025, 12.37119, 5, 35.43988, 13.66529, 5, 36.73396, 8.83566, 0, 35.43988, 13.66529, 5, 30.61025, 12.37119, 5, 31.90432, 7.54156, 0, 35.43988, 13.66529, 0, 36.73396, 8.83566, 0, 31.90432, 7.54156, 0, 30.61025, 12.37119, 0, 30.61025, 12.37119, 0, 31.90432, 7.54156, 0, 30.61025, 12.37119, 5],
                            [0.02453, 0.00657, 0, 0.02453, 0.00657, 0, 0.02453, 0.00657, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0],
                            [3, 4, 4, 4, 3]
                        ],
                        [
                            [1.67558, 51.02306, 0, 1.67558, 3.02305, 0]
                        ],
                        [
                            [50.67558, 52.02305, 0, 2.67558, 52.02305, 0]
                        ],
                        [
                            [51.67558, 3.02305, 0, 51.67558, 51.02306, 0]
                        ],
                        [
                            [2.67558, 2.02305, 0, 50.67558, 2.02305, 0]
                        ]
                    ],
                    [
                        [0, [1, 0, 0, 32.21928, 0, 1, 0, 35.26398, 0, 0, 1, 0, 0, 0, 0, 1], "instance_0"],
                        [0, [0.8660254, 0.5, 0, 30.48546, -0.5, 0.8660254, 0, 29.84919, 0, 0, 1, 0, 0, 0, 0, 1], "instance_2"],
                        [0, [0.5, 0.8660254, 0, 26.27652, -0.8660254, 0.5, 0, 26.02674, 0, 0, 1, 0, 0, 0, 0, 1], "instance_3"],
                        [0, [-1.608123e-16, 1, 0, 20.72027, -1, -1.608123e-16, 0, 24.82086, 0, 0, 1, 0, 0, 0, 0, 1], "instance_4"],
                        [0, [-0.5, 0.8660254, 0, 15.30548, -0.8660254, -0.5, 0, 26.55468, 0, 0, 1, 0, 0, 0, 0, 1], "instance_5"],
                        [0, [-0.8660254, 0.5, 0, 11.48303, -0.5, -0.8660254, 0, 30.76361, 0, 0, 1, 0, 0, 0, 0, 1], "instance_6"],
                        [0, [-1, -7.657137e-16, 0, 10.27716, 7.657137e-16, -1, 0, 36.31986, 0, 0, 1, 0, 0, 0, 0, 1], "instance_7"],
                        [0, [-0.8660254, -0.5, 0, 12.01097, 0.5, -0.8660254, 0, 41.73466, 0, 0, 1, 0, 0, 0, 0, 1], "instance_8"],
                        [0, [-0.5, -0.8660254, 0, 16.2199, 0.8660254, -0.5, 0, 45.5571, 0, 0, 1, 0, 0, 0, 0, 1], "instance_9"],
                        [0, [1.59266e-15, -1, 0, 21.77616, 1, 1.59266e-15, 0, 46.76297, 0, 0, 1, 0, 0, 0, 0, 1], "instance_10"],
                        [0, [0.5, -0.8660254, 0, 27.19095, 0.8660254, 0.5, 0, 45.02916, 0, 0, 1, 0, 0, 0, 0, 1], "instance_11"],
                        [0, [0.8660254, -0.5, 0, 31.01339, 0.5, 0.8660254, 0, 40.82023, 0, 0, 1, 0, 0, 0, 0, 1], "instance_12"]
                    ], "SketchUp"
                ]
            ],
            "pavement1": [
                [
                    [
                        [],
                        [
                            [1, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], "instance_1"],
                            [2, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -0.2, 0, 0, 0, 1], "border"]
                        ], "pavement1"
                    ],
                    [
                        [
                            []
                        ],
                        [], "Component_85"
                    ],
                    [
                        [
                            [
                                [0, 0, 0, 0, 8.99999, 0, 0, 0, 0.2, 0, 8.99999, 0.2, 8.99999, 8.99999, 0.2, 8.99999, 0, 0.2, 8.99999, 0, 0, 8.99999, 8.99999, 0]
                            ]
                        ],
                        [], "Component_86"
                    ]
                ],
                [
                    [
                        [16777215, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                            [53.5833, -45.80994, 0, 54.61858, -49.67367, 0, 50.75488, -50.70894, 0, 49.7196, -46.84522, 0, 53.5833, -45.80994, 0, 53.5833, -45.80994, 3.99999, 54.61858, -49.67367, 0, 54.61858, -49.67367, 0, 53.5833, -45.80994, 3.99999, 49.7196, -46.84522, 3.99999, 50.75488, -50.70894, 0, 49.7196, -46.84522, 0, 50.75488, -50.70894, 0, 49.7196, -46.84522, 3.99999, 53.5833, -45.80994, 0, 49.7196, -46.84522, 0, 49.7196, -46.84522, 3.99999, 53.5833, -45.80994, 3.99999],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0.02453, 0.00657, 0, 0.02453, 0.00657, 0, 0.02453, 0.00657, 0, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0],
                            [4, 3, 4, 3, 4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [29.6086, -72.24474, 0, 29.6086, -73.24474, 0, 28.6086, -73.24474, 0, 28.6086, -72.24474, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [29.6086, -23.24473, 0, 29.6086, -24.24473, 0, 28.6086, -24.24473, 0, 28.6086, -23.24473, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [78.6086, -23.24473, 0, 78.6086, -24.24473, 0, 77.6086, -24.24473, 0, 77.6086, -23.24473, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [78.6086, -72.24474, 0, 78.6086, -73.24474, 0, 77.6086, -73.24474, 0, 77.6086, -72.24474, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [
                            [28.6086, -24.24473, 0, 28.6086, -72.24474, 0]
                        ],
                        [
                            [77.6086, -23.24473, 0, 29.6086, -23.24473, 0]
                        ],
                        [
                            [78.6086, -72.24474, 0, 78.6086, -24.24473, 0]
                        ],
                        [
                            [29.6086, -73.24474, 0, 77.6086, -73.24474, 0]
                        ]
                    ],
                    [
                        [0, [1, 0, 0, 36.19672, 0, 1, 0, -35.77291, 0, 0, 1, 0.2, 0, 0, 0, 1], "instance_0"],
                        [0, [6.123234000000001e-17, 1, 0, 63.21795, -1, 6.123234000000001e-17, 0, -30.10068, 0, 0, 1, 0.2, 0, 0, 0, 1], "instance_2"],
                        [0, [-1, 1.224647e-16, 0, 68.89018, -1.224647e-16, -1, 0, -57.12191, 0, 0, 1, 0.2, 0, 0, 0, 1], "instance_3"],
                        [0, [-1.83697e-16, -1, 0, 41.86895, 1, -1.83697e-16, 0, -62.79414, 0, 0, 1, 0.2, 0, 0, 0, 1], "instance_4"]
                    ], "SketchUp"
                ]
            ],
            "money": [
                [
                    [
                        [],
                        [
                            [1, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], "border"],
                            [2, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], "instance_1"]
                        ], "money"
                    ],
                    [
                        [
                            [
                                [0.51999, 0.25999, 0, 0, 0.25999, 0, 0.51999, 0, 0, 0, 0, 0, 0, 0, 0.11999, 0, 0.25999, 0.11999, 0.51999, 0.25999, 0.11999, 0.51999, 0, 0.11999]
                            ]
                        ],
                        [], "Component_9"
                    ],
                    [
                        [
                            []
                        ],
                        [], "Component_8"
                    ]
                ],
                [
                    [
                        [16777215, [0, 1, 2, 3],
                            [2.67558, 3.02305, 0, 2.67558, 2.02305, 0, 1.67558, 2.02305, 0, 1.67558, 3.02305, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [2.67558, 52.02305, 0, 2.67558, 51.02306, 0, 1.67558, 51.02306, 0, 1.67558, 52.02305, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [51.67558, 52.02305, 0, 51.67558, 51.02306, 0, 50.67558, 51.02306, 0, 50.67558, 52.02305, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [51.67558, 3.02305, 0, 51.67558, 2.02305, 0, 50.67558, 2.02305, 0, 50.67558, 3.02305, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                            [35.43988, 13.66529, 0, 35.43988, 13.66529, 5, 36.73396, 8.83566, 0, 35.43988, 13.66529, 0, 30.61025, 12.37119, 0, 30.61025, 12.37119, 5, 35.43988, 13.66529, 5, 36.73396, 8.83566, 0, 35.43988, 13.66529, 5, 30.61025, 12.37119, 5, 31.90432, 7.54156, 0, 35.43988, 13.66529, 0, 36.73396, 8.83566, 0, 31.90432, 7.54156, 0, 30.61025, 12.37119, 0, 30.61025, 12.37119, 0, 31.90432, 7.54156, 0, 30.61025, 12.37119, 5],
                            [0.02453, 0.00657, 0, 0.02453, 0.00657, 0, 0.02453, 0.00657, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0],
                            [3, 4, 4, 4, 3]
                        ],
                        [
                            [1.67558, 51.02306, 0, 1.67558, 3.02305, 0]
                        ],
                        [
                            [50.67558, 52.02305, 0, 2.67558, 52.02305, 0]
                        ],
                        [
                            [51.67558, 3.02305, 0, 51.67558, 51.02306, 0]
                        ],
                        [
                            [2.67558, 2.02305, 0, 50.67558, 2.02305, 0]
                        ]
                    ],
                    [
                        [0, [1, 0, 0, 32.88045, 0, 1, 0, 35.80846, 0, 0, 1, 0, 0, 0, 0, 1], "instance_0"]
                    ], "SketchUp"
                ]
            ],
            "handgun": [
                [
                    [
                        [],
                        [
                            [1, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], "border"],
                            [2, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], "instance_1"]
                        ], "handgun"
                    ],
                    [
                        [
                            [
                                [0.66434, 0.13999, 0, 0, 0.13999, 0, 0.66434, 0, 0, 0, 0, 0, 0, 0, 0.48, 0.66434, 0, 0.48, 0.66434, 0.13999, 0.48, 0, 0.13999, 0.48]
                            ]
                        ],
                        [], "Component_2"
                    ],
                    [
                        [
                            [],
                            [],
                            [],
                            [],
                            [],
                            []
                        ],
                        [], "Component_1"
                    ]
                ],
                [
                    [
                        [16777215, [0, 1, 2, 3],
                            [2.67558, 3.02305, 0, 2.67558, 2.02305, 0, 1.67558, 2.02305, 0, 1.67558, 3.02305, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [2.67558, 52.02305, 0, 2.67558, 51.02306, 0, 1.67558, 51.02306, 0, 1.67558, 52.02305, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [51.67558, 52.02305, 0, 51.67558, 51.02306, 0, 50.67558, 51.02306, 0, 50.67558, 52.02305, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [51.67558, 3.02305, 0, 51.67558, 2.02305, 0, 50.67558, 2.02305, 0, 50.67558, 3.02305, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                            [35.43988, 13.66529, 0, 35.43988, 13.66529, 5, 36.73396, 8.83566, 0, 35.43988, 13.66529, 0, 30.61025, 12.37119, 0, 30.61025, 12.37119, 5, 35.43988, 13.66529, 5, 36.73396, 8.83566, 0, 35.43988, 13.66529, 5, 30.61025, 12.37119, 5, 31.90432, 7.54156, 0, 35.43988, 13.66529, 0, 36.73396, 8.83566, 0, 31.90432, 7.54156, 0, 30.61025, 12.37119, 0, 30.61025, 12.37119, 0, 31.90432, 7.54156, 0, 30.61025, 12.37119, 5],
                            [0.02453, 0.00657, 0, 0.02453, 0.00657, 0, 0.02453, 0.00657, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0],
                            [3, 4, 4, 4, 3]
                        ],
                        [
                            [1.67558, 51.02306, 0, 1.67558, 3.02305, 0]
                        ],
                        [
                            [50.67558, 52.02305, 0, 2.67558, 52.02305, 0]
                        ],
                        [
                            [51.67558, 3.02305, 0, 51.67558, 51.02306, 0]
                        ],
                        [
                            [2.67558, 2.02305, 0, 50.67558, 2.02305, 0]
                        ]
                    ],
                    [
                        [0, [1, 0, 0, 32.91911, 0, 1, 0, 34.86683, 0, 0, 1, -0.00001, 0, 0, 0, 1], "instance_0"],
                        [0, [0.8660254, 0.5, 0, 31.48969, -0.5, 0.8660254, 0, 29.32404, 0, 0, 1, -0.00001, 0, 0, 0, 1], "instance_2"],
                        [0, [0.5, 0.8660254, 0, 27.48038, -0.8660254, 0.5, 0, 25.23855, 0, 0, 1, -0.00001, 0, 0, 0, 1], "instance_3"],
                        [0, [-1.608123e-16, 1, 0, 21.96549, -1, -1.608123e-16, 0, 23.70507, 0, 0, 1, -0.00001, 0, 0, 0, 1], "instance_4"],
                        [0, [-0.5, 0.8660254, 0, 16.42271, -0.8660254, -0.5, 0, 25.13448, 0, 0, 1, -0.00001, 0, 0, 0, 1], "instance_5"],
                        [0, [-0.8660254, 0.5, 0, 12.33722, -0.5, -0.8660254, 0, 29.14378, 0, 0, 1, -0.00001, 0, 0, 0, 1], "instance_6"],
                        [0, [-1, -7.657137e-16, 0, 10.80374, 7.657137e-16, -1, 0, 34.65867, 0, 0, 1, -0.00001, 0, 0, 0, 1], "instance_7"],
                        [0, [-0.8660254, -0.5, 0, 12.23315, 0.5, -0.8660254, 0, 40.20146, 0, 0, 1, -0.00001, 0, 0, 0, 1], "instance_8"],
                        [0, [-0.5, -0.8660254, 0, 16.24245, 0.8660254, -0.5, 0, 44.28695, 0, 0, 1, -0.00001, 0, 0, 0, 1], "instance_9"],
                        [0, [1.59266e-15, -1, 0, 21.75734, 1, 1.59266e-15, 0, 45.82043, 0, 0, 1, -0.00001, 0, 0, 0, 1], "instance_10"],
                        [0, [0.5, -0.8660254, 0, 27.30012, 0.8660254, 0.5, 0, 44.39101, 0, 0, 1, -0.00001, 0, 0, 0, 1], "instance_11"],
                        [0, [0.8660254, -0.5, 0, 31.38561, 0.5, 0.8660254, 0, 40.38173, 0, 0, 1, -0.00001, 0, 0, 0, 1], "instance_12"]
                    ], "SketchUp"
                ]
            ],
            "tree4": [
                [
                    [
                        [],
                        [
                            [1, [1.34, 0, 0, 0, 0, 1.34, 0, 0, 0, 0, 1.34, 0, 0, 0, 0, 1], "instance_1"],
                            [2, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], "border"]
                        ], "tree4"
                    ],
                    [
                        [
                            [],
                            []
                        ],
                        [], "Component_41"
                    ],
                    [
                        [
                            [
                                [1.90815, 0, 7.33228, 1.90815, 1.90815, 7.33228, 1.90815, 0, 0, 1.90815, 1.90815, 0, 0, 1.90815, 0, 0, 0, 0, 0, 0, 7.33228, 0, 1.90815, 7.33228]
                            ]
                        ],
                        [], "Component_45"
                    ]
                ],
                [
                    [
                        [16777215, [0, 1, 2, 3],
                            [1, 70.00001, 0, 1, 68.99998, 0, 0, 68.99998, 0, 0, 70.00001, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                            [35.87094, 31.9026, 0, 32.00725, 30.86732, 0, 32.00725, 30.86732, 3.99999, 35.87094, 31.9026, 3.99999, 35.87094, 31.9026, 0, 36.90622, 28.0389, 0, 33.0425, 27.00362, 0, 32.00725, 30.86732, 0, 32.00725, 30.86732, 0, 33.0425, 27.00362, 0, 32.00725, 30.86732, 3.99999, 36.90622, 28.0389, 0, 35.87094, 31.9026, 3.99999, 32.00725, 30.86732, 3.99999, 33.0425, 27.00362, 0, 35.87094, 31.9026, 0, 35.87094, 31.9026, 3.99999, 36.90622, 28.0389, 0],
                            [-0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.02453, 0.00657, 0, 0.02453, 0.00657, 0, 0.02453, 0.00657, 0],
                            [4, 4, 3, 4, 3]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [70.00001, 70.00001, 0, 70.00001, 68.99998, 0, 68.99998, 68.99998, 0, 68.99998, 70.00001, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [70.00001, 1, 0, 70.00001, 0, 0, 68.99998, 0, 0, 68.99998, 1, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [
                            [0, 68.99998, 0, 0, 1, 0]
                        ],
                        [
                            [1, 0, 0, 68.99998, 0, 0]
                        ],
                        [
                            [70.00001, 1, 0, 70.00001, 68.99998, 0]
                        ],
                        [
                            [68.99998, 70.00001, 0, 1, 70.00001, 0]
                        ]
                    ],
                    [
                        [0, [6.123234000000001e-17, 1, 0, 45.06378, -1, 6.123234000000001e-17, 0, 45.78131, 0, 0, 1, 0, 0, 0, 0, 1], "instance_0"],
                        [0, [1, 0, 0, 16.13833, 0, 1, 0, 34.54412, 0, 0, 1, 0, 0, 0, 0, 1], "instance_2"],
                        [0, [-1, 1.224647e-16, 0, 56.301, -1.224647e-16, -1, 0, 16.85585, 0, 0, 1, 0, 0, 0, 0, 1], "instance_3"],
                        [0, [-1.83697e-16, -1, 0, 27.37553, 1, -1.83697e-16, 0, 5.61866, 0, 0, 1, 0, 0, 0, 0, 1], "instance_4"]
                    ], "SketchUp"
                ]
            ],
            "car4": [
                [
                    [
                        [],
                        [
                            [1, [1, 0, 0, 0, 0, 1, 0, 0.05, 0, 0, 1, 0, 0, 0, 0, 1], "border"],
                            [2, [1, 0, 0, 0, 0, 1, 0, -0.09, 0, 0, 1, 0, 0, 0, 0, 1], "instance_1"]
                        ], "car4"
                    ],
                    [
                        [
                            [
                                [0, -0.04935, 1.26904, 0, -0.04935, 0, 2.78999, -0.04935, 1.26904, 2.78999, -0.04935, 0, 2.88999, 0.705, 0, 2.88999, 0.705, 1.26904, 2.78999, 1.45934, 1.26904, 0, 1.45934, 1.26904, 0, 1.45934, 0, 2.78999, 1.45934, 0]
                            ]
                        ],
                        [], "border1"
                    ],
                    [
                        [
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            []
                        ],
                        [
                            [3, [0, -0.7, 0, 0.67594, 0.7, 0, 0, -0.00001, 0, 0, 0.7, 0, 0, 0, 0, 1], "instance_2"],
                            [3, [0, -0.7, 0, 2.41594, 0.7, 0, 0, -0.00001, 0, 0, 0.7, 0, 0, 0, 0, 1], "instance_3"],
                            [4, [0, -0.7, 0, 0.67594, -0.7, 0, 0, 1.68999, 0, 0, 0.7, 0, 0, 0, 0, 1], "instance_4"],
                            [4, [0, -0.7, 0, 2.41594, -0.7, 0, 0, 1.68999, 0, 0, 0.7, 0, 0, 0, 0, 1], "instance_5"]
                        ], "Component_51"
                    ],
                    [
                        [
                            [],
                            []
                        ],
                        [], "Group_1"
                    ],
                    [
                        [
                            [],
                            []
                        ],
                        [], "Group_1"
                    ]
                ],
                [
                    [
                        [16777215, [0, 1, 2, 3],
                            [1, 70.00001, 0, 1, 68.99998, 0, 0, 68.99998, 0, 0, 70.00001, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                            [35.87094, 31.9026, 0, 32.00725, 30.86732, 0, 32.00725, 30.86732, 3.99999, 35.87094, 31.9026, 3.99999, 35.87094, 31.9026, 0, 36.90622, 28.0389, 0, 33.0425, 27.00362, 0, 32.00725, 30.86732, 0, 32.00725, 30.86732, 0, 33.0425, 27.00362, 0, 32.00725, 30.86732, 3.99999, 36.90622, 28.0389, 0, 35.87094, 31.9026, 3.99999, 32.00725, 30.86732, 3.99999, 33.0425, 27.00362, 0, 35.87094, 31.9026, 0, 35.87094, 31.9026, 3.99999, 36.90622, 28.0389, 0],
                            [-0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.02453, 0.00657, 0, 0.02453, 0.00657, 0, 0.02453, 0.00657, 0],
                            [4, 4, 3, 4, 3]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [70.00001, 70.00001, 0, 70.00001, 68.99998, 0, 68.99998, 68.99998, 0, 68.99998, 70.00001, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [70.00001, 1, 0, 70.00001, 0, 0, 68.99998, 0, 0, 68.99998, 1, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [
                            [0, 68.99998, 0, 0, 1, 0]
                        ],
                        [
                            [1, 0, 0, 68.99998, 0, 0]
                        ],
                        [
                            [70.00001, 1, 0, 70.00001, 68.99998, 0]
                        ],
                        [
                            [68.99998, 70.00001, 0, 1, 70.00001, 0]
                        ]
                    ],
                    [
                        [0, [1, 0, 0, 16.75833, 0, 1, 0, 34.54412, 0, 0, 1, 0, 0, 0, 0, 1], "instance_0"],
                        [0, [0.8660254, 0.5, 0, 23.20748, -0.5, 0.8660254, 0, 39.90428, 0, 0, 1, 0, 0, 0, 0, 1], "instance_6"],
                        [0, [0.5, 0.8660254, 0, 31.4727, -0.8660254, 0.5, 0, 41.32176, 0, 0, 1, 0, 0, 0, 0, 1], "instance_7"],
                        [0, [-1.608123e-16, 1, 0, 39.33931, -1, -1.608123e-16, 0, 38.41671, 0, 0, 1, 0, 0, 0, 0, 1], "instance_8"],
                        [0, [-0.5, 0.8660254, 0, 44.6995, -0.8660254, -0.5, 0, 31.96757, 0, 0, 1, 0, 0, 0, 0, 1], "instance_9"],
                        [0, [-0.8660254, 0.5, 0, 46.11697, -0.5, -0.8660254, 0, 23.70235, 0, 0, 1, 0, 0, 0, 0, 1], "instance_10"],
                        [0, [-1, -7.657137e-16, 0, 43.21192, 7.657137e-16, -1, 0, 15.83573, 0, 0, 1, 0, 0, 0, 0, 1], "instance_11"],
                        [0, [-0.8660254, -0.5, 0, 36.76276, 0.5, -0.8660254, 0, 10.47556, 0, 0, 1, 0, 0, 0, 0, 1], "instance_12"],
                        [0, [-0.5, -0.8660254, 0, 28.49755, 0.8660254, -0.5, 0, 9.05809, 0, 0, 1, 0, 0, 0, 0, 1], "instance_13"],
                        [0, [1.59266e-15, -1, 0, 20.63093, 1, 1.59266e-15, 0, 11.96313, 0, 0, 1, 0, 0, 0, 0, 1], "instance_14"],
                        [0, [0.5, -0.8660254, 0, 15.27075, 0.8660254, 0.5, 0, 18.41228, 0, 0, 1, 0, 0, 0, 0, 1], "instance_15"],
                        [0, [0.8660254, -0.5, 0, 13.85329, 0.5, 0.8660254, 0, 26.67749, 0, 0, 1, 0, 0, 0, 0, 1], "instance_16"]
                    ], "SketchUp"
                ]
            ],
            "house1": [
                [
                    [
                        [],
                        [
                            [1, [0.85, 0, 0, 5.38049, 0, 0.85, 0, 0.68849, 0, 0, 0.85, 6.7869, 0, 0, 0, 1], "instance_1"],
                            [2, [-0.85, -1.04095e-16, 0, 0.16999, 1.04095e-16, -0.85, 0, 5.4825, 0, 0, 0.85, 3.6929, 0, 0, 0, 1], "instance_2"],
                            [1, [0.85, 0, 0, 5.38049, 0, 0.85, 0, 2.40549, 0, 0, 0.85, 3.6929, 0, 0, 0, 1], "instance_3"],
                            [2, [-0.85, -1.04095e-16, 0, 0.16999, 1.04095e-16, -0.85, 0, 2.0485, 0, 0, 0.85, 3.6929, 0, 0, 0, 1], "instance_4"],
                            [3, [0.85, 0, 0, 0.16999, 0, 0.85, 0, 0.16999, 0, 0, 0.85, 0, 0, 0, 0, 1], "instance_5"],
                            [1, [0.85, 0, 0, 5.38049, 0, 0.85, 0, 4.12249, 0, 0, 0.85, 0.5989, 0, 0, 0, 1], "instance_6"],
                            [1, [0.85, 0, 0, 5.38049, 0, 0.85, 0, 4.12249, 0, 0, 0.85, 6.7869, 0, 0, 0, 1], "instance_7"],
                            [2, [-0.85, -1.04095e-16, 0, 0.16999, 1.04095e-16, -0.85, 0, 2.0485, 0, 0, 0.85, 6.7869, 0, 0, 0, 1], "instance_8"],
                            [1, [0.85, 0, 0, 5.38049, 0, 0.85, 0, 0.68849, 0, 0, 0.85, 3.6929, 0, 0, 0, 1], "instance_9"],
                            [2, [-0.85, -1.04095e-16, 0, 0.16999, 1.04095e-16, -0.85, 0, 3.76549, 0, 0, 0.85, 6.7869, 0, 0, 0, 1], "instance_10"],
                            [2, [-0.85, -1.04095e-16, 0, 0.16999, 1.04095e-16, -0.85, 0, 2.0485, 0, 0, 0.85, 0.5989, 0, 0, 0, 1], "instance_11"],
                            [2, [-0.85, -1.04095e-16, 0, 0.16999, 1.04095e-16, -0.85, 0, 5.4825, 0, 0, 0.85, 6.7869, 0, 0, 0, 1], "instance_12"],
                            [1, [0.85, 0, 0, 5.38049, 0, 0.85, 0, 4.12249, 0, 0, 0.85, 3.6929, 0, 0, 0, 1], "instance_13"],
                            [2, [-0.85, -1.04095e-16, 0, 0.16999, 1.04095e-16, -0.85, 0, 3.76549, 0, 0, 0.85, 0.5989, 0, 0, 0, 1], "instance_14"],
                            [4, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], "border"],
                            [1, [0.85, 0, 0, 5.38049, 0, 0.85, 0, 2.40549, 0, 0, 0.85, 6.7869, 0, 0, 0, 1], "instance_15"],
                            [2, [-0.85, -1.04095e-16, 0, 0.16999, 1.04095e-16, -0.85, 0, 3.76549, 0, 0, 0.85, 3.6929, 0, 0, 0, 1], "instance_16"],
                            [1, [0.85, 0, 0, 5.38049, 0, 0.85, 0, 0.68849, 0, 0, 0.85, 0.5989, 0, 0, 0, 1], "instance_17"],
                            [5, [-0.85, 0, 0, 5.55049, 0, 0.85, 0, 2.40549, 0, 0, 1.189474, 0, 0, 0, 0, 1], "instance_18"],
                            [2, [-0.85, -1.04095e-16, 0, 0.16999, 1.04095e-16, -0.85, 0, 5.4825, 0, 0, 0.85, 0.5989, 0, 0, 0, 1], "instance_19"]
                        ], "house1"
                    ],
                    [
                        [
                            [],
                            []
                        ],
                        [], "Component_21"
                    ],
                    [
                        [
                            [],
                            []
                        ],
                        [], "Component_21"
                    ],
                    [
                        [
                            [],
                            [],
                            []
                        ],
                        [], "Component_14"
                    ],
                    [
                        [
                            [
                                [5.55049, 0, 10.96261, 5.55049, 6.171, 10.96261, 0, 0, 10.96261, 0, 0, 0, 0, 6.171, 0, 0, 6.171, 10.96261, 5.55049, 6.171, 0, 5.55049, 0, 0]
                            ]
                        ],
                        [], "Component_36"
                    ],
                    [
                        [
                            [],
                            []
                        ],
                        [], "Component_21"
                    ]
                ],
                [
                    [
                        [16777215, [0, 1, 2, 3],
                            [1, 70.00001, 0, 1, 68.99998, 0, 0, 68.99998, 0, 0, 70.00001, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                            [35.87094, 31.9026, 0, 32.00725, 30.86732, 0, 32.00725, 30.86732, 3.99999, 35.87094, 31.9026, 3.99999, 35.87094, 31.9026, 0, 36.90622, 28.0389, 0, 33.0425, 27.00362, 0, 32.00725, 30.86732, 0, 32.00725, 30.86732, 0, 33.0425, 27.00362, 0, 32.00725, 30.86732, 3.99999, 36.90622, 28.0389, 0, 35.87094, 31.9026, 3.99999, 32.00725, 30.86732, 3.99999, 33.0425, 27.00362, 0, 35.87094, 31.9026, 0, 35.87094, 31.9026, 3.99999, 36.90622, 28.0389, 0],
                            [-0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.02453, 0.00657, 0, 0.02453, 0.00657, 0, 0.02453, 0.00657, 0],
                            [4, 4, 3, 4, 3]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [70.00001, 70.00001, 0, 70.00001, 68.99998, 0, 68.99998, 68.99998, 0, 68.99998, 70.00001, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [70.00001, 1, 0, 70.00001, 0, 0, 68.99998, 0, 0, 68.99998, 1, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [
                            [0, 68.99998, 0, 0, 1, 0]
                        ],
                        [
                            [1, 0, 0, 68.99998, 0, 0]
                        ],
                        [
                            [70.00001, 1, 0, 70.00001, 68.99998, 0]
                        ],
                        [
                            [68.99998, 70.00001, 0, 1, 70.00001, 0]
                        ]
                    ],
                    [
                        [0, [6.123234000000001e-17, 1, 0, 45.06378, -1, 6.123234000000001e-17, 0, 45.78131, 0, 0, 1, 0, 0, 0, 0, 1], "instance_0"],
                        [0, [1, 0, 0, 16.13833, 0, 1, 0, 34.54412, 0, 0, 1, 0, 0, 0, 0, 1], "instance_20"],
                        [0, [-1, 1.224647e-16, 0, 56.301, -1.224647e-16, -1, 0, 16.85585, 0, 0, 1, 0, 0, 0, 0, 1], "instance_21"],
                        [0, [-1.83697e-16, -1, 0, 27.37553, 1, -1.83697e-16, 0, 5.61866, 0, 0, 1, 0, 0, 0, 0, 1], "instance_22"]
                    ], "SketchUp"
                ]
            ],
            "tree3": [
                [
                    [
                        [],
                        [
                            [1, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], "border"],
                            [2, [1.2, 0, 0, 0, 0, 1.2, 0, 0, 0, 0, 1.2, 0, 0, 0, 0, 1], "instance_1"]
                        ], "tree3"
                    ],
                    [
                        [
                            [
                                [1.70879, 1.70879, 0, 1.70879, 1.70879, 6.56622, 0, 1.70879, 0, 0, 0, 0, 1.70879, 0, 0, 1.70879, 0, 6.56622, 0, 0, 6.56622, 0, 1.70879, 6.56622]
                            ]
                        ],
                        [], "Component_44"
                    ],
                    [
                        [
                            [],
                            []
                        ],
                        [], "Component_40"
                    ]
                ],
                [
                    [
                        [16777215, [0, 1, 2, 3],
                            [1, 70.00001, 0, 1, 68.99998, 0, 0, 68.99998, 0, 0, 70.00001, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                            [35.87094, 31.9026, 0, 32.00725, 30.86732, 0, 32.00725, 30.86732, 3.99999, 35.87094, 31.9026, 3.99999, 35.87094, 31.9026, 0, 36.90622, 28.0389, 0, 33.0425, 27.00362, 0, 32.00725, 30.86732, 0, 32.00725, 30.86732, 0, 33.0425, 27.00362, 0, 32.00725, 30.86732, 3.99999, 36.90622, 28.0389, 0, 35.87094, 31.9026, 3.99999, 32.00725, 30.86732, 3.99999, 33.0425, 27.00362, 0, 35.87094, 31.9026, 0, 35.87094, 31.9026, 3.99999, 36.90622, 28.0389, 0],
                            [-0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.02453, 0.00657, 0, 0.02453, 0.00657, 0, 0.02453, 0.00657, 0],
                            [4, 4, 3, 4, 3]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [70.00001, 70.00001, 0, 70.00001, 68.99998, 0, 68.99998, 68.99998, 0, 68.99998, 70.00001, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [70.00001, 1, 0, 70.00001, 0, 0, 68.99998, 0, 0, 68.99998, 1, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [
                            [0, 68.99998, 0, 0, 1, 0]
                        ],
                        [
                            [1, 0, 0, 68.99998, 0, 0]
                        ],
                        [
                            [70.00001, 1, 0, 70.00001, 68.99998, 0]
                        ],
                        [
                            [68.99998, 70.00001, 0, 1, 70.00001, 0]
                        ]
                    ],
                    [
                        [0, [6.123234000000001e-17, 1, 0, 45.06378, -1, 6.123234000000001e-17, 0, 45.78131, 0, 0, 1, 0, 0, 0, 0, 1], "instance_0"],
                        [0, [1, 0, 0, 16.13833, 0, 1, 0, 34.54412, 0, 0, 1, 0, 0, 0, 0, 1], "instance_2"],
                        [0, [-1, 1.224647e-16, 0, 56.301, -1.224647e-16, -1, 0, 16.85585, 0, 0, 1, 0, 0, 0, 0, 1], "instance_3"],
                        [0, [-1.83697e-16, -1, 0, 27.37553, 1, -1.83697e-16, 0, 5.61866, 0, 0, 1, 0, 0, 0, 0, 1], "instance_4"]
                    ], "SketchUp"
                ]
            ],
            "car3": [
                [
                    [
                        [],
                        [
                            [1, [1, 0, 0, 0, 0, 1, 0, 0.05, 0, 0, 1, 0, 0, 0, 0, 1], "border"],
                            [2, [1, 0, 0, 0, 0, 1, 0, -0.09, 0, 0, 1, 0, 0, 0, 0, 1], "instance_1"]
                        ], "car3"
                    ],
                    [
                        [
                            [
                                [0, -0.04935, 1.26904, 0, -0.04935, 0, 2.78999, -0.04935, 1.26904, 2.78999, -0.04935, 0, 2.88999, 0.705, 0, 2.88999, 0.705, 1.26904, 2.78999, 1.45934, 1.26904, 0, 1.45934, 1.26904, 0, 1.45934, 0, 2.78999, 1.45934, 0]
                            ]
                        ],
                        [], "border1"
                    ],
                    [
                        [
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            []
                        ],
                        [
                            [3, [0, -0.7, 0, 0.67594, 0.7, 0, 0, -0.00001, 0, 0, 0.7, 0, 0, 0, 0, 1], "instance_2"],
                            [3, [0, -0.7, 0, 2.41594, 0.7, 0, 0, -0.00001, 0, 0, 0.7, 0, 0, 0, 0, 1], "instance_3"],
                            [4, [0, -0.7, 0, 0.67594, -0.7, 0, 0, 1.68999, 0, 0, 0.7, 0, 0, 0, 0, 1], "instance_4"],
                            [4, [0, -0.7, 0, 2.41594, -0.7, 0, 0, 1.68999, 0, 0, 0.7, 0, 0, 0, 0, 1], "instance_5"]
                        ], "Component_51"
                    ],
                    [
                        [
                            [],
                            []
                        ],
                        [], "Group_1"
                    ],
                    [
                        [
                            [],
                            []
                        ],
                        [], "Group_1"
                    ]
                ],
                [
                    [
                        [16777215, [0, 1, 2, 3],
                            [1, 70.00001, 0, 1, 68.99998, 0, 0, 68.99998, 0, 0, 70.00001, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                            [35.87094, 31.9026, 0, 32.00725, 30.86732, 0, 32.00725, 30.86732, 3.99999, 35.87094, 31.9026, 3.99999, 35.87094, 31.9026, 0, 36.90622, 28.0389, 0, 33.0425, 27.00362, 0, 32.00725, 30.86732, 0, 32.00725, 30.86732, 0, 33.0425, 27.00362, 0, 32.00725, 30.86732, 3.99999, 36.90622, 28.0389, 0, 35.87094, 31.9026, 3.99999, 32.00725, 30.86732, 3.99999, 33.0425, 27.00362, 0, 35.87094, 31.9026, 0, 35.87094, 31.9026, 3.99999, 36.90622, 28.0389, 0],
                            [-0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.02453, 0.00657, 0, 0.02453, 0.00657, 0, 0.02453, 0.00657, 0],
                            [4, 4, 3, 4, 3]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [70.00001, 70.00001, 0, 70.00001, 68.99998, 0, 68.99998, 68.99998, 0, 68.99998, 70.00001, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [70.00001, 1, 0, 70.00001, 0, 0, 68.99998, 0, 0, 68.99998, 1, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [
                            [0, 68.99998, 0, 0, 1, 0]
                        ],
                        [
                            [1, 0, 0, 68.99998, 0, 0]
                        ],
                        [
                            [70.00001, 1, 0, 70.00001, 68.99998, 0]
                        ],
                        [
                            [68.99998, 70.00001, 0, 1, 70.00001, 0]
                        ]
                    ],
                    [
                        [0, [1, 0, 0, 16.75833, 0, 1, 0, 34.54412, 0, 0, 1, 0, 0, 0, 0, 1], "instance_0"],
                        [0, [0.8660254, 0.5, 0, 23.20748, -0.5, 0.8660254, 0, 39.90428, 0, 0, 1, 0, 0, 0, 0, 1], "instance_6"],
                        [0, [0.5, 0.8660254, 0, 31.4727, -0.8660254, 0.5, 0, 41.32176, 0, 0, 1, 0, 0, 0, 0, 1], "instance_7"],
                        [0, [-1.608123e-16, 1, 0, 39.33931, -1, -1.608123e-16, 0, 38.41671, 0, 0, 1, 0, 0, 0, 0, 1], "instance_8"],
                        [0, [-0.5, 0.8660254, 0, 44.6995, -0.8660254, -0.5, 0, 31.96757, 0, 0, 1, 0, 0, 0, 0, 1], "instance_9"],
                        [0, [-0.8660254, 0.5, 0, 46.11697, -0.5, -0.8660254, 0, 23.70235, 0, 0, 1, 0, 0, 0, 0, 1], "instance_10"],
                        [0, [-1, -7.657137e-16, 0, 43.21192, 7.657137e-16, -1, 0, 15.83573, 0, 0, 1, 0, 0, 0, 0, 1], "instance_11"],
                        [0, [-0.8660254, -0.5, 0, 36.76276, 0.5, -0.8660254, 0, 10.47556, 0, 0, 1, 0, 0, 0, 0, 1], "instance_12"],
                        [0, [-0.5, -0.8660254, 0, 28.49755, 0.8660254, -0.5, 0, 9.05809, 0, 0, 1, 0, 0, 0, 0, 1], "instance_13"],
                        [0, [1.59266e-15, -1, 0, 20.63093, 1, 1.59266e-15, 0, 11.96313, 0, 0, 1, 0, 0, 0, 0, 1], "instance_14"],
                        [0, [0.5, -0.8660254, 0, 15.27075, 0.8660254, 0.5, 0, 18.41228, 0, 0, 1, 0, 0, 0, 0, 1], "instance_15"],
                        [0, [0.8660254, -0.5, 0, 13.85329, 0.5, 0.8660254, 0, 26.67749, 0, 0, 1, 0, 0, 0, 0, 1], "instance_16"]
                    ], "SketchUp"
                ]
            ],
            "house7": [
                [
                    [
                        [],
                        [
                            [1, [-0.8064, -9.875552000000001e-17, 0, 0.25804, 9.875552000000001e-17, -0.8064, 0, 1.85633, 0, 0, 0.8064, 3.38252, 0, 0, 0, 1], "instance_1"],
                            [2, [0.8064, 0, 0, 4.69324, 0, 0.8064, 0, 4.02232, 0, 0, 0.8064, 0.56818, 0, 0, 0, 1], "instance_2"],
                            [2, [0.8064, 0, 0, 4.69324, 0, 0.8064, 0, 2.39339, 0, 0, 0.8064, 0.56818, 0, 0, 0, 1], "instance_3"],
                            [2, [0.8064, 0, 0, 4.69324, 0, 0.8064, 0, 0.76446, 0, 0, 0.8064, 3.38252, 0, 0, 0, 1], "instance_4"],
                            [3, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], "border"],
                            [2, [0.8064, 0, 0, 4.69324, 0, 0.8064, 0, 4.02232, 0, 0, 0.8064, 3.38252, 0, 0, 0, 1], "instance_5"],
                            [2, [0.8064, 0, 0, 4.69324, 0, 0.8064, 0, 2.39339, 0, 0, 0.8064, 3.38252, 0, 0, 0, 1], "instance_6"],
                            [1, [-0.8064, -9.875552000000001e-17, 0, 0.25804, 9.875552000000001e-17, -0.8064, 0, 5.11419, 0, 0, 0.8064, 0.56818, 0, 0, 0, 1], "instance_7"],
                            [1, [-0.8064, -9.875552000000001e-17, 0, 0.25804, 9.875552000000001e-17, -0.8064, 0, 3.48526, 0, 0, 0.8064, 0.56818, 0, 0, 0, 1], "instance_8"],
                            [4, [0.8064, 0, 0, 0.25804, 0, 0.8064, 0, 0.31449, 0, 0, 0.8064, 0, 0, 0, 0, 1], "instance_9"],
                            [2, [0.8064, 0, 0, 4.69324, 0, 0.8064, 0, 0.76446, 0, 0, 0.8064, 0.56818, 0, 0, 0, 1], "instance_11"],
                            [1, [-0.8064, -9.875552000000001e-17, 0, 0.25804, 9.875552000000001e-17, -0.8064, 0, 5.11419, 0, 0, 0.8064, 3.38252, 0, 0, 0, 1], "instance_12"],
                            [1, [-0.8064, -9.875552000000001e-17, 0, 0.25804, 9.875552000000001e-17, -0.8064, 0, 3.48526, 0, 0, 0.8064, 3.38252, 0, 0, 0, 1], "instance_13"],
                            [1, [-0.8064, -9.875552000000001e-17, 0, 0.25804, 9.875552000000001e-17, -0.8064, 0, 1.85633, 0, 0, 0.8064, 0.56818, 0, 0, 0, 1], "instance_14"]
                        ], "house7"
                    ],
                    [
                        [
                            [],
                            []
                        ],
                        [], "Component_21"
                    ],
                    [
                        [
                            [],
                            []
                        ],
                        [], "Component_21"
                    ],
                    [
                        [
                            [
                                [4.8384, 0, 7.47307, 4.8384, 5.66899, 7.47307, 0, 0, 7.47307, 0, 5.66899, 7.47307, 0, 5.66899, 0, 0, 0, 0, 4.8384, 0, 0, 4.8384, 5.66899, 0]
                            ]
                        ],
                        [], "Component_31"
                    ],
                    [
                        [
                            [],
                            [],
                            []
                        ],
                        [
                            [5, [8.006023000000001e-17, -1, 0, 6.51984, 1.307483, 6.123234000000001e-17, 0, 0.30499, 0, 0, 1, 2.57995, 0, 0, 0, 1], "instance_10"]
                        ], "Component_20"
                    ],
                    [
                        [
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            [],
                            []
                        ],
                        [], "Component_30"
                    ]
                ],
                [
                    [
                        [16777215, [0, 1, 2, 3],
                            [1, 70.00001, 0, 1, 68.99998, 0, 0, 68.99998, 0, 0, 70.00001, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                            [35.87094, 31.9026, 0, 32.00725, 30.86732, 0, 32.00725, 30.86732, 3.99999, 35.87094, 31.9026, 3.99999, 35.87094, 31.9026, 0, 36.90622, 28.0389, 0, 33.0425, 27.00362, 0, 32.00725, 30.86732, 0, 32.00725, 30.86732, 0, 33.0425, 27.00362, 0, 32.00725, 30.86732, 3.99999, 36.90622, 28.0389, 0, 35.87094, 31.9026, 3.99999, 32.00725, 30.86732, 3.99999, 33.0425, 27.00362, 0, 35.87094, 31.9026, 0, 35.87094, 31.9026, 3.99999, 36.90622, 28.0389, 0],
                            [-0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, -0.00658, 0.02453, 0, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0, -0.02454, -0.00658, 0, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.00464, -0.01735, 0.01796, 0.02453, 0.00657, 0, 0.02453, 0.00657, 0, 0.02453, 0.00657, 0],
                            [4, 4, 3, 4, 3]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [70.00001, 70.00001, 0, 70.00001, 68.99998, 0, 68.99998, 68.99998, 0, 68.99998, 70.00001, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [16777215, [0, 1, 2, 3],
                            [70.00001, 1, 0, 70.00001, 0, 0, 68.99998, 0, 0, 68.99998, 1, 0],
                            [0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254, 0, 0, -0.0254],
                            [4]
                        ],
                        [
                            [0, 68.99998, 0, 0, 1, 0]
                        ],
                        [
                            [1, 0, 0, 68.99998, 0, 0]
                        ],
                        [
                            [70.00001, 1, 0, 70.00001, 68.99998, 0]
                        ],
                        [
                            [68.99998, 70.00001, 0, 1, 70.00001, 0]
                        ]
                    ],
                    [
                        [0, [6.123234000000001e-17, 1, 0, 45.06378, -1, 6.123234000000001e-17, 0, 45.78131, 0, 0, 1, 0, 0, 0, 0, 1], "instance_0"],
                        [0, [1, 0, 0, 16.13833, 0, 1, 0, 34.54412, 0, 0, 1, 0, 0, 0, 0, 1], "instance_15"],
                        [0, [-1, 1.224647e-16, 0, 56.301, -1.224647e-16, -1, 0, 16.85585, 0, 0, 1, 0, 0, 0, 0, 1], "instance_16"],
                        [0, [-1.83697e-16, -1, 0, 27.37553, 1, -1.83697e-16, 0, 5.61866, 0, 0, 1, 0, 0, 0, 0, 1], "instance_17"]
                    ], "SketchUp"
                ]
            ]
        }
        sec = 1 / fps;
        ms = 2 / fps;
        main.addChild(layer);
        newGame();
        gameState = "title";
        var s
        s = new createjs.Shape();
        beginFill(s, "#ffffff");
        s.graphics.drawCircle(0, 0, 1);
        s.alpha = 0.5;
        spriteAim.addChild(s);
        s = new createjs.Shape();
        beginFill(s, "#ffffff");
        s.graphics.drawCircle(0, 0, 0.6);
        s.alpha = 0.5;
        spriteAim.addChild(s);
        s = new createjs.Shape();
        beginFill(s, "#ffffff");
        s.graphics.drawCircle(0, 0, 1);
        s.alpha = 0.5;
        spriteMove.addChild(s);
        s = new createjs.Shape();
        beginFill(s, "#ffffff");
        s.graphics.drawCircle(0, 0, 0.6);
        s.alpha = 0.5;
        spriteMove.addChild(s);
    }

    function floorHeight(p) {
        return 0;
    }

    function displayCells() {
        var collider = [];
        var s = 0;
        var a = [0 + s, 0 + s, 1 - s, 0 + s, 1 - s, 1 - s, 0 + s, 1 - s];
        for (var i = 0; i < a.length; i += 2) {
            var p = new createjs.Vector3D(sceneSize().x * (a[i + 0] - 0.5) / zoom(worldScale), sceneSize().y * (a[i + 1] - 0.5) / zoom(worldScale));
            p = axis0.transformVector(p);
            var r = ray.clone();
            r.scaleBy(-(p.z + cam.z) / r.z);
            collider.push(r.add(p));
        }
        var displayBody = {
            p: cam.clone(),
            matrix: new createjs.Matrix3D(),
            collider: collider
        };
        return mapCells(mapDic, displayBody);
    }

    function mapCells(mapDic, box) {
        var list = [];
        var m = new createjs.Matrix3D();
        m.appendScale(1 / 1.2, 1 / 1.2, 1 / 2.6);
        var r = bodyRect(box, m);
        if (!r) return null;
        var s = 0.01;
        for (var x = Math.floor(r.p.x + s); x == Math.floor(r.p.x + s) || x < r.p.x + r.s.x - s; x++)
            for (var y = Math.floor(r.p.y + s); y == Math.floor(r.p.y + s) || y < r.p.y + r.s.y - s; y++)
                for (var z = Math.floor(r.p.z + s); z == Math.floor(r.p.z + s) || z < r.p.z + r.s.z - s; z++) {
                    var a = mapDic[aa([x, y, z])];
                    for (var i = 0; a && i < a.length; i++) {
                        if (list.indexOf(a[i]) == -1) list.push(a[i]);
                    }
                }
        return list;
    }

    function mapRay(a, b, stepSize) {
        var ray = {
            p: a,
            matrix: new createjs.Matrix3D(),
            collider: [new createjs.Vector3D(), b.subtract(a)]
        };
        var w = [];
        var n = Math.floor(b.subtract(a).length / stepSize) + 1;
        for (var i = 0; i < n; i++) {
            var p = interpolate(a, b, i / n);
            var d = mapCells(mapDic, {
                p: p,
                matrix: new createjs.Matrix3D(),
                collider: [new createjs.Vector3D(), interpolate(a, b, 1 / n).subtract(a)]
            });
            for (var j = 0; j < d.length; j++)
                if (w.indexOf(d[j]) == -1) w.push(d[j])
        }
        var result = [];
        for (j = 0; j < w.length; j++) {
            if (gjk(w[j], ray)) result.push(w[j]);
        }
        if (!result.length) return null;
        return result;
    }

    function mapAdd(mapDic, box) {
        var m = new createjs.Matrix3D();
        m.appendScale(1 / 1.2, 1 / 1.2, 1 / 2.6);
        var r = bodyRect(box, m);
        if (!r) return;
        if (box.name == "door") {
            r.p.x = box.p.x / 1.2 - 1;
            r.p.y = box.p.y / 1.2 - 1;
            r.s.x = 2;
            r.s.y = 2;
        }
        var s = 0.01;
        for (var x = Math.floor(r.p.x + s); x == Math.floor(r.p.x + s) || x < r.p.x + r.s.x - s; x++)
            for (var y = Math.floor(r.p.y + s); y == Math.floor(r.p.y + s) || y < r.p.y + r.s.y - s; y++)
                for (var z = Math.floor(r.p.z + s); z == Math.floor(r.p.z + s) || z < r.p.z + r.s.z - s; z++) {
                    if (!mapDic[aa([x, y, z])]) {
                        mapDic[aa([x, y, z])] = [];
                    }
                    mapDic[aa([x, y, z])].push(box);
                }
    }

    function aa(a) {
        var s = "";
        for (var i = 0; i < a.length; i++) {
            s += i ? "," : "";
            s += Math.round(a[i]).toString();
        }
        return s;
    }

    function moneyStep(b) {
        b.p.x += b.v.x * sec;
        b.p.y += b.v.y * sec;
        b.p.z += b.v.z * sec;
        b.v = truncate3(b.v, b.v.length - 3 * sec);
        b.timer -= sec;
        if (b.timer < 0 && vp(botList[0].p.subtract(colliderCenter(b))).length < 1) {
            if (!botList[0].fail) {
                playSound("money.mp3", 1, 0);
                effectCreate(b.p.clone());
                scores++;
                bestScores = Math.max(bestScores, scores);
                b.removing = true;
                audio.sound.volume(1, audio.sound.play("money"));
            }
            return;
        }
        if (b.v.length < 0.1) return;
        var a = mapCells(mapDic, b);
        for (var i = 0; i < a.length; i++) {
            cd(b, a[i], 1.01)
        }
    }

    function botFailMoneyCreate(bot) {
        var n = voz(bot.money)
        n = 3;
        bot.money = 0;
        for (var i = 0; i < n; i++) {
            var v = new createjs.Vector3D(Math.random() * 2 + 2);
            var m = new createjs.Matrix3D();
            m.appendRotation(360 * Math.random(), createjs.Vector3D.Z_AXIS);
            moneyCreate(pv(vp(bot.p)), m.transformVector(v));
        }
    }

    function moneyCreate(p, v) {
        var r = 0.1;
        var money = boxCreate({}, modelCreate(modelDataLib["money"][0], modelDataLib["money"][1]));
        modelPicDraw(money)
        money.timer = 1;
        money.p = p.clone();
        money.v = v;
        moneyList.push(money);
    }

    function colliderDraw(b, collider) {
        var s = b.tempShape ? b.tempShape : new createjs.Shape();
        b.tempShape = s;
        clear(s);
        lineStyle(s, 0.02, "0");
        var m = b.matrix.clone();
        m.append(axis);
        for (var i = 0; i < collider.length; i++) {
            var p = m.transformVector(collider[i]);
            s.graphics.moveTo(p.x, p.y);
            s.graphics.drawCircle(p.x, p.y, 0.04);
        }
        b.sprite.addChild(s);
    }

    function effectCreate(p) {
        var r = 0.1;
        var collider = colliderBoxCreate(new createjs.Vector3D(-r, -r, -r), new createjs.Vector3D(r * 2, r * 2, r * 2), 0);
        var effect = {
            p: p.clone(),
            sprite: new createjs.Shape(),
            collider: collider,
            matrix: new createjs.Matrix3D(),
            timer: 0.2
        };
        beginFill(effect.sprite, "#ffffff");
        effect.sprite.graphics.drawCircle(0, 0, 0.3);
        endFill(effect.sprite);
        effectList.push(effect);
    }

    function effectStep(b) {
        b.sprite.scaleX = b.sprite.scaleY = getValue([0.1, 0, 0.2, 1], b.timer, 0, 1);
        b.timer -= sec;
        if (b.timer <= 0) {
            b.removing = true;
        }
    }

    function bulletStep(b) {
        b.p.x += b.v.x * sec;
        b.p.y += b.v.y * sec;
        b.p.z += b.v.z * sec;
        b.t = b.t - sec;
        if (b.t <= 0) b.removing = true;
        var a = mapCells(mapDic, b);
        for (var i = 0; i < a.length; i++) {
            if (gjk(a[i], b)) {
                break;
            }
        }
        if (a && i < a.length) {
            effectCreate(b.p);
            b.removing = true;
        }
        for (i = 0; i < botList.length; i++) {
            var temp = botList[i].collider;
            var hit = gjk(botList[i], b);
            if (hit) {
                effectCreate(b.p);
                if (gameState == "game") botList[i].health = Math.max(botList[i].health - 1, 0);
                botSpriteHealthUpdate(botList[i]);
                var n = normalize(vp(b.v), 1);
                var s = dot(n, vp(botList[i].v));
                var r = 5;
                if (botList[i].health < 0.01) {
                    r = 12;
                    botFailCreate(botList[i], b.v);
                }
                botList[i].v = pv(normalize(n, Math.min(s + r, r) - s)).add(botList[i].v);
                effectCreate(b.p.add(ray));
                b.removing = true;
                return;
            }
        }
    }

    function shot(bot) {
        if (bot == botList[0] && gameState != "game") return;
        var rad = bot.rad;
        if (!bot.gun) return;
        if (bot.fail) return;
        if (bot.bulletDelay > 0) return;
        var p = bot.imageList[3][1].matrix.transformVector(new createjs.Vector3D(0.2, 0.2, -0.6)).add(bot.p);
        var soundName = bot.gun.name;
        var s = 10;
        var pp = truncate2(transformPoint(rotate(new createjs.Matrix2D(), Math.PI / 12), vp(p.subtract(cam))), s);
        var vol = Math.round(Math.pow((1 - pp.length / s), 1.1) * 10) / 10
        var pan = Math.round(pp.x / s * 10) / 10;
        if (vol > 0.01) {
            var id = audio.sound.play(soundName);
            audio.sound.stereo(pan, id);
            audio.sound.volume(vol, id);
        }
        bulletCreate(p, rad);
        if (bot.gun.bullets > 0) bot.gun.bullets--;
        if (bot.gun.name == "shotgun") bulletCreate(p, rad + 0.15);
        if (bot.gun.name == "shotgun") bulletCreate(p, rad - 0.15);
        bot.bulletDelay = bot.gun.delay;
        if (!bot.gun.bullets) {
            if (bot.gun.sprite.parent) bot.gun.sprite.parent.removeChild(bot.gun.sprite);
            bot.gun = bot.handgun;
            bot.bulletDelay = bot.gun.delay;
        }
    }

    function bulletCreate(p, rad) {
        var v = new createjs.Vector3D(Math.cos(rad), Math.sin(rad), 0);
        effectCreate(p);
        v.normalize();
        v.scaleBy(18)
        var r = 0.1;
        var bullet = boxCreate({}, modelBox(1, 0.1, 0.1, 0x0))
        bullet.sprite.alpha = 0.4;
        var m = new createjs.Matrix3D();
        m.appendTranslation(0, -0.05, -0.05);
        m.appendRotation(rad / Math.PI * 180, createjs.Vector3D.Z_AXIS);
        bullet.matrix = bullet.model.matrix = m;
        modelDraw(bullet.model, null, bullet.sprite, null);
        bullet.t = 10 / v.length;
        bullet.p = p.clone();
        bullet.v = v;
        bullet.colliderForBullet = colliderBoxCreate(new createjs.Vector3D(-0.01, -0.01, -0.1), new createjs.Vector3D(0.02, 0.02, 0.2), 0);
        bulletList.push(bullet);
    }

    function lineTime(a, aa, b, bb) {
        var an = aa.subtract(a);
        var bn = bb.subtract(b);
        return (-a.x * bn.y + b.x * bn.y + a.y * bn.x - b.y * bn.x) / (an.x * bn.y - an.y * bn.x);
    }

    function lineLine(a, an, b, bn) {
        an = an.subtract(a);
        bn = bn.subtract(b);
        var i = (-a.x * bn.y + b.x * bn.y + a.y * bn.x - b.y * bn.x) / (an.x * bn.y - an.y * bn.x);
        if (i < 0 || i > 1) return null;
        return new createjs.Point(a.x + an.x * i, a.y + an.y * i);
    }

    function timeCollision(a, b, r, ac, bc) {
        var dt = 0;
        var xa = bodySupport2(b, new createjs.Vector3D(1), bc).x - bodySupport2(a, new createjs.Vector3D(-1), ac).x + r * 2;
        var xb = bodySupport2(b, new createjs.Vector3D(-1), bc).x - bodySupport2(a, new createjs.Vector3D(1), ac).x - r * 2;
        var ya = bodySupport2(b, new createjs.Vector3D(0, 1), bc).y - bodySupport2(a, new createjs.Vector3D(0, -1), ac).y + r * 2;
        var yb = bodySupport2(b, new createjs.Vector3D(0, -1), bc).y - bodySupport2(a, new createjs.Vector3D(0, 1), ac).y - r * 2;
        var v = a.v.subtract(b.v);
        if (Math.abs(v.x) > 0.0001) xa /= v.x;
        if (Math.abs(v.x) > 0.0001) xb /= v.x;
        if (Math.abs(v.y) > 0.0001) ya /= v.y;
        if (Math.abs(v.y) > 0.0001) yb /= v.y;
        var w = [{
            t: xa - dt,
            i: 0
        }, {
            t: xb + dt,
            i: 0
        }, {
            t: ya - dt,
            i: 1
        }, {
            t: yb + dt,
            i: 1
        }]
        sortOn(w, "t");
        if (w[0].i == w[1].i) return 100;
        var t0 = w[1].t;
        var t1 = w[2].t;
        if (t1 <= 0) {
            return 100;
        }
        return t0;
    }

    function gen(n) {
        g = [];
        for (var j = 0; j < n; j++)
            for (var i = 0; i < n; i++) {
                if (!j) g.push("");
                g[j] += " ";
            }
        var p = patternList[Math.floor(patternList.length * Math.random())];
        insertPattern(p, g, Math.floor(n / 2 - p[0].length / 2), Math.floor(n / 2 - p.length / 2), false);
        var count = 0;
        for (var k = 0; k < 3000 && count < 20; k++) {
            p = patternList[Math.floor(patternList.length * Math.random())];
            var w = p[0].length;
            var h = p.length;
            var d = 1;
            var x = Math.round(Math.random() * (g.length - w - d * 2)) + d;
            var y = Math.round(Math.random() * (g.length - h - d * 2)) + d;
            if (isEmpty(g, x, y, w, h)) continue;
            if (!isEmpty(g, x + 1, y + 1, w - 2, h - 2)) continue;
            var r = patternRect(g, x, y, w, h);
            insertPattern(p, g, x, y, false);
            var revert = false;
            for (j = y - 2; !revert && j <= y + h; j++)
                for (i = x - 2; !revert && i <= x + w; i++) {
                    if (patternValueGet(g, i, j) == "_" && patternValueGet(g, i + 1, j) == "_" && patternValueGet(g, i + 1, j + 1) == "_" && patternValueGet(g, i, j + 1) == "_") revert = true;
                    if (patternValueGet(g, i, j) != "_" && patternValueGet(g, i + 1, j) == "_" && patternValueGet(g, i + 1, j + 1) != "_" && patternValueGet(g, i, j + 1) == "_") revert = true;
                    if (patternValueGet(g, i, j) == "_" && patternValueGet(g, i + 1, j) != "_" && patternValueGet(g, i + 1, j + 1) == "_" && patternValueGet(g, i, j + 1) != "_") revert = true;
                    if (patternValueGet(g, i, j) == "_" && patternValueGet(g, i + 1, j) == " " && patternValueGet(g, i + 2, j) == "_") revert = true;
                    if (patternValueGet(g, i, j) == "_" && patternValueGet(g, i, j + 1) == " " && patternValueGet(g, i, j + 2) == "_") revert = true;
                }
            if (revert) insertPattern(r, g, x, y, true);
            else count++;
        }
    }

    function insertPattern(pattern, g, x, y, replace) {
        for (var j = 0; j < pattern.length; j++)
            for (var i = 0; i < pattern[j].length; i++) {
                if (!replace && patternValueGet(g, x + i, y + j) != " ") continue;
                patternValueSet(g, x + i, y + j, patternValueGet(pattern, i, j));
            }
    }

    function gv(x, y) {
        if (g[x] && y >= 0 && y < g[x].length) return g[x].charAt(y);
        return null;
    }

    function patternValueGet(pattern, x, y) {
        if (!pattern[y]) return null;
        return pattern[y].charAt(x);
    }

    function patternValueSet(pattern, x, y, char) {
        pattern[y] = pattern[y].slice(0, x) + char + pattern[y].slice(x + 1);
    }

    function isEmpty(pattern, x, y, w, h) {
        for (var j = 0; j < h; j++)
            for (var i = 0; i < w; i++) {
                var s = patternValueGet(g, x + i, y + j)
                if (s && s != " ") return false;
            }
        return true;
    }

    function patternRect(pattern, x, y, w, h) {
        var p = [];
        for (var j = 0; j < h; j++)
            for (var i = 0; i < w; i++) {
                if (!i) p.push("");
                var s = patternValueGet(g, x + i, y + j)
                if (!s) s = " ";
                patternValueSet(p, i, j, s);
            }
        return p;
    }

    function patternInit() {
        patternList = [];
        patternList.push(["_________", "_aaa_aaa_", "_aaa_aaa_", "_________", "_aaa_aaa_", "_aaa_aaa_", "_________", ]);
        patternList.push(["_______", "_aa_aa_", "_aa_aa_", "_______", ]);
        patternList.push(["____", "_aa_", "____", ]);
        patternList.push(["___", "_a_", "_a_", "___", ]);
        patternList.push(["___", "_a_", "_a_", "_a_", "___", ]);
        patternList.push(["____", "_aa_", "_aa_", "_aa_", "____", ]);
        patternList.push(["_________", "_aaa_aaa_", "_aaa_aaa_", "_________", ]);
    }

    function normalize(p, length) {
        p = p.clone();
        if (!p.length) p.x = 1;
        p.normalize(length);
        return p;
    }

    function randomPoint() {
        return new createjs.Point(Math.random(), Math.random())
    }

    function dot(a, b) {
        return a.x * b.x + a.y * b.y
    }

    function normal(n) {
        return new createjs.Point(-n.y, n.x)
    }
    var data;

    function joystickPoint(displayPoint) {
        var mm = translate(scale(new createjs.Matrix2D(), zoom(100), zoom(100)), sceneSize().x / 2, sceneSize().y / 2)
        mm.invert();
        return transformPoint(mm, displayPoint);
    }

    function joystickVector(aim) {
        if (isMobile.any) {
            if (aim && !joystickAim.touch) return new createjs.Point();
            if (!aim && !joystickMove.touch) return new createjs.Point();
            if (aim) mm = translate(scale(new createjs.Matrix2D(), zoom(10), zoom(10) * -Math.sin(45 / 180 * Math.PI)), sceneSize().x - 2 * zoom(10), sceneSize().y - 2.5 * zoom(10));
            else mm = translate(scale(new createjs.Matrix2D(), zoom(10), zoom(10) * -Math.sin(45 / 180 * Math.PI)), 2 * zoom(10), sceneSize().y - 2.5 * zoom(10));
            mm.invert();
            rotate(mm, Math.PI / 12);
            if (aim) pp = transformPoint(mm, new createjs.Point(joystickAim.touch.p.x, joystickAim.touch.p.y));
            else pp = transformPoint(mm, new createjs.Point(joystickMove.touch.p.x, joystickMove.touch.p.y));
            pp.normalize(Math.min(pp.length, 1));
            return pp;
        }
        if (aim) {
            var mm = translate(scale(new createjs.Matrix2D(), zoom(10), zoom(10) * -Math.sin(45 / 180 * Math.PI)), sceneSize().x * 0.5, sceneSize().y * 0.5);
            mm.invert();
            rotate(mm, Math.PI / 12);
            var pp = transformPoint(mm, scenePoint());
            pp.normalize(Math.min(pp.length, 1));
            return pp;
        }
        var v = new createjs.Point((key["65"] || key["37"] ? -1 : 0) + (key["68"] || key["39"] ? 1 : 0), (key["87"] || key["38"] ? -1 : 0) + (key["83"] || key["40"] ? 1 : 0));
        var m = new createjs.Matrix2D();
        scale(m, 1, -1);
        v = transformPoint(m, v);
        return v;
        return new createjs.Point();
    }

    function po(p) {
        return {
            x: p.x,
            y: p.y
        };
    }

    function op(o) {
        return new createjs.Point(o.x, o.y);
    }

    function objectByUID(uid, list) {
        for (var i = 0; i < list.length; i++) {
            if (list[i].uid == uid) return list[i];
        }
        return null;
    }
    var carList = [];
    var trafficSound;
    var streetSound;
    var botList = [];
    var thingList = [];
    var cellList;

    function cellPos(x, y, offset) {
        var s = 9;
        var cell = gv(x, y);
        if (cell != "_") return null;
        var d = [-1, 0, 0, 1, 1, 0, 0, -1];
        var j;
        var w = [];
        for (var i = 0; i < d.length; i += 2) {
            w.splice(Math.floor(w.length * Math.random()), 0, [d[i + 0], d[i + 1], d[(i + 2) % d.length], d[(i + 3) % d.length]]);
            w.splice(Math.floor(w.length * Math.random()), 0, [d[(i + 2) % d.length], d[(i + 3) % d.length], d[i + 0], d[i + 1]]);
            w.splice(Math.floor(w.length * Math.random()), 0, [d[i + 0], d[i + 1], d[(i + 4) % d.length], d[(i + 5) % d.length]]);
            w.splice(Math.floor(w.length * Math.random()), 0, [d[(i + 4) % d.length], d[(i + 5) % d.length], d[i + 0], d[i + 1]]);
        }
        var t = Math.random();
        for (i = 0; i < w.length; i++) {
            if (gv(x + w[i][0], y + w[i][1]) != "_" || gv(x + w[i][2], y + w[i][3]) != "_") continue
            var a = new createjs.Point(0.5 + w[i][0] / 2, 0.5 + w[i][1] / 2);
            var b = new createjs.Point(0.5, 0.5);
            var c = new createjs.Point(0.5 + w[i][2] / 2, 0.5 + w[i][3] / 2);
            var p = bezierOffset(a, b, c, offset, t);
            p.path = [
                [x + w[i][0], y + w[i][1]],
                [x, y],
                [x + w[i][2], y + w[i][3]]
            ];
            p.p.x = p.p.x * s + x * s;
            p.p.y = p.p.y * s + y * s;
            return p;
        }
        return p;
    }

    function bezierOffset(a, b, c, offset, t) {
        a = createjs.Point.interpolate(b, a, t);
        b = createjs.Point.interpolate(c, b, t);
        var p = createjs.Point.interpolate(b, a, t);
        var n = new createjs.Point(a.y - b.y, b.x - a.x);
        var rad = Math.atan2(-n.x, n.y);
        n.normalize(offset);
        return {
            p: p.add(n),
            rad: rad
        };
    }

    function carBalance() {
        var r0 = 15;
        var r1 = r0 + 2;
        var nearestСar = 100;
        for (i = carList.length - 1; i >= 0; i--) {
            var d = vp(cam.subtract(carList[i].p));
            if (d.length < nearestСar) nearestСar = d.length;
            if (d.length > r1) {
                if (carList[i].sprite.parent) carList[i].sprite.parent.removeChild(carList[i].sprite);
                carList.splice(i, 1);
            }
        }
        audio.sound.volume((1 - Math.min(nearestСar / 10, 1)) * 0.8, trafficSound);
        var countMax = 4;
        if (gameState == "game" && (!botList.length || startPos)) countMax = 0;
        if (deathCircleTimer >= deathCircleTimerMax) countMax = 0;
        for (var i = 0; i < g.length; i++)
            for (var j = 0; j < g[i].length; j++) {
                var pos = cellPos(i, j, -1.5 / 9);
                if (!pos) continue;
                var d = vp(cam).subtract(pos.p);
                if (d.length > r0 && d.length <= r1 && carList.length < countMax) {
                    for (var k = 0; k < carList.length; k++)
                        if (carList[k].p.subtract(pv(pos.p)).length < 10) break;
                    if (carList.length && k != carList.length) continue;
                    carCreate(pos.p, pos.rad, pos.path);
                }
            }
    }

    function botBalance() {
        var sceneCenter = new createjs.Point(g.length * 9 / 2, g.length * 9 / 2);
        if (botBalanceData.t < 0)
            botBalanceData = {
                t: Math.random() * 4 + 2,
                count: Math.floor(Math.random() * 3.2) + 1
            };
        if (gameState == "title") botBalanceData.count = 0;
        if (botList.length && !startPos) botBalanceData.t -= sec;
        var r0 = 13;
        var r1 = r0 + 5;
        for (var i = botList.length - 1; i > 0; i--) {
            var d = vp(cam.subtract(botList[i].p));
            if (d.length > r1 || botList[i].removing) {
                if (botList[i].sprite.parent) botList[i].sprite.parent.removeChild(botList[i].sprite);
                botList.splice(i, 1);
            }
        }
        if (deathCircleTimer >= deathCircleTimerMax && botList.length == 1 && gameState == "game" && !botList[0].fail && vp(botList[0].p).subtract(sceneCenter).length < deathCircleR) {
            scores += 10;
            bestScores = Math.max(bestScores, scores);
            if (gameState != "win") audio.sound.volume(1, audio.sound.play("goal"));
            gameState = "win";
            botList[0].animationWinValue = 1;
            worldScale = 10;
        }
        if (deathCircleTimer >= deathCircleTimerMax && botList.length == 2 && gameState == "gameOver" && !botList[1].fail && vp(botList[1].p).subtract(sceneCenter).length < deathCircleR) {
            botList[1].animationWinValue = 1;
        }
        if (botList.length >= botBalanceData.count) return;
        if (deathCircleTimer >= deathCircleTimerMax) return;
        if (botList.length) {
            var pos = normalize(new createjs.Point(Math.random() - 0.5, Math.random() - 0.5), r0 + (r1 - r0) * Math.random()).add(vp(cam));
            if (sceneCenter.subtract(pos).length > deathCircleR) return;
        } else {
            pos = normalize(new createjs.Point(Math.random() - 0.5, Math.random() - 0.5), deathCircleR * 0.8).add(new createjs.Point(g.length * 9 / 2, g.length * 9 / 2));
        }
        if (isTouched(pos, 1)) return;
        for (var k = 0; k < carList.length; k++)
            if (carList[k].p.subtract(pv(pos)).length < 7) break;
        if (carList.length && k != carList.length) return;
        for (k = 0; k < botList.length; k++)
            if (botList[k].p.subtract(pv(pos)).length < 7) break;
        if (botList.length && k != botList.length) return;
        botCreate(pv(pos));
        if (botList.length == 1) {
            startPos = pos;
            botList[0].maxHealth = 5;
            botList[0].health = 5;
        }
    }

    function botCreate(p) {
        var bot = {
            sprite: new createjs.Container()
        };
        bot.matrix = new createjs.Matrix3D();
        bot.collider = colliderBoxCreate(new createjs.Vector3D(-0.3, -0.3, -0.75), new createjs.Vector3D(0.6, 0.6, 2), 45);
        bot.p = p.clone();
        bot.v = new createjs.Vector3D();
        bot.m = 1;
        bot.rad = 0;
        bot.maxHealth = 4;
        bot.health = 1 + Math.random() * bot.maxHealth;
        characterCreate(bot);
        bot.bulletDelay = 0;
        bot.alive = true;
        bot.spriteHealth = new createjs.Shape();
        bot.gun = bot.handgun = thingCreate("handgun", new createjs.Vector3D());
        if (botList.length && Math.random() < 0.5) {
            bot.gun = thingCreate(Math.random() > 0.5 ? "shotgun" : "gun", new createjs.Vector3D());
        }
        botList.push(bot);
    }

    function botSpriteHealthUpdate(bot) {
        if (gameState != "game") return;
        var n = bot.maxHealth;
        clear(bot.spriteHealth)
        for (var i = 0; i < n; i++) {
            var w = 0.2;
            beginFill(bot.spriteHealth, i - bot.health >= 0 ? "#ffffff" : "#ff0000");
            bot.spriteHealth.graphics.drawRect(i * w + w * 0.1 / 2 - n * w / 2, -2, w * 0.9, 0.3);
            endFill(bot.spriteHealth);
        }
        bot.spriteHealth.alpha = 1;
    }

    function avoid2(p, target) {
        var a = mapRay(new createjs.Vector3D(p.x, p.y, 1), new createjs.Vector3D(target.x, target.y, 1), 4);
        for (var i = 0; a && i < a.length; i++) {
            var m = a[i].matrix.clone();
            m.appendTranslation(a[i].p.x, a[i].p.y, a[i].p.z);
            var r = colliderToRect(a[i].collider, m);
            var b = [0, 0, 1, 0, 1, 1, 0, 1];
            var c = [];
            for (var j = 0; j < b.length; j += 2) c.push(new createjs.Point(r.x + r.w * b[j], r.y + r.h * b[j + 1]));
            var t = avoid([p, target], c);
            if (t && t.subtract(p).length < target.subtract(p).length) target = t;
        }
        return target;
    }

    function isTouched(p, r) {
        var b = {
            p: new createjs.Vector3D(p.x - r * 0.5, p.y - r * 0.5),
            matrix: new createjs.Matrix3D(),
            collider: colliderBoxCreate(new createjs.Vector3D(), new createjs.Vector3D(r, r, r), 0)
        };
        var d = mapCells(mapDic, b);
        var w = [];
        for (var j = 0; j < d.length; j++)
            if (w.indexOf(d[j]) == -1) w.push(d[j]);
        for (var i = 0; i < w.length; i++) {
            if (gjk(w[i], b)) return true;
        }
        return false;
    }

    function thingBalance(type, maxCount) {
        var sceneCenter = new createjs.Point(g.length * 9 / 2, g.length * 9 / 2);
        var r0 = 14;
        var r1 = r0 + 2;
        var count = 0;
        var n = sceneCenter.subtract(vp(cam));
        for (var i = thingList.length - 1; i >= 0; i--) {
            if (thingList[i].type == type) count++;
            var d = vp(cam.subtract(thingList[i].p));
            if (d.length > r1 || thingList[i].removing) {
                if (thingList[i].sprite.parent) thingList[i].sprite.parent.removeChild(thingList[i].sprite);
                thingList.splice(i, 1);
            }
        }
        if (count >= maxCount) return;
        var pos = normalize(new createjs.Point(Math.random() - 0.5, Math.random() - 0.5), r0 + (r1 - r0) * Math.random()).add(vp(cam));
        if (isTouched(pos, 1)) return;
        for (i = 0; i < thingList.length; i++)
            if (vp(thingList[i].p).subtract(pos).length < 7) return;
        thingList.push(thingCreate(type, pos));
    }

    function thingCreate(type, p) {
        if (type == "gun" || type == "shotgun" || type == "handgun") {
            var thing = boxCreate({}, modelCreate(modelDataLib[type][0], modelDataLib[type][1]));
            thing.name = type;
            thing.delay = 0.5;
            thing.bullets = -1;
            if (type == "gun") {
                thing.delay = 0.18;
                thing.bullets = 40;
            }
            if (type == "shotgun") {
                thing.delay = 0.5;
                thing.bullets = 10;
            }
        }
        if (type == "hearth") {
            thing = boxCreate({}, modelCreate(modelDataLib["aidkit"][0], modelDataLib["aidkit"][1]));
        }
        thing.type = type;
        thing.p = pv(p);
        thing.rad = 0;
        thing.alive = true;
        return thing;
    }

    function thingStep(thing) {
        if (botList[0] && thing.type == "hearth" && botList[0].p.subtract(thing.p).length < 1) {
            botList[0].health = botList[0].maxHealth
            botSpriteHealthUpdate(botList[0]);
            thing.removing = true;
            audio.sound.volume(1, audio.sound.play("money"));
        }
        if (botList[0] && (thing.type == "shotgun" || thing.type == "gun") && botList[0].p.subtract(thing.p).length < 1) {
            if (botList[0].gun && botList[0].gun.sprite.parent)
                botList[0].gun.sprite.parent.removeChild(botList[0].gun.sprite);
            botList[0].gun = thing;
            thingList.splice(thingList.indexOf(thing), 1);
            audio.sound.volume(1, audio.sound.play("weapon"));
            return;
        }
        var m = new createjs.Matrix3D();
        m.appendTranslation(-0.5, -0.15, 0);
        m.appendRotation(thing.rad, createjs.Vector3D.Z_AXIS);
        thing.matrix = thing.model.matrix = m;
        modelPicDraw(thing);
    }

    function bestTarget2(bot) {
        var best = null;
        for (var i = 0; i < botList.length; i++) {
            if (bot == botList[i]) continue;
            var v = vp(botList[i].p.subtract(bot.p));
            if (v.length > 20) continue;
            if (!botSee(bot, botList[i])) continue;
            if (!best || v.length < vp(best.p.subtract(bot.p)).length) best = botList[i];
        }
        return best;
    }

    function bestTarget(bot) {
        var best = null;
        var rad = bot.rad;
        for (var i = 0; i < botList.length; i++) {
            if (bot == botList[i]) continue;
            if (!isVisibleOnDisplay(botList[i], -0.5, botList[i].collider)) continue;
            var v = vp(botList[i].p.subtract(bot.p));
            if (Math.abs(angle1(rad, Math.atan2(v.y, v.x))) > Math.PI / 4) continue;
            if (!botSee(bot, botList[i])) continue;
            if (!best || v.length < vp(best.p.subtract(bot.p)).length) best = botList[i];
        }
        return best;
    }

    function botBattle(bot, targetBotPos) {
        if (bot.shotRadTimer <= 0) {
            bot.shotRadTimer = Math.random() * 1;
            bot.shotRad = (Math.random() - 0.5) * Math.PI / 3;
        }
        var wk = 1;
        if (targetBotPos) {
            var rad = Math.atan2(targetBotPos.y - bot.p.y, targetBotPos.x - bot.p.x) + bot.shotRad;
        } else {
            rad = Math.atan2(bot.v.y, bot.v.x);
            wk = Math.min(bot.v.length / 2, 1);
        }
        var bb = bestTarget2(bot);
        bot.shotRadTimer = voz(bot.shotRadTimer) - sec;
        if (bb && bb.p.subtract(bot.p).length < 10) {
            shot(bot);
        }
        var w = angle1(bot.rad, rad);
        bot.rad += truncate1(bot.fail ? 0 : w, 6 * sec * wk);
    }

    function botMove(bot) {
        var sceneCenter = new createjs.Point(g.length * 9 / 2, g.length * 9 / 2);
        var targetBotPos = null;
        for (var i = 0; i < botList.length; i++) {
            if (botList[i] == bot || botList[i].fail) continue;
            if (!targetBotPos || vp(bot.p).subtract(vp(botList[i].p)).length < vp(bot.p).subtract(targetBotPos).length) targetBotPos = vp(botList[i].p);
        }
        if (!bot.targetBotData || bot.targetBotData.t > bot.targetBotData.seek + bot.targetBotData.flee) {
            bot.targetBotData = {
                t: 0,
                seek: Math.random() * 10 + 3,
                flee: Math.random() * 10 + 4
            }
        }
        bot.targetBotData.t += sec;
        if (!bot.target) {
            d = vp(bot.p).subtract(sceneCenter);
            d = normalize(d, Math.min(d.length, deathCircleR - 2)).add(sceneCenter)
            bot.target = normalize(new createjs.Point(Math.random() - 0.5, Math.random() - 0.5), Math.random() * 10).add(d);
            if (targetBotPos) {
                var d = vp(bot.p).subtract(targetBotPos).add(normalize(new createjs.Point(Math.random() - 0.5, Math.random() - 0.5), Math.random() * 5));
                d = normalize(d, 5).add(vp(cam));
                if (targetBotPos.subtract(sceneCenter).length < deathCircleR && vp(bot.p).subtract(sceneCenter).length < deathCircleR && bot.targetBotData.t > bot.targetBotData.flee)
                    bot.target = d;
            }
        }
        if (bot.target && bot.target.subtract(sceneCenter).length > deathCircleR) bot.target = null;
        if (bot.target && isTouched(bot.target, 0.5)) bot.target = null;
        if (bot.target && bot.target.subtract(vp(bot.p)).length < 0.4) bot.target = null;
        if (bot.target && !bot.fail) {
            var target = avoid2(vp(bot.p), bot.target);
            var v = normalize(target.subtract(vp(bot.p)), 1);
        } else {
            v = new createjs.Point();
        }
        botBattle(bot, targetBotPos);
        v.normalize(Math.min(v.length, 1));
        v.normalize(17 / 3.6 * v.length);
        bot.v = pv(truncate2(v.subtract(vp(bot.v)), 7 * ms)).add(bot.v);
    }

    function LaggedApiInit() {
       // LaggedAPI.init('stick_battleroyale_gaminint', 'lagdevaF3001');
    }

    function LaggedHighScoresSave() {
       /*  var SCORE_VAR = scores * 100;
        parent.saveHS(SCORE_VAR, "score");
        if (adcnt > 30) {
            adcnt = 0;
            if (typeof prerollStart === 'undefined') {
                console.log('skip ad, prerollStart not found')
            } else {
                LaggedAPI.APIAds.show('interstitial', 'stickman-battle-royale', 'stickman-battle-royale-game.png', function(response) {
                    if (response.success) {
                        console.log('ad finished');
                        adcnt = -60;
                    } else {
                        console.log('ad error, continue');
                    }
                });
            }
        } */
    }

    function playerMove(bot) {
        if (startPos && vp(bot.p).subtract(startPos).length > 2) startPos = null;
        if (bot.fail) bot.fail.t += sec;
        if (bot == botList[0] && bot.fail && bot.health <= 0.01) {
            bot.fail.t = Math.min(bot.fail.t, 1);
            if (bot.fail.t == 1 && gameState != "gameOver") {
                LaggedHighScoresSave()
            }
            if (bot.fail.t == 1) gameState = "gameOver";
        }
        var rad = shoots.length ? shoots[0] : Math.atan2(joystickVector(true).y, joystickVector(true).x);
        if ((shoots.length || joystickAim.touch)) {
            if (Math.abs(angle1(bot.rad, rad)) < Math.PI * 0.1) {
                if (shoots.length) shoots = [];
                shot(bot);
                bot.turnDelay = 3;
            }
        }
        var v = joystickVector(false);
        var w = angle1(bot.rad, rad);
        var wk = shoots.length ? 1 : joystickVector(true).length;
        if (bot.fail) {
            v = new createjs.Point();
            w = 0;
        }
        if (!shoots.length && isMobile.any && !bot.turnDelay && !joystickAim.touch) {
            w = angle1(bot.rad, Math.atan2(bot.v.y, bot.v.x));
            wk = Math.min(bot.v.length / 2, 1);
        }
        bot.rad += truncate1(w, 12 * sec * wk);
        v.normalize(Math.min(v.length, 1));
        v.normalize(17 / 3.6 * v.length);
        bot.v = pv(truncate2(v.subtract(vp(bot.v)), 7 * ms)).add(bot.v);
        var vol = Math.round(Math.min(bot.v.length / 5, 1) * 10) / 10;
        if (bot.fail) vol = 0;
        audio.sound.volume(vol, soundFootstep1);
    }

    function botLoop() {
        var sceneCenter = new createjs.Point(g.length * 9 / 2, g.length * 9 / 2);
        for (var i = botList.length - 1; i >= 0; i--) {
            var bot = botList[i];
            bot.turnDelay = Math.max(voz(bot.turnDelay) - sec, 0);
            bot.bulletDelay = Math.max(bot.bulletDelay - sec, 0);
            if (bot.fail) bot.fail.t += sec;
            if (bot != botList[0] && bot.fail && bot.health <= 0.01 && bot.fail.t > 1) {
                bot.removing = true;
            }
            if (!bot.burnTimer) bot.burnTimer = 0;
            if (vp(bot.p).subtract(sceneCenter).length > deathCircleR) {
                bot.burnTimer = voz(bot.burnTimer) + sec;
                if (bot.burnTimer > 2) {
                    bot.burnTimer = 0;
                    if (gameState == "game") bot.health = Math.max(bot.health - 1, 0);
                    botSpriteHealthUpdate(bot);
                    if (bot.health <= 0.01) botFailCreate(bot, new createjs.Vector3D())
                }
            }
            if (i) botMove(bot);
            else playerMove(bot);
            if (bot.fail && bot.fail.t > 2) bot.fail = null;
        }
        if (gameState == "game")
            for (i = 0; i < botList.length; i++)
                for (j = 0;
                    (!botList[i].fail || botList[i].fail.t < 0.5) && j < carList.length; j++) {
                    var f = cd(botList[i], carList[j], 1.01);
                    if (f > 1 && botList[i].v.length > 20 / 3.6) {
                        botList[i].health = Math.max(botList[i].health - 1, 0);
                        botSpriteHealthUpdate(botList[i]);
                        botFailCreate(botList[i], new createjs.Vector3D());
                        var soundID = audio.sound.play("bump1");
                        audio.sound.volume(1 - Math.min(botList[i].p.subtract(cam).length / 10, 1), soundID);
                    }
                }
        for (i = 0; i < botList.length; i++) {
            bot = botList[i];
            var a = mapCells(mapDic, botList[i]);
            var w = [];
            for (j = 0; j < a.length; j++)
                if (w.indexOf(a[j]) == -1) w.push(a[j])
            for (j = 0; j < w.length; j++) cd(bot, w[j], 1.01);
        }
        for (i = 0; i < botList.length; i++) {
            bot = botList[i];
            bot.p.x += bot.v.x * sec;
            bot.p.y += bot.v.y * sec;
            bot.p.z = bot.skeleton.h0 - 0.05;
            bot.rHandValue = bot.gun ? 1 : 0;
            bot.lHandValue = bot.gun ? (bot.gun.name == "handgun" ? 0 : 1) : 0;
            dfger(bot);
            sdg3(bot);
            var gunList = [];
            if (bot.gun) {
                var gm = new createjs.Matrix3D();
                if (bot.gun.name == "handgun") gm.appendTranslation(-0.2, 0.05, -0.05);
                if (bot.gun.name == "gun") gm.appendTranslation(-0.5, 0.1, -0.3);
                if (bot.gun.name == "shotgun") gm.appendTranslation(-0.5, 0.1, -0.3);
                gm.appendRotation(90, createjs.Vector3D.Y_AXIS);
                gm.append(bot.imageList[3][1].matrix);
                bot.gun.p = new createjs.Vector3D();
                bot.gun.matrix = gm;
                modelPicDraw(bot.gun);
                gunList.push(bot.gun);
            }
            if (bot.visible)
                sceneSort2(bot.list.concat(gunList), bot.sprite, axis, [], true, i == botSortingIndex);
            bot.sprite.addChild(bot.spriteHealth);
            bot.spriteHealth.alpha = Math.max(bot.spriteHealth.alpha - sec, 0);
        }
        botSortingIndex++;
        if (botSortingIndex >= botList.length) botSortingIndex = 0;
    }

    function avoid(line, b) {
        var d;
        for (var i = 0, j = b.length - 1; i < b.length; j = i, i++) {
            var n = b[i].subtract(b[j]);
            n = normalize(new createjs.Point(n.y, -n.x), 1);
            var s = Math.min(dot(n, line[0].subtract(b[j])), dot(n, line[1].subtract(b[j])));
            if (s >= 0) return null;
            if (!i || s > d) d = s;
        }
        n = line[1].subtract(line[0]);
        n = normalize(new createjs.Point(n.y, -n.x), 1);
        var s0;
        var s1;
        for (i = 0; i < b.length; i++) {
            s = dot(n, b[i].subtract(line[0]));
            if (!i || s < s0) s0 = s;
            if (!i || s > s1) s1 = s;
        }
        if (s1 * s0 >= 0) return null;
        var p0 = b[0];
        var p1 = b[0];
        for (i = 1; i < b.length; i++) {
            s = dot(n, normalize(b[i].subtract(line[0]), 1));
            if (s < dot(n, normalize(p0.subtract(line[0]), 1))) p0 = b[i];
            if (s > dot(n, normalize(p1.subtract(line[0]), 1))) p1 = b[i];
        }
        if (Math.abs(s1) < Math.abs(s0)) {
            return p1;
        }
        if (Math.abs(s0) <= Math.abs(s1)) {
            return p0;
        }
        return null;
    }

    function carLoop() {
        for (var i = 0; i < carList.length; i++) {
            var car = carList[i];
            carStep(carList[i]);
        }
        for (i = 0; i < carList.length; i++)
            for (var j = i + 1; j < carList.length; j++) {
                cd(carList[i], carList[j], 1.5);
            }
        for (i = 0; i < carList.length; i++) {
            car = carList[i];
            car.p.x += car.v.x * sec;
            car.p.y += car.v.y * sec;
            var m = new createjs.Matrix3D();
            m.appendTranslation(-2.79 / 2, -1.51 / 2, 0);
            m.appendRotation(car.rad * 180 / Math.PI, createjs.Vector3D.Z_AXIS);
            car.matrix = m;
            modelPicDraw(car);
        }
    }

    function carCreate(p, rad, path) {
        var id = "car" + Math.floor(Math.random() * 4 + 1);
        var car = boxCreate({}, modelCreate(modelDataLib[id][0], modelDataLib[id][1]));
        car.rad = rad;
        car.w = 0;
        car.m = 100;
        car.p = pv(p);
        car.v = new createjs.Vector3D(Math.cos(rad), Math.sin(rad));
        car.v.scaleBy(12 / 3.6)
        car.path = path;
        carList.push(car);
    }

    function carStep(car) {
        var s = 9;
        pathUpdate(vp(car.p), car.path);
        var path = [new createjs.Point(car.path[0][0] * s + s / 2, car.path[0][1] * s + s / 2), new createjs.Point(car.path[1][0] * s + s / 2, car.path[1][1] * s + s / 2), new createjs.Point(car.path[2][0] * s + s / 2, car.path[2][1] * s + s / 2)]
        var turn = turnRad(vp(car.p), path, [-1.5, -1.5]);
        var angle = turn[0];
        var vs = turn[1];
        var rad = angle1(car.rad, turn[3]);
        var w = angle1(car.rad, angle);
        var k = truncate1(w / (Math.PI * 0.2), 1);
        vs *= (1 - Math.abs(k) * 0.2)
        w = truncate1(w / (Math.PI * 0.2), 1) * Math.PI * 2.5;
        car.w += truncate1(w - car.w, 17 * ms);
        if (car.parked) car.w = 0;
        car.rad += car.w * sec;
        if (car.parked) vs = 0;
        var v = new createjs.Point(Math.cos(car.rad), Math.sin(car.rad));
        v.normalize((1 - (1 - vs) * 0.8) * 75 / 3.6 - dot(v, new createjs.Point(car.v.x, car.v.y)));
        v = truncate2(v.subtract(vp(car.v)), 4 * ms);
        car.v.x += v.x;
        car.v.y += v.y;
        v = new createjs.Point(-Math.sin(car.rad), Math.cos(car.rad));
        v.normalize(dot(v, vp(car.v)));
        v.normalize(-Math.min(v.length, 30 / 3.6 * ms));
        car.v.x += v.x;
        car.v.y += v.y;
    }

    function turnRad(p, a, r) {
        var i = pathIndex(a, p);
        if (i && a[i].subtract(p).length < 10) i--;
        var j = i;
        i = Math.max(Math.min(i, a.length - 3), 0);
        var v0 = a[i + 1].subtract(a[i + 0]);
        var v1 = a[i + 2].subtract(a[i + 1]);
        var n0 = normalize(normal(v0), r[i]);
        var n1 = normalize(normal(v1), r[i + 1]);
        var rad = angle0(a[i + 1].subtract(a[i + 0]), a[i + 2].subtract(a[i + 1]));
        var n = normal(v1);
        n.normalize(dot(n, v0) < 0 ? 1 : -1);
        var t = dot(n, p.subtract(a[i + 1].add(n1)));
        var vs = getValue([0, 1, 0.2, 0.2, 0.98, 0.2, 0.9, 1], Math.min(1 - Math.min(t / 15, 1)), 0, 1);
        vs = getValue([0, 1, Math.PI / 2, 0.2], Math.abs(rad), 0, 1) * (1 - vs) + vs;
        var s = 4;
        t = Math.min(1 - Math.min(t / 11, 1), 1);
        var a0 = Math.PI / 2 * truncate1(dot(normalize(normal(v0), -1), p.subtract(a[i + 0].add(n0))), s) / s
        var a1 = Math.PI / 2 * truncate1(dot(normalize(normal(v1), -1), p.subtract(a[i + 1].add(n1))), s) / s
        var r0 = Math.atan2(v0.y, v0.x);
        var r1 = Math.atan2(v1.y, v1.x);
        return [r0 + a0 * (1 - t) + angle1(r0, r1) * t + a1 * t, vs, j, angle0(new createjs.Point(1), a[i + 1].subtract(a[i + 0]))];
    }

    function pathUpdate(p, path) {
        var v = getRoad(p)
        for (var i = 0; i < path.length; i++)
            if (v[0] == path[i][0] && v[1] == path[i][1]) break;
        if (path == this.path) console.log(i)
        if (!path.length || i > 2) {
            path.splice(0, path.length);
            path.push(v);
            i = 2;
        }
        for (var j = 0; j < i; j++) {
            var a = crossroad(path[path.length - 1][0], path[path.length - 1][1], path);
            path.push(a[Math.floor(a.length * Math.random())]);
        }
        path.splice(0, path.length - 3);
    }

    function crossroad(x, y, ignore) {
        var a = [-1, 0, 0, -1, 1, 0, 0, 1];
        var r = [];
        for (var i = 0; i < a.length; i += 2) {
            var v = [x + a[i], y + a[i + 1]];
            if (g[v[0]].charAt(v[1]) != "_") continue;
            for (var j = 0; j < ignore.length; j++) {
                if (ignore[j][0] == v[0] && ignore[j][1] == v[1]) break;
            }
            if (!ignore.length || j == ignore.length) r.push(v);
        }
        return r;
    }

    function getRoad(p) {
        var cellSize = 9;
        var x = Math.floor(p.x / cellSize);
        var y = Math.floor(p.y / cellSize);
        var i;
        var k = 0;
        var b = null;
        var cellList;
        while (!b) {
            cellList = [];
            for (i = Math.max(x - k, 0); i <= Math.min(x + k, g.length - 1); i++) {
                if (y - k >= 0 && y - k < g.length) cellList.push([i, y - k]);
                if (y + k >= 0 && y + k < g.length) cellList.push([i, y + k]);
            }
            for (i = Math.max(y - k + 1); i < Math.min(y + k, g.length - 1); i++) {
                if (x - k >= 0 && x - k < g.length) cellList.push([x - k, i]);
                if (x + k >= 0 && x + k < g.length) cellList.push([x + k, i]);
            }
            for (i = 0; i < cellList.length; i++) {
                var v = cellList[i];
                if (g[v[0]].charAt(v[1]) == "_" && (!b || p.subtract(new createjs.Point((v[0] + 0.5) * cellSize, (v[1] + 0.5) * cellSize)).length < p.subtract(new createjs.Point((b[0] + 0.5) * cellSize, (b[1] + 0.5) * cellSize)).length)) b = v;
            }
            k++;
        }
        return b;
    }

    function getBestCell(list, p) {
        var best = list[0];
        for (var i = 1; i < list.length; i++) {
            if (p.subtract(list[i].p).length < p.subtract(best.p).length) best = list[i];
        }
        return best;
    }

    function pathGetCell(map, p) {
        p = transformPoint(map.m0, p);
        var x = Math.floor(p.x);
        var y = Math.floor(p.y);
        if (map.g[x] && map.g[x][y]) return map.g[x][y];
        return null;
    }

    function getCell(map, p) {
        var cell = pathGetCell(map, p);
        if (!cell) {
            return getBestCell(map.cells, p);
        }
        return cell;
    }

    function pathIndex(path, p) {
        var index = 0;
        for (var i = 1; i < path.length - 1; i++) {
            if (linePoint(path[i], path[i + 1], p).subtract(p).length < linePoint(path[index], path[index + 1], p).subtract(p).length + 0.01) index = i;
        }
        return index;
    }

    function linePoint(a, b, p) {
        p = p.subtract(a);
        var n = b.subtract(a);
        var t = (p.x * n.x + p.y * n.y) / (n.x * n.x + n.y * n.y);
        return createjs.Point.interpolate(b, a, Math.min(Math.max(t, 0), 1));
    }

    function linePointTime(a, b, p) {
        p = p.subtract(a);
        var n = b.subtract(a);
        return (p.x * n.x + p.y * n.y) / (n.x * n.x + n.y * n.y);
    }

    function pathOffset(path, p, distance, offset) {
        if (!path || !path.length) return null;
        if (path.length == 1) return path[0];
        var s = 0;
        var i = pathIndex(path, p);
        if (i == path.length - 1) i--;
        var d = createjs.Point.interpolate(path[i + 1], path[i], linePointTime(path[i], path[i + 1], p));
        var v = path[i + 1].subtract(path[i]);
        var a = normalize(normal(v), offset).add(d).add(normalize(v, distance));
        var b = normalize(normal(v), -offset).add(d).add(normalize(v, distance));
        return b.subtract(p).length < a.subtract(p).length ? b : a;
    }

    function pathFinding(map, p, t) {
        var a = getCell(map, p);
        var b = getCell(map, t);
        if (!a || !b) return null;
        if (a == b) return [t]
        var cell = a;
        cell.v = 0;
        cell.d = b.p.subtract(a.p);
        var open = [cell];
        var close = [];
        var i = 0;
        while (open.length && i < 1000) {
            i++;
            sortOn(open, "d");
            cell = open.shift();
            close.push(cell);
            for (var j = 0; j < cell.a.length; j++) {
                var link = pathGetCell(map, cell.a[j]);
                if (!link) continue;
                if (open.indexOf(link) > -1) continue;
                if (close.indexOf(link) > -1) continue;
                link.d = link.p.subtract(t).length;
                link.v = cell.v + link.p.subtract((cell == a) ? p : cell.p).length
                open.push(link);
            }
            if (cell == b) {
                break;
            }
        }
        var list = [];
        i = 0;
        while (cell && i < 200) {
            i++
            var c = null;
            for (j = 0; j < cell.a.length; j++) {
                link = pathGetCell(map, cell.a[j]);
                if (close.indexOf(link) == -1) continue;
                if (!c || link.v < c.v) c = link;
            }
            cell = c;
            if (!cell) return null;
            if (cell == a) break;
            list.unshift(cell);
        }
        for (i = 0; i < list.length; i++) list[i] = list[i].p;
        if (!list.length) list = [t];
        return list;
    }

    function dv(v, r) {
        var matrixCam = new createjs.Matrix3D();
        matrixCam.appendTranslation(-cam.x, -cam.y, -cam.z);
        matrixCam.append(axis);
        var p = matrixCam.transformVector(v);
        layer2.graphics.moveTo(p.x, p.y);
        layer2.graphics.drawCircle(p.x, p.y, r);
    }

    function botFailCreate(bot, v) {
        if (bot.fail) return;
        bot.fail = {
            t: 0
        };
        bot.play.unshift({
            name: "fail",
            t: 0
        });
        if (bot != botList[0]) botFailMoneyCreate(bot);
        return;
        if (bot == botList[0]) {
            gameState = "gameOver";
        }
        var p = bot.p.add(ray)
        p.z += 1;
        if (bot.fail) return;
        effectCreate(p);
        bot.v = v.clone();
        bot.fail = {
            t: 0
        };
        bot.play.unshift({
            name: "fail",
            t: 0
        });
    }

    function botSee(a, b) {
        return !b.fail && Math.abs(angle1(a.rad, Math.atan2(b.p.y - a.p.y, b.p.x - a.p.x))) < Math.PI * 1.5 && !mapRay(a.p, b.p, 4)
    }

    function randomTarget() {
        var r = randomPoint();
        r.x -= 0.5;
        r.y -= 0.5;
        r.normalize(r.length * Math.random() < 0.3 ? 5 : 1);
        r = vp(botList[0].p).add(r);
        var cx = Math.floor(r.x / (14 * 1.2)) * 14 * 1.2 + 7 * 1.2;
        var cy = Math.floor(r.y / (14 * 1.2)) * 14 * 1.2 + 5 * 1.2;
        r.x = truncate1(r.x - cx, 5 * 1.2) + cx;
        r.y = truncate1(r.y - cy, 5 * 1.2) + cy;
        return pv(r);
    }

    function voz(value) {
        return value ? value : 0;
    }
    var houseList;
    var cactusList = [];
    var helicopter;
    var startEnd

    function displayEdgeRayPoints(p, n, stepPoint, r) {
        var x0 = -r * zoom(worldScale);
        var x1 = sceneSize().x + r * zoom(worldScale);
        var y0 = -r * zoom(worldScale);
        var y1 = sceneSize().y + r * zoom(worldScale);
        var w = [x0, y0, x1, y0, x1, y1, x0, y1, x0, y0];
        var d = [];
        for (var i = 2; i < w.length; i += 2) {
            d.push({
                a: groundPosition(new createjs.Point(w[i - 2], w[i - 1])),
                b: groundPosition(new createjs.Point(w[i + 0], w[i + 1]))
            });
        }
        var result = [];
        var k = 0;
        while (true) {
            var a = createjs.Point.interpolate(stepPoint, new createjs.Point(), k).add(p);
            var b = n.add(a);
            k = k >= 0 ? k + 1 : k - 1;
            var pointList = [];
            for (var j = 0; j < d.length; j++) {
                var t = lineTime(a, b, vp(d[j].a), vp(d[j].b));
                var v = createjs.Point.interpolate(b, a, t);
                if (v.subtract(linePoint(vp(d[j].a), vp(d[j].b), v)).length > 0.01) continue;
                pointList.push(v);
            }
            if (pointList.length == 0) {
                if (k > 0) k = -1;
                else return result;
            }
            result = result.concat(pointList);
        }
        return null;
    }

    function isPointOnDisplay(p, r) {
        var x0 = -r * zoom(worldScale)
        var x1 = sceneSize().x + r * zoom(worldScale)
        var y0 = -r * zoom(worldScale)
        var y1 = sceneSize().y + r * zoom(worldScale)
        var w = [x0, y0, x1, y0, x1, y1, x0, y1, x0, y0];
        var d = [];
        for (var i = 2; i < w.length; i += 2) {
            var a = vp(groundPosition(new createjs.Point(w[i - 2], w[i - 1])))
            var b = vp(groundPosition(new createjs.Point(w[i + 0], w[i + 1])))
            if (dot(normal(b.subtract(a)), p.subtract(a)) > 0) return false;
        }
        return true;
    }

    function resetGame() {}

    function newGame() {
        botBalanceData = {
            t: 5,
            count: 1
        };
        worldScale = 16
        mapDic = {};
        gameState = "game";
        botList = [];
        effectList = [];
        bulletList = [];
        carList = [];
        moneyList = [];
        patternInit();
        gen(Math.floor(11 + Math.random() * 12));
        deathCircleR = deathCircleR0 = g.length * 9 / 2;
        deathCircleR1 = 8;
        deathCircleTimer = 0;
        deathCircleTimerMax = (deathCircleR0 - deathCircleR1) / (Math.random() + 1);
        map = [];
        for (i = 0; i < g.length; i++)
            for (j = 0; j < g.length; j++)
                if (j) map[i][j] = [
                    [],
                    [],
                    []
                ];
                else map[i] = [
                    [
                        [],
                        [],
                        []
                    ]
                ];
        var i, j;
        for (i = 0; i < g.length; i++)
            for (j = 0; j < g.length; j++) {
                if (gv(i, j) == "_") roadAdd(i, j);
                if (gv(i, j) == "a") houseAdd(i, j);
                if (gv(i, j) == " ") addModelContainer("green" + Math.floor(Math.random() * 3 + 1), i, j, Math.floor(Math.random() * 4) * 90);
            }
    }
    var path;
    var mapDic;

    function modelDataClear(libraryNodes, all) {
        for (var i = 0; i < libraryNodes.length; i++)
            for (var j = 0; j < libraryNodes[i][0].length; j++) {
                var geom = libraryNodes[i][0][j];
                if (libraryNodes[i][0][j].length > 1 || all) libraryNodes[i][0][j] = [];
            }
    }

    function houseAdd(x, y) {
        var d = [0, 1, 2, 3];
        for (i = 0; i < d.length; i++) {
            var j = Math.floor(Math.random() * 4);
            var temp = d[j]
            d[j] = d[i];
            d[i] = temp;
        }
        var p = [1, 0, 0, 1, -1, 0, 0, -1];
        for (var i = 0; i < d.length; i++) {
            var dx = p[d[i] * 2 + 0] + x;
            var dy = p[d[i] * 2 + 1] + y;
            if (gv(dx, dy) == "_") {
                var libName = "cell" + Math.floor(Math.random() * 8 + 1);
                addModelContainer(libName, x, y, d[i] * 90);
                return;
            }
        }
    }

    function roadAdd(x, y) {
        var d = [
            [4, 0, 0, 1, 2, 3],
            [3, 3, 0, 2, 3],
            [3, 2, 1, 2, 3],
            [3, 1, 0, 1, 2],
            [3, 0, 0, 1, 3],
            [2, 3, 3, 0],
            [2, 2, 2, 3],
            [2, 1, 1, 2],
            [2, 0, 0, 1],
            [1, 1, 1, 3],
            [1, 0, 0, 2]
        ];
        var p = [1, 0, 0, 1, -1, 0, 0, -1];
        for (var j = 0; j < d.length; j++) {
            for (var i = 2; i < d[j].length; i++) {
                var w = d[j][i];
                var dx = p[w * 2 + 0];
                var dy = p[w * 2 + 1];
                if (gv(x + dx, y + dy) != "_") break;
            }
            if (i == d[j].length) {
                var modelName = "road" + d[j][0];
                var b = boxCreate({}, modelCreate(modelDataLib[modelName][0], modelDataLib[modelName][1]));
                b.matrix = cellMatrix(x, y, d[j][1] * 90);
                b.collider = getBorderCollider(b);
                b.initPic = true;
                map[x][y][0].push(b);
                return;
            }
        }
    }

    function cellMatrix(x, y, deg) {
        var m = new createjs.Matrix3D();
        m.appendTranslation(-4.5, -4.5, 0);
        m.appendRotation(deg, createjs.Vector3D.Z_AXIS);
        m.appendTranslation(4.5 + x * 9, 4.5 + y * 9, 0);
        return m;
    }

    function addModelContainer(name, x, y, deg) {
        var i, j;
        var libName = name;
        var cells = modelCreate(modelDataLib["cells"][0], modelDataLib["cells"][1]).childList;
        for (i = 0; i < cells.length; i++) {
            if (cells[i].def == libName) {
                for (j = 0; j < cells[i].childList.length; j++) {
                    var m = cells[i].childList[j].matrix.clone();
                    m.append(cellMatrix(x, y, deg));
                    var p = m.position.clone();
                    m.appendTranslation(-p.x, -p.y, -p.z);
                    var name = cells[i].childList[j].def;
                    var b = boxCreate({}, modelCreate(modelDataLib[name][0], modelDataLib[name][1]));
                    b.collider = getBorderCollider(b);
                    b.initPic = true;
                    b.p = p;
                    b.matrix = m;
                    if (name == "pavement1" || name == "green") {
                        map[x][y][0].push(b);
                    }
                    if (!name.indexOf("house") || !name.indexOf("tree")) {
                        b.isBuilding = true
                        b.shadow = new createjs.Container();
                        map[x][y][1].push(b);
                        map[x][y][2].push(b);
                        mapAdd(mapDic, b);
                    }
                    if (b.isBuilding) {
                        b.shadowCollider = colliderShadow(b.collider, b.matrix);
                    }
                }
                return;
            }
        }
    }

    function dataSceneModelBitmap(model, collider, sceneCollider) {
        var image = createBitmap(model.def + ".png");
        var r0 = colliderToRect(sceneCollider, axis)
        var t = model.matrix.clone();
        t.append(axis);
        var r = colliderToRect(collider, t);
        var m2 = new createjs.Matrix2D();
        scale(m2, r0.w / image.width, r0.h / image.height);
        translate(m2, r0.x, r0.y);
        m2.invert();
        var p0 = transformPoint(m2, new createjs.Point(r.x, r.y));
        var p1 = transformPoint(m2, new createjs.Point(r.x + r.w, r.y + r.h));
        var sx = (p1.x - p0.x) * 0
        var sy = (p1.y - p0.y) * 0
        p0.x = Math.round(p0.x - sx);
        p0.y = Math.round(p0.y - sy);
        p1.x = Math.round(p1.x + sy);
        p1.y = Math.round(p1.y + sy);
        return createRectBitmap(image, p0.x, p0.y, p1.x - p0.x, p1.y - p0.y);
    }

    function modelPicDraw(box) {
        if (!box.image) {
            box.image = [null];
            if (box.shadow) box.imageShadow = [null];
            box.collider = getBorderCollider(box);
        }
        var model = box.model.childList[0];
        if (!box.sprite.numChildren) box.sprite.addChild(new createjs.Container());
        if (box.shadow && !box.shadow.numChildren) box.shadow.addChild(new createjs.Container());
        var imageIndex = 0;
        for (var i = 1; i < box.model.childList.length; i++) {
            if (!box.image[i]) box.image[i] = null;
            if (box.shadow && !box.imageShadow[i]) box.imageShadow[i] = null;
            var m0 = box.model.childList[i].matrix.clone();
            m0.invert();
            m0.append(box.matrix);
            var b0 = model.matrix.clone();
            b0.invert();
            b0.append(box.matrix);
            if (ray.dotProduct(m0.transformVector(ray).subtract(m0.transformVector(new createjs.Vector3D()))) > ray.dotProduct(b0.transformVector(ray).subtract(b0.transformVector(new createjs.Vector3D())))) {
                model = box.model.childList[i];
                imageIndex = i;
            }
        }
        if (!box.image[imageIndex]) {
            box.image[imageIndex] = createBitmap(model.def + "_" + imageIndex + ".png");
            var t = model.matrix.clone();
            t.appendTranslation(-t.position.x, -t.position.y, -t.position.z);
            t.append(axis);
            var p = t.transformVector(new createjs.Vector3D());
            var r = colliderToRect(box.collider, t);
            var m2 = new createjs.Matrix2D();
            scale(m2, r.w / (box.image[imageIndex].width), r.h / (box.image[imageIndex].height));
            translate(m2, r.x, r.y);
            setTransformMatrix(box.image[imageIndex], m2);
            if (box.shadow) {
                box.imageShadow[imageIndex] = createBitmap(model.def + "s_" + imageIndex + ".png");
                r = colliderToRect(colliderShadow(box.collider, model.matrix), t);
                m2 = new createjs.Matrix2D();
                scale(m2, r.w / (box.imageShadow[imageIndex].width), r.h / (box.imageShadow[imageIndex].height));
                translate(m2, r.x, r.y);
                setTransformMatrix(box.imageShadow[imageIndex], m2);
            }
        }
        var m = box.matrix.clone();
        m.append(axis);
        var m0 = model.matrix.clone();
        m0.appendTranslation(-model.matrix.position.x, -model.matrix.position.y, -model.matrix.position.z)
        m0.append(axis);
        var a = colliderSize(box.collider);
        var k = stage.mouseX / stage.stageWidth;
        var s = interpolate(a[0], a[1], 0.5);
        var transform = skin(vp(m.transformVector(new createjs.Vector3D(s.x + 1, s.y, s.z))), vp(m.transformVector(new createjs.Vector3D(s.x - 1, s.y, s.z))), vp(m0.transformVector(new createjs.Vector3D(s.x + 1, s.y, s.z))), vp(m0.transformVector(new createjs.Vector3D(s.x - 1, s.y, s.z))), 1, 0, 0);
        while (box.sprite.getChildAt(0).numChildren) box.sprite.getChildAt(0).removeChildAt(0);
        box.sprite.getChildAt(0).addChild(box.image[imageIndex]);
        setTransformMatrix(box.sprite.getChildAt(0), transform);
        if (box.shadow) {
            while (box.shadow.getChildAt(0).numChildren) box.shadow.getChildAt(0).removeChildAt(0);
            box.shadow.getChildAt(0).addChild(box.imageShadow[imageIndex]);
            setTransformMatrix(box.shadow.getChildAt(0), transform);
        }
    }

    function loop() {
        if (mute != !(ifvisible.now() && soundOn.visible)) {
            mute = !mute;
            audio.sound.mute(mute);
        }
        if (gameState == "win" || gameState == "gameover") {
            startTimer += sec;
            if (startTimer > 7) {
                if (gameState == "gameOver") scores = 0;
                newGame();
                gameState = "game";
            }
        }
        if (gameState == "title") {
            var sceneCenter = new createjs.Point(g.length * 9 / 2, g.length * 9 / 2);
            if (!camTarget || camTarget.subtract(vp(cam)).length < 1) {
                camTarget = normalize(new createjs.Point(Math.random() - 0.5, Math.random() - 0.5), deathCircleR0 * 0.5).add(sceneCenter);
            }
            if (!cam) cam = pv(camTarget).clone();
            camVel = truncate2(truncate2(camTarget.subtract(vp(cam)), 15 / 3.6).subtract(camVel), 7 * ms).add(camVel);
            cam = pv(transformPoint(rotate(new createjs.Matrix2D(), Math.atan2(cam.subtract(sceneCenter).y, cam.subtract(sceneCenter).x) + 0.1 * sec), new createjs.Point(deathCircleR0 * 0.5)).add(sceneCenter));
        }
        if (gameState == "game") startTimer = 0;
        clear(layer2);
        lineStyle(layer2, 0.1, "0")
        carBalance();
        botBalance();
        thingBalance("gun", 1);
        thingBalance("shotgun", 1);
        thingBalance("hearth", 3);
        carLoop();
        botLoop();
        for (i = thingList.length - 1; i >= 0; i--) {
            thingStep(thingList[i]);
        }
        for (i = bulletList.length - 1; i >= 0; i--) {
            bulletStep(bulletList[i]);
            if (bulletList[i].removing) bulletList.splice(i, 1);
        }
        for (i = moneyList.length - 1; i >= 0; i--) {
            moneyStep(moneyList[i]);
            if (moneyList[i].removing) moneyList.splice(i, 1);
        }
        for (i = effectList.length - 1; i >= 0; i--) {
            effectStep(effectList[i]);
            if (effectList[i].removing) effectList.splice(i, 1);
        }
        if (gameState != "title" && botList[0]) "ee";
        if (gameState != "title" && botList[0]) cam = botList[0].p.clone();
        updateScene(camCells(2, 3).concat(carList).concat(botList).concat(thingList).concat(bulletList).concat(effectList).concat(moneyList), main, displayList0, false);
        updateScene(camCells(1, 3), shadowLayer, displayListShadow0, true);
        updateScene(camCells(0, 3), roadLayer, displayListRoad0, false);
        shadowLayer.alpha = 0.3;
        sec = 1 / fps * timeShift;
        ms = 2 / fps * timeShift;
        setTransformMatrix(main, translate(scale(new createjs.Matrix2D(), zoom(worldScale), zoom(worldScale)), sceneSize().x / 2, sceneSize().y / 2));
        setTransformMatrix(roadLayer, translate(scale(new createjs.Matrix2D(), zoom(worldScale), zoom(worldScale)), sceneSize().x / 2, sceneSize().y / 2));
        setTransformMatrix(shadowLayer, translate(scale(new createjs.Matrix2D(), zoom(worldScale), zoom(worldScale)), sceneSize().x / 2, sceneSize().y / 2));
        setTransformMatrix(layer2, translate(scale(new createjs.Matrix2D(), zoom(worldScale), zoom(worldScale)), sceneSize().x / 2, sceneSize().y / 2));
        setTransformMatrix(layerJoystick, translate(scale(new createjs.Matrix2D(), zoom(100), zoom(100) * Math.sin(45 / 180 * Math.PI)), sceneSize().x / 2, sceneSize().y / 2));
        clear(layerJoystick);
        scene.addChild(spriteAim);
        scene.addChild(spriteMove);
        var mm = translate(scale(new createjs.Matrix2D(), zoom(10), -zoom(10)), sceneSize().x - 2 * zoom(10), sceneSize().y - 2.5 * zoom(10));
        setTransformMatrix(spriteAim, mm);
        mm = translate(scale(new createjs.Matrix2D(), zoom(10), -zoom(10)), 2 * zoom(10), sceneSize().y - 2.5 * zoom(10));
        setTransformMatrix(spriteMove, mm);
        spriteAim.getChildAt(1).x = joystickVector(true).x;
        spriteAim.getChildAt(1).y = joystickVector(true).y;
        spriteMove.getChildAt(1).x = joystickVector(false).x;
        spriteMove.getChildAt(1).y = joystickVector(false).y;
        spriteMove.visible = spriteAim.visible = gameState == "game" && isMobile.any;
        var k = 0.5;
        var aa = [joystickAim, joystickMove];
        for (var i = 0; i < aa.length; i++) {
            if (aa[i].tap) {
                aa[i].tap = false;
                if (gameState == "gameOver") {
                    scores = 0;
                    newGame();
                }
            }
            if (aa[i].touch) {
                aa[i].t += sec;
                if (!isMobile.any) continue;
                aa[i].p = joystickPoint(aa[i].touch.p);
                aa[i].p = truncate2(aa[i].p.subtract(aa[i].p0), 10).add(aa[i].p0);
                beginFill(layerJoystick, "#ffffff55");
                endFill(layerJoystick);
                beginFill(layerJoystick, "#ffffff55");
                endFill(layerJoystick);
            }
        }
        if (botList.length && !startPos) deathCircleTimer += sec;
        var r = deathCircleR = deathCircleR0 + (deathCircleR1 - deathCircleR0) * Math.min(deathCircleTimer / deathCircleTimerMax, 1);
        clear(deathCircle);
        beginFill(deathCircle, "#ff0000");
        v = vp(axis.transformVector(new createjs.Vector3D(g.length * 9 / 2, g.length * 9 / 2).subtract(cam)));
        deathCircle.graphics.arc(v.x, v.y / deathCircle.scaleY, r, 0, Math.PI * 2, true);
        r = 1;
        var a = [-r, -r, r, -r, r, r, -r, r, -r, -r];
        for (i = 0; i < a.length; i += 2) {
            v = new createjs.Point(a[i] / 2 * sceneSize().x / (zoom(worldScale)), a[i + 1] / 2 * sceneSize().y / (zoom(worldScale)));
            if (i) deathCircle.graphics.lineTo(v.x, v.y / deathCircle.scaleY);
            else deathCircle.graphics.moveTo(v.x, v.y / deathCircle.scaleY);
        }
        deathCircle.scaleY = Math.cos(45 / 180 * Math.PI);
        deathCircle.alpha = 0.4;
        main.addChild(deathCircle);
        menuStep();
    }

    function mv(x, y, layer) {
        if (map[x] && map[x][y]) return map[x][y][layer];
        return [];
    }

    function camCells(layer, r) {
        var dx = Math.floor(cam.x / 9);
        var dy = Math.floor(cam.y / 9);
        var cells = mv(dx, dy, layer);
        for (var n = 1; n < r; n++) {
            for (var x = -n; x <= n; x++) {
                cells = cells.concat(mv(dx + x, dy - n, layer));
                cells = cells.concat(mv(dx + x, dy + n, layer));
            }
            for (var y = -n + 1; y <= n - 1; y++) {
                cells = cells.concat(mv(dx - n, dy + y, layer));
                cells = cells.concat(mv(dx + n, dy + y, layer));
            }
        }
        return cells;
    }

    function force2(car, v) {
        var n = new createjs.Point(Math.cos(car.rad), Math.sin(car.rad));
        var rad = truncate1(angle0(n, v) * v.length, Math.PI * 1);
        var w = truncate1(rad / (Math.PI * 0.4), 1) * Math.PI * 3;
        w = truncate1(w, Math.PI * 1 * getValue([0, 0, 10, 1], car.v.length, 0, 1)) * v.length
        car.w += truncate1(w - car.w, 7 * ms);
        car.rad += car.w * sec;
        var vs = dot(n, v);
        n.normalize(vs * 80 / 3.6 - dot(n, new createjs.Point(car.v.x, car.v.y)));
        v = truncate2(n.subtract(vp(car.v)), 4 * ms);
        car.v.x += v.x;
        car.v.y += v.y;
        v = new createjs.Point(-Math.sin(car.rad), Math.cos(car.rad));
        v.normalize(dot(v, vp(car.v)));
        v.normalize(-Math.min(v.length, 20 / 3.6 * ms));
        car.v.x += v.x;
        car.v.y += v.y;
        v = new createjs.Point(-Math.sin(car.rad), Math.cos(car.rad));
        v.normalize(dot(v, vp(car.v)));
        v.normalize(-Math.min(v.length, 30 / 3.6 * ms));
    }

    function tfSize(tf) {
        return new createjs.Point(20 / 5 * tf.text.length * parseInt(tf.name) / 10, parseInt(tf.name));
    }

    function menuStep() {
        scoresTF.text = "$" + scores.toString() + (scores ? "00" : "");
        if (botList[0] && botList[0].gun && botList[0].gun.bullets > 0) {
            bulletsTF.text = "" + botList[0].gun.bullets.toString();
        }
        scoresMenuTF.text = "$" + scores.toString() + (scores ? "00" : "");
        bestScoresMenuTF.text = "KỶ LỤC: $" + bestScores.toString() + (bestScores ? "00" : "");
        scoresTF.visible = gameState == "game" ? true : false;
        bulletsTF.visible = gameState == "game" && botList[0] && botList[0].gun && botList[0].gun.bullets > 0 ? true : false;
        titleTF.visible = gameState == "title" ? true : false;
        scoresMenuTF.visible = gameState == "gameOver" ? true : false;
        bestScoresMenuTF.visible = false
        sponsor.visible = gameState == "title" || gameState == "gameOver" ? true : false;
        email.visible = gameState == "title" || gameState == "gameOver" ? true : false;
        if (gameState == "win") {
            var mode = Math.round(getValue([0, 0, 2.5, 1, 4, 2], startTimer, 0, 1));
            scoresMenuTF.text = ["BẠN THẮNG!", "+$1000", scoresMenuTF.text][mode]
            scoresMenuTF.visible = true;
        }
        scene.addChild(bulletsTF);
        scene.addChild(scoresTF);
        scene.addChild(titleTF);
        scene.addChild(scoresMenuTF);
        scene.addChild(bestScoresMenuTF);
        scene.addChild(sponsor);
        scene.addChild(email);
        scene.addChild(soundOn);
        scene.addChild(soundOff);
        var s = zoom(90);
        setTransformMatrix(scoresTF, translate(scale(new createjs.Matrix2D(), s, s), 0, 0));
        setTransformMatrix(bulletsTF, translate(scale(new createjs.Matrix2D(), s, s), sceneSize().x * 0.5 - tfSize(bulletsTF).x * s / 2, sceneSize().y - tfSize(bulletsTF).y * s));
        setTransformMatrix(titleTF, translate(scale(new createjs.Matrix2D(), s, s), sceneSize().x * 0.5, sceneSize().y * 0.5 - (tfSize(titleTF).y + 0 + tfSize(scoresMenuTF).y + 15) * s * 0.5));
        setTransformMatrix(scoresMenuTF, translate(scale(new createjs.Matrix2D(), s, s), sceneSize().x * 0.5, 50 * s));
        setTransformMatrix(bestScoresMenuTF, translate(scale(new createjs.Matrix2D(), s, s), sceneSize().x * 0.5, (18 + tfSize(scoresMenuTF).y) * s));
        setTransformMatrix(sponsor, buttonMatrix(sponsor, zoom(90), 0, 15, 0.5, 1));
        setTransformMatrix(email, buttonMatrix(email, zoom(90), 0, 3, 0, 0));
        setTransformMatrix(soundOn, buttonMatrix(soundOn, zoom(90), 0, 15, 1, 0));
        setTransformMatrix(soundOff, buttonMatrix(soundOff, zoom(90), 0, 15, 1, 0));
    }
    var displayList0 = [];
    var displayListRoad0 = [];
    var displayListShadow0 = [];

    function buttonMatrix(image, zoom, sx, sy, x, y) {
        var m = new createjs.Matrix2D();
        var w = image.getChildAt(0).width;
        var h = image.getChildAt(0).height;
        var s = sx ? sx / w : sy / h;
        s *= zoom;
        scale(m, s, s);
        translate(m, (sceneSize().x - w * s) * x, (sceneSize().y - h * s) * y);
        return m;
    }

    function updateScene(displayList, container, displayList0, isShadow) {
        displayList = displayList.slice();
        for (i = displayList.length - 1; i >= 0; i--) {
            var collider = isShadow ? displayList[i].shadowCollider : displayList[i].collider;
            displayList[i].visible = isVisibleOnDisplay(displayList[i], 0, collider)
            if (!displayList[i].visible) displayList.splice(i, 1);
            else {
                if (displayList[i].initPic) {
                    displayList[i].initPic = false;
                    modelPicDraw(displayList[i])
                }
            }
        }
        var m3 = new createjs.Matrix3D();
        m3.appendTranslation(-cam.x, -cam.y, -cam.z);
        m3.append(axis);
        if (!isShadow)
            sceneSort2(displayList, container, m3, container == main ? lastOverlapList : [], true, container == main);
        for (var i = 0; i < displayList0.length; i++) {
            var sprite = isShadow ? displayList0[i].shadow : displayList0[i].sprite;
            if (displayList.indexOf(displayList0[i]) == -1 && sprite.parent) {
                sprite.parent.removeChild(sprite);
            }
        }
        displayList0.splice(0);
        for (i = 0; i < displayList.length; i++) {
            sprite = isShadow ? displayList[i].shadow : displayList[i].sprite;
            if (sprite.parent != container) container.addChild(sprite);
            var p = m3.transformVector(displayList[i].p);
            sprite.x = p.x;
            sprite.y = p.y;
            displayList0.push(displayList[i]);
        }
    }

    function oPoints(body) {
        var m0 = body.matrix.clone();
        var a = [];
        for (var i = 0; i < body.collider.length; i++) {
            a.push(m0.transformVector(body.collider[i]).add(body.p));
        }
        return a;
    }

    function getPointList(bodyA, bodyB) {
        var a = oPoints(bodyA);
        var b = oPoints(bodyB);
        var c = [];
        var s = "";
        for (var i = 0; i < a.length; i++)
            for (var j = 0; j < b.length; j++) {
                s += s ? "," : "";
                var p = a[i].subtract(b[j]);
                s += "new createjs.Vector3D(" + p.x + "," + p.y + "," + p.z + ")";
                c.push(p);
            }
    }

    function colliderBoxCreate(p, size, degZ) {
        var m = new createjs.Matrix3D();
        m.appendRotation(degZ, createjs.Vector3D.Z_AXIS);
        var collider = [];
        var w = [0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1];
        for (var i = 0; i < w.length; i += 3) {
            var v = new createjs.Vector3D(p.x + w[i + 0] * size.x, p.y + w[i + 1] * size.y, p.z + w[i + 2] * size.z);
            collider.push(m.transformVector(v));
        }
        return collider;
    }

    function boxCache(box) {
        var axis0 = axis.clone();
        axis0.invert();
        var p = box.p;
        box.p = new createjs.Vector3D();
        var b = [axis.transformVector(bodySupport(box, axis0.transformVector(new createjs.Vector3D(-1)))), axis.transformVector(bodySupport(box, axis0.transformVector(new createjs.Vector3D(0, -1)))), axis.transformVector(bodySupport(box, axis0.transformVector(new createjs.Vector3D(1)))), axis.transformVector(bodySupport(box, axis0.transformVector(new createjs.Vector3D(0, 1)))), ];
        box.p = p;
        b = [b[0].x, b[1].y, b[2].x - b[0].x, b[3].y - b[1].y];
        spriteCache(box.sprite, b[0], b[1], b[2], b[3], 40);
    }

    function getBorderCollider(b) {
        for (var k = 0; k < b.model.childList[0].childList.length; k++)
            if (b.model.childList[0].childList[k].name == "border")
                return b.model.childList[0].childList[k].collider;
        return null;
    }

    function colliderShadow(collider, m) {
        m = m.clone();
        var m0 = m.clone();
        m0.invert();
        var n = new createjs.Vector3D(2, 1.96, -5.47);
        n.normalize();
        var list = [];
        for (var i = 0; i < collider.length; i++) {
            var p = m.transformVector(collider[i]);
            p.x += n.x * -p.z / n.z
            p.y += n.y * -p.z / n.z
            p.z = 0
            list.push(m0.transformVector(p));
        }
        return list;
    }

    function bodyRect(body, append) {
        if (!body || !body.collider) return null;
        var m = body.matrix.clone();
        m.appendTranslation(body.p.x, body.p.y, body.p.z);
        m.append(append);
        for (var i = 0; i < body.collider.length; i++) {
            var v = m.transformVector(body.collider[i]);
            if (!min) var min = v.clone();
            if (!max) var max = v.clone();
            min.x = Math.min(min.x, v.x);
            min.y = Math.min(min.y, v.y);
            min.z = Math.min(min.z, v.z);
            max.x = Math.max(max.x, v.x);
            max.y = Math.max(max.y, v.y);
            max.z = Math.max(max.z, v.z);
        }
        return {
            p: min,
            s: max.subtract(min)
        }
    }

    function colliderSize(collider) {
        var min = collider[0].clone();
        var max = collider[0].clone();
        for (var i = 1; i < collider.length; i++) {
            var v = collider[i];
            min.x = Math.min(min.x, v.x);
            min.y = Math.min(min.y, v.y);
            min.z = Math.min(min.z, v.z);
            max.x = Math.max(max.x, v.x);
            max.y = Math.max(max.y, v.y);
            max.z = Math.max(max.z, v.z);
        }
        return [min, max];
    }

    function colliderToRect(collider, m) {
        var min = m.transformVector(collider[0]);
        var max = m.transformVector(collider[0]);
        for (var i = 1; i < collider.length; i++) {
            var v = m.transformVector(collider[i]);
            min.x = Math.min(min.x, v.x);
            min.y = Math.min(min.y, v.y);
            max.x = Math.max(max.x, v.x);
            max.y = Math.max(max.y, v.y);
        }
        return {
            x: min.x,
            y: min.y,
            w: max.x - min.x,
            h: max.y - min.y
        };
    }

    function randomPos(r) {
        var rad = Math.random() * Math.PI * 2;
        return vp(cam).add(new createjs.Point(Math.cos(rad) * r, Math.sin(rad) * r));
    }

    function groundPosition(displayPoint) {
        var m = new createjs.Matrix3D();
        m.appendTranslation(-cam.x, -cam.y, -cam.z);
        m.append(axis);
        m.appendScale(zoom(worldScale), zoom(worldScale), 1);
        m.appendTranslation(sceneSize().x / 2, sceneSize().y / 2, 0);
        m.invert();
        var p = m.transformVector(pv(displayPoint));
        p.x -= ray.x * p.z / ray.z;
        p.y -= ray.y * p.z / ray.z;
        p.z = 0;
        return p;
    }

    function groundMouse() {
        var p = new createjs.Vector3D((scenePoint().x - sceneSize().x / 2) / zoom(worldScale), (scenePoint().y - sceneSize().y / 2) / zoom(worldScale));
        p = axis0.transformVector(p);
        var r = ray.clone();
        r.scaleBy(-(p.z + cam.z) / r.z);
        return r.add(p)
    }

    function zoom(s) {
        return Math.sqrt(sceneSize().x * sceneSize().y) / s
    }

    function getValue(a, t, index, count) {
        if (t < a[0]) return a[1 + index];
        for (var i = count + 1; i < a.length; i += count + 1)
            if (t < a[i]) return a[i - count + index] + (a[i + 1 + index] - a[i - count + index]) * (t - a[i - count - 1]) / (a[i] - a[i - count - 1]);
        return a[a.length - count + index];
    }

    function isVisibleOnDisplay(model, r, collider) {
        var axis0 = axis.clone();
        axis0.invert();
        var s = 0.5 / zoom(worldScale);
        var sx = sceneSize().x * s + r;
        var sy = sceneSize().y * s + r;
        var displayBody = {
            p: cam.clone(),
            matrix: axis0,
            collider: [new createjs.Vector3D(-sx, -sy), new createjs.Vector3D(+sx, -sy), new createjs.Vector3D(-sx, +sy), new createjs.Vector3D(+sx, +sy), ]
        };
        var temp = model.collider;
        model.collider = collider;
        var result = overlapSimplex(model, displayBody, ray) ? true : false;
        model.collider = temp;
        return result;
    }
    var lastOverlapList = [];

    function sceneSort2(displayList, container, m, lastOverlapList, sapX, sorting) {
        var axis0 = axis.clone();
        axis0.invert();
        var sap = [];
        var overlapList = [];
        for (var i = displayList.length - 1; i >= 0; i--) {
            d = displayList[i];
            d.range = d.isStatic && d.range ? d.range : [new createjs.Point(axis.transformVector(bodySupport(d, axis0.transformVector(new createjs.Vector3D(-1)))).x, axis.transformVector(bodySupport(d, axis0.transformVector(new createjs.Vector3D(0, -1)))).y), new createjs.Point(axis.transformVector(bodySupport(d, axis0.transformVector(new createjs.Vector3D(1)))).x, axis.transformVector(bodySupport(d, axis0.transformVector(new createjs.Vector3D(0, 1)))).y)];
            if (d.isStatic) {
                overlapList.push(d, []);
            }
            sap.push({
                x: sapX ? d.range[0].x : d.range[0].y,
                d: d
            });
            sap.push({
                x: sapX ? d.range[1].x : d.range[1].y,
                d: d
            });
        }
        sortOn(sap, "x");
        var overlap = [];
        var list = [];
        while (sap.length > 0) {
            var item = sap.shift();
            var r = item.r;
            var d = item.d;
            i = list.indexOf(d);
            if (i > -1) {
                list = list.slice(0, i).concat(list.slice(i + 1));
                continue;
            }
            var p = m.transformVector(d.p);
            d.d = vp(p);
            d.sprite.x = p.x;
            d.sprite.y = p.y;
            if (d.isBuilding) {
                if (!d.alphaInit) {
                    d.alphaTarget = 1;
                    d.alpha = 1;
                    d.alphaInit = true;
                }
                d.alpha += truncate1(d.alphaTarget - d.alpha, sec);
                d.sprite.alpha = d.alpha;
                d.alphaTarget = 1;
            }
            if (d.sprite.parent != container) {
                container.addChild(d.sprite);
            }
            if (!sorting) continue;
            for (i = 0; i < list.length; i++) {
                if (d.isStatic && list[i].isStatic) {
                    j = lastOverlapList.indexOf(d);
                    var k = lastOverlapList.indexOf(list[i]);
                    if (j != -1 && lastOverlapList[j + 1].indexOf(list[i]) != -1) {
                        overlap.push([d, list[i]]);
                        overlapList[overlapList.indexOf(d) + 1].push(list[i]);
                        continue;
                    }
                    if (k != -1 && lastOverlapList[k + 1].indexOf(d) != -1) {
                        overlap.push([list[i], d]);
                        overlapList[overlapList.indexOf(list[i]) + 1].push(d);
                        continue;
                    }
                    if (j != -1 && k != -1) continue;
                }
                var simplex = (sapX ? (d.range[0].y - list[i].range[1].y) * (d.range[1].y - list[i].range[0].y) : (d.range[0].x - list[i].range[1].x) * (d.range[1].x - list[i].range[0].x)) >= 0 ? null : overlapSimplex(list[i], d, ray);
                if (simplex) {
                    var s0 = simplexUp(simplex, list[i], d, ray);
                    var s1 = simplexUp(simplex, list[i], d, nv(ray));
                    if (Math.abs(s0 - s1) < 0.0001) continue;
                    if (s0 - s1 > 0) {
                        overlap.push([d, list[i]]);
                        if (d.isStatic && list[i].isStatic)
                            overlapList[overlapList.indexOf(d) + 1].push(list[i]);
                    } else {
                        overlap.push([list[i], d]);
                        if (d.isStatic && list[i].isStatic)
                            overlapList[overlapList.indexOf(list[i]) + 1].push(d);
                    }
                    if ((overlap[overlap.length - 1][0].alive) && overlap[overlap.length - 1][1].isBuilding) {
                        overlap[overlap.length - 1][1].alphaTarget = 0.7;
                    }
                }
            }
            list.push(d);
        }
        var j;
        lastOverlapList.splice(0);
        for (j = 0; j < overlapList.length; j++) {
            lastOverlapList.push(overlapList[j])
        }
        for (j = 0; j < 3; j++)
            for (i = 0; i < overlap.length; i++) {
                if (!overlap[i][0].sprite.parent) container.addChild(overlap[i][0].sprite);
                if (!overlap[i][1].sprite.parent) container.addChild(overlap[i][1].sprite);
                var ia = container.getChildIndex(overlap[i][0].sprite)
                var ib = container.getChildIndex(overlap[i][1].sprite)
                container.addChildAt(overlap[i][0].sprite, Math.min(ia, ib));
            }
    }

    function modelCollider(model) {
        var collider = model.collider.slice(0);
        for (var i = 0; i < model.childList.length; i++) {
            var a = modelCollider(model.childList[i]);
            var m = model.childList[i].matrix;
            for (var j = 0; j < a.length; j++) {
                a[j] = m.transformVector(a[j]);
            }
            collider = collider.concat(a);
        }
        return collider;
    }

    function modelCreate(libraryNodes, node) {
        var geomList = node[0];
        var nodeList = node[1];
        var sprite = new createjs.Shape();
        var childList = [];
        for (var i = 0; i < nodeList.length; i++) {
            if (nodeList[i][2] == "lib") continue;
            var m = new createjs.Matrix3D(arrayToVector(nodeList[i][1]));
            m.transpose();
            var model = modelCreate(libraryNodes, libraryNodes[nodeList[i][0]]);
            model.name = nodeList[i][2]
            childList.push(model);
            model.matrix = m;
        }
        var collider = [];
        for (i = geomList.length - 1; i >= 0; i--) {
            var p = geomList[i][2];
            if (!p) {
                p = geomList[i][0];
                geomList = geomList.slice(0, i).concat(geomList.slice(i + 1))
            }
            for (var j = 0; p && j < p.length; j += 3) {
                var v = new createjs.Vector3D(p[j], p[j + 1], p[j + 2]);
                for (var k = 0; k < collider.length; k++)
                    if (!collider[k].subtract(v).length) break;
                if (k == collider.length) collider.push(v);
            }
        }
        return {
            sprite: sprite,
            z: 0,
            geomList: geomList,
            matrix: new createjs.Matrix3D(),
            childList: childList,
            name: "",
            def: node[2],
            collider: collider
        };
    }

    function modelDraw(model, parentMatrix, scene, displayList) {
        if (scene) {
            displayList = [];
            parentMatrix = new createjs.Matrix3D();
        }
        displayList.push(model);
        var m;
        m = model.matrix.clone();
        m.append(parentMatrix);
        m.append(axis);
        var displayPos = m.transformVector(new createjs.Vector3D());
        model.sprite.x = displayPos.x;
        model.sprite.y = displayPos.y;
        m = model.matrix.clone();
        m.append(parentMatrix);
        for (i = 0; i < model.childList.length; i++) {
            modelDraw(model.childList[i], m, null, displayList);
        }
        m.append(axis);
        m.appendTranslation(-displayPos.x, -displayPos.y, -displayPos.z);
        clear(model.sprite);
        for (var i = 0; i < model.geomList.length; i++) {
            var color = model.geomList[i][0]
            var f = model.geomList[i][1];
            var p = model.geomList[i][2];
            var n = model.geomList[i][3];
            var vCount = model.geomList[i][4];
            if (cactusList.length && model == cactusList[0].model) debug = true;
            drawMesh(model.sprite, p, f, vCount, n, color, m);
            if (cactusList.length && model == cactusList[0].model) debug = false
        }
        if (scene) {
            for (i = 0; i < displayList.length; i++) {
                scene.addChild(displayList[i].sprite);
            }
        }
    }
    var debug = false;

    function modelBox(x, y, z, color) {
        var lib = [
            [
                [
                    [color, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
                        [0, 0, 0, 0, y, 0, x, y, 0, x, 0, 0, 0, y, 0, 0, 0, 0, 0, 0, z, 0, y, z, x, y, 0, 0, y, 0, 0, y, z, x, y, z, x, 0, 0, x, y, 0, x, y, z, x, 0, z, 0, 0, 0, x, 0, 0, x, 0, z, 0, 0, z, 0, y, z, 0, 0, z, x, 0, z, x, y, z],
                        [],
                        [4, 4, 4, 4, 4, 4]
                    ]
                ],
                [], "box"
            ]
        ];
        return modelCreateFromLibrary(lib, "box");
    }

    function drawMesh(sprite, pointList, faceList, vCount, normalList, color, m) {
        var v = [];
        var nn = [];
        for (var i = 0; i < pointList.length; i += 3) {
            var p = new createjs.Vector3D(pointList[i], pointList[i + 1], pointList[i + 2]);
            v.push(m.transformVector(p));
        }
        for (i = 0; i < normalList.length; i += 3) {
            p = new createjs.Vector3D(normalList[i], normalList[i + 1], normalList[i + 2]);
            nn.push(m.transformVector(new createjs.Vector3D()).subtract(m.transformVector(p)));
        }
        var sun = new createjs.Vector3D(0.4, -0.22, -1);
        sun.normalize();
        var j = 0;
        var count = 0;
        var t = 0;
        var lastColor;
        if (bitmapFill) {
            var m = bitmapFillMatrix.clone();
            translate(m, -sprite.x, -sprite.y)
            beginBitmapFill(sprite, bitmapFill, m);
        }
        if (debug) {}
        for (i = 0; i < faceList.length; i++) {
            if (j == count) {
                j = 0;
                count = vCount[t] ? vCount[t] : 3;
                t++;
                if (normalList.length == 0) var n = v[faceList[i + 1]].subtract(v[faceList[i]]).crossProduct(v[faceList[i + 2]].subtract(v[faceList[i]]));
                else n = nn[faceList[i]].clone();
                if (n.z > 0) {
                    i += count - 1;
                    j = count;
                    continue;
                }
                n.normalize();
                var k = sun.dotProduct(n);
                k = (k + 1) / 2;
                k = 0.6 + 0.4 * k;
                var a = hexToHsv(color);
                hsvToHex(a[0], a[1], a[2] * k)
                var color1 = hsvToHex(a[0], a[1], a[2] * k)
                if (!i || color1 != lastColor) {
                    lastColor = color1;
                    var s = color1.toString(16);
                    while (s.length < 6) s = "0" + s;
                    if (!bitmapFill) beginFill(sprite, "#" + s);
                }
            }
            if (j) sprite.graphics.lineTo(v[faceList[i]].x, v[faceList[i]].y);
            else sprite.graphics.moveTo(v[faceList[i]].x, v[faceList[i]].y);
            j++;
        }
        if (bitmapFill) {
            endFill(sprite);
        }
    }

    function modelCreateFromLibrary(library, name) {
        for (var i = 0; i < library.length; i++) {
            if (library[i][2] == name) break;
        }
        if (i == library.length) return null;
        var model = modelCreate(library, [
            [],
            [
                [i, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], name],
            ], name
        ]);
        return model.childList[0];
    }

    function drawModelFromLibrary(sprite, library, name) {
        var model = modelCreateFromLibrary(library, name);
        modelDraw(model, null, sprite, null);
    }

    function bodySupport2(body, d, collider) {
        var collider0 = body.collider;
        if (collider) body.collider = collider;
        var result = bodySupport(body, d);
        if (collider) body.collider = collider0;
        return result;
    }

    function bodySupport(body, d) {
        var m0 = body.matrix.clone();
        var best = m0.transformVector(body.collider[0]);
        for (var i = 1; i < body.collider.length; i++) {
            if (d.dotProduct(m0.transformVector(body.collider[i])) > d.dotProduct(best)) best = m0.transformVector(body.collider[i]);
        }
        return best.add(body.p);
    }

    function simplexUp(simplex, bodyA, bodyB, dir) {
        var v = dir.clone();
        v.normalize();
        var s = simplex;
        var m = 0;
        while (m < 10) {
            m++;
            if (!s) return result;
            var d = s[2].subtract(s[0]).crossProduct(s[1].subtract(s[0]));
            d.normalize();
            if (d.dotProduct(v) < 0) d = nv(d);
            var p = v.clone();
            var result = 1 / d.dotProduct(p) * d.dotProduct(s[0]);
            p.scaleBy(result);
            var point = bodySupport(bodyA, d).subtract(bodySupport(bodyB, nv(d)));
            if (d.dotProduct(point.subtract(s[0])) <= 0) {
                return result;
            }
            var b = null;
            for (var i = 0; i < 3; i++) {
                var a = [s[i], s[(i + 1) % 3], point];
                d = a[2].subtract(a[0]).crossProduct(a[1].subtract(a[0]));
                d.normalize();
                if (d.dotProduct(v) < 0) d = nv(d);
                var t = 1 / d.dotProduct(v) * d.dotProduct(a[0]);
                p = v.clone();
                p.scaleBy(t);
                if (t - result >= 0 && triangleVector(a, p).subtract(p).length <= 0.0000001) {
                    b = a;
                    result = t;
                }
            }
            s = b;
        }
        return result;
    }

    function addPoint(p, edgeList, faceList) {
        for (var i = 0; i < edgeList.length; i++) {
            addFace(edgeList[i].concat(p), faceList);
        }
    }

    function addFace(s, faceList) {
        var d = s[1].subtract(s[0]).crossProduct(s[2].subtract(s[0]));
        d.normalize();
        if (new createjs.Vector3D().subtract(s[0]).dotProduct(d) < 0) {
            d = nv(d);
            s.reverse();
        }
        var edgeList = [
            [s[0], s[1]],
            [s[1], s[2]],
            [s[2], s[0]]
        ];
        faceList.push({
            a: s,
            e: edgeList,
            n: nv(d),
            l: triangleVector(s, new createjs.Vector3D()).length
        });
    }

    function epa(bodyA, bodyB, s) {
        if (!s || s.length != 4) return null;
        var a = [];
        addPoint(s[2], [
            [s[0], s[1]]
        ], a);
        addPoint(s[3], a[0].e, a);
        for (var i = 0; i < 30; i++) {
            for (var j = 0; j < a.length; j++)
                if (!j || a[j].l < f.l) f = a[j];
            var p = bodySupport(bodyA, f.n).subtract(bodySupport(bodyB, nv(f.n)));
            if (f.n.dotProduct(p.subtract(f.a[0])) < 0.001) {
                return {
                    n: nv(f.n),
                    l: triangleVector(f.a, new createjs.Vector3D()).length
                };
            }
            var edges = [];
            for (j = a.length - 1; j >= 0; j--)
                if (a[j].n.dotProduct(p.subtract(a[j].a[0])) > 0.0001) {
                    var f = a[j];
                    a.splice(j, 1);
                    for (var k = 0; k < f.e.length; k++) {
                        for (var l = 0; l < edges.length; l++)
                            if (edges[l][1] == f.e[k][0] && edges[l][0] == f.e[k][1]) break;
                        if (l == edges.length) edges.push(f.e[k]);
                        else edges.splice(l, 1)
                    }
                }
            addPoint(p, edges, a);
        }
        return null;
    }

    function cdc(a, ac, b, bc) {
        var ac0 = a.collider;
        var bc0 = b.collider;
        a.collider = ac;
        b.collider = bc;
        cd(a, b, 1.01);
        a.collider = ac0;
        b.collider = bc0;
    }

    function cd(a, b, k) {
        if (!a || !b) return 0;
        var s = gjk(a, b);
        var c = s ? epa(a, b, s) : null;
        if (botList.indexOf(a) != -1 && botList.indexOf(b) != -1 && a.p.subtract(b.p).length < 0.3) {
            console.log(c)
        }
        if (!c) return 0;
        var n = c.n;
        n.normalize();
        if (!a.m) a.m = 1;
        if (!b.m) b.m = 1000;
        if (!b.v) b.v = new createjs.Vector3D();
        var f = k * -(n.dotProduct(a.v) - n.dotProduct(b.v) - Math.min(c.l / 0.3, 1) * 3) / (1 / a.m + 1 / b.m);
        if (f < 0) return 0;
        if (a.m < 1000) {
            a.v.x += n.x * f / a.m;
            a.v.y += n.y * f / a.m;
            a.v.z += n.z * f / a.m;
        }
        if (b.m < 1000) {
            b.v.x -= n.x * f / b.m;
            b.v.y -= n.y * f / b.m;
            b.v.z -= n.z * f / b.m;
        }
        return f;
    }

    function gjk(bodyA, bodyB) {
        var d = colliderCenter(bodyA).subtract(colliderCenter(bodyB));
        d = new createjs.Vector3D(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5);
        d.normalize();
        if (d.length == 0) d.x = 1;
        var max = bodyA.collider.length * bodyB.collider.length;
        var i = 0;
        var s = [];
        s.push(bodySupport(bodyA, d).subtract(bodySupport(bodyB, nv(d))));
        d = nv(d);
        while (i <= 20) {
            s.push(bodySupport(bodyA, d).subtract(bodySupport(bodyB, nv(d))));
            if (d.dotProduct(s[s.length - 1]) <= 0.001) {
                return null;
            }
            if (s.length == 2) {
                d = lineVector(s[0], s[1], new createjs.Vector3D());
                if (d.length < 0.0001) {
                    return s;
                }
            }
            if (s.length == 4) {
                if (tetrahedronVector(s, new createjs.Vector3D()).length < 0.000000001) {
                    return s;
                }
                var a = [containsLineShadow([s[0], s[1]], new createjs.Vector3D()), containsLineShadow([s[1], s[2]], new createjs.Vector3D()), containsLineShadow([s[2], s[0]], new createjs.Vector3D()), containsLineShadow([s[0], s[3]], new createjs.Vector3D()), containsLineShadow([s[1], s[3]], new createjs.Vector3D()), containsLineShadow([s[2], s[3]], new createjs.Vector3D())]
                if (!a[0] && !a[1] && !a[2] && !a[3] && !a[4] && !a[5]) {
                    return null;
                }
                a = [
                    [s[0], s[1], s[3]],
                    [s[1], s[2], s[3]],
                    [s[2], s[0], s[3]]
                ];
                d = null;
                for (var j = 0; j < a.length; j++) {
                    var v = triangleVector(a[j], new createjs.Vector3D());
                    if (!d || v.length < d.length) {
                        d = v;
                        s = a[j];
                    }
                }
            }
            if (s.length == 3) {
                var a = [containsLineShadow([s[0], s[1]], new createjs.Vector3D()), containsLineShadow([s[1], s[2]], new createjs.Vector3D()), containsLineShadow([s[2], s[0]], new createjs.Vector3D())];
                if (!a[0] && !a[1] && !a[2]) {
                    return null;
                }
                if (triangleVector(s, new createjs.Vector3D()).length < 0.0001) {
                    return s;
                }
                d = triangleDir(s, new createjs.Vector3D());
            }
            i++;
        }
        return null;
    }

    function triangleDir(s, p) {
        var d = s[1].subtract(s[0]).crossProduct(s[2].subtract(s[0]));
        d.normalize();
        if (p.subtract(s[0]).dotProduct(d) < 0) d = nv(d);
        return d;
    }

    function gjk2(bodyA, bodyB) {
        var d = colliderCenter(bodyA).subtract(colliderCenter(bodyB));
        d.normalize();
        if (d.length < 0.00001) d.x = 1;
        var s = [];
        s.push(bodySupport(bodyA, d).subtract(bodySupport(bodyB, nv(d))));
        s.push(bodySupport(bodyA, nv(d)).subtract(bodySupport(bodyB, d)));
        d = lineVector(s[0], s[1], new createjs.Vector3D());
        var max = bodyA.collider.length * bodyB.collider.length;
        var i = 0;
        while (i < max) {
            d = nv(d);
            if (d.length == 0) {
                return;
            }
            var p = bodySupport(bodyA, d).subtract(bodySupport(bodyB, nv(d)));
            var r = s.length == 3 ? triangleVector(s, p) : lineVector(s[0], s[1], p);
            if (r.length - p.length < 0.0001); {
                return;
            }
            if (s.length == 2) {
                s.push(p);
                d = triangleVector(s, new createjs.Vector3D());
            } else {
                d = tetrahedronVector(s.concat([p]), new createjs.Vector3D());
                if (d.length < 0.01) {
                    return;
                }
                var a = [
                    [s[0], s[1], p],
                    [s[1], s[2], p],
                    [s[2], s[0], p]
                ];
                var b = null;
                for (var j = 0; j < a.length; j++) {
                    var v = triangleVector(a[j], new createjs.Vector3D());
                    if (!b || v.length < d.length) {
                        b = v;
                        s = a[j];
                    }
                }
            }
            i++;
        }
    }

    function colliderCenter(body) {
        return body.matrix.transformVector(vListCenter(body.collider)).add(body.p)
    }

    function vListCenter(v) {
        var p = new createjs.Vector3D();
        for (var i = 0; i < v.length; i++) {
            p = p.add(v[i]);
        }
        p.x /= v.length;
        p.y /= v.length;
        p.z /= v.length;
        return p;
    }

    function tetrahedronVector(a, p) {
        var s = [
            [a[0], a[1], a[2]],
            [a[0], a[3], a[1]],
            [a[1], a[3], a[2]],
            [a[2], a[3], a[0]]
        ];
        for (i = 0; i < s.length; i++) {
            s[i] = s[i][1].subtract(s[i][0]).crossProduct(s[i][2].subtract(s[i][0])).dotProduct(p.subtract(s[i][0]));
        }
        if ((s[0] <= 0 && s[1] <= 0 && s[2] <= 0 && s[3] <= 0) || (s[0] >= 0 && s[1] >= 0 && s[2] >= 0 && s[3] >= 0)) {
            return p;
        }
        var best = null;
        for (var i = 0; i < 4; i++) {
            var n = triangleVector([a[(i) % 4], a[(i + 1) % 4], a[(i + 2) % 4]], p);
            if (!best || n.subtract(p).length < best.subtract(p).length) best = n;
        }
        return best;
    }

    function containsTetrahedron(a, p) {
        return containsTriangleShadow([a[0], a[1], a[2]], p) && containsTriangleShadow([a[0], a[1], a[3]], p) && containsTriangleShadow([a[1], a[2], a[3]], p) && containsTriangleShadow([a[2], a[0], a[3]], p);
    }

    function lineVector(a, b, p) {
        var t = p.subtract(a).dotProduct(b.subtract(a)) / (b.subtract(a).dotProduct(b.subtract(a)))
        t = Math.max(Math.min(t, 1), 0);
        return interpolate(a, b, t);
    }

    function triangleVector(a, p) {
        if (containsTriangleShadow(a, p)) {
            var n = a[1].subtract(a[0]).crossProduct(a[2].subtract(a[0]));
            n.normalize();
            n.scaleBy(-n.dotProduct(p.subtract(a[0])));
            return p.add(n);
        }
        var best = null;
        for (var i = 0; i < 3; i++) {
            n = lineVector(a[i], a[(i + 1) % 3], p);
            if (!best || n.subtract(p).length < best.subtract(p).length) best = n;
        }
        return best;
    }

    function triangleVector2(a, p) {
        if (containsTriangleShadow(a, p)) {
            var n = a[1].subtract(a[0]).crossProduct(a[2].subtract(a[0]));
            n.normalize();
            n.scaleBy(-n.dotProduct(p.subtract(a[0])));
            return p.add(n);
        }
        var best = null;
        for (var i = 0; i < 3; i++) {
            n = lineVector(a[i], a[(i + 1) % 3], p);
            if (!best || n.subtract(p).length < best.subtract(p).length) best = n;
        }
        return best;
    }

    function containsLineShadow(a, p) {
        var t = p.subtract(a[0]).dotProduct(a[1].subtract(a[0])) / (a[1].subtract(a[0]).dotProduct(a[1].subtract(a[0])))
        return t >= -0.001 && t <= 1.001;
    }

    function containsTriangleShadow(a, p) {
        var b = [];
        for (var i = 0; i < 3; i++) {
            var n = a[(i + 1) % 3].subtract(a[i]).crossProduct(a[(i + 2) % 3].subtract(a[i])).crossProduct(a[(i + 1) % 3].subtract(a[i]))
            b.push(n.dotProduct(p.subtract(a[i])));
        }
        return (b[0] >= 0 && b[1] >= 0 && b[2] >= 0) || (b[0] <= 0 && b[1] <= 0 && b[2] <= 0);
    }

    function overlapSimplex(bodyA, bodyB, dir) {
        var v = dir.clone();
        v.normalize();
        var d = colliderCenter(bodyA).subtract(colliderCenter(bodyB));
        d.normalize();
        if (!d.length) d.x = 1;
        var s = [];
        s.push(bodySupport(bodyA, d).subtract(bodySupport(bodyB, nv(d))));
        d = v.clone();
        d.scaleBy(v.dotProduct(s[0]));
        d = d.subtract(s[0])
        var j = 0;
        while (j < 20) {
            j++;
            s.push(bodySupport(bodyA, d).subtract(bodySupport(bodyB, nv(d))));
            if (d.dotProduct(s[s.length - 1]) - d.dotProduct(s[s.length - 2]) < 0.00001) {
                return null;
            }
            if (s.length == 3) {
                d = v.crossProduct(s[2].subtract(s[0]));
                if (d.dotProduct(s[1].subtract(s[0])) > 0) d = nv(d);
                if (d.dotProduct(nv(s[0])) > 0) {
                    s[1] = s.pop();
                } else {
                    d = v.crossProduct(s[2].subtract(s[1]));
                    if (d.dotProduct(s[0].subtract(s[1])) > 0) d = nv(d);
                    d.normalize();
                    if (d.dotProduct(nv(s[1])) > 0) {
                        s.shift();
                    } else {
                        return s;
                    }
                }
            } else {
                d = v.crossProduct(s[1].subtract(s[0]));
                if (d.dotProduct(nv(s[0])) < 0) d = nv(d);
            }
        }
        return null;
    }

    function nv(v) {
        return new createjs.Vector3D(-v.x, -v.y, -v.z);
    }

    function collisionVector(a, b) {
        var pa = a.p;
        var sa = a.size;
        var pb = b.p;
        var sb = b.size;
        var min = new createjs.Vector3D(pa.x - pb.x - sb.x, pa.y - pb.y - sb.y, pa.z - pb.z - sb.z);
        var max = new createjs.Vector3D(pa.x + sa.x - pb.x, pa.y + sa.y - pb.y, pa.z + sa.z - pb.z);
        var p = new createjs.Vector3D(Math.min(Math.max(0, min.x), max.x), Math.min(Math.max(0, min.y), max.y), Math.min(Math.max(0, min.z), max.z));
        if (p.length > 0.001) return new createjs.Vector3D();
        var aa = [new createjs.Vector3D(min.x, 0, 0), new createjs.Vector3D(max.x, 0, 0), new createjs.Vector3D(0, min.y, 0), new createjs.Vector3D(0, max.y, 0), new createjs.Vector3D(0, 0, min.z), new createjs.Vector3D(0, 0, max.z)];
        var best = aa[0];
        for (var i = 1; i < aa.length; i++) {
            if (aa[i].length < best.length) best = aa[i];
        }
        return best;
    }

    function aIsUnderB(a, b) {
        var pa = a.p;
        var sa = a.size;
        var pb = b.p;
        var sb = b.size;
        var r = 0.02;
        var min = new createjs.Vector3D(pa.x - pb.x - sb.x, pa.y - pb.y - sb.y, pa.z - pb.z - sb.z);
        var max = new createjs.Vector3D(pa.x + sa.x - pb.x, pa.y + sa.y - pb.y, pa.z + sa.z - pb.z);
        var p = new createjs.Vector3D(Math.min(Math.max(0, min.x + r), max.x - r), Math.min(Math.max(0, min.y + r), max.y - r), Math.min(Math.max(0, min.z + r), max.z - r));
        return axis.transformVector(p).z;
    }

    function HexToRGB(hex) {
        var rgb = [];
        var r = hex >> 16 & 0xFF;
        var g = hex >> 8 & 0xFF;
        var b = hex & 0xFF;
        rgb.push(r, g, b);
        return rgb;
    }

    function RGBToHex(r, g, b) {
        var hex = (r << 16 | g << 8 | b);
        return hex;
    }

    function hexToHsv(color) {
        var colors = HexToRGB(color);
        return RGBtoHSV(colors[0], colors[1], colors[2]);
    }

    function hsvToHex(h, s, v) {
        var colors = HSVtoRGB(h, s, v);
        return RGBToHex(colors[0], colors[1], colors[2]);
    }

    function HSVtoRGB(h, s, v) {
        var r = 0;
        var g = 0;
        var b = 0;
        var rgb = [];
        var tempS = s / 100;
        var tempV = v / 100;
        var hi = Math.floor(h / 60) % 6;
        var f = h / 60 - Math.floor(h / 60);
        var p = (tempV * (1 - tempS));
        var q = (tempV * (1 - f * tempS));
        var t = (tempV * (1 - (1 - f) * tempS));
        switch (hi) {
            case 0:
                r = tempV;
                g = t;
                b = p;
                break;
            case 1:
                r = q;
                g = tempV;
                b = p;
                break;
            case 2:
                r = p;
                g = tempV;
                b = t;
                break;
            case 3:
                r = p;
                g = q;
                b = tempV;
                break;
            case 4:
                r = t;
                g = p;
                b = tempV;
                break;
            case 5:
                r = tempV;
                g = p;
                b = q;
                break;
        }
        rgb = [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
        return rgb;
    }

    function RGBtoHSV(r, g, b) {
        var max = Math.max(r, g, b);
        var min = Math.min(r, g, b);
        var hue = 0;
        var saturation = 0;
        var value = 0;
        var hsv = [];
        if (max == min) {
            hue = 0;
        } else if (max == r) {
            hue = (60 * (g - b) / (max - min) + 360) % 360;
        } else if (max == g) {
            hue = (60 * (b - r) / (max - min) + 120);
        } else if (max == b) {
            hue = (60 * (r - g) / (max - min) + 240);
        }
        value = max;
        if (max == 0) {
            saturation = 0;
        } else {
            saturation = (max - min) / max;
        }
        hsv = [Math.round(hue), Math.round(saturation * 100), Math.round(value / 255 * 100)];
        return hsv;
    }

    function boxCreate(body, model) {
        var pos = model.matrix.transformVector(new createjs.Vector3D())
        model.matrix.appendTranslation(-pos.x, -pos.y, -pos.z);
        body.sprite = new createjs.Container();
        body.collider = model.collider;
        body.model = model;
        body.matrix = model.matrix;
        body.name = model.name;
        body.p = pos;
        body.size = colliderSize(body.collider)
        return body;
    }

    function boxCD(a, b) {
        var ap = boxEdge(a, b);
        if (!ap) return null;
        var bp = boxEdge(b, a);
        if (bp) bp[0] = normalize(bp[0], -1);
        if (ap && bp) return Math.abs(ap[1]) < Math.abs(bp[1]) ? ap : bp;
        return null;
    }

    function boxSupport(box, n) {
        var m = new createjs.Matrix2D();
        rotate(m, box.rad);
        translate(m, box.p.x, box.p.y);
        var a = [0, 0, 1, 0, 1, 1, 0, 1];
        var best = null;
        for (var i = 0; i < a.length; i += 2) {
            var p = new createjs.Point((a[i] - 0.5) * box.s.x, (a[i + 1] - 0.5) * box.s.y);
            p = transformPoint(m, p);
            if (!best || dot(n, p) > dot(n, best)) best = p;
        }
        return best;
    }

    function boxEdge(box, box2) {
        var m = new createjs.Matrix2D();
        rotate(m, box.rad);
        translate(m, box.p.x, box.p.y);
        var a = [0, 0, 1, 0, 1, 1, 0, 1, 0, 0];
        var p0;
        var c;
        var v;
        var depth
        for (var i = 0; i < a.length; i += 2) {
            var p = new createjs.Point((a[i] - 0.5) * box.s.x, (a[i + 1] - 0.5) * box.s.y);
            p = transformPoint(m, p);
            if (p0) {
                var n = normalize(normal(p.subtract(p0)), 1);
                var d = boxSupport(box2, n);
                var s = dot(n, d.subtract(p0));
                if (s < 0) return null;
                if (!v || s < depth) {
                    c = d;
                    v = n;
                    depth = s;
                }
            }
            p0 = p
        }
        return [v, depth, c];
    }
    var animation = [
        ["q", "leg", "kick", ],
        [0, 0, 0, -1, 0.7, 1, 0, -0.1, 0.9, 1, 0, 0, 1, 0, 0, -1, ],
        ["q", "leg", "stay", ],
        [0, 0, 0, 0, ],
        ["q", "body", "stay", ],
        [0, 0, 0, 0.0, 0.5, 0, 0, 0.05, 1, 0, 0, 0.0, ],
        [0, 0, -2, 0, 0.5, 0, 2, 0, 1, 0, -2, 0, ],
        ["q", "body", "hello", ],
        [0, 0, 0, 0, ],
        [0, 0, 0, 0, 0.5, 0, 10, 0, 1, 0, 0, 0, ],
        ["q", "body", "walk", ],
        [0, 0, 0, 0.2, 0.25, 0, 0, 0, 0.5, 0, 0, 0.2, 0.75, 0, 0, 0, 1, 0, 0, 0.2, ],
        ["q", "body", "run", ],
        [0.00, 0, 0, 0.3, 0.25, 0, 0, 0, 0.5, 0, 0, 0.3, 0.75, 0, 0, 0, 1.00, 0, 0, 0.3, ],
        ["q", "head", "run", ],
        [0.0, 0.1, 0, 0, ],
        ["q", "head", "punch", ],
        [0, 0, 0, 0, 0.25, 0.3, -0.3, -0.2, 0.5, 0, 0, 0, 0.75, 0.3, 0.3, -0.2, 1, 0, 0, 0, ],
        ["q", "body", "punch", ],
        [0, 0, 0, 0, 0.25, 0.5, 0, 0, 0.5, 0, 0, 0, 0.75, 0.5, 0, 0, 1, 0, 0, 0, ],
        [0, 0, 0, 0, 0.25, 0, -20, 0, 0.5, 0, 0, 0, 0.75, 0, 20, 0, 1, 0, 0, 0, ],
        ["q", "leg", "walk", ],
        [0, 0, 0, 0, 0.1, 0, 0, 0.4, 0.6, 0, 0, 0, 1, 0, 0, 0, ],
        [0, 1, 0, 0, ],
        ["q", "arm", "stay", ],
        [0, 0.2, 0.1, 0.2, ],
        [0, -1, 0, 0, ],
        ["q", "arm", "weapon", ],
        [0, 0.2, 0.2, 0.4, 1, 0.6, -0.4, 0.4, ],
        [0, 0, 1, -1, 1, -1, 1, -1, ],
        ["q", "arm", "weapon2", ],
        [0, 0.8, 0, 0.8, ],
        ["q", "arm", "up", ],
        [0, 1, 0, 1, ],
        ["q", "arm", "punch", ],
        [0, -0.5, 0.2, 0.6, 0.5, 0.99, 0.2, 1.2, 1, -0.5, 0.2, 0.6, ],
        [0.5, -1, 0, 0, ],
        ["q", "arm", "run", ],
        [0, -0.2, 0.2, 0.4, 0.5, 0.7, 0.1, 0.8, 1, -0.2, 0.2, 0.4, ],
        [0, -0.2, 0, -0.2, ],
        ["q", "arm", "walk", ],
        [0, -0.2, 0.05, 0.05, 0.5, 0.3, 0.05, 0.1, 1, -0.2, 0.05, 0.05, ],
        [0, -1, 0, 0, ],
        ["q", "leg", "run2", ],
        [0, 0, 0, 0.2, 0.1, 0, 0, 0.6, 0.2, 0, 0, 0.3, 0.5, 0, 0, 0.2, 0.6, 0, 0, 0, 0.9, 0, 0, 0, 1, 0, 0, 0.2, ],
        ["q", "leg", "run", ],
        [0, 0, 0, 0.9, 0.1, 0, 0, 0.8, 0.2, 0, 0, 0.7, 0.5, 0, 0, 0.4, 0.6, 0, 0, 0, 0.8, 0, 0, 0.4, 0.9, 0, 0, 0.5, 1, 0, 0, 0.9, ],
        ["q", "arm", "win", ],
        [0, 0.2, 0.2, 2, ],
        ["q", "arm", "rhand", ],
        [0, 0.9, 0, 0.8, ],
        ["q", "arm", "lhand", ],
        [0, 0.7, -0.4, 0.6, ],
        [0, 0, 1, -1, ],
        ["q", "body", "jump", ],
        [0, 0, 0, 0, ],
        ["q", "head", "jump", ],
        [0, 0, 0, 0, ],
        ["q", "arm", "jump", ],
        [0, 0.4, 0.3, 0.6, ],
        [0, -1, 0, 0, ],
        ["q", "leg", "jump", ],
        [0, 0.5, 0, 0.0, ],
        ["q", "body", "fail", ],
        [0, 0, 0, 0, 0.2, 0, 0, 0.3, 0.4, 0, 0, -1, 0.5, 0, 0, -1 + 0.3, 0.55, 0, 0, -1, 0.8, 0, 0, -1, 1, 0, 0, -1, ],
        ["q", "head", "fail", ],
        [0, 0, 0, 0, 0.2, -1, 0, -0.8, 0.3, -1, 0, -1.4, 0.8, -1, 0, -1.4, 1, -1, 0, 0, ],
        ["q", "arm", "fail", ],
        [0, 0, 0, 0, 0.2, 0, 0.5, 1, 0.4, 0, 1, 2, 0.8, 0, 1, 2, 1, -0.4, 0.2, 0.4, ],
        ["q", "leg", "fail", ],
        [0, 0, 0, 0, 0.2, 0, 0.5, 0, 0.4, 0, 0.5, 0, 0.8, 0, 0.5, 0, 1, 0.3, 0, 0.3, ],
        ["q", "head", "rest", ],
        [0.4, -1, 0, 0, ],
        ["q", "body", "rest", ],
        [0, 0, 0, -1, ],
        ["q", "arm", "rest", ],
        [0, -0.4, 0.2, 0.4, ],
        ["q", "body", "raise", ],
        [0, 0, 0, -0.2, ],
        ["q", "head", "raise", ],
        [0, 0.3, 0, -0.2, ],
        ["q", "arm", "raise", ],
        [0, 0.7, 0.1, 0.3, ],
        ["q", "leg", "rest", ],
        [0, 0.3, 0, 0.3, ],
        ["q", "arm", "hello", ],
        [0, 0.2, -0.2, 1.8, 0.5, 0.2, 0.6, 1.6, 1, 0.2, -0.2, 1.8, ],
        [0, 0, 1, 0, ],
        ["q", "arm", "aaa1", ],
        [0, 2, 0, 1, 0.2, -0.2, 0, 1.5, ],
        [0, 0, 0, -1, 0.2, 1, 0.2, 0, ],
        ["q", "body", "aaa1", ],
        [0, -0.2, 0, -0.2, ],
        ["q", "head", "aaa1", ],
        [0, 0.2, 0, -0.3, ],
        ["q", "head", "aaa2", ],
        [0, 0.2, 0, -0.3, ],
        ["q", "arm", "aaa2", ],
        [0, -0.2, 0.2, 1.9, 0.5, 0.3, 0.4, 1.9, 1, -0.2, 0.2, 1.9, ],
        [0, 0.2, 0.5, -0.3, ],
    ];

    function pos0Step(character) {
        if (!character.p0) {
            character.p0 = {
                p: new createjs.Point(character.p.x, character.p.y),
                v: new createjs.Point(character.v.x, character.v.y)
            };
        }
        var kv = 0.3;
        var kp = 0.1;
        var v = new createjs.Point(character.v.x, character.v.y).subtract(character.p0.v);
        character.p0.v.x += v.x * kv * 30 / fps;
        character.p0.v.y += v.y * kv * 30 / fps;
        character.p0.p.x += character.p0.v.x * sec;
        character.p0.p.y += character.p0.v.y * sec;
        v = new createjs.Point(character.p.x, character.p.y).subtract(character.p0.p);
        character.p0.p.x += v.x * kp * 30 / fps;
        character.p0.p.y += v.y * kp * 30 / fps;
    }

    function dfger(bot) {
        pos0Step(bot);
        animationMovement(bot);
        animationFly(bot);
        animationPanic(bot, bot.play[i]);
        if (bot.weapon && bot.weapon.type == "gun") {
            bot.animation.push([3, "weapon", 0, 1]);
            bot.animation.push([4, "weapon", 1, 1]);
        }
        animationWin(bot);
        for (var i = bot.play.length - 1; i >= 0; i--) {
            if (!bot.play[i].k) bot.play[i].k = 1;
            animationPunch(bot, bot.play[i]);
            animationFail(bot, bot.play[i]);
            animationRest(bot, bot.play[i]);
            animationRaise(bot, bot.play[i]);
            if (i) {
                bot.play[i].k -= 4 * sec;
                if (bot.play[i].k <= 0) bot.play = bot.play.slice(0, i).concat(bot.play.slice(i + 1));
            }
        }
    }

    function sdg3(character) {
        var s = character.skeleton;
        var w = [];
        for (i = 0; i < 6; i++) w.push(new createjs.Vector3D());
        var g = [];
        for (i = 0; i < 6; i++) g.push(new createjs.Vector3D(1, 0, 0));
        var nameIndex = ["leg", "leg", "body", "arm", "arm", "head"];
        var scaleIndex = [-s.h0, s.h0, s.h0, -s.h1, s.h1, s.body];
        for (i = 0; character.animation && i < character.animation.length; i++) {
            var j = character.animation[i][0];
            if (getAnimation(nameIndex[j], character.animation[i][1]).length == 0) continue;
            var v = getValueVector(getAnimation(nameIndex[j], character.animation[i][1])[0], character.animation[i][2]);
            v = vscale(v, Math.abs(scaleIndex[j]), scaleIndex[j], Math.abs(scaleIndex[j]));
            w[j] = interpolate(w[j], v, character.animation[i][3]);
            if (getAnimation(nameIndex[j], character.animation[i][1]).length < 2) continue;
            v = getValueVector(getAnimation(nameIndex[j], character.animation[i][1])[1], character.animation[i][2]);
            v = vscale(v, Math.abs(scaleIndex[j]), scaleIndex[j], Math.abs(scaleIndex[j]));
            g[j] = interpolate(g[j], v, character.animation[i][3]);
        }
        var t = !character.animtaiontFootTime && character.animtaiontFootTime != 0 ? 1 : character.animtaiontFootTime;
        var p = character.p0.p.subtract(vp(character.p));
        p.normalize(p.length * t);
        var m = new createjs.Matrix3D();
        m.appendRotation(Math.atan2(vp(w[5]).length, w[5].z + s.h1) / Math.PI * 180, pv(normal(normalize(vp(w[5]), 1))));
        m.invert();
        g[0] = m.transformVector(g[0]);
        g[1] = m.transformVector(g[1]);
        m = new createjs.Matrix3D();
        m.appendRotation(t * Math.atan2(p.length, 1) / Math.PI * 180, pv(normal(normalize(p, -1))), new createjs.Vector3D(0, 0, -1));
        m.appendTranslation(character.p.x, character.p.y, character.p.z);
        var gFoot = m.transformVector(new createjs.Vector3D(0, 0, 0.4));
        m = new createjs.Matrix3D();
        m.appendRotation(g[2].y, createjs.Vector3D.Z_AXIS);
        m.appendRotation(Math.atan2(vp(w[5]).length, w[5].z + s.h1) / Math.PI * 180, pv(normal(normalize(vp(w[5]), 1))));
        m.appendTranslation(w[2].x, w[2].y, w[2].z);
        m.appendRotation(character.rad / Math.PI * 180, createjs.Vector3D.Z_AXIS);
        m.appendRotation(t * Math.atan2(p.length, 1) / Math.PI * 180, pv(normal(normalize(p, -1))), new createjs.Vector3D(0, 0, -1));
        m.appendTranslation(character.p.x, character.p.y, character.p.z);
        var m0 = m.clone();
        m0.invert();
        sd32(character, 0, m, m0, gFoot);
        sd32(character, 1, m, m0, gFoot);
        if (!character.visible) return;
        var n = character.f[1].p.subtract(character.f[0].p);
        var rs = Math.PI * 0.4;
        rs = Math.max(0, Math.abs(Math.atan2(-n.x, n.y)) - (Math.PI - rs)) / rs;
        var la = m0.transformVector(new createjs.Vector3D(0, 0, 1.5));
        var d = [
            [new createjs.Vector3D(0, -s.w0 / 2, 0), interpolate(new createjs.Vector3D(0, -s.w0 / 2, -s.h0), character.f[0].p, t), character.f[0].rad * t, s.h0],
            [new createjs.Vector3D(0, s.w0 / 2, 0), interpolate(new createjs.Vector3D(0, s.w0 / 2, -s.h0), character.f[1].p, t), character.f[1].rad * t, s.h0],
            [new createjs.Vector3D(0, 0, s.body + s.head), new createjs.Vector3D(0, 0, 0), 0, s.body + s.head],
            [new createjs.Vector3D(0, -s.w1 / 2, s.body), new createjs.Vector3D(0, -s.w1 / 2, s.body - s.h1), 0, s.h1],
            [new createjs.Vector3D(0, s.w1 / 2, s.body), new createjs.Vector3D(0, s.w1 / 2, s.body - s.h1), 0, s.h1]
        ]
        for (i = 0; i < d.length; i++) {
            if (i == 2 || i == 5) continue;
            d[i][1] = d[i][1].add(w[i]);
            if (i == 2) d[i][2] += g[i].y / 180 * Math.PI;
        }
        m.appendTranslation(-character.p.x, -character.p.y, -character.p.z);
        if (character.weapon) character.weapon.matrix = m;
        if (!character.skinList) character.skinList = [];
        character.list = [];
        lastColor = character.type == "stickman" ? "#0" : "#0";
        for (var i = 0; i < d.length; i++) {
            var a = d[i][0];
            var b = d[i][1];
            b = truncate3(b.subtract(a), Math.abs(d[i][3])).add(a);
            n = new createjs.Vector3D(Math.cos(d[i][2]), Math.sin(d[i][2]), 0);
            if (i != 2) n = g[i];
            var index = Math.round((Math.asin(Math.sin(character.rad + d[i][2])) + Math.PI / 2) / Math.PI * 2);
            var length = Math.cos(character.rad + d[i][2]) > 0 ? 1 : -1;
            length *= d[i][3];
            if (i == 2) {
                var box = character.imageList[i][0];
                armUpdate(box, a, b, m);
                character.list.push(box);
            } else {
                length *= 0.5;
                var k = knee(a, b, n, d[i][3]);
                box = character.imageList[i][0];
                armUpdate(box, a, k, m);
                character.list.push(box);
                box = character.imageList[i][1];
                armUpdate(box, k, b, m);
                character.list.push(box);
            }
        }
    }
    var lastColor = "#0";

    function armUpdate(box, a, b, m) {
        var mm = new createjs.Matrix3D();
        mm = abMatrix(box.size, a, b);
        mm.append(m);
        box.matrix = mm;
        var w = mm.clone();
        w.append(axis);
        var lines = [];
        if (box.name == "b") {
            lines.push([0.5, 0.4, 0.17, 0.2], [0.5, 0.3, 0.6])
            lines.push([0.5, 0.6, 0.17, 0.2], [0.5, 0.7, 0.6])
            lines.push([0.5, 0.5, 0.9, 0.2], [])
        } else {
            lines.push([0.5, 0.5, 0, 0.17], [0.5, 0.5, 1]);
        }
        if (box.sprite.numChildren == 0) {
            box.sprite.addChild(new createjs.Shape());
        }
        var s = box.sprite.getChildAt(0);
        clear(s);
        for (var i = 0; i < lines.length; i++) {
            var p = new createjs.Vector3D(box.size[0].x * (1 - lines[i][0]) + box.size[1].x * lines[i][0], box.size[0].y * (1 - lines[i][1]) + box.size[1].y * lines[i][1], box.size[0].z * (1 - lines[i][2]) + box.size[1].z * lines[i][2]);
            p = w.transformVector(p);
            if (i % 2) s.graphics.lineTo(p.x, p.y);
            if (i % 2 == 0) var r = lines[i][3];
            beginFill(s, "0xcccccc");
            endFill(s);
            if (i % 2 == 0) {
                s.graphics.setStrokeStyle(r, "round").beginStroke(box.name == "body" ? "#0" : "#0");
                if (lines[i + 1].length == 0) {
                    s.graphics.drawCircle(p.x, p.y, r / 2);
                    i++;
                    continue;
                }
                s.graphics.moveTo(p.x, p.y);
            }
        }
    }

    function armUpdate2(box, a, b, m) {
        var mm = new createjs.Matrix3D();
        mm = abMatrix(box.size, a, b);
        mm.append(m);
        box.model.matrix = box.matrix = mm;
        if (!botAsSprite)
            modelDraw(box.model, null, box.sprite, null);
    }

    function skinInsert(skinList, imageList, a, b, length, rotateIndex) {
        for (var i = 0; i < imageList.length; i++) {
            var p = interpolate(a, b, (i + 1) / (imageList.length + 1));
            skinList.push({
                a: new createjs.Point(a.x, a.y - a.z),
                b: new createjs.Point(b.x, b.y - b.z),
                length: length,
                image: imageList[i][rotateIndex],
                z: p.dotProduct(new createjs.Vector3D(1, 1, 1))
            });
        }
    }

    function skinDraw(container, dataList) {
        for (var i = 0; i < dataList.length; i++) {
            var m = skin1(dataList[i].a, dataList[i].b, dataList[i].length, dataList[i].image.getChildAt(0));
            container.addChildAt(dataList[i].image, i);
            setTransformMatrix(dataList[i].image, m);
        }
        while (i < container.numChildren) container.removeChildAt(i);
    }

    function getValueVector(data, t) {
        return new createjs.Vector3D(getValue(data, t, 0, 3), getValue(data, t, 1, 3), getValue(data, t, 2, 3));
    }

    function getAnimation(name, state) {
        for (var i = 0; i < animation.length; i++) {
            if (animation[i][0] == "q" && animation[i][1] == name && animation[i][2] == state) break;
        }
        var r = [];
        for (var j = i + 1; j < animation.length; j++) {
            if (animation[j][0] == "q") return r;
            r.push(animation[j]);
        }
        return r;
    }

    function vscale(v, x, y, z) {
        return new createjs.Vector3D(v.x * x, v.y * y, v.z * z);
    }

    function sd32(body, index, m, m0, gFoot) {
        var f = body.f[index];
        f.t = (f.t + body.stepTime * sec) % 2;
        var fp = new createjs.Vector3D(f.x, f.y, f.z);
        var v = m0.transformVector(body.v.add(m.transformVector(new createjs.Vector3D())));
        v.scaleBy(1.5 - f.t);
        v.scaleBy(1 / body.stepTime);
        v = m.transformVector(v.add(fp).add(m0.transformVector(gFoot)));
        v.z = Math.min(Math.max(floorHeight(v) - (body.p.z), -1), -0.5) + body.p.z;
        v = m0.transformVector(v);
        v.z = Math.min(v.z, -0.5);
        if (f.t > 1) {
            if (f.lp) {
                f.gp = m.transformVector(f.lp);
                f.grad = body.rad;
                f.lp = null;
            }
            f.p = m0.transformVector(f.gp);
            f.rad = truncate1(angle1(body.rad, f.grad), 0.9);
        } else {
            f.p = m0.transformVector(f.gp);
            f.lp = v;
            f.p = interpolate(f.p, f.lp, f.t);
            f.rad = truncate1(angle1(body.rad, f.grad), 0.9) * (1 - Math.pow(f.t, 0.3));
        }
    }

    function interpolate(a, b, t) {
        return new createjs.Vector3D(a.x * (1 - t) + b.x * t, a.y * (1 - t) + b.y * t, a.z * (1 - t) + b.z * t)
    }

    function animationMovement(bot) {
        bot.animation = [];
        var a = ["stay", getValue([0, 1, 2, 1], vp(bot.v).length * 3.6, 0, 1), "walk", getValue([2, 0, 5, 1], vp(bot.v).length * 3.6, 0, 1), "run", getValue([10, 0, 17, 1], vp(bot.v).length * 3.6, 0, 1)];
        for (var i = 0; i < a.length; i += 2)
            for (var j = 0; j < 6; j++)
                bot.animation.push([j, a[i], bot.f[j % 2].t / 2, a[i + 1]]);
    }

    function animationPunch(bot, play) {
        if (!play || play.name != "punch" || play.t > 1) return;
        var k = getValue([0, 0, 0.2, 1, 0.5, 1, 0.8, 0], play.t, 0, 1);
        bot.animtaiontFootTime = 1;
        var t = play.t + (play.r ? 0.5 : 0);
        bot.animation.push([2, "punch", (t + 0.25) % 1, k]);
        bot.animation.push([bot.punchIndex ? 4 : 3, "punch", t % 1, k]);
        bot.animation.push([bot.punchIndex ? 3 : 4, "punch", (t + 0.5) % 1, k]);
        play.t += 2 * sec;
    }

    function animationFly(bot) {
        if (!bot.rHandValue) bot.rHandValue = 0;
        if (!bot.lHandValue) bot.lHandValue = 0;
        bot.animation.push([3, "rhand", 1, bot.rHandValue]);
        bot.animation.push([4, "lhand", 1, bot.lHandValue]);
    }

    function animationWin(bot) {
        bot.animation.push([3, "win", 1, voz(bot.animationWinValue)]);
        bot.animation.push([4, "win", 1, voz(bot.animationWinValue)]);
    }

    function animationRest(bot, play) {
        if (!play || play.name != "rest") return;
        var k = getValue([0, 0, 0.25, 1, 0.3, 1, 0.4, 0], play.t, 0, 1);
        bot.animtaiontFootTime = getValue([0.2, 0, 0.25, 1], play.t, 0, 1);
        k *= play.k;
        bot.animation.push([0, "rest", play.t, k]);
        bot.animation.push([1, "rest", play.t, k]);
        bot.animation.push([2, "rest", play.t, k]);
        bot.animation.push([3, "rest", play.t, k]);
        bot.animation.push([4, "rest", play.t, k]);
        bot.animation.push([5, "rest", play.t, k]);
        play.t += 1 * sec;
    }

    function animationRaise(bot, play) {
        if (!play || play.name != "raise") return;
        var k = getValue([0, 0, 0.1, 1, 0.15, 1, 0.25, 0], play.t, 0, 1);
        k *= play.k;
        bot.animation.push([0, "raise", play.t, k]);
        bot.animation.push([1, "raise", play.t, k]);
        bot.animation.push([2, "raise", play.t, k]);
        bot.animation.push([3, "raise", play.t, k]);
        bot.animation.push([4, "raise", play.t, k]);
        bot.animation.push([5, "raise", play.t, k]);
        play.t += 1 * sec;
    }

    function animationFail(bot, play) {
        if (!bot.fail || !play || play.name != "fail") return;
        play.t = getValue([0, 0, 0.5, 0.5, 1.5, 0.5, 2, 1], bot.fail.t, 0, 1);
        var k = getValue([0, 0, 0.2, 1, 0.8, 1, 1, 0], play.t, 0, 1);
        bot.animtaiontFootTime = 1 - k;
        bot.animation.push([0, "fail", play.t, k]);
        bot.animation.push([1, "fail", play.t, k]);
        bot.animation.push([2, "fail", play.t, k]);
        bot.animation.push([3, "fail", play.t, k]);
        bot.animation.push([4, "fail", play.t, k]);
        bot.animation.push([5, "fail", play.t, k]);
    }

    function animationPanic(bot, play) {
        if (!bot.panic) return;
        bot.panic.aaa1 += truncate1((bot.panic.type == "aaa1" ? 1 : 0) - bot.panic.aaa1, sec * 4);
        bot.panic.aaa2 += truncate1((bot.panic.type == "aaa2" ? 1 : 0) - bot.panic.aaa2, sec * 4);
        bot.animation.push([2, "aaa1", bot.panic.aaa1, bot.panic.aaa1]);
        bot.animation.push([3, "aaa1", bot.panic.aaa1, bot.panic.aaa1]);
        bot.animation.push([4, "aaa1", bot.panic.aaa1, bot.panic.aaa1]);
        bot.animation.push([5, "aaa1", bot.panic.aaa1, bot.panic.aaa1]);
        bot.animation.push([3, "aaa2", bot.f[1].t / 2, bot.panic.aaa2]);
        bot.animation.push([4, "aaa2", bot.f[0].t / 2, bot.panic.aaa2]);
        bot.animation.push([5, "aaa2", bot.f[1].t / 2, bot.panic.aaa2]);
    }

    function knee(a, b, n, length) {
        var k = length > 0 ? 1 : -1;
        var d = b.subtract(a);
        var s = k * Math.sqrt(Math.max(length * length - d.length * d.length, 0) / 4);
        n = d.crossProduct(n);
        n = n.crossProduct(d);
        n.normalize();
        n.scaleBy(s);
        return interpolate(a, b, 0.5).add(n);
    }

    function skin1(a, b, length, image) {
        return skin(a, b, new createjs.Point(image.width / 2, image.width / 2), new createjs.Point(image.width / 2, image.height - image.width / 2), length / (image.height - image.width), image.width / 2, image.width / 2);
    }

    function skin(a, b, a0, b0, s, offsetA, offsetB) {
        var d = b0.subtract(a0);
        d.normalize(1);
        a0 = a0.subtract(new createjs.Point(d.x * offsetA, d.y * offsetA));
        b0 = b0.add(new createjs.Point(d.x * offsetB, d.y * offsetB));
        d = b.subtract(a);
        d.normalize(1);
        offsetA *= Math.abs(s);
        offsetB *= Math.abs(s);
        a = a.subtract(new createjs.Point(d.x * offsetA, d.y * offsetA));
        b = b.add(new createjs.Point(d.x * offsetB, d.y * offsetB));
        var m = new createjs.Matrix2D(1, 0, 0, 1);
        scale(m, b0.subtract(a0).length, 1 / s);
        rotate(m, Math.atan2(b0.y - a0.y, b0.x - a0.x));
        translate(m, a0.x, a0.y);
        m.invert();
        scale(m, b.subtract(a).length, 1);
        rotate(m, Math.atan2(b.y - a.y, b.x - a.x));
        var k = 1 - a.subtract(b).length * Math.abs(s) / a0.subtract(b0).length;
        translate(m, a.x, a.y);
        return m;
    }
    var botAsSprite = false;

    function characterCreate(body) {
        body.stepTime = 3;
        body.skeleton = {
            body: 0.5,
            w0: 0.2,
            w1: 0.4,
            h0: 0.7,
            h1: 0.6,
            head: 0.27
        };
        body.f = [];
        body.f[0] = {
            t: 0,
            gp: new createjs.Vector3D(body.p.x, body.p.y, body.p.z - 1),
            lp: new createjs.Vector3D(0, 0, -1),
            p: new createjs.Vector3D(),
            grad: 0,
            rad: 0,
            x: 0,
            y: -body.skeleton.w0 / 2,
            z: 0
        };
        body.f[1] = {
            t: 1,
            gp: new createjs.Vector3D(body.p.x, body.p.y, body.p.z - 1),
            lp: new createjs.Vector3D(0, 0, -1),
            p: new createjs.Vector3D(),
            grad: 0,
            rad: 0,
            x: 0,
            y: body.skeleton.w0 / 2,
            z: 0
        };
        body.play = [];
        var n = "";
        body.imageList = [
            [n + "l", n + "f"],
            [n + "l", n + "f"],
            [n + "b"],
            [n + "a", n + "h"],
            [n + "a", n + "h"],
        ];
        for (var i = 0; i < body.imageList.length; i++)
            for (var j = 0; j < body.imageList[i].length; j++) {
                var name = body.imageList[i][j];
                var a = [-60, 0, 1, 0, 0, 1, 60, 0, 1, -60, 0, -1, 0, 0, -1, 60, 0, -1];
                if (name == n + "f") a.push(60, 90, 1, 60, 90, -1);
                if (name == "a" || name == "h") var model = modelBox(0.1, 0.1, body.skeleton.h1 / 2, 0xffffff);
                if (name == "l" || name == "f") model = modelBox(0.2, 0.2, body.skeleton.h0 / 2, 0xff0000);
                if (name == "b") model = modelBox(0.3, 0.3, body.skeleton.body, 0xff0000);
                if (!botAsSprite)
                    body.imageList[i][j] = boxCreate({}, model);
                body.imageList[i][j].name = name;
            }
        body.visible = false;
    }

    function abMatrix(size, a, b) {
        var w = new createjs.Matrix3D();
        w.appendTranslation(-size[0].x / 2 - size[1].x / 2, -size[0].y / 2 - size[1].y / 2, -size[1].z);
        var len = size[1].z - size[0].z;
        var d = b.subtract(a);
        w.appendScale(1, 1, d.length / len);
        var y = new createjs.Vector3D(0, 0, -1);
        var n = d.crossProduct(y);
        n.normalize();
        var x = n.crossProduct(y);
        if (n.length > 0.0001) w.appendRotation(Math.atan2(x.dotProduct(d), y.dotProduct(d)) / Math.PI * 180, n);
        w.appendTranslation(a.x, a.y, a.z);
        return w;
    }

    function enterFrame(e) {
        fps = Math.max(getFPS(), 15);
        progress();
        if (progressValue == 1 && preloadLoaded == false) {
            progressValue = 0;
            preloadLoaded = true;
            main.addChild(preload);
            loadBitmap("texture-0.png");
            loadBitmap("texture-1.png");
            loadBitmap("texture-2.png");
            loadBitmap("texture-3.png");
        }
        if (preloadLoaded && gameLoaded == false) {
            if (preload.numChildren == 0) {
                preload.addChild(new createjs.Container().addChild(createBitmap0("logo-ship.png")).parent);
                preload.addChild(new createjs.Container().addChild(preloadBar).parent);
                beginFill(preloadBar, "#ffffff");
                preloadBar.graphics.drawRect(0, 0, 10, 10);
                endFill(preloadBar);
            }
            var logo = preload.getChildAt(0);
            logo = logo.getChildAt(0)
            var m = new createjs.Matrix2D();
            var logoScale = Math.min(sceneSize().x / (logo.width + 60), 0.9 * sceneSize().y / (logo.height + 60));
            translate(m, -(logo.width + 30) / 2, -(logo.height + 30) / 2);
            scale(m, logoScale, logoScale);
            translate(m, sceneSize().x * 0.5, 0.9 * sceneSize().y * 0.5);
            setTransformMatrix(preload.getChildAt(0), m);
            m = new createjs.Matrix2D();
            var bar = preload.getChildAt(1);
            bar = bar.getChildAt(0);
            scale(m, 0.1 * progressValue * sceneSize().x, 0.1 * sceneSize().y * 0.1);
            translate(m, 0, 0.9 * sceneSize().y);
            setTransformMatrix(preload.getChildAt(1), m);
        }
        if (progressValue == 1 && preloadLoaded == true && gameLoaded == false) {
            main.removeChildAt(0);
            gameLoaded = true;
            gameInit();
        }
        if (gameLoaded) loop();
        setTransformMatrix(scene, scale(new createjs.Matrix2D(), 1 / aspect(), 1));
        bg.scaleX = sceneSize().x / 100;
        bg.scaleY = sceneSize().y / 100;
        stage.update();
    }
    init();
}