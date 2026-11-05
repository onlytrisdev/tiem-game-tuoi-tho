!(function (e) {
    var t = {};
    function s(a) {
        if (t[a]) return t[a].exports;
        var n = (t[a] = { i: a, l: !1, exports: {} });
        return e[a].call(n.exports, n, n.exports, s), (n.l = !0), n.exports;
    }
    (s.m = e),
        (s.c = t),
        (s.d = function (e, t, a) {
            s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
        }),
        (s.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (s.t = function (e, t) {
            if ((1 & t && (e = s(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var a = Object.create(null);
            if ((s.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var n in e)
                    s.d(
                        a,
                        n,
                        function (t) {
                            return e[t];
                        }.bind(null, n)
                    );
            return a;
        }),
        (s.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return s.d(t, "a", t), t;
        }),
        (s.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (s.p = ""),
        s((s.s = 0));
})([
    function (e, t, s) {
        !(function (e) {
            var t = {};
            function s(a) {
                if (t[a]) return t[a].exports;
                var n = (t[a] = { i: a, l: !1, exports: {} });
                return e[a].call(n.exports, n, n.exports, s), (n.l = !0), n.exports;
            }
            (s.m = e),
                (s.c = t),
                (s.d = function (e, t, a) {
                    s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
                }),
                (s.r = function (e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
                }),
                (s.t = function (e, t) {
                    if ((1 & t && (e = s(e)), 8 & t)) return e;
                    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                    var a = Object.create(null);
                    if ((s.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                        for (var n in e)
                            s.d(
                                a,
                                n,
                                function (t) {
                                    return e[t];
                                }.bind(null, n)
                            );
                    return a;
                }),
                (s.n = function (e) {
                    var t =
                        e && e.__esModule
                            ? function () {
                                  return e.default;
                              }
                            : function () {
                                  return e;
                              };
                    return s.d(t, "a", t), t;
                }),
                (s.o = function (e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t);
                }),
                (s.p = ""),
                s((s.s = 3));
        })([
            function (e, t, s) {
                s(2),
                    (e.exports = (function () {
                        function e(e) {
                            PIXI.Sprite.call(this, e),
                                (this.contentOffset = 10),
                                (this.interactive = !0),
                                (this.buttonMode = !0),
                                (this.isOver = !1),
                                (this.inDown = !1),
                                (this.pushable = !1),
                                (this.pushed = !1),
                                (this.textureUp = e),
                                this.on("pointerdown", this.onDown).on("pointerup", this.onUp).on("pointerupoutside", this.onUp);
                        }
                        return (
                            (e.prototype = Object.create(PIXI.Sprite.prototype)),
                            (e.prototype.onUp = function () {
                                this.pushed || ((this.isdown = !1), this.setEnable(this.interactive), this.content && ((this.content.y = 0), this.content.scale.set(1))), this.emit("up");
                            }),
                            (e.prototype.onDown = function () {
                                (this.isdown = !0), this.textureDown && (this.texture = this.textureDown), this.content && ((this.content.y = this.contentOffset), this.content.scale.set(0.9)), AudioManager.play("click");
                            }),
                            (e.prototype.push = function () {
                                (this.pushed = !0), (this.isdown = !0), this.textureDown && (this.texture = this.textureDown);
                            }),
                            (e.prototype.release = function () {
                                (this.pushed = !1), this.onUp();
                            }),
                            (e.prototype.registerState = function (e, t) {
                                switch (e) {
                                    case "up":
                                        this.textureUp = t;
                                        break;
                                    case "down":
                                        this.textureDown = t;
                                        break;
                                    case "hover":
                                        this.textureOver = t;
                                        break;
                                    case "disabled":
                                        this.textureDisabled = t;
                                }
                            }),
                            (e.prototype.updateState = function () {
                                !this.interactive && this.textureDisabled
                                    ? (this.texture = this.textureDisabled)
                                    : this.isdown && this.textureDown
                                    ? (this.texture = this.textureDown)
                                    : this.textureOver
                                    ? (this.texture = this.textureOver)
                                    : (this.texture = this.textureUp);
                            }),
                            (e.prototype.setEnable = function (e) {
                                e ? (this.pushed || (this.texture = this.textureUp), (this.interactive = !0)) : (this.pushed || (this.texture = this.textureDisabled || this.textureUp), (this.interactive = !1));
                            }),
                            e
                        );
                    })());
            },
            function (e, t) {
                e.exports = (function () {
                    let e = [],
                        t = [],
                        s = 0;
                    function a(e, t) {
                        return e.zOrder > t.zOrder ? 1 : e.zOrder < t.zOrder ? -1 : e.arrivalOrder > t.arrivalOrder ? 1 : e.arrivalOrder < t.arrivalOrder ? -1 : 0;
                    }
                    function n() {
                        PIXI.Container.call(this),
                            (this.addChildZ = function (e, t) {
                                (e.zOrder = t || 0), (e.oldZOrder = 1e100), (e.arrivalOrder = ++s), this.addChild(e);
                            }),
                            (this.sortChildren = function () {
                                const s = this.children;
                                let n = s.length;
                                for (let a = 0; a < n; a++) {
                                    const n = s[a];
                                    n.zOrder !== n.oldZOrder ? e.push(n) : t.push(n), (n.oldZOrder = n.zOrder);
                                }
                                if (0 === e.length) return void (t.length = 0);
                                e.length > 1 && e.sort(a);
                                let r = 0,
                                    i = 0,
                                    o = 0;
                                for (; i < e.length && o < t.length; ) a(e[i], t[o]) < 0 ? (s[r++] = e[i++]) : (s[r++] = t[o++]);
                                for (; i < e.length; ) s[r++] = e[i++];
                                for (; o < t.length; ) s[r++] = t[o++];
                                (e.length = 0), (t.length = 0);
                            });
                    }
                    return (n.prototype = Object.create(PIXI.Container.prototype)), n;
                })();
            },
            function (e, t) {
                var s, a;
                window.AudioManager =
                    ((s = {}),
                    (a = {}),
                    {
                        play: function (e) {
                            s[e] && s[e].play();
                        },
                        stop: function (e) {
                            s[e] && s[e].stop();
                        },
                        restartLoop: function (e) {
                            s[e] && s[e].isPlaying && s[e].seek(0);
                        },
                        playLoop: function (e) {
                            s[e] && !s[e].isPlaying && ((s[e].isPlaying = !0), s[e].play());
                        },
                        pauseLoop: function (e) {
                            s[e] && s[e].isPlaying && ((s[e].isPlaying = !1), s[e].pause());
                        },
                        stopLoop: function (e) {
                            s[e] && s[e].isPlaying && ((s[e].isPlaying = !1), s[e].stop());
                        },
                        register: function (e, t, n) {
                            (s[e] = t), n && (a[n] || (a[n] = []), a[n].push(e));
                        },
                        mute: function (e) {
                            s[e] && s[e].mute(!0);
                        },
                        unmute: function (e) {
                            s[e] && s[e].mute(!1);
                        },
                        muteGroup: function (e) {
                            if (a[e]) for (let t = 0; t < a[e].length; t++) s[a[e][t]].mute(!0);
                        },
                        unmuteGroup: function (e) {
                            if (a[e]) for (let t = 0; t < a[e].length; t++) s[a[e][t]].mute(!1);
                        },
                        get: function (e) {
                            if (s[e]) return s[e];
                        },
                    });
            },
            function (e, t, s) {
                const a = s(1),
                    n = s(4),
                    r = s(5),
                    i = s(6),
                    o = s(7),
                    l = s(0),
                    _ = s(8),
                    c = s(9),
                    h = s(10),
                    u = s(11),
                    d = s(12),
                    { prototype: p } = s(1),
                    g = s(15),
                    b = s(16),
                    f = s(17),
                    m = s(18),
                    y = s(19),
                    x = (s(20), s(21)),
                    I = s(22),
                    w = s(23),
                    v = s(24),
                    P = s(25),
                    k = s(29),
                    C = s(30);
                s(27), s(28), s(2);
                var T = (function () {
                    var e = 0,
                        t = 0,
                        s = {
                            init: function () {},
                            test: function (e) {
                                Pt();
                            },
                            create: function () {
                                S.init(),
                                    (function () {
                                        (p = new PIXI.Application(640, 1137, { roundPixels: !1, resolution: 1, sharedTicker: !0, sharedLoader: !0, antialias: !1, transparent: !0 })),
                                            (this.app = p),
                                            (p.view.style.position = "absolute"),
                                            document.getElementById("gm4html5_div_id").appendChild(p.view),
                                            (function () {
                                                var s = p.view,
                                                    a = window.innerWidth / 640,
                                                    n = window.innerHeight / 1137,
                                                    r = 0,
                                                    i = 0,
                                                    o = 0;
                                                let l = 0,
                                                    _ = 0;
                                                a < n ? ((r = 640 * a), (i = 1137 * a), (l = 0), (_ = (window.innerHeight - i) / a), (o = a)) : ((r = 640 * n), (i = 1137 * n), (l = (window.innerWidth - r) / n), (_ = 0), (o = n));
                                                (l = Math.max(Math.min(l, 214), 0)),
                                                    (_ = Math.max(_, 0)),
                                                    p.renderer.resize(640 + l, 1137 + _),
                                                    (s.style.width = r + l * o + "px"),
                                                    (s.style.height = i + _ * o + "px"),
                                                    l && ((s.style.marginLeft = (window.innerWidth - (r + l * o)) / 2 + "px"), (e = l));
                                                t = _;
                                            })(),
                                            (M = new u(640 + e, 1137 + t)),
                                            p.stage.addChild(M),
                                            PIXI.Loader.shared.add("config", "config.json"),
                                            PIXI.Loader.shared.load(Ye);
                                    })();
                            },
                            mute: function () {},
                            unmute: function () {},
                            freeze: function () {
                                Je();
                            },
                            unfreeze: function () {
                                $e();
                            },
                            pause: function () {
                                Je();
                            },
                            resume: function () {
                                $e();
                            },
                            restart: function () {},
                            getApp: function () {
                                return p;
                            },
                            isDesktop: function () {
                                var e = navigator.userAgent;
                                return !/Mobi|Android|iP[ao]d|iPhone/i.test(e) && (!/Mac/.test(e) || !navigator.maxTouchPoints || navigator.maxTouchPoints <= 1);
                            },
                        };
                    var p,
                        k,
                        T,
                        S = {
                            score: 0,
                            gameData: { defeatCount: 0 },
                            defaultState: { sfx: 1, music: 1, coins: 0, upgrades: [0, 0, 0, 0, 0, 0, 0, 0, 0], tutorial: !0, pickupTutorial: !0, starroTutorial: !0, upgradeTutorial: !0 },
                            saveData: { sfx: 1, music: 1, highscore: 0, coins: 0, upgrades: [0, 0, 0, 0, 0, 0, 0, 0, 0], tutorial: !0, pickupTutorial: !0, starroTutorial: !0, upgradeTutorial: !0 },
                            play: function () {
                                $e();
                            },
                            pause: function () {
                                Je();
                            },
                            init: function () {
                                S.getSaveData();
                            },
                            sendScore: function (e) {
                                S.score = e;
                            },
                            setHighScore: function (e) {
                                (S.saveData.highscore = e), this.setSaveData();
                            },
                            setSaveData: function () {
                                try {
                                    window.localStorage.setItem(
                                        "cn_alien_attack",
                                        JSON.stringify({
                                            sfx: S.saveData.sfx,
                                            music: S.saveData.music,
                                            coins: S.saveData.coins,
                                            highscore: S.saveData.highscore,
                                            upgrades: S.saveData.upgrades,
                                            tutorial: S.saveData.tutorial,
                                            pickupTutorial: S.saveData.pickupTutorial,
                                            starroTutorial: S.saveData.starroTutorial,
                                            upgradeTutorial: S.saveData.upgradeTutorial,
                                        })
                                    );
                                } catch (e) {
                                    console.log(e);
                                }
                            },
                            getSaveData: function (e) {
                                e && e();
                                try {
                                    var t = window.localStorage.getItem("cn_alien_attack");
                                    for (var s in localStorage) localStorage[s].length && 2 * localStorage[s].length;
                                    var a = JSON.parse(t);
                                    for (var n in a) S.saveData[n] = a[n];
                                } catch (e) {
                                    console.log(e);
                                }
                            },
                        };
                    window.sprites = {};
                    var X,
                        M,
                        A,
                        O,
                        E,
                        F,
                        z,
                        W,
                        B,
                        j,
                        H,
                        L,
                        D,
                        R,
                        U,
                        N,
                        G,
                        Z,
                        Y,
                        Q,
                        K,
                        q,
                        V,
                        J,
                        $,
                        ee,
                        te = !1,
                        se = !1,
                        ae = 0,
                        ne = !0,
                        re = !0,
                        ie = !0,
                        oe = 0,
                        le = !1,
                        _e = !1,
                        ce = !1,
                        he = !1,
                        ue = !1,
                        de = 0,
                        pe = !1,
                        ge = !1,
                        be = !1,
                        fe = 0,
                        me = 0,
                        ye = 0,
                        xe = 0,
                        Ie = 0,
                        we = 0,
                        ve = 3,
                        Pe = 3,
                        ke = !1,
                        Ce = 1,
                        Te = !0,
                        Se = !0,
                        Xe = 0,
                        Me = 0,
                        Ae = 0,
                        Oe = 0,
                        Ee = 0,
                        Fe = 0,
                        ze = 0,
                        We = 0,
                        Be = 1,
                        je = 0,
                        He = 0,
                        Le = 0,
                        De = 0,
                        Re = 0,
                        Ue = [!1, !1, !1, !1, !1, !1, !1, !1, !1];
                    const Ne = [50, 200, 400, 500, 600, 700, 800, 800, 800, 800, 800, 800],
                        Ge = [
                            { id: 0, name: "starfire", type: 0, figure: !1 },
                            { id: 1, name: "batgirl", type: 0, figure: !1 },
                            { id: 2, name: "raven", type: 0, figure: !1 },
                            { id: 3, name: "bubmlebee", type: 1, figure: !1 },
                            { id: 4, name: "wonderwoman ", type: 1, figure: !1 },
                            { id: 5, name: "supergirl", type: 1, figure: !1 },
                            { id: 6, name: "beastboy", type: 2, figure: !1 },
                            { id: 7, name: "greenlantern", type: 2, figure: !1 },
                            { id: 8, name: "robin", type: 2, figure: !1 },
                        ];
                    var Ze;
                    function Ye() {
                        (k = PIXI.Loader.shared.resources.config.data),
                            (C.language = k.language),
                            (C.fontFamily = "ar" != k.language ? "fredburger_cy" : "fredburger_ar"),
                            new FontFaceObserver(C.fontFamily).load().then(() => {
                                !(function () {
                                    for (var e in (PIXI.Loader.shared.add("locale", "assets/locale.json"),
                                    (resources = {
                                        bitmaps: {
                                            batgirl_flying_blur: "assets/charactes_flying/batgirl_flying_blur.png",
                                            beastboy_flying_blur: "assets/charactes_flying/beastboy_flying_blur.png",
                                            greenlantern_flying_blur: "assets/charactes_flying/greenlantern_flying_blur.png",
                                            raven_flying_blur: "assets/charactes_flying/raven_flying_blur.png",
                                            robin_flying_blur: "assets/charactes_flying/robin_flying_blur.png",
                                            starfire_flying_blur: "assets/charactes_flying/starfire_flying_blur.png",
                                            supergirl_flying_blur: "assets/charactes_flying/supergirl_flying_blur.png",
                                            wonderwoman_flying_blur: "assets/charactes_flying/wonderwoman_flying_blur.png",
                                            zatanna_flying_blur: "assets/charactes_flying/zatanna_flying_blur.png",
                                            starro_font: "assets/font/starro_font.fnt",
                                            beastboy: "assets/lobby/beastboy.png",
                                            bubblebee: "assets/lobby/bubblebee.png",
                                            button_play: "assets/lobby/button_play.png",
                                            button_play_pressed: "assets/lobby/button_play_pressed.png",
                                            button_settings: "assets/lobby/button_settings.png",
                                            button_settings_pressed: "assets/lobby/button_settings_pressed.png",
                                            button_shop: "assets/lobby/button_shop.png",
                                            button_shop_pressed: "assets/lobby/button_shop_pressed.png",
                                            cyborg: "assets/lobby/cyborg.png",
                                            cyborg_cropped: "assets/lobby/cyborg_cropped.png",
                                            dark_overlay: "assets/lobby/dark_overlay.png",
                                            dark_overlay: "assets/lobby/dark_overlay.png",
                                            lobby_background_no_characters: "assets/lobby/lobby_background_no-characters.png",
                                            starfire: "assets/lobby/starfire.png",
                                            wonderwoman: "assets/lobby/wonderwoman.png",
                                            button_close: "assets/settings/button_close.png",
                                            button_close_pressed: "assets/settings/button_close_pressed.png",
                                            button_home: "assets/settings/button_home.png",
                                            button_home_pressed: "assets/settings/button_home_pressed.png",
                                            button_music_off: "assets/settings/button_music_off.png",
                                            button_music_on: "assets/settings/button_music_on.png",
                                            button_sound_off: "assets/settings/button_sound_off.png",
                                            button_sound_on: "assets/settings/button_sound_on.png",
                                            button_tutorial: "assets/settings/button_tutorial.png",
                                            cyborg: "assets/settings/cyborg.png",
                                            foot_fire: "assets/settings/foot_fire.png",
                                            title_pause: "assets/settings/title_pause.png",
                                            title_settings: "assets/settings/title_settings.png",
                                            arrow: "assets/result/arrow.png",
                                            background_slice_01: "assets/result/background_slice_01.png",
                                            background_slice_02: "assets/result/background_slice_02.png",
                                            background_slice_03: "assets/result/background_slice_03.png",
                                            button_play: "assets/result/button_play.png",
                                            button_play_pressed: "assets/result/button_play_pressed.png",
                                            button_settings: "assets/result/button_settings.png",
                                            button_settings_pressed: "assets/result/button_settings_pressed.png",
                                            button_shop: "assets/result/button_shop.png",
                                            button_shop_pressed: "assets/result/button_shop_pressed.png",
                                            foreground_center: "assets/result/foreground_center.png",
                                            foreground_slice_01: "assets/result/foreground_slice_01.png",
                                            foreground_slice_02: "assets/result/foreground_slice_02.png",
                                            ground_center: "assets/result/ground_center.png",
                                            ground_slice: "assets/result/ground_slice.png",
                                            heroes_group_01: "assets/result/heroes_group_01.png",
                                            heroes_group_02: "assets/result/heroes_group_02.png",
                                            heroes_group_03: "assets/result/heroes_group_03.png",
                                            results_character_cyborg: "assets/result/results_character_cyborg.png",
                                            results_character_cyborg_shadow: "assets/result/results_character_cyborg_shadow.png",
                                            results_character_robin: "assets/result/results_character_robin.png",
                                            results_character_robin_shadow: "assets/result/results_character_robin_shadow.png",
                                            results_character_wonder: "assets/result/results_character_wonder.png",
                                            results_character_wonder_shadow: "assets/result/results_character_wonder_shadow.png",
                                            results_screen_bg_01: "assets/result/results_screen_bg_01.png",
                                            results_screen_bg_02: "assets/result/results_screen_bg_02.png",
                                            results_screen_bg_03: "assets/result/results_screen_bg_03.png",
                                            score_base: "assets/result/score_base.png",
                                            spark_01: "assets/result/spark_01.png",
                                            spark_02: "assets/result/spark_02.png",
                                            results_character_cyborg_01: "assets/result/results_character_cyborg_01.png",
                                            results_character_cyborg_02: "assets/result/results_character_cyborg_02.png",
                                            results_character_wonder_01: "assets/result/results_character_wonder_01.png",
                                            results_character_wonder_02: "assets/result/results_character_wonder_02.png",
                                            background_lose: "assets/result/background_lose.png",
                                            background_win: "assets/result/background_win.png",
                                            button_arrow: "assets/tutorial/button_arrow.png",
                                            button_arrow_pressed: "assets/tutorial/button_arrow_pressed.png",
                                            button_close: "assets/tutorial/button_close.png",
                                            button_close_pressed: "assets/tutorial/button_close_pressed.png",
                                            tut_01: "assets/tutorial/tut_01.png",
                                            tut_02_a: "assets/tutorial/tut_02_a.png",
                                            tut_02_b: "assets/tutorial/tut_02_b.png",
                                            tut_02_c: "assets/tutorial/tut_02_c.png",
                                            tut_03: "assets/tutorial/tut_03.png",
                                            tut_04: "assets/tutorial/tut_04.png",
                                            tut_05: "assets/tutorial/tut_05.png",
                                            tut_hand: "assets/tutorial/tut_hand.png",
                                            tut_text_07_all_hor: "assets/tutorial/tut_text_07_all_hor.png",
                                            tut_text_07_all_ver: "assets/tutorial/tut_text_07_all_ver.png",
                                            tut_text_08_all_hor: "assets/tutorial/tut_text_08_all_hor.png",
                                            tut_text_08_all_ver: "assets/tutorial/tut_text_08_all_ver.png",
                                            tut_text_09_all_hor: "assets/tutorial/tut_text_09_all_hor.png",
                                            tut_text_09_all_ver: "assets/tutorial/tut_text_09_all_ver.png",
                                            tut_text_10_all_hor: "assets/tutorial/tut_text_10_all_hor.png",
                                            tut_text_10_all_ver: "assets/tutorial/tut_text_10_all_ver.png",
                                            tut_text_11_all_hor: "assets/tutorial/tut_text_11_all_hor.png",
                                            tut_text_11_all_ver: "assets/tutorial/tut_text_11_all_ver.png",
                                            background_city_night: "assets/gameplay/background.png",
                                            enemy_at_background_01: "assets/gameplay/enemy_at_background_01.png",
                                            enemy_at_background_02: "assets/gameplay/enemy_at_background_02.png",
                                            enemy_background_01: "assets/gameplay/enemy_background_01.png",
                                            enemy_background_02: "assets/gameplay/enemy_background_02.png",
                                            window_big: "assets/gameplay/window_big.png",
                                            window_small: "assets/gameplay/window_small.png",
                                            coin_gameplay: "assets/gameplay/coin_gameplay.png",
                                            coins_pile: "assets/gameplay/coins_pile.png",
                                            heart_gameplay: "assets/gameplay/heart_gameplay.png",
                                            bullet_batgirl: "assets/gameplay/bullet_batgirl.png",
                                            bullet_batgirl_boosted: "assets/gameplay/bullet_batgirl_boosted.png",
                                            bullet_batgirl_off: "assets/gameplay/bullet_batgirl_off.png",
                                            bullet_beastboy: "assets/gameplay/bullet_beastboy.png",
                                            bullet_beastboy_boosted: "assets/gameplay/bullet_beastboy_boosted.png",
                                            bullet_beastboy_off: "assets/gameplay/bullet_beastboy_off.png",
                                            bullet_greenlantern: "assets/gameplay/bullet_greenlantern.png",
                                            bullet_greenlintern_boosted: "assets/gameplay/bullet_greenlintern_boosted.png",
                                            bullet_greenlantern_off: "assets/gameplay/bullet_greenlantern_off.png",
                                            heart_off: "assets/gameplay/heart_off.png",
                                            heart_on: "assets/gameplay/heart_on.png",
                                            button_pause: "assets/gameplay/button_pause.png",
                                            button_pause_pressed: "assets/gameplay/button_pause_pressed.png",
                                            bullet_raven: "assets/gameplay/bullet_raven.png",
                                            bullet_raven_boosted: "assets/gameplay/bullet_raven_boosted.png",
                                            bullet_raven_off: "assets/gameplay/bullet_raven_off.png",
                                            bullet_robin: "assets/gameplay/bullet_robin.png",
                                            bullet_robin_boosted: "assets/gameplay/bullet_robin_boosted.png",
                                            bullet_robin_off: "assets/gameplay/bullet_robin_off.png",
                                            bullet_starfire: "assets/gameplay/bullet_starfire.png",
                                            bullet_starfire_boosted: "assets/gameplay/bullet_starfire_boosted.png",
                                            bullet_starfire_off: "assets/gameplay/bullet_starfire_off.png",
                                            bullet_supergirl: "assets/gameplay/bullet_supergirl.png",
                                            bullet_supergirl_boosted: "assets/gameplay/bullet_supergirl_boosted.png",
                                            bullet_supergirl_off: "assets/gameplay/bullet_supergirl_off.png",
                                            bullet_wonderwoman: "assets/gameplay/bullet_wonderwoman.png",
                                            bullet_wonderwoman_boosted: "assets/gameplay/bullet_wonderwoman_boosted.png",
                                            bullet_wonderwoman_off: "assets/gameplay/bullet_wonderwoman_off.png",
                                            bullet_zatana: "assets/gameplay/bullet_zatana.png",
                                            bullet_zatana_boosted: "assets/gameplay/bullet_zatana_boosted.png",
                                            bullet_zatana_off: "assets/gameplay/bullet_zatana_off.png",
                                            bullet_bublebee: "assets/gameplay/bullet_bublebee.png",
                                            bullet_bublebee_boosted: "assets/gameplay/bullet_bublebee_boosted.png",
                                            bullet_bumblebee_off: "assets/gameplay/bullet_bumblebee_off.png",
                                            cn_button: "assets/gameplay/cn_button.png",
                                            enemy_circle: "assets/gameplay/enemy_circle.png",
                                            enemy_circle_buttons: "assets/gameplay/enemy_circle_buttons.png",
                                            enemy_face_01: "assets/gameplay/enemy_face_01.png",
                                            enemy_face_02: "assets/gameplay/enemy_face_02.png",
                                            enemy_face_03: "assets/gameplay/enemy_face_03.png",
                                            enemy_face_04: "assets/gameplay/enemy_face_04.png",
                                            enemy_spike: "assets/gameplay/enemy_spike.png",
                                            enemy_weak_button: "assets/gameplay/enemy_weak_button.png",
                                            shots_counter_slice: "assets/gameplay/shots_counter_slice.png",
                                            shots_counter_top: "assets/gameplay/shots_counter_top.png",
                                            stage_base: "assets/gameplay/stage_base.png",
                                            weak_point_achieved: "assets/gameplay/weak_point_achieved.png",
                                            shots_counter_side: "assets/gameplay/shots_counter_side.png",
                                            shots_counter_slice_loop_03: "assets/gameplay/shots_counter_slice_loop_03.png",
                                            weak_point_blue_achieved: "assets/gameplay/weak_point_blue_achieved.png",
                                            weak_point_blue_off: "assets/gameplay/weak_point_blue_off.png",
                                            weak_point_blue_on: "assets/gameplay/weak_point_blue_on.png",
                                            weak_point_green_achieved: "assets/gameplay/weak_point_green_achieved.png",
                                            weak_point_green_off: "assets/gameplay/weak_point_green_off.png",
                                            weak_point_green_on: "assets/gameplay/weak_point_green_on.png",
                                            weak_point_not_achieved: "assets/gameplay/weak_point_not_achieved.png",
                                            weak_point_off: "assets/gameplay/weak_point_off.png",
                                            weak_point_on: "assets/gameplay/weak_point_on.png",
                                            weak_point_pink_achieved: "assets/gameplay/weak_point_pink_achieved.png",
                                            weak_point_pink_off: "assets/gameplay/weak_point_pink_off.png",
                                            weak_point_pink_on: "assets/gameplay/weak_point_pink_on.png",
                                            weak_points_bar_slice: "assets/gameplay/weak_points_bar_slice.png",
                                            weak_points_bar_top: "assets/gameplay/weak_points_bar_top.png",
                                            weak_points_counter_base: "assets/gameplay/weak_points_counter_base.png",
                                            gameplay_starro_background: "assets/boss/gameplay_starro_background.png",
                                            gameplay_starro_background_slice: "assets/boss/gameplay_starro_background_slice.png",
                                            gameplay_starro_background_wider: "assets/boss/gameplay_starro_background_wider.png",
                                            gameplay_starro_ground: "assets/boss/gameplay_starro_ground.png",
                                            gameplay_starro_ground_slice: "assets/boss/gameplay_starro_ground_slice.png",
                                            starro_body: "assets/boss/starro_body.png",
                                            starro_eye_background: "assets/boss/starro_eye_background.png",
                                            starro_eye_base: "assets/boss/starro_eye_base.png",
                                            starro_iris: "assets/boss/starro_iris.png",
                                            starro_shadow: "assets/boss/starro_shadow.png",
                                            starro_weak_point_01: "assets/boss/starro_weak_point_01.png",
                                            starro_weak_point_02: "assets/boss/starro_weak_point_02.png",
                                            starro_weak_point_03: "assets/boss/starro_weak_point_03.png",
                                            starro_weak_point_01_on: "assets/boss/starro_weak_point_01_on.png",
                                            starro_weak_point_blue: "assets/boss/starro_weak_point_blue.png",
                                            starro_weak_point_green: "assets/boss/starro_weak_point_green.png",
                                            starro_weak_point_pink: "assets/boss/starro_weak_point_pink.png",
                                            purple_damaged_blink: "assets/boss/purple_damaged_blink.png",
                                            purple_starro_body: "assets/boss/purple_starro_body.png",
                                            purple_starro_eye_base: "assets/boss/purple_starro_eye_base.png",
                                            purple_starro_eye_dizzy: "assets/boss/purple_starro_eye_dizzy.png",
                                            red_damaged_blink: "assets/boss/red_damaged_blink.png",
                                            red_starro_body: "assets/boss/red_starro_body.png",
                                            red_starro_eye_base: "assets/boss/red_starro_eye_base.png",
                                            red_starro_eye_dizzy: "assets/boss/red_starro_eye_dizzy.png",
                                            starro_eye_dizzy: "assets/boss/starro_eye_dizzy.png",
                                            starro_iris_00: "assets/boss/starro_iris_00.png",
                                            starro_iris_01: "assets/boss/starro_iris_01.png",
                                            starro_iris_02: "assets/boss/starro_iris_02.png",
                                            starro_iris_03: "assets/boss/starro_iris_03.png",
                                            starro_iris_04: "assets/boss/starro_iris_04.png",
                                            starro_iris_05: "assets/boss/starro_iris_05.png",
                                            starro_iris_06: "assets/boss/starro_iris_06.png",
                                            Shooting_fx: "assets/spine/Shooting_fx.json",
                                            cyborg_spine: "assets/spine/cyborg.json",
                                            beast_boy_cannon: "assets/spine/beast-boy_cannon.json",
                                            beast_boy_fighting: "assets/spine/beast-boy_fighting.json",
                                            beast_boy_flying: "assets/spine/beast-boy_flying.json",
                                            enemy_circle_blue: "assets/Enemies/enemy_circle_blue.png",
                                            enemy_circle_blue_buttons: "assets/Enemies/enemy_circle_blue_buttons.png",
                                            enemy_circle_green: "assets/Enemies/enemy_circle_green.png",
                                            enemy_circle_green_buttons: "assets/Enemies/enemy_circle_green_buttons.png",
                                            enemy_circle_orange: "assets/Enemies/enemy_circle_orange.png",
                                            enemy_circle_orange_buttons: "assets/Enemies/enemy_circle_orange_buttons.png",
                                            enemy_circle_pruple_buttons: "assets/Enemies/enemy_circle_pruple_buttons.png",
                                            enemy_circle_purple: "assets/Enemies/enemy_circle_purple.png",
                                            enemy_face_01_blue: "assets/Enemies/enemy_face_01_blue.png",
                                            enemy_face_01_green: "assets/Enemies/enemy_face_01_green.png",
                                            enemy_face_01_orange: "assets/Enemies/enemy_face_01_orange.png",
                                            enemy_face_01_purple: "assets/Enemies/enemy_face_01_purple.png",
                                            enemy_face_02_blue: "assets/Enemies/enemy_face_02_blue.png",
                                            enemy_face_02_green: "assets/Enemies/enemy_face_02_green.png",
                                            enemy_face_02_orange: "assets/Enemies/enemy_face_02_orange.png",
                                            enemy_face_02_purple: "assets/Enemies/enemy_face_02_purple.png",
                                            enemy_face_03_blue: "assets/Enemies/enemy_face_03_blue.png",
                                            enemy_face_03_green: "assets/Enemies/enemy_face_03_green.png",
                                            enemy_face_03_orange: "assets/Enemies/enemy_face_03_orange.png",
                                            enemy_face_03_purple: "assets/Enemies/enemy_face_03_purple.png",
                                            enemy_face_04_blue: "assets/Enemies/enemy_face_04_blue.png",
                                            enemy_face_04_green: "assets/Enemies/enemy_face_04_green.png",
                                            enemy_face_04_orange: "assets/Enemies/enemy_face_04_orange.png",
                                            enemy_face_04_purple: "assets/Enemies/enemy_face_04_purple.png",
                                            enemy_spike_blue: "assets/Enemies/enemy_spike_blue.png",
                                            enemy_spike_green: "assets/Enemies/enemy_spike_green.png",
                                            enemy_spike_orange: "assets/Enemies/enemy_spike_orange.png",
                                            enemy_spike_purple: "assets/Enemies/enemy_spike_purple.png",
                                            enemy_weak_button: "assets/Enemies/enemy_weak_button.png",
                                            weak_point_A_off: "assets/Enemies/weak_point_A_off.png",
                                            weak_point_A_on: "assets/Enemies/weak_point_A_on.png",
                                            weak_point_B_off: "assets/Enemies/weak_point_B_off.png",
                                            weak_point_B_on: "assets/Enemies/weak_point_B_on.png",
                                            weak_point_C_off: "assets/Enemies/weak_point_C_off.png",
                                            weak_point_C_on: "assets/Enemies/weak_point_C_on.png",
                                            black_enemy_dead: "assets/enemy/black_enemy_dead.png",
                                            coin_awarded: "assets/enemy/coin_awarded.png",
                                            coins_formation_preview: "assets/enemy/coins_formation_preview.png",
                                            enemy_back_piece_01: "assets/enemy/enemy_back_piece_01.png",
                                            enemy_back_piece_02: "assets/enemy/enemy_back_piece_02.png",
                                            enemy_back_piece_03: "assets/enemy/enemy_back_piece_03.png",
                                            enemy_back_piece_04: "assets/enemy/enemy_back_piece_04.png",
                                            enemy_back_piece_05: "assets/enemy/enemy_back_piece_05.png",
                                            enemy_back_piece_06: "assets/enemy/enemy_back_piece_06.png",
                                            enemy_front_piece_01: "assets/enemy/enemy_front_piece_01.png",
                                            enemy_front_piece_02: "assets/enemy/enemy_front_piece_02.png",
                                            enemy_front_piece_03: "assets/enemy/enemy_front_piece_03.png",
                                            enemy_front_piece_04: "assets/enemy/enemy_front_piece_04.png",
                                            enemy_front_piece_05: "assets/enemy/enemy_front_piece_05.png",
                                            enemy_front_piece_06: "assets/enemy/enemy_front_piece_06.png",
                                            enemy_front_piece_07: "assets/enemy/enemy_front_piece_07.png",
                                            enemy_front_piece_08: "assets/enemy/enemy_front_piece_08.png",
                                            enemy_front_piece_09: "assets/enemy/enemy_front_piece_09.png",
                                            enemy_front_piece_10: "assets/enemy/enemy_front_piece_10.png",
                                            enemy_front_piece_11: "assets/enemy/enemy_front_piece_11.png",
                                            enemy_blink_01: "assets/enemy/enemy_blink_01.png",
                                            enemy_blink_02: "assets/enemy/enemy_blink_02.png",
                                            enemy_blink_03: "assets/enemy/enemy_blink_03.png",
                                            enemy_blink_04: "assets/enemy/enemy_blink_04.png",
                                            enemy_blink_05: "assets/enemy/enemy_blink_05.png",
                                            enemy_circle: "assets/enemy/enemy_circle.png",
                                            enemy_circle_buttons: "assets/enemy/enemy_circle_buttons.png",
                                            enemy_face_00: "assets/enemy/enemy_face_00.png",
                                            enemy_spike: "assets/enemy/enemy_spike.png",
                                            purple_damaged_enemy_face: "assets/enemy/purple_damaged_enemy_face.png",
                                            purple_dead_enemy_face: "assets/enemy/purple_dead_enemy_face.png",
                                            purple_enemy_circle: "assets/enemy/purple_enemy_circle.png",
                                            purple_enemy_spike: "assets/enemy/purple_enemy_spike.png",
                                            red_damaged_enemy_face: "assets/enemy/red_damaged_enemy_face.png",
                                            red_dead_enemy_face: "assets/enemy/red_dead_enemy_face.png",
                                            red_enemy_circle: "assets/enemy/red_enemy_circle.png",
                                            red_enemy_spike: "assets/enemy/red_enemy_spike.png",
                                            obstacle_long: "assets/enemy/obstacle_long.png",
                                            obstacle_short: "assets/enemy/obstacle_short.png",
                                            weak_point_blue_off: "assets/Enemies/weak_point_blue_off.png",
                                            weak_point_blue_on: "assets/Enemies/weak_point_blue_on.png",
                                            weak_point_green_off: "assets/Enemies/weak_point_green_off.png",
                                            weak_point_green_on: "assets/Enemies/weak_point_green_on.png",
                                            weak_point_pink_off: "assets/Enemies/weak_point_pink_off.png",
                                            weak_point_pink_om: "assets/Enemies/weak_point_pink_om.png",
                                            base_coin_counter: "assets/upgrade_screen/base_coin_counter.png",
                                            base_coin_extreme: "assets/upgrade_screen/base_coin_extreme.png",
                                            button_arrow: "assets/upgrade_screen/button_arrow.png",
                                            button_arrow_pressed: "assets/upgrade_screen/button_arrow_pressed.png",
                                            button_play: "assets/upgrade_screen/button_play.png",
                                            button_play_pressed: "assets/upgrade_screen/button_play_pressed.png",
                                            button_starro: "assets/upgrade_screen/button_starro.png",
                                            button_starro_pressed: "assets/upgrade_screen/button_starro_pressed.png",
                                            button_starro_inactive: "assets/upgrade_screen/button_starro_inactive.png",
                                            button_upgrade: "assets/upgrade_screen/button_upgrade.png",
                                            button_upgrade_off: "assets/upgrade_screen/button_upgrade_off.png",
                                            button_upgrade_pressed: "assets/upgrade_screen/button_upgrade_pressed.png",
                                            door_closed: "assets/upgrade_screen/door_closed.png",
                                            door_opened: "assets/upgrade_screen/door_opened.png",
                                            glow_blue: "assets/upgrade_screen/glow_blue.png",
                                            glow_green: "assets/upgrade_screen/glow_green.png",
                                            glow_pink: "assets/upgrade_screen/glow_pink.png",
                                            glow_white: "assets/upgrade_screen/glow_white.png",
                                            ground_center: "assets/upgrade_screen/ground_center.png",
                                            ground_slice: "assets/upgrade_screen/ground_slice.png",
                                            character_bumblebee: "assets/upgrade_screen/character_bublebee.png",
                                            character_bumblebee_boosted: "assets/upgrade_screen/character_bublebee_boosted.png",
                                            character_bumblebee_boosted_selected: "assets/upgrade_screen/character_bublebee_boosted_selected.png",
                                            character_bumblebee_selected: "assets/upgrade_screen/character_bublebee_selected.png",
                                            character_batgirl: "assets/upgrade_screen/character_batgirl.png",
                                            character_batgirl_boosted: "assets/upgrade_screen/character_batgirl_boosted.png",
                                            character_batgirl_boosted_selected: "assets/upgrade_screen/character_batgirl_boosted_selected.png",
                                            character_batgirl_selected: "assets/upgrade_screen/character_batgirl_selected.png",
                                            character_beastboy: "assets/upgrade_screen/character_beastboy.png",
                                            character_beastboy_boosted: "assets/upgrade_screen/character_beastboy_boosted.png",
                                            character_beastboy_boosted_selected: "assets/upgrade_screen/character_beastboy_boosted_selected.png",
                                            character_beastboy_selected: "assets/upgrade_screen/character_beastboy_selected.png",
                                            character_greenlintern: "assets/upgrade_screen/character_greenlintern.png",
                                            character_greenlintern_boosted: "assets/upgrade_screen/character_greenlintern_boosted.png",
                                            character_greenlintern_boosted_selected: "assets/upgrade_screen/character_greenlintern_boosted_selected.png",
                                            character_greenlintern_selected: "assets/upgrade_screen/character_greenlintern_selected.png",
                                            character_raven: "assets/upgrade_screen/character_raven.png",
                                            character_raven_boosted: "assets/upgrade_screen/character_raven_boosted.png",
                                            character_raven_boosted_selected: "assets/upgrade_screen/character_raven_boosted_selected.png",
                                            character_raven_selected: "assets/upgrade_screen/character_raven_selected.png",
                                            character_robin: "assets/upgrade_screen/character_robin.png",
                                            character_robin_boosted: "assets/upgrade_screen/character_robin_boosted.png",
                                            character_robin_boosted_selected: "assets/upgrade_screen/character_robin_boosted_selected.png",
                                            character_robin_selected: "assets/upgrade_screen/character_robin_selected.png",
                                            character_starfire: "assets/upgrade_screen/character_starfire.png",
                                            character_starfire_boosted: "assets/upgrade_screen/character_starfire_boosted.png",
                                            character_starfire_boosted_selected: "assets/upgrade_screen/character_starfire_boosted_selected.png",
                                            character_starfire_selected: "assets/upgrade_screen/character_starfire_selected.png",
                                            character_supergirl: "assets/upgrade_screen/character_supergirl.png",
                                            character_supergirl_boosted: "assets/upgrade_screen/character_supergirl_boosted.png",
                                            character_supergirl_boosted_selected: "assets/upgrade_screen/character_supergirl_boosted_selected.png",
                                            character_supergirl_selected: "assets/upgrade_screen/character_supergirl_selected.png",
                                            character_wonderwoman: "assets/upgrade_screen/character_wonderwoman.png",
                                            character_wonderwoman_boosted: "assets/upgrade_screen/character_wonderwoman_boosted.png",
                                            character_wonderwoman_boosted_selected: "assets/upgrade_screen/character_wonderwoman_boosted_selected.png",
                                            character_wonderwoman_selected: "assets/upgrade_screen/character_wonderwoman_selected.png",
                                            character_zatana: "assets/upgrade_screen/character_zatana.png",
                                            character_zatana_boosted: "assets/upgrade_screen/character_zatana_boosted.png",
                                            character_zatana_boosted_selected: "assets/upgrade_screen/character_zatana_boosted_selected.png",
                                            character_zatana_selected: "assets/upgrade_screen/character_zatana_selected.png",
                                            characters_base: "assets/upgrade_screen/characters_base.png",
                                            characters_base_blue: "assets/upgrade_screen/characters_base_blue.png",
                                            characters_base_green: "assets/upgrade_screen/characters_base_green.png",
                                            characters_base_pink: "assets/upgrade_screen/characters_base_pink.png",
                                            icon_coin_counter: "assets/upgrade_screen/icon_coin_counter.png",
                                            icon_coin_price: "assets/upgrade_screen/icon_coin_price.png",
                                            roof_center: "assets/upgrade_screen/roof_center.png",
                                            roof_lights_slice: "assets/upgrade_screen/roof_lights_slice.png",
                                            roof_slice_01: "assets/upgrade_screen/roof_slice_01.png",
                                            roof_slice_02: "assets/upgrade_screen/roof_slice_02.png",
                                            starrogate_01_boosted: "assets/upgrade_screen/starrogate_01_boosted.png",
                                            starrogate_01_white: "assets/upgrade_screen/starrogate_01_white.png",
                                            starrogate_02_boosted: "assets/upgrade_screen/starrogate_02_boosted.png",
                                            starrogate_02_white: "assets/upgrade_screen/starrogate_02_white.png",
                                            starrogate_03_boosted: "assets/upgrade_screen/starrogate_03_boosted.png",
                                            starrogate_03_white: "assets/upgrade_screen/starrogate_03_white.png",
                                            starrogate_04_boosted: "assets/upgrade_screen/starrogate_04_boosted.png",
                                            starrogate_04_white: "assets/upgrade_screen/starrogate_04_white.png",
                                            starrogate_05_boosted: "assets/upgrade_screen/starrogate_05_boosted.png",
                                            starrogate_05_white: "assets/upgrade_screen/starrogate_05_white.png",
                                            starrogate_06_boosted: "assets/upgrade_screen/starrogate_06_boosted.png",
                                            starrogate_06_white: "assets/upgrade_screen/starrogate_06_white.png",
                                            starrogate_07_boosted: "assets/upgrade_screen/starrogate_07_boosted.png",
                                            starrogate_07_white: "assets/upgrade_screen/starrogate_07_white.png",
                                            starrogate_08_boosted: "assets/upgrade_screen/starrogate_08_boosted.png",
                                            starrogate_08_white: "assets/upgrade_screen/starrogate_08_white.png",
                                            starrogate_09_boosted: "assets/upgrade_screen/starrogate_09_boosted.png",
                                            starrogate_09_white: "assets/upgrade_screen/starrogate_09_white.png",
                                            starrogate_base: "assets/upgrade_screen/starrogate_base.png",
                                            wall_center: "assets/upgrade_screen/wall_center.png",
                                            wall_slice: "assets/upgrade_screen/wall_slice.png",
                                            button_claim: "assets/upgrade_screen/figures/button_claim.png",
                                            button_claim_pressed: "assets/upgrade_screen/figures/button_claim_pressed.png",
                                            button_close_hint_popup_pressed: "assets/upgrade_screen/figures/button_close_hint_popup_pressed.png",
                                            button_close_popup: "assets/upgrade_screen/figures/button_close_popup.png",
                                            button_hint: "assets/upgrade_screen/figures/button_hint.png",
                                            button_hint_pressed: "assets/upgrade_screen/figures/button_hint_pressed.png",
                                            button_unlock: "assets/upgrade_screen/figures/button_unlock.png",
                                            button_unlock_pressed: "assets/upgrade_screen/figures/button_unlock_pressed.png",
                                            figure_pop_up: "assets/upgrade_screen/figures/figure_pop-up.png",
                                            hint_popup: "assets/upgrade_screen/figures/hint_popup.png",
                                            batgirl_boosted_sprite: "assets/sprites/characters/batgirl_boosted_sprite.png",
                                            batgirl_sprite: "assets/sprites/characters/batgirl_sprite.png",
                                            beastboy_boosted_sprite: "assets/sprites/characters/beastboy_boosted_sprite.png",
                                            beastboy_sprite: "assets/sprites/characters/beastboy_sprite.png",
                                            greenlantern_boosted_sprite: "assets/sprites/characters/greenlantern_boosted_sprite.png",
                                            greenlantern_sprite: "assets/sprites/characters/greenlantern_sprite.png",
                                            raven_boosted_sprite: "assets/sprites/characters/raven_boosted_sprite.png",
                                            raven_sprite: "assets/sprites/characters/raven_sprite.png",
                                            robin_boosted_sprite: "assets/sprites/characters/robin_boosted_sprite.png",
                                            robin_sprite: "assets/sprites/characters/robin_sprite.png",
                                            starfire_boosted_sprite: "assets/sprites/characters/starfire_boosted_sprite.png",
                                            starfire_sprite: "assets/sprites/characters/starfire_sprite.png",
                                            supergirl_boosted_sprite: "assets/sprites/characters/supergirl_boosted_sprite.png",
                                            supergirl_sprite: "assets/sprites/characters/supergirl_sprite.png",
                                            wonderwoman_boosted_sprite: "assets/sprites/characters/wonderwoman_boosted_sprite.png",
                                            wonderwoman_sprite: "assets/sprites/characters/wonderwoman_sprite.png",
                                            zatanna_boosted_sprite: "assets/sprites/characters/zatanna_boosted_sprite.png",
                                            zatanna_sprite: "assets/sprites/characters/zatanna_sprite.png",
                                            bumblebee_boosted_sprite: "assets/sprites/characters/bumblebee_boosted_sprite.png",
                                            bumblebee_sprite: "assets/sprites/characters/bumblebee_sprite.png",
                                            starro_blink_sprite: "assets/sprites/starro_blink_sprite.png",
                                            boosted_fx_blue_sprite: "assets/sprites/boosted_fx_blue_sprite.png",
                                            boosted_fx_green_sprite: "assets/sprites/boosted_fx_green_sprite.png",
                                            boosted_fx_normal_sprite: "assets/sprites/boosted_fx_normal_sprite.png",
                                            boosted_fx_pink_sprite: "assets/sprites/boosted_fx_pink_sprite.png",
                                            door_closed_idle: "assets/sprites/door_closed_idle.png",
                                            door_open_idle: "assets/sprites/door_open_idle.png",
                                            door_opening: "assets/sprites/door_opening.png",
                                            smoke_fx_sprite: "assets/sprites/smoke_fx_sprite.png",
                                            batgirl_attack_sprite: "assets/sprites/batgirl_attack_sprite.png",
                                            beastboy_attack_sprite: "assets/sprites/beastboy_attack_sprite.png",
                                            bubblebee_attack_sprite: "assets/sprites/bubblebee_attack_sprite.png",
                                            greenlantern_attack_sprite: "assets/sprites/greenlantern_attack_sprite.png",
                                            raven_attack_sprite: "assets/sprites/raven_attack_sprite.png",
                                            robin_attack_sprite: "assets/sprites/robin_attack_sprite.png",
                                            starfire_attack_sprite: "assets/sprites/starfire_attack_sprite.png",
                                            supergirl_attack_sprite: "assets/sprites/supergirl_attack_sprite.png",
                                            wonderwoman_attack_sprite: "assets/sprites/wonderwoman_attack_sprite.png",
                                            batgirl_attack_boosted_sprite: "assets/sprites/batgirl_attack_boosted_sprite.png",
                                            beastboy_attack_boosted_sprite: "assets/sprites/beastboy_attack_boosted_sprite.png",
                                            bubblebee_attack_boosted_sprite: "assets/sprites/bubblebee_attack_boosted_sprite.png",
                                            greenlantern_attack_boosted_sprite: "assets/sprites/greenlantern_attack_boosted_sprite.png",
                                            raven_attack_boosted_sprite: "assets/sprites/raven_attack_boosted_sprite.png",
                                            robin_attack_boosted_sprite: "assets/sprites/robin_attack_boosted_sprite.png",
                                            starfire_attack_boosted_sprite: "assets/sprites/starfire_attack_boosted_sprite.png",
                                            supergirl_attack_boosted_sprite: "assets/sprites/supergirl_attack_boosted_sprite.png",
                                            wonderwoman_attack_boosted_sprite: "assets/sprites/wonderwoman_attack_boosted_sprite.png",
                                            explosion_sprite: "assets/sprites/explosion_sprite.png",
                                            electricity_sprite: "assets/sprites/electricity_sprite.png",
                                            hit_explode_sprite: "assets/sprites/hit_explode_sprite.png",
                                            heart_fx_sprite: "assets/sprites/heart_fx_sprite.png",
                                            cn_logo_sprite: "assets/lobby/cn_logo.png",
                                            title_logo_fx_sprite: "assets/sprites/title_logo_fx_sprite_" + k.language + ".png",
                                            arrow_result_sprite: "assets/sprites/arrow_result_sprite.png",
                                        },
                                        sprites: {
                                            arrow_result: { source: "arrow_result_sprite", frames: 36, frameWidth: 260, frameHeight: 220 },
                                            heart_fx: { source: "heart_fx_sprite", frames: 24, frameWidth: 100, frameHeight: 100 },
                                            electricity: { source: "electricity_sprite", frames: 24, frameWidth: 375, frameHeight: 375 },
                                            hit_explode: { source: "hit_explode_sprite", frames: 37, frameWidth: 250, frameHeight: 250 },
                                            explosion: { source: "explosion_sprite", frames: 17, frameWidth: 375, frameHeight: 375 },
                                            batgirl_attack_boosted: { source: "batgirl_attack_boosted_sprite", frames: 22, frameWidth: 180, frameHeight: 186 },
                                            beastboy_attack_boosted: { source: "beastboy_attack_boosted_sprite", frames: 6, frameWidth: 180, frameHeight: 186 },
                                            bubblebee_attack_boosted: { source: "bubblebee_attack_boosted_sprite", frames: 30, frameWidth: 180, frameHeight: 186 },
                                            greenlantern_attack_boosted: { source: "greenlantern_attack_boosted_sprite", frames: 13, frameWidth: 180, frameHeight: 186 },
                                            raven_attack_boosted: { source: "raven_attack_boosted_sprite", frames: 20, frameWidth: 180, frameHeight: 186 },
                                            robin_attack_boosted: { source: "robin_attack_boosted_sprite", frames: 25, frameWidth: 180, frameHeight: 186 },
                                            starfire_attack_boosted: { source: "starfire_attack_boosted_sprite", frames: 8, frameWidth: 180, frameHeight: 186 },
                                            supergirl_attack_boosted: { source: "supergirl_attack_boosted_sprite", frames: 8, frameWidth: 180, frameHeight: 186 },
                                            wonderwoman_attack_boosted: { source: "wonderwoman_attack_boosted_sprite", frames: 20, frameWidth: 180, frameHeight: 186 },
                                            batgirl_attack: { source: "batgirl_attack_sprite", frames: 22, frameWidth: 180, frameHeight: 186 },
                                            beastboy_attack: { source: "beastboy_attack_sprite", frames: 6, frameWidth: 180, frameHeight: 186 },
                                            bubblebee_attack: { source: "bubblebee_attack_sprite", frames: 30, frameWidth: 180, frameHeight: 186 },
                                            greenlantern_attack: { source: "greenlantern_attack_sprite", frames: 13, frameWidth: 180, frameHeight: 186 },
                                            raven_attack: { source: "raven_attack_sprite", frames: 20, frameWidth: 180, frameHeight: 186 },
                                            robin_attack: { source: "robin_attack_sprite", frames: 25, frameWidth: 180, frameHeight: 186 },
                                            starfire_attack: { source: "starfire_attack_sprite", frames: 8, frameWidth: 180, frameHeight: 186 },
                                            supergirl_attack: { source: "supergirl_attack_sprite", frames: 8, frameWidth: 180, frameHeight: 186 },
                                            wonderwoman_attack: { source: "wonderwoman_attack_sprite", frames: 20, frameWidth: 180, frameHeight: 186 },
                                            smoke_fx: { source: "smoke_fx_sprite", frames: 17, frameWidth: 180, frameHeight: 180 },
                                            boosted_fx_blue: { source: "boosted_fx_blue_sprite", frames: 48, frameWidth: 340, frameHeight: 246 },
                                            boosted_fx_green: { source: "boosted_fx_green_sprite", frames: 48, frameWidth: 340, frameHeight: 246 },
                                            boosted_fx_normal: { source: "boosted_fx_normal_sprite", frames: 48, frameWidth: 340, frameHeight: 246 },
                                            boosted_fx_pink: { source: "boosted_fx_pink_sprite", frames: 48, frameWidth: 340, frameHeight: 246 },
                                            door_closed_idle: { source: "door_closed_idle", frames: 15, frameWidth: 374, frameHeight: 500 },
                                            door_open_idle: { source: "door_open_idle", frames: 10, frameWidth: 374, frameHeight: 500 },
                                            door_opening: { source: "door_opening", frames: 17, frameWidth: 374, frameHeight: 500 },
                                            starro_blink: { source: "starro_blink_sprite", frames: 4, frameWidth: 420, frameHeight: 420 },
                                            bumblebee_boosted: { source: "bumblebee_boosted_sprite", frames: 24, frameWidth: 338, frameHeight: 464 },
                                            bumblebee: { source: "bumblebee_sprite", frames: 24, frameWidth: 338, frameHeight: 464 },
                                            batgirl_boosted: { source: "batgirl_boosted_sprite", frames: 25, frameWidth: 284, frameHeight: 501 },
                                            batgirl: { source: "batgirl_sprite", frames: 25, frameWidth: 284, frameHeight: 501 },
                                            beastboy_boosted: { source: "beastboy_boosted_sprite", frames: 25, frameWidth: 261, frameHeight: 353 },
                                            beastboy: { source: "beastboy_sprite", frames: 25, frameWidth: 261, frameHeight: 353 },
                                            greenlantern_boosted: { source: "greenlantern_boosted_sprite", frames: 21, frameWidth: 258, frameHeight: 514 },
                                            greenlantern: { source: "greenlantern_sprite", frames: 21, frameWidth: 258, frameHeight: 514 },
                                            raven_boosted: { source: "raven_boosted_sprite", frames: 25, frameWidth: 230, frameHeight: 406 },
                                            raven: { source: "raven_sprite", frames: 25, frameWidth: 230, frameHeight: 406 },
                                            robin_boosted: { source: "robin_boosted_sprite", frames: 25, frameWidth: 276, frameHeight: 426 },
                                            robin: { source: "robin_sprite", frames: 25, frameWidth: 276, frameHeight: 426 },
                                            starfire_boosted: { source: "starfire_boosted_sprite", frames: 25, frameWidth: 276, frameHeight: 524 },
                                            starfire: { source: "starfire_sprite", frames: 25, frameWidth: 276, frameHeight: 524 },
                                            supergirl_boosted: { source: "supergirl_boosted_sprite", frames: 24, frameWidth: 250, frameHeight: 531 },
                                            supergirl: { source: "supergirl_sprite", frames: 24, frameWidth: 250, frameHeight: 531 },
                                            wonderwoman_boosted: { source: "wonderwoman_boosted_sprite", frames: 25, frameWidth: 217, frameHeight: 555 },
                                            wonderwoman: { source: "wonderwoman_sprite", frames: 25, frameWidth: 217, frameHeight: 555 },
                                            zatanna_boosted: { source: "zatanna_boosted_sprite", frames: 24, frameWidth: 293, frameHeight: 472 },
                                            zatanna: { source: "zatanna_sprite", frames: 24, frameWidth: 293, frameHeight: 472 },
                                        },
                                    }),
                                    AudioManager.register("music", new Howl({ src: ["assets/sounds/music_var02.mp3"], volume: 1, loop: !0, mute: !0 }), "Music"),
                                    AudioManager.register("click", new Howl({ src: ["assets/sounds/button_click.mp3"], volume: 1, mute: !0 }), "SFX"),
                                    AudioManager.register("cannon", new Howl({ src: ["assets/sounds/cannon_shoot.mp3"], volume: 1, mute: !0 }), "SFX"),
                                    AudioManager.register("endgame", new Howl({ src: ["assets/sounds/endgame.mp3"], volume: 1, mute: !0 }), "SFX"),
                                    AudioManager.register("highscore", new Howl({ src: ["assets/sounds/endgame_highscore.mp3"], volume: 1, mute: !0 }), "SFX"),
                                    AudioManager.register("destroy", new Howl({ src: ["assets/sounds/enemy_destroy.mp3"], volume: 1, mute: !0 }), "SFX"),
                                    AudioManager.register("destroy_flawless", new Howl({ src: ["assets/sounds/enemy_destroy_flawless.mp3"], volume: 1, mute: !0 }), "SFX"),
                                    AudioManager.register("hit", new Howl({ src: ["assets/sounds/enemy_hit.mp3"], volume: 1, mute: !0 }), "SFX"),
                                    AudioManager.register("hit_closer", new Howl({ src: ["assets/sounds/enemy_hit_closer.mp3"], volume: 1, mute: !0 }), "SFX"),
                                    AudioManager.register("hit_closest", new Howl({ src: ["assets/sounds/enemy_hit_closest.mp3"], volume: 1, mute: !0 }), "SFX"),
                                    AudioManager.register("upgrade", new Howl({ src: ["assets/sounds/upgrade_character.mp3"], volume: 1, mute: !0 }), "SFX"),
                                    resources.bitmaps))
                                        PIXI.Loader.shared.add(e, resources.bitmaps[e]);
                                    PIXI.Loader.shared.onProgress.add((e) => {
                                        !(function (e, t) {
                                            M.value = e.progress / 100;
                                        })(e);
                                    }),
                                        PIXI.Loader.shared.load(Mt);
                                })();
                            });
                    }
                    function Qe() {
                        !(function (s) {
                            for (var n in resources.sprites) {
                                var r = PIXI.ParseTile(resources.sprites[n]);
                                sprites[n] = r;
                            }
                            ((E = new a()).x = e / 2),
                                (E.y = t / 2),
                                p.stage.addChild(E),
                                ((N = new PIXI.Container()).visible = !1),
                                E.addChildZ(N, 1e3),
                                ((G = new PIXI.Graphics()).visible = !1),
                                G.beginFill(0),
                                G.drawRect(-e / 2, -t / 2, 640 + e, 1137 + t),
                                (G.cacheAsBitmap = !0),
                                (G.alpha = 0.3),
                                E.addChildZ(G, 0.1),
                                ((W = new w(C)).visible = !1),
                                (W.x = e / 2),
                                (W.y = t / 2),
                                p.stage.addChild(W),
                                W.on("play", function () {
                                    et();
                                }),
                                ((z = new f()).visible = !1),
                                (z.x = e / 2),
                                (z.y = t / 2),
                                p.stage.addChild(z),
                                z.on("settings", nt),
                                z.on("upgrade", et),
                                z.on("play", function () {
                                    et();
                                }),
                                ((O = new d(640 + e / 2)).visible = !1),
                                (O.x = e / 2),
                                (O.y = t / 2),
                                p.stage.addChild(O),
                                O.on("unlock", function (e) {
                                    openFigureDialog(e);
                                }),
                                O.on("upgrade", function (e) {
                                    !(function (e) {
                                        if (Ue[e]) return;
                                        if (ye < Ne[Ct()]) return;
                                        (ye -= Ne[Ct()]),
                                            (S.saveData.coins = ye),
                                            S.setSaveData(),
                                            (function (e) {
                                                if (Ue[e]) return;
                                                AudioManager.play("upgrade"), (S.saveData.upgrades[e] = 1), (Ue[e] = !0), S.setSaveData(), O.setStateCosts(Ne[Ct()]), O.setCoins(ye), O.setBonus(Tt()), O.updateStates(Ue), (Ce = Tt() / 100);
                                            })(e);
                                    })(e);
                                }),
                                O.on("starro", function () {
                                    (ke = !0), st(), it();
                                }),
                                O.on("play", function () {
                                    (ke = !1), st(), it();
                                }),
                                ((A = new g()).x = e / 2),
                                (A.y = t / 2),
                                p.stage.addChild(A),
                                A.on("settings", nt),
                                A.on("upgrade", et),
                                A.on("play", function () {
                                    st(), it();
                                }),
                                (X = PIXI.Sprite.from("background_city_night")).anchor.set(0.5),
                                (X.x = 320),
                                (X.y = 568.5),
                                E.addChildZ(X, 0),
                                ((F = new P()).x = 320),
                                (F.y = 568.5),
                                E.addChildZ(F, 0),
                                (R = new PIXI.spine.Spine(PIXI.Loader.shared.resources.cyborg_spine.spineData)).scale.set(0.7 * 0.75),
                                (R.x = 100),
                                (R.y = 600),
                                E.addChildZ(R, 2),
                                R.position.set(0.7 * -5022 * 0.75 + 110, 1142.6),
                                R.skeleton.setSkinByName("cannon versions/cannon_default"),
                                R.skeleton.setToSetupPose(),
                                R.state.setAnimation(0, "idle_cannon", !0),
                                (D = new PIXI.spine.Spine(PIXI.Loader.shared.resources.cyborg_spine.spineData)).scale.set(0.7 * 0.75),
                                (D.x = 100),
                                (D.y = 600),
                                E.addChildZ(D, 2),
                                D.position.set(0.7 * -5022 * 0.75 + 110, 1142.6),
                                D.skeleton.setSkinByName("face expressions/happy"),
                                D.skeleton.setToSetupPose(),
                                D.state.setAnimation(0, "idle_body", !0),
                                (L = new Animator.Animable(sprites.batgirl_boosted[0])).anchor.set(0.5),
                                L.scale.set(0.7),
                                (L.x = 5400),
                                (L.y = -250),
                                R.addChild(L),
                                L.addAnimation("batgirl_boosted", sprites.batgirl_boosted),
                                L.addAnimation("batgirl", sprites.batgirl),
                                L.addAnimation("beastboy_boosted", sprites.beastboy_boosted),
                                L.addAnimation("beastboy", sprites.beastboy),
                                L.addAnimation("greenlantern_boosted", sprites.greenlantern_boosted),
                                L.addAnimation("greenlantern", sprites.greenlantern),
                                L.addAnimation("raven_boosted", sprites.raven_boosted),
                                L.addAnimation("raven", sprites.raven),
                                L.addAnimation("robin_boosted", sprites.robin_boosted),
                                L.addAnimation("robin", sprites.robin),
                                L.addAnimation("starfire_boosted", sprites.starfire_boosted),
                                L.addAnimation("starfire", sprites.starfire),
                                L.addAnimation("supergirl_boosted", sprites.supergirl_boosted),
                                L.addAnimation("supergirl", sprites.supergirl),
                                L.addAnimation("wonderwoman_boosted", sprites.wonderwoman_boosted),
                                L.addAnimation("wonderwoman", sprites.wonderwoman),
                                L.addAnimation("zatanna_boosted", sprites.zatanna_boosted),
                                L.addAnimation("zatanna", sprites.zatanna),
                                L.addAnimation("bumblebee_boosted", sprites.bumblebee_boosted),
                                L.addAnimation("bumblebee", sprites.bumblebee),
                                L.setAnimation("batgirl", 0, 24),
                                Animator.add(null, L, !1),
                                (j = new y()).scale.set(0),
                                (j.x = 320),
                                (j.y = 400),
                                E.addChildZ(j, 1),
                                (B = new PIXI.Graphics()).beginFill(0, 1),
                                B.drawRect(-e / 2, -t / 2, 640 + e, 1137 + t),
                                (B.cacheAsBitmap = !0),
                                E.addChildZ(B, 0.9),
                                (H = new o()).scale.set(0.75),
                                (H.x = 65 - e / 2),
                                (H.y = 450 - t / 2),
                                E.addChildZ(H, 2),
                                (U = new l(PIXI.utils.TextureCache.button_pause)).anchor.set(0.5),
                                U.scale.set(0.8),
                                (U.x = 580 + e / 2),
                                (U.y = 60 - t / 2),
                                U.registerState("down", PIXI.utils.TextureCache.button_pause_pressed),
                                E.addChildZ(U, 1e3),
                                U.on("pointerdown", function (e) {
                                    rt(), e.stopPropagation();
                                }),
                                U.on(
                                    "pointertap",
                                    function (e) {
                                        e.stopPropagation();
                                    }.bind(this)
                                ),
                                (Z = new _(C)).scale.set(0.75),
                                (Z.x = 640 + e / 2),
                                (Z.y = 150 - t / 2),
                                E.addChildZ(Z, 1e3),
                                (Y = new h()).scale.set(0.75),
                                (Y.x = 0 - e / 2),
                                (Y.y = 150 - t / 2),
                                E.addChildZ(Y, 1e3),
                                (Y.value = 6),
                                (K = new c(C)).scale.set(0.75),
                                (K.x = 320),
                                (K.y = 120 - t / 2),
                                E.addChildZ(K, 1e3),
                                ((Q = new v()).visible = !1),
                                Q.scale.set(0.75),
                                (Q.x = 320),
                                (Q.y = 120 - t / 2),
                                E.addChildZ(Q, 1e3),
                                (q = new I(C)).scale.set(0.75),
                                (q.x = 640 + e / 2),
                                (q.y = 220 - t / 2),
                                E.addChildZ(q, 1e3),
                                (q.value = 0),
                                (p.stage.interactive = !0),
                                p.stage.on("pointerup", function (e) {
                                    be && ((be = !1), (_inFire = !1));
                                }),
                                p.stage.on("pointermove", function (e) {
                                    !(function (e) {
                                        e.stopPropagation();
                                    })(e);
                                }),
                                p.stage.on("pointerdown", function (e) {
                                    !(function (e) {
                                        te ||
                                            e.target instanceof l ||
                                            (ce && !le
                                                ? wt()
                                                : le &&
                                                  ((function () {
                                                      for (ce = !0, le = !1, N.visible = !1, G.visible = !1; N.children.length; ) {
                                                          let e = N.children.shift();
                                                          Tweener.extract(e), e.destroy();
                                                      }
                                                  })(),
                                                  ke || wt()));
                                    })(e);
                                }),
                                document.addEventListener("keydown", function (e) {}),
                                document.addEventListener("keyup", function (e) {}),
                                p.ticker.add(Xt),
                                ((Ze = new Stats()).domElement.style.position = "absolute"),
                                (Ze.domElement.style.top = "0px"),
                                tt(),
                                AudioManager.playLoop("music"),
                                pe || AudioManager.unmuteGroup("Music");
                            ge || AudioManager.unmuteGroup("SFX");
                            window.addEventListener("blur", Ke), window.addEventListener("focus", qe), document.addEventListener("visibilitychange", Ve);
                        })(),
                            S.getSaveData(function () {
                                (ye = S.saveData.coins),
                                    (pe = !S.saveData.music),
                                    (ge = !S.saveData.sfx),
                                    (ne = S.saveData.tutorial),
                                    (ie = S.saveData.pickupTutorial),
                                    (re = S.saveData.starroTutorial),
                                    (Se = S.saveData.upgradeTutorial),
                                    (Ue = S.saveData.upgrades),
                                    (Ce = Tt() / 100);
                            });
                    }
                    function Ke() {
                        Howler.mute(!0), E.visible && !_e && rt();
                    }
                    function qe() {
                        Howler.mute(!1);
                    }
                    function Ve() {
                        "hidden" == document.visibilityState ? Ke() : qe();
                    }
                    function Je() {
                        p && !he && (p.renderer.plugins.interaction.removeEvents(), p.ticker.stop(), (he = !0), Howler._muted || ((ue = !0), Howler.mute(!0)));
                    }
                    function $e() {
                        p && he && (p.ticker.start(), p.renderer.plugins.interaction.setTargetElement(p.renderer.view, p.renderer.resolution), (he = !1), ue && Howler.mute(!1), (ue = !1));
                    }
                    function et() {
                        (ce = !1),
                            (O.visible = !0),
                            (E.visible = !1),
                            (A.visible = !1),
                            (z.visible = !1),
                            (W.visible = !1),
                            O.setStateCosts(Ne[Ct()]),
                            O.setCoins(ye),
                            O.setEnable(!0),
                            O.setBonus(Tt()),
                            O.updateStates(Ue),
                            Se && ((Se = !1), (S.saveData.upgradeTutorial = !1), at(O, !1, !0));
                    }
                    function tt() {
                        (ce = !1), (E.visible = !1), (O.visible = !1), (A.visible = !0), (z.visible = !1), (W.visible = !1), A.setEnable(!0), (ke = !1);
                    }
                    function st() {
                        (ce = !0), (O.visible = !1), (E.visible = !0), (A.visible = !1), (z.visible = !1), (W.visible = !1);
                    }
                    function at(s, a, n) {
                        (te = !0), s && s.setEnable(!1);
                        var r = new PIXI.Graphics();
                        r.beginFill(0, 0.8), r.drawRect(0, 0, 640 + e, 1137 + t), p.stage.addChild(r);
                        var i = new x(C, 640 + e, 1137 + t, n);
                        (i.x = 0.5 * (640 + e)),
                            (i.y = (520 / 1137) * (1137 + t)),
                            i.scale.set(0.5),
                            p.stage.addChild(i),
                            i.once("close", function () {
                                ne || (te = !1),
                                    s && s.setEnable(!0),
                                    p.stage.removeChild(r),
                                    p.stage.off("pointerdown", i.swipeDown.bind(i)),
                                    p.stage.off("pointerup", i.swipeUp.bind(i)),
                                    !s &&
                                        ke &&
                                        setTimeout(function () {
                                            ut();
                                        }, 200);
                            }),
                            Tweener.addTween(i, { scaleX: 0.97, scaleY: 0.97 }, { time: 25, transition: "easeInOutBack" }),
                            a && Tweener.finish(i),
                            p.stage.on("pointerdown", i.swipeDown.bind(i)),
                            p.stage.on("pointerup", i.swipeUp.bind(i));
                    }
                    function nt() {
                        A.setEnable(!1), z.setEnable(!1);
                        var s = new PIXI.Graphics();
                        s.beginFill(0, 0.9), s.drawRect(0, 0, 640 + e, 1137 + t), p.stage.addChild(s);
                        var a = new m({ music: pe, sound: ge });
                        (a.x = (640 + e) / 2),
                            (a.y = (1137 + t) / 2 + 0),
                            p.stage.addChild(a),
                            a.scale.set(0.8),
                            Tweener.addTween(a, { y: (1137 + t) / 2 + 0, scaleX: 1, scaleY: 1 }, { time: 15, transition: "easeOutBack" }),
                            a.on("change_mute_music", function (e) {
                                (pe = !pe) ? AudioManager.muteGroup("Music") : AudioManager.unmuteGroup("Music");
                            }),
                            a.on("change_mute_sound", function (e) {
                                (ge = !ge) ? AudioManager.muteGroup("SFX") : AudioManager.unmuteGroup("SFX");
                            }),
                            a.once("close", function () {
                                p.stage.removeChild(s), A.setEnable(!0), z.setEnable(!0), S.setSaveData();
                            }),
                            a.once("home", function () {
                                p.stage.removeChild(s), tt(), S.setSaveData();
                            }),
                            a.on("help", function () {
                                at(a);
                            });
                    }
                    function rt() {
                        (_e = !0), A.setEnable(!1), z.setEnable(!1);
                        var s = new PIXI.Graphics();
                        s.beginFill(0, 0.9), s.drawRect(0, 0, 640 + e, 1137 + t), p.stage.addChild(s);
                        var a = new b({ music: pe, sound: ge });
                        (a.x = (640 + e) / 2),
                            (a.y = (1137 + t) / 2 + 0),
                            p.stage.addChild(a),
                            a.scale.set(0.8),
                            Tweener.addTween(a, { y: (1137 + t) / 2 + 0, scaleX: 1, scaleY: 1 }, { time: 15, transition: "easeOutBack" }),
                            a.on("change_mute_music", function (e) {
                                (pe = !pe) ? AudioManager.muteGroup("Music") : AudioManager.unmuteGroup("Music");
                            }),
                            a.on("change_mute_sound", function (e) {
                                (ge = !ge) ? AudioManager.muteGroup("SFX") : AudioManager.unmuteGroup("SFX");
                            }),
                            a.once("close", function () {
                                p.stage.removeChild(s), (_e = !1), S.setSaveData();
                            }),
                            a.once("home", function () {
                                (_e = !1), p.stage.removeChild(s), tt(), S.setSaveData();
                            }),
                            a.on("help", function () {
                                at(a, !0);
                            });
                    }
                    function it() {
                        ne || (te = !1),
                            (se = !0),
                            (oe = 0),
                            (J = Ot(J)),
                            ($ = Ot($)),
                            (V = Ot(V)),
                            (ee = Ot(ee)),
                            (Ae = 0.02),
                            (Oe = 0.02),
                            (Ee = 0.03),
                            (Fe = 0.02),
                            (ze = 5e-4),
                            (We = 5e-4),
                            (Be = 1),
                            (je = 0),
                            (He = 0),
                            (Le = 100),
                            (De = 200),
                            (Re = 400),
                            ke
                                ? (re && (te = !0),
                                  0.03,
                                  (fe = 0),
                                  (me = 0),
                                  (xe = 0),
                                  (Ie = 4),
                                  0,
                                  (ve = 3),
                                  (we = 4),
                                  (F.visible = !1),
                                  j && (E.removeChild(j), Tweener.extract(j)),
                                  (K.visible = !1),
                                  (Q.visible = !0),
                                  (Q.value = 0),
                                  (j = new y()).scale.set(1.5),
                                  (j.x = 320),
                                  (j.y = 300),
                                  E.addChildZ(j, 1),
                                  (X.texture = PIXI.utils.TextureCache.gameplay_starro_background),
                                  (j.alpha = 0),
                                  (B.alpha = 1),
                                  (B.visible = !0))
                                : (0.02,
                                  (fe = 0),
                                  (me = 0),
                                  (xe = 0),
                                  (Ie = 2),
                                  0,
                                  (ve = 3),
                                  (we = 4),
                                  E.removeChild(j),
                                  (K.visible = !0),
                                  (Q.visible = !1),
                                  (F.visible = !0),
                                  (j = new r()).scale.set(0.75),
                                  (j.x = 320),
                                  (j.y = 400),
                                  E.addChildZ(j, 1),
                                  (X.texture = PIXI.utils.TextureCache.background_city_night),
                                  (B.visible = !1)),
                            (Pe = ve),
                            (ee = xt(we)),
                            vt(),
                            E.sortChildren(),
                            (Z.value = xe),
                            (Y.value = ve),
                            (Y.captured = ve),
                            (ae = 0),
                            ot(),
                            H.init(ee),
                            (H.y = 310 + 40 * we),
                            j.clear(),
                            j.setTargets([], [], xe),
                            j.scale.set(0.75),
                            (function () {
                                if (!_e) return;
                                (_e = !1), p.ticker.start();
                            })(),
                            j.clear(),
                            j.setTargets(kt(), [], xe),
                            Te && (Te = !1),
                            ke && ut();
                    }
                    function ot() {
                        K.value = ae;
                    }
                    function lt(s) {
                        if (!_e && (Animator.update(s), Tweener.update(s), n.update(s), !_e && (A.visible ? A.update(s) : z.visible ? z.update(s) : W.visible ? W.update(s) : E.visible && F.visible && F.update(s), ce))) {
                            if (ke)
                                re &&
                                    (0 == fe && 0 == oe && Math.abs(j.rotationAngle - 3.5) < 0.15
                                        ? (oe++, ct(3))
                                        : 2 == fe && Math.abs(j.rotationAngle - 3.5) < 0.15 && (ct(4), (re = !1), (ne = !1), (S.saveData.starroTutorial = !1), (S.saveData.tutorial = !1)));
                            else if (ne)
                                0 == oe && Math.abs(j.rotationAngle - 2.5) < 0.05 ? (ct(0), (oe = 1)) : 1 == oe && Math.abs(j.rotationAngle - Math.PI - Math.PI / 2) < 0.25 && (ct(1), (oe = 2), (ne = !1), (S.saveData.tutorial = !1));
                            else if (ie) {
                                let e = j.getPickups();
                                for (let t = 0; t < e.length; t++) {
                                    let s = e[t];
                                    if (s.alive && Math.abs(((s.angleA + j.rotationAngle) % (2 * Math.PI)) - Math.PI / 2) < 0.25) {
                                        ct(2), (ie = !1), (S.saveData.pickupTutorial = !1);
                                        break;
                                    }
                                }
                            }
                            (j.rotationAngle = (2 * Math.PI + j.rotationAngle + Ae * Be) % (2 * Math.PI)),
                                Ae < Oe ? (Ae += ze) > Oe && (Ae = Oe) : ((Ae -= We) < Oe && (Ae = Oe), 0 == Ae && (Le = 0)),
                                --Le <= 0 && (0 == Oe ? ((Oe = Fe + Math.random() * (Ee - Fe)), Math.random() < He && (Be *= -1)) : (Oe = Math.random() < je ? Fe + Math.random() * (Ee - Fe) : 0), (Le = Re + Math.random() * (De - Re)));
                            for (var a = $.slice(0), r = 0; r < a.length; r++) {
                                let e = $[r];
                                (e.x = j.x + 290 * Math.cos(e.angleA)), (e.y = j.y + 290 * Math.sin(e.angleA)), (e.rotation = e.angleA - Math.PI / 2), (e.angleA += Xe);
                            }
                            for (a = J.slice(0), r = 0; r < a.length; r++) {
                                let s = a[r];
                                (s.x += Math.sin(s.direction) * s.speed), (s.y -= Math.cos(s.direction) * s.speed), (s.rotation = s.direction);
                                let n = Math.min(Math.max((Et(s, j) / 250) * 0.5, 0.2), 1);
                                if ((s.deactivated || s.scale.set(n), s.deactivated)) (s.x < 50 || s.x > 640 + e + 50 || s.y > 1137 + t + 50 || s.y < 50) && At(J, s);
                                else if (Et(s, j) < 340 && Et(s, j) > 270)
                                    for (let e = 0; e < $.length; e++) {
                                        let t = $[e];
                                        if (Math.abs((t.angleA % (2 * Math.PI)) - Math.PI / 2) < t.size && (ve--, (Y.captured = ve), (s.direction = Math.PI / 2 + Math.PI * Math.random()), (s.deactivated = !0), se)) {
                                            if (ve <= 0) {
                                                (se = !1),
                                                    setTimeout(function () {
                                                        Pt();
                                                    }, 1e3);
                                                break;
                                            }
                                            we++, me--, (H.value = me), vt(), ne || (te = !1);
                                        }
                                    }
                                else if (Et(s, j) < 155) {
                                    ke && j.shake(), ft(s);
                                    let e = j.getPickups();
                                    for (let t = 0; t < e.length; t++) {
                                        let a = e[t];
                                        a.alive &&
                                            Math.abs(((a.angleA + j.rotationAngle) % (2 * Math.PI)) - Math.PI / 2) < 0.2 &&
                                            ((a.visible = !1), (a.alive = !1), 1 == a.type ? ((ve = Math.min(ve + 1, 3)), (Y.captured = ve)) : pt(s.x, s.y, 5));
                                    }
                                    if (j.isTargetAngle(Ge[s.id].type, ke && 2 == fe)) {
                                        if (j.isAlreadySecured()) {
                                            let e = j.removeSecure();
                                            ve--,
                                                (Y.captured = ve),
                                                (ae -= Math.round(20)) < 0 && (ae = 0),
                                                ot(),
                                                bt(-20),
                                                (s.direction = Math.PI / 2 + Math.PI * Math.random()),
                                                (s.x += Math.sin(s.direction) * s.speed * 2),
                                                (s.y -= Math.cos(s.direction) * s.speed * 2),
                                                (s.deactivated = !0);
                                            var o = new i(e.id);
                                            if (((o.x = s.x), (o.y = s.y), o.scale.set(s.scale.x), (o.speed = 15), (o.direction = Math.PI / 2 + Math.PI * Math.random()), (o.deactivated = !0), E.addChildZ(o, 5), J.push(o), se)) {
                                                if (ve <= 0) {
                                                    (se = !1),
                                                        setTimeout(function () {
                                                            Pt();
                                                        }, 1e3);
                                                    break;
                                                }
                                                It(e.id), H.init(ee), we++, me--, (H.value = me), vt(), ne || (te = !1);
                                            }
                                            j.showHit(), j.isWeakAngle() ? AudioManager.play("hit_closest") : AudioManager.play("hit"), ft(s), j.addProjectile(s.id, Ue[s.id]), At(J, s);
                                        } else {
                                            if ((j.showHit(), j.isWeakAngle()))
                                                if (ke) AudioManager.play("hit_closest");
                                                else if (Ue[s.id] && j.getWeakAngleType() == Ge[s.id].type) {
                                                    switch (Ge[s.id].type) {
                                                        case 0:
                                                            gt("bonus_pink");
                                                            break;
                                                        case 1:
                                                            gt("bonus_blue");
                                                            break;
                                                        case 2:
                                                            gt("bonus_green");
                                                    }
                                                    AudioManager.play("hit_closest"), (ae += Math.round(500 * Ce)), ot(), bt(Math.round(500 * Ce));
                                                } else AudioManager.play("hit_closer"), (ae += Math.round(100 * Ce)), ot(), bt(Math.round(100 * Ce));
                                            else AudioManager.play("hit"), (ae += Math.round(10 * Ce)), ot(), bt(Math.round(10 * Ce));
                                            ft(s), j.addProjectile(s.id, Ue[s.id]), At(J, s), ne || (te = !1);
                                        }
                                        Tweener.addTween(p.stage, { x: [0, -2, 0, 1, 0, 0], y: [0, 0, -2, 0, 2, 0] }, { time: 10 }),
                                            ke
                                                ? se &&
                                                  0 == we &&
                                                  ve > 0 &&
                                                  ((te = !0),
                                                  fe >= 2
                                                      ? (ht(),
                                                        setTimeout(function () {
                                                            (se = !1), Pt();
                                                        }, 2e3))
                                                      : setTimeout(function () {
                                                            _t();
                                                        }, 1200))
                                                : 0 == we &&
                                                  ve > 0 &&
                                                  ((te = !0),
                                                  Pe == ve
                                                      ? (AudioManager.play("destroy_flawless"),
                                                        setTimeout(function () {
                                                            gt("flawless");
                                                        }, 600))
                                                      : AudioManager.play("destroy"),
                                                  j.showDeath(),
                                                  setTimeout(function () {
                                                      yt(j.x + 100, j.y - 70);
                                                  }, 0),
                                                  setTimeout(function () {
                                                      yt(j.x - 100, j.y - 0);
                                                  }, 250),
                                                  setTimeout(function () {
                                                      yt(j.x + 70, j.y + 50);
                                                  }, 500),
                                                  setTimeout(function () {
                                                      yt(j.x - 50, j.y + 70);
                                                  }, 700),
                                                  setTimeout(function () {
                                                      dt(), _t();
                                                  }, 1e3));
                                    } else if ((ve--, (Y.captured = ve), (s.direction = Math.PI / 2 + Math.PI * Math.random()), (s.deactivated = !0), se)) {
                                        if (ve <= 0) {
                                            (se = !1),
                                                setTimeout(function () {
                                                    Pt();
                                                }, 1e3);
                                            break;
                                        }
                                        we++, me--, (H.value = me), vt(), ne || (te = !1);
                                    }
                                }
                            }
                            E.sortChildren(), ++de > 9999999999 && (de = 0);
                        }
                    }
                    function _t() {
                        if (((ae += Math.round(100 * Ce)), ot(), bt(Math.round(100 * Ce)), (J = Ot(J)), (Pe = ve), ke))
                            fe++,
                                xe++,
                                (Q.value = fe),
                                0 == xe
                                    ? (0.03, (we = 4), (Ie = 4), (Ee = 0.06), (Ae = Fe = 0.03), (Oe = Fe), (ze = 5e-4), (We = 3e-4), (Be = 1), (je = 0.2), (He = 0.2), (De = 150), (Le = (Re = 400) + Math.random() * (De - Re)))
                                    : 1 == xe
                                    ? (0.05, (we = 6), (Ie = 6), (Ee = 0.08), (Ae = Fe = 0.05), (Oe = Fe), (ze = 75e-5), (We = 45e-5), (Be = 1), (je = 0.3), (He = 0.4), (De = 150), (Le = (Re = 350) + Math.random() * (De - Re)))
                                    : (0.06, (we = 8), (Ie = 8), (Ee = 0.09), (Ae = Fe = 0.06), (Oe = Fe), (ze = 5e-4 * 1.8), (We = 45e-5), (Be = 1), (je = 0.4), (He = 0.6), (De = 100), (Le = (Re = 300) + Math.random() * (De - Re))),
                                0;
                        else {
                            !(function (t, s, a) {
                                let n = a;
                                for (let a = 0; a < n; a++) {
                                    let a = Math.random() * Math.PI * 2,
                                        n = 50 * Math.random();
                                    var r = PIXI.Sprite.from("coin_awarded");
                                    r.scale.set(0.4),
                                        (r.x = t + (Math.cos(a) * n) / 2),
                                        (r.y = s + (Math.sin(a) * n) / 2),
                                        E.addChild(r),
                                        (r.xCurve = 100 * Math.random()),
                                        (r.yCurve = 100 * Math.random()),
                                        Tweener.addTween(
                                            r,
                                            { x: t + Math.cos(a) * n, y: s + Math.sin(a) * n },
                                            {
                                                time: 20,
                                                transition: "easeOutQuad",
                                                onComplete: function (t) {
                                                    (t.x_ = t.x),
                                                        (t.y_ = t.y),
                                                        Tweener.addTween(
                                                            t,
                                                            { x_: 550 + e / 2, y_: 200, scaleX: 0.3, scaleY: 0.3 },
                                                            {
                                                                time: 30 + 10 * Math.random(),
                                                                transition: "easeInQuad",
                                                                onUpdate: function (e, t) {
                                                                    (e.x = e.x_), (e.y = e.y_);
                                                                },
                                                                onComplete: function (e) {
                                                                    e.parent && e.parent.removeChild(e);
                                                                },
                                                            }
                                                        );
                                                },
                                            }
                                        );
                                }
                                (ye += a), Tweener.addTween(q, { value: ye }, { time: 10, delay: 50, transition: "linear" });
                                var i = C.getString("valueAdded");
                                i = i.replace("{num}", a);
                                var o = new PIXI.Text(i, { fontFamily: C.fontFamily, fontSize: 35, fill: 16777215, align: "center" });
                                o.anchor.set(0.5),
                                    o.scale.set(0.5),
                                    (o.x = t),
                                    (o.y = s),
                                    E.addChild(o),
                                    Tweener.addTween(
                                        o,
                                        { scaleX: 1, scaleY: 1 },
                                        {
                                            time: 20,
                                            delay: 0,
                                            transition: "easeOutBack",
                                            onComplete: function (e) {
                                                Tweener.addTween(
                                                    o,
                                                    { alpha: 0, y: o.y - 50 },
                                                    {
                                                        time: 35,
                                                        delay: 0,
                                                        transition: "linear",
                                                        onComplete: function (e) {
                                                            (e.visible = !1), e.parent.removeChild(e);
                                                        },
                                                    }
                                                );
                                            },
                                        }
                                    );
                            })(j.x, j.y, 10 + 5 * fe),
                                0.005,
                                fe++,
                                xe++,
                                (Ie = fe + 1) > 5 && (Ie = 5),
                                Ie < 2 && (Ie = 2),
                                0,
                                (we = fe + 2);
                            let t = xe / 10;
                            (Fe = 0.02 + 0.05 * Math.min(1, t * t)),
                                (Ee = Fe * (1 + 0.5 * Math.min(1, t * t))),
                                (Ae = Fe),
                                (Oe = Fe),
                                (ze = 0.001 * Math.min(1, t * t * t)),
                                (We = 6e-4 * Math.min(1, t * t * t)),
                                (Be = 1),
                                (je = 0.5 * t * t * t),
                                (He = 0.5 * t * t * t),
                                (De = 200 - 100 * Math.min(1, t * t)),
                                (Re = 400 - 100 * Math.min(1, t * t)),
                                (Le = Re + Math.random() * (De - Re)),
                                (Me = 0.02 + 0.02 * Math.min(1, t * t)),
                                Me * (1 + 0.5 * Math.min(1, t * t)),
                                (Xe = Fe / 2);
                        }
                        we < 4 && (we = 4),
                            we > 9 && (we = 9),
                            (Z.value = xe),
                            (ee = xt(we)),
                            H.init(ee),
                            (H.y = 310 + 40 * we),
                            vt(),
                            (function () {
                                if (((me = 0), (H.value = me), ke))
                                    j.doBlink(),
                                        setTimeout(function () {
                                            let e = j.getProjectiles();
                                            for (let s = 0; s < e.length; s++) {
                                                let a = e[s];
                                                var t = new i(a.id);
                                                (t.x = a.x + j.x), (t.y = a.y + j.y), t.scale.set(0.5), (t.speed = 15), (t.rotation = a.rotation), (t.direction = a.rotation), (t.deactivated = !0), E.addChildZ(t, 5), J.push(t);
                                            }
                                            let s = [];
                                            ve < 3 && s.push(1), j.clear(), j.setTargets(kt(), s, xe), (j.rotationAngle = 0), ne || (te = !1);
                                        }, 400);
                                else {
                                    let t = j.getProjectiles();
                                    for (let s = 0; s < t.length; s++) {
                                        let a = t[s];
                                        var e = new i(a.id);
                                        (e.x = a.x + j.x), (e.y = a.y + j.y), e.scale.set(0.5), (e.speed = 15), (e.rotation = a.rotation), (e.direction = a.rotation), (e.deactivated = !0), E.addChildZ(e, 5), J.push(e);
                                    }
                                    j.clear(),
                                        (j.visible = !1),
                                        Tweener.addTween(
                                            j,
                                            { scaleX: 0.2, scaleY: 0.2 },
                                            {
                                                time: 20,
                                                transition: "easeInQuad",
                                                onComplete: function () {
                                                    (j.visible = !0),
                                                        j.resetFace(),
                                                        (function () {
                                                            if ((($ = Ot($)), xe < 3)) return;
                                                            let e = xe / 10,
                                                                t = [],
                                                                s = Math.round(5 * Math.random() * (e * e * e)),
                                                                a = 0,
                                                                n = [];
                                                            for (let e = 0; e < 5; e++) n.push(a), (a += (2 * Math.PI) / 5);
                                                            for (let e = 0; e < s; e++) {
                                                                let e = Math.round(Math.random() * (n.length - 1)),
                                                                    s = n[e];
                                                                t.push(s), n.splice(e, 1);
                                                            }
                                                            for (let s = 0; s < t.length; s++) {
                                                                var r = PIXI.Sprite.from("obstacle_long");
                                                                r.anchor.set(0.5),
                                                                    (r.angleA = t[s]),
                                                                    E.addChildZ(r, 1.5),
                                                                    Math.random() > Math.min(0.7, 0.5 * e)
                                                                        ? ((r.size = 0.35), (r.texture = PIXI.utils.TextureCache.obstacle_short))
                                                                        : ((r.size = 0.5), (r.texture = PIXI.utils.TextureCache.obstacle_long)),
                                                                    $.push(r);
                                                            }
                                                        })(),
                                                        j.setTargets(
                                                            kt(),
                                                            (function () {
                                                                if (ke) return [];
                                                                let e = [],
                                                                    t = Math.round(Math.random() * Math.min(1 + xe / 2, 5)),
                                                                    s = Math.round(Math.random() * t);
                                                                2 == fe && ie ? (s = 1) : 0 == fe && (s = 0);
                                                                let a = ve < 3;
                                                                for (let t = 0; t < s; t++) Math.random() > 0.65 && a ? e.push(1) : e.push(0);
                                                                return e;
                                                            })(),
                                                            xe
                                                        ),
                                                        Tweener.addTween(
                                                            j,
                                                            { scaleX: 0.75, scaleY: 0.75 },
                                                            {
                                                                time: 20,
                                                                transition: "easeOutQuad",
                                                                onComplete: function () {
                                                                    ne || (te = !1);
                                                                },
                                                            }
                                                        );
                                                },
                                            }
                                        );
                                }
                                vt();
                            })(),
                            S.gameData.defeatCount++;
                    }
                    function ct(e) {
                        switch (((te = !1), (ce = !1), (le = !0), (N.visible = !0), (G.visible = !0), e)) {
                            case 0:
                                var t = new PIXI.Graphics();
                                t.beginFill(65280),
                                    t.drawRect(-350, -200, 700, 450),
                                    (t.cacheAsBitmap = !0),
                                    (t.alpha = 0.2),
                                    (t.x = 320),
                                    (t.y = 850),
                                    N.addChild(t),
                                    (i = PIXI.Sprite.from("tut_text_07_all_ver")).anchor.set(0.5),
                                    (i.x = 440),
                                    (i.y = 995),
                                    N.addChild(i);
                                var s = new PIXI.Text(C.getString(window.game.isDesktop() ? "tut_text_07_desktop" : "tut_text_07"), {
                                    fontFamily: C.fontFamily,
                                    fontSize: 32,
                                    fill: 16777215,
                                    align: "center",
                                    wordWrap: !0,
                                    wordWrapWidth: 150,
                                });
                                C.fitText(s, 150, 200),
                                    s.anchor.set(0.5),
                                    (s.x = 20),
                                    i.addChild(s),
                                    (r = PIXI.Sprite.from("tut_hand")).anchor.set(0.5),
                                    r.scale.set(0.7),
                                    (r.x = 150),
                                    (r.y = 900),
                                    N.addChild(r),
                                    Tweener.addTween(r, { x: r.x + 30, y: r.y + 30 }, { time: 50, transition: "bow", loop: -1 });
                                break;
                            case 1:
                                (i = PIXI.Sprite.from("tut_text_08_all_ver")).anchor.set(0.5), (i.x = 460), (i.y = 985), N.addChild(i);
                                s = new PIXI.Text(C.getString("tut_text_08"), { fontFamily: C.fontFamily, fontSize: 32, fill: 16777215, align: "center", wordWrap: !0, wordWrapWidth: 175 });
                                C.fitText(s, 175, 200),
                                    s.anchor.set(0.5),
                                    (s.x = 20),
                                    i.addChild(s),
                                    (r = PIXI.Sprite.from("tut_hand")).anchor.set(0.5),
                                    r.scale.set(0.7),
                                    (r.x = 200),
                                    (r.y = 690),
                                    (r.rotation = -1.3),
                                    N.addChild(r),
                                    Tweener.addTween(r, { x: r.x + 30, y: r.y - 30 }, { time: 50, transition: "bow", loop: -1 }),
                                    (Ae = 0.012);
                                break;
                            case 2:
                                (i = PIXI.Sprite.from("tut_text_09_all_ver")).anchor.set(0.5), (i.x = 460), (i.y = 970), N.addChild(i);
                                var a = new PIXI.Text(C.getString("tut_text_09a"), { fontFamily: C.fontFamily, fontSize: 32, fill: 16777215, align: "center", wordWrap: !0, wordWrapWidth: 175 });
                                C.fitText(a, 175, 75), a.anchor.set(0.5), (a.x = 20), (a.y = -43), i.addChild(a);
                                var n = new PIXI.Text(C.getString("tut_text_09b"), { fontFamily: C.fontFamily, fontSize: 32, fill: 16777215, align: "center", wordWrap: !0, wordWrapWidth: 175 });
                                C.fitText(n, 175, 75),
                                    n.anchor.set(0.5),
                                    (n.x = 20),
                                    (n.y = 80),
                                    i.addChild(n),
                                    (r = PIXI.Sprite.from("tut_hand")).anchor.set(0.5),
                                    r.scale.set(0.7),
                                    (r.x = 210),
                                    (r.y = 690),
                                    (r.rotation = -1.3),
                                    N.addChild(r),
                                    Tweener.addTween(r, { x: r.x + 30, y: r.y - 30 }, { time: 50, transition: "bow", loop: -1 }),
                                    (Ae = 0.015);
                                break;
                            case 3:
                                (i = PIXI.Sprite.from("tut_text_10_all_ver")).anchor.set(0.5), (i.x = 460), (i.y = 970), N.addChild(i);
                                s = new PIXI.Text(C.getString("tut_text_10"), { fontFamily: C.fontFamily, fontSize: 32, fill: 16777215, align: "center", wordWrap: !0, wordWrapWidth: 175 });
                                C.fitText(s, 175, 200), s.anchor.set(0.5), (s.x = 20), (s.y = 0), i.addChild(s);
                                let e = j.getTargets();
                                for (let t = 0; t < e.length; t++) {
                                    let s = e[t];
                                    var r;
                                    (r = PIXI.Sprite.from("tut_hand")).scale.set(0.6),
                                        (r.anchor.x = 1),
                                        (r.anchor.y = 1),
                                        (r.x = j.x + s.x),
                                        (r.y = j.y + s.y),
                                        (r.rotation = s.angleA + j.rotationAngle + Math.PI),
                                        N.addChild(r),
                                        r.x > 320 && (r.scale.y *= -1),
                                        Tweener.addTween(r, { x: j.x + 210 * Math.cos(s.angleA + j.rotationAngle), y: j.y + 210 * Math.sin(s.angleA + j.rotationAngle) }, { time: 50, transition: "bow", loop: -1 });
                                }
                                break;
                            case 4:
                                var i;
                                (i = PIXI.Sprite.from("tut_text_11_all_hor")).anchor.set(0.5), (i.x = 460), (i.y = 995), N.addChild(i);
                                s = new PIXI.Text(C.getString("tut_text_11"), { fontFamily: C.fontFamily, fontSize: 24, fill: 16777215, align: "center", wordWrap: !0, wordWrapWidth: 260 });
                                C.fitText(s, 260, 175), s.anchor.set(0.5), (s.x = 20), (s.y = 0), i.addChild(s);
                        }
                    }
                    function ht() {
                        Pe == ve
                            ? (AudioManager.play("destroy_flawless"),
                              setTimeout(function () {
                                  gt("flawless");
                              }, 600))
                            : AudioManager.play("destroy"),
                            setTimeout(function () {
                                AudioManager.play("destroy"),
                                    setTimeout(function () {
                                        AudioManager.play("destroy"),
                                            setTimeout(function () {
                                                AudioManager.play("destroy");
                                            }, 400);
                                    }, 400);
                            }, 400),
                            Tweener.extract(j),
                            (Fe = 0.02),
                            (Ee = 0.02),
                            (Ae = 0.02),
                            (Oe = 0.02),
                            (Le = 999999999),
                            j.showDeath(),
                            setTimeout(function () {
                                mt(j.x + 100, j.y - 70);
                            }, 500),
                            setTimeout(function () {
                                mt(j.x - 100, j.y - 0);
                            }, 750),
                            setTimeout(function () {
                                mt(j.x + 70, j.y + 50);
                            }, 1e3),
                            setTimeout(function () {
                                mt(j.x - 50, j.y + 70);
                            }, 1200),
                            setTimeout(function () {
                                Tweener.addTween(j, { y: 800 }, { time: 250 });
                            }, 1);
                    }
                    function ut() {
                        (B.alpha = 1),
                            Tweener.addTween(B, { alpha: 0 }, { time: 50, delay: 100 }),
                            Tweener.addTween(
                                j,
                                { scaleX: 0.75, scaleY: 0.75, y: 400, alpha: 1 },
                                {
                                    time: 150,
                                    transition: "easeOutQuad",
                                    onComplete: function () {
                                        Tweener.addTween(j, { y: 420 }, { time: 600, transition: "bow", loop: -1 });
                                    },
                                }
                            );
                    }
                    function dt() {
                        const e = [
                                { texture: "enemy_back_piece_01", x: 265, y: 329, angle: 58 },
                                { texture: "enemy_back_piece_02", x: 38, y: 210, angle: 175 },
                                { texture: "enemy_back_piece_03", x: 190, y: 261, angle: 143 },
                                { texture: "enemy_back_piece_04", x: 144, y: 132, angle: -140 },
                                { texture: "enemy_back_piece_05", x: 237, y: 80, angle: -77 },
                                { texture: "enemy_back_piece_06", x: 331, y: 192, angle: -14 },
                            ],
                            t = [
                                { texture: "enemy_front_piece_01", x: 112, y: 349, angle: 120 },
                                { texture: "enemy_front_piece_02", x: 289, y: 101, angle: -63 },
                                { texture: "enemy_front_piece_03", x: 78, y: 242, angle: 160 },
                                { texture: "enemy_front_piece_04", x: 305, y: 270, angle: 32 },
                                { texture: "enemy_front_piece_05", x: 243, y: 243, angle: 50 },
                                { texture: "enemy_front_piece_06", x: 349, y: 177, angle: -14 },
                                { texture: "enemy_front_piece_07", x: 226, y: 380, angle: 83 },
                                { texture: "enemy_front_piece_08", x: 158, y: 61, angle: -105 },
                                { texture: "enemy_front_piece_09", x: 141, y: 144, angle: -140 },
                                { texture: "enemy_front_piece_10", x: 89, y: 96, angle: -145 },
                                { texture: "enemy_front_piece_11", x: 335, y: 368, angle: 54 },
                            ];
                        for (let t = 0; t < e.length; t++) {
                            const s = e[t];
                            (a = PIXI.Sprite.from(s.texture)).anchor.set(0.5),
                                a.scale.set(0.75),
                                (a.x = j.x - 158.25 + 0.75 * s.x),
                                (a.y = j.y - 158.25 + 0.75 * s.y),
                                (a.angleA = s.angle * (Math.PI / 180)),
                                (a.range = 400 + 100 * Math.random()),
                                E.addChild(a),
                                Tweener.addTween(
                                    a,
                                    { x: a.x + Math.cos(a.angleA) * a.range, y: a.y + Math.sin(a.angleA) * a.range, rotation: 1 * Math.PI * Math.random() },
                                    {
                                        time: 30 + 10 * Math.random(),
                                        delay: 5,
                                        onComplete: function (e) {
                                            e.parent && e.parent.removeChild(e);
                                        },
                                    }
                                );
                        }
                        var s = new Animator.Animable(sprites.explosion[0]);
                        s.anchor.set(0.5), s.scale.set(1.75), (s.x = j.x), (s.y = j.y), E.addChild(s), s.addAnimation("anim", sprites.explosion), s.setAnimation("anim", 0, 24), Animator.add(null, s, !0);
                        for (let e = 0; e < t.length; e++) {
                            const s = t[e];
                            var a;
                            (a = PIXI.Sprite.from(s.texture)).anchor.set(0.5),
                                a.scale.set(0.75),
                                (a.x = j.x - 158.25 + 0.75 * s.x),
                                (a.y = j.y - 158.25 + 0.75 * s.y),
                                (a.angleA = s.angle * (Math.PI / 180)),
                                (a.range = 400 + 100 * Math.random()),
                                E.addChild(a),
                                Tweener.addTween(
                                    a,
                                    { x: a.x + Math.cos(a.angleA) * a.range, y: a.y + Math.sin(a.angleA) * a.range, rotation: 1 * Math.PI * Math.random() },
                                    {
                                        time: 30 + 10 * Math.random(),
                                        onComplete: function (e) {
                                            e.parent && e.parent.removeChild(e);
                                        },
                                    }
                                );
                        }
                    }
                    function pt(t, s, a) {
                        let n = a;
                        for (let a = 0; a < n; a++) {
                            let a = Math.random() * Math.PI * 2,
                                n = 10 * Math.random();
                            var r = PIXI.Sprite.from("coin_awarded");
                            r.scale.set(0.3),
                                (r.x = t + (Math.cos(a) * n) / 2),
                                (r.y = s + (Math.sin(a) * n) / 2),
                                E.addChild(r),
                                (r.xCurve = 100 * Math.random()),
                                (r.yCurve = 100 * Math.random()),
                                Tweener.addTween(
                                    r,
                                    { x: t + Math.cos(a) * n, y: s + Math.sin(a) * n },
                                    {
                                        time: 5,
                                        transition: "easeOutQuad",
                                        onComplete: function (t) {
                                            (t.x_ = t.x),
                                                (t.y_ = t.y),
                                                Tweener.addTween(
                                                    t,
                                                    { x_: 550 + e / 2, y_: 200, scaleX: 0.2, scaleY: 0.2 },
                                                    {
                                                        time: 20 + 5 * Math.random(),
                                                        transition: "easeInQuad",
                                                        onUpdate: function (e, t) {
                                                            (e.x = e.x_), (e.y = e.y_);
                                                        },
                                                        onComplete: function (e) {
                                                            e.parent && e.parent.removeChild(e);
                                                        },
                                                    }
                                                );
                                        },
                                    }
                                );
                        }
                        (ye += a), Tweener.addTween(q, { value: ye }, { time: 5, delay: 25, transition: "linear" });
                        var i = C.getString("valueAdded");
                        i = i.replace("{num}", a);
                        var o = new PIXI.Text(i, { fontFamily: C.fontFamily, fontSize: 35, fill: 16777215, align: "center" });
                        o.anchor.set(0.5),
                            o.scale.set(0.5),
                            (o.x = t),
                            (o.y = s),
                            E.addChild(o),
                            Tweener.addTween(
                                o,
                                { scaleX: 1, scaleY: 1 },
                                {
                                    time: 20,
                                    delay: 0,
                                    transition: "easeOutBack",
                                    onComplete: function (e) {
                                        Tweener.addTween(
                                            o,
                                            { alpha: 0, y: o.y - 50 },
                                            {
                                                time: 35,
                                                delay: 0,
                                                transition: "linear",
                                                onComplete: function (e) {
                                                    (e.visible = !1), e.parent.removeChild(e);
                                                },
                                            }
                                        );
                                    },
                                }
                            );
                    }
                    function gt(e) {
                        var t = "flawless",
                            s = 16777215;
                        switch (e) {
                            case "flawless":
                                (t = "flawless"), (s = 16776975);
                                break;
                            case "bonus_pink":
                                (t = "bonus"), (s = 15547386);
                                break;
                            case "bonus_green":
                                (t = "bonus"), (s = 826946);
                                break;
                            case "bonus_blue":
                                (t = "bonus"), (s = 30133);
                        }
                        var a = new PIXI.Text(C.getString(t), { fontFamily: C.fontFamily, fontSize: 120, fill: s, stroke: 0, strokeThickness: 24, align: "center" });
                        C.fitText(a, 720, 200),
                            a.anchor.set(0.5),
                            (a.x = 320),
                            (a.y = 830),
                            E.addChild(a),
                            Tweener.addTween(
                                a,
                                { scaleX: 0.8, scaleY: 0.8 },
                                {
                                    time: 20,
                                    delay: 0,
                                    transition: "easeOutBack",
                                    onComplete: function (e) {
                                        Tweener.addTween(
                                            a,
                                            { alpha: 0, y: a.y - 70 },
                                            {
                                                time: 35,
                                                delay: 0,
                                                transition: "linear",
                                                onComplete: function (e) {
                                                    (e.visible = !1), e.parent.removeChild(e);
                                                },
                                            }
                                        );
                                    },
                                }
                            );
                    }
                    function bt(e) {
                        var t = e < 0 ? C.getString("valueRemoved") : C.getString("valueAdded");
                        t = t.replace("{num}", Math.abs(e));
                        var s = new PIXI.Text(t, { fontFamily: C.fontFamily, fontSize: 35, fill: 16777215, align: "center" });
                        s.anchor.set(0.5),
                            s.scale.set(0.5),
                            (s.x = Math.random() > 0.5 ? 120 + 100 * Math.random() : 520 - 100 * Math.random()),
                            (s.y = 750 + 150 * Math.random()),
                            E.addChild(s),
                            e >= 100 && ((s.x = 400), (s.y = 920)),
                            e < 0 ? ((s.style.fill = 16744320), (s.style.fontSize = 50)) : e > 10 ? ((s.style.fill = 16776960), (s.style.fontSize = 60)) : ((s.style.fill = 16777215), (s.style.fontSize = 45)),
                            Tweener.addTween(
                                s,
                                { scaleX: 1, scaleY: 1 },
                                {
                                    time: 20,
                                    delay: 0,
                                    transition: "easeOutBack",
                                    onComplete: function (e) {
                                        Tweener.addTween(
                                            s,
                                            { alpha: 0, y: s.y - 50 },
                                            {
                                                time: 35,
                                                delay: 10,
                                                transition: "linear",
                                                onComplete: function (e) {
                                                    (e.visible = !1), e.parent.removeChild(e);
                                                },
                                            }
                                        );
                                    },
                                }
                            );
                    }
                    function ft(e) {
                        var t = new Animator.Animable(sprites.smoke_fx[0]);
                        t.anchor.set(0.5), t.scale.set(1), (t.x = e.x), (t.y = e.y), j.addChild(t), j.toLocal(t.position, E, t.position), t.addAnimation("anim", sprites.smoke_fx), t.setAnimation("anim", 0, 24), Animator.add(null, t, !0);
                    }
                    function mt(e, t) {
                        var s = new Animator.Animable(sprites.hit_explode[0]);
                        s.anchor.set(0.5), s.scale.set(2), (s.x = e), (s.y = t), E.addChild(s), s.addAnimation("anim", sprites.hit_explode), s.setAnimation("anim", 0, 24), Animator.add(null, s, !0);
                    }
                    function yt(e, t) {
                        var s = new Animator.Animable(sprites.smoke_fx[0]);
                        s.anchor.set(0.5), s.scale.set(1), (s.x = e), (s.y = t), E.addChild(s), s.addAnimation("anim", sprites.smoke_fx), s.setAnimation("anim", 0, 24), Animator.add(null, s, !0);
                    }
                    function xt(e) {
                        let t = [],
                            s = [0, 1, 2, 3, 4, 5, 6, 7, 8];
                        for (let a = 0; a < e; a++) {
                            let e = Math.round(Math.random() * (s.length - 1)),
                                a = s[e];
                            t.push({ id: a, boosted: Ue[a] }), s.splice(e, 1);
                        }
                        return t;
                    }
                    function It(e) {
                        for (let t = 0; t < ee.length; t++)
                            if (ee[t].id == e) {
                                ee.splice(t, 1);
                                break;
                            }
                        ee.push({ id: e, boosted: Ue[e] });
                    }
                    function wt() {
                        if (!_e && !te) {
                            AudioManager.play("cannon"), (te = !0);
                            var e = new PIXI.spine.Spine(PIXI.Loader.shared.resources.Shooting_fx.spineData);
                            e.scale.set(0.75),
                                (e.x = 5400),
                                (e.y = -80),
                                R.addChildAt(e, 57),
                                e.skeleton.setToSetupPose(),
                                e.state.setAnimation(0, "Shooting Fx", !1),
                                R.skeleton.setSkinByName("cannon versions/cannon_default"),
                                R.skeleton.setToSetupPose(),
                                R.state.setAnimation(0, "shooting_cannon", !1),
                                D.skeleton.setSkinByName("face expressions/angry"),
                                D.skeleton.setToSetupPose(),
                                D.state.setAnimation(0, "shooting_body", !1),
                                (L.visible = !1),
                                Tweener.addTween(R, { y: 1123 }, { time: 10 }),
                                Tweener.addTween(D, { y: 1123 }, { time: 10 });
                            var t = new i(ee[ee.length - we].id);
                            (t.x = 320),
                                (t.y = 900),
                                (t.speed = 30),
                                (t.direction = 0),
                                E.addChildZ(t, 5),
                                J.push(t),
                                we--,
                                me++,
                                (H.value = me),
                                setTimeout(() => {
                                    we > 0 && vt(),
                                        Tweener.addTween(R, { y: 1143 }, { time: 30 }),
                                        Tweener.addTween(D, { y: 1143 }, { time: 30 }),
                                        R.skeleton.setToSetupPose(),
                                        R.state.setAnimation(0, "idle_cannon", !0),
                                        D.skeleton.setSkinByName("face expressions/happy"),
                                        D.skeleton.setToSetupPose(),
                                        D.state.setAnimation(0, "idle_body", !0);
                                }, 200);
                        }
                    }
                    function vt() {
                        switch (((L.visible = !1), ee[ee.length - we].id)) {
                            case 1:
                                ee[ee.length - we].boosted
                                    ? (R.skeleton.setSkinByName("cannon versions/cannon_pink_batgirl"), R.skeleton.setToSetupPose(), L.setAnimation("batgirl", -1, 12), (L.texture = sprites.batgirl[0]))
                                    : (R.skeleton.setSkinByName("cannon versions/cannon_default_batgirl"), R.skeleton.setToSetupPose(), L.setAnimation("batgirl_boosted", -1, 12), (L.texture = sprites.batgirl_boosted[0]));
                                break;
                            case 6:
                                ee[ee.length - we].boosted
                                    ? (R.skeleton.setSkinByName("cannon versions/cannon_green_beastboy"), R.skeleton.setToSetupPose(), L.setAnimation("beastboy", -1, 12), (L.texture = sprites.beastboy[0]))
                                    : (R.skeleton.setSkinByName("cannon versions/cannon_default_beastboy"), R.skeleton.setToSetupPose(), L.setAnimation("beastboy_boosted", -1, 12), (L.texture = sprites.beastboy_boosted[0]));
                                break;
                            case 7:
                                ee[ee.length - we].boosted
                                    ? (R.skeleton.setSkinByName("cannon versions/cannon_green_greenlantern"), R.skeleton.setToSetupPose(), L.setAnimation("greenlantern", -1, 12), (L.texture = sprites.greenlantern[0]))
                                    : (R.skeleton.setSkinByName("cannon versions/cannon_default_greenlantern"), R.skeleton.setToSetupPose(), L.setAnimation("greenlantern_boosted", -1, 12), (L.texture = sprites.greenlantern_boosted[0]));
                                break;
                            case 2:
                                ee[ee.length - we].boosted
                                    ? (R.skeleton.setSkinByName("cannon versions/cannon_pink_raven"), R.skeleton.setToSetupPose(), L.setAnimation("raven", -1, 12), (L.texture = sprites.raven[0]))
                                    : (R.skeleton.setSkinByName("cannon versions/cannon_default_raven"), R.skeleton.setToSetupPose(), L.setAnimation("raven_boosted", -1, 12), (L.texture = sprites.raven_boosted[0]));
                                break;
                            case 8:
                                ee[ee.length - we].boosted
                                    ? (R.skeleton.setSkinByName("cannon versions/cannon_green_robin"), R.skeleton.setToSetupPose(), L.setAnimation("robin", -1, 12), (L.texture = sprites.robin[0]))
                                    : (R.skeleton.setSkinByName("cannon versions/cannon_default_robin"), R.skeleton.setToSetupPose(), L.setAnimation("robin_boosted", -1, 12), (L.texture = sprites.robin_boosted[0]));
                                break;
                            case 0:
                                ee[ee.length - we].boosted
                                    ? (R.skeleton.setSkinByName("cannon versions/cannon_pink_starfire"), R.skeleton.setToSetupPose(), L.setAnimation("starfire", -1, 12), (L.texture = sprites.starfire[0]))
                                    : (R.skeleton.setSkinByName("cannon versions/cannon_default_starfire"), R.skeleton.setToSetupPose(), L.setAnimation("starfire_boosted", -1, 12), (L.texture = sprites.starfire_boosted[0]));
                                break;
                            case 5:
                                ee[ee.length - we].boosted
                                    ? (R.skeleton.setSkinByName("cannon versions/cannon_blue_supergirl"), R.skeleton.setToSetupPose(), L.setAnimation("supergirl", -1, 12), (L.texture = sprites.supergirl[0]))
                                    : (R.skeleton.setSkinByName("cannon versions/cannon_default_supergirl"), R.skeleton.setToSetupPose(), L.setAnimation("supergirl_boosted", -1, 12), (L.texture = sprites.supergirl_boosted[0]));
                                break;
                            case 4:
                                ee[ee.length - we].boosted
                                    ? (R.skeleton.setSkinByName("cannon versions/cannon_blue_wonderwoman"), R.skeleton.setToSetupPose(), L.setAnimation("wonderwoman", -1, 12), (L.texture = sprites.wonderwoman[0]))
                                    : (R.skeleton.setSkinByName("cannon versions/cannon_default_wonderwoman"), R.skeleton.setToSetupPose(), L.setAnimation("wonderwoman_boosted", -1, 12), (L.texture = sprites.wonderwoman_boosted[0]));
                                break;
                            case 3:
                                ee[ee.length - we].boosted
                                    ? (R.skeleton.setSkinByName("cannon versions/cannon_blue_bubblebee"), R.skeleton.setToSetupPose(), L.setAnimation("bumblebee", -1, 12), (L.texture = sprites.bumblebee[0]))
                                    : (R.skeleton.setSkinByName("cannon versions/cannon_default_bubblebee"), R.skeleton.setToSetupPose(), L.setAnimation("bumblebee_boosted", -1, 12), (L.texture = sprites.bumblebee_boosted[0]));
                        }
                    }
                    function Pt() {
                        (S.saveData.coins = ye),
                            S.setSaveData(),
                            (se = !1),
                            ke
                                ? (W.showResult(ve > 0), (ce = !1), (O.visible = !1), (E.visible = !1), (A.visible = !1), (z.visible = !1), (W.visible = !0), W.setEnable(!0))
                                : (S.sendScore(ae),
                                  z.showResult(ae, S.saveData.highscore),
                                  z.setTheme(Math.round(2 * Math.random())),
                                  (ce = !1),
                                  (O.visible = !1),
                                  (E.visible = !1),
                                  (A.visible = !1),
                                  (z.visible = !0),
                                  (W.visible = !1),
                                  z.setEnable(!0),
                                  ae > S.saveData.highscore ? (AudioManager.play("highscore"), z.setColor(0), S.setHighScore(ae)) : (AudioManager.play("endgame"), z.setColor(2)));
                    }
                    function kt() {
                        if (ke)
                            return (function () {
                                let e = [];
                                for (let t = 0; t < ee.length; t++) {
                                    let s = Ge[ee[t].id];
                                    e.push(s.type);
                                }
                                let t = Ie,
                                    s = [],
                                    a = 0,
                                    n = [];
                                for (let e = 0; e < 14; e++) 7 != e && 0 != e && n.push(a), (a += (2 * Math.PI) / 14);
                                for (let a = 0; a < t; a++) {
                                    let t = Math.round(Math.random() * (n.length - 1)),
                                        a = Math.round(Math.random() * (e.length - 1)),
                                        r = 2 == fe ? e[a] : 3,
                                        i = n[t];
                                    s.push({ angle: i, type: r }), n.splice(t, 1), e.splice(a, 1);
                                }
                                return s;
                            })();
                        let e = [];
                        for (let t = 0; t < ee.length; t++) {
                            let s = Ge[ee[t].id];
                            e.push(s.type);
                        }
                        let t = Ie,
                            s = [],
                            a = 0,
                            n = [];
                        for (let e = 0; e < 15; e++) n.push(a), (a += (2 * Math.PI) / 15);
                        ne && ((t = 1), (n = [Math.PI]));
                        for (let a = 0; a < t; a++) {
                            let t = Math.round(Math.random() * (n.length - 1)),
                                a = Math.round(Math.random() * (e.length - 1)),
                                r = n[t],
                                i = e[a];
                            s.push({ angle: r, type: i }), n.splice(t, 1), e.splice(a, 1);
                        }
                        return s;
                    }
                    function Ct() {
                        let e = 0;
                        for (let t = 0; t < Ue.length; t++) 2 != t && 4 != t && Ue[t] && e++;
                        return e;
                    }
                    function Tt() {
                        let e = 100;
                        for (let t = 0; t < Ue.length; t++) {
                            Ue[t] && (e += 10);
                        }
                        return e;
                    }
                    var St = 0;
                    function Xt(e) {
                        for (Ze.begin(), St += e; St > 1; ) St--, lt(1);
                        Ze.end();
                    }
                    function Mt(e, t) {
                        (M.visible = !1), (T = PIXI.Loader.shared.resources.locale.data), (C.locale = T), Qe();
                    }
                    function At(e, t, s) {
                        var a = e.indexOf(t);
                        if (a > -1) {
                            if ((e.splice(a, 1), s)) return;
                            if (t.parent) t.parent.removeChild(t);
                        }
                        Tweener.extract(t), t.destroy();
                    }
                    function Ot(e) {
                        if (!e) return [];
                        for (var t = 0; t < e.length; t++) {
                            var s = e[t];
                            s.parent && s.parent.removeChild(s),
                                Tweener.extract(s),
                                s.trace && s.trace.kill(),
                                s.infoBox && s.infoBox.parent && s.infoBox.parent.removeChild(s.infoBox),
                                s.hpBar && s.hpBar.parent && s.hpBar.parent.removeChild(s.hpBar),
                                s.destroy && s.destroy();
                        }
                        return (e = []), [];
                    }
                    function Et(e, t) {
                        var s = e.x - t.x,
                            a = e.y - t.y;
                        return Math.sqrt(s * s + a * a);
                    }
                    return s;
                })();
                Object.defineProperties(PIXI.Container.prototype, {
                    scaleX: {
                        get: function () {
                            return this.scale.x;
                        },
                        set: function (e) {
                            this.scale.x = e;
                        },
                    },
                    scaleY: {
                        get: function () {
                            return this.scale.y;
                        },
                        set: function (e) {
                            this.scale.y = e;
                        },
                    },
                }),
                    (PIXI.ParseTile = function (e) {
                        var t = PIXI.Loader.shared.resources[e.source];
                        if (t) {
                            var s = [];
                            t.textures = {};
                            for (var a = 0, n = 0, r = 0; r < e.frames; r++) {
                                var i = e.source + "_" + r,
                                    o = new PIXI.Rectangle(a, n, e.frameWidth, e.frameHeight);
                                if (
                                    ((t.textures[i] = new PIXI.Texture(t.texture.baseTexture, o, o.clone())),
                                    (PIXI.utils.TextureCache[i] = t.textures[i]),
                                    s.push(t.textures[i]),
                                    (a += e.frameWidth) + e.frameWidth > t.texture.width && ((a = 0), (n += e.frameHeight) + e.frameHeight > t.texture.height))
                                )
                                    break;
                            }
                            return s;
                        }
                        return !1;
                    }),
                    (window.game = T);
                new k(null, T.create.bind(T));
            },
            function (e, t) {
                e.exports = (function () {
                    var e = {},
                        t = [];
                    (e.getCount = function () {
                        return t.length;
                    }),
                        (e.emit = function (e) {
                            t.push(e), e.init();
                        }),
                        (e.update = function (e) {
                            for (let s = 0; s < t.length; s++) t[s].alive ? t[s].update(e) : (t[s].kill(), t.splice(s, 1));
                        }),
                        (e.clear = function () {
                            for (let e = 0; e < t.length; e++) t[e].kill();
                            t = [];
                        });
                    var s = function (e, t) {
                        PIXI.Sprite.call(this, e),
                            (this._parentEmitter = t),
                            (this.startSpeed = { x: 0, y: 0 }),
                            (this.endSpeed = { x: 0, y: 0 }),
                            (this.angle = 0),
                            (this.angularSpeed = 0),
                            (this.startSize = 1),
                            (this.startColor = { r: 255, g: 255, b: 255 }),
                            (this.startAlpha = 1),
                            (this.lifeTime = 100),
                            (this._endAlpha = 0),
                            (this._endSize = 1),
                            (this._endColor = { r: 255, g: 255, b: 255 }),
                            (this._acceleration = { x: 0, y: 0 }),
                            (this._colorTransition = !1),
                            (this._speedTransition = !1),
                            (this._sizeTransition = !1),
                            (this._alphaTransition = !1),
                            (this._elapsedTime = 0),
                            (this._ease = null),
                            (this._alpha = 1),
                            (this._size = 1),
                            (this._velocity = { x: 0, y: 0 }),
                            (this._rotation = 0),
                            (this.alive = !0),
                            this.init(),
                            (this.anchor.x = 0.5),
                            (this.anchor.y = 0.5);
                    };
                    ((s.prototype = Object.create(PIXI.Sprite.prototype)).init = function () {
                        this.scale.set(this.startSize), (this._elapsedTime = 0), (this._velocity.x = this.startSpeed.x), (this._velocity.y = this.startSpeed.y), (this._rotation = this.angle);
                    }),
                        (s.prototype.resetProps = function () {
                            (this._elapsedTime = 0), (this._velocity.x = this.startSpeed.x), (this._velocity.y = this.startSpeed.y), (this._rotation = this.angle);
                        });
                    return (
                        (s.prototype.update = function (e) {
                            if (((this._elapsedTime += e), this._elapsedTime >= this.lifeTime)) return (this.alive = !1), -1;
                            var t = this._elapsedTime / this.lifeTime;
                            if (
                                (this._ease && (t = this._ease(t)),
                                this._alphaTransition && (this._alpha = (this._endAlpha - this.startAlpha) * t + this.startAlpha),
                                this._sizeTransition && (this._size = (this._endSize - this.startSize) * t + this.startSize),
                                this._speedTransition &&
                                    (this._velocity.x < this.endSpeed.x ? (this._velocity.x += this._acceleration.x * e) : this._velocity.x > this.endSpeed.x && (this._velocity.x -= this._acceleration.x * e),
                                    this._velocity.y < this.endSpeed.y ? (this._velocity.y += this._acceleration.y * e) : this._velocity.y > this.endSpeed.y && (this._velocity.y -= this._acceleration.y * e)),
                                this._colorTransition)
                            ) {
                                var s = t,
                                    a = Math.round((this._endColor.r - this.startColor.r) * s) + this.startColor.r,
                                    n = Math.round((this._endColor.g - this.startColor.g) * s) + this.startColor.g,
                                    r = Math.round((this._endColor.b - this.startColor.b) * s) + this.startColor.b;
                                this._tint = ColorMath.ToHex(a, n, r);
                            }
                            return this.angularSpeed && (this._rotation += this.angularSpeed), this.apply(), t;
                        }),
                        (s.prototype.apply = function () {
                            (this.x += this._velocity.x),
                                (this.y += this._velocity.y),
                                (this.rotation = this._rotation),
                                this._alphaTransition && (this.alpha = this._alpha),
                                (this.tint = this._tint),
                                this._sizeTransition && (this.scale.x = this.scale.y = this._size);
                        }),
                        (s.prototype.kill = function () {
                            this.parent && this.parent.removeChild(this), this.destroy();
                        }),
                        Object.defineProperties(s.prototype, {
                            endColor: {
                                set: function (e) {
                                    (this._endColor = e), "0xFFFFFF" != e && (this._colorTransition = !0);
                                },
                            },
                            acceleration: {
                                get: function () {
                                    return this._acceleration;
                                },
                                set: function (e) {
                                    (this._acceleration = e), (0 == e.x && 0 == e.y) || (this._speedTransition = !0);
                                },
                            },
                            endSize: {
                                set: function (e) {
                                    (this._endSize = e), (this._sizeTransition = !0);
                                },
                            },
                            endAlpha: {
                                set: function (e) {
                                    (this._endAlpha = e), (this._alphaTransition = !0);
                                },
                            },
                        }),
                        (e.Particle = s),
                        e
                    );
                })();
            },
            function (e, t) {
                e.exports = (function () {
                    const e = {
                            BLUE: { BODY: "enemy_circle_blue", SPIKE: "enemy_spike_blue", FACES: ["enemy_face_01_blue", "enemy_face_02_blue", "enemy_face_03_blue", "enemy_face_04_blue"] },
                            GREEN: { BODY: "enemy_circle_green", SPIKE: "enemy_spike_green", FACES: ["enemy_face_01_green", "enemy_face_02_green", "enemy_face_03_green", "enemy_face_04_green"] },
                            ORANGE: { BODY: "enemy_circle_orange", SPIKE: "enemy_spike_orange", FACES: ["enemy_face_01_orange", "enemy_face_02_orange", "enemy_face_03_orange", "enemy_face_04_orange"] },
                            PURPLE: { BODY: "enemy_circle_purple", SPIKE: "enemy_spike_purple", FACES: ["enemy_face_01_purple", "enemy_face_02_purple", "enemy_face_03_purple", "enemy_face_04_purple"] },
                        },
                        t = { 0: "BLUE", 1: "GREEN", 2: "ORANGE", 3: "PURPLE" },
                        s = [
                            { id: 0, texture_on: "weak_point_pink_om", texture_off: "weak_point_pink_off" },
                            { id: 1, texture_on: "weak_point_blue_on", texture_off: "weak_point_blue_off" },
                            { id: 2, texture_on: "weak_point_green_on", texture_off: "weak_point_green_off" },
                        ];
                    function a(e, t) {
                        var s = Math.abs(t - e) % (2 * Math.PI);
                        return s > Math.PI ? 2 * Math.PI - s : s;
                    }
                    function n() {
                        PIXI.Container.call(this);
                        var e = PIXI.Sprite.from("enemy_circle_blue");
                        e.anchor.set(0.5), this.addChild(e), (this.body = e), (this.body.texture = PIXI.utils.TextureCache.enemy_circle);
                        var t = new Animator.Animable(PIXI.utils.TextureCache.enemy_face_00);
                        t.anchor.set(0.5),
                            this.addChild(t),
                            t.addAnimation(
                                "blink",
                                [PIXI.utils.TextureCache.enemy_face_00, PIXI.utils.TextureCache.enemy_blink_01, PIXI.utils.TextureCache.enemy_blink_02, PIXI.utils.TextureCache.enemy_blink_03, PIXI.utils.TextureCache.enemy_blink_04],
                                [0, 1, 2, 3, 4, 3, 2, 1, 0]
                            ),
                            Animator.add(null, t, !1),
                            (this.face = t),
                            (this.face.texture = PIXI.utils.TextureCache.enemy_face_02),
                            (this.targets = []),
                            (this.projectiles = []),
                            (this._colorType = 0),
                            (this._faceType = 0),
                            (this._spikes = []),
                            (this._pickups = []),
                            (this._angle = 0),
                            (this._expression = { time: 0 }),
                            (this.alive = !0);
                    }
                    return (
                        (n.prototype = Object.create(PIXI.Container.prototype)),
                        (n.prototype.resetFace = function () {
                            (this.face.running = !1),
                                Tweener.extract(this._expression),
                                Tweener.addTween(
                                    this._expression,
                                    {},
                                    {
                                        time: 300,
                                        loop: -1,
                                        onComplete: function (e) {
                                            this.doBlink();
                                        }.bind(this),
                                    }
                                ),
                                (this.body.texture = PIXI.utils.TextureCache.enemy_circle),
                                (this.face.texture = PIXI.utils.TextureCache.enemy_face_02);
                            for (let e = 0; e < this._spikes.length; e++) this._spikes[e].texture = PIXI.utils.TextureCache.enemy_spike;
                        }),
                        (n.prototype.doBlink = function () {
                            (this.face.running = !0), this.face.setAnimation("blink", 0, 12);
                        }),
                        (n.prototype.showHit = function () {
                            (this.face.running = !1),
                                (this._expression.time = 0),
                                Tweener.addTween(
                                    this._expression,
                                    { time: 100 },
                                    {
                                        time: 20,
                                        onUpdate: function (e) {
                                            if (Math.round(e.time / 30) % 2 == 0) {
                                                (this.body.texture = PIXI.utils.TextureCache.purple_enemy_circle), (this.face.texture = PIXI.utils.TextureCache.purple_damaged_enemy_face);
                                                for (let e = 0; e < this._spikes.length; e++) this._spikes[e].texture = PIXI.utils.TextureCache.purple_enemy_spike;
                                            } else {
                                                (this.body.texture = PIXI.utils.TextureCache.red_enemy_circle), (this.face.texture = PIXI.utils.TextureCache.red_damaged_enemy_face);
                                                for (let e = 0; e < this._spikes.length; e++) this._spikes[e].texture = PIXI.utils.TextureCache.red_enemy_spike;
                                            }
                                        }.bind(this),
                                        onComplete: function () {
                                            (this.body.texture = PIXI.utils.TextureCache.enemy_circle), (this.face.texture = PIXI.utils.TextureCache.enemy_face_02);
                                            for (let e = 0; e < this._spikes.length; e++) this._spikes[e].texture = PIXI.utils.TextureCache.enemy_spike;
                                            Tweener.addTween(
                                                this._expression,
                                                {},
                                                {
                                                    time: 300,
                                                    loop: -1,
                                                    onComplete: function (e) {
                                                        this.doBlink();
                                                    }.bind(this),
                                                }
                                            );
                                        }.bind(this),
                                    }
                                );
                        }),
                        (n.prototype.showDeath = function () {
                            (this.face.running = !1),
                                (this._expression.time = 0),
                                Tweener.addTween(
                                    this._expression,
                                    { time: 100 },
                                    {
                                        time: 50,
                                        onUpdate: function (e) {
                                            if (Math.round(e.time / 20) % 2 == 0) {
                                                (this.body.texture = PIXI.utils.TextureCache.purple_enemy_circle), (this.face.texture = PIXI.utils.TextureCache.purple_dead_enemy_face);
                                                for (let e = 0; e < this._spikes.length; e++) this._spikes[e].texture = PIXI.utils.TextureCache.purple_enemy_spike;
                                            } else {
                                                (this.body.texture = PIXI.utils.TextureCache.red_enemy_circle), (this.face.texture = PIXI.utils.TextureCache.red_dead_enemy_face);
                                                for (let e = 0; e < this._spikes.length; e++) this._spikes[e].texture = PIXI.utils.TextureCache.red_enemy_spike;
                                            }
                                        }.bind(this),
                                        onComplete: function () {}.bind(this),
                                    }
                                );
                        }),
                        (n.prototype.updateAngle = function () {
                            (this.rotation = this._angle), (this.face.rotation = -this._angle);
                        }),
                        (n.prototype.clear = function () {
                            for (var e = 0; e < this.targets.length; e++) {
                                (t = this.targets[e]).parent && t.parent.removeChild(t), Tweener.extract(t), t.destroy && t.destroy();
                            }
                            for (e = 0; e < this.projectiles.length; e++) {
                                (t = this.projectiles[e]).parent && t.parent.removeChild(t), Tweener.extract(t), t.destroy && t.destroy();
                            }
                            for (e = 0; e < this._spikes.length; e++) {
                                (t = this._spikes[e]).parent && t.parent.removeChild(t), Tweener.extract(t), t.destroy && t.destroy();
                            }
                            for (e = 0; e < this._pickups.length; e++) {
                                var t;
                                (t = this._pickups[e]).parent && t.parent.removeChild(t), Tweener.extract(t), t.destroy && t.destroy();
                            }
                            (this._pickups = []), (this._spikes = []), (this.targets = []), (this.projectiles = []);
                        }),
                        (n.prototype.isWeakAngle = function () {
                            for (let e = 0; e < this.targets.length; e++) {
                                let t = this.targets[e];
                                if (!t.secured && Math.abs(((-this.rotation + Math.PI + 2 * Math.PI + Math.PI) % (2 * Math.PI)) - ((t.rotation + 2 * Math.PI) % (2 * Math.PI))) < 0.25) return !0;
                            }
                            return !1;
                        }),
                        (n.prototype.getWeakAngleType = function () {
                            for (let e = 0; e < this.targets.length; e++) {
                                let t = this.targets[e];
                                if (!t.secured && Math.abs(((-this.rotation + Math.PI + 2 * Math.PI + Math.PI) % (2 * Math.PI)) - ((t.rotation + 2 * Math.PI) % (2 * Math.PI))) < 0.25) return t.type;
                            }
                            return 0;
                        }),
                        (n.prototype.isTargetAngle = function (e, t) {
                            for (let e = 0; e < this._spikes.length; e++) {
                                let t = this._spikes[e];
                                if (Math.abs(((-this.rotation + 2 * Math.PI + Math.PI) % (2 * Math.PI)) - ((t.rotation + 2 * Math.PI) % (2 * Math.PI))) < 0.15) return !1;
                            }
                            return !0;
                        }),
                        (n.prototype.isAlreadySecured = function () {
                            for (let e = 0; e < this.projectiles.length; e++) {
                                let t = this.projectiles[e];
                                if (Math.abs(((-this.rotation + Math.PI / 2 + 2 * Math.PI + Math.PI / 2) % (2 * Math.PI)) - ((t.rotation + 2 * Math.PI) % (2 * Math.PI))) < 0.25) return !0;
                            }
                            return !1;
                        }),
                        (n.prototype.removeSecure = function () {
                            var e = this.projectiles.slice(0);
                            for (let s = 0; s < e.length; s++) {
                                let a = e[s];
                                if (Math.abs(((-this.rotation + Math.PI / 2 + 2 * Math.PI + Math.PI / 2) % (2 * Math.PI)) - ((a.rotation + 2 * Math.PI) % (2 * Math.PI))) < 0.25) {
                                    var t = this.projectiles.indexOf(a);
                                    if (t > -1) {
                                        if ((this.projectiles.splice(t, 1), a.parent)) a.parent.removeChild(a);
                                        return a;
                                    }
                                }
                            }
                        }),
                        (n.prototype.targetsSecured = function () {
                            for (let e = 0; e < this.targets.length; e++) {
                                if (!this.targets[e].secured) return !1;
                            }
                            return !0;
                        }),
                        (n.prototype.addProjectile = function (e, t) {
                            let a = -this.rotation + Math.PI / 2;
                            var n = new Animator.Animable(sprites.batgirl_attack[0]);
                            n.anchor.set(0.5), (n.anchor.y = 0.7), Animator.add(null, n, !0), (n.id = e);
                            let r = e;
                            1 == r
                                ? t
                                    ? ((n.texture = sprites.batgirl_attack_boosted[0]), n.addAnimation("anim", sprites.batgirl_attack_boosted))
                                    : ((n.texture = sprites.batgirl_attack[0]), n.addAnimation("anim", sprites.batgirl_attack))
                                : 6 == r
                                ? t
                                    ? ((n.texture = sprites.beastboy_attack_boosted[0]), n.addAnimation("anim", sprites.beastboy_attack_boosted))
                                    : ((n.texture = sprites.beastboy_attack[0]), n.addAnimation("anim", sprites.beastboy_attack))
                                : 7 == r
                                ? t
                                    ? ((n.texture = sprites.greenlantern_attack_boosted[0]), n.addAnimation("anim", sprites.greenlantern_attack_boosted))
                                    : ((n.texture = sprites.greenlantern_attack[0]), n.addAnimation("anim", sprites.greenlantern_attack))
                                : 2 == r
                                ? t
                                    ? ((n.texture = sprites.raven_attack_boosted[0]), n.addAnimation("anim", sprites.raven_attack_boosted))
                                    : ((n.texture = sprites.raven_attack[0]), n.addAnimation("anim", sprites.raven_attack))
                                : 8 == r
                                ? t
                                    ? ((n.texture = sprites.robin_attack_boosted[0]), n.addAnimation("anim", sprites.robin_attack_boosted))
                                    : ((n.texture = sprites.robin_attack[0]), n.addAnimation("anim", sprites.robin_attack))
                                : 0 == r
                                ? t
                                    ? ((n.texture = sprites.starfire_attack_boosted[0]), n.addAnimation("anim", sprites.starfire_attack_boosted))
                                    : ((n.texture = sprites.starfire_attack[0]), n.addAnimation("anim", sprites.starfire_attack))
                                : 5 == r
                                ? t
                                    ? ((n.texture = sprites.supergirl_attack_boosted[0]), n.addAnimation("anim", sprites.supergirl_attack_boosted))
                                    : ((n.texture = sprites.supergirl_attack[0]), n.addAnimation("anim", sprites.supergirl_attack))
                                : 4 == r
                                ? t
                                    ? ((n.texture = sprites.wonderwoman_attack_boosted[0]), n.addAnimation("anim", sprites.wonderwoman_attack_boosted))
                                    : ((n.texture = sprites.wonderwoman_attack[0]), n.addAnimation("anim", sprites.wonderwoman_attack))
                                : t
                                ? ((n.texture = sprites.bubblebee_attack_boosted[0]), n.addAnimation("anim", sprites.bubblebee_attack_boosted))
                                : ((n.texture = sprites.bubblebee_attack[0]), n.addAnimation("anim", sprites.bubblebee_attack)),
                                n.setAnimation("anim", -1, 12),
                                (n.x = 240 * Math.cos(a)),
                                (n.y = 240 * Math.sin(a)),
                                (n.rotation = a + Math.PI / 2),
                                this.addChild(n),
                                this.projectiles.push(n);
                            for (let e = 0; e < this.targets.length; e++) {
                                let t = this.targets[e];
                                if (!t.secured && Math.abs(((n.rotation + 2 * Math.PI + Math.PI) % (2 * Math.PI)) - ((t.rotation + 2 * Math.PI) % (2 * Math.PI))) < 0.25) {
                                    (t.projectile = n),
                                        (t.secured = !0),
                                        (t.blinkPeriod = 0),
                                        Tweener.addTween(
                                            t,
                                            { blinkPeriod: 100 },
                                            {
                                                time: 15,
                                                onUpdate: function (e) {
                                                    Math.floor(e.blinkPeriod / 20) % 2 == 0 ? (e.texture = PIXI.utils.TextureCache[s[e.type].texture_off]) : (e.texture = PIXI.utils.TextureCache[s[e.type].texture_on]);
                                                },
                                            }
                                        );
                                    break;
                                }
                            }
                        }),
                        (n.prototype.setTargets = function (n, r, i) {
                            for (let e = 0; e < n.length; e++) {
                                var o = PIXI.Sprite.from("weak_point_B_off");
                                (o.anchor.x = 0.5),
                                    (o.anchor.y = 0.55),
                                    (o.x = 200 * Math.cos(n[e].angle)),
                                    (o.y = 200 * Math.sin(n[e].angle)),
                                    (o.rotation = n[e].angle - Math.PI / 2),
                                    (o.secured = !1),
                                    (o.scale.y = -1),
                                    (o.type = n[e].type),
                                    this.addChild(o),
                                    (o.texture = PIXI.utils.TextureCache[s[n[e].type].texture_off]),
                                    this.targets.push(o);
                            }
                            let l = Math.min(Math.max(Math.round(Math.random() * i), Math.round(i / 2)), 20),
                                _ = (2 * Math.PI) / l;
                            for (let s = 0; s < l; s++) {
                                let n = !1;
                                for (let e = 0; e < this.targets.length; e++) {
                                    if (a(s * _, this.targets[e].rotation + Math.PI / 2) < 0.4) {
                                        n = !0;
                                        break;
                                    }
                                }
                                if (!n) {
                                    var c = PIXI.Sprite.from(e[t[this._colorType]].SPIKE);
                                    (c.anchor.x = 0.5), (c.anchor.y = 1), (c.x = 190 * Math.cos(s * _)), (c.y = 190 * Math.sin(s * _)), (c.rotation = s * _ + Math.PI / 2), this.addChild(c), this._spikes.push(c);
                                }
                            }
                            let h = (2 * Math.PI) / 20,
                                u = [];
                            for (let e = 0; e < 20; e++) {
                                let t = !1;
                                for (let s = 0; s < this._spikes.length; s++) {
                                    if (a(e * h, this._spikes[s].rotation - Math.PI / 2) < 0.4) {
                                        t = !0;
                                        break;
                                    }
                                }
                                t || u.push(e * h);
                            }
                            for (let e = 0; e < r.length && u.length; e++) {
                                let t = Math.round(Math.random() * (u.length - 1));
                                var d = PIXI.Sprite.from("coin_gameplay");
                                switch ((d.anchor.set(0.5), (d.angleA = u[t]), (d.x = 240 * Math.cos(d.angleA)), (d.y = 240 * Math.sin(d.angleA)), (d.rotation = d.angleA + Math.PI / 2), (d.alive = !0), this.addChild(d), r[e])) {
                                    case 0:
                                        (d.texture = PIXI.utils.TextureCache.coin_gameplay), (d.type = 0);
                                        break;
                                    case 1:
                                        (d.texture = PIXI.utils.TextureCache.heart_gameplay), (d.type = 1);
                                }
                                Tweener.addTween(d, { x: 250 * Math.cos(d.angleA), y: 250 * Math.sin(d.angleA) }, { time: 70, transition: "bow", loop: -1 }), this._pickups.push(d), u.splice(t, 1);
                            }
                        }),
                        (n.prototype.getPickups = function () {
                            return this._pickups;
                        }),
                        (n.prototype.getProjectiles = function () {
                            return this.projectiles;
                        }),
                        Object.defineProperties(n.prototype, {
                            rotationAngle: {
                                get: function () {
                                    return this._angle;
                                },
                                set: function (e) {
                                    (this._angle = e), this.updateAngle();
                                },
                            },
                        }),
                        n
                    );
                })();
            },
            function (e, t) {
                e.exports = (function () {
                    function e(e) {
                        PIXI.Container.call(this), (this._id = e || 0);
                        var t = PIXI.Sprite.from("batgirl_flying_blur");
                        switch ((t.scale.set(2), t.anchor.set(0.5), this.addChild(t), (this._sprite = t), this._id)) {
                            case 1:
                                this._sprite.texture = PIXI.utils.TextureCache.batgirl_flying_blur;
                                break;
                            case 6:
                                this._sprite.texture = PIXI.utils.TextureCache.beastboy_flying_blur;
                                break;
                            case 7:
                                this._sprite.texture = PIXI.utils.TextureCache.greenlantern_flying_blur;
                                break;
                            case 2:
                                this._sprite.texture = PIXI.utils.TextureCache.raven_flying_blur;
                                break;
                            case 8:
                                this._sprite.texture = PIXI.utils.TextureCache.robin_flying_blur;
                                break;
                            case 0:
                                this._sprite.texture = PIXI.utils.TextureCache.starfire_flying_blur;
                                break;
                            case 5:
                                this._sprite.texture = PIXI.utils.TextureCache.supergirl_flying_blur;
                                break;
                            case 4:
                                this._sprite.texture = PIXI.utils.TextureCache.wonderwoman_flying_blur;
                                break;
                            case 3:
                                this._sprite.texture = PIXI.utils.TextureCache.zatanna_flying_blur;
                        }
                    }
                    return (
                        (e.prototype = Object.create(PIXI.Container.prototype)),
                        Object.defineProperties(e.prototype, {
                            id: {
                                get: function () {
                                    return this._id;
                                },
                                set: function (e) {
                                    this._id = e;
                                },
                            },
                        }),
                        e
                    );
                })();
            },
            function (e, t) {
                e.exports = (function () {
                    const e = [
                        { id: 0, icon: "bullet_starfire", icon_boosted: "bullet_starfire_boosted", icon_off: "bullet_starfire_off" },
                        { id: 1, icon: "bullet_batgirl", icon_boosted: "bullet_batgirl_boosted", icon_off: "bullet_batgirl_off" },
                        { id: 2, icon: "bullet_raven", icon_boosted: "bullet_raven_boosted", icon_off: "bullet_raven_off" },
                        { id: 3, icon: "bullet_bublebee", icon_boosted: "bullet_bublebee_boosted", icon_off: "bullet_bumblebee_off" },
                        { id: 4, icon: "bullet_wonderwoman", icon_boosted: "bullet_wonderwoman_boosted", icon_off: "bullet_wonderwoman_off" },
                        { id: 5, icon: "bullet_supergirl", icon_boosted: "bullet_supergirl_boosted", icon_off: "bullet_supergirl_off" },
                        { id: 6, icon: "bullet_beastboy", icon_boosted: "bullet_beastboy_boosted", icon_off: "bullet_beastboy_off" },
                        { id: 7, icon: "bullet_greenlantern", icon_boosted: "bullet_greenlintern_boosted", icon_off: "bullet_greenlantern_off" },
                        { id: 8, icon: "bullet_robin", icon_boosted: "bullet_robin_boosted", icon_off: "bullet_robin_off" },
                    ];
                    function t() {
                        PIXI.Container.call(this);
                        var e = PIXI.Sprite.from("shots_counter_slice_loop_03");
                        e.anchor.set(0.5), (e.x = -85), this.addChild(e), (this.frame = e);
                        var t = PIXI.Sprite.from("shots_counter_side");
                        t.anchor.set(0.5), (t.anchor.y = 1), (t.x = -85), (t.y = -e.height / 2), this.addChild(t), (this.top = t);
                        var s = PIXI.Sprite.from("shots_counter_side");
                        s.anchor.set(0.5), (s.anchor.y = 1), (s.scale.y = -1), (s.x = -85), (s.y = e.height / 2), this.addChild(s), (this.bottom = s), (this._heroSet = []), (this._slots = []), (this._value = 0), (this._count = 0);
                    }
                    return (
                        (t.prototype = Object.create(PIXI.Container.prototype)),
                        (t.prototype.init = function (t) {
                            (this._heroSet = t), (this._count = t.length), (this.frame.height = 70 * this._count - 140), (this.top.y = -this.frame.height / 2), (this.bottom.y = this.frame.height / 2);
                            for (let e = 0; e < this._slots.length; e++) this.removeChild(this._slots[e]);
                            this._slots = [];
                            for (let a = 0; a < this._count; a++) {
                                var s = PIXI.Sprite.from(t[a].boosted ? e[t[a].id].icon_boosted : e[t[a].id].icon);
                                s.anchor.set(0.5), this.addChild(s), (s.x = 0), (s.y = (70 * this._count) / 2 - 35 - 70 * a), this._slots.push(s);
                            }
                        }),
                        (t.prototype.redraw = function () {
                            for (let t = 0; t < this._slots.length; t++) {
                                let s = this._slots[t];
                                t < this._value
                                    ? (s.texture = PIXI.utils.TextureCache[e[this._heroSet[t].id].icon_off])
                                    : (s.texture = PIXI.utils.TextureCache[this._heroSet[t].boosted ? e[this._heroSet[t].id].icon_boosted : e[this._heroSet[t].id].icon]);
                            }
                        }),
                        Object.defineProperties(t.prototype, {
                            value: {
                                get: function () {
                                    return this._value;
                                },
                                set: function (e) {
                                    (this._value = e), this.redraw();
                                },
                            },
                        }),
                        t
                    );
                })();
            },
            function (e, t) {
                e.exports = (function () {
                    function e(e) {
                        PIXI.Container.call(this);
                        var t = PIXI.Sprite.from("stage_base");
                        (t.anchor.x = 1), (t.anchor.y = 0.5), this.addChild(t);
                        var s = new PIXI.Text(e.getString("stage"), { fontFamily: e.fontFamily, fontSize: 50, fill: 16777215, align: "center" });
                        e.fitText(s, 160, 100), s.anchor.set(0.5), (s.x = -175), (s.y = 5), t.addChild(s);
                        var a = new PIXI.Text("0 ", { fontFamily: e.fontFamily, fontSize: 85, fill: 16777215, align: "center" });
                        a.anchor.set(0.5), (a.anchor.x = 1), (a.x = -10), (a.y = 0), this.addChild(a), (this.valueLabel = a), (this._value = 0);
                    }
                    return (
                        (e.prototype = Object.create(PIXI.Container.prototype)),
                        (e.prototype.redraw = function () {
                            this.valueLabel.text = this._value + 1 + "";
                        }),
                        Object.defineProperty(e.prototype, "value", {
                            set: function (e) {
                                (this._value = e), this.redraw();
                            },
                            get: function () {
                                return this._value;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        e
                    );
                })();
            },
            function (e, t) {
                e.exports = (function () {
                    function e(e) {
                        PIXI.Container.call(this);
                        var t = PIXI.Sprite.from("weak_points_bar_slice");
                        (t.anchor.x = 0.5), (t.anchor.y = 0.5), this.addChild(t), (this.frame = t);
                        var s = PIXI.Sprite.from("weak_points_bar_top");
                        (s.anchor.x = 0), (s.anchor.y = 0.5), (s.scale.x = -1), this.addChild(s), (this.edgeRight = s);
                        var a = PIXI.Sprite.from("weak_points_bar_top");
                        (a.anchor.x = 1), (a.anchor.y = 0.5), this.addChild(a), (this.edgeLeft = a);
                        var n = new PIXI.Text("0 ", { fontFamily: e.fontFamily, fontSize: 60, fill: 16777215, align: "center" });
                        n.anchor.set(0.5), (n.x = -10), (n.y = 0), this.addChild(n), (this.valueLabel = n), (this._value = 0);
                    }
                    return (
                        (e.prototype = Object.create(PIXI.Container.prototype)),
                        (e.prototype.redraw = function () {
                            (this.valueLabel.text = this._value + ""), (this.frame.width = 200), (this.edgeLeft.x = -this.frame.width / 2), (this.edgeRight.x = this.frame.width / 2 + this.edgeRight.width);
                        }),
                        Object.defineProperty(e.prototype, "value", {
                            set: function (e) {
                                (this._value = e), this.redraw();
                            },
                            get: function () {
                                return this._value;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        e
                    );
                })();
            },
            function (e, t) {
                e.exports = (function () {
                    function e() {
                        PIXI.Container.call(this);
                        var e = PIXI.Sprite.from("weak_points_bar_slice");
                        (e.anchor.x = 0), (e.anchor.y = 0.5), this.addChild(e), (this.frame = e);
                        var t = PIXI.Sprite.from("weak_points_bar_top");
                        (t.anchor.x = 0), (t.anchor.y = 0.5), (t.scale.x = -1), this.addChild(t), (this.edge = t), (this._slots = []), (this._value = 0), (this._captured = 0);
                    }
                    return (
                        (e.prototype = Object.create(PIXI.Container.prototype)),
                        (e.prototype.redraw = function () {
                            (this.frame.width = 40 * this._value + 35), (this.edge.x = this.frame.width + this.edge.width);
                            for (let e = 0; e < this._slots.length; e++) this.removeChild(this._slots[e]);
                            this._slots = [];
                            for (let t = 0; t < this._value; t++) {
                                var e = new Animator.Animable(sprites.heart_fx[0]);
                                e.anchor.set(0.5),
                                    this.addChildAt(e, 2),
                                    e.addAnimation("off", [PIXI.utils.TextureCache.heart_off, PIXI.utils.TextureCache.heart_off]),
                                    e.addAnimation("on", [PIXI.utils.TextureCache.heart_on, PIXI.utils.TextureCache.heart_on]),
                                    e.addAnimation("active", sprites.heart_fx),
                                    Animator.add(null, e, !1),
                                    (e.x = 40 * t + 37),
                                    (e.y = 0),
                                    this._slots.push(e);
                            }
                        }),
                        (e.prototype.updateCaptured = function () {
                            for (let e = 0; e < this._slots.length; e++) {
                                let t = this._slots[e];
                                e < 3 - this._captured
                                    ? (t.scale.set(1), (t.texture = PIXI.utils.TextureCache.heart_off), t.setAnimation("off", 0, 24))
                                    : (t.scale.set(1), (t.texture = PIXI.utils.TextureCache.heart_on), this._captured > 1 ? t.setAnimation("on", 0, 24) : t.setAnimation("active", -1, 24));
                            }
                        }),
                        Object.defineProperty(e.prototype, "captured", {
                            set: function (e) {
                                (this._captured = e), this.updateCaptured();
                            },
                            get: function () {
                                return this._captured;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "value", {
                            set: function (e) {
                                (this._value = e), this.redraw();
                            },
                            get: function () {
                                return this._value;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        e
                    );
                })();
            },
            function (e, t) {
                e.exports = (function () {
                    function e(e, t) {
                        PIXI.Container.call(this);
                        var s = PIXI.Sprite.from("assets/loading/slice_background.png");
                        this.addChild(s);
                        var a = PIXI.Sprite.from("assets/loading/all_characters.png");
                        (a.anchor.x = 0.5), (a.anchor.y = 0.5), (a.x = e / 2), (a.y = t / 2), this.addChild(a);
                        var n = PIXI.Sprite.from("assets/loading/slice_blue_light.png");
                        (n.anchor.x = 0.5), (n.x = e / 2), this.addChild(n);
                        var r = PIXI.Sprite.from("assets/loading/small_black_triangle.png");
                        (r.anchor.x = 0.5), (r.anchor.y = 1), (r.x = e / 2), (r.y = t), this.addChild(r);
                        var i = PIXI.Sprite.from("assets/loading/solid_black.png");
                        (i.anchor.x = 0.5), (i.x = e / 2), (i.height = t), this.addChild(i), (this.fill = i);
                        var o = PIXI.Sprite.from("assets/loading/logo_starro_attacks.png");
                        (o.anchor.x = 0.5), (o.anchor.y = 0.5), (o.x = e / 2), (o.y = 0.75 * t), this.addChild(o), (this._width = e), (this._height = t), (this._value = 0);
                    }
                    return (
                        (e.prototype = Object.create(PIXI.Container.prototype)),
                        (e.prototype.redraw = function () {
                            this.fill.height = this._height - this._value * this._height;
                        }),
                        Object.defineProperty(e.prototype, "value", {
                            set: function (e) {
                                (this._value = e), this._value > 1 && (this._value = 1), this.redraw();
                            },
                            get: function () {
                                return this._value;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        e
                    );
                })();
            },
            function (e, t, s) {
                const a = s(0),
                    n = s(13),
                    r = s(14),
                    i = s(30);
                e.exports = (function () {
                    const e = [],
                        t = [
                            { x: 49, y: 427 },
                            { x: 49, y: 339 },
                            { x: 63, y: 255 },
                            { x: 205, y: 110 },
                            { x: 320, y: 82 },
                            { x: 436, y: 110 },
                            { x: 577, y: 254 },
                            { x: 591, y: 339 },
                            { x: 591, y: 427 },
                        ],
                        s = [
                            { x: 103, y: 425 },
                            { x: 109, y: 343 },
                            { x: 124, y: 280 },
                            { x: 226, y: 179 },
                            { x: 320, y: 162 },
                            { x: 414, y: 178 },
                            { x: 516, y: 276 },
                            { x: 532, y: 342 },
                            { x: 537, y: 425 },
                        ],
                        o = [
                            { x: 300, y: 725 },
                            { x: 350, y: 710 },
                            { x: 330, y: 710 },
                            { x: 320, y: 700 },
                            { x: 320, y: 730 },
                            { x: 330, y: 740 },
                            { x: 305, y: 710 },
                            { x: 315, y: 710 },
                            { x: 375, y: 715 },
                        ],
                        l = [
                            {
                                name: "STARFIRE",
                                color: "0xff00ff",
                                ground: "characters_base_pink",
                                fx: "fx_pink",
                                texture: "starfire",
                                texture_boosted: "starfire_boosted",
                                ico: "character_starfire",
                                ico_boosted: "character_starfire_boosted",
                                ico_selected: "character_starfire_selected",
                                ico_boosted_selected: "character_starfire_boosted_selected",
                            },
                            {
                                name: "BATGIRL",
                                color: "0xff00ff",
                                ground: "characters_base_pink",
                                fx: "fx_pink",
                                texture: "batgirl",
                                texture_boosted: "batgirl_boosted",
                                ico: "character_batgirl",
                                ico_boosted: "character_batgirl_boosted",
                                ico_selected: "character_batgirl_selected",
                                ico_boosted_selected: "character_batgirl_boosted_selected",
                            },
                            {
                                name: "RAVEN",
                                color: "0xff00ff",
                                ground: "characters_base_pink",
                                fx: "fx_pink",
                                texture: "raven",
                                texture_boosted: "raven_boosted",
                                ico: "character_raven",
                                ico_boosted: "character_raven_boosted",
                                ico_selected: "character_raven_selected",
                                ico_boosted_selected: "character_raven_boosted_selected",
                            },
                            {
                                name: "BUMBLE BEE",
                                color: "0x00ffff",
                                ground: "characters_base_blue",
                                fx: "fx_blue",
                                texture: "bumblebee",
                                texture_boosted: "bumblebee_boosted",
                                ico: "character_bumblebee",
                                ico_boosted: "character_bumblebee_boosted",
                                ico_selected: "character_bumblebee_selected",
                                ico_boosted_selected: "character_bumblebee_boosted_selected",
                            },
                            {
                                name: "WONDER WOMAN",
                                color: "0x00ffff",
                                ground: "characters_base_blue",
                                fx: "fx_blue",
                                texture: "wonderwoman",
                                texture_boosted: "wonderwoman_boosted",
                                ico: "character_wonderwoman",
                                ico_boosted: "character_wonderwoman_boosted",
                                ico_selected: "character_wonderwoman_selected",
                                ico_boosted_selected: "character_wonderwoman_boosted_selected",
                            },
                            {
                                name: "SUPERGIRL",
                                color: "0x00ffff",
                                ground: "characters_base_blue",
                                fx: "fx_blue",
                                texture: "supergirl",
                                texture_boosted: "supergirl_boosted",
                                ico: "character_supergirl",
                                ico_boosted: "character_supergirl_boosted",
                                ico_selected: "character_supergirl_selected",
                                ico_boosted_selected: "character_supergirl_boosted_selected",
                            },
                            {
                                name: "BEAST BOY",
                                color: "0x4fea00",
                                ground: "characters_base_green",
                                fx: "fx_green",
                                texture: "beastboy",
                                texture_boosted: "beastboy_boosted",
                                ico: "character_beastboy",
                                ico_boosted: "character_beastboy_boosted",
                                ico_selected: "character_beastboy_selected",
                                ico_boosted_selected: "character_beastboy_boosted_selected",
                            },
                            {
                                name: "GREEN LANTERN",
                                color: "0x4fea00",
                                ground: "characters_base_green",
                                fx: "fx_green",
                                texture: "greenlantern",
                                texture_boosted: "greenlantern_boosted",
                                ico: "character_greenlintern",
                                ico_boosted: "character_greenlintern_boosted",
                                ico_selected: "character_greenlintern_selected",
                                ico_boosted_selected: "character_greenlintern_boosted_selected",
                            },
                            {
                                name: "ROBIN",
                                color: "0x4fea00",
                                ground: "characters_base_green",
                                fx: "fx_green",
                                texture: "robin",
                                texture_boosted: "robin_boosted",
                                ico: "character_robin",
                                ico_boosted: "character_robin_boosted",
                                ico_selected: "character_robin_selected",
                                ico_boosted_selected: "character_robin_boosted_selected",
                            },
                        ],
                        _ = [
                            { ico: "starrogate_01_white", ico_boosted: "starrogate_01_boosted", glow: "glow_pink" },
                            { ico: "starrogate_02_white", ico_boosted: "starrogate_02_boosted", glow: "glow_pink" },
                            { ico: "starrogate_03_white", ico_boosted: "starrogate_03_boosted", glow: "glow_pink" },
                            { ico: "starrogate_04_white", ico_boosted: "starrogate_04_boosted", glow: "glow_blue" },
                            { ico: "starrogate_05_white", ico_boosted: "starrogate_05_boosted", glow: "glow_blue" },
                            { ico: "starrogate_06_white", ico_boosted: "starrogate_06_boosted", glow: "glow_blue" },
                            { ico: "starrogate_07_white", ico_boosted: "starrogate_07_boosted", glow: "glow_green" },
                            { ico: "starrogate_08_white", ico_boosted: "starrogate_08_boosted", glow: "glow_green" },
                            { ico: "starrogate_09_white", ico_boosted: "starrogate_09_boosted", glow: "glow_green" },
                        ];
                    function c(e, o) {
                        PIXI.Container.call(this);
                        var c = this,
                            h = PIXI.Sprite.from("wall_center");
                        h.anchor.set(0.5), (h.x = 320), (h.y = 568.5), this.addChild(h);
                        var u = PIXI.Sprite.from("ground_center");
                        (u.anchor.x = 0.5), (u.anchor.y = 0.5), (u.x = 320), (u.y = 953), this.addChild(u);
                        var d = PIXI.Sprite.from("starrogate_base");
                        (d.anchor.x = 0.5), (d.anchor.y = 0.5), (d.x = 320), (d.y = 354), this.addChild(d);
                        var p = new Animator.Animable(sprites.door_closed_idle[0]);
                        p.anchor.set(0.5),
                            (p.x = 320),
                            (p.y = 437),
                            this.addChild(p),
                            (this.door = p),
                            p.addAnimation("closed", sprites.door_closed_idle, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]),
                            p.addAnimation("open", sprites.door_open_idle, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
                            p.addAnimation("opening", sprites.door_opening),
                            p.setAnimation("closed", -1, 12),
                            Animator.add(null, p, !1);
                        var g = PIXI.Sprite.from("characters_base");
                        (g.anchor.x = 0.5), (g.anchor.y = 0.5), (g.x = 320), (g.y = 774), this.addChild(g);
                        var b = PIXI.Sprite.from("characters_base_blue");
                        (b.anchor.x = 0.5), (b.anchor.y = 0.5), (b.x = 320), (b.y = 697), this.addChild(b), (this._baseGround = b);
                        var f = new Animator.Animable(sprites.boosted_fx_blue[0]);
                        f.anchor.set(0.5),
                            (f.anchor.y = 1),
                            f.scale.set(1),
                            (f.x = 320),
                            (f.y = 735),
                            this.addChild(f),
                            (this._groundFx = f),
                            f.addAnimation("fx_pink", sprites.boosted_fx_pink),
                            f.addAnimation("fx_blue", sprites.boosted_fx_blue),
                            f.addAnimation("fx_green", sprites.boosted_fx_green),
                            Animator.add(null, f, !1);
                        var m = new Animator.Animable(sprites.batgirl_boosted[0]);
                        m.anchor.set(0.5),
                            (m.anchor.y = 1),
                            m.scale.set(1),
                            (m.x = 320),
                            (m.y = 700),
                            this.addChild(m),
                            (this._character = m),
                            m.addAnimation("batgirl_boosted", sprites.batgirl_boosted),
                            m.addAnimation("batgirl", sprites.batgirl),
                            m.addAnimation("beastboy_boosted", sprites.beastboy_boosted),
                            m.addAnimation("beastboy", sprites.beastboy),
                            m.addAnimation("greenlantern_boosted", sprites.greenlantern_boosted),
                            m.addAnimation("greenlantern", sprites.greenlantern),
                            m.addAnimation("raven_boosted", sprites.raven_boosted),
                            m.addAnimation("raven", sprites.raven),
                            m.addAnimation("robin_boosted", sprites.robin_boosted),
                            m.addAnimation("robin", sprites.robin),
                            m.addAnimation("starfire_boosted", sprites.starfire_boosted),
                            m.addAnimation("starfire", sprites.starfire),
                            m.addAnimation("supergirl_boosted", sprites.supergirl_boosted),
                            m.addAnimation("supergirl", sprites.supergirl),
                            m.addAnimation("wonderwoman_boosted", sprites.wonderwoman_boosted),
                            m.addAnimation("wonderwoman", sprites.wonderwoman),
                            m.addAnimation("zatanna_boosted", sprites.zatanna_boosted),
                            m.addAnimation("zatanna", sprites.zatanna),
                            m.addAnimation("bumblebee_boosted", sprites.bumblebee_boosted),
                            m.addAnimation("bumblebee", sprites.bumblebee),
                            m.setAnimation("batgirl", 0, 24),
                            Animator.add(null, m, !1);
                        var y = PIXI.Sprite.from("roof_lights_slice");
                        (y.scale.x = -1), (y.anchor.x = 0.5), (y.anchor.y = 0.5), (y.x = 139), (y.y = 4), this.addChild(y);
                        var x = PIXI.Sprite.from("roof_lights_slice");
                        (x.anchor.x = 0.5), (x.anchor.y = 0.5), (x.x = 503), (x.y = 4), this.addChild(x);
                        var I = PIXI.Sprite.from("roof_center");
                        (I.anchor.x = 0.5), (I.anchor.y = 0.5), (I.x = 320), (I.y = 10), this.addChild(I);
                        var w = PIXI.Sprite.from("roof_center");
                        (w.scale.y = -1), (w.scale.x = -1), (w.anchor.x = 0.5), (w.anchor.y = 0.5), (w.x = 320), (w.y = 1140), this.addChild(w);
                        var v = new PIXI.Container();
                        (v.x = 450), (v.y = 7), this.addChild(v);
                        var P = PIXI.Sprite.from("base_coin_counter");
                        v.addChild(P);
                        var k = PIXI.Sprite.from("base_coin_extreme");
                        (k.anchor.x = 1), (k.x = 2), v.addChild(k);
                        var C = PIXI.Sprite.from("icon_coin_counter");
                        C.anchor.set(0.5), (C.x = 170), (C.y = 32), v.addChild(C);
                        var T = new PIXI.Text("0 ", { fontFamily: i.fontFamily, fontSize: 60, fill: 16777215, align: "center" });
                        T.anchor.set(0.5), (T.anchor.x = 1), (T.x = 125), (T.y = 32), v.addChild(T), (this.coinsValueLabel = T);
                        var S = new r(i);
                        (S.x = e), (S.y = 130), this.addChild(S), (S.value = 100), (this.scoreBonusBar = S), (this._characterSlots = []);
                        for (let e = 0; e < t.length; e++) {
                            var X = PIXI.Sprite.from(l[e].ico);
                            X.anchor.set(0.5),
                                (X.position = t[e]),
                                (X.id = e),
                                this.addChild(X),
                                this._characterSlots.push(X),
                                (X.interactive = !0),
                                X.on("pointertap", function () {
                                    (c._selectIndex = this.id), c.updateSelect();
                                });
                        }
                        this._lockSlots = [];
                        for (let e = 0; e < s.length; e++) {
                            var M = PIXI.Sprite.from(_[e].ico);
                            M.anchor.set(0.5), (M.position = s[e]), this.addChild(M);
                            var A = PIXI.Sprite.from("glow_white");
                            A.anchor.set(0.5), M.addChild(A), (M.glow = A), this._lockSlots.push(M);
                        }
                        var O = new PIXI.Text(i.getString("BEAST BOY"), { fontFamily: i.fontFamily, fontSize: 22, fill: 12111080, align: "center" });
                        O.anchor.set(0.5), (O.scale.y = 1.5), (O.x = 320), (O.y = 815), this.addChild(O), (this._nameLabel = O);
                        var E = new PIXI.Text(i.getString("BOOSTED!"), { fontFamily: i.fontFamily, fontSize: 30, fill: 16777215, align: "center" });
                        E.anchor.set(0.5), (E.scale.y = 1.5), (E.x = 320), (E.y = 860), this.addChild(E), (this._boosterLabel = E);
                        var F = new n(i);
                        (F.x = 320), (F.y = 860), this.addChild(F), (F.value = "---"), (this._prizeBar = F);
                        var z = new a(PIXI.utils.TextureCache.button_upgrade);
                        z.anchor.set(0.5),
                            (z.x = 220),
                            (z.y = 1011),
                            z.registerState("down", PIXI.utils.TextureCache.button_upgrade_pressed),
                            z.registerState("disabled", PIXI.utils.TextureCache.button_upgrade_off),
                            this.addChild(z),
                            z.on(
                                "pointertap",
                                function () {
                                    this.emit("upgrade", this._selectIndex);
                                }.bind(this)
                            ),
                            z.setEnable(!1),
                            (this.btnUpgrade = z);
                        var W = new PIXI.Text(i.getString("UPGRADE"), { fontFamily: i.fontFamily, fontSize: 64, fill: 16777215, stroke: 0, strokeThickness: 6, align: "center" });
                        i.fitText(W, 280, 100), W.anchor.set(0.5), z.addChild(W), (this.btnUpgradeLabel = W);
                        var B = new a(PIXI.utils.TextureCache.button_starro);
                        (B.visible = !1),
                            B.anchor.set(0.5),
                            (B.x = 220),
                            (B.y = 1011),
                            B.registerState("down", PIXI.utils.TextureCache.button_starro_pressed),
                            B.registerState("disabled", PIXI.utils.TextureCache.button_starro_inactive),
                            this.addChild(B),
                            B.on(
                                "pointertap",
                                function () {
                                    this.emit("starro");
                                }.bind(this)
                            ),
                            (this.btnStarro = B);
                        var j = new PIXI.Text(i.getString("STARRO"), { fontFamily: i.fontFamily, fontSize: 64, fill: 16777215, stroke: 0, strokeThickness: 6, align: "center" });
                        i.fitText(j, 280, 100), j.anchor.set(0.5), B.addChild(j), (this.btnStarroLabelMain = j);
                        var H = new PIXI.Text(i.getString("STARRO"), { fontFamily: i.fontFamily, fontSize: 64, fill: 16777215, stroke: 0, strokeThickness: 6, align: "center" });
                        i.fitText(H, 180, 100), H.anchor.set(0.5), (H.alpha = 0.5), (H.x = -55), (H.y = 5), B.addChild(H), (this.btnStarroLabelInactive = H);
                        var L = new a(PIXI.utils.TextureCache.button_unlock);
                        (L.visible = !1),
                            L.anchor.set(0.5),
                            (L.x = 220),
                            (L.y = 1011),
                            L.registerState("down", PIXI.utils.TextureCache.button_unlock_pressed),
                            L.registerState("disabled", PIXI.utils.TextureCache.button_unlock_pressed),
                            this.addChild(L),
                            L.on(
                                "pointertap",
                                function () {
                                    this.emit("unlock", this._selectIndex);
                                }.bind(this)
                            ),
                            (this.btnUnlock = L);
                        var D = new PIXI.BitmapText("1/9", { fontName: "starro_font", fontSize: 30, fill: 16777215, align: "right" });
                        D.anchor.set(0.5), (D.alpha = 0.45), (D.x = 105), (D.y = -12), (D.visible = !1), B.addChild(D), (B.counter = D);
                        var R = new a(PIXI.utils.TextureCache.button_play);
                        R.anchor.set(0.5),
                            (R.x = 487),
                            (R.y = 1026),
                            R.registerState("down", PIXI.utils.TextureCache.button_play_pressed),
                            this.addChild(R),
                            R.on(
                                "pointertap",
                                function () {
                                    this.emit("play");
                                }.bind(this)
                            ),
                            (this.btnPlay = R);
                        var U = new a(PIXI.utils.TextureCache.button_arrow);
                        (U.scale.x = -1),
                            U.anchor.set(0.5),
                            (U.x = 50),
                            (U.y = 559),
                            U.registerState("down", PIXI.utils.TextureCache.button_arrow_pressed),
                            this.addChild(U),
                            U.on(
                                "pointertap",
                                function () {
                                    this.selectLeft();
                                }.bind(this)
                            ),
                            (this.btnLeft = U);
                        var N = new a(PIXI.utils.TextureCache.button_arrow);
                        N.anchor.set(0.5),
                            (N.x = 589),
                            (N.y = 559),
                            N.registerState("down", PIXI.utils.TextureCache.button_arrow_pressed),
                            this.addChild(N),
                            N.on(
                                "pointertap",
                                function () {
                                    this.selectRight();
                                }.bind(this)
                            ),
                            (this.btnRight = N),
                            (this._stateCosts = 0),
                            (this._states = [!1, !1, !1, !1, !1, !1, !1, !1, !1]),
                            (this._enabled = !0),
                            (this._selectIndex = 0),
                            (this._coins = 0),
                            this.updateSelect();
                    }
                    return (
                        (c.prototype = Object.create(PIXI.Container.prototype)),
                        (c.prototype.setCoins = function (e) {
                            (this._coins = e), (this.coinsValueLabel.text = this._coins + ""), this.updateSelect();
                        }),
                        (c.prototype.setStateCosts = function (e) {
                            (this._stateCosts = e), this.updateSelect();
                        }),
                        (c.prototype.setBonus = function (e) {
                            this.scoreBonusBar.value = e;
                        }),
                        (c.prototype.updateStates = function (e) {
                            this.canStarro(this._states)
                                ? (this.door.texture = PIXI.utils.TextureCache.door_opened)
                                : this.canStarro(e)
                                ? this.door.setAnimation(
                                      "opening",
                                      0,
                                      12,
                                      function () {
                                          this.door.setAnimation("open", -1, 12);
                                      }.bind(this)
                                  )
                                : (this.door.texture = PIXI.utils.TextureCache.door_closed);
                            for (let t = 0; t < e.length; t++) {
                                let s = e[t],
                                    a = this._lockSlots[t];
                                s
                                    ? ((a.texture = PIXI.utils.TextureCache[_[t].ico_boosted]), (a.glow.texture = PIXI.utils.TextureCache[_[t].glow]))
                                    : ((a.texture = PIXI.utils.TextureCache[_[t].ico]), (a.glow.texture = PIXI.utils.TextureCache.glow_white)),
                                    (this._states[t] = e[t]);
                            }
                            this.updateSelect();
                        }),
                        (c.prototype.setEnable = function (e) {
                            (this._enabled = e),
                                this.btnRight.setEnable(e),
                                this.btnLeft.setEnable(e),
                                this.btnPlay.setEnable(e),
                                this.btnUpgrade.setEnable(e && this._coins >= this._stateCosts),
                                (this.btnUpgradeLabel.alpha = this.btnUpgrade.interactive ? 1 : 0.5),
                                this.btnStarro.setEnable(e && this.canStarro(this._states)),
                                (this.btnStarroLabelMain.visible = e),
                                (this.btnStarroLabelInactive.visible = !e),
                                this.btnUnlock.setEnable(e);
                            for (let t = 0; t < this._characterSlots.length; t++) this._characterSlots[t].interactive = e;
                        }),
                        (c.prototype.selectLeft = function () {
                            (this._selectIndex = (9 + this._selectIndex - 1) % 9), this.updateSelect();
                        }),
                        (c.prototype.selectRight = function () {
                            (this._selectIndex = (9 + this._selectIndex + 1) % 9), this.updateSelect();
                        }),
                        (c.prototype.updateSelect = function () {
                            this._character.setAnimation(this._states[this._selectIndex] ? l[this._selectIndex].texture_boosted : l[this._selectIndex].texture, -1, 12),
                                (this._character.position = o[this._selectIndex]),
                                (this._nameLabel.text = i.getString(l[this._selectIndex].name)),
                                (this._prizeBar.value = this._stateCosts);
                            for (let e = 0; e < this._characterSlots.length; e++) {
                                this._characterSlots[e].texture = this._states[e] ? PIXI.utils.TextureCache[l[e].ico_boosted] : PIXI.utils.TextureCache[l[e].ico];
                            }
                            if (this._states[this._selectIndex]) {
                                (this._nameLabel.y = 815),
                                    (this._nameLabel.style.fill = l[this._selectIndex].color),
                                    (this._boosterLabel.visible = !0),
                                    (this._prizeBar.visible = !1),
                                    (this._baseGround.visible = !0),
                                    (this._baseGround.texture = PIXI.utils.TextureCache[l[this._selectIndex].ground]),
                                    (this._groundFx.visible = !0),
                                    this._groundFx.setAnimation(l[this._selectIndex].fx, -1, 24),
                                    (this.btnStarro.visible = !0),
                                    this.btnStarro.setEnable(this.canStarro(this._states));
                                var t = i.getString("starroCount");
                                (t = t.replace("{num}", this.sumStates(this._states))),
                                    this.canStarro(this._states) ? (this.btnStarro.counter.visible = !1) : ((this.btnStarro.counter.visible = !0), (this.btnStarro.counter.text = t)),
                                    (this.btnUnlock.visible = !1),
                                    (this.btnUpgrade.visible = !1),
                                    this.btnUpgrade.setEnable(!1),
                                    (this._characterSlots[this._selectIndex].texture = PIXI.utils.TextureCache[l[this._selectIndex].ico_boosted_selected]);
                            } else
                                (this._nameLabel.style.fill = 16777215),
                                    (this._boosterLabel.visible = !1),
                                    (this._baseGround.visible = !1),
                                    (this._groundFx.visible = !1),
                                    (this.btnStarro.visible = !1),
                                    this.btnStarro.setEnable(!1),
                                    e.indexOf(this._selectIndex) >= 0
                                        ? ((this.btnUnlock.visible = !0), (this.btnUpgrade.visible = !1), (this._nameLabel.y = 840), (this._prizeBar.visible = !1))
                                        : ((this.btnUnlock.visible = !1),
                                          (this.btnUpgrade.visible = !0),
                                          this.btnUpgrade.setEnable(this._coins >= this._stateCosts && this._enabled),
                                          (this._nameLabel.y = 815),
                                          (this._prizeBar.visible = !0)),
                                    (this._characterSlots[this._selectIndex].texture = PIXI.utils.TextureCache[l[this._selectIndex].ico_selected]);
                            (this.btnUpgradeLabel.alpha = this.btnUpgrade.interactive ? 1 : 0.5), (this.btnStarroLabelMain.visible = this.btnStarro.interactive), (this.btnStarroLabelInactive.visible = !this.btnStarro.interactive);
                        }),
                        (c.prototype.canStarro = function (e) {
                            for (let t = 0; t < e.length; t++) if (!e[t]) return !1;
                            return !0;
                        }),
                        (c.prototype.sumStates = function (e) {
                            let t = 0;
                            for (let s = 0; s < e.length; s++) e[s] && t++;
                            return t;
                        }),
                        c
                    );
                })();
            },
            function (e, t) {
                e.exports = (function () {
                    function e(e) {
                        PIXI.Container.call(this);
                        var t = new PIXI.Text("0 ", { fontFamily: e.fontFamily, fontSize: 45, fill: 16777215, align: "center" });
                        t.anchor.set(0.5), this.addChild(t), (this.valueLabel = t);
                        var s = PIXI.Sprite.from("icon_coin_price");
                        s.anchor.set(0.5), this.addChild(s), (this.icon = s), (this._value = 0);
                    }
                    return (
                        (e.prototype = Object.create(PIXI.Container.prototype)),
                        (e.prototype.redraw = function () {
                            (this.valueLabel.text = this._value + ""), (this.valueLabel.x = -(this.icon.width + 10) / 2), (this.icon.x = this.valueLabel.x + this.valueLabel.width / 2 + 10 + this.icon.width / 2);
                        }),
                        Object.defineProperty(e.prototype, "value", {
                            set: function (e) {
                                (this._value = e), this.redraw();
                            },
                            get: function () {
                                return this._value;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        e
                    );
                })();
            },
            function (e, t) {
                e.exports = (function () {
                    function e(e) {
                        PIXI.Container.call(this), (this.localisationManager = e);
                        var t = PIXI.Sprite.from("base_coin_counter");
                        (t.anchor.x = 1), (t.anchor.y = 0.5), this.addChild(t), (this.frame = t);
                        var s = PIXI.Sprite.from("base_coin_extreme");
                        (s.anchor.x = 1), (s.anchor.y = 0.5), this.addChild(s), (this.edge = s);
                        var a = new PIXI.Text(e.getString("score_bonus"), { fontFamily: e.fontFamily, fontSize: 24, fill: 16776960, stroke: 0, strokeThickness: 10, align: "center" });
                        e.fitText(a, 150, 300), a.anchor.set(1, 0.5), (a.x = -25), (a.y = -35), this.addChild(a), (this.bonusLabel = a);
                        var n = e.getString("valuePercent");
                        n = n.replace("{num}", 100);
                        var r = new PIXI.Text(n, { fontFamily: e.fontFamily, fontSize: 33, fill: 16777215, align: "center" });
                        r.anchor.set(0.5), (r.anchor.x = 1), (r.x = -50), (r.y = 5), this.addChild(r), (this.valueField = r), (this._value = 0);
                    }
                    return (
                        (e.prototype = Object.create(PIXI.Container.prototype)),
                        (e.prototype.redraw = function () {
                            var e = this.localisationManager.getString("valuePercent");
                            (e = e.replace("{num}", this._value)), (this.valueField.text = e), (this.frame.width = this.valueField.width + 60), (this.edge.x = -this.frame.width);
                        }),
                        Object.defineProperty(e.prototype, "value", {
                            set: function (e) {
                                (this._value = e), this.redraw();
                            },
                            get: function () {
                                return this._value;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        e
                    );
                })();
            },
            function (e, t, s) {
                const a = s(0);
                e.exports = (function () {
                    function e(e, t) {
                        PIXI.Container.call(this);
                        var s = PIXI.Sprite.from("lobby_background_no_characters");
                        s.anchor.set(0.5), (s.x = 320), (s.y = 568.5), this.addChild(s);
                        var n = PIXI.Sprite.from("wonderwoman");
                        n.anchor.set(0.5),
                            (n.x = -193),
                            (n.y = 948),
                            (n.visible = !1),
                            this.addChild(n),
                            Tweener.addTween(
                                n,
                                { x: 107, y: 648 },
                                {
                                    time: 50,
                                    delay: 1,
                                    transition: "easeOutQuad",
                                    onStart: function (e) {
                                        e.visible = !0;
                                    },
                                    onComplete: function () {
                                        Tweener.addTween(n, { x: n.x + 0, y: n.y - 5 }, { time: 400, transition: "easeInOutBow", loop: -1 });
                                    },
                                }
                            );
                        var r = PIXI.Sprite.from("beastboy");
                        r.anchor.set(0.5),
                            (r.x = 913),
                            (r.y = -46),
                            (r.visible = !1),
                            this.addChild(r),
                            Tweener.addTween(
                                r,
                                { x: 613, y: 154 },
                                {
                                    time: 60,
                                    delay: 1,
                                    transition: "easeOutQuad",
                                    onStart: function (e) {
                                        e.visible = !0;
                                    },
                                    onComplete: function () {
                                        Tweener.addTween(r, { x: r.x - 5, y: r.y + 5 }, { time: 450, transition: "easeInOutBow", loop: -1 });
                                    },
                                }
                            );
                        var i = PIXI.Sprite.from("bubblebee");
                        i.anchor.set(0.5),
                            (i.x = -239),
                            (i.y = 52),
                            (i.visible = !1),
                            this.addChild(i),
                            Tweener.addTween(
                                i,
                                { x: 61, y: 202 },
                                {
                                    time: 60,
                                    delay: 1,
                                    transition: "easeOutQuad",
                                    onStart: function (e) {
                                        e.visible = !0;
                                    },
                                    onComplete: function () {
                                        Tweener.addTween(i, { x: i.x + 5, y: i.y - 5 }, { time: 550, transition: "easeInOutBow", loop: -1 });
                                    },
                                }
                            );
                        var o = PIXI.Sprite.from("title_logo_fx_sprite");
                        o.anchor.set(0.5), (o.x = 322), (o.y = 208);
                        var l = window.game.getApp().renderer.width - 10;
                        o.scale.set(Math.min(l / o.width, 1)), this.addChild(o);
                        var _ = PIXI.Sprite.from("cn_logo_sprite");
                        _.anchor.set(0.5), (_.x = 0.5 * (640 - window.game.getApp().renderer.width) + 80), (_.y = 0.5 * (1137 - window.game.getApp().renderer.height) + 50), this.addChild(_), (this.logo = o);
                        var c = PIXI.Sprite.from("starfire");
                        c.anchor.set(0.5),
                            (c.x = 881),
                            (c.y = 682),
                            (c.visible = !1),
                            this.addChild(c),
                            Tweener.addTween(
                                c,
                                { x: 581, y: 482 },
                                {
                                    time: 60,
                                    delay: 1,
                                    transition: "easeOutQuad",
                                    onStart: function (e) {
                                        e.visible = !0;
                                    },
                                    onComplete: function () {
                                        Tweener.addTween(c, { x: c.x + 0, y: c.y - 5 }, { time: 500, transition: "easeInOutBow", loop: -1 });
                                    },
                                }
                            );
                        var h = PIXI.Sprite.from("cyborg_cropped");
                        h.anchor.set(0.5),
                            (h.x = 652),
                            (h.y = 1215),
                            (h.visible = !1),
                            this.addChild(h),
                            Tweener.addTween(
                                h,
                                { x: 452, y: 915 },
                                {
                                    time: 40,
                                    delay: 1,
                                    transition: "easeOutQuad",
                                    onStart: function (e) {
                                        e.visible = !0;
                                    },
                                    onComplete: function () {},
                                }
                            );
                        var u = PIXI.Sprite.from("dark_overlay");
                        u.anchor.set(0.5), (u.x = 320), (u.y = 1021), this.addChild(u);
                        var d = new a(PIXI.utils.TextureCache.button_shop);
                        d.anchor.set(0.5),
                            (d.x = 82),
                            (d.y = 987),
                            d.registerState("down", PIXI.utils.TextureCache.button_shop_pressed),
                            this.addChild(d),
                            d.on(
                                "pointerdown",
                                function (e) {
                                    e.stopPropagation(), this.emit("upgrade");
                                }.bind(this)
                            ),
                            (this.btnShop = d);
                        var p = new a(PIXI.utils.TextureCache.button_play);
                        p.anchor.set(0.5),
                            (p.x = 318),
                            (p.y = 986),
                            p.registerState("down", PIXI.utils.TextureCache.button_play_pressed),
                            this.addChild(p),
                            p.on(
                                "pointerdown",
                                function (e) {
                                    e.stopPropagation(), this.emit("play");
                                }.bind(this)
                            ),
                            (this.btnPlay = p);
                        var g = new a(PIXI.utils.TextureCache.button_settings);
                        g.anchor.set(0.5),
                            (g.x = 555),
                            (g.y = 987),
                            g.registerState("down", PIXI.utils.TextureCache.button_settings_pressed),
                            this.addChild(g),
                            g.on(
                                "pointerdown",
                                function (e) {
                                    e.stopPropagation(), this.emit("settings");
                                }.bind(this)
                            ),
                            (this.btnSettings = g),
                            (this._animateTimer = 0);
                    }
                    return (
                        (e.prototype = Object.create(PIXI.Container.prototype)),
                        (e.prototype.update = function (e) {
                            this._animateTimer++, this._animateTimer >= 300 && ((this._animateTimer = 0), this.animate());
                        }),
                        (e.prototype.animate = function () {}),
                        (e.prototype.setEnable = function (e) {
                            this.btnShop.setEnable(e), this.btnPlay.setEnable(e), this.btnSettings.setEnable(e);
                        }),
                        e
                    );
                })();
            },
            function (e, t, s) {
                const a = s(0),
                    n = s(30);
                e.exports = (function () {
                    function e(e) {
                        PIXI.Container.call(this);
                        var t = PIXI.Sprite.from("foot_fire");
                        t.anchor.set(0.5), (t.x = 0), (t.y = 390), this.addChild(t);
                        var s = PIXI.Sprite.from("cyborg");
                        s.anchor.set(0.5), (s.x = 0), (s.y = 0), this.addChild(s);
                        var r = PIXI.Sprite.from("title_settings");
                        r.anchor.set(0.5), (r.x = 0), (r.y = -450), this.addChild(r);
                        var i = new PIXI.Text(n.getString("Pause"), { fontFamily: n.fontFamily, fontSize: "80px", fill: 16777215, align: "center" });
                        i.anchor.set(0.5), n.fitText(i, 350, 200), r.addChild(i), (this._music = e.music), (this._sound = e.sound);
                        var o = new a(PIXI.utils.TextureCache.button_tutorial);
                        (o.visible = !0),
                            o.anchor.set(0.5),
                            (o.x = -137),
                            (o.y = 41),
                            o.registerState("down", PIXI.utils.TextureCache.button_tutorial),
                            this.addChild(o),
                            o.on(
                                "pointertap",
                                function () {
                                    this.emit("help");
                                }.bind(this)
                            );
                        var l = new a(PIXI.utils.TextureCache.button_home);
                        (l.visible = !0),
                            l.anchor.set(0.5),
                            (l.x = 120),
                            (l.y = 44),
                            l.registerState("down", PIXI.utils.TextureCache.button_home_pressed),
                            this.addChild(l),
                            l.on(
                                "pointertap",
                                function () {
                                    this.emit("home"), this.kill();
                                }.bind(this)
                            );
                        var _ = new a(PIXI.utils.TextureCache.button_sound_on);
                        (_.visible = !0), _.anchor.set(0.5), (_.x = 123), (_.y = -88), _.registerState("down", PIXI.utils.TextureCache.button_sound_off), this.addChild(_);
                        var c = new a(PIXI.utils.TextureCache.button_music_on);
                        (c.visible = !0), c.anchor.set(0.5), (c.x = -117), (c.y = -90), c.registerState("down", PIXI.utils.TextureCache.button_music_off), this.addChild(c);
                        var h = new a(PIXI.utils.TextureCache.button_close);
                        (h.visible = !0),
                            h.anchor.set(0.5),
                            (h.x = 213),
                            (h.y = -298),
                            h.registerState("down", PIXI.utils.TextureCache.button_close_pressed),
                            this.addChild(h),
                            h.on(
                                "pointertap",
                                function () {
                                    this.emit("close"), this.kill();
                                }.bind(this)
                            ),
                            (this._btnPlay = h),
                            (this._btnHelp = o),
                            (this._btnHome = l),
                            (this._btnMusic = c),
                            (this._btnSound = _),
                            this._music
                                ? (this._btnMusic.registerState("up", PIXI.utils.TextureCache.button_music_off), this._btnMusic.registerState("down", PIXI.utils.TextureCache.button_music_on))
                                : (this._btnMusic.registerState("up", PIXI.utils.TextureCache.button_music_on), this._btnMusic.registerState("down", PIXI.utils.TextureCache.button_music_off)),
                            this._btnMusic.updateState(),
                            c.on(
                                "pointertap",
                                function (e) {
                                    (this._music = !this._music),
                                        this._music
                                            ? (this._btnMusic.registerState("up", PIXI.utils.TextureCache.button_music_off), this._btnMusic.registerState("down", PIXI.utils.TextureCache.button_music_on))
                                            : (this._btnMusic.registerState("up", PIXI.utils.TextureCache.button_music_on), this._btnMusic.registerState("down", PIXI.utils.TextureCache.button_music_off)),
                                        this._btnMusic.updateState(),
                                        this.emit("change_mute_music", this._music);
                                }.bind(this)
                            ),
                            this._sound
                                ? (this._btnSound.registerState("up", PIXI.utils.TextureCache.button_sound_off), this._btnSound.registerState("down", PIXI.utils.TextureCache.button_sound_on))
                                : (this._btnSound.registerState("up", PIXI.utils.TextureCache.button_sound_on), this._btnSound.registerState("down", PIXI.utils.TextureCache.button_sound_off)),
                            this._btnSound.updateState(),
                            _.on(
                                "pointertap",
                                function (e) {
                                    (this._sound = !this._sound),
                                        this._sound
                                            ? (this._btnSound.registerState("up", PIXI.utils.TextureCache.button_sound_off), this._btnSound.registerState("down", PIXI.utils.TextureCache.button_sound_on))
                                            : (this._btnSound.registerState("up", PIXI.utils.TextureCache.button_sound_on), this._btnSound.registerState("down", PIXI.utils.TextureCache.button_sound_off)),
                                        this._btnSound.updateState(),
                                        this.emit("change_mute_sound", this._sound);
                                }.bind(this)
                            );
                    }
                    return (
                        (e.prototype = Object.create(PIXI.Container.prototype)),
                        (e.prototype.setEnable = function (e) {
                            this._btnPlay.setEnable(e), this._btnHelp.setEnable(e), this._btnHome.setEnable(e), this._btnMusic.setEnable(e), this._btnSound.setEnable(e);
                        }),
                        (e.prototype.kill = function () {
                            for (var e = 0; e < this.children.length; e++) (this.children[e].interactive = !1), this.children[e].removeAllListeners(), Tweener.extract(this.children[e]);
                            (this.interactive = !1), this.removeAllListeners(), Tweener.extract(this), this.parent && this.parent.removeChild(this), this.destroy();
                        }),
                        e
                    );
                })();
            },
            function (e, t, s) {
                const a = s(0),
                    n = s(30);
                e.exports = (function () {
                    function e() {
                        PIXI.Container.call(this);
                        var e = PIXI.Sprite.from("results_screen_bg_02");
                        e.anchor.set(0.5), (e.x = 320), (e.y = 568.5), this.addChild(e), (this.bg = e);
                        var t = PIXI.Sprite.from("heroes_group_02");
                        t.anchor.set(0.5), (t.x = 320), (t.y = 800), this.addChild(t), (this.group = t);
                        var s = PIXI.Sprite.from("ground_center");
                        s.anchor.set(0.5), (s.x = 320), (s.y = 1076), this.addChild(s);
                        var r = PIXI.Sprite.from("score_base");
                        r.anchor.set(0.5), (r.x = 328), (r.y = 346), this.addChild(r);
                        var i = new Animator.Animable(sprites.arrow_result[0]);
                        i.anchor.set(0.5), (i.x = 42), (i.y = 380), this.addChild(i), i.addAnimation("anim", sprites.arrow_result), i.setAnimation("anim", -1, 18), Animator.add(null, i, !1);
                        var o = new PIXI.Text(n.getString("score"), { fontFamily: n.fontFamily, fontSize: 50, fill: 16777215, align: "center" });
                        n.fitText(o, 200, 100), o.anchor.set(0.5), (o.x = 266), (o.y = 314), this.addChild(o);
                        var l = new PIXI.Text("0 ", { fontFamily: n.fontFamily, fontSize: 73, fill: 16776960, align: "center" });
                        l.anchor.set(0.5), (l.x = 265), (l.y = 422), this.addChild(l), (this.scoreValue = l);
                        var _ = new PIXI.Text(n.getString("high_score"), { fontFamily: n.fontFamily, fontSize: 40, fill: 16777215, align: "center" });
                        n.fitText(_, 150, 200), _.anchor.set(0.5), (_.x = 190), (_.y = 598), this.addChild(_);
                        var c = new PIXI.Text("0 ", { fontFamily: n.fontFamily, fontSize: 35, fill: 16777215, align: "center" });
                        c.anchor.set(0.5), (c.x = 337), (c.y = 599), this.addChild(c), (this.highscoreValue = c);
                        var h = PIXI.Sprite.from("results_character_wonder_shadow");
                        h.anchor.set(0.5), (h.x = 512), (h.y = 436), this.addChild(h), (this.characterShadow = h);
                        var u = new Animator.Animable(PIXI.utils.TextureCache.results_character_wonder);
                        u.anchor.set(0.5),
                            (u.x = 618),
                            (u.y = 646),
                            this.addChild(u),
                            u.addAnimation("robin", [PIXI.utils.TextureCache.results_character_robin, PIXI.utils.TextureCache.results_character_robin]),
                            u.addAnimation("wonder", [
                                PIXI.utils.TextureCache.results_character_wonder_01,
                                PIXI.utils.TextureCache.results_character_wonder_01,
                                PIXI.utils.TextureCache.results_character_wonder_01,
                                PIXI.utils.TextureCache.results_character_wonder_01,
                                PIXI.utils.TextureCache.results_character_wonder_01,
                                PIXI.utils.TextureCache.results_character_wonder_01,
                                PIXI.utils.TextureCache.results_character_wonder_02,
                            ]),
                            u.addAnimation("cyborg", [
                                PIXI.utils.TextureCache.results_character_cyborg_01,
                                PIXI.utils.TextureCache.results_character_cyborg_01,
                                PIXI.utils.TextureCache.results_character_cyborg_01,
                                PIXI.utils.TextureCache.results_character_cyborg_01,
                                PIXI.utils.TextureCache.results_character_cyborg_01,
                                PIXI.utils.TextureCache.results_character_cyborg_01,
                                PIXI.utils.TextureCache.results_character_cyborg_02,
                            ]),
                            Animator.add(null, u, !1),
                            (this.character = u);
                        var d = new PIXI.Text(n.getString("new_record"), { fontFamily: n.fontFamily, fontSize: 80, fill: 16777215, align: "center" });
                        d.anchor.set(0.5), (d.x = 320), (d.y = 88), this.addChild(d), (this.label = d);
                        var p = PIXI.Sprite.from("foreground_center");
                        p.anchor.set(0.5), (p.scale.x = -1), (p.x = 320), (p.y = 1127), this.addChild(p);
                        var g = new a(PIXI.utils.TextureCache.button_shop);
                        g.anchor.set(0.5),
                            (g.x = 82),
                            (g.y = 987),
                            g.registerState("down", PIXI.utils.TextureCache.button_shop_pressed),
                            this.addChild(g),
                            g.on(
                                "pointertap",
                                function (e) {
                                    e.stopPropagation(), this.emit("upgrade");
                                }.bind(this)
                            ),
                            (this.btnShop = g);
                        var b = new a(PIXI.utils.TextureCache.button_play);
                        b.anchor.set(0.5),
                            (b.x = 318),
                            (b.y = 986),
                            b.registerState("down", PIXI.utils.TextureCache.button_play_pressed),
                            this.addChild(b),
                            b.on(
                                "pointertap",
                                function (e) {
                                    e.stopPropagation(), this.emit("play");
                                }.bind(this)
                            ),
                            (this.btnPlay = b);
                        var f = new a(PIXI.utils.TextureCache.button_settings);
                        f.anchor.set(0.5),
                            (f.x = 555),
                            (f.y = 987),
                            f.registerState("down", PIXI.utils.TextureCache.button_settings_pressed),
                            this.addChild(f),
                            f.on(
                                "pointertap",
                                function (e) {
                                    e.stopPropagation(), this.emit("settings");
                                }.bind(this)
                            ),
                            (this.btnSettings = f),
                            (this._sparkTimer = 0);
                    }
                    return (
                        (e.prototype = Object.create(PIXI.Container.prototype)),
                        (e.prototype.update = function (e) {
                            this._sparkTimer--, this._sparkTimer <= 0 && (this.generateSpark(), (this._sparkTimer = 5 + 35 * Math.random()));
                        }),
                        (e.prototype.generateSpark = function () {
                            var e = PIXI.Sprite.from(Math.random() > 0.5 ? "spark_01" : "spark_02");
                            e.anchor.set(0.5),
                                (e.x = this.label.x - 250 + 500 * Math.random()),
                                (e.y = 0 + 600 * Math.random()),
                                this.addChild(e),
                                e.scale.set(0),
                                Tweener.addTween(
                                    e,
                                    { scaleX: 1, scaleY: 1 },
                                    {
                                        time: 40,
                                        transition: "bow",
                                        onComplete: function (e) {
                                            e.parent && e.parent.removeChild(e);
                                        },
                                    }
                                );
                        }),
                        (e.prototype.setColor = function (e) {
                            switch (e) {
                                case 0:
                                    (this.bg.texture = PIXI.utils.TextureCache.results_screen_bg_01), (this.group.texture = PIXI.utils.TextureCache.heroes_group_01);
                                    break;
                                case 1:
                                    (this.bg.texture = PIXI.utils.TextureCache.results_screen_bg_02), (this.group.texture = PIXI.utils.TextureCache.heroes_group_02);
                                    break;
                                case 2:
                                    (this.bg.texture = PIXI.utils.TextureCache.results_screen_bg_03), (this.group.texture = PIXI.utils.TextureCache.heroes_group_03);
                            }
                        }),
                        (e.prototype.setTheme = function (e) {
                            switch (e) {
                                case 0:
                                    (this.characterShadow.texture = PIXI.utils.TextureCache.results_character_cyborg_shadow),
                                        this.character.setAnimation("cyborg", -1, 2),
                                        (this.characterShadow.x = 472),
                                        (this.characterShadow.y = 420),
                                        (this.character.x = 650),
                                        (this.character.y = 618);
                                    break;
                                case 1:
                                    (this.characterShadow.texture = PIXI.utils.TextureCache.results_character_robin_shadow),
                                        this.character.setAnimation("robin", -1, 2),
                                        (this.characterShadow.x = 512),
                                        (this.characterShadow.y = 436),
                                        (this.character.x = 658),
                                        (this.character.y = 685);
                                    break;
                                case 2:
                                    (this.characterShadow.texture = PIXI.utils.TextureCache.results_character_wonder_shadow),
                                        this.character.setAnimation("wonder", -1, 2),
                                        (this.characterShadow.x = 512),
                                        (this.characterShadow.y = 436),
                                        (this.character.x = 618),
                                        (this.character.y = 646);
                            }
                        }),
                        (e.prototype.showResult = function (e, t) {
                            (this.label.text = e > t ? n.getString("new_record") : n.getString("well_done")), n.fitText(this.label, 375, 150);
                            var s = this.label.scale.x;
                            Tweener.addTween(this.label, { scaleX: s, scaleY: 1.07 * s }, { time: 70, transition: "bow", loop: -1 }), (this.scoreValue.text = "" + e), (this.highscoreValue.text = "" + (e > t ? e : t));
                        }),
                        (e.prototype.setEnable = function (e) {
                            this.btnShop.setEnable(e), this.btnPlay.setEnable(e), this.btnSettings.setEnable(e);
                        }),
                        e
                    );
                })();
            },
            function (e, t, s) {
                const a = s(0),
                    n = s(30);
                e.exports = (function () {
                    function e(e) {
                        PIXI.Container.call(this);
                        var t = PIXI.Sprite.from("foot_fire");
                        t.anchor.set(0.5), (t.x = 0), (t.y = 390), this.addChild(t);
                        var s = PIXI.Sprite.from("cyborg");
                        s.anchor.set(0.5), (s.x = 0), (s.y = 0), this.addChild(s);
                        var r = PIXI.Sprite.from("title_settings");
                        r.anchor.set(0.5), (r.x = 0), (r.y = -450), this.addChild(r);
                        var i = new PIXI.Text(n.getString("Settings"), { fontFamily: n.fontFamily, fontSize: "80px", fill: 16777215, align: "center" });
                        i.anchor.set(0.5), n.fitText(i, 350, 200), r.addChild(i), (this._music = e.music), (this._sound = e.sound);
                        var o = new a(PIXI.utils.TextureCache.button_tutorial);
                        (o.visible = !0),
                            o.anchor.set(0.5),
                            (o.x = -137),
                            (o.y = 41),
                            o.registerState("down", PIXI.utils.TextureCache.button_tutorial),
                            this.addChild(o),
                            o.on(
                                "pointertap",
                                function () {
                                    this.emit("help");
                                }.bind(this)
                            );
                        var l = new a(PIXI.utils.TextureCache.button_home);
                        (l.visible = !0),
                            l.anchor.set(0.5),
                            (l.x = 120),
                            (l.y = 44),
                            l.registerState("down", PIXI.utils.TextureCache.button_home_pressed),
                            this.addChild(l),
                            l.on(
                                "pointertap",
                                function () {
                                    this.emit("home"), this.kill();
                                }.bind(this)
                            );
                        var _ = new a(PIXI.utils.TextureCache.button_sound_on);
                        (_.visible = !0), _.anchor.set(0.5), (_.x = 123), (_.y = -88), _.registerState("down", PIXI.utils.TextureCache.button_sound_off), this.addChild(_);
                        var c = new a(PIXI.utils.TextureCache.button_music_on);
                        (c.visible = !0), c.anchor.set(0.5), (c.x = -117), (c.y = -90), c.registerState("down", PIXI.utils.TextureCache.button_music_off), this.addChild(c);
                        var h = new a(PIXI.utils.TextureCache.button_close);
                        (h.visible = !0),
                            h.anchor.set(0.5),
                            (h.x = 213),
                            (h.y = -298),
                            h.registerState("down", PIXI.utils.TextureCache.button_close_pressed),
                            this.addChild(h),
                            h.on(
                                "pointertap",
                                function () {
                                    this.emit("close"), this.kill();
                                }.bind(this)
                            ),
                            (this._btnPlay = h),
                            (this._btnHelp = o),
                            (this._btnHome = l),
                            (this._btnMusic = c),
                            (this._btnSound = _),
                            this._music
                                ? (this._btnMusic.registerState("up", PIXI.utils.TextureCache.button_music_off), this._btnMusic.registerState("down", PIXI.utils.TextureCache.button_music_on))
                                : (this._btnMusic.registerState("up", PIXI.utils.TextureCache.button_music_on), this._btnMusic.registerState("down", PIXI.utils.TextureCache.button_music_off)),
                            this._btnMusic.updateState(),
                            c.on(
                                "pointertap",
                                function (e) {
                                    (this._music = !this._music),
                                        this._music
                                            ? (this._btnMusic.registerState("up", PIXI.utils.TextureCache.button_music_off), this._btnMusic.registerState("down", PIXI.utils.TextureCache.button_music_on))
                                            : (this._btnMusic.registerState("up", PIXI.utils.TextureCache.button_music_on), this._btnMusic.registerState("down", PIXI.utils.TextureCache.button_music_off)),
                                        this._btnMusic.updateState(),
                                        this.emit("change_mute_music", this._music);
                                }.bind(this)
                            ),
                            this._sound
                                ? (this._btnSound.registerState("up", PIXI.utils.TextureCache.button_sound_off), this._btnSound.registerState("down", PIXI.utils.TextureCache.button_sound_on))
                                : (this._btnSound.registerState("up", PIXI.utils.TextureCache.button_sound_on), this._btnSound.registerState("down", PIXI.utils.TextureCache.button_sound_off)),
                            this._btnSound.updateState(),
                            _.on(
                                "pointertap",
                                function (e) {
                                    (this._sound = !this._sound),
                                        this._sound
                                            ? (this._btnSound.registerState("up", PIXI.utils.TextureCache.button_sound_off), this._btnSound.registerState("down", PIXI.utils.TextureCache.button_sound_on))
                                            : (this._btnSound.registerState("up", PIXI.utils.TextureCache.button_sound_on), this._btnSound.registerState("down", PIXI.utils.TextureCache.button_sound_off)),
                                        this._btnSound.updateState(),
                                        this.emit("change_mute_sound", this._sound);
                                }.bind(this)
                            );
                    }
                    return (
                        (e.prototype = Object.create(PIXI.Container.prototype)),
                        (e.prototype.setEnable = function (e) {
                            this._btnPlay.setEnable(e), this._btnHelp.setEnable(e), this._btnHome.setEnable(e), this._btnMusic.setEnable(e), this._btnSound.setEnable(e);
                        }),
                        (e.prototype.kill = function () {
                            for (var e = 0; e < this.children.length; e++) (this.children[e].interactive = !1), this.children[e].removeAllListeners(), Tweener.extract(this.children[e]);
                            (this.interactive = !1), this.removeAllListeners(), Tweener.extract(this), this.parent && this.parent.removeChild(this), this.destroy();
                        }),
                        e
                    );
                })();
            },
            function (e, t) {
                e.exports = (function () {
                    const e = [
                        { id: 0, texture_on: "starro_weak_point_01_on", texture_off: "starro_weak_point_pink" },
                        { id: 1, texture_on: "starro_weak_point_01_on", texture_off: "starro_weak_point_blue" },
                        { id: 2, texture_on: "starro_weak_point_01_on", texture_off: "starro_weak_point_green" },
                        { id: 3, texture_on: "starro_weak_point_01_on", texture_off: "starro_weak_point_01" },
                    ];
                    function t(e, t) {
                        var s = Math.abs(t - e) % (2 * Math.PI);
                        return s > Math.PI ? 2 * Math.PI - s : s;
                    }
                    function s() {
                        PIXI.Container.call(this);
                        var e = PIXI.Sprite.from("starro_body");
                        e.anchor.set(0.5), this.addChild(e), (this.frame = e);
                        var t = PIXI.Sprite.from("starro_eye_background");
                        t.anchor.set(0.5), this.addChild(t);
                        var s = PIXI.Sprite.from("starro_eye_base");
                        s.anchor.set(0.5), this.addChild(s), (this.body = s);
                        var a = new Animator.Animable(PIXI.utils.TextureCache.starro_iris);
                        a.anchor.set(0.5),
                            this.addChild(a),
                            a.addAnimation("idle", [PIXI.utils.TextureCache.starro_iris_00, PIXI.utils.TextureCache.starro_iris_00]),
                            a.addAnimation("death", [
                                PIXI.utils.TextureCache.starro_iris_00,
                                PIXI.utils.TextureCache.starro_iris_01,
                                PIXI.utils.TextureCache.starro_iris_02,
                                PIXI.utils.TextureCache.starro_iris_03,
                                PIXI.utils.TextureCache.starro_iris_04,
                                PIXI.utils.TextureCache.starro_iris_05,
                                PIXI.utils.TextureCache.starro_iris_06,
                            ]),
                            a.setAnimation("idle", 0, 4),
                            Animator.add(null, a, !1),
                            (this.face = a),
                            Tweener.addTween(a, { scaleX: 0.95, scaleY: 0.95 }, { time: 120, transition: "bow", loop: -1 });
                        var n = new Animator.Animable(sprites.starro_blink[0]);
                        n.anchor.set(0.5),
                            (n.visible = !1),
                            this.addChild(n),
                            n.addAnimation("anim", sprites.starro_blink, [0, 1, 2, 3, 2, 1, 0]),
                            n.addAnimation("anim_double", sprites.starro_blink, [0, 1, 2, 3, 2, 1, 0, 1, 2, 3, 2, 1, 0]),
                            Animator.add(null, n, !1),
                            (this.blonkSprite = n),
                            (this.targets = []),
                            (this.projectiles = []),
                            (this._colorType = 0),
                            (this._faceType = 0),
                            (this._spikes = []),
                            (this._pickups = []),
                            (this._angle = 0),
                            (this._expression = { time: 0 }),
                            (this.alive = !0);
                    }
                    return (
                        (s.prototype = Object.create(PIXI.Container.prototype)),
                        (s.prototype.getTargets = function () {
                            return this.targets;
                        }),
                        (s.prototype.getProjectiles = function () {
                            return this.projectiles;
                        }),
                        (s.prototype.resetFace = function () {
                            this.face.setAnimation("idle", 0, 12), (this.face.visible = !0), (this.frame.texture = PIXI.utils.TextureCache.starro_body), (this.body.texture = PIXI.utils.TextureCache.starro_eye_base);
                        }),
                        (s.prototype.doBlink = function () {
                            var e = new Animator.Animable(sprites.electricity[0]);
                            e.anchor.set(0.5),
                                e.scale.set(2),
                                this.addChildAt(e, 4),
                                e.addAnimation("anim", sprites.electricity),
                                e.setAnimation("anim", 0, 24),
                                Animator.add(null, e, !0),
                                (this.blonkSprite.visible = !0),
                                this.blonkSprite.setAnimation(
                                    "anim",
                                    0,
                                    12,
                                    function () {
                                        this.blonkSprite.visible = !1;
                                    }.bind(this)
                                ),
                                Tweener.addTween(this.frame, { x: [0, -10, 0, 5, 0, 0], y: [0, 0, -10, 0, 10, 0] }, { time: 30, delay: 20 });
                        }),
                        (s.prototype.showHit = function () {
                            (this._expression.time = 0),
                                Tweener.addTween(
                                    this._expression,
                                    { time: 100 },
                                    {
                                        time: 20,
                                        onUpdate: function (e) {
                                            Math.round(e.time / 30) % 2 == 0
                                                ? ((this.frame.texture = PIXI.utils.TextureCache.purple_starro_body), (this.body.texture = PIXI.utils.TextureCache.purple_starro_eye_base))
                                                : ((this.frame.texture = PIXI.utils.TextureCache.red_starro_body), (this.body.texture = PIXI.utils.TextureCache.red_starro_eye_base));
                                        }.bind(this),
                                        onComplete: function () {
                                            (this.frame.texture = PIXI.utils.TextureCache.starro_body), (this.body.texture = PIXI.utils.TextureCache.starro_eye_base);
                                        }.bind(this),
                                    }
                                );
                        }),
                        (s.prototype.showDeath = function () {
                            for (let e = 0; e < this.targets.length; e++) {
                                this.targets[e].visible = !1;
                            }
                            var e = new Animator.Animable(sprites.electricity[0]);
                            e.anchor.set(0.5),
                                e.scale.set(2),
                                this.addChild(e),
                                e.addAnimation("anim", sprites.electricity),
                                e.setAnimation("anim", 0, 24),
                                Animator.add(null, e, !0),
                                this.face.setAnimation(
                                    "death",
                                    0,
                                    12,
                                    function () {
                                        this.face.visible = !1;
                                    }.bind(this)
                                ),
                                (this._expression.time = 0),
                                Tweener.addTween(
                                    this._expression,
                                    { time: 100 },
                                    {
                                        time: 100,
                                        onUpdate: function (e) {
                                            Math.round(e.time / 20) % 2 == 0
                                                ? (e.time < 50 ? (this.body.texture = PIXI.utils.TextureCache.purple_starro_eye_base) : (this.body.texture = PIXI.utils.TextureCache.purple_starro_eye_dizzy),
                                                  (this.frame.texture = PIXI.utils.TextureCache.purple_starro_body))
                                                : (e.time < 50 ? (this.body.texture = PIXI.utils.TextureCache.red_starro_eye_base) : (this.body.texture = PIXI.utils.TextureCache.red_starro_eye_dizzy),
                                                  (this.frame.texture = PIXI.utils.TextureCache.red_starro_body));
                                        }.bind(this),
                                        onComplete: function () {}.bind(this),
                                    }
                                );
                        }),
                        (s.prototype.shake = function () {
                            Tweener.addTween(this.frame, { x: [0, -5, 0, 2, 0, 0], y: [0, 0, -5, 0, 5, 0] }, { time: 20 });
                        }),
                        (s.prototype.updateAngle = function () {
                            this.body.rotation = this._angle;
                            for (let t = 0; t < this.targets.length; t++) {
                                var e = this.targets[t];
                                (e.x = 200 * Math.cos(e.angleA + this._angle)), (e.y = 200 * Math.sin(e.angleA + this._angle)), (e.rotation = e.angleA + this._angle - Math.PI / 2);
                            }
                            for (let e = 0; e < this._spikes.length; e++) {
                                var t = this._spikes[e];
                                (t.x = 190 * Math.cos(t.angleA + this._angle)), (t.y = 190 * Math.sin(t.angleA + this._angle)), (t.rotation = t.angleA + this._angle + Math.PI / 2);
                            }
                            for (let e = 0; e < this.projectiles.length; e++) {
                                var s = this.projectiles[e];
                                (s.x = 240 * Math.cos(s.angleA + this._angle)), (s.y = 240 * Math.sin(s.angleA + this._angle)), (s.rotation = s.angleA + this._angle + Math.PI / 2);
                            }
                            for (let e = 0; e < this._pickups.length; e++) {
                                var a = this._pickups[e];
                                (a.x = Math.cos(a.angleA + this._angle) * (240 + a.offset)), (a.y = Math.sin(a.angleA + this._angle) * (240 + a.offset)), (a.rotation = a.angleA + this._angle + Math.PI / 2);
                            }
                        }),
                        (s.prototype.clear = function () {
                            for (var e = 0; e < this.targets.length; e++) {
                                (t = this.targets[e]).parent && t.parent.removeChild(t), Tweener.extract(t), t.destroy && t.destroy();
                            }
                            for (e = 0; e < this.projectiles.length; e++) {
                                (t = this.projectiles[e]).parent && t.parent.removeChild(t), Tweener.extract(t), t.destroy && t.destroy();
                            }
                            for (e = 0; e < this._spikes.length; e++) {
                                (t = this._spikes[e]).parent && t.parent.removeChild(t), Tweener.extract(t), t.destroy && t.destroy();
                            }
                            for (e = 0; e < this._pickups.length; e++) {
                                var t;
                                (t = this._pickups[e]).parent && t.parent.removeChild(t), Tweener.extract(t), t.destroy && t.destroy();
                            }
                            (this._pickups = []), (this._spikes = []), (this.targets = []), (this.projectiles = []);
                        }),
                        (s.prototype.isWeakAngle = function () {
                            for (let e = 0; e < this.targets.length; e++) {
                                let t = this.targets[e];
                                if (!t.secured && Math.abs(((-this.rotation + Math.PI + 2 * Math.PI + Math.PI) % (2 * Math.PI)) - ((t.rotation + 2 * Math.PI) % (2 * Math.PI))) < 0.25) return !0;
                            }
                            return !1;
                        }),
                        (s.prototype.getWeakAngleType = function () {
                            for (let e = 0; e < this.targets.length; e++) {
                                let t = this.targets[e];
                                if (!t.secured && Math.abs(((-this.rotation + Math.PI + 2 * Math.PI + Math.PI) % (2 * Math.PI)) - ((t.rotation + 2 * Math.PI) % (2 * Math.PI))) < 0.25) return t.type;
                            }
                            return 0;
                        }),
                        (s.prototype.isTargetAngle = function (e, t) {
                            for (let s = 0; s < this.targets.length; s++) {
                                let a = this.targets[s];
                                if (Math.abs(((-this._angle + Math.PI / 2 + 2 * Math.PI) % (2 * Math.PI)) - ((a.angleA + 2 * Math.PI) % (2 * Math.PI))) < 0.25) {
                                    if (!t) return !0;
                                    if (e == a.type) return !0;
                                }
                            }
                            return !1;
                        }),
                        (s.prototype.isAlreadySecured = function () {
                            for (let e = 0; e < this.targets.length; e++) {
                                let t = this.targets[e];
                                if (t.secured && Math.abs(((-this._angle + Math.PI / 2 + 2 * Math.PI) % (2 * Math.PI)) - ((t.angleA + 2 * Math.PI) % (2 * Math.PI))) < 0.25) return !0;
                            }
                            return !1;
                        }),
                        (s.prototype.removeSecure = function () {
                            for (let t = 0; t < this.targets.length; t++) {
                                let s = this.targets[t];
                                if (s.secured && Math.abs(((-this._angle + Math.PI / 2 + 2 * Math.PI) % (2 * Math.PI)) - ((s.angleA + 2 * Math.PI) % (2 * Math.PI))) < 0.25) {
                                    let t = s.projectile;
                                    return (s.secured = !1), this.removeProjectile(s.projectile), (s.projectile = null), Tweener.finish(s), (s.texture = PIXI.utils.TextureCache[e[s.type].texture_off]), t;
                                }
                            }
                        }),
                        (s.prototype.secureTarget = function (t) {
                            for (let s = 0; s < this.targets.length; s++) {
                                let a = this.targets[s];
                                if (Math.abs(((-this._angle + Math.PI / 2 + 2 * Math.PI) % (2 * Math.PI)) - ((a.angleA + 2 * Math.PI) % (2 * Math.PI))) < 0.25) {
                                    (a.projectile = t),
                                        (a.secured = !0),
                                        (a.blinkPeriod = 0),
                                        Tweener.addTween(
                                            a,
                                            { blinkPeriod: 100 },
                                            {
                                                time: 15,
                                                onUpdate: function (t) {
                                                    Math.floor(t.blinkPeriod / 20) % 2 == 0 ? (t.texture = PIXI.utils.TextureCache[e[t.type].texture_off]) : (t.texture = PIXI.utils.TextureCache[e[t.type].texture_on]);
                                                },
                                            }
                                        );
                                    break;
                                }
                            }
                        }),
                        (s.prototype.addProjectile = function (e) {
                            let t = -this._angle + Math.PI / 2;
                            var s = new Animator.Animable(sprites.batgirl_attack[0]);
                            s.anchor.set(0.5), (s.anchor.y = 0.7), Animator.add(null, s, !0), (s.id = e);
                            let a = e;
                            1 == a
                                ? ((s.texture = sprites.batgirl_attack[0]), s.addAnimation("anim", sprites.batgirl_attack))
                                : 6 == a
                                ? ((s.texture = sprites.beastboy_attack[0]), s.addAnimation("anim", sprites.beastboy_attack))
                                : 7 == a
                                ? ((s.texture = sprites.greenlantern_attack[0]), s.addAnimation("anim", sprites.greenlantern_attack))
                                : 2 == a
                                ? ((s.texture = sprites.raven_attack[0]), s.addAnimation("anim", sprites.raven_attack))
                                : 8 == a
                                ? ((s.texture = sprites.robin_attack[0]), s.addAnimation("anim", sprites.robin_attack))
                                : 0 == a
                                ? ((s.texture = sprites.starfire_attack[0]), s.addAnimation("anim", sprites.starfire_attack))
                                : 5 == a
                                ? ((s.texture = sprites.supergirl_attack[0]), s.addAnimation("anim", sprites.supergirl_attack))
                                : 4 == a
                                ? ((s.texture = sprites.wonderwoman_attack[0]), s.addAnimation("anim", sprites.wonderwoman_attack))
                                : ((s.texture = sprites.bubblebee_attack[0]), s.addAnimation("anim", sprites.bubblebee_attack)),
                                s.setAnimation("anim", -1, 12),
                                (s.angleA = t),
                                (s.x = 240 * Math.cos(s.angleA + this._angle)),
                                (s.y = 240 * Math.sin(s.angleA + this._angle)),
                                (s.rotation = s.angleA + this._angle + Math.PI / 2),
                                this.addChild(s),
                                this.projectiles.push(s),
                                this.secureTarget(s);
                        }),
                        (s.prototype.removeProjectile = function (e) {
                            var t = this.projectiles.indexOf(e);
                            t > -1 && (this.projectiles.splice(t, 1), e.parent && e.parent.removeChild(e));
                        }),
                        (s.prototype.setTargets = function (s, a, n) {
                            for (let t = 0; t < s.length; t++) {
                                var r = PIXI.Sprite.from("starro_weak_point_01");
                                (r.anchor.x = 0.5),
                                    (r.anchor.y = 0.55),
                                    (r.x = 200 * Math.cos(s[t].angle)),
                                    (r.y = 200 * Math.sin(s[t].angle)),
                                    (r.rotation = s[t].angle - Math.PI / 2),
                                    (r.angleA = s[t].angle),
                                    (r.secured = !1),
                                    (r.scale.y = -1),
                                    (r.type = s[t].type),
                                    this.addChildAt(r, 3),
                                    (r.texture = PIXI.utils.TextureCache[e[s[t].type].texture_off]),
                                    this.targets.push(r);
                            }
                            let i = (2 * Math.PI) / 0;
                            for (let e = 0; e < 0; e++) {
                                let s = !1;
                                for (let a = 0; a < this.targets.length; a++) {
                                    if (t(e * i, this.targets[a].rotation + Math.PI / 2) < 0.4) {
                                        s = !0;
                                        break;
                                    }
                                }
                                if (!s) {
                                    var o = PIXI.Sprite.from(SKINS[SKIN_ID[this._colorType]].SPIKE);
                                    (o.anchor.x = 0.5), (o.anchor.y = 1), (o.x = 190 * Math.cos(e * i)), (o.y = 190 * Math.sin(e * i)), (o.rotation = e * i + Math.PI / 2), (o.angleA = e * i), this.addChild(o), this._spikes.push(o);
                                }
                            }
                            let l = [];
                            for (let e = 0; e < this.targets.length; e++) {
                                let t = this.targets[e];
                                l.push(t.angleA - 0.19), l.push(t.angleA - 0.19);
                            }
                            for (let e = 0; e < a.length && l.length; e++) {
                                let t = Math.round(Math.random() * (l.length - 1));
                                var _ = PIXI.Sprite.from("coin_gameplay");
                                switch ((_.anchor.set(0.5), (_.angleA = l[t]), (_.x = 240 * Math.cos(_.angleA)), (_.y = 240 * Math.sin(_.angleA)), (_.rotation = _.angleA + Math.PI / 2), (_.alive = !0), this.addChild(_), a[e])) {
                                    case 0:
                                        (_.texture = PIXI.utils.TextureCache.coin_gameplay), (_.type = 0);
                                        break;
                                    case 1:
                                        (_.texture = PIXI.utils.TextureCache.heart_gameplay), (_.type = 1);
                                }
                                (_.offset = 0), Tweener.addTween(_, { offset: 10 }, { time: 70, transition: "bow", loop: -1 }), this._pickups.push(_), l.splice(t, 1);
                            }
                        }),
                        (s.prototype.getPickups = function () {
                            return this._pickups;
                        }),
                        Object.defineProperties(s.prototype, {
                            rotationAngle: {
                                get: function () {
                                    return this._angle;
                                },
                                set: function (e) {
                                    (this._angle = e), this.updateAngle();
                                },
                            },
                        }),
                        s
                    );
                })();
            },
            function (e, t, s) {
                const a = s(0),
                    n = s(30);
                e.exports = (function () {
                    function e(e, t, s, r, i) {
                        PIXI.Container.call(this), (this._id = t);
                        var o = PIXI.Sprite.from("figure_pop_up");
                        if ((o.anchor.set(0.5), (o.y = -50), this.addChild(o), s && s.title)) {
                            var l;
                            if (e) (l = PIXI.Sprite.from(s.acquiredImage)).scale.set(0.7), (l.anchor.x = 0.5), (l.anchor.y = 1), (l.x = 100), (l.y = 10), this.addChild(l);
                            else (l = PIXI.Sprite.from(s.notAcquiredImage)).scale.set(0.8), (l.anchor.x = 0.5), (l.anchor.y = 1), (l.x = 95), (l.y = 10), this.addChild(l);
                            var _ = new PIXI.Text("Collect " + s.title + " figure to unlock!", { fontFamily: n.fontFamily, fontSize: 33, fill: 16777215, align: "left", wordWrap: !0, wordWrapWidth: 200 });
                            _.anchor.set(0.5), (_.anchor.x = 0), (_.scale.y = 1.3), (_.x = -205), (_.y = -100), this.addChild(_), (_.width = Math.min(_.width, 190));
                        }
                        var c = new a(PIXI.utils.TextureCache.button_close);
                        c.anchor.set(0.5),
                            (c.x = 260),
                            (c.y = -330),
                            c.registerState("down", PIXI.utils.TextureCache.button_close_pressed),
                            this.addChild(c),
                            c.once(
                                "pointertap",
                                function () {
                                    this.emit("close"), this.kill();
                                }.bind(this)
                            );
                        var h = new a(PIXI.utils.TextureCache.button_claim);
                        h.anchor.set(0.5),
                            (h.x = 0),
                            (h.y = 210),
                            h.registerState("down", PIXI.utils.TextureCache.button_claim_pressed),
                            h.registerState("disabled", PIXI.utils.TextureCache.button_claim_pressed),
                            this.addChild(h),
                            (h.interactive = !0),
                            h.once(
                                "pointertap",
                                function () {
                                    this.emit("claim", this._id), this.kill();
                                }.bind(this)
                            );
                        var u = new a(PIXI.utils.TextureCache.button_hint);
                        u.anchor.set(0.5),
                            (u.x = 0),
                            (u.y = 210),
                            u.registerState("down", PIXI.utils.TextureCache.button_hint_pressed),
                            this.addChild(u),
                            u.on(
                                "pointertap",
                                function () {
                                    (d.visible = !0), d.scale.set(1 / this.scale.x), (d.x = -this.x * (1 / this.scale.x)), (d.y = -this.y * (1 / this.scale.x)), (p.visible = !0), (h.interactive = !1), (c.interactive = !1);
                                }.bind(this)
                            ),
                            e ? ((h.visible = !0), (u.visible = !1)) : ((h.visible = !1), (u.visible = !0));
                        var d = new PIXI.Graphics();
                        (d.visible = !1), d.beginFill(0, 0.8), d.drawRect(0, 0, r, i), this.addChild(d);
                        var p = PIXI.Sprite.from("hint_popup");
                        if (((p.visible = !1), p.anchor.set(0.5), (p.y = 200), (p.interactive = !0), (p.buttonMode = !0), this.addChild(p), s.hints)) {
                            var g = new PIXI.Text("" + s.hints.text, { fontFamily: n.fontFamily, fontSize: 26, fill: 0, align: "center", wordWrap: !0, wordWrapWidth: 500 });
                            g.anchor.set(0.5), (g.x = 0), (g.y = 60), p.addChild(g);
                            var b = new PIXI.Text("" + s.title, { fontFamily: n.fontFamily, fontSize: 26, fill: 0, align: "center" });
                            b.anchor.set(0.5), (b.x = 0), (b.y = 133), p.addChild(b);
                        }
                        p.on(
                            "pointertap",
                            function () {
                                (d.visible = !1), (p.visible = !1), (h.interactive = !0), (c.interactive = !0);
                            }.bind(this)
                        );
                    }
                    return (
                        (e.prototype = Object.create(PIXI.Container.prototype)),
                        (e.prototype.kill = function () {
                            for (var e = 0; e < this.children.length; e++) (this.children[e].interactive = !1), this.children[e].removeAllListeners(), Tweener.extract(this.children[e]);
                            (this.interactive = !1), this.removeAllListeners(), Tweener.extract(this), this.parent && this.parent.removeChild(this), this.destroy();
                        }),
                        e
                    );
                })();
            },
            function (e, t, s) {
                const a = s(0);
                e.exports = (function () {
                    const e = ["tut_01", "tut_02_a", "tut_02_b", "tut_03", "tut_04", "tut_05"];
                    function t(t, s, n, r) {
                        PIXI.Sprite.call(this, PIXI.utils.TextureCache.tut_01), this.anchor.set(0.5), (this._frames = JSON.parse(JSON.stringify(e))), (this.texts = []);
                        var i = new PIXI.Text(t.getString(window.game.isDesktop() ? "tut_text_01_desktop" : "tut_text_01"), { fontFamily: t.fontFamily, fontSize: 40, fill: 16777215, align: "center", wordWrap: !0, wordWrapWidth: 350 });
                        t.fitText(i, i.style.wordWrapWidth, 200), i.anchor.set(0.5), (i.x = 0), (i.y = -200), (i.visible = !1), this.addChild(i);
                        var o = new PIXI.Text(t.getString("tut_text_01_extra"), { fontFamily: t.fontFamily, fontSize: 32, fill: 16777215, align: "center", wordWrap: !0, wordWrapWidth: 150 });
                        t.fitText(o, o.style.wordWrapWidth, 200), o.anchor.set(0.5), (o.x = 200), (o.y = 285), (o.visible = !1), this.addChild(o);
                        var l = new PIXI.Text(t.getString("tut_text_02a"), { fontFamily: t.fontFamily, fontSize: 40, fill: 16777215, align: "center", wordWrap: !0, wordWrapWidth: 350 });
                        t.fitText(l, l.style.wordWrapWidth, 200), l.anchor.set(0.5), (l.x = 0), (l.y = -200), (l.visible = !1), this.addChild(l);
                        var _ = new PIXI.Text(t.getString("tut_text_02a_extra"), { fontFamily: t.fontFamily, fontSize: 32, fill: 16777215, align: "center", wordWrap: !0, wordWrapWidth: 150 });
                        t.fitText(_, _.style.wordWrapWidth, 200), _.anchor.set(0.5), (_.x = 200), (_.y = 285), (_.visible = !1), this.addChild(_);
                        var c = new PIXI.Text(t.getString("tut_text_02b"), { fontFamily: t.fontFamily, fontSize: 40, fill: 16777215, align: "center", wordWrap: !0, wordWrapWidth: 350 });
                        t.fitText(c, c.style.wordWrapWidth, 200), c.anchor.set(0.5), (c.x = 0), (c.y = -200), (c.visible = !1), this.addChild(c);
                        var h = new PIXI.Text(t.getString("tut_text_02b_extra"), { fontFamily: t.fontFamily, fontSize: 30, fill: 16777215, align: "center", wordWrap: !0, wordWrapWidth: 160 });
                        t.fitText(h, h.style.wordWrapWidth, 230), h.anchor.set(0.5), (h.x = 200), (h.y = 310), (h.visible = !1), this.addChild(h);
                        var u = new PIXI.Text(t.getString("tut_text_03"), { fontFamily: t.fontFamily, fontSize: 40, fill: 16777215, align: "center", wordWrap: !0, wordWrapWidth: 350 });
                        t.fitText(u, u.style.wordWrapWidth, 200), u.anchor.set(0.5), (u.x = 0), (u.y = -200), (u.visible = !1), this.addChild(u);
                        var d = new PIXI.Text(t.getString("tut_text_04"), { fontFamily: t.fontFamily, fontSize: 40, fill: 16777215, align: "center", wordWrap: !0, wordWrapWidth: 350 });
                        t.fitText(d, d.style.wordWrapWidth, 200), d.anchor.set(0.5), (d.x = 0), (d.y = -200), (d.visible = !1), this.addChild(d);
                        var p = new PIXI.Text(t.getString("BOOSTED!"), { fontFamily: t.fontFamily, fontSize: 40, fill: 16777215, align: "center" });
                        t.fitText(p, 140, 65), p.anchor.set(0.5), (p.x = 135), (p.y = 435), (p.visible = !1), this.addChild(p);
                        var g = new PIXI.Text(t.getString("tut_text_05"), { fontFamily: t.fontFamily, fontSize: 40, fill: 16777215, align: "center", wordWrap: !0, wordWrapWidth: 350 });
                        t.fitText(g, g.style.wordWrapWidth, 200), g.anchor.set(0.5), (g.x = 0), (g.y = -200), (g.visible = !1), this.addChild(g);
                        var b = new PIXI.Text(t.getString("score_bonus"), { fontFamily: t.fontFamily, fontSize: 40, fill: 16776960, stroke: 0, strokeThickness: 10, align: "center" });
                        t.fitText(b, 300, 300), b.anchor.set(0.5), (b.x = 0), (b.y = 250), (b.visible = !1), this.addChild(b);
                        var f = new PIXI.Text(t.getString("valuePercent").replace("{num}", 100), { fontFamily: t.fontFamily, fontSize: 80, fill: 16777215, align: "center" });
                        t.fitText(f, 200, 200),
                            f.anchor.set(0.5),
                            (f.x = 0),
                            (f.y = 350),
                            (f.visible = !1),
                            this.addChild(f),
                            this.texts.push([i, o]),
                            this.texts.push([l, _]),
                            this.texts.push([c, h]),
                            this.texts.push([u]),
                            this.texts.push([d, p]),
                            this.texts.push([g, b, f]),
                            r && ((this.texture = PIXI.utils.TextureCache.tut_04), this.texts.splice(0, 4), this._frames.splice(0, 4));
                        var m = new PIXI.Text(t.getString("tutorial"), { fontFamily: t.fontFamily, fontSize: 82, fill: 16777215, align: "center" });
                        t.fitText(m, 350, 200), m.anchor.set(0.5), (m.x = -20), (m.y = -435), this.addChild(m);
                        var y = new a(PIXI.utils.TextureCache.button_arrow);
                        y.anchor.set(0.5), (y.scale.x = -1), (y.x = -70), (y.y = 560), y.registerState("down", PIXI.utils.TextureCache.button_arrow_pressed), this.addChild(y);
                        var x = new a(PIXI.utils.TextureCache.button_arrow);
                        x.anchor.set(0.5), (x.x = 70), (x.y = 560), x.registerState("down", PIXI.utils.TextureCache.button_arrow_pressed), this.addChild(x);
                        var I = new a(PIXI.utils.TextureCache.button_close);
                        I.anchor.set(0.5),
                            (I.x = 240),
                            (I.y = -440),
                            I.registerState("down", PIXI.utils.TextureCache.button_close_pressed),
                            this.addChild(I),
                            I.on(
                                "pointertap",
                                function (e) {
                                    e.stopPropagation(), this.emit("close"), this.kill();
                                }.bind(this)
                            ),
                            y.on("pointertap", this.swipeLeft.bind(this)),
                            x.on("pointertap", this.swipeRight.bind(this)),
                            (this._swipe = !1),
                            (this._swipePosition = 0),
                            (this._index = 0),
                            this.goTo(this._index);
                    }
                    return (
                        (t.prototype = Object.create(PIXI.Sprite.prototype)),
                        (t.prototype.swipeDown = function (e) {
                            if ((e.stopPropagation(), this._swipe)) return !1;
                            (this._swipe = !0), (this._swipePosition = e.data.global.x);
                        }),
                        (t.prototype.swipeUp = function (e) {
                            if ((e.stopPropagation(), !this._swipe)) return !1;
                            this._swipe = !1;
                            let t = e.data.global.x - this._swipePosition;
                            t > 100 ? this.swipeLeft() : t < -100 ? this.swipeRight() : e.target instanceof a || this.swipeRight();
                        }),
                        (t.prototype.swipeMove = function (e) {
                            if ((e.stopPropagation(), !this._swipe)) return !1;
                        }),
                        (t.prototype.swipeLeft = function () {
                            (this._index = (this._frames.length + this._index - 1) % this._frames.length), this.goTo(this._index);
                        }),
                        (t.prototype.swipeRight = function () {
                            (this._index = (this._index + 1) % this._frames.length), this.goTo(this._index);
                        }),
                        (t.prototype.goTo = function (e) {
                            (this._index = e), (this.texture = PIXI.utils.TextureCache[this._frames[this._index]]);
                            for (var t = 0; t < this.texts.length; t++) for (var s = 0; s < this.texts[t].length; s++) this.texts[t][s].visible = t == e;
                        }),
                        (t.prototype.kill = function () {
                            for (var e = 0; e < this.children.length; e++) (this.children[e].interactive = !1), this.children[e].removeAllListeners(), Tweener.extract(this.children[e]);
                            (this.interactive = !1), this.removeAllListeners(), Tweener.extract(this), this.parent && this.parent.removeChild(this), this.destroy();
                        }),
                        t
                    );
                })();
            },
            function (e, t) {
                e.exports = (function () {
                    function e(e) {
                        PIXI.Container.call(this);
                        var t = PIXI.Sprite.from("weak_points_bar_slice");
                        (t.anchor.x = 1), (t.anchor.y = 0.5), this.addChild(t), (this.frame = t);
                        var s = PIXI.Sprite.from("weak_points_bar_top");
                        (s.anchor.x = 1), (s.anchor.y = 0.5), this.addChild(s), (this.edge = s);
                        var a = PIXI.Sprite.from("coins_pile");
                        (a.anchor.x = 0.5), (a.anchor.y = 0.5), (a.x = -180), this.addChild(a);
                        var n = new PIXI.Text("0 ", { fontFamily: e.fontFamily, fontSize: 55, fill: 16777215, align: "center" });
                        n.anchor.set(0.5), (n.x = -80), (n.y = 0), this.addChild(n), (this.valueLabel = n), (this._value = 0);
                    }
                    return (
                        (e.prototype = Object.create(PIXI.Container.prototype)),
                        (e.prototype.redraw = function () {
                            (this.valueLabel.text = this._value + ""), (this.frame.width = 180), (this.edge.x = -this.frame.width / 2);
                        }),
                        Object.defineProperty(e.prototype, "value", {
                            set: function (e) {
                                (this._value = Math.round(e)), this.redraw();
                            },
                            get: function () {
                                return this._value;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        e
                    );
                })();
            },
            function (e, t, s) {
                const a = s(0);
                e.exports = (function () {
                    function e(e) {
                        PIXI.Container.call(this), (this.localisationManager = e);
                        var t = PIXI.Sprite.from("background_lose");
                        t.anchor.set(0.5),
                            (t.x = 320),
                            (t.y = 568.5),
                            this.addChild(t),
                            (this.bg = t),
                            (this.label = new PIXI.Text(this.localisationManager.getString("you_win"), { fontFamily: this.localisationManager.fontFamily, fontSize: 100, fill: 16441950, align: "center", stroke: 0, strokeThickness: 10 })),
                            this.label.anchor.set(0.5),
                            (this.label.x = 320),
                            (this.label.y = 150);
                        var s = new a(PIXI.utils.TextureCache.button_play);
                        s.anchor.set(0.5),
                            (s.x = 318),
                            (s.y = 986),
                            s.registerState("down", PIXI.utils.TextureCache.button_play_pressed),
                            this.addChild(s),
                            s.on(
                                "pointertap",
                                function (e) {
                                    e.stopPropagation(), this.emit("play");
                                }.bind(this)
                            ),
                            (this.btnPlay = s),
                            (this._sparkTimer = 0),
                            (this._isWin = !1);
                    }
                    return (
                        (e.prototype = Object.create(PIXI.Container.prototype)),
                        (e.prototype.update = function (e) {
                            this._sparkTimer--, this._sparkTimer <= 0 && (this.generateSpark(), (this._sparkTimer = 5 + 35 * Math.random()));
                        }),
                        (e.prototype.generateSpark = function () {
                            if (this._isWin) {
                                var e = PIXI.Sprite.from(Math.random() > 0.5 ? "spark_01" : "spark_02");
                                e.anchor.set(0.5),
                                    (e.x = this.label.x - 250 + 500 * Math.random()),
                                    (e.y = this.label.y - 120 + 240 * Math.random()),
                                    this.addChild(e),
                                    e.scale.set(0),
                                    Tweener.addTween(
                                        e,
                                        { scaleX: 1, scaleY: 1 },
                                        {
                                            time: 40,
                                            transition: "bow",
                                            onComplete: function (e) {
                                                e.parent && e.parent.removeChild(e);
                                            },
                                        }
                                    );
                            }
                        }),
                        (e.prototype.showResult = function (e) {
                            e
                                ? ((this._isWin = !0),
                                  (this.bg.texture = PIXI.utils.TextureCache.background_win),
                                  (this.label.text = this.localisationManager.getString("you_win")),
                                  (this.label.style.fill = 16441950),
                                  this.localisationManager.fitText(this.label, 700, 500),
                                  this.label.anchor.set(0.5),
                                  (this.label.x = 320),
                                  (this.label.y = 150),
                                  this.addChild(this.label))
                                : ((this._isWin = !1),
                                  (this.bg.texture = PIXI.utils.TextureCache.background_lose),
                                  (this.label.text = this.localisationManager.getString("try_again")),
                                  (this.label.style.fill = 13446215),
                                  this.localisationManager.fitText(this.label, 700, 500),
                                  this.addChild(this.label)),
                                this.label.scale.set(3 * this.label.scale.x, 3 * this.label.scale.y);
                            var t = this.label.scale.x / 3;
                            this.labelTween = Tweener.addTween(
                                this.label,
                                { scaleX: t, scaleY: t },
                                {
                                    time: 20,
                                    transition: "easeOutBack",
                                    onComplete: function (e) {
                                        Tweener.addTween(e, { scaleX: t, scaleY: 0.95 * t }, { time: 70, transition: "bow", loop: -1 });
                                    },
                                }
                            );
                        }),
                        (e.prototype.setEnable = function (e) {
                            this.btnPlay.setEnable(e);
                        }),
                        e
                    );
                })();
            },
            function (e, t) {
                e.exports = (function () {
                    function e() {
                        PIXI.Container.call(this);
                        var e = PIXI.Sprite.from("weak_points_bar_slice");
                        (e.anchor.x = 0.5), (e.anchor.y = 0.5), this.addChild(e), (this.frame = e);
                        var t = PIXI.Sprite.from("weak_points_bar_top");
                        (t.anchor.x = 0), (t.anchor.y = 0.5), (t.scale.x = -1), this.addChild(t), (this.edgeRight = t);
                        var s = PIXI.Sprite.from("weak_points_bar_top");
                        (s.anchor.x = 1),
                            (s.anchor.y = 0.5),
                            this.addChild(s),
                            (this.edgeLeft = s),
                            (this.frame.width = 180),
                            (this.edgeLeft.x = -this.frame.width / 2),
                            (this.edgeRight.x = this.frame.width / 2 + this.edgeRight.width),
                            (this._value = 0),
                            (this._slots = []),
                            this.init(3);
                    }
                    return (
                        (e.prototype = Object.create(PIXI.Container.prototype)),
                        (e.prototype.init = function (e) {
                            for (let s = 0; s < e; s++) {
                                var t = PIXI.Sprite.from("weak_point_not_achieved");
                                t.anchor.set(0.5), this.addChildAt(t, 2), (t.x = 40 * s - 40), (t.y = 0), this._slots.push(t);
                            }
                        }),
                        (e.prototype.redraw = function () {
                            for (let e = 0; e < this._slots.length; e++) {
                                let t = this._slots[e];
                                e < this._value ? (t.scale.set(1), (t.texture = PIXI.utils.TextureCache.weak_point_green_achieved)) : (t.scale.set(1.45), (t.texture = PIXI.utils.TextureCache.weak_point_not_achieved));
                            }
                        }),
                        Object.defineProperty(e.prototype, "value", {
                            set: function (e) {
                                (this._value = e), this.redraw();
                            },
                            get: function () {
                                return this._value;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        e
                    );
                })();
            },
            function (e, t) {
                e.exports = (function () {
                    function e(e, t) {
                        var s;
                        PIXI.Container.call(this),
                            (this._shadows = []),
                            (this._windows = []),
                            (s = PIXI.Sprite.from("enemy_at_background_01")).anchor.set(0.5),
                            (s.x = -310),
                            (s.y = -540),
                            (s.speed = 0.003),
                            this.addChild(s),
                            this._shadows.push(s),
                            (s = PIXI.Sprite.from("enemy_background_02")).anchor.set(0.5),
                            (s.x = 350),
                            (s.y = -20),
                            (s.speed = 0.002),
                            this.addChild(s),
                            this._shadows.push(s);
                        let a = [
                            { x: -252, y: 124, texture: "window_small" },
                            { x: -241, y: 124, texture: "window_small" },
                            { x: -174, y: 102, texture: "window_small" },
                            { x: -162, y: 102, texture: "window_small" },
                            { x: -149, y: 102, texture: "window_small" },
                            { x: -96, y: 120, texture: "window_small" },
                            { x: -173, y: 198, texture: "window_small" },
                            { x: -162, y: 198, texture: "window_small" },
                            { x: -204, y: 249, texture: "window_small" },
                            { x: 139, y: 124, texture: "window_small" },
                            { x: 153, y: 124, texture: "window_small" },
                            { x: 228, y: 131, texture: "window_small" },
                            { x: 241, y: 130, texture: "window_small" },
                            { x: -65, y: 177, texture: "window_big" },
                            { x: -43, y: 177, texture: "window_big" },
                            { x: 95, y: 183, texture: "window_big" },
                            { x: 114, y: 183, texture: "window_big" },
                            { x: 133, y: 183, texture: "window_big" },
                            { x: 97, y: 231, texture: "window_big" },
                            { x: 114, y: 231, texture: "window_big" },
                        ];
                        for (let e = 0; e < a.length; e++) {
                            let t = PIXI.Sprite.from(a[e].texture);
                            (t.visible = Math.random() > 0.5 ? 1 : 0), (t.x = a[e].x), (t.y = a[e].y), this.addChild(t), this._windows.push(t), (t.timer = 200 + 800 * Math.random());
                        }
                        this._animateTimer = 0;
                    }
                    return (
                        (e.prototype = Object.create(PIXI.Container.prototype)),
                        (e.prototype.update = function (e) {
                            for (let e = 0; e < this._windows.length; e++) {
                                let t = this._windows[e];
                                t.timer--, t.timer <= 0 && ((t.visible = Math.random() > 0.5 ? 1 : 0), (t.timer = 200 + 800 * Math.random()));
                            }
                            for (let e = 0; e < this._shadows.length; e++) {
                                let t = this._shadows[e];
                                t.rotation += t.speed;
                            }
                            this._animateTimer++, this._animateTimer >= 300 && (this._animateTimer = 0);
                        }),
                        e
                    );
                })();
            },
            function (e, t) {},
            function (e, t) {
                window.Animator = (function () {
                    "use strict";
                    var e = [],
                        t = {
                            add: function (t, s, a) {
                                (s.tmp = a), e.push(s);
                            },
                            remove: function (t) {
                                var s = e.indexOf(t);
                                s > -1 && e.splice(s, 1);
                            },
                            update: function (t) {
                                for (var s = 0; s < e.length; s++) e[s] && e[s].running ? e[s].update(t) : e[s].tmp && (e[s].parent && e[s].parent.removeChild(e[s]), this.remove(e[s]));
                            },
                        };
                    function s(e) {
                        PIXI.Sprite.call(this, e),
                            (this._animations = {}),
                            (this._loop = 0),
                            (this._elapsed = 0),
                            (this._fps = 10),
                            (this._frameIndex = 0),
                            (this._animation = null),
                            (this._playlist = []),
                            (this.running = !1),
                            (this._completeCallback = null);
                    }
                    return (
                        (s.prototype = Object.create(PIXI.Sprite.prototype)),
                        (s.prototype.addAnimation = function (e, t, s, a) {
                            if (s) {
                                this._animations[e] = [];
                                for (var n = 0; n < s.length; n++) this._animations[e].push(t[s[n]]);
                            } else this._animations[e] = t;
                            if (a) {
                                var r = [].concat(this._animations[e]);
                                r.reverse(), this._animations[e].pop(), (this._animations[e] = this._animations[e].concat(r));
                            }
                        }),
                        (s.prototype.addMultiAnimation = function (e, t, s) {
                            this._animations[e] = [];
                            for (var a = 0; a < s.length; a++) {
                                for (var n = [], r = 0; r < s[a].length; r++) n.push(t[s[a][r]]);
                                this._animations[e].push(n);
                            }
                        }),
                        (s.prototype.setAnimation = function (e, t, s, a) {
                            if (!this._animations[e]) return null;
                            (this._animationName = e),
                                (this._animation = this.getAnimation(this._animationName)),
                                (this._elapsed = 0),
                                (this._loop = t || 0),
                                (this._fps = s || this._fps),
                                (this.running = !0),
                                (this._completeCallback = a || null);
                        }),
                        (s.prototype.stopAnimation = function () {
                            this.running = !1;
                        }),
                        (s.prototype.getAnimation = function (e) {
                            if (this._animations[e][0].constructor === Array) {
                                var t = Math.round(Math.random() * (this._animations[e].length - 1));
                                return this._animations[e][t];
                            }
                            return this._animations[e];
                        }),
                        (s.prototype.addToPlaylist = function (e, t, s) {
                            this._playlist.push({ name: e, loops: t, fps: s });
                        }),
                        (s.prototype.clearPlaylist = function () {
                            this._playlist = [];
                        }),
                        (s.prototype.gotoNext = function () {
                            if (this._playlist.length) {
                                var e = this._playlist.pop();
                                this.setAnimation(e.name, e.loops, e.fps);
                            }
                        }),
                        (s.prototype.update = function (e) {
                            if (!this.running || !this._animation) return null;
                            this._elapsed += e > 0 ? e : 0;
                            var t = this._animation,
                                s = (t.length - 1) / (this._fps / 60),
                                a = Math.round((this._elapsed * this._fps) / 60);
                            if (((this.texture = t[a]), (this._frameIndex = a), this._elapsed >= s))
                                if (this._loop) this._loop--, (this._elapsed -= s), (this._animation = this.getAnimation(this._animationName));
                                else if (((this._elapsed = s), (this.running = !1), this._playlist.length)) {
                                    var n = this._playlist.pop();
                                    this.setAnimation(n.name, n.loops, n.fps);
                                } else this._completeCallback && this._completeCallback();
                        }),
                        (s.prototype.getFrame = function () {
                            return this._frameIndex;
                        }),
                        (s.prototype.reset = function () {
                            this._elapsed = 0;
                        }),
                        (t.Animable = s),
                        t
                    );
                })();
            },
            function (e, t) {
                window.Tweener = (function () {
                    var e = {
                        tweens: [],
                        loop: !0,
                        params: { time: 1, transition: "linear", delay: 0, variant: 0 },
                        fallbacks: { onStart: null, onUpdate: null, onComplete: null },
                        update: function (t) {
                            for (var s = 0; s < e.tweens.length; s++) {
                                let a = e.tweens[s];
                                a._running && a.update(t);
                            }
                        },
                        clear: function () {
                            let t = e.tweens.slice(0);
                            for (var s = 0; s < t.length; s++) t[s].def.loop || t[s].stop();
                        },
                        finish: function (t) {
                            for (var s = 0; s < e.tweens.length; s++)
                                if (e.tweens[s]._target == t) {
                                    e.tweens[s].finish();
                                    break;
                                }
                        },
                        pause: function (t) {
                            for (var s = 0; s < e.tweens.length; s++)
                                if (e.tweens[s]._target == t) {
                                    e.tweens[s].pause();
                                    break;
                                }
                        },
                        restart: function (t) {
                            for (var s = 0; s < e.tweens.length; s++)
                                if (e.tweens[s]._target == t) {
                                    e.tweens[s].restart();
                                    break;
                                }
                        },
                        extract: function (t) {
                            for (var s = 0; s < e.tweens.length; s++)
                                if (e.tweens[s]._target === t) {
                                    e.tweens[s].stop();
                                    break;
                                }
                        },
                        addTween: function (t, s, a) {
                            var n = e;
                            e.extract(t);
                            var r = new n.Tween(t, s, a);
                            return n.tweens.push(r), r.start(), r;
                        },
                        addFrameTween: function (e, t, s) {},
                        Tween: function (e, t, s) {
                            if (
                                ((this._target = e),
                                (this._prms = []),
                                (this._propsQueue = {}),
                                (this._propsStart = {}),
                                (this._propsEnd = {}),
                                (this._running = !1),
                                (this._elapsed = 0),
                                (this.def = { time: 25, delay: 0, transition: "linear", variant: 0, onStart: null, onUpdate: null, onComplete: null, loop: !1 }),
                                s)
                            )
                                for (var a in this.def) this.def[a] = s[a] ? s[a] : this.def[a];
                            for (var n in t) this._prms.push(n), (this._propsStart[n] = e[n]), (this._propsQueue[n] = t[n] - e[n]), (this._propsEnd[n] = t[n]);
                            this._delay = this.def.delay;
                        },
                    };
                    return (
                        (e.Tween.prototype.start = function () {
                            this._running = !0;
                        }),
                        (e.Tween.prototype.stop = function () {
                            this._running = !1;
                            var t = e.tweens;
                            t.splice(t.indexOf(this), 1);
                        }),
                        (e.Tween.prototype.pause = function () {
                            this._running && (this._running = !1);
                        }),
                        (e.Tween.prototype.restart = function () {
                            this._running || (this._running = !0), (this._elapse = 0);
                        }),
                        (e.Tween.prototype.finish = function () {
                            for (var e = 0; e < this._prms.length; e++) {
                                var t = this._prms[e];
                                this._target[t] = this._propsStart[t] + this._propsQueue[t];
                            }
                            this.def.onComplete && this.def.onComplete(this._target), this.stop();
                        }),
                        (e.Tween.prototype.update = function (t) {
                            var s = t;
                            if (this._delay > 0) (this._delay -= s), this._delay <= 0 && this.def.onStart && this.def.onStart(this._target);
                            else {
                                var a = this.def.time;
                                (this._elapsed += s), this._elapsed < 0 ? (this._elapsed = 0) : this._elapsed + s / 2 > this.def.time && (this._elapsed = this.def.time);
                                for (var n = this._elapsed / this.def.time, r = e.transitions[this.def.transition](n, this.def.variant), i = 0; i < this._prms.length; i++) {
                                    var o = this._prms[i];
                                    if (this._propsEnd[o].constructor === Array) {
                                        var l = (this._propsEnd[o].length - 1) * r,
                                            _ = Math.ceil(l),
                                            c = 1 - (_ - l),
                                            h = _ > 0 ? this._propsEnd[o][_ - 1] : this._propsStart[o],
                                            u = this._propsEnd[o][_];
                                        this._target[o] != u && ((dirty = !0), (this._target[o] = h + (u - h) * c));
                                    } else this._target[o] = this._propsStart[o] + (this._propsEnd[o] - this._propsStart[o]) * r;
                                }
                                this.def.onUpdate && this.def.onUpdate(this._target, n),
                                    this._elapsed >= a &&
                                        (this.def.loop
                                            ? (this.def.onComplete && this.def.onComplete(this._target, this), this.def.loop > 0 && this.def.loop--, (this._elapsed = 0), (this._delay = this.def.delay))
                                            : (this.stop(), this.def.onComplete && this.def.onComplete(this._target, this)));
                            }
                        }),
                        (e.transitions = {
                            linear: function (e) {
                                return e;
                            },
                            easeInElastic: function (e, t, s, a) {
                                var n = 1.70158,
                                    r = 0,
                                    i = s;
                                if (0 == e) return t;
                                if (1 == (e /= a)) return t + s;
                                if ((r || (r = 0.3 * a), i < Math.abs(s))) {
                                    i = s;
                                    n = r / 4;
                                } else n = (r / (2 * Math.PI)) * Math.asin(s / i);
                                return -i * Math.pow(2, 10 * (e -= 1)) * Math.sin(((e * a - n) * (2 * Math.PI)) / r) + t;
                            },
                            bow: function (e) {
                                return Math.sin(e * Math.PI);
                            },
                            easeInOutBow: function (e) {
                                return Math.sin(2 * e * Math.PI);
                            },
                            bounc: function (e) {
                                return Math.sin(3 * e * Math.PI);
                            },
                            experimental: function (e) {
                                return Math.sin(e * Math.PI);
                            },
                            easeOutSine: function (e) {
                                return 1 * Math.sin((e / 1) * (Math.PI / 2));
                            },
                            easeOutCubic: function (e) {
                                return 1 * ((e = e / 1 - 1) * e * e + 1);
                            },
                            easeOutBounce: function (e) {
                                return e < 1 / 2.75
                                    ? 7.5625 * e * e * 1
                                    : e < 2 / 2.75
                                    ? 1 * (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
                                    : e < 2.5 / 2.75
                                    ? 1 * (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
                                    : 7.5625 * (e -= 1.5 / 2.75) * e + 0.8575 > 1
                                    ? 1
                                    : 7.5625 * e * e + 0.8575;
                            },
                            easeInOutBack: function (e) {
                                var t = 1.70158;
                                return (e /= 0.5) < 1 ? e * e * ((1 + (t *= 1.525)) * e - t) * 0.5 : 0.5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2);
                            },
                            easeInQuad: function (e) {
                                return e * e;
                            },
                            easeOutQuad: function (e) {
                                return -1 * e * (e - 2);
                            },
                            easeInOutQuad: function (e) {
                                return (e /= 0.5) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1);
                            },
                            easeInCubic: function (e) {
                                return e * e * e;
                            },
                            easeOutCubic: function (e) {
                                return 1 * ((e = e / 1 - 1) * e * e + 1);
                            },
                            easeInOutCubic: function (e) {
                                return (e /= 0.5) < 1 ? 0.5 * e * e * e : 0.5 * ((e -= 2) * e * e + 2);
                            },
                            easeInQuart: function (e) {
                                return e * e * e * e;
                            },
                            easeOutQuart: function (e) {
                                return -1 * ((e = e / 1 - 1) * e * e * e - 1);
                            },
                            easeInOutQuart: function (e) {
                                return (e /= 0.5) < 1 ? 0.5 * e * e * e * e : -0.5 * ((e -= 2) * e * e * e - 2);
                            },
                            easeInQuint: function (e) {
                                return 1 * (e /= 1) * e * e * e * e;
                            },
                            easeOutQuint: function (e) {
                                return 1 * ((e = e / 1 - 1) * e * e * e * e + 1);
                            },
                            easeInOutQuint: function (e) {
                                return (e /= 0.5) < 1 ? 0.5 * e * e * e * e * e : 0.5 * ((e -= 2) * e * e * e * e + 2);
                            },
                            easeInSine: function (e) {
                                return -1 * Math.cos((e / 1) * (Math.PI / 2)) + 1;
                            },
                            easeOutSine: function (e) {
                                return 1 * Math.sin((e / 1) * (Math.PI / 2));
                            },
                            easeInOutSine: function (e) {
                                return -0.5 * (Math.cos((Math.PI * e) / 1) - 1);
                            },
                            easeInExpo: function (e) {
                                return 0 === e ? 1 : 1 * Math.pow(2, 10 * (e / 1 - 1));
                            },
                            easeOutExpo: function (e) {
                                return 1 === e ? 1 : 1 * (1 - Math.pow(2, (-10 * e) / 1));
                            },
                            easeInOutExpo: function (e) {
                                return 0 === e ? 0 : 1 === e ? 1 : (e /= 0.5) < 1 ? 0.5 * Math.pow(2, 10 * (e - 1)) : 0.5 * (2 - Math.pow(2, -10 * --e));
                            },
                            easeInCirc: function (e) {
                                return e >= 1 ? e : -1 * (Math.sqrt(1 - (e /= 1) * e) - 1);
                            },
                            easeOutCirc: function (e) {
                                return 1 * Math.sqrt(1 - (e = e / 1 - 1) * e);
                            },
                            easeInOutCirc: function (e) {
                                return (e /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
                            },
                            easeInElastic: function (e) {
                                var t = 1.70158,
                                    s = 0,
                                    a = 1;
                                return 0 === e
                                    ? 0
                                    : 1 == (e /= 1)
                                    ? 1
                                    : (s || (s = 0.3), a < Math.abs(1) ? ((a = 1), (t = s / 4)) : (t = (s / (2 * Math.PI)) * Math.asin(1 / a)), -a * Math.pow(2, 10 * (e -= 1)) * Math.sin(((1 * e - t) * (2 * Math.PI)) / s));
                            },
                            easeOutElastic: function (e) {
                                var t = 1.70158,
                                    s = 0,
                                    a = 1;
                                return 0 === e
                                    ? 0
                                    : 1 == (e /= 1)
                                    ? 1
                                    : (s || (s = 0.3), a < Math.abs(1) ? ((a = 1), (t = s / 4)) : (t = (s / (2 * Math.PI)) * Math.asin(1 / a)), a * Math.pow(2, -10 * e) * Math.sin(((1 * e - t) * (2 * Math.PI)) / s) + 1);
                            },
                            easeInOutElastic: function (e) {
                                var t = 1.70158,
                                    s = 0,
                                    a = 1;
                                return 0 === e
                                    ? 0
                                    : 2 == (e /= 0.5)
                                    ? 1
                                    : (s || (s = 0.3 * 1.5 * 1),
                                      a < Math.abs(1) ? ((a = 1), (t = s / 4)) : (t = (s / (2 * Math.PI)) * Math.asin(1 / a)),
                                      e < 1 ? a * Math.pow(2, 10 * (e -= 1)) * Math.sin(((1 * e - t) * (2 * Math.PI)) / s) * -0.5 : a * Math.pow(2, -10 * (e -= 1)) * Math.sin(((1 * e - t) * (2 * Math.PI)) / s) * 0.5 + 1);
                            },
                            easeInBack: function (e) {
                                var t = 1.70158;
                                return 1 * (e /= 1) * e * ((t + 1) * e - t);
                            },
                            custom: function (e, t) {
                                return e < 0.5 ? 0 : Math.sin(e * Math.PI * 2 + Math.PI);
                            },
                            easeOutBack: function (e) {
                                return 1 * ((e / 1 - 1) * (e / 1 - 1) * (2.70158 * (e / 1 - 1) + 1.70158) + 1);
                            },
                            easeInOutBack: function (e) {
                                var t = 1.70158;
                                return (e /= 0.5) < 1 ? e * e * ((1 + (t *= 1.525)) * e - t) * 0.5 : 0.5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2);
                            },
                            easeInBounce: function (t) {
                                return 1 - e.transitions.easeOutBounce(1 - t);
                            },
                            easeOutBounce: function (e) {
                                return e < 1 / 2.75 ? 7.5625 * e * e * 1 : 7.5625 * (e -= 1.5 / 2.75) * e + 0.8575 > 1 ? 1 : 7.5625 * e * e + 0.8575;
                            },
                            easeInOutBounce: function (e) {
                                return e < 0.5 ? 0.5 * easingEffects.easeInBounce(2 * e) : 0.5 * easingEffects.easeOutBounce(2 * e - 1) + 0.5;
                            },
                        }),
                        e
                    );
                })();
            },
            function (e, t) {
                e.exports = (function () {
                    function e(e, t) {
                        (this.startCallback = t), (this.incorrectOrientation = !1), (this.resumeOnCorrectOrientation = !1);
                        var s = document.createElement("style");
                        (s.innerHTML =
                            "#rotate-screen {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    z-index: 2147483647;\n    background-color: #000000;\n    background-image: url('assets/rotate.png');\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: center;\n}"),
                            document.head.appendChild(s);
                        var a = document.createElement("div");
                        (a.id = "rotate-screen"),
                            (a.style.display = "none"),
                            (e ? document.getElementById(e) : document.body).appendChild(a),
                            (this.rotate = a),
                            (this.desktop = window.game.isDesktop()),
                            (this._onResize = this.OnResize.bind(this)),
                            window.addEventListener("resize", this._onResize),
                            this.OnResize();
                    }
                    return (
                        (e.prototype.constructor = e),
                        (e.prototype.OnResize = function () {
                            var e = this.GetScreenOrientation() || "portrait-primary";
                            this.desktop || "portrait-primary" == e || "portrait-secondary" == e
                                ? (this.LeaveIncorrectOrientation(), this.startCallback && (window.scrollTo(0, 0), this.startCallback.call(), delete this.startCallback))
                                : this.EnterIncorrectOrientation();
                        }),
                        (e.prototype.Pause = function () {
                            window.game && game.pause();
                        }),
                        (e.prototype.Resume = function () {
                            window.game && game.resume();
                        }),
                        (e.prototype.EnterIncorrectOrientation = function () {
                            this.ShowIncorrectOrientationMessage(), this.Pause();
                        }),
                        (e.prototype.LeaveIncorrectOrientation = function () {
                            this.HideIncorrectOrientationMessage(), this.Resume();
                        }),
                        (e.prototype.ShowIncorrectOrientationMessage = function () {
                            (this.incorrectOrientation = !0), (this.rotate.style.display = "initial");
                        }),
                        (e.prototype.HideIncorrectOrientationMessage = function () {
                            (this.incorrectOrientation = !1), (this.rotate.style.display = "none");
                        }),
                        (e.prototype.GetScreenOrientation = function (e) {
                            var t = window.screen,
                                s = t.orientation || t.mozOrientation || t.msOrientation;
                            if (s && "string" == typeof s.type) return s.type;
                            if ("string" == typeof s) return s;
                            var a = "portrait-primary",
                                n = "landscape-primary";
                            if ("screen" === e) return t.height > t.width ? a : n;
                            if ("viewport" === e) return t.visualBounds.height > t.visualBounds.width ? a : n;
                            if ("window.orientation" === e && "number" == typeof window.orientation) return 0 === window.orientation || 180 === window.orientation ? a : n;
                            if (window.matchMedia) {
                                if (window.matchMedia("(orientation: portrait)").matches) return a;
                                if (window.matchMedia("(orientation: landscape)").matches) return n;
                            }
                            return t.visualBounds.height > t.visualBounds.width ? a : n;
                        }),
                        e
                    );
                })();
            },
            function (e, t) {
                e.exports = (function () {
                    function e() {}
                    return (
                        e.fontFamily,
                        e.locale,
                        e.language,
                        (e.getString = function (t) {
                            return e.locale[t][e.language];
                        }),
                        (e.fitText = function (e, t, s) {
                            e.scale.set(1);
                            var a = 1,
                                n = 1;
                            e.width > t && (a = t / e.width), e.height > s && (n = s / e.height), e.scale.set(Math.min(a, n));
                        }),
                        e
                    );
                })();
            },
        ]);
    },
]);
