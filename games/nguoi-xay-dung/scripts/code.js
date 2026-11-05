let ysdk,
    player,
    level = getCookie("level");
function initSDK() {
    YaGames.init({
        adv: {
            onAdvClose: (t) => {
                console.info("adv closed!"), window.focus();
            },
        },
    }).then((t) => {
        (ysdk = t).adv.showFullscreenAdv(),
            ysdk.getPlayer().then((t) => {
                (player = t).getStats(["level"]).then((t) => {
                    console.log("data is get"), t.level && t.level > level && setCookie("level", (level = t.level));
                });
            });
    });
}
function getCookie(t) {
    let e = document.cookie.match(new RegExp("(?:^|; )" + t.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
    return e ? decodeURIComponent(e[1]) : 0;
}
function setCookie(t, e) {
    let s = { path: "/", secure: !0, "max-age": 2592e3 };
    s.expires instanceof Date && (s.expires = s.expires.toUTCString());
    let o = encodeURIComponent(t) + "=" + encodeURIComponent(e);
    for (let t in s) {
        o += "; " + t;
        let e = s[t];
        !0 !== e && (o += "=" + e);
    }
    document.cookie = o;
}
window.onload = function () {
    with ((paper.setup("canvas"), paper)) {
        let center = view.center.clone(),
            mouse = view.center.clone(),
            height = Math.min(view.size.height, view.size.width),
            width = Math.max(view.size.height, view.size.width),
            fps = 47,
            now,
            then = Date.now(),
            interval = 1e3 / fps,
            delta,
            dead = !0,
            sky = new Path.Rectangle(new Point(0, 0), view.size);
        sky.fillColor = { gradient: { stops: ["#0D47A1", "#1565C0"] }, origin: new Point(width / 2, height / 2), destination: new Point(width / 2, height) };
        let grads = [
                ["#2263ad", "#3a81ca", "#8ac7f9"],
                ["#29a0c2", "#ffffe5"],
                ["#6992d1", "#efe384"],
                ["#19469d", "#6e86ab", "#bec1c3", "#dbc6a2", "#efe384"],
                ["#d982d1", "#eb957f"],
                ["#3a4f6e", "#655e75", "#d3808a", "#f4aca0", "#f8f3c9"],
                ["#3384d5", "#87ccf6", "#a6e6ff", "#f3faff"],
            ],
            bases = [],
            cloud = [],
            pauseText = document.getElementById("pause-text"),
            gText = document.getElementById("start"),
            tText = document.getElementById("touch"),
            start = !1,
            g = height / 5225,
            dotRadius = height / 50,
            dots = [],
            sticks = [],
            minDist = 7 * dotRadius,
            maxDist = 12 * dotRadius,
            canDot = !0,
            mainColor = "black";
        class Dot {
            constructor(t, e, s) {
                (this.pos = new Point(t, e)),
                    (this.oldpos = new Point(t, e)),
                    (this.friction = 0.985),
                    (this.groundFriction = 0.05),
                    (this.gravity = new Point(0, g)),
                    (this.mass = s || 1),
                    (this.pinned = !1),
                    (this.radius = dotRadius),
                    (this.shape = new Path.Circle(this.pos, this.radius)),
                    this.shape.insertBelow(wall),
                    (this.shape.fillColor = mainColor);
            }
            update() {
                let t = this.pos.subtract(this.oldpos).add(this.gravity).multiply(this.friction);
                if (t.length > 1e-7)
                    for (let e = 0; e < bases.length; ++e)
                        this.pos.x + this.radius >= bases[e].bounds.topLeft.x &&
                            this.pos.x - this.radius <= bases[e].bounds.topRight.x &&
                            this.pos.y + this.radius >= bases[e].bounds.topRight.y &&
                            ((t.x *= this.groundFriction), (t.y *= this.groundFriction));
                (this.oldpos = this.pos.clone()), (this.pos = this.pos.add(t));
            }
            constrain() {
                if ((this.pos.x - this.radius < 0 && (this.pos.x = this.radius), this.pos.x + this.radius > width && (this.pos.x = width - this.radius), this.pos.y - this.radius > height)) gameOver();
                else {
                    for (let t = 0; t < bases.length; ++t)
                        if (this.pos.x + this.radius >= bases[t].bounds.topLeft.x && this.pos.x - this.radius <= bases[t].bounds.topRight.x)
                            if (this.pos.y + this.radius >= bases[t].bounds.topRight.y)
                                this.pos.x > bases[t].position.x
                                    ? Math.abs(this.pos.y - bases[t].bounds.topRight.y + this.radius) < Math.abs(this.pos.x - bases[t].bounds.topRight.x - this.radius)
                                        ? (this.pos.y = bases[t].bounds.topRight.y - this.radius)
                                        : (this.pos.x = bases[t].bounds.topRight.x + this.radius)
                                    : Math.abs(this.pos.y - bases[t].bounds.topRight.y + this.radius) < Math.abs(this.pos.x - bases[t].bounds.topLeft.x + this.radius)
                                    ? (this.pos.y = bases[t].bounds.topRight.y - this.radius)
                                    : (this.pos.x = bases[t].bounds.topLeft.x - this.radius);
                            else if (t == bases.length - 1 && dots.length > 1) {
                                if (0 != level) return void gameOver(!0);
                                if (dots.length > 2) return void gameOver(!0);
                            }
                    this.render();
                }
            }
            render() {
                this.shape.position = this.pos;
            }
        }
        function isAllowed(t) {
            if (t.x - dotRadius < 0 || t.x + dotRadius > width) return !1;
            for (let e = 0; e < bases.length; ++e) if (t.x + dotRadius >= bases[e].bounds.topLeft.x && t.x - dotRadius <= bases[e].bounds.topRight.x && t.y + dotRadius >= bases[e].bounds.topRight.y) return !1;
            return !0;
        }
        class Stick {
            constructor(t, e, s, o) {
                (this.startDot = t),
                    (this.endDot = e),
                    (this.stiffness = void 0 === s ? 2 : s),
                    (this.length = void 0 === o ? this.startDot.pos.subtract(this.endDot.pos).length : o),
                    (this.shape = new Path.Line(this.startDot.pos, this.endDot.pos)),
                    (this.shape.strokeWidth = Math.max(Math.round(dotRadius / 2), 1)),
                    this.shape.insertBelow(wall),
                    (this.shape.strokeColor = mainColor);
            }
            update() {
                let t = this.endDot.pos.x - this.startDot.pos.x,
                    e = this.endDot.pos.y - this.startDot.pos.y,
                    s = Math.sqrt(t * t + e * e),
                    o = ((this.length - s) / s) * this.stiffness,
                    i = t * o * 0.5,
                    n = e * o * 0.5,
                    a = this.startDot.mass + this.endDot.mass,
                    h = this.startDot.mass / a;
                (a = this.endDot.mass / a), this.startDot.pinned || ((this.startDot.pos.x -= i * a), (this.startDot.pos.y -= n * a)), this.endDot.pinned || ((this.endDot.pos.x += i * h), (this.endDot.pos.y += n * h)), this.render();
            }
            render() {
                this.shape.remove(), (this.shape = new Path.Line(this.startDot.pos, this.endDot.pos)), (this.shape.strokeWidth = Math.max(Math.round(dotRadius / 2), 1)), this.shape.insertBelow(wall), (this.shape.strokeColor = mainColor);
            }
        }
        const ITERATIONS = 3;
        class Cloud {
            constructor(t, e) {
                (this.position = new Point(t, e)),
                    (this.rand = Math.random()),
                    (this.shape = new Raster(this.position, new Size(270, 100))),
                    this.shape.scale(((0.3 + 0.7 * this.rand) * height) / 1e3),
                    this.shape.setImageData(cloud[Math.round(Math.random())]),
                    (this.shape.opacity = 0.2 + 0.8 * this.rand),
                    this.shape.insertAbove(sky);
            }
            update() {
                this.position.x -= 0.3 * this.rand;
                let t = this.position;
                for (; t.x > width + this.shape.bounds.width / 2; ) t.x -= width + this.shape.bounds.width;
                for (; t.x < -this.shape.bounds.width / 2; ) t.x += width + this.shape.bounds.width;
                this.shape.position = t;
            }
        }
        let loadings = 0;
        function loading() {
            3 === loadings
                ? (wall.tween({ opacity: 1 }, { opacity: 0.5 }, 1e3), (gText.innerHTML = 0 === level ? "HƯỚNG DẪN" : "CẤP ĐỘ " + level), (tText.innerHTML = "NHẤN ĐỂ BẮT ĐẦU"), restartGame(), (start = !0))
                : (gText.innerHTML = "ĐANG TẢI " + Math.round((100 * loadings) / 3) + "%");
        }
        let mouseDot = new Path.Circle(center, dotRadius);
        mouseDot.fillColor = mainColor;
        let tutor0 = new Path(),
            tutor1 = new Path();
        function tutor0Onload(t) {
            (tutor0 = t.clone()), t.remove(), (tutor0.visible = !1), tutor0.insertBelow(mouseDot), ++loadings, loading();
        }
        function tutor1Onload(t) {
            (tutor1 = t.clone()), t.remove(), (tutor1.visible = !1), tutor1.insertBelow(mouseDot), ++loadings, loading();
        }
        project.importSVG("images/tutor0.svg", tutor0Onload), project.importSVG("images/tutor1.svg", tutor1Onload);
        let wall = new Path.Rectangle(new Point(0, 0), view.size);
        wall.fillColor = "black";
        let cloudsRaster = new Raster("images/clouds.png");
        cloudsRaster.visible = !1;
        let clouds = [];
        (cloudsRaster.onLoad = function () {
            ++loadings;
            for (let t = 0; t < 2; ++t) cloud.push(cloudsRaster.getImageData(new Rectangle(new Point(270 * t, 0), new Size(270, 100))));
            loading();
        }),
            getData(),
            (pauseText.onclick = function (t) {
                start && dead && ((wall.visible = !1), (pauseText.style.display = "none"), (wall.opacity = 1), (dead = !1));
            }),
            (view.onMouseMove = function (t) {
                dead || ((mouse = t.point.clone()), (mouseDot.position = mouse));
            }),
            (view.onMouseUp = function (t) {
                if (((mouse = t.point), !dead && isAllowed(t.point) && canDot)) {
                    let e;
                    for (let s of dots) s.pos.subtract(t.point).length >= minDist && s.pos.subtract(t.point).length <= maxDist && (canDot && ((e = new Dot(t.point.x, t.point.y)), (canDot = !1), dots.push(e)), sticks.push(new Stick(s, e)));
                    setTimeout(() => {
                        canDot = !0;
                    }, 500);
                }
            }),
            (view.onResize = function (t) {
                (sky.bounds = view.bounds), (wall.bounds = view.bounds), (center = view.center.clone());
                for (let t = 0; t < bases.length; ++t) {
                    let e = bases[t].position.x,
                        s = bases[t].position.y;
                    (bases[t].bounds.width = (view.size.width * bases[t].bounds.width) / width),
                        (bases[t].bounds.height = (view.size.height * bases[t].bounds.height) / height),
                        (bases[t].position.x = (view.size.width * e) / width),
                        (bases[t].position.y = (view.size.height * s) / height);
                }
                for (let t = 0; t < dots.length; ++t) {
                    let e = dots[t].pos.x,
                        s = dots[t].pos.y;
                    (dots[t].pos.x = (view.size.width * e) / width),
                        (dots[t].pos.y = (view.size.height * s) / height),
                        (e = dots[t].oldpos.x),
                        (s = dots[t].oldpos.y),
                        (dots[t].oldpos.x = (view.size.width * e) / width),
                        (dots[t].oldpos.y = (view.size.height * s) / height);
                }
                for (let t = 0; t < sticks.length; ++t) sticks[t].length = sticks[t].startDot.pos.subtract(sticks[t].endDot.pos).length;
                (height = view.size.height), (width = view.size.width), (minDist = 7 * (dotRadius = height / 50)), (maxDist = 12 * dotRadius);
                for (let t = 0; t < dots.length; ++t) (dots[t].radius = dotRadius), (dots[t].shape.bounds.width = 2 * dotRadius), (dots[t].shape.bounds.height = 2 * dotRadius);
                (mouseDot.bounds.width = 2 * dotRadius),
                    (mouseDot.bounds.height = 2 * dotRadius),
                    (tutor0.bounds.height = height),
                    (tutor0.bounds.width = height),
                    (tutor0.position = center),
                    (tutor1.bounds.height = height),
                    (tutor1.bounds.width = height),
                    (tutor1.position = center);
            });
        let paths = [];
        function gameOver(t) {
            (dead = !0), ysdk && ysdk.adv.showFullscreenAdv({ callbacks: { onClose: function (t) {}, onError: function (t) {} } });
            for (let t of clouds) t.shape.remove();
            for (let t of dots) t.shape.remove();
            for (let t of sticks) t.shape.remove();
            for (let t of paths) t.remove();
            for (let t of bases) t.remove();
            (wall.visible = !0),
                (pauseText.style.display = "flex"),
                !0 === t ? (++level, (gText.innerHTML = "CẤP ĐỘ " + level), (tText.innerHTML = "NHẤN ĐỂ BẮT ĐẦU"), setData()) : ((gText.innerHTML = "KẾT THÚC"), (tText.innerHTML = "NHẤN ĐỂ CHƠI LẠI")),
                restartGame(),
                wall.tween({ opacity: 1 }, { opacity: 0.5 }, 1e3);
        }
        function restartGame() {
            (sky.fillColor.gradient.stops = grads[level % grads.length]), (mouse = center), (mouseDot.position = center), (mouseDot.fillColor = mainColor), (clouds = []);
            for (let t = 0; t < 5; ++t) clouds.push(new Cloud(Math.random() * width, 50 + (Math.random() * height) / 3));
            0 === level
                ? ((tutor0.bounds.height = height), (tutor0.bounds.width = height), (tutor0.position = center), (tutor0.visible = !0))
                : 1 === level
                ? ((tutor0.visible = !1), (tutor1.bounds.height = height), (tutor1.bounds.width = height), (tutor1.position = center), (tutor1.visible = !0))
                : ((tutor0.visible = !1), (tutor1.visible = !1)),
                (paths = []),
                (dots = []),
                (sticks = []),
                (bases = []),
                createMap(),
                dots.push(new Dot(bases[0].bounds.topCenter.x, bases[0].bounds.topCenter.y - 100));
        }
        view.onFrame = function (t) {
            if (((now = Date.now()), (delta = now - then) > interval)) {
                if (!dead) {
                    for (let t = 0; t < clouds.length; ++t) clouds[t].update();
                    for (let t = 0; t < ITERATIONS; ++t) {
                        for (let t of dots) {
                            if (!1 === t.update()) return !1;
                            t.constrain();
                        }
                        for (let t of sticks) t.update();
                    }
                    for (let t of paths) t.remove();
                    if (((paths = []), isAllowed(mouse))) {
                        mouseDot.fillColor = mainColor;
                        for (let t of dots)
                            if (t.pos.subtract(mouse).length >= minDist && t.pos.subtract(mouse).length <= maxDist) {
                                let e = new Path.Line(mouse, t.pos);
                                (e.strokeColor = mainColor), (e.strokeWidth = Math.max(Math.round(dotRadius / 2), 1)), paths.push(e);
                            }
                    } else mouseDot.fillColor = "red";
                }
                then = now - (delta % interval);
            }
        };
        let maps = [
            [[1, 0.3]],
            [
                [0.5, 0.1],
                [0.5, 0.6],
            ],
            [
                [0.4, 0.3],
                [0.2, 0],
                [0.4, 0.3],
            ],
            [
                [0.4, 0.2],
                [0.2, 0],
                [0.4, 0.5],
            ],
            [
                [0.35, 0.2],
                [0.3, 0],
                [0.35, 0.7],
            ],
            [
                [0.3, 0.2],
                [0.4, 0],
                [0.3, 0.5],
            ],
            [
                [0.2, 0.2],
                [0.15, 0],
                [0.2, 0.2],
                [0.15, 0],
                [0.3, 0.6],
            ],
            [
                [0.4, 0.7],
                [0.2, 0],
                [0.4, 0.1],
            ],
            [
                [0.3, 0.6],
                [0.4, 0],
                [0.3, 0.1],
            ],
            [
                [0.2, 0.6],
                [0.15, 0],
                [0.2, 0.2],
                [0.15, 0],
                [0.3, 0.1],
            ],
            [
                [0.2, 0.5],
                [0.2, 0],
                [0.2, 0.5],
                [0.2, 0],
                [0.2, 0.5],
            ],
            [
                [0.2, 0.3],
                [0.1, 0],
                [0.1, 0.3],
                [0.1, 0],
                [0.1, 0.3],
                [0.2, 0],
                [0.2, 0.3],
            ],
            [
                [0.2, 0.3],
                [0.2, 0],
                [0.1, 0.4],
                [0.1, 0],
                [0.1, 0.4],
                [0.2, 0],
                [0.1, 0.3],
            ],
            [
                [0.2, 0.2],
                [0.3, 0],
                [0.1, 0.6],
                [0.3, 0],
                [0.1, 0.2],
            ],
            [
                [0.2, 0.2],
                [0.3, 0],
                [0.1, 0.6],
                [0.3, 0],
                [0.1, 0.8],
            ],
            [
                [0.2, 0.2],
                [0.2, 0],
                [0.1, 0.7],
                [0.4, 0],
                [0.1, 0.8],
            ],
            [
                [0.2, 0.1],
                [0.2, 0],
                [0.1, 0.8],
                [0.4, 0],
                [0.1, 0.8],
            ],
            [
                [0.2, 0.1],
                [0.3, 0],
                [0.1, 0.1],
                [0.3, 0],
                [0.1, 0.8],
            ],
            [
                [0.2, 0.5],
                [0.3, 0],
                [0.1, 0.1],
                [0.3, 0],
                [0.1, 0.8],
            ],
            [
                [0.2, 0.6],
                [0.2, 0],
                [0.1, 0.1],
                [0.4, 0],
                [0.1, 0.8],
            ],
            [
                [0.15, 0.5],
                [0.25, 0],
                [0.05, 0.3],
                [0.2, 0],
                [0.05, 0.3],
                [0.25, 0],
                [0.05, 0.5],
            ],
            [
                [0.15, 0.7],
                [0.2, 0],
                [0.05, 0.2],
                [0.3, 0],
                [0.05, 0.2],
                [0.2, 0],
                [0.05, 0.7],
            ],
            [
                [0.15, 0.7],
                [0.35, 0],
                [0.05, 0.2],
                [0.4, 0],
                [0.05, 0.7],
            ],
            [
                [0.15, 0.2],
                [0.3, 0],
                [0.05, 0.5],
                [0.45, 0],
                [0.05, 0.8],
            ],
            [
                [0.2, 0.3],
                [0.3, 0],
                [0.1, 0.3],
                [0.3, 0],
                [0.1, 0.3],
            ],
            [
                [0.15, 0.5],
                [0.3, 0],
                [0.05, 0.5],
                [0.45, 0],
                [0.05, 0.8],
            ],
            [
                [0.15, 0.6],
                [0.25, 0],
                [0.05, 0.1],
                [0.5, 0],
                [0.05, 0.6],
            ],
            [
                [0.15, 0.5],
                [0.35, 0],
                [0.05, 0.1],
                [0.4, 0],
                [0.05, 0.5],
            ],
        ];
        function createMap() {
            let t = maps[level % maps.length],
                e = 0;
            for (let s = 0; s < t.length; ++s) {
                if (0 !== t[s][1]) {
                    let o = new Path.Rectangle(new Point(e * width, height - t[s][1] * height), new Size(t[s][0] * width, t[s][1] * height));
                    (o.fillColor = "#6D4C41"), o.insertBelow(mouseDot), bases.push(o);
                }
                e += t[s][0];
            }
        }
        function getData() {
            (level = Math.max(level, getCookie("level"))),
                player &&
                    player.getStats(["level"]).then((t) => {
                        console.log("data is get"), t.level && t.level > level && setCookie("level", (level = t.level));
                    });
        }
        function setData() {
            player &&
                player.getStats(["level"]).then((t) => {
                    console.log("data is get to set"),
                        t.level && t.level > level && setCookie("level", (level = t.level)),
                        player.setStats({ level: level }).then(() => {
                            console.log("data is set");
                        });
                }),
                setCookie("level", level);
        }
    }
};
