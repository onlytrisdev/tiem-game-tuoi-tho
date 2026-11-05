!function() {
    "use strict";
    var t, e, i, a, s, n, o, r, h, l, c, d, m;
    function __awaiter(t, e, i, a) {
        return new(i || (i = Promise))(function(s, n) {
            function fulfilled(t) {
                try {
                    step(a.next(t))
                } catch(t) {
                    n(t)
                }
            }
            function rejected(t) {
                try {
                    step(a.
                    throw (t))
                } catch(t) {
                    n(t)
                }
            }
            function step(t) {
                t.done ? s(t.value) : new i(function(e) {
                    e(t.value)
                }).then(fulfilled, rejected)
            }
            step((a = a.apply(t, e || [])).next())
        })
    }
    class g extends Laya.Script {
        constructor() {
            super(...arguments),
            this._isClick = !1
        }
        clickFalse() {
            this._isClick = !1
        }
        click() {
            return !! this._isClick || (this._isClick = !0, !1)
        }
        onAwake() {
            super.onAwake(),
            this.view = this.owner,
            this.view.width = Laya.stage.width,
            this.view.height = Laya.stage.height,
            this.Open()
        }
        onEnable() {
            super.onEnable(),
            this.OpenEvent();
        }
        onDisable() {
            super.onDisable(),
            this.CloseEvent()
        }
        OpenEvent() {}
        CloseEvent() {
            this._isClick = !1
        }
        Hide() {}
        Open() {}
        SetParameter(t) {
            this.parameter = t
        }
    }
    class u {
        static trackEvent(t, e = null) {
            zs.td.justTrack(t, e)
        }
    }
    u.GAME_HOME = "GAME_HOME",
    u.GAME_START = "GAME_START",
    u.GAME_END = "GAME_END",
    u.GAME_RELIVE = "GAME_RELIVE",
    u.GAME_CHANGE_LEVEL = "GAME_CHANGE_LEVEL",
    u.HIDE_GUIDE = "HIDE_GUIDE",
    u.SHOW_TOUCH = "SHOW_TOUCH",
    u.UPDATE_TOUCH = "UPDATE_TOUCH",
    u.UPDATE_PRO = "UPDATE_PRO",
    u.UPDATE_MINGPAI = "UPDATE_MINGPAI",
    u.UPDATE_ENEMY = "UPDATE_ENEMY",
    u.UPDATE_PLAYER = "UPDATE_PLAYER",
    u.UPDATE_HP = "UPDATE_HP",
    u.ADD_MINGPAI = "ADD_MINGPAI",
    u.HINT_SHOW = "HINT_SHOW",
    u.CHANGE_HINT = "CHANGE_HINT",
    u.GET_SILVER = "GET_SILVER",
    u.BUFF_ICON = "BUFF_ICON",
    u.ALL_HIT = "ALL_HIT",
    u.HIDE_HIT = "HIDE_HIT",
    u.InterfereAiState = "InterfereAiState",
    u.BOMB_SEND = "BOMB_SEND",
    u.RELIVE = "RELIVE",
    u.TOUCH_DOWN = "TOUCH_DOWN",
    u.TOUCH_MOVE = "TOUCH_MOVE",
    u.TOUCH_UP = "TOUCH_UP",
    u.PLYER_MOVE = "PLYER_MOVE",
    u.SoldierWarn = "SoldierWarn",
    u.HeadDes = "HeadDes",
    u.UPDATE_GOLD = "UPDATE_GOLD",
    u.GAMEPAGE_HIDDLEVIDEO_BOMB = "GAMEPAGE_HIDDLEVIDEO_BOMB",
    u.GAMEPAGE_FIREBOMB_BUTTON = "GAMEPAGE_FIREBOMB_BUTTON",
    function(t) {
        t[t.None = 0] = "None",
        t[t.Home = 1] = "Home",
        t[t.Game = 2] = "Game"
    } (t || (t = {})),
    function(t) {
        t[t.Standby = 0] = window.lang.Standby,
        t[t.Move = 1] = window.lang.Move,
        t[t.Attack = 2] = window.lang.Attack,
        t[t["Finish"] = 3] = window.lang.Finish,
        t[t["Mania"] = 4] = window.lang.Mania,
        t[t["Die"] = 5] = window.lang.Die,
        t[t.Moveattack = 6] = window.lang.Moveattack
    } (e || (e = {})),
    function(t) {
        t[t["Floor"] = 16] = window.lang.Floor,
        t[t["Player"] = 8] = window.lang.Player
    } (i || (i = {})),
    function(t) {
        t[t.none = 0] = "none",
        t[t["Player"] = 1] = window.lang.Player,
        t[t["Enermy"] = 2] = window.lang.Enermy
    } (a || (a = {})),
    function(t) {
        t[t.none = 0] = "none",
        t[t["SoldierBullet"] = 1] = window.lang.SoldierBullet,
        t[t["TankBullet"] = 2] = window.lang.TankBullet,
        t[t["RobotBullet"] = 3] = window.lang.RobotBullet,
        t[t["ZealotBullet"] = 4] = window.lang.ZealotBullet,
        t[t["BeetleBullet"] = 5] = window.lang.BeetleBullet,
        t[t["TurretBullet"] = 6] = window.lang.TurretBullet,
        t[t["DragonKightBullet"] = 7] = window.lang.DragonKightBullet
    } (s || (s = {})),
    function(t) {
        t[t.none = 0] = "none",
        t[t["Player"] = 1] = window.lang.Player,
        t[t["FightingUnit"] = 2] = window.lang.FightingUnit
    } (n || (n = {})),
    function(t) {
        t[t.none = 0] = "none",
        t[t["Tank"] = 1] = window.lang.Tank,
        t[t["Soldier"] = 2] = window.lang.Soldier,
        t[t["Pyro"] = 3] = window.lang.Pyro,
        t[t["Medic"] = 4] = window.lang.Medic,
        t[t["Zealot"] = 5] = window.lang.Zealot,
        t[t["Beetle"] = 6] = window.lang.Beetle,
        t[t["Turret"] = 7] = window.lang.Turret,
        t[t["DragonKnight"] = 8] = window.lang.DragonKnight
    } (o || (o = {})),
    function(t) {
        t[t["Normal"] = 0] = window.lang.Normal,
        t[t["Video"] = 1] = window.lang.Video
    } (r || (r = {})),
    function(t) {
        t[t["Silver"] = 0] = window.lang.Silver,
        t[t["Gold"] = 1] = window.lang.Gold
    } (h || (h = {})),
    function(t) {
        t[t.none = 0] = "none",
        t[t["DispatchPoint"] = 1] = window.lang.DispatchPoint,
        t[t["TankBattalion"] = 2] = window.lang.TankBattalion,
        t[t["Barracks"] = 3] = window.lang.Barracks,
        t[t["WeaponBattalion"] = 4] = window.lang.WeaponBattalion,
        t[t["ArmorBattalion"] = 5] = window.lang.ArmorBattalion,
        t[t["MedicBattalion"] = 6] = window.lang.MedicBattalion,
        t[t["MissileBattalion"] = 7] = window.lang.MissileBattalion,
        t[t["MortarsBattalion"] = 8] = window.lang.MortarsBattalion
    } (l || (l = {})),
    function(t) {
        t[t.Circle = 0] = "Circle",
        t[t.FindBrand = 1] = "FindBrand",
        t[t.PutSoldier = 2] = "PutSoldier",
        t[t.AvoidWar = 3] = "AvoidWar",
        t[t.GoFight = 4] = "GoFight",
        t[t.FindEny = 5] = "FindEny",
        t[t.AddCamp = 6] = "AddCamp"
    } (c || (c = {})),
    function(t) {
        t[t.earth = 0] = "earth",
        t[t.moon = 1] = "moon",
        t[t.battle = 2] = "battle"
    } (d || (d = {})),
    function(t) {
        t[t.startGame = 0] = "startGame",
        t[t.selectGame = 1] = "selectGame",
        t[t.moonGame = 2] = "moonGame",
        t[t.battleGame = 3] = "battleGame"
    } (m || (m = {}));
    var p, L, f = Laya.Vector2,
    C = Laya.Vector3;
    class y {
        static Vector3_Make(t = 0) {
            let e = new Laya.Vector3;
            return e.x = t,
            e.y = t,
            e.z = t,
            e
        }
        static Vector2_Multiply(t, e) {
            let i = t.clone();
            return "number" == typeof e ? (i.x *= e, i.y *= e) : (i.x *= e.x, i.y *= e.y),
            i
        }
        static Vector2_NormalVector(t) {
            return new f( - t.y, t.x)
        }
        static Vector2_Cross(t, e) {
            return t.x * e.y - e.x * t.y
        }
        static Vector2_Normalized(t) {
            var e = this.Vector2_Magnitude(t);
            return new f(t.x / e, t.y / e)
        }
        static Vector2_SqrMagnitude(t) {
            return t.x * t.x + t.y * t.y
        }
        static Vector2_Magnitude(t) {
            return Math.sqrt(t.x * t.x + t.y * t.y)
        }
        static Vector2_Substract(t, e) {
            let i = t.clone();
            return "number" == typeof e ? (i.x -= e, i.y -= e) : (i.x -= e.x, i.y -= e.y),
            i
        }
        static Vector3_Multiply(t, e) {
            let i = t.clone();
            return "number" == typeof e ? (i.x *= e, i.y *= e, i.z *= e) : (i.x *= e.x, i.y *= e.y, i.z *= e.z),
            i
        }
        static Vector3_Divide(t, e) {
            let i = t.clone();
            return "number" == typeof e ? (i.x /= e, i.y /= e, i.z /= e) : (i.x /= e.x, i.y /= e.y, i.z /= e.z),
            i
        }
        static Vector3_Add(t, e) {
            let i = t.clone();
            return "number" == typeof e ? (i.x += e, i.y += e, i.z += e) : (i.x += e.x, i.y += e.y, i.z += e.z),
            i
        }
        static Vector3_Substract(t, e) {
            let i = t.clone();
            return "number" == typeof e ? (i.x -= e, i.y -= e, i.z -= e) : (i.x -= e.x, i.y -= e.y, i.z -= e.z),
            i
        }
        static ClampDegree(t) {
            return t >= 0 && t < 360 ? t: ((t %= 360) < 0 && (t = 360 + t), t)
        }
        static DegreeDistance(t, e) {
            t = this.ClampDegree(t);
            let i = (e = this.ClampDegree(e)) - t;
            return i > 180 ? i -= 360 : i < -180 && (i = 360 + i),
            i
        }
        static Point_Add(t, e) {
            let i = new Laya.Point(t.x, t.y);
            return "number" == typeof e ? (i.x += e, i.y += e) : (i.x += e.x, i.y += e.y),
            i
        }
        static Point_Substarct(t, e) {
            let i = new Laya.Point(t.x, t.y);
            return "number" == typeof e ? (i.x -= e, i.y -= e) : (i.x -= e.x, i.y -= e.y),
            i
        }
        static Point_Multiply(t, e) {
            let i = new Laya.Point(t.x, t.y);
            return "number" == typeof e ? (i.x *= e, i.y *= e) : (i.x *= e.x, i.y *= e.y),
            i
        }
        static Point_Divide(t, e) {
            let i = new Laya.Point(t.x, t.y);
            return "number" == typeof e ? (i.x /= e, i.y /= e) : (i.x /= e.x, i.y /= e.y),
            i
        }
        static Point_SqrMagnitude(t) {
            return null == t ? 0 : t.x * t.x + t.y * t.y
        }
        static Point_Magnitude(t) {
            return null == t ? 0 : Math.sqrt(t.x * t.x + t.y * t.y)
        }
        static Vector3_SqrMagnitude(t) {
            return t.x * t.x + t.y * t.y + t.z * t.z
        }
        static Vector3_Magnitude(t) {
            return Math.sqrt(t.x * t.x + t.y * t.y + t.z * t.z)
        }
        static Vector3_Normalize(t) {
            let e = new Laya.Vector3;
            return Laya.Vector3.normalize(t, e),
            e
        }
        static VectorToAngle(t) {
            return null == t ? 0 : y.ClampDegree(180 * Math.atan2( - t.y, t.x) / Math.PI - 90)
        }
        static GetForward(t) {
            let e = new Laya.Vector3;
            return null != t && (t.transform.getForward(e), Laya.Vector3.normalize(e, e)),
            e
        }
        static setForward(t, e) {
            if (null == t) return;
            let i = t.transform.worldMatrix;
            i.setForward(e),
            t.transform.worldMatrix = i
        }
        static randRange(t, e) {
            return Math.random() * (e - t) + t << 0
        }
        static inSideUnityCube() {
            return new C(this.randRangeFloat( - 1, 1), this.randRangeFloat( - 1, 1), this.randRangeFloat( - 1, 1))
        }
        static randRangeFloat(t, e) {
            return Math.random() * (e - t) + t
        }
        static pickNumberArray(t, e, i) {
            if (i <= 0) return [];
            if (t > e) {
                let i = t;
                t = e,
                e = i
            }
            let a = [],
            s = [];
            for (let i = t; i <= e; i++) s.push(i);
            if (i >= s.length) return s;
            for (let t = 0; t < i; t++) {
                let t = this.randRange(0, s.length);
                a.push(s[t]),
                s.splice(t, 1)
            }
            return a
        }
        static clamp(t, e, i) {
            return t < e ? e: t > i ? i: t
        }
        static clamp01(t) {
            return this.clamp(t, 0, 1)
        }
        static lerp(t, e, i) {
            return i <= 0 ? t: i >= 1 ? e: t + (e - t) * i
        }
        static CreateQuaternionFromEuler(t) {
            let e = 180 / Math.PI,
            i = new Laya.Quaternion;
            return Laya.Quaternion.createFromYawPitchRoll(t.y / e, t.x / e, t.z / e, i),
            i
        }
        static StringStartWith(t, e, i) {
            if (null == t || null == e) return ! 1;
            if (e.length > t.length) return ! 1;
            let a = t.slice(0, e.length);
            return i ? a.toLowerCase() == e.toLowerCase() : a == e
        }
        static RadianToAngle(t) {
            return 180 / Math.PI * t
        }
        static AngleToRadian(t) {
            return Math.PI / 180 * t
        }
        static EulerAngleToForward(t) {
            let e = 180 / Math.PI,
            i = new Laya.Quaternion;
            Laya.Quaternion.createFromYawPitchRoll(t.y / e, t.x / e, t.z / e, i);
            let a = i.x,
            s = i.y,
            n = i.z,
            o = i.w,
            r = a + a,
            h = s + s,
            l = n * r,
            c = o * h,
            d = n * h,
            m = o * r,
            g = a * r,
            u = s * h;
            return new Laya.Vector3( - (l + c), -(d - m), -(1 - g - u))
        }
        static setForwardQuarterionSlerp(t, e, i) {
            if (null == t) return;
            let a = new Laya.Quaternion;
            Laya.Quaternion.rotationLookAt(e, new Laya.Vector3(0, 1, 0), a),
            a.invert(a);
            let s = new Laya.Quaternion;
            Laya.Quaternion.slerp(t.transform.rotation, a, i, s),
            t.transform.rotation = s
        }
        static setForwardQuarterion(t, e) {
            if (null == t) return;
            let i = new Laya.Quaternion;
            Laya.Quaternion.rotationLookAt(e, new Laya.Vector3(0, 1, 0), i),
            t.transform.rotation = i
        }
        static VectorRotate(t, e, i) {
            Laya.Vector3.normalize(e, e),
            i *= .5;
            let a = Math.sin(i),
            s = Math.sqrt(1 - a * a),
            n = 2 * a,
            o = t.x * e.x + t.y * e.y + t.z * e.z,
            r = n * (a * (e.x * o - t.x) + s * (e.y * t.z - t.y * e.z)) + t.x,
            h = n * (a * (e.y * o - t.y) + s * (e.z * t.x - t.z * e.x)) + t.y,
            l = n * (a * (e.z * o - t.z) + s * (e.x * t.y - t.x * e.y)) + t.z;
            return new Laya.Vector3(r, h, l)
        }
        static FollowRotate(t, e, i) {
            let a = Laya.Vector3.scalarLength(t),
            s = Laya.Vector3.scalarLength(e);
            if (t = new Laya.Vector3(t.x / a, t.y / a, t.z / a), e = new Laya.Vector3(e.x / s, e.y / s, e.z / s), Laya.Vector3.equals(t, e) || Laya.Vector3.equals(t, new Laya.Vector3( - e.x, -e.y, -e.z))) return Laya.Vector3.equals(t, e) ? i: new Laya.Vector3( - i.x, -i.y, -i.z);
            let n = new Laya.Vector3;
            Laya.Vector3.cross(t, e, n);
            let o = Laya.Vector3.scalarLength(n),
            r = o / (a * s);
            return n = new Laya.Vector3(n.x / o, n.y / o, n.z / o),
            y.VectorRotate(i, n, r)
        }
        static fromToRotation(t, e) {
            let i = new Laya.Quaternion;
            if (0 == t.x && 0 == t.y && 0 == t.z || 0 == e.x && 0 == e.y && 0 == e.z) return i;
            let a = t.clone(),
            s = e.clone(),
            n = Math.abs(a.x);
            n = (n = n > Math.abs(a.y) ? n: Math.abs(a.y)) > Math.abs(a.z) ? n: Math.abs(a.z),
            a.x /= n,
            a.y /= n,
            a.z /= n,
            n = (n = (n = Math.abs(s.x)) > Math.abs(s.y) ? n: Math.abs(s.y)) > Math.abs(s.z) ? n: Math.abs(s.z),
            s.x /= n,
            s.y /= n,
            s.z /= n;
            a.x = Math.abs(a.x) < .001 ? 0 : a.x,
            a.y = Math.abs(a.y) < .001 ? 0 : a.y,
            a.z = Math.abs(a.z) < .001 ? 0 : a.z,
            s.x = Math.abs(s.x) < .001 ? 0 : s.x,
            s.y = Math.abs(s.y) < .001 ? 0 : s.y,
            s.z = Math.abs(s.z) < .001 ? 0 : s.z;
            let o = new Laya.Vector3;
            Laya.Vector3.normalize(a, o);
            let r = new Laya.Vector3;
            Laya.Vector3.normalize(s, r);
            let h = new Laya.Vector3;
            if (Laya.Vector3.add(o, r, h), Laya.Vector3.normalize(h, h), 0 == h.x && 0 == h.y && 0 == h.z) {
                if (0 != a.x && 0 == a.y && 0 == a.z) return new Laya.Quaternion(0, 1, 0, 0);
                if (0 == a.x && 0 != a.y && 0 == a.z || 0 == a.x && 0 == a.y && 0 != a.z || 0 == a.x && 0 != a.y && 0 != a.z) return new Laya.Quaternion(1, 0, 0, 0);
                if (0 != a.x && 0 == a.y && 0 != a.z) {
                    let t = r.z + o.x;
                    return t < 0 || 0 == t && r.z < 0 ? new Laya.Quaternion( - r.z, 0, -o.x, 0) : new Laya.Quaternion(r.z, 0, o.x, 0)
                }
                if (0 != a.x && 0 != a.y && 0 == a.z) {
                    let t = r.y + o.x;
                    return t < 0 || 0 == t && r.y < 0 ? new Laya.Quaternion( - r.y, -o.x, 0, 0) : new Laya.Quaternion(r.y, o.x, 0, 0)
                }
                h.y = a.z,
                h.z = s.y,
                Laya.Vector3.normalize(h, h)
            }
            return Laya.Quaternion.multiply(new Laya.Quaternion( - r.x, -r.y, -r.z, 0), new Laya.Quaternion(h.x, h.y, h.z, 0), i),
            i
        }
        static Slope(t, e) {
            return (e.y - t.y) / (e.x - t.x)
        }
        static PointToLineDistance(t, e) {
            let i = this.Slope(t.p1, t.p2),
            a = t.p1.y - i * t.p1.x;
            return Math.abs(i * e.x + -1 * e.y + a) / Math.sqrt(i * i + 1)
        }
        static intersect_in(t, e, i, a) {
            return this.dots_inline(t, e, i) && this.dots_inline(t, e, a) ? this.dot_online_in(t, i, a) || this.dot_online_in(e, i, a) || this.dot_online_in(i, t, e) || this.dot_online_in(a, t, e) : !this.same_side(t, e, i, a) && !this.same_side(i, a, t, e)
        }
        static dots_inline(t, e, i) {
            return this.zero(this.xmult(t, e, i))
        }
        static zero(t) {
            return (t > 0 ? t: -t) < 1e-8
        }
        static xmult(t, e, i) {
            return (t.x - i.x) * (e.y - i.y) - (e.x - i.x) * (t.y - i.y)
        }
        static same_side(t, e, i, a) {
            return this.xmult(i, t, a) * this.xmult(i, e, a) > 1e-8
        }
        static dot_online_in(t, e, i) {
            return this.zero(this.xmult(t, e, i)) && (e.x1 - t.x) * (i.x - t.x) < 1e-8 && (e.y1 - t.y) * (i.y - t.y) < 1e-8
        }
        static vectorAngle(t, e) {
            return (t.x * e.x + t.y * e.y) / (Math.sqrt(Math.pow(t.x, 2) + Math.pow(t.y, 2)) * Math.sqrt(Math.pow(e.x, 2) + Math.pow(e.y, 2)))
        }
        static pointInPolygon(t, e) {
            for (var i = !1,
            a = t.x,
            s = t.y,
            n = e.length,
            o = 0,
            r = n - 1; o < n; r = o++) {
                var h = e[o].x,
                l = e[o].y,
                c = e[r].x,
                d = e[r].y;
                l > s != d > s && a < (c - h) * (s - l) / (d - l) + h && (i = !i)
            }
            return i
        }
    } !
    function(t) {
        t.dateFormat = function(t, e) {
            let i;
            const a = {
                "Y+": e.getFullYear().toString(),
                "m+": (e.getMonth() + 1).toString(),
                "d+": e.getDate().toString(),
                "H+": e.getHours().toString(),
                "M+": e.getMinutes().toString(),
                "S+": e.getSeconds().toString()
            };
            for (let e in a)(i = new RegExp("(" + e + ")").exec(t)) && (t = t.replace(i[1], 1 == i[1].length ? a[e] : a[e].padStart(i[1].length, "0")));
            return t
        };
        class e {
            static printCallStack(t, i = !0) {
                let a = arguments.callee.caller,
                s = 0;
                for (t = t || 10, e.index++, e.index > 500 && (e.index = 1); a && s < t;) a = a.caller,
                s++
            }
            static getFunctionName(t, e) {
                if (e) {
                    let e;
                    if ("function" == typeof t) {
                        let i = (e = ("" + t).match(/function\s*\((\s*\$*\S+\s*,)*(\s*\$*\S+\s*)?\)/g)) && e[0];
                        if ("function ()" != i) return i
                    }
                }
                return t.toString()
            }
        }
        function perFind(t, e) {
            if (t && e && e.length > 0) {
                if (0 == e.length) return null;
                if (1 == e.length) {
                    if (t.name == e[0]) return t;
                    for (let i = 0; i < t.numChildren; i++) if (t.getChildAt(i).name == e[0]) return t.getChildAt(i);
                    return null
                }
                if (0 == t.numChildren) return null;
                if (t.name == e[0]) {
                    e.shift();
                    for (let i = 0; i < t.numChildren; i++) {
                        let a = perFind(t.getChildAt(i), e);
                        if (a) return a
                    }
                }
                return null
            }
            return null
        }
        let i;
        e.index = 0,
        t.StackTool = e,
        t.GetLocalItem = function(e, i, a = 0) {
            let s = window.ystorage.getItem(e);
            return null != s && null != s && "NaN" != s && "" != s ? a ? s: parseInt(s) : (t.SetLocalItem(e, i), a ? i.toString() : parseInt(i))
        },
        t.SetLocalItem = function(t, e) {
            t && (e || 0 == e) ? window.ystorage.setItem(t, e.toString()) : console.error("本地传输数据为空")
        },
        t.GetLocalJson = function(e, i) {
            let a = window.ystorageExt.getJSON(e);
            return null != a && null != a && "NaN" != a && "" != a ? a: (t.SetLocalJson(e, i), i)
        },
        t.SetLocalJson = function(t, e) {
            t && (e || 0 == e) ? window.ystorageExt.setJSON(t, e) : console.error("本地传输数据为空")
        },
        t.EnableLightShadow = function(t) {
            if (t) {
                let e = t;
                e.shadowMode = Laya.ShadowMode.SoftLow,
                e.shadowStrength = .38,
                e.shadowDistance = 50,
                e.shadowResolution = 2048,
                e.shadowCascadesMode = Laya.ShadowCascadesMode.NoCascades,
                e.shadowNormalBias = 1
            }
        },
        t.EnableSpriteShadow = function(t) {
            t && (t.meshRenderer.receiveShadow = !0)
        },
        t.DisableShadowRecursive = function DisableShadowRecursive(t) {
            if (t) {
                let e = t;
                if (e.meshRenderer && (e.meshRenderer.receiveShadow = !1, e.meshRenderer.castShadow = !1), 0 == t.numChildren) return;
                for (let e = 0; e < t.numChildren; e++) DisableShadowRecursive(t.getChildAt(e))
            }
        },
        t.EnableShadowReciveRecursive = function EnableShadowReciveRecursive(t) {
            if (t) {
                let e = t;
                if (e.meshRenderer && (e.meshRenderer.receiveShadow = !0), 0 == t.numChildren) return;
                for (let e = 0; e < t.numChildren; e++) EnableShadowReciveRecursive(t.getChildAt(e))
            }
        },
        t.EnableCastShadowRecursive = function EnableCastShadowRecursive(t) {
            if (t) {
                let e = t;
                if (e.meshRenderer && (e.meshRenderer.receiveShadow = !0, e.meshRenderer.castShadow = !0), 0 == t.numChildren) return;
                for (let e = 0; e < t.numChildren; e++) EnableCastShadowRecursive(t.getChildAt(e))
            }
        },
        t.FindChild = function(t, e) {
            if (t && e) {
                let i = e.split("/");
                if (0 == i.length) return null;
                if (1 == i.length) {
                    if (t.name == i[0]) return t;
                    for (let e = 0; e < t.numChildren; e++) if (t.getChildAt(e).name == i[0]) return t.getChildAt(e);
                    return null
                }
                if (0 == t.numChildren) return null;
                if (t.name == i[0]) {
                    i.shift();
                    for (let e = 0; e < t.numChildren; e++) {
                        let a = perFind(t.getChildAt(e), i);
                        if (a) return a
                    }
                }
                return null
            }
            return null
        },
        function(t) {
            t.IPhone6 = "IPhone6",
            t.IPhone7 = "IPhone7",
            t.IPhone8 = "IPhone8",
            t.IPhone8Later = "IPhone8Later"
        } (i = t.DeviceType || (t.DeviceType = {})),
        t.GetDevice = function() {
            return i.IPhone8Later
        },
        t.Inside_Out_Shuffle = function(t) {
            let e = [];
            if (null == t || null == e) return;
            e.splice(0, e.length),
            e = e.concat(t);
            let i = 0;
            for (let a = 0; a < t.length; a++) i = y.randRange(0, a),
            e[a] = e[i],
            e[i] = t[a];
            return e
        },
        t.CalculateScale = function(t) {
            if (null == t || null == t) return 1;
            let e = t.meshRenderer.bounds._boundBox,
            i = Math.abs(e.max.x - e.min.x),
            a = Math.abs(e.max.y - e.min.y),
            s = Math.abs(e.max.z - e.min.z);
            return.6 / Math.max(i, a, s)
        },
        t.GetBoundBoxSize = function(t, e = 0) {
            if (null == t || null == t) return null;
            let i,
            a = new Laya.Vector3;
            switch (e) {
            case 0:
                i = t.meshRenderer.bounds._boundBox,
                a.x = Math.abs(i.max.x - i.min.x),
                a.y = Math.abs(i.max.y - i.min.y),
                a.z = Math.abs(i.max.z - i.min.z);
                break;
            case 1:
                i = t.skinnedMeshRenderer.bounds._boundBox,
                a.x = Math.abs(i.max.x - i.min.x),
                a.y = Math.abs(i.max.y - i.min.y),
                a.z = Math.abs(i.max.z - i.min.z);
                break;
            case 2:
                a.x = t.getComponent(Laya.PhysicsCollider).colliderShape._sizeX,
                a.y = t.getComponent(Laya.PhysicsCollider).colliderShape._sizeY,
                a.z = t.getComponent(Laya.PhysicsCollider).colliderShape._sizeZ;
                break;
            case 3:
                a.x = t.getComponent(Laya.Rigidbody3D).colliderShape._sizeX,
                a.y = t.getComponent(Laya.Rigidbody3D).colliderShape._sizeY,
                a.z = t.getComponent(Laya.Rigidbody3D).colliderShape._sizeZ
            }
            return {
                width: a.x,
                height: a.y,
                long: a.z
            }
        },
        t.RemoveArrayKey = function(t, e) {
            if (t.length > 0) for (let i = t.length - 1; i >= 0; i--) if (t[i] == e) return t.splice(i, 1),
            !0;
            return ! 1
        },
        t.isAniEnd = function(t, e, i = 0) {
            return t.getCurrentAnimatorPlayState(i).animatorState.name == e && t.getCurrentAnimatorPlayState(i).normalizedTime >= 1
        },
        t.isAniValue = function(t, e, i, a = 0) {
            return t.getCurrentAnimatorPlayState(a).animatorState.name == e && t.getCurrentAnimatorPlayState(a).normalizedTime >= i
        },
        t.changeAni = function(t, e, i = 0, a = 0) {
            if (! (t && t.owner && t.owner.scene && e)) return ! 1;
            let s = !1;
            for (let i = 0; i < t.controllerLayerCount; i++) if (null != t._controllerLayers[i].getAnimatorState(e)) {
                s = !0;
                break
            }
            return s ? (t.getCurrentAnimatorPlayState(a).animatorState.name != e && (i ? t.crossFade(e, .5, 0, 0) : t.play(e, 0, 0)), !0) : (console.error(t, "  动作：" + e + " 没有找到!!!"), !1)
        },
        t.changeSpeed = function(t, e) {
            t.speed != e && (t.speed = e)
        },
        t.ChangeAni = function(t, e, i, a, s) {
            let n = t.getControllerLayer().getAnimatorState(e);
            var o = n.getScript(Laya.AnimatorStateScript);
            null == o && (o = n.addScript(Laya.AnimatorStateScript)),
            o.onStateEnter = function() {
                i && i.run()
            },
            o.onStateUpdate = function() {
                a && a.run()
            },
            o.onStateExit = function() {
                s && s.run()
            },
            t.play(e, 0, 0)
        },
        t.clearTrailPositions = function(t) {
            let e = t.trailFilter;
            if (!e) return;
            e._lastPosition.setValue(0, 0, 0),
            e._curtime = 0,
            e._totalLength = 0;
            let i = e._trialGeometry;
            if (!i) return;
            i._activeIndex = 0,
            i._endIndex = 0,
            i._disappearBoundsMode = !1;
            let a = i._subBirthTime;
            a && a.fill(0);
            let s = i._subDistance;
            s && s.fill(0),
            i._segementCount = 0,
            i._isTempEndVertex = !1,
            i._needAddFirstVertex = !1,
            i._lastFixedVertexPosition.setValue(0, 0, 0)
        }
    } (p || (p = {}));
    class _ {
        static init() {
            this.gameDataCfg = Laya.loader.getRes(this.configUrl + this.gameDataCfgUrl),
            this.leveDataCfg = this.gameDataCfg.level,
            this.unlockDataCfg = this.gameDataCfg.unlock,
            this.gradeDataCfg = this.gameDataCfg.grade,
            this.airshipDataCfg = this.gameDataCfg.airship,
            this.daodanDataCfg = this.gameDataCfg.configdata,
            this.moonLevelCfg = this.gameDataCfg.moonlevel,
            this.gkRoleDataCfg = this.gameDataCfg.role,
            this.gkArchitectureDataCfg = this.gameDataCfg.architecture,
            this.gkElitesoldiersCfg = this.gameDataCfg.elitesoldiers,
            this.battleLevelCfg = this.gameDataCfg.battlelevel,
            this.dzRoleDataCfg = this.gameDataCfg.battlerole,
            this.dzArchitectureDataCfg = this.gameDataCfg.battlearchitecture,
            this.dzElitesoldiersCfg = this.gameDataCfg.battleelitesoldiers,
            this.battleconfig = this.gameDataCfg.battleconfig
        }
        static SetData() {
            this.leveDataCfg.forEach(t =>{
                this.levelData.push(new I(t))
            }),
            this.unlockDataCfg.forEach(t =>{
                this.unlockData.push(new k(t))
            }),
            this.gradeDataCfg.forEach(t =>{
                this.gradeData.push(new b(t))
            }),
            this.gkRoleData = new v(this.gkRoleDataCfg[0]),
            _.silverNum = JSON.parse(this.gkRoleDataCfg[0].mingpai),
            _.silverTime = JSON.parse(this.gkRoleDataCfg[0].mingpai_time),
            _.rageTime = JSON.parse(this.gkRoleDataCfg[0].baozou_time),
            this.gkArchitectureData = new S(this.gkArchitectureDataCfg[0]),
            this.airShipData = new P(this.airshipDataCfg),
            this.daodanData = new M(this.daodanDataCfg),
            this.gkElitesoldiersData = new T(this.gkElitesoldiersCfg),
            this.moonLevelCfg.forEach(t =>{
                this.moonLevelData.push(new I(t))
            }),
            this.battleLevelCfg.forEach(t =>{
                this.battleLevelData.push(new I(t))
            }),
            this.dzRoleData = new v(this.dzRoleDataCfg[0]),
            this.dzArchitectureData = new S(this.dzArchitectureDataCfg[0]),
            this.dzElitesoldiersData = new T(this.dzElitesoldiersCfg),
            this.dzBattleConfigData = new G(this.battleconfig),
            this.roleData = this.gkRoleData,
            this.architectureData = this.gkArchitectureData,
            this.elitesoldiersData = this.gkElitesoldiersData
        }
        static SearchUnlock(t) {
            for (let e = 0; e < this.unlockData.length; e++) if (t <= this.unlockData[e].end_level) return this.unlockData[e];
            return null
        }
    }
    _.configUrl = "config/",
    _.gameDataCfgUrl = "gameDataCfg.json",
    _.silverGold = 150,
    _.silverNum = 100,
    _.goldNum = 200,
    _.silverTime = 2,
    _.rageTime = 3,
    _.levelData = [],
    _.moonLevelData = [],
    _.battleLevelData = [],
    _.unlockData = [],
    _.gradeData = [],
    _.levelJsonData = [],
    _.levelMoonJsonData = [],
    _.levelBattleJsonData = [],
    _.headquartersJsonData = [],
    _.resourcesDataCfg = {},
    _.resourcesJsonData = [],
    _.resourcesSubJsonData = [],
    _.resourcesMoonJsonData = [],
    _.resourcesBattleJsonData = [];
    class I {
        constructor(t) {
            this.id = 0,
            this.AI1_HP = 0,
            this.AI2_HP = 0,
            this.AI1_atk = 0,
            this.AI2_atk = 0,
            this.AI1_atk_range = 0,
            this.AI2_atk_range = 0,
            this.AI_speed = 0,
            this.tank_HP = 0,
            this.tank_atk = 0,
            this.tank_speed = 0,
            this.tank2_HP = 0,
            this.tank2_atk = 0,
            this.tank2_speed = 0,
            this.AI3_HP = 0,
            this.AI3_atk = 0,
            this.AI3_atk_range = 0,
            this.AI4_HP = 0,
            this.AI4_atk = 0,
            this.AI4_atk_range = 0,
            this.AI5_HP = 0,
            this.AI5_atk = 0,
            this.AI5_atk_range = 0,
            this.level_scene = 0,
            this.mingpai_acount = 0,
            this.gold1 = 0,
            this.gold2 = 0,
            this.mingpai_start_amount = [],
            this.camera_location = [],
            this.camera_rotation = [],
            this.camera_size = 8.6,
            this.krz_HP1 = 20,
            this.krz_atk1 = 2,
            this.krz_range1 = 5,
            this.krz_HP2 = 22,
            this.krz_atk2 = 3,
            this.krz_range2 = 5,
            this.krz_HP3 = 26,
            this.krz_atk3 = 3,
            this.krz_range3 = 6,
            this.lqs_HP = 16,
            this.lqs_atk = 2,
            this.lqs_range = 7,
            this.paota_HP = 20,
            this.paota_atk = 1,
            this.paota_range = 10,
            this.mmc_HP = 20,
            this.mmc_atk = 3,
            this.mmc_range = 7,
            this.id = JSON.parse(t.level),
            this.AI1_HP = JSON.parse(t.AI1_HP),
            this.AI2_HP = JSON.parse(t.AI2_HP),
            this.AI1_atk = JSON.parse(t.AI1_atk),
            this.AI2_atk = JSON.parse(t.AI2_atk),
            this.AI1_atk_range = JSON.parse(t.AI1_atk_range),
            this.AI2_atk_range = JSON.parse(t.AI2_atk_range),
            this.AI_speed = JSON.parse(t.AI_speed),
            this.tank_HP = JSON.parse(t.tank_HP),
            this.tank_atk = JSON.parse(t.tank_atk),
            this.tank_speed = JSON.parse(t.tank_speed),
            this.tank2_HP = JSON.parse(t.tank2_HP),
            this.tank2_atk = JSON.parse(t.tank2_atk),
            this.tank2_speed = JSON.parse(t.tank2_speed),
            this.AI3_HP = JSON.parse(t.AI3_HP),
            this.AI3_atk = JSON.parse(t.AI3_atk),
            this.AI3_atk_range = JSON.parse(t.AI3_atk_range),
            this.AI4_HP = JSON.parse(t.AI4_HP),
            this.AI4_atk = JSON.parse(t.AI4_atk),
            this.AI4_atk_range = JSON.parse(t.AI4_atk_range),
            this.AI5_HP = JSON.parse(t.AI5_HP),
            this.AI5_atk = JSON.parse(t.AI5_atk),
            this.AI5_atk_range = JSON.parse(t.AI5_atk_range),
            t.level_scene && (this.level_scene = JSON.parse(t.level_scene)),
            this.mingpai_acount = JSON.parse(t.mingpai_acount),
            this.gold1 = JSON.parse(t.gold1),
            this.gold2 = JSON.parse(t.gold2);
            let e = String(t.mingpai_start_amount).split(",");
            for (let t = 0; t < e.length; t++) this.mingpai_start_amount.push(parseInt(e[t]));
            let i = String(t.camera_location).split(",");
            for (let t = 0; t < i.length; t++) this.camera_location.push(Number(i[t]));
            let a = String(t.camera_rotation).split(",");
            for (let t = 0; t < a.length; t++) this.camera_rotation.push(Number(a[t]));
            this.camera_size = Number(t.camera_size),
            null != t.krz_HP1 && (this.krz_HP1 = parseFloat(t.krz_HP1)),
            null != t.krz_atk1 && (this.krz_atk1 = parseFloat(t.krz_atk1)),
            null != t.krz_range1 && (this.krz_range1 = parseFloat(t.krz_range1)),
            null != t.krz_HP2 && (this.krz_HP2 = parseFloat(t.krz_HP2)),
            null != t.krz_atk2 && (this.krz_atk2 = parseFloat(t.krz_atk2)),
            null != t.krz_range2 && (this.krz_range2 = parseFloat(t.krz_range2)),
            null != t.krz_HP3 && (this.krz_HP3 = parseFloat(t.krz_HP3)),
            null != t.krz_atk3 && (this.krz_atk3 = parseFloat(t.krz_atk3)),
            null != t.krz_range3 && (this.krz_range3 = parseFloat(t.krz_range3)),
            null != t.lqs_HP && (this.lqs_HP = parseFloat(t.lqs_HP)),
            null != t.lqs_atk && (this.lqs_atk = parseFloat(t.lqs_atk)),
            null != t.lqs_range && (this.lqs_range = parseFloat(t.lqs_range)),
            null != t.paota_HP && (this.paota_HP = parseFloat(t.paota_HP)),
            null != t.paota_atk && (this.paota_atk = parseFloat(t.paota_atk)),
            null != t.paota_range && (this.paota_range = parseFloat(t.paota_range)),
            null != t.mmc_HP && (this.mmc_HP = parseFloat(t.mmc_HP)),
            null != t.mmc_atk && (this.mmc_atk = parseFloat(t.mmc_atk)),
            null != t.mmc_range && (this.mmc_range = parseFloat(t.mmc_range))
        }
    }
    class v {
        constructor(t) {
            this.role_HP1 = 60,
            this.role_HP2 = 80,
            this.role_HP3 = 100,
            this.role_HP4 = 120,
            this.role_HP5 = 140,
            this.role_hill_time = 0,
            this.role_hill_speed = 0,
            this.role_speed1 = 6,
            this.role_speed2 = 7,
            this.role_speed3 = 8,
            this.role_speed4 = 8,
            this.role_speed5 = 9,
            this.max_solider = 30,
            this.baozou_HP = 0,
            this.baozou_speed = 0,
            this.baozou_atk = 0,
            this.junzhang_atk = 0,
            this.junzhang_range = 0,
            this.start_range_add = 3,
            this.start_speed_add = 1.2,
            this.start_attack_add = 1.2,
            this.role_speed_add = .1,
            this.role_attack_add = .2,
            this.role_range_add = .5,
            this.attack_add_list = 0,
            this.hp_add_list = 0,
            this.role_HP1 = JSON.parse(t.role_HP1),
            this.role_HP2 = JSON.parse(t.role_HP2),
            this.role_HP3 = JSON.parse(t.role_HP3),
            t.role_HP4 && (this.role_HP4 = JSON.parse(t.role_HP4)),
            t.role_HP5 && (this.role_HP5 = JSON.parse(t.role_HP5)),
            this.role_hill_time = JSON.parse(t.role_hill_time),
            this.role_hill_speed = JSON.parse(t.role_hill_speed),
            this.role_speed1 = JSON.parse(t.role_speed1),
            t.role_speed2 ? this.role_speed2 = JSON.parse(t.role_speed2) : this.role_speed2 = this.role_speed1,
            t.role_speed3 ? this.role_speed3 = JSON.parse(t.role_speed3) : this.role_speed3 = JSON.parse(t.role_speed2),
            t.role_speed4 && (this.role_speed4 = JSON.parse(t.role_speed4)),
            t.role_speed5 && (this.role_speed5 = JSON.parse(t.role_speed5)),
            this.max_solider = JSON.parse(t.max_soldier),
            this.baozou_HP = JSON.parse(t.baozou_HP),
            this.baozou_speed = JSON.parse(t.baozou_speed),
            this.baozou_atk = JSON.parse(t.baozou_atk),
            this.start_speed_add = JSON.parse(t.juntuan_speed1),
            this.role_speed_add = JSON.parse(t.juntuan_speed2),
            this.start_attack_add = JSON.parse(t.juntuan_atk1),
            this.role_attack_add = JSON.parse(t.juntuan_atk2),
            this.start_range_add = JSON.parse(t.buff_range1),
            this.role_range_add = JSON.parse(t.buff_range2),
            this.junzhang_atk = JSON.parse(t.junzhang_atk),
            this.junzhang_range = JSON.parse(t.junzhang_range),
            this.attack_add_list = JSON.parse(t.atk_upgrade),
            this.hp_add_list = JSON.parse(t.HP_upgrade)
        }
    }
    class S {
        constructor(t) {
            this.junzhang_up1 = 15,
            this.junzhang_up2 = 20,
            this.junzhang_up3 = 30,
            this.junzhang_up4 = 35,
            this.tank_upgrade1 = 45,
            this.tank_upgrade2 = 50,
            this.bingying_unlock = JSON.parse(t.bingying_unlock),
            this.bingying_up1 = JSON.parse(t.bingying_up1),
            this.bingying_up2 = JSON.parse(t.bingying_up2),
            this.junzhang_up1 = JSON.parse(t.junzhang_up1),
            this.junzhang_up2 = JSON.parse(t.junzhang_up2),
            t.junzhang_up3 && (this.junzhang_up3 = JSON.parse(t.junzhang_up3)),
            t.junzhang_up4 && (this.junzhang_up4 = JSON.parse(t.junzhang_up4)),
            this.tank_unlock = JSON.parse(t.tank_unlock),
            t.tank_upgrade1 && (this.tank_upgrade1 = JSON.parse(t.tank_upgrade1)),
            t.tank_upgrade2 && (this.tank_upgrade2 = JSON.parse(t.tank_upgrade2)),
            this.paijipao_unlock = JSON.parse(t.paijipao_unlock),
            this.hedan_unlock = JSON.parse(t.hedan_unlock),
            this.wuqiku_unlock = JSON.parse(t.wuqiku_unlock),
            this.fangju_unlock = JSON.parse(t.fangju_unlock),
            this.hedan_time = JSON.parse(t.hedan_time)
        }
    }
    class k {
        constructor(t) {
            this.id = JSON.parse(t.id),
            this.name = t.name,
            this.start_level = JSON.parse(t.start_level),
            this.end_level = JSON.parse(t.end_level),
            this.icon = t.icon,
            this.title = t.title
        }
    }
    class b {
        constructor(t) {
            this.id = JSON.parse(t.id),
            this.gold = JSON.parse(t.gold)
        }
    }
    class P {
        constructor(t) {
            this.index = p.GetLocalItem("airShipTimeIndex", 0),
            this.airShipTime = [];
            let e = t.airShipTime.split(",");
            if (e) for (let t = 0; t < e.length; t++) this.airShipTime.push(parseInt(e[t]));
            this.airShipSpeed = JSON.parse(t.airShipSpeed),
            this.airShipAttack = JSON.parse(t.airShipAttack)
        }
        get currentAirShipTime() {
            let t = this.airShipTime[this.index];
            return null != t || null != t || NaN != t ? t: NaN
        }
        set airShipIndex(t) {
            this.index += t,
            p.SetLocalItem("airShipTimeIndex", this.index)
        }
    }
    class M {
        constructor(t) {
            this.flyTime = 5e3,
            this.startToStrengthenCount = 3,
            this.startToStrengthenMinPaiNum = 50,
            this.giftCode = [],
            this.giftMinPaiNum = [],
            this.flyTime = JSON.parse(t.flyTime),
            this.startToStrengthenCount = JSON.parse(t.startToStrengthenCount),
            this.startToStrengthenMinPaiNum = JSON.parse(t.startToStrengthenMinPaiNum),
            this.giftCode = t.giftCode.split(","),
            this.giftMinPaiNum = t.giftMinPaiNum.split(",")
        }
    }
    class G {
        constructor(t) {
            this.neutral_soldier_timebirth = JSON.parse(t.neutral_soldier_timebirth),
            this.bubing_build_hp = JSON.parse(t.bubing_build_hp),
            this.penhuobing_build_hp = JSON.parse(t.penhuobing_build_hp),
            this.hedan_build_hp = JSON.parse(t.hedan_build_hp),
            this.sliverLenToLockBar = 0,
            this.mySliverLen = 10,
            this.mySolderToFind = 8,
            this.waitSoldToGoFight = 5,
            this.backHp = .6
        }
    }
    class T {
        constructor(t) {
            this.special_atk = JSON.parse(t.special_atk),
            this.special_HP = JSON.parse(t.special_HP),
            this.special_range = JSON.parse(t.special_range)
        }
    }
    class A {
        constructor(t) {
            this.id = t.id,
            this.pos = new Laya.Vector3( - t.pos.x, t.pos.y, t.pos.z)
        }
    }
    class x {
        constructor(t) {
            t.name && (this.name = t.name),
            t.pos && (this.pos = new Laya.Vector3( - t.pos.x, t.pos.y, t.pos.z)),
            t.rot && (this.rot = new Laya.Quaternion( - t.rot.x, t.rot.y, t.rot.z, -t.rot.w)),
            t.scale && (this.scale = new Laya.Vector3(t.scale.x, t.scale.y, t.scale.z))
        }
    }
    class w {
        constructor(t) {
            this.pos = new Laya.Vector3( - t.pos.x, t.pos.y, t.pos.z),
            this.panel = new x(t.panel),
            this.enemyList = [];
            for (let e = 0; e < t.enemyList.length; e++) this.enemyList.push(new x(t.enemyList[e]));
            this.cubeList = [];
            for (let e = 0; e < t.cubeList.length; e++) this.cubeList.push(new x(t.cubeList[e]))
        }
    }
    class E {
        constructor(t) {
            this.id = t.id,
            this.headquartersList = [];
            for (let e = 0; e < t.headquartersList.length; e++) {
                let i = new A(t.headquartersList[e]);
                this.headquartersList.push(i)
            }
            this.playerPoint = new Laya.Vector3( - t.playerPoint.x, t.playerPoint.y, t.playerPoint.z),
            this.jijiazhantaiPoint = new Laya.Vector3( - t.jijiazhantai.x, t.jijiazhantai.y, t.jijiazhantai.z),
            this.enemyGatheringList = [];
            for (let e = 0; e < t.enemyGatheringList.length; e++) {
                let i = new w(t.enemyGatheringList[e]);
                this.enemyGatheringList.push(i)
            }
            if (this.obsList = [], t.obsList) for (let e = 0; e < t.obsList.length; e++) {
                let i = new x(t.obsList[e]);
                this.obsList.push(i)
            }
            this.startMingpaiPointList = [];
            for (let e = 0; e < t.startMingpaiPointList.length; e++) {
                let i = new x(t.startMingpaiPointList[e]);
                this.startMingpaiPointList.push(i)
            }
            if (this.land = null, t.land && (this.land = new x(t.land)), this.roleList = [], t.roleList) for (let e = 0; e < t.roleList.length; e++) {
                let i = new x(t.roleList[e]);
                this.roleList.push(i)
            }
            if (this.obsLineArray = [], t.obsLineList) for (let e = 0; e < t.obsLineList.length; e++) {
                let i = t.obsLineList[e];
                this.obsLineArray.push(new Laya.Vector2(i.x, i.y))
            }
        }
    }
    class B {
        constructor(t) {
            this.jindutiao = new x(t.jindutiao),
            this.shengji_1 = new x(t.shengji_1),
            this.mingpai = new x(t.mingpai),
            this.number = new x(t.number),
            this.zhandian_2_5 = new x(t.zhandian_2_5),
            this.zhandian_3_5 = new x(t.zhandian_3_5),
            this.zhandian_4_5 = new x(t.zhandian_4_5),
            this.barracksList = [];
            for (let e = 0; e < t.barracksList.length; e++) this.barracksList.push(new x(t.barracksList[e]));
            this.point = [];
            for (let e = 0; e < t.point.length; e++) {
                let i = [];
                for (let a = 0; a < t.point[e].points.length; a++) i.push(new Laya.Vector3( - t.point[e].points[a].x, t.point[e].points[a].y, t.point[e].points[a].z));
                this.point.push(i)
            }
        }
    }
    class D {
        constructor(t) {
            this.jindutiao = new x(t.jindutiao),
            this.mingpai = new x(t.mingpai),
            this.number = new x(t.number),
            this.tankejijieList = [];
            for (let e = 0; e < t.tankejijieList.length; e++) this.tankejijieList.push(new x(t.tankejijieList[e]));
            this.barracksPoint = new x(t.barracksPoint),
            this.point = [];
            for (let e = 0; e < t.point.length; e++) this.point.push(new Laya.Vector3( - t.point[e].x, t.point[e].y, t.point[e].z))
        }
    }
    class N {
        constructor(t) {
            this.mod_ljxf_zhandian_penhuobing_2 = new x(t.mod_ljxf_zhandian_penhuobing_2),
            this.mod_ljxf_zhandian_penhuobing_3 = new x(t.mod_ljxf_zhandian_penhuobing_3),
            this.mod_ljxf_zhandian_penhuobing_4 = new x(t.mod_ljxf_zhandian_penhuobing_4),
            this.barracksList = [];
            for (let e = 0; e < t.barracksList.length; e++) this.barracksList.push(new x(t.barracksList[e]));
            this.point = [];
            for (let e = 0; e < t.point.length; e++) {
                let i = [];
                for (let a = 0; a < t.point[e].points.length; a++) i.push(new Laya.Vector3( - t.point[e].points[a].x, t.point[e].points[a].y, t.point[e].points[a].z));
                this.point.push(i)
            }
        }
    }
    class R {
        constructor(t) {
            this.mod_ljxf_zhandian_yiliaobing_2 = new x(t.mod_ljxf_zhandian_yiliaobing_2),
            this.mod_ljxf_zhandian_yiliaobing_3 = new x(t.mod_ljxf_zhandian_yiliaobing_3),
            this.mod_ljxf_zhandian_yiliaobing_4 = new x(t.mod_ljxf_zhandian_yiliaobing_4),
            this.barracksList = [];
            for (let e = 0; e < t.barracksList.length; e++) this.barracksList.push(new x(t.barracksList[e]));
            this.point = [];
            for (let e = 0; e < t.point.length; e++) {
                let i = [];
                for (let a = 0; a < t.point[e].points.length; a++) i.push(new Laya.Vector3( - t.point[e].points[a].x, t.point[e].points[a].y, t.point[e].points[a].z));
                this.point.push(i)
            }
        }
    }
    class O {
        constructor(t) {
            this.id = t.id,
            this.jindutiao = new x(t.jindutiao),
            this.charge = new x(t.charge),
            this.wuqiying = new x(t.wuqiying),
            this.fangjuying = new x(t.fangjuying),
            this.tankBattalionList = [];
            for (let e = 0; e < t.tankBattalionList.length; e++) this.tankBattalionList.push(new D(t.tankBattalionList[e]));
            this.dispatchTroopsList = [];
            for (let e = 0; e < t.dispatchTroopsList.length; e++) this.dispatchTroopsList.push(new B(t.dispatchTroopsList[e]));
            this.stingoutBattalionList = [];
            for (let e = 0; e < t.stingoutBattalionList.length; e++) this.stingoutBattalionList.push(new N(t.stingoutBattalionList[e]));
            this.daodanyingList = [];
            for (let e = 0; e < t.daodanyingList.length; e++) this.daodanyingList.push(new x(t.daodanyingList[e]));
            this.paijipaoyingList = [];
            for (let e = 0; e < t.paijipaoyingList.length; e++) this.paijipaoyingList.push(new x(t.paijipaoyingList[e]));
            this.medicalBattalionList = [];
            for (let e = 0; e < t.medicalBattalionList.length; e++) this.medicalBattalionList.push(new R(t.medicalBattalionList[e]))
        }
    }
    class V {
        static setStartToStrengthenNumber() {
            let t = !1;
            return this.startToStrengthenNumber += 1,
            p.SetLocalItem(this.startToStrengthenNumbering, this.startToStrengthenNumber),
            this.startToStrengthen = this.startToStrengthenNumber >= _.daodanData.startToStrengthenCount,
            this.startToStrengthen && (this.superStartTime = Laya.timer.currTimer, p.SetLocalItem(this.datting, this.superStartTime), this.startToStrengthenTimer = this.superStartTime, t = !0),
            this.updataData(),
            t
        }
        static updateStartToStrengthenTimer() {
            if (isNaN(this.startToStrengthenTimer)) return "";
            let t = new Date,
            e = 23 - t.getHours(),
            i = 59 - t.getMinutes();
            return (e > 9 ? e: "0" + e) + ":" + (i > 9 ? i: "0" + i)
        }
        static init() {
            this.GetPlayerInfo()
        }
        static get IsGrabeMax() {
            return this.grade.grade >= _.gradeData.length
        }
        static GradeAdd(t) {
            this.grade.grade += t,
            this.grade.grade >= _.gradeData.length && (this.grade.grade = _.gradeData.length),
            this.grade.speed = _.roleData.start_speed_add + _.roleData.role_speed_add * (this.grade.grade - 1),
            this.grade.attack = _.roleData.start_attack_add + _.roleData.role_attack_add * (this.grade.grade - 1),
            this.grade.buffRange = _.roleData.start_range_add + _.roleData.role_range_add * (this.grade.grade - 1),
            this.SetPlayerInfo()
        }
        static GoldAdd(t) {
            this.gold += t,
            Laya.stage.event(u.UPDATE_GOLD),
            this.SetPlayerInfo()
        }
        static SetPlayerInfo() {
            p.SetLocalItem(this.levelSing, this.level),
            p.SetLocalItem(this.moonLevelSing, this.moonLevel),
            p.SetLocalItem(this.battleLevelSing, this.battleLevel),
            p.SetLocalItem(this.goldSing, this.gold),
            p.SetLocalJson(this.gradeSing, this.grade),
            this.updataData()
        }
        static GetLevel() {
            this.level = p.GetLocalItem(this.levelSing, this.level),
            this.selectLevel = this.level,
            this.moonLevel = p.GetLocalItem(this.moonLevelSing, this.moonLevel),
            this.selectMoonLevel = this.moonLevel;
            let t = p.GetLocalJson(this.gradeSing, {
                grade: 1,
                speed: 1.5,
                attack: 1.5,
                buffRange: 1
            });
            this.gradeLevel = t.grade,
            this.gold = p.GetLocalItem(this.goldSing, this.gold),
            this.isVibrate = 1 == p.GetLocalItem(this.vibrateSing, 1),
            this.isSound = 1 == p.GetLocalItem(this.soundSing, 1),
            this.isMusic = 1 == p.GetLocalItem(this.musicSing, 1);
            let e = Laya.timer.currTimer;
            this.superStartTime = p.GetLocalItem(this.datting, e),
            this.startToStrengthenNumber = p.GetLocalItem(this.startToStrengthenNumbering, 0),
            this.battleLevel = p.GetLocalItem(this.battleLevelSing, this.battleLevel),
            this.selectBattleLevel = this.battleLevel
        }
        static GetPlayerInfo() {
            this.grade = new z(_.roleData, this.gradeLevel);
            let t = new Date,
            e = new Date(this.superStartTime),
            i = t.getFullYear(),
            a = e.getFullYear(),
            s = t.getMonth(),
            n = e.getMonth(),
            o = t.getDate(),
            r = e.getDate();
            t.getHours(),
            t.getMinutes();
            i != a || i == a && s != n || i == a && s == n && o != r ? (this.startToStrengthen = !1, this.startToStrengthenNumber = 0, p.SetLocalItem(this.startToStrengthenNumbering, this.startToStrengthenNumber)) : (this.startToStrengthen = this.startToStrengthenNumber >= _.daodanData.startToStrengthenCount, this.startToStrengthen && (this.startToStrengthenTimer = this.superStartTime)),
            this.SetPlayerInfo()
        }
        static curGameEarthLevel() {
            return this.isDaren ? V.selectLevel + V.gmEarthLevel: V.level
        }
        static curGameMoonLevel() {
            return this.isDaren ? V.selectMoonLevel + V.gmMoonLevel: V.moonLevel
        }
        static curGameBattleLevel() {
            return V.battleLevel
        }
        static curGameLevel() {
            return this.starState == d.earth ? V.curGameEarthLevel() : this.starState == d.moon ? V.curGameMoonLevel() : this.starState == d.battle ? V.curGameBattleLevel() : void 0
        }
        static upLevel() {
            this.starState == d.earth ? this.isDaren ? (V.level == V.selectLevel && (V.level += 1), V.selectLevel += 1) : V.level += 1 : this.starState == d.moon ? this.isDaren ? (V.moonLevel == V.selectMoonLevel && (V.moonLevel += 1), V.selectMoonLevel += 1) : V.moonLevel += 1 : this.starState == d.battle && (V.battleLevel += 1)
        }
        static setVibrate() {
            p.SetLocalItem(this.vibrateSing, this.isVibrate ? 1 : 0),
            this.updataData()
        }
        static setSound() {
            p.SetLocalItem(this.soundSing, this.isSound ? 1 : 0),
            this.updataData()
        }
        static setMusic() {
            p.SetLocalItem(this.musicSing, this.isMusic ? 1 : 0),
            this.updataData()
        }
        static loadData(t) {
            if (this.isDaren) return this.GetLevel(),
            void(t && t.run());
            // zs.network.download("gwyqcData", zs.NetworkMode.Sync).then(e =>{
            //     if (e) {
            //         if (this.networkData = !0, console.log("服务器数据成功res---", e, zs.core.userId), e && e != [] && "[]" != e && "{}" != e) {
            //             let t = JSON.parse(e);
            //             this.level = t.level,
            //             this.moonLevel = t.moonLevel,
            //             this.gold = t.gold,
            //             this.isVibrate = 1 == t.isVibrate,
            //             this.isSound = 1 == t.isSound,
            //             this.isMusic = 1 == t.isMusic,
            //             this.superStartTime = t.superStartTime,
            //             this.startToStrengthenNumber = t.startToStrengthenNumber,
            //             this.gradeLevel = t.grade
            //         }
            //     } else console.log("服务器数据失败res---", zs.core.userId),
                this.GetLevel();
                t && t.run()
            // }).
            // catch(e =>{
            //     throw console.log("服务器数据异常res---", e, zs.core.userId),
            //     this.GetLevel(),
            //     t && t.run(),
            //     e
            // })
        }
        static updataData() {
            if (this.isDaren) return;
            let t = {
                level: this.level,
                moonLevel: this.moonLevel,
                gold: this.gold,
                isVibrate: this.isVibrate,
                isSound: this.isSound,
                isMusic: this.isMusic,
                superStartTime: this.superStartTime,
                startToStrengthenNumber: this.startToStrengthenNumber,
                grade: this.grade.grade,
                speed: this.grade.speed,
                attack: this.grade.attack,
                buffRange: this.grade.buffRange
            },
            e = JSON.stringify(t);
            // console.log("上传数据到服务器---", e),
            // zs.network.update("gwyqcData", e)
        }
    }
    V.levelSing = "levelSing",
    V.moonLevelSing = "moonLevelSing",
    V.battleLevelSing = "battleLevelSing",
    V.goldSing = "goldSing",
    V.gradeSing = "gradeSing",
    V.vibrateSing = "vibrateSing",
    V.soundSing = "soundSing",
    V.musicSing = "musicSing",
    V.datting = "datting",
    V.startToStrengthenNumbering = "startToStrengthenNumbering",
    V.trackEventLevelMax = 15,
    V.starState = d.earth,
    V.level = 1,
    V.moonLevel = 1,
    V.battleLevel = 1,
    V.gold = 0,
    V.selectLevel = 1,
    V.selectMoonLevel = 1,
    V.selectBattleLevel = 1,
    V.isDaren = !1,
    V.isVibrate = !0,
    V.isSound = !0,
    V.isMusic = !0,
    V.networkData = !1,
    V.startToStrengthen = !1,
    V.startToStrengthenNumber = 0,
    V.startToStrengthenTimer = NaN,
    V.bombCountDown = NaN,
    V.gmUI = !1,
    V.gmEarthLevel = 0,
    V.gmMoonLevel = 0,
    V.kongtouNoN = 0,
    V.kongtouCOunt = 0,
    V.kongtouNumber = 10,
    V.chubingSpeed = 3300,
    V.barrackValueSpeedList = [.005, .008, .01],
    V.isGMModel = !1;
    class z {
        constructor(t, e) {
            this.grade = 1,
            this.speed = 1.5,
            this.attack = 1.5,
            this.buffRange = 1,
            this.grade = e,
            this.speed = t.start_speed_add + _.roleData.role_speed_add * (this.grade - 1),
            this.attack = t.start_attack_add + _.roleData.role_attack_add * (this.grade - 1),
            this.buffRange = t.start_range_add + _.roleData.role_range_add * (this.grade - 1)
        }
        updateData(t) {
            this.grade = JSON.parse(t.grade),
            this.speed = JSON.parse(t.speed),
            this.attack = JSON.parse(t.attack),
            this.buffRange = JSON.parse(t.buffRange)
        }
    } !
    function(t) {
        t[t["Badge"] = 0] = window.lang.Badge,
        t[t["GoldenBadge"] = 1] = window.lang.GoldenBadge
    } (L || (L = {}));
    class H {
        constructor() {
            this._tipsTextLab = "",
            this.homeUrl = window.compUrl + "comp/HomePage.scene",
            this.shopUrl = window.compUrl + "comp/ShopPage.scene",
            this.GameUrl = window.compUrl + "comp/GamePagess.scene",
            this.GameUrl_Battle = window.compUrl + "comp/GamePagess_Battle.scene",
            this.ReliveUrl = window.compUrl + "comp/RelivePage.scene",
            this.WinUrl = window.compUrl + "comp/ResultWin.scene",
            this.LoseUrl = window.compUrl + "comp/ResultLose.scene",
            this.tipsUrl = window.compUrl + "comp/TipPage.scene",
            this.leckOfUrl = window.compUrl + "comp/leckOf.scene",
            this.launchUrl = window.compUrl + "comp/launch.scene",
            this.unlockUrl = window.compUrl + "comp/Unlock.scene",
            this.selectLevelUrl = window.compUrl + "comp/SelectLevel.scene",
            this.summonUrl = window.compUrl + "comp/summon.scene",
            this.setUrl = window.compUrl + "comp/setting.scene",
            this.startToStrengthenUrl = window.compUrl + "comp/Super.scene",
            this.giftCodeUrl = window.compUrl + "comp/Gift.scene",
            this.gameLoadingUrl = window.compUrl + "comp/GameLoading.scene",
            this.moonGameTipUri = window.compUrl + "comp/UniverseDialog.scene"
        }
        get GetTipsText() {
            return this._tipsTextLab
        }
        static get Instance() {
            return null == this._instance && (this._instance = new H),
            this._instance
        }
        OpenView(t, e = !0, i) {
            Laya.Scene.open(t, e, null, Laya.Handler.create(this, t =>{
                t.scaleX = Laya.stage.width / t.width,
                t.scaleY = t.scaleX,
                t.height += (Laya.stage.height - t.height * Laya.stage.scaleY) / t.scaleY;
                let e = t.getComponent(g);
                e && e.SetParameter(i);
            }))
        }
        HideView(t) {
            Laya.Scene.close(t)
        }
        ShowTips(t) {
            this._tipsTextLab = t,
            this.OpenView(this.tipsUrl, !1)
        }
    }
    H._instance = null,
    H.isOpenLeofPage = 0,
    H.isOpenLaunchPage = !1,
    H.leofType = L.Badge;
    class U {
        constructor() {
            this.RES_URL = "sound/",
            this.bgmChanel = null
        }
        static get Instance() {
            return null == U.instance && (U.instance = new U),
            this.instance
        }
        PlayEffectAudio(t, e, i, a) {
            if (!V.isSound) return;
            if (!t) return;
            let s = this.RES_URL + t + (e || ".mp3");
            i || (i = 1),
            Laya.SoundManager.playSound(s, i, a)
        }
        PlayBGM(t, e, i) {
            if (!V.isMusic) return;
            if (!t) return;
            let a = this.RES_URL + t + (e || ".mp3");
            null == i && (i = 1),
            Laya.SoundManager.useAudioMusic=false,
            this.bgmChanel = Laya.SoundManager.playMusic(a, i)
        }
        AdjustBGMVolume(t) {
            null != this.bgmChanel && null != t && (this.bgmChanel.volume = t)
        }
        StopEffectAudio(t, e) {
            if (!t) return;
            let i = this.RES_URL + t + (e || ".mp3");
            Laya.SoundManager.stopSound(i)
        }
        StopBGM() {
            Laya.SoundManager.stopMusic()
        }
        StopAllEffectAudio() {
            Laya.SoundManager.stopAllSound()
        }
        StopAll() {
            Laya.SoundManager.stopAll()
        }
    }
    U.instance = null;
    class j {
        static init() {
            Laya.loader.create(["prefab/camp.json", "prefab/enemy.json", "prefab/point.json", "prefab/buffIcon.json", "prefab/pro.json"], Laya.Handler.create(this, () =>{
                this.CampPrefab.json = Laya.loader.getRes("prefab/camp.json"),
                this.EnemyPrefab.json = Laya.loader.getRes("prefab/enemy.json"),
                this.PointPrefab.json = Laya.loader.getRes("prefab/point.json"),
                this.BuffIconPrefab.json = Laya.loader.getRes("prefab/buffIcon.json"),
                this.HpPrefab.json = Laya.loader.getRes("prefab/pro.json")
            }))
        }
        static initLoaderSprite3D(t) {
            for (let e = 0; e < t.length; e++) {
                let i = t[e].replace(this.LocalUrl, "").replace(".lh", "");
                this.LoaderPrefabs[i] = Laya.loader.getRes(t[e])
            }
        }
        static distributedLoaderSprite3D() {
            let t = V.curGameEarthLevel();
            if (t <= _.resourcesLevelMax) {
                let e = [];
                for (let i = 0; i < _.resourcesJsonData[t].length; i++) e.push(_.resourcesJsonData[t][i]);
                e.length > 0 && (this.loadResing = !0, Laya.loader.create(e, Laya.Handler.create(this, () =>{
                    let e = _.resourcesJsonData[t];
                    for (let t = 0; t < e.length; t++) {
                        let i = e[t].replace(this.LocalUrl, "").replace(".lh", "");
                        this.LoaderPrefabs[i] = Laya.loader.getRes(e[t])
                    }
                    this.loadResing = !1
                })))
            }
        }
    }
    j.LocalUrl = "3dres/Conventional/",
    j.RemoteUrl = "",
    j.LastUrl = "",
    j.IsRemote = !1,
    j.CampPrefab = new Laya.Prefab,
    j.EnemyPrefab = new Laya.Prefab,
    j.PointPrefab = new Laya.Prefab,
    j.HpPrefab = new Laya.Prefab,
    j.BuffIconPrefab = new Laya.Prefab,
    j.LoaderPrefabs = {},
    j.loadResing = !1;
    class q {
        constructor() {
            this.isBackHome = !1,
            this.isPlaying = !1,
            this.lastLevelData = null,
            this.lastMoonLevelData = null,
            Laya.stage.on(u.GAME_HOME, this, this.GameHome),
            Laya.stage.on(u.GAME_END, this, this.GameEnd),
            Laya.stage.on(u.GAME_START, this, this.GameStart),
            Laya.stage.on(u.GAME_RELIVE, this, this.GameRelive),
            Laya.stage.on(u.RELIVE, this, this.Relive),
            Laya.stage.on(u.GAME_CHANGE_LEVEL, this, this.GameChangeLevel)
        }
        static get Instance() {
            return null == this.instance && (this.instance = new q),
            this.instance
        }
        get GetIsMaxSolider() {
            return this.lastSoliderNum >= _.roleData.max_solider
        }
        Init() {
            this.isCleared = !0,
            this.isGuide = !0,
            q.Instance.maxLevelNum = 0
        }
        UpdatePlayerBuff() {
            this.mainScene.buff.transform.localPosition = new Laya.Vector3(.05, .02, -.145),
            q.Instance.gameModle == m.battleGame ? this.mainScene.buff.transform.localScale = new Laya.Vector3(.25, 1, .25) : this.mainScene.buff.transform.localScale = new Laya.Vector3(V.grade.buffRange / (this.mainScene.buffSize.width / 2), 1, V.grade.buffRange / (this.mainScene.buffSize.width / 2))
        }
        GameHome() {
            V.kongtouNoN = 0,
            this.hintIndex = 0,
            H.isOpenLeofPage = 0,
            this.isAutoSolider = !1,
            this.isProduction = !1,
            this.isRage = !1,
            this.lastRageTime = 0,
            this.lastSoliderNum = 0,
            this.maxLevelNum = 0,
            this.mainScene.GetCamera.ShowWinEffect(!1),
            this.lastLevelNum = 0,
            this.mainScene.GetMap.CreateMap(),
            this.mainScene.GetCamera.SetPosition = this.mainScene.GetMap.playerCtl.GetPosition,
            this.UpdatePlayerBuff(),
            this.mainScene.GetCamera.ChangeRotAddPos(),
            this.mainScene.GetCamera.ChangeCameraType(t.Home)
        }
        GameChangeLevel(t) {
            this.mainScene.BuffParentScene(),
            this.mainScene.GetMap.ClearMap(),
            this.GameHome()
        }
        GameStart() {
            q.Instance.gameModle == m.battleGame && q.Instance.mainScene.GetCamera.CameraOrthographicVerticalSize(!0),
            V.curGameLevel() <= V.trackEventLevelMax && u.trackEvent("999-" + (V.starState == d.earth ? "": "月球") + "关卡" + V.curGameLevel() + "游戏开始"),
            q.Instance.mainScene.GetMap.effect_Arrow.active = !1,
            V.startToStrengthen && this.mainScene.GetMap.playerCtl.VideoAddSilver(_.daodanData.startToStrengthenMinPaiNum),
            this.isCleared = !1,
            this.mainScene.GameStart(),
            this.GameRegain(),
            this.hintIndex = 0,
            Laya.stage.event(u.HINT_SHOW, [this.hintIndex])
        }
        GameRelive() {
            this.mainScene.GetMap.playerCtl.CloseMouseEvent(),
            this.GamePause(),
            H.Instance.OpenView(H.Instance.ReliveUrl)
        }
        Relive() {
            q.Instance.gameModle == m.battleGame ? H.Instance.OpenView(H.Instance.GameUrl_Battle) : H.Instance.OpenView(H.Instance.GameUrl),
            this.mainScene.GetMap.playerCtl.Relive(),
            this.mainScene.GetMap.playerCtl.OpenMouseEvent(),
            this.GameRegain()
        }
        GameEnd(t) {
            switch (q.Instance.mainScene.GetCamera.SetTarget = q.Instance.mainScene.GetMap.playerCtl.GetMainNode, this.mainScene.GetMap.playerCtl.CloseMouseEvent(), this.mainScene.GetCamera.SetTarget = null, this.GamePause(), q.Instance.mainScene.GetMap.effect_Arrow.active = !1, q.Instance.mainScene.GetMap.arrow.GetMainNode.active = !1, U.Instance.StopBGM(), t) {
            case 0:
                V.curGameLevel() <= V.trackEventLevelMax && u.trackEvent("999-" + (V.starState == d.earth ? "": "月球") + "关卡" + V.curGameLevel() + "游戏胜利"),
                this.isCleared = !0,
                V.upLevel(),
                j.distributedLoaderSprite3D(),
                V.SetPlayerInfo(),
                V.starState == d.earth ? (this.lastUnlockData = _.SearchUnlock(V.curGameEarthLevel()), this.lastUnlockData ? H.Instance.OpenView(H.Instance.unlockUrl) : H.Instance.OpenView(H.Instance.WinUrl)) : H.Instance.OpenView(H.Instance.WinUrl);
                break;
            case 1:
                V.curGameLevel() <= V.trackEventLevelMax && u.trackEvent("999-" + (V.starState == d.earth ? "": "月球") + "关卡" + V.curGameLevel() + "游戏失败"),
                this.isCleared = !1,
                H.Instance.OpenView(H.Instance.LoseUrl)
            }
            this.mainScene.BuffParentScene(),
            zs.core.workflow.childNext()
        }
        AddHintShow() {
            this.hintIndex += 1,
            Laya.stage.event(u.HINT_SHOW, [this.hintIndex])
        }
        GamePause() {
            this.mainScene.isStart = !1
        }
        GameRegain() {
            this.mainScene.isStart = !0
        }
    }
    q.instance = null;
    q.killEnermyNum = 0;
    class F extends g {
        constructor() {
            super(...arguments),
            this.resources = []
        }
        Open() {}
        SetParameter(t) {
            q.Instance.gameModle = t.state,
            this.resources = t.res,
            this.state = t.state,
            null == this.resources || this.resources.length <= 0 ? this.exit() : Laya.loader.create(this.resources, Laya.Handler.create(this, () =>{
                let t = this.resources;
                for (let e = 0; e < t.length; e++) {
                    let i = String(t[e].url),
                    a = i.replace(j.LocalUrl, "").replace(".lh", "");
                    j.LoaderPrefabs[a] = Laya.loader.getRes(i)
                }
                this.exit()
            }), Laya.Handler.create(this, t =>{
                this.updateProgress(t)
            }))
        }
        updateProgress(t) {}
        Hide() {}
        CloseEvent() {}
        OpenEvent() {}
        exit() {
            switch (this.state) {
            case m.moonGame:
                q.Instance.mainScene.GetMap.MoonMap();
                break;
            case m.selectGame:
                Laya.stage.event(u.GAME_CHANGE_LEVEL);
                break;
            case m.battleGame:
                q.Instance.mainScene.GetMap.BattleMap()
            }
            q.Instance.mainScene.GetMap.CreatEny(),
            Laya.timer.frameOnce(2, this, () =>{
                zs.core.workflow.next()
            })
        }
    }
    class J {
        static ClickBtnTweenTo(t, e = .7, i = 1, a, s) {
            Laya.Tween.to(t, {
                scaleX: e,
                scaleY: e
            },
            125, Laya.Ease.backOut, Laya.Handler.create(this, () =>{
                Laya.Tween.to(t, {
                    scaleX: i,
                    scaleY: i
                },
                125, Laya.Ease.backOut, Laya.Handler.create(a || null, s || null), null, !0)
            }), null, !0)
        }
        static isPosInRotationRect(t, e) {
            let i = e.width / 2,
            a = e.height / 2,
            s = e.position,
            n = t.x,
            o = t.z,
            r = e.angle,
            h = s.x + (n - s.x) * Math.cos(r) - (o - s.z) * Math.sin(r),
            l = s.z + (n - s.x) * Math.sin(r) + (o - s.z) * Math.cos(r);
            return h > s.x - i && h < s.x + i && l > s.z - a && l < s.z + a
        }
    }
    class W extends Laya.Script {
        onAwake() {
            this.self = this.owner
        }
        onUpdate() {
            let t = new Laya.Vector2(q.Instance.mainScene.startPos.x - this.target.x, q.Instance.mainScene.startPos.z - this.target.z),
            e = t.x > 0 ? t.x / q.Instance.mainScene.size.width: 0,
            i = t.y > 0 ? t.y / q.Instance.mainScene.size.long: 0;
            this.self.pos(e * this.map.width, i * this.map.height)
        }
        Remove() {
            this.self.removeSelf(),
            this.self.destroy(!0),
            this.destroy()
        }
    }
    class Y extends W {
        SetHead(t) {
            if (this.player = t, this.target = this.player.GetPosition, t.capmIndex > 0) {
                let t = this.owner;
                t.skin = "game/img_redpoint.png",
                t.width = 15,
                t.height = 15
            }
        }
        onAwake() {
            super.onAwake()
        }
        onUpdate() {
            this.player && this.player.owner ? (this.target = this.player.GetPosition, super.onUpdate()) : this.Remove()
        }
        Remove() {
            this.player = null,
            super.Remove()
        }
    }
    class K extends W {
        SetHead(t) {
            if (this.head = t, this.target = new Laya.Vector3(this.head.GetPosition.x, this.head.GetPosition.y, this.head.GetPosition.z + 5), t.theirRole.capmIndex > 0) {
                this.owner.skin = "game/icon_headquarters1.png"
            }
        }
        onAwake() {
            super.onAwake()
        }
        onUpdate() {
            this.head ? super.onUpdate() : this.Remove()
        }
        Remove() {
            this.head = null,
            super.Remove()
        }
    }
    class X extends W {
        SetHead(t) {
            this.enemy = t,
            this.target = this.enemy.land.transform.position.clone()
        }
        SetHead1(t) {
            this.head = t,
            this.target = new Laya.Vector3(this.head.GetPosition.x, this.head.GetPosition.y, this.head.GetPosition.z + 5)
        }
        onAwake() {
            super.onAwake(),
            this.attackImg = this.self.getChildByName("attack"),
            this.attackImg.visible = !1
        }
        onUpdate() {
            if (!this.enemy) return void this.Remove();
            super.onUpdate();
            let t = !1;
            for (let e = this.enemy.enemyList.length - 1; e >= 0; e--) if (null != this.enemy.enemyList[e].attackTarget && this.enemy.enemyList[e].attackTarget.roleCamp == n.FightingUnit) {
                t = !0;
                break
            }
            this.attackImg.visible = t
        }
        Remove() {
            this.enemy = null,
            super.Remove()
        }
    }
    class Q {}
    Q.zs_version = 1,
    Q.zs_switch = 0,
    Q.zs_skip_settle = 0,
    Q.zs_start_game_video_switch = 1,
    Q.zs_banner_vertical_enable = 0,
    Q.zs_jump_switch = 1,
    Q.zs_full_screen1_jump = 0,
    Q.zs_full_screen2_jump = 1,
    Q.zs_finish_jump = 0,
    Q.zs_history_list_jump = 1,
    Q.zs_auto_full_screen_jump_switch = 0,
    Q.zs_auto_jump_switch = 1,
    Q.zs_friends_playing_switch = 0,
    Q.zs_reminder_switch = 1,
    Q.zs_false_news_switch = 0,
    Q.zs_slide_jump_switch = 1,
    Q.zs_share_title = "这个是分享标题",
    Q.zs_share_img = "这个是分享图片地址",
    Q.zs_banner_adunit = "",
    Q.zs_banner_adunit2 = "",
    Q.zs_banner_adunit3 = "",
    Q.zs_video_adunit = "",
    Q.zs_full_screen_adunit = "",
    Q.zs_gridAd_id = "",
    Q.zs_click_award_num = 0,
    Q.zs_ready_click_num = 0,
    Q.zs_click_award_since = 0,
    Q.zs_button_delay_time = 0,
    Q.zs_scene_value = "1005|1006|1011|1012|1013|1014|1017|1019|1020|1023|1024|1025|1030|1031|1032|1036|1042|1047|1048|1049|1053|1102|1129",
    Q.zs_revive_way = "",
    Q.zs_revive_num = 0,
    Q.zs_system = "",
    Q.zs_city = "上海市|广州市|深圳市|成都市|北京市",
    Q.zs_time = 0,
    Q.zs_banner_banner_time = 1e3,
    Q.zs_full_screen_banner_time = 3,
    Q.zs_banner_refresh_time = 3e4,
    Q.zs_game_start_jump_switch = 1,
    Q.zs_native_btn_text = "点击查看",
    Q.zs_jump_time = 2e3,
    Q.zs_full_screen_button_switch = 0,
    Q.zs_share_image = "",
    Q.zs_full_screen_ad_enable = 0,
    Q.zs_banner_text_time = 0,
    Q.zs_banner_move_time = 500,
    Q.zs_banner_horizontal_enable = 0,
    Q.zs_revive_type = 0,
    Q.zs_revive_click_num = 0,
    Q.zs_revive_video_num = 0,
    Q.zs_revive_share_num = 0,
    Q.zs_continue_auto_share = 0,
    Q.zs_full_screen_jump = 0,
    Q.zs_revive_countdown = 10,
    Q.zs_jump_style = 1,
    Q.zs_native_adunit = "",
    Q.zs_native_adunit2 = "",
    Q.zs_native_click_switch = 0,
    Q.zs_native_limit = 0,
    Q.zs_button_delay_switch = 0,
    Q.zs_native_limit_10 = 1,
    Q.zs_more_reward_swich = 0,
    Q.zs_native_delay = 0,
    Q.zs_full_screen_ad = 0,
    Q.zs_best_videotape_time = 15e3,
    Q.zs_hide_banner_switch = 0,
    Q.zs_share_topics = "",
    Q.zs_start_video_switch = 0,
    Q.zs_native_gap_time = 0,
    Q.test_touch_switch = 0,
    Q.zs_game_banner_show_switch = 0,
    Q.zs_game_share_video_switch = 0,
    Q.zs_airgift_switch = 0,
    Q.zs_seek_attention = 0,
    Q.zs_video_delay_switch = 0,
    Q.zs_add_a_home_page = 0;
    class Z extends Laya.Script {
        set SetTarget(t) {
            this.target = t,
            this.target ? this.target.buffIcon = this: this.Remove()
        }
        onAwake() {
            super.onAwake(),
            this.self = this.owner
        }
        onUpdate() {
            if (!this.target || !this.target.owner) return;
            let t = new Laya.Vector4;
            q.Instance.mainScene.GetCamera.GetCamera.viewport.project(new Laya.Vector3(this.target.GetPosition.x, this.target.GetPosition.y + 2 * this.target.box.extents.y, this.target.GetPosition.z), q.Instance.mainScene.GetCamera.GetCamera.projectionViewMatrix, t),
            this.self.x = t.x,
            this.self.y = t.y
        }
        Remove() {
            this.target = null,
            this.self.destroy()
        }
    }
    class $ extends g {
        constructor() {
            super(...arguments),
            this.tipsUrl = {
                attack: "game/tip1.png",
                procuct: "game/tip2.png"
            },
            this.taskUrlList = ["game/task_1.png", "game/task_2.png", "game/task_3.png", "game/task_4.png", "game/task_5.png", "game/task_6.png"],
            this.changeTask = "game/task_7.png",
            this.addMingPaiUrl = "game/+1.png",
            this.nativeTimer = 0,
            this.isNativeShow = !1,
            this.fireBombTimer = NaN,
            this.fireBombGuideTimer = NaN,
            this.isShowShareRecord = !1
        }
        Open() {
            this.topUI = this.owner.getChildByName("topUI"),
            this.middleUI = this.owner.getChildByName("middleUI"),
            this.bottomUI = this.owner.getChildByName("bottomUI"),
            this.touchBox = this.owner.getChildByName("touchBox"),
            this.arrow_attack = this.owner.getChildByName("arrow_attack"),
            this.arrow_camp = this.owner.getChildByName("arrow_camp"),
            this.arrow_tag = this.owner.getChildByName("arrow_tag"),
            this.mapImg = this.topUI.getChildByName("map"),
            this.demNum = this.topUI.getChildByName("dem").getChildByName("level"),
            this.demEnemyNum = this.topUI.getChildByName("dem_enemy").getChildByName("level"),
            this.demPlayerNum = this.topUI.getChildByName("dem_player").getChildByName("level"),
            this.isMaxImg = this.topUI.getChildByName("dem_player").getChildByName("max"),
            this.btnRecord = this.topUI.getChildByName("btnRecord"),
            this.recordMarkTip = this.btnRecord.getChildByName("redMark"),
            this.maxbarracksBtn = this.middleUI.getChildByName("maxbarracksBtn"),
            this.maxroleBtn = this.middleUI.getChildByName("maxroleBtn"),
            this.airshipBtn = this.middleUI.getChildByName("airshipBtn"),
            this.btn_rage = this.middleUI.getChildByName("btn_bounder"),
            this.btn_rageX = Laya.stage.width - this.btn_rage.width / 2 - 10,
            this.rageMaskImg = this.btn_rage.getChildByName("maskImg"),
            this.rageVideo = this.btn_rage.getChildByName("video"),
            this.rageTips = this.btn_rage.getChildByName("tips_3"),
            this.rageTime = this.btn_rage.getChildByName("progressValue"),
            this.rageTime.visible = !1,
            this.rageTips.visible = !1,
            this.rageMaskImg.visible = !1,
            this.rageAni = this.owner.tip1,
            this.pro = this.topUI.getChildByName("pro"),
            this.lastLevel = this.pro.getChildByName("pro_1").getChildByName("level"),
            this.level = this.pro.getChildByName("lv").getChildByName("level"),
            this.fg = this.pro.getChildByName("fg"),
            this.fgWidth = this.fg.width,
            this.proHpBox = this.owner.getChildByName("pro"),
            this.hpfg = this.proHpBox.getChildByName("hpPro"),
            this.fgHpWidth = this.hpfg.width,
            this.proHpBox.visible = !1,
            this.arrow = this.owner.getChildByName("arrow"),
            this.task_1 = this.topUI.getChildByName("task_1"),
            this.touchImg = this.owner.getChildByName("touchImg"),
            this.touch = this.touchImg.getChildByName("touch"),
            this.guide = this.bottomUI.getChildByName("guide"),
            this.tips = this.middleUI.getChildByName("tip1"),
            this.dem = this.topUI.getChildByName("dem1"),
            this.gold = this.dem.getChildByName("level"),
            this.demIcon = this.dem.getChildByName("tag");
            let t = this.middleUI.getChildByName("btn_attack1");
            if (this.attacKBtn = t.getChildByName("btn_attack"), this.attackAniBox = this.middleUI.getChildByName("ani_attack"), this.attackAni = this.owner.attack_tips, this.btnInAni = this.owner.attack_in, this.btnOutAni = this.owner.btn_out, this.btnLoopAni = this.owner.attack_loop, this.middleUI.getChildByName("missileBtn1").visible = !1, this.missileBtn2 = this.middleUI.getChildByName("missileBtn2"), this.missileBtn2Level = this.missileBtn2.getChildByName("level"), this.missileBtn2.visible = !1, this.btn_fire = this.middleUI.getChildByName("btn_fire"), this.fire_fg = this.btn_fire.getChildByName("fire_fg"), this.fireTIps = this.guide.getChildByName("fireTIps"), this.img_fire = this.btn_fire.getChildByName("fire_fg"), this.btn_fire.visible = !1, this.fireTIps.visible = !1, this.cloud = this.middleUI.getChildByName("cloud"), this.attacKBtn.visible = !1, this.attackAniBox.visible = !1, this.arrow.visible = !1, this.task_1.visible = !1, this.guide.visible = !1, this.arrow_attack.visible = !1, this.arrow_camp.visible = !1, this.arrow_tag.visible = !1, this.HideTips(), this.demNum.value = "0", this.taskAni = this.owner.task, this.guideAni = this.owner.hand, this.tipsAni = this.owner.tips, this.level.value = (V.curGameLevel() + 1).toString(), this.lastLevel.value = V.curGameLevel().toString(), this.UpdateMingPai(), this.UpdateGoldMingPai(), this.UpdatePlayer(), this.UpdateEnemy(), this.maxbarracksBtn.visible = !1, this.maxroleBtn.visible = !1, this.btn_rage.visible = !1, this.airshipBtn.visible = !1, "READY" == zs.core.workflow.childState) {
                this.cloud.visible = !0,
                this.view.mouseEnabled = !1;
                let t = this.owner.pege_in;
                t ? (t.play(0, !1), t.on(Laya.Event.COMPLETE, this, this.CutsceneAni)) : this.CutsceneAni()
            } else this.cloud.visible = !1,
            this.ShowHint(q.Instance.hintIndex);
            1 == V.curGameEarthLevel() && (this.maxbarracksBtn.getChildAt(0).visible = !1, this.maxroleBtn.getChildAt(0).visible = !1, this.rageVideo.visible = !1),
            this.UpdatePro(),
            this.ShowTouch(1),
            this.touchBox.on(Laya.Event.MOUSE_DOWN, this, this.TouchDown),
            this.touchBox.on(Laya.Event.MOUSE_MOVE, this, this.TouchMove),
            this.touchBox.on(Laya.Event.MOUSE_UP, this, this.TouchUp),
            this.touchBox.on(Laya.Event.MOUSE_OUT, this, this.TouchUp),
            this.touchBox.on(Laya.Event.MOUSE_OVER, this, this.TouchUp),
            q.Instance.mainScene.GetMap.headquartersList.forEach(t =>{
                let e = j.CampPrefab.create();
                this.mapImg.addChild(e);
                let i = e.addComponent(K);
                i.map = this.mapImg,
                i.SetHead(t)
            }),
            q.Instance.mainScene.GetMap.enemyGatheringList.forEach(t =>{
                let e = j.EnemyPrefab.create();
                this.mapImg.addChild(e);
                let i = e.addComponent(X);
                i.map = this.mapImg,
                i.SetHead(t)
            });
            let e = j.PointPrefab.create();
            this.mapImg.addChild(e);
            let i = e.addComponent(Y);
            i.map = this.mapImg,
            i.SetHead(q.Instance.mainScene.GetMap.playerCtl),
            this.btnMoreGame = this.middleUI.getChildByName("btnMoreGame"),
            this.btnMoreGame.visible = !1,
            this.btnRecord.visible = 1 == Q.zs_version,
            this.addAutoVideoTrigger(),
            V.gmUI && (this.btnMoreGame.visible = !1, this.maxroleBtn.visible = !1, this.maxbarracksBtn.visible = !1, this.btn_rage.visible = !1, this.btnRecord.visible = !1, this.airshipBtn.visible = !1)
        }
        CutsceneAni() {
            this.cloud.visible = !1,
            "READY" == zs.core.workflow.childState ? q.Instance.mainScene.GetCamera.CutsceneAni() : this.ShowHint(q.Instance.hintIndex),
            this.view.mouseEnabled = !0
        }
        onStart() {}
        Hide() {}
        CloseEvent() {
            Laya.stage.off(u.BUFF_ICON, this, this.BuffIcon),
            Laya.stage.off(u.HIDE_GUIDE, this, this.HideGuide),
            Laya.stage.off(u.SHOW_TOUCH, this, this.ShowTouch),
            Laya.stage.off(u.UPDATE_TOUCH, this, this.UpdateTouch),
            Laya.stage.off(u.UPDATE_PRO, this, this.UpdatePro),
            Laya.stage.off(u.UPDATE_MINGPAI, this, this.UpdateMingPai),
            Laya.stage.off(u.UPDATE_ENEMY, this, this.UpdateEnemy),
            Laya.stage.off(u.UPDATE_PLAYER, this, this.UpdatePlayer),
            Laya.stage.off(u.UPDATE_HP, this, this.UpdateHp),
            Laya.stage.off(u.ADD_MINGPAI, this, this.AddMingPai),
            Laya.stage.off(u.HINT_SHOW, this, this.ShowHint),
            Laya.stage.off(u.GET_SILVER, this, this.GetSilver),
            Laya.stage.off(u.ALL_HIT, this, this.AllHit),
            Laya.stage.off(u.HIDE_HIT, this, this.HideHit),
            this.btnMoreGame.off(Laya.Event.CLICK, this, this.onBtnMoreGameClick),
            this.btnRecord.off(Laya.Event.CLICK, this, this.onRecordClick),
            this.missileBtn2.off(Laya.Event.CLICK, this, this.onBombClick),
            this.img_fire.off(Laya.Event.CLICK, this, this.onFireBombClick),
            Laya.stage.off(u.GAMEPAGE_HIDDLEVIDEO_BOMB, this, this.HiddleVideoToBomb)
        }
        OpenEvent() {
            Laya.stage.on(u.BUFF_ICON, this, this.BuffIcon),
            Laya.stage.on(u.HIDE_GUIDE, this, this.HideGuide),
            Laya.stage.on(u.SHOW_TOUCH, this, this.ShowTouch),
            Laya.stage.on(u.UPDATE_TOUCH, this, this.UpdateTouch),
            Laya.stage.on(u.UPDATE_PRO, this, this.UpdatePro),
            Laya.stage.on(u.UPDATE_MINGPAI, this, this.UpdateMingPai),
            Laya.stage.on(u.UPDATE_ENEMY, this, this.UpdateEnemy),
            Laya.stage.on(u.UPDATE_PLAYER, this, this.UpdatePlayer),
            Laya.stage.on(u.UPDATE_HP, this, this.UpdateHp),
            Laya.stage.on(u.ADD_MINGPAI, this, this.AddMingPai),
            Laya.stage.on(u.HINT_SHOW, this, this.ShowHint),
            Laya.stage.on(u.GET_SILVER, this, this.GetSilver),
            Laya.stage.on(u.CHANGE_HINT, this, this.ChangeHint),
            Laya.stage.on(u.ALL_HIT, this, this.AllHit),
            Laya.stage.on(u.HIDE_HIT, this, this.HideHit),
            this.btnMoreGame.on(Laya.Event.CLICK, this, this.onBtnMoreGameClick),
            this.btnRecord.on(Laya.Event.CLICK, this, this.onRecordClick),
            this.missileBtn2.on(Laya.Event.CLICK, this, this.onBombClick),
            this.img_fire.on(Laya.Event.CLICK, this, this.onFireBombClick),
            Laya.stage.on(u.GAMEPAGE_HIDDLEVIDEO_BOMB, this, this.HiddleVideoToBomb)
        }
        onAutoCustomAd() {}
        onBtnMoreGameClick() {}
        onUpdate() {
            if (isNaN(V.bombCountDown) && (this.missileBtn2.visible = !1), q.Instance.mainScene.isStart) {
                let a,
                s = [];
                if (q.Instance.mainScene.GetMap.enemyGatheringList.length > 0) for (let t = q.Instance.mainScene.GetMap.enemyGatheringList.length - 1; t >= 0; t--) for (let e = q.Instance.mainScene.GetMap.enemyGatheringList[t].enemyList.length - 1; e >= 0; e--) if (null != q.Instance.mainScene.GetMap.enemyGatheringList[t].enemyList[e].attackTarget && q.Instance.mainScene.GetMap.enemyGatheringList[t].enemyList[e].attackTarget.roleCamp == n.FightingUnit) {
                    s.push(q.Instance.mainScene.GetMap.enemyGatheringList[t]);
                    break
                }
                if (s.length > 0) {
                    this.arrow_attack.visible = !0,
                    s.length > 1 && s.sort((t, e) =>{
                        return Laya.Vector3.distanceSquared(q.Instance.mainScene.GetMap.playerCtl.GetPosition, t.GetPosition) < Laya.Vector3.distanceSquared(q.Instance.mainScene.GetMap.playerCtl.GetPosition, e.GetPosition) ? -1 : 1
                    }),
                    a = s[0].land;
                    let n = new Laya.Vector4;
                    q.Instance.mainScene.GetCamera.GetCamera.viewport.project(a.transform.position, q.Instance.mainScene.GetCamera.GetCamera.projectionViewMatrix, n),
                    n.x = n.x / Laya.stage.clientScaleX,
                    n.y = n.y / Laya.stage.clientScaleY,
                    n.x <= 0 || n.x >= Laya.stage.width || n.y <= 0 || n.y >= Laya.stage.height ? this.arrow_attack.visible = !0 : this.arrow_attack.visible = !1,
                    n.x <= this.arrow_attack.width / 2 ? n.x = 0 + this.arrow_attack.width / 2 : n.x >= Laya.stage.width - this.arrow_attack.width / 2 && (n.x = Laya.stage.width - this.arrow_attack.width / 2),
                    n.y <= this.arrow_attack.height / 2 ? n.y = 0 + this.arrow_attack.height / 2 : n.y >= Laya.stage.height - this.arrow_attack.height / 2 && (n.y = Laya.stage.height - this.arrow_attack.height / 2);
                    let o = new Laya.Point(n.x, n.y);
                    n.w < 0 && (o.x *= -1, o.y *= -1),
                    this.arrow_attack.pos(o.x, o.y);
                    var t = a.transform.position.x - q.Instance.mainScene.GetMap.playerCtl.GetPosition.x,
                    e = a.transform.position.z - q.Instance.mainScene.GetMap.playerCtl.GetPosition.z; (i = 180 * Math.atan2(t, e) / Math.PI) < 0 && (i += 360),
                    this.arrow_attack.getChildByName("arrow").rotation = -i
                } else this.arrow_attack.visible = !1;
                let o = new Laya.Vector3(q.Instance.mainScene.GetMap.headquartersList[0].GetPosition.x, q.Instance.mainScene.GetMap.headquartersList[0].GetPosition.y, q.Instance.mainScene.GetMap.headquartersList[0].GetPosition.z + 7),
                r = new Laya.Vector4;
                q.Instance.mainScene.GetCamera.GetCamera.viewport.project(o, q.Instance.mainScene.GetCamera.GetCamera.projectionViewMatrix, r),
                r.x = r.x / Laya.stage.clientScaleX,
                r.y = r.y / Laya.stage.clientScaleY,
                r.x <= 0 || r.x >= Laya.stage.width || r.y <= 0 || r.y >= Laya.stage.height ? this.arrow_camp.visible = !0 : this.arrow_camp.visible = !1,
                r.x <= this.arrow_attack.width / 2 ? r.x = 0 + this.arrow_attack.width / 2 : r.x >= Laya.stage.width - this.arrow_attack.width / 2 && (r.x = Laya.stage.width - this.arrow_attack.width / 2),
                r.y <= this.arrow_attack.height / 2 ? r.y = 0 + this.arrow_attack.height / 2 : r.y >= Laya.stage.height - this.arrow_attack.height / 2 && (r.y = Laya.stage.height - this.arrow_attack.height / 2);
                let h = new Laya.Point(r.x, r.y);
                r.w < 0 && (h.x *= -1, h.y *= -1),
                this.arrow_camp.pos(h.x, h.y);
                t = o.x - q.Instance.mainScene.GetMap.playerCtl.GetPosition.x,
                e = o.z - q.Instance.mainScene.GetMap.playerCtl.GetPosition.z;
                let l; (i = 180 * Math.atan2(t, e) / Math.PI) < 0 && (i += 360),
                this.arrow_camp.getChildByName("arrow").rotation = -i;
                let c = [];
                if (q.Instance.mainScene.GetMap.silverList.length > 0) for (let t = q.Instance.mainScene.GetMap.silverList.length - 1; t >= 0; t--) c.push(q.Instance.mainScene.GetMap.silverList[t]);
                if (c.length > 0) {
                    this.arrow_tag.visible = !0,
                    c.length > 1 && c.sort((t, e) =>{
                        return Laya.Vector3.distanceSquared(q.Instance.mainScene.GetMap.playerCtl.GetPosition, t.GetPosition) < Laya.Vector3.distanceSquared(q.Instance.mainScene.GetMap.playerCtl.GetPosition, e.GetPosition) ? -1 : 1
                    }),
                    l = c[0].GetMainNode;
                    let a = new Laya.Vector4;
                    q.Instance.mainScene.GetCamera.GetCamera.viewport.project(l.transform.position, q.Instance.mainScene.GetCamera.GetCamera.projectionViewMatrix, a),
                    a.x = a.x / Laya.stage.clientScaleX,
                    a.y = a.y / Laya.stage.clientScaleY,
                    a.x <= 0 || a.x >= Laya.stage.width || a.y <= 0 || a.y >= Laya.stage.height ? this.arrow_tag.visible = !0 : this.arrow_tag.visible = !1,
                    a.x <= this.arrow_tag.width / 2 ? a.x = 0 + this.arrow_tag.width / 2 : a.x >= Laya.stage.width - this.arrow_tag.width / 2 && (a.x = Laya.stage.width - this.arrow_tag.width / 2),
                    a.y <= this.arrow_tag.height / 2 ? a.y = 0 + this.arrow_tag.height / 2 : a.y >= Laya.stage.height - this.arrow_tag.height / 2 && (a.y = Laya.stage.height - this.arrow_tag.height / 2);
                    let s = new Laya.Point(a.x, a.y);
                    a.w < 0 && (s.x *= -1, s.y *= -1),
                    this.arrow_tag.pos(s.x, s.y);
                    var i;
                    t = l.transform.position.x - q.Instance.mainScene.GetMap.playerCtl.GetPosition.x,
                    e = l.transform.position.z - q.Instance.mainScene.GetMap.playerCtl.GetPosition.z; (i = 180 * Math.atan2(t, e) / Math.PI) < 0 && (i += 360),
                    this.arrow_tag.getChildByName("arrow").rotation = -i
                } else this.arrow_tag.visible = !1;
                if (Q.zs_game_share_video_switch && !this.isShowShareRecord && zs.platform.sync.getRecorderTime() >= 60 && (console.log("====录屏时间达60s自动弹分享录屏页面"), Laya.stage.once("share_recore_result", this, this.recoverGamePlay), this.isShowShareRecord = !0, q.Instance.GamePause(), zs.core.workflow.runEventConfig("event_show_share_record"), this.recordMarkTip.visible = !1), isNaN(V.bombCountDown)) this.missileBtn2.visible = !1;
                else {
                    this.missileBtn2.visible = !0;
                    let t = Math.floor(V.bombCountDown / 60),
                    e = Math.floor(V.bombCountDown % 60);
                    this.missileBtn2Level.value = (t < 10 ? "0" + t: t) + ":" + (e < 10 ? "0" + e: e)
                }
                if (!isNaN(this.fireBombGuideTimer)) if (this.totalGuideTime > 0) { (Laya.timer.currTimer - this.fireBombGuideTimer) / this.totalGuideTime >= 1 && this.hideFireGuide(!0)
                } else this.fireBombGuideTimer = NaN,
                this.fireBombTimer = Laya.timer.currTimer,
                this.totalTime = _.daodanData.flyTime;
                if (!isNaN(this.fireBombTimer)) {
                    let t = (Laya.timer.currTimer - this.fireBombTimer) / this.totalTime;
                    if (t >= 1) this.fireBombTimer = NaN,
                    this.btn_fire.visible = !1;
                    else {
                        this.fire_fg.mask = null;
                        let e = new Laya.Sprite;
                        e.pos( - 41.5, -42),
                        e.width = e.height = 300,
                        e.graphics.drawPie(150, 150, 150, 360 * t - 90, 270, "#ff0000"),
                        this.fire_fg.mask = e
                    }
                }
            }
            if (1 == V.curGameEarthLevel() && q.Instance.hintIndex < this.taskUrlList.length) {
                let t = new Laya.Vector4;
                q.Instance.mainScene.GetCamera.GetCamera.viewport.project(new Laya.Vector3(q.Instance.mainScene.GetMap.playerCtl.GetPosition.x, q.Instance.mainScene.GetMap.playerCtl.silverPoint.transform.position.y + 2 * q.Instance.mainScene.GetMap.playerCtl.box.extents.y, q.Instance.mainScene.GetMap.playerCtl.GetPosition.z), q.Instance.mainScene.GetCamera.GetCamera.projectionViewMatrix, t),
                t.x = t.x / Laya.stage.clientScaleX,
                t.y = t.y / Laya.stage.clientScaleY;
                let e = this.topUI.globalToLocal(new Laya.Point(t.x, t.y - this.task_1.height / 2));
                switch (this.task_1.pos(e.x, e.y), q.Instance.hintIndex) {
                case 0:
                    q.Instance.mainScene.GetMap.silverList.length > 0 && (this.target = q.Instance.mainScene.GetMap.silverList[0].GetMainNode, q.Instance.mainScene.GetMap.effect_Arrow.active = !0, q.Instance.mainScene.GetMap.effect_Arrow.transform.position = new Laya.Vector3(this.target.transform.position.x, q.Instance.mainScene.GetMap.GetPosition.y + .01, this.target.transform.position.z));
                    break;
                case 4:
                    let t = this.SearchBarrck();
                    if (q.Instance.mainScene.GetMap.playerCtl.silverList.length >= t.levelNum - t.lastNum) return void q.Instance.AddHintShow();
                    let i = [];
                    for (let t = q.Instance.mainScene.GetMap.silverList.length - 1; t >= 0; t--) i.push(q.Instance.mainScene.GetMap.silverList[t]);
                    i.length > 0 ? (i.length > 1 && i.sort((t, e) =>{
                        return Laya.Vector3.distanceSquared(q.Instance.mainScene.GetMap.playerCtl.GetPosition, t.GetPosition) < Laya.Vector3.distanceSquared(q.Instance.mainScene.GetMap.playerCtl.GetPosition, e.GetPosition) ? -1 : 1
                    }), this.target = i[0].GetMainNode) : this.target = null
                }
                if (null == this.target || !this.target.transform) return q.Instance.mainScene.GetMap.playerCtl.circleObj.meshRenderer.material = q.Instance.mainScene.GetMap.circleMat.node,
                void(q.Instance.mainScene.GetMap.arrow.GetMainNode.active = !1);
                q.Instance.mainScene.GetMap.arrow.GetMainNode.active = !0;
                let i = Laya.Vector3.distance(q.Instance.mainScene.GetMap.playerCtl.GetPosition, this.target.transform.position),
                a = new Laya.Vector3(this.target.transform.position.x - q.Instance.mainScene.GetMap.playerCtl.GetPosition.x, 0, this.target.transform.position.z - q.Instance.mainScene.GetMap.playerCtl.GetPosition.z);
                Laya.Vector3.normalize(a, a),
                q.Instance.mainScene.GetMap.arrow.SetPosition = new Laya.Vector3(q.Instance.mainScene.GetMap.playerCtl.GetPosition.x + i / 2 * a.x, q.Instance.mainScene.GetMap.playerCtl.GetPosition.y, q.Instance.mainScene.GetMap.playerCtl.GetPosition.z + i / 2 * a.z),
                q.Instance.mainScene.GetMap.arrow.ChangeSize(i),
                q.Instance.mainScene.GetMap.playerCtl.circleObj.meshRenderer.material = q.Instance.mainScene.GetMap.circleMat.guide,
                q.Instance.mainScene.GetMap.playerCtl.circleObj.transform.lookAt(new Laya.Vector3(this.target.transform.position.x, q.Instance.mainScene.GetMap.playerCtl.circleObj.transform.position.y, this.target.transform.position.z), new Laya.Vector3(0, 1, 0)),
                q.Instance.mainScene.GetMap.arrow.GetMainNode.transform.lookAt(new Laya.Vector3(this.target.transform.position.x, q.Instance.mainScene.GetMap.arrow.GetPosition.y, this.target.transform.position.z), new Laya.Vector3(0, 1, 0))
            }
            if (this.proHpBox.visible && q.Instance.mainScene.GetMap.playerCtl) {
                let t = new Laya.Vector4;
                q.Instance.mainScene.GetCamera.GetCamera.viewport.project(new Laya.Vector3(q.Instance.mainScene.GetMap.playerCtl.GetPosition.x, q.Instance.mainScene.GetMap.playerCtl.GetPosition.y + 2 * q.Instance.mainScene.GetMap.playerCtl.box.extents.y, q.Instance.mainScene.GetMap.playerCtl.GetPosition.z), q.Instance.mainScene.GetCamera.GetCamera.projectionViewMatrix, t),
                t.x = t.x / Laya.stage.clientScaleX,
                t.y = t.y / Laya.stage.clientScaleY,
                this.proHpBox.x = t.x,
                this.proHpBox.y = t.y
            }
            q.Instance.isRage && this.UpdateRage()
        }
        hideFireGuide(t = !1) {
            if (this.fireTIps.visible && (this.guideAni.stop(), this.guide.visible = !1, this.fireTIps.visible = !1, this.showFireBtn(), t = !0), t) {
                let t = 0;
                isNaN(this.fireBombGuideTimer) || (t = this.totalGuideTime - (Laya.timer.currTimer - this.fireBombGuideTimer)),
                this.fireBombGuideTimer = NaN,
                this.fireBombTimer = Laya.timer.currTimer,
                this.totalTime = _.daodanData.flyTime + (t > 0 ? t: 0)
            }
        }
        showFireBtn() {
            let t = this.owner.fire_in;
            t.play(0, !1),
            t.on(Laya.Event.COMPLETE, this, () =>{
                this.btn_fire.visible = !0
            })
        }
        HiddleVideoToBomb(t, e, i) {
            this.maxroleBtn.visible = t,
            this.maxbarracksBtn.visible = t,
            this.btn_rage.visible = t,
            this.airshipBtn.visible = t,
            V.gmUI && (this.maxroleBtn.visible = !1, this.maxbarracksBtn.visible = !1, this.btn_rage.visible = !1, this.airshipBtn.visible = !1),
            t || (this.guide.visible = !0, this.guideAni.play(0, !0), this.fireTIps.visible = !0, this.fireBombTimer = NaN, this.fireBombGuideTimer = Laya.timer.currTimer, this.totalGuideTime = i)
        }
        AllHit(t) {
            console.log(" 11111 "),
            this.attacKBtn.scale(1, 1),
            this.attacKBtn.visible = !0,
            this.btnLoopAni.stop(),
            this.btnOutAni.offAll(Laya.Event.COMPLETE),
            this.btnOutAni.stop(),
            this.btnInAni.offAll(Laya.Event.COMPLETE),
            this.btnInAni.play(0, !1),
            this.btnInAni.once(Laya.Event.COMPLETE, this, this.btnLoopAnimation),
            this.attacKBtn.once(Laya.Event.CLICK, this, this.HitClick, [t])
        }
        btnLoopAnimation() {
            this.btnLoopAni.play(0, !0)
        }
        HideHit() {
            this.attacKBtn.visible && (this.btnInAni.offAll(Laya.Event.COMPLETE), this.btnInAni.stop(), this.btnLoopAni.stop(), this.btnOutAni.offAll(Laya.Event.COMPLETE), this.btnOutAni.play(0, !1), this.btnOutAni.once(Laya.Event.COMPLETE, this, () =>{
                this.attacKBtn.visible = !1
            }), this.attacKBtn.off(Laya.Event.CLICK, this, this.HitClick))
        }
        HitClick(t) {
            U.Instance.StopEffectAudio("quanjunchuji"),
            U.Instance.PlayEffectAudio("quanjunchuji"),
            this.HideHit(),
            this.attackAniBox.visible = !0,
            this.attackAni.offAll(Laya.Event.COMPLETE),
            this.attackAni.play(0, !1),
            this.attackAni.once(Laya.Event.COMPLETE, this, () =>{
                this.attackAniBox.visible = !1
            }),
            t.DispatchTroops()
        }
        HideGuide() {
            q.Instance.isGuide = !1,
            this.guideAni.stop(),
            this.guide.visible = !1
        }
        BuffIcon(t) {
            let e = j.BuffIconPrefab.create();
            this.owner.addChild(e),
            e.addComponent(Z).SetTarget = t
        }
        UpdateRage() {
            q.Instance.lastRageTime < 0 && (q.Instance.lastRageTime = 0),
            this.rageTime.value = Math.floor(q.Instance.lastRageTime).toString(),
            this.rageMaskImg.mask = null;
            let t = 0; (t = q.Instance.lastRageTime > 0 ? q.Instance.lastRageTime / _.rageTime: 0) > 1 ? t = 1 : t < 0 && (t = 0);
            let e = 360 * (1 - t);
            e > 360 ? e = 360 : e < 0 && (e = 0);
            let i = new Laya.Sprite;
            i.pos(60, 74),
            i.width = i.height = 16,
            i.pivot(8, 8),
            i.graphics.drawPie(8, 8, this.rageMaskImg.height / 2 + this.rageMaskImg.width / 2, -90 + e, 270, "#ffffff"),
            this.rageMaskImg.mask = i,
            q.Instance.lastRageTime <= 0 && (this.rageVideo.skin = "game/icon_video.png", this.rageTime.visible = !1, this.rageTips.visible = !1, this.rageMaskImg.visible = !1, q.Instance.mainScene.GetMap.playerCtl.RageEnd())
        }
        UpdatePro() {
            let t = 0;
            q.Instance.lastLevelNum <= 0 ? t = 0 : q.Instance.lastLevelNum > 0 && (t = q.Instance.lastLevelNum / q.Instance.maxLevelNum);
            let e = t * this.fgWidth;
            e <= 0 ? e = 1 : e > this.fgWidth && (e = this.fgWidth),
            this.fg.visible = !(e <= 1),
            this.fg.mask = null;
            let i = new Laya.Sprite;
            i.pos(0, 0),
            i.width = 202,
            i.height = 26,
            i.graphics.drawRect(0, 0, e, 26, "#ffffff"),
            this.fg.mask = i
        }
        GetSilver(t) {
            let e = new Laya.Image("game/icon_Tag1.png");
            e.anchorX = .5,
            e.anchorY = .5,
            this.owner.addChild(e),
            e.pos(t.x, t.y),
            e.scale(2, 2);
            let i = this.dem.localToGlobal(new Laya.Point(this.demIcon.x, this.demIcon.y));
            Laya.Tween.to(e, {
                x: i.x,
                y: i.y,
                scaleX: .8,
                scaleY: .8
            },
            1200, null, Laya.Handler.create(this, t =>{
                V.GoldAdd(1),
                this.UpdateGoldMingPai(),
                t.destroy()
            },
            [e]))
        }
        AddMingPai() {
            if (!q.Instance.mainScene.GetMap.playerCtl || 0 == q.Instance.hintIndex) return;
            let t = new Laya.Image(this.addMingPaiUrl);
            this.view.addChild(t);
            let e = new Laya.Vector4;
            q.Instance.mainScene.GetCamera.GetCamera.viewport.project(new Laya.Vector3(q.Instance.mainScene.GetMap.playerCtl.GetPosition.x, q.Instance.mainScene.GetMap.playerCtl.silverPoint.transform.position.y + q.Instance.mainScene.GetMap.playerCtl.box.extents.y, q.Instance.mainScene.GetMap.playerCtl.GetPosition.z), q.Instance.mainScene.GetCamera.GetCamera.projectionViewMatrix, e),
            e.x = e.x / Laya.stage.clientScaleX,
            e.y = e.y / Laya.stage.clientScaleY,
            t.pos(e.x, e.y),
            Laya.Tween.to(t, {
                y: t.y - 150,
                alpha: .2
            },
            500, Laya.Ease.linearNone, Laya.Handler.create(this, t =>{
                t.destroy()
            },
            [t]))
        }
        UpdateMingPai() {
            this.demNum.value = q.Instance.mainScene.GetMap.playerCtl.silverList.length.toString()
        }
        UpdateGoldMingPai() {
            this.gold.value = V.gold.toString()
        }
        UpdateEnemy() {
            this.demEnemyNum.value = (q.Instance.maxLevelNum - q.Instance.lastLevelNum).toString();
            q.killEnermyNum += 1;
        }
        UpdatePlayer() {
            this.demPlayerNum.value = q.Instance.lastSoliderNum.toString(),
            q.Instance.GetIsMaxSolider ? this.isMaxImg.visible = !0 : this.isMaxImg.visible = !1
        }
        UpdateHp() {
            if (!q.Instance.mainScene.GetMap.playerCtl) return;
            let t = 0;
            t = q.Instance.mainScene.GetMap.playerCtl.hp > 0 ? q.Instance.mainScene.GetMap.playerCtl.hp / q.Instance.mainScene.GetMap.playerCtl.maxHp: 0,
            (t *= this.fgHpWidth) > this.fgHpWidth ? t = this.fgHpWidth: t <= 0 && (t = 1),
            this.hpfg.visible = !(t <= 1),
            this.hpfg.width = t,
            this.proHpBox.visible = !0,
            this.proHpBox.timer.clearAll(this),
            this.proHpBox.timer.once(3e3, this, () =>{
                this.proHpBox.visible = !1
            })
        }
        ShowTouch(t = 0) {
            t ? this.touchImg.visible = !1 : this.touchImg.visible ? this.touchImg.visible = !1 : (this.touchImg.visible = !0, this.touchImg.pos(Laya.stage.mouseX, Laya.stage.mouseY)),
            this.touch.pos(this.touchImg.width / 2, this.touchImg.height / 2)
        }
        UpdateTouch(t) {
            let e = this.touchImg.width / 2;
            var i = Laya.stage.mouseX - this.touchImg.x,
            a = Laya.stage.mouseY - this.touchImg.y;
            t < 0 && (t += 360);
            var s = Math.PI / 180 * t,
            n = 0,
            o = 0;
            Math.abs(i) >= e || Math.abs(a) >= e ? (n = Math.sin(s) * e + e / 2 + this.touch.width / 2, o = Math.cos(s) * e + e / 2 + this.touch.height / 2) : (n = i + e, o = a + e),
            this.touch.pos(n, o)
        }
        ChangeHint(t) {
            switch (t) {
            case 0:
                this.task_1.skin != this.changeTask && (this.task_1.skin = this.changeTask);
                break;
            case 1:
                this.task_1.skin != this.taskUrlList[q.Instance.hintIndex] && (this.task_1.skin = this.taskUrlList[q.Instance.hintIndex])
            }
        }
        ShowHint(t) {
            if (V.gmUI || (this.maxbarracksBtn.visible || (this.maxbarracksBtn.on(Laya.Event.CLICK, this, this.MaxBarrackClick), this.maxbarracksBtn.visible = !0), this.maxroleBtn.visible || (this.maxroleBtn.on(Laya.Event.CLICK, this, this.MaxRoleClick), this.maxroleBtn.visible = !0), !this.airshipBtn.visible && V.curGameEarthLevel() > 1 && (this.airshipBtn.on(Laya.Event.CLICK, this, this.onAirshipClick), this.airshipBtn.visible = !0)), V.curGameEarthLevel() > 1 && (V.gmUI || this.btn_rage.visible || (this.btn_rage.visible = !0, this.btn_rage.x = this.btn_rageX, this.btn_rage.on(Laya.Event.CLICK, this, this.RageClick))), !(V.curGameEarthLevel() > 1)) if (0 == t && (q.Instance.isGuide ? (this.guide.visible = !0, this.guideAni.play(0, !0)) : this.guide.visible = !1), t < this.taskUrlList.length) switch (this.task_1.skin = this.taskUrlList[t], this.task_1.visible = !0, this.taskAni.play(0, !1), t) {
            case 0:
                u.trackEvent("拾取铭牌引导开始"),
                this.target = q.Instance.mainScene.GetMap.silverList[0].GetMainNode,
                q.Instance.mainScene.GetMap.effect_Arrow.active = !0,
                q.Instance.mainScene.GetMap.effect_Arrow.transform.position = new Laya.Vector3(this.target.transform.position.x, q.Instance.mainScene.GetMap.GetPosition.y + .01, this.target.transform.position.z);
                break;
            case 1:
                u.trackEvent("拾取铭牌引导完成"),
                q.Instance.mainScene.GetMap.playerCtl.IsUnlockBarracks() ? q.Instance.AddHintShow() : (this.target = q.Instance.mainScene.GetMap.headquartersList[0].dispatchTroopsCtlList[0].barrackList[0].unlockPro, q.Instance.mainScene.GetMap.effect_Arrow.active = !0, q.Instance.mainScene.GetMap.effect_Arrow.transform.position = new Laya.Vector3(this.target.transform.position.x, this.target.transform.position.y + .01, this.target.transform.position.z));
                break;
            case 2:
                u.trackEvent("解锁Barracks引导完成"),
                q.Instance.mainScene.GetMap.playerCtl.level > 1 ? q.Instance.AddHintShow() : (this.target = q.Instance.mainScene.GetMap.headquartersList[0].dispatchTroopsCtlList[0].levelPro, q.Instance.mainScene.GetMap.effect_Arrow.active = !0, q.Instance.mainScene.GetMap.effect_Arrow.transform.position = new Laya.Vector3(this.target.transform.position.x, this.target.transform.position.y + .01, this.target.transform.position.z));
                break;
            case 3:
                u.trackEvent("升级军长引导完成"),
                this.target = q.Instance.mainScene.GetMap.headquartersList[0].instructPoint.getChildAt(0),
                q.Instance.mainScene.GetMap.effect_Arrow.active = !0,
                q.Instance.mainScene.GetMap.effect_Arrow.transform.position = new Laya.Vector3(this.target.transform.position.x, this.target.transform.position.y + .01, this.target.transform.position.z);
                break;
            case 4:
                u.trackEvent("出兵引导完成");
                let e = !1;
                q.Instance.mainScene.GetMap.effect_Arrow.active = !1,
                q.Instance.mainScene.GetMap.headquartersList.forEach(t =>{
                    t.dispatchTroopsCtlList.forEach(t =>{
                        t.barrackList.forEach(t =>{
                            t.level > 1 && (e = !0)
                        })
                    })
                }),
                e && q.Instance.AddHintShow();
                break;
            case 5:
                u.trackEvent("拾取升级Barracks的铭牌引导完成");
                let i = !1;
                if (q.Instance.mainScene.GetMap.headquartersList.forEach(t =>{
                    t.dispatchTroopsCtlList.forEach(t =>{
                        t.barrackList.forEach(t =>{
                            t.level > 1 && (i = !0)
                        })
                    })
                }), i) return void q.Instance.AddHintShow();
                this.target = this.SearchBarrck().levelPro,
                q.Instance.mainScene.GetMap.effect_Arrow.active = !0,
                q.Instance.mainScene.GetMap.effect_Arrow.transform.position = new Laya.Vector3(this.target.transform.position.x, this.target.transform.position.y + .01, this.target.transform.position.z)
            } else u.trackEvent("拾取升级Barracks的铭牌引导完成"),
            q.Instance.mainScene.GetMap.playerCtl.circleObj.meshRenderer.material = q.Instance.mainScene.GetMap.circleMat.node,
            q.Instance.mainScene.GetMap.effect_Arrow.active = !1,
            q.Instance.mainScene.GetMap.arrow.GetMainNode.active = !1,
            V.gmUI || (this.btn_rage.visible = !0, this.btn_rage.scale(0, 0), this.btn_rage.x = (this.middleUI.width - this.btn_rage.width) / 2, this.btn_rage.y = (this.middleUI.height - this.btn_rage.height) / 2, Laya.Tween.to(this.btn_rage, {
                scaleX: 1.5,
                scaleY: 1.5
            },
            300, null, Laya.Handler.create(this, () =>{
                Laya.timer.once(500, this, this.moveRight)
            }))),
            this.task_1.visible = !1
        }
        moveRight() {
            Laya.Tween.to(this.btn_rage, {
                scaleX: 1,
                scaleY: 1,
                x: this.btn_rageX,
                y: 647
            },
            300),
            this.btn_rage.on(Laya.Event.CLICK, this, this.RageClick)
        }
        MaxBarrackClick() {
            q.Instance.mainScene.GetMap.playerCtl.GetIsMaxBarrack ? H.Instance.ShowTips(window.lang.barracksMax) : (this.view.mouseEnabled = !1, J.ClickBtnTweenTo(this.maxbarracksBtn, .8, 1, this, () =>{
                V.curGameLevel() <= V.trackEventLevelMax && u.trackEvent((V.starState == d.earth ? "": "月球") + "关卡" + V.curGameLevel() + "观看满级Barracks视频"),
                u.trackEvent("观看满级Barracks视频"),
                q.Instance.GamePause(),
                zs.platform.async.playVideo().then(t =>{
                    t ? (V.curGameLevel() <= V.trackEventLevelMax && u.trackEvent((V.starState == d.earth ? "": "月球") + "关卡" + V.curGameLevel() + "观看满级Barracks视频成功"), u.trackEvent("观看满级Barracks视频成功"), q.Instance.mainScene.GetMap.playerCtl.VideoMaxLevelBarrack(), this.view.mouseEnabled = !0, q.Instance.GameRegain()) : (V.curGameLevel() <= V.trackEventLevelMax && u.trackEvent((V.starState == d.earth ? "": "月球") + "关卡" + V.curGameLevel() + "观看满级Barracks视频失败"), u.trackEvent("观看满级Barracks视频失败"), H.Instance.ShowTips(window.lang.watchVideoTip), this.view.mouseEnabled = !0, q.Instance.GameRegain())
                }).
                catch(() =>{
                    u.trackEvent("无观看视频资源"),
                    this.view.mouseEnabled = !0,
                    q.Instance.GameRegain()
                })
            }))
        }
        MaxRoleClick() {
            q.Instance.mainScene.GetMap.playerCtl.GetIsMaxLevel ? H.Instance.ShowTips(window.lang.commanderMax) : (this.view.mouseEnabled = !1, J.ClickBtnTweenTo(this.maxroleBtn, .8, 1, this, () =>{
                V.curGameLevel() <= V.trackEventLevelMax && u.trackEvent((V.starState == d.earth ? "": "月球") + "关卡" + V.curGameLevel() + "观看满级军长视频"),
                u.trackEvent("观看满级军长视频"),
                q.Instance.GamePause(),
                zs.platform.async.playVideo().then(t =>{
                    t ? (V.curGameLevel() <= V.trackEventLevelMax && u.trackEvent((V.starState == d.earth ? "": "月球") + "关卡" + V.curGameLevel() + "观看满级军长视频成功"), u.trackEvent("观看满级军长视频成功"), q.Instance.mainScene.GetMap.playerCtl.VideoMaxRole(), this.view.mouseEnabled = !0, q.Instance.GameRegain()) : (V.curGameLevel() <= V.trackEventLevelMax && u.trackEvent((V.starState == d.earth ? "": "月球") + "关卡" + V.curGameLevel() + "观看满级军长视频失败"), u.trackEvent("观看满级军长视频失败"), H.Instance.ShowTips(window.lang.watchVideoTip), this.view.mouseEnabled = !0, q.Instance.GameRegain())
                }).
                catch(() =>{
                    u.trackEvent("无观看视频资源"),
                    this.view.mouseEnabled = !0,
                    q.Instance.GameRegain()
                })
            }))
        }
        RageClick() {
            q.Instance.isRage || q.Instance.mainScene.GetMap.playerCtl.IsDie || q.Instance.mainScene.GetMap.playerCtl.action.state == e.Mania || (this.view.mouseEnabled = !1, J.ClickBtnTweenTo(this.btn_rage, .8, 1, this, () =>{
                V.curGameLevel() <= V.trackEventLevelMax && u.trackEvent((V.starState == d.earth ? "": "月球") + "关卡" + V.curGameLevel() + "观看Mania视频"),
                u.trackEvent("观看Mania视频"),
                q.Instance.GamePause(),
                zs.platform.async.playVideo().then(t =>{
                    t ? (V.curGameLevel() <= V.trackEventLevelMax && u.trackEvent((V.starState == d.earth ? "": "月球") + "关卡" + V.curGameLevel() + "观看Mania视频成功"), u.trackEvent("观看Mania视频成功"), q.Instance.GameRegain(), this.Rage()) : (V.curGameLevel() <= V.trackEventLevelMax && u.trackEvent((V.starState == d.earth ? "": "月球") + "关卡" + V.curGameLevel() + "观看Mania视频失败"), u.trackEvent("观看Mania视频失败"), H.Instance.ShowTips(window.lang.watchVideoTip3), q.Instance.GameRegain(), this.view.mouseEnabled = !0)
                }).
                catch(t =>{
                    console.error(t),
                    u.trackEvent("无观看视频资源"),
                    q.Instance.GameRegain(),
                    this.view.mouseEnabled = !0
                })
            }))
        }
        Rage() {
            this.view.mouseEnabled = !0,
            this.rageMaskImg.visible = !0,
            this.rageTime.visible = !0,
            this.rageTips.visible = !0,
            this.rageVideo.skin = "game/mask_video.png",
            this.rageAni.play(0, !1),
            q.Instance.mainScene.GetMap.playerCtl.baozou(),
            this.rageAni.once(Laya.Event.COMPLETE, this, () =>{
                this.rageTips.visible = !1
            })
        }
        TouchDown() {
            Laya.stage.event(u.TOUCH_DOWN),
            this.hideFireGuide()
        }
        TouchMove() {
            Laya.stage.event(u.TOUCH_MOVE)
        }
        TouchUp(t) {
            Laya.stage.event(u.TOUCH_UP)
        }
        ShowTips(t) {
            this.tips.skin = t,
            this.tips.visible = !0,
            this.tipsAni.play(0, !1),
            this.tipsAni.off(Laya.Event.COMPLETE, this, this.HideTips),
            this.tipsAni.once(Laya.Event.COMPLETE, this, this.HideTips)
        }
        HideTips() {
            this.tips.visible = !1
        }
        SearchBarrck() {
            let t = [];
            return q.Instance.mainScene.GetMap.headquartersList.forEach(e =>{
                e.dispatchTroopsCtlList.forEach(e =>{
                    e.barrackList.forEach(e =>{
                        e.isUnlock && t.push(e)
                    })
                })
            }),
            t.length > 1 && t.sort((t, e) =>t.levelNum - t.lastNum < e.levelNum - e.lastNum ? -1 : 1),
            t[0]
        }
        addAutoVideoTrigger() {
            if (Q.zs_switch && Q.zs_native_gap_time > 0) {
                let t = 1e3 * Q.zs_native_gap_time;
                Laya.timer.once(t, this, this.onAutoVideoTime)
            }
        }
        removeAutoVideoTrigger() {
            Laya.timer.clear(this, this.onAutoVideoTime)
        }
        onAutoVideoTime() {
            if (q.Instance.mainScene.isStart) {
                q.Instance.GamePause(),
                zs.platform.sync.recorderPause(),
                this.removeAutoVideoTrigger();
                let t = this;
                zs.platform.async.playVideo().then(e =>{
                    t.addAutoVideoTrigger(),
                    q.Instance.GameRegain(),
                    zs.platform.sync.recorderResume()
                }).
                catch(() =>{
                    q.Instance.GameRegain(),
                    t.addAutoVideoTrigger(),
                    zs.platform.sync.recorderResume()
                })
            }
        }
        onRecordClick() {
            if (zs.platform.sync.getRecorderTime() > 15) {
                console.log("直接分享视频"),
                this.recordMarkTip.visible = !1;
                let t = this;
                zs.platform.sync.recorderStop({
                    callback: () =>{
                        q.Instance.GamePause(),
                        zs.platform.async.shareRecorderVideo().then(() =>{
                            zs.platform.sync.showToast("分享录屏成功！"),
                            zs.platform.sync.recorderStart({
                                maxTime: Q.zs_best_videotape_time / 1e3
                            }),
                            t.recordMarkTip.visible = !0,
                            q.Instance.GameRegain()
                        }).
                        catch(() =>{
                            zs.platform.sync.showToast("分享录屏失败！"),
                            zs.platform.sync.recorderStart({
                                maxTime: Q.zs_best_videotape_time / 1e3
                            }),
                            t.recordMarkTip.visible = !0,
                            q.Instance.GameRegain()
                        })
                    }
                })
            } else zs.platform.sync.showToast("录屏时间太短！")
        }
        recoverGamePlay(t) {
            console.log("录屏页关闭回调===》", t),
            t || (this.isShowShareRecord = !1, zs.platform.sync.recorderStart({
                maxTime: Q.zs_best_videotape_time / 1e3
            }), this.recordMarkTip.visible = !0),
            q.Instance.GameRegain()
        }
        onBombClick(t) {
            H.isOpenLaunchPage || this.click() || (this.HideHit(), H.isOpenLaunchPage = !0, H.Instance.OpenView(H.Instance.launchUrl, !1, {
                handler: Laya.Handler.create(this, this.clickFalse)
            }))
        }
        onAirshipClick(t) {
            q.Instance.mainScene.GetMap.playerCtl.GetIsAirship ? H.Instance.ShowTips(window.lang.jetTip) : (this.view.mouseEnabled = !1, J.ClickBtnTweenTo(this.airshipBtn, .8, 1, this, () =>{
                u.trackEvent("观看超级战舰视频"),
                q.Instance.GamePause(),
                zs.platform.async.playVideo().then(t =>{
                    t ? (u.trackEvent("观看超级战舰视频成功"), q.Instance.mainScene.GetMap.callAirShip(), this.view.mouseEnabled = !0, q.Instance.GameRegain()) : (u.trackEvent("观看满级Barracks视频失败"), H.Instance.ShowTips(window.lang.watchVideoTip2), this.view.mouseEnabled = !0, q.Instance.GameRegain())
                }).
                catch(() =>{
                    u.trackEvent("无观看视频资源"),
                    this.view.mouseEnabled = !0,
                    q.Instance.GameRegain()
                })
            }))
        }
        onFireBombClick(t) {
            this.view.mouseEnabled = !1,
            J.ClickBtnTweenTo(this.btn_fire, .8, 1, this, () =>{
                this.fireBombGuideTimer = NaN,
                this.fireBombTimer = NaN,
                this.view.mouseEnabled = !0,
                this.btn_fire.visible = !1,
                Laya.stage.event(u.GAMEPAGE_FIREBOMB_BUTTON)
            })
        }
    }
    class tt {
        constructor() {
            this.SoldierList_Mine = [],
            this.SoldierList_Ai = [],
            this.SoldierList_Eny = [],
            this.BuildList_Eny = [],
            this.BuildLIst_Mine = []
        }
        static get Instance() {
            return null == this.instance && (this.instance = new tt),
            this.instance
        }
        Init() {
            this.SoldierList_Mine = [],
            this.SoldierList_Eny = [],
            this.SoldierList_Ai = [],
            this.BuildList_Eny = [],
            this.BuildLIst_Mine = []
        }
        arrayChange(t, e) {
            t >= 0 && (0 == t ? p.RemoveArrayKey(this.SoldierList_Mine, e) : p.RemoveArrayKey(this.SoldierList_Ai, e))
        }
        Remove() {}
    }
    tt.instance = null;
    class et extends g {
        constructor() {
            super(...arguments),
            this.tipsUrl = {
                attack: "game/tip1.png",
                procuct: "game/tip2.png"
            },
            this.taskUrlList = ["game/task_1.png", "game/task_2.png", "game/task_3.png", "game/task_4.png", "game/task_5.png", "game/task_6.png"],
            this.changeTask = "game/task_7.png",
            this.addMingPaiUrl = "game/+1.png",
            this.nativeTimer = 0,
            this.isNativeShow = !1,
            this.fireBombTimer = NaN,
            this.fireBombGuideTimer = NaN,
            this.troops = !0,
            this.isShowShareRecord = !1
        }
        Open() {
            this.topUI = this.owner.getChildByName("topUI"),
            this.middleUI = this.owner.getChildByName("middleUI"),
            this.box_right = this.owner.getChildByName("box_right"),
            this.bottomUI = this.owner.getChildByName("bottomUI"),
            this.touchBox = this.owner.getChildByName("touchBox"),
            this.arrow_attack = this.owner.getChildByName("arrow_attack"),
            this.arrow_camp = this.owner.getChildByName("arrow_camp"),
            this.arrow_tag = this.owner.getChildByName("arrow_tag"),
            this.mapImg = this.topUI.getChildByName("map"),
            this.demNum = this.topUI.getChildByName("dem").getChildByName("level"),
            this.btnRecord = this.topUI.getChildByName("btnRecord"),
            this.recordMarkTip = this.btnRecord.getChildByName("redMark"),
            this.maxbarracksBtn = this.middleUI.getChildByName("maxbarracksBtn"),
            this.maxroleBtn = this.middleUI.getChildByName("maxroleBtn"),
            this.airshipBtn = this.middleUI.getChildByName("airshipBtn"),
            this.rageAni = this.owner.tip1,
            this.troops = !0,
            this.pro_pk = this.topUI.getChildByName("pro_pk"),
            this.fgBlue = this.pro_pk.getChildByName("fgBlue"),
            this.fgGreen = this.pro_pk.getChildByName("fgGreen"),
            this.fgRed = this.pro_pk.getChildByName("fgRed"),
            this.proHpBox = [],
            this.hpfg = [],
            q.Instance.mainScene.GetMap.roleList.forEach(t =>{
                let e = j.HpPrefab.create();
                this.owner.addChild(e),
                e.visible = !1,
                this.proHpBox.push(e);
                let i = e.getChildByName("hpPro");
                this.fgHpWidth = i.width,
                this.hpfg.push(i);
                let a = i.getChildByName("fg");
                0 != t.capmIndex && (a.skin = "game/blood_fg2.png")
            }),
            this.arrow = this.owner.getChildByName("arrow"),
            this.task_1 = this.topUI.getChildByName("task_1"),
            this.touchImg = this.owner.getChildByName("touchImg"),
            this.touch = this.touchImg.getChildByName("touch"),
            this.guide = this.bottomUI.getChildByName("guide"),
            this.tips = this.middleUI.getChildByName("tip1"),
            this.dem = this.topUI.getChildByName("dem1"),
            this.gold = this.dem.getChildByName("level"),
            this.demIcon = this.dem.getChildByName("tag");
            let t = this.middleUI.getChildByName("btn_attack1");
            if (this.attacKBtn = t.getChildByName("btn_attack"), this.attackAniBox = this.middleUI.getChildByName("ani_attack"), this.attackAni = this.owner.attack_tips, this.btnInAni = this.owner.attack_in, this.btnOutAni = this.owner.btn_out, this.btnLoopAni = this.owner.attack_loop, this.middleUI.getChildByName("missileBtn1").visible = !1, this.missileBtn2 = this.middleUI.getChildByName("missileBtn2"), this.missileBtn2Level = this.missileBtn2.getChildByName("level"), this.missileBtn2.visible = !1, this.troopsMove = this.box_right.getChildByName("PKattack1"), this.troopsMove.visible = !1, this.btn_fire = this.middleUI.getChildByName("btn_fire"), this.fire_fg = this.btn_fire.getChildByName("fire_fg"), this.fireTIps = this.guide.getChildByName("fireTIps"), this.img_fire = this.btn_fire.getChildByName("fire_fg"), this.btn_fire.visible = !1, this.fireTIps.visible = !1, this.cloud = this.middleUI.getChildByName("cloud"), this.attacKBtn.visible = !1, this.attackAniBox.visible = !1, this.arrow.visible = !1, this.task_1.visible = !1, this.guide.visible = !1, this.arrow_attack.visible = !1, this.arrow_camp.visible = !1, this.arrow_tag.visible = !1, this.HideTips(), this.demNum.value = "0", this.taskAni = this.owner.task, this.guideAni = this.owner.hand, this.tipsAni = this.owner.tips, this.UpdateMingPai(), this.UpdateGoldMingPai(), this.UpdatePlayer(), this.UpdateEnemy(), this.maxbarracksBtn.visible = !1, this.maxroleBtn.visible = !1, this.airshipBtn.visible = !1, "READY" == zs.core.workflow.childState) {
                q.Instance.mainScene.GetCamera.CameraOrthographicVerticalSize(!1),
                this.cloud.visible = !0,
                this.view.mouseEnabled = !1;
                let t = this.owner.pege_in;
                t ? (t.play(0, !1), t.on(Laya.Event.COMPLETE, this, this.CutsceneAni)) : this.CutsceneAni()
            } else this.cloud.visible = !1,
            this.ShowHint(q.Instance.hintIndex);
            this.miniMap(),
            1 == V.curGameEarthLevel() && (this.maxbarracksBtn.getChildAt(0).visible = !1, this.maxroleBtn.getChildAt(0).visible = !1),
            this.UpdatePro(),
            this.ShowTouch(1),
            this.touchBox.on(Laya.Event.MOUSE_DOWN, this, this.TouchDown),
            this.touchBox.on(Laya.Event.MOUSE_MOVE, this, this.TouchMove),
            this.touchBox.on(Laya.Event.MOUSE_UP, this, this.TouchUp),
            this.touchBox.on(Laya.Event.MOUSE_OUT, this, this.TouchUp),
            this.touchBox.on(Laya.Event.MOUSE_OVER, this, this.TouchUp),
            this.btnMoreGame = this.middleUI.getChildByName("btnMoreGame"),
            this.btnMoreGame.visible = !1,
            this.btnRecord.visible = 1 == Q.zs_version,
            this.addAutoVideoTrigger(),
            V.gmUI && (this.btnMoreGame.visible = !1, this.maxroleBtn.visible = !1, this.maxbarracksBtn.visible = !1, this.btnRecord.visible = !1, this.airshipBtn.visible = !1)
        }
        miniMap() {
            this.mapImg && this.mapImg.removeChildren(),
            q.Instance.mainScene.GetMap.headquartersList.forEach(t =>{
                if (null != t.theirRole) {
                    let e = j.CampPrefab.create();
                    this.mapImg.addChild(e);
                    let i = e.addComponent(K);
                    i.map = this.mapImg,
                    i.SetHead(t)
                }
            }),
            q.Instance.mainScene.GetMap.enemyGatheringList.forEach(t =>{
                let e = j.EnemyPrefab.create();
                this.mapImg.addChild(e);
                let i = e.addComponent(X);
                i.map = this.mapImg,
                i.SetHead(t)
            }),
            q.Instance.mainScene.GetMap.roleList.forEach(t =>{
                let e = j.PointPrefab.create();
                this.mapImg.addChild(e);
                let i = e.addComponent(Y);
                i.map = this.mapImg,
                i.SetHead(t)
            })
        }
        CutsceneAni() {
            this.cloud.visible = !1,
            "READY" == zs.core.workflow.childState ? q.Instance.mainScene.GetCamera.CutsceneAni() : this.ShowHint(q.Instance.hintIndex),
            this.view.mouseEnabled = !0
        }
        onStart() {}
        Hide() {}
        CloseEvent() {
            Laya.stage.off(u.BUFF_ICON, this, this.BuffIcon),
            Laya.stage.off(u.HIDE_GUIDE, this, this.HideGuide),
            Laya.stage.off(u.SHOW_TOUCH, this, this.ShowTouch),
            Laya.stage.off(u.UPDATE_TOUCH, this, this.UpdateTouch),
            Laya.stage.off(u.UPDATE_MINGPAI, this, this.UpdateMingPai),
            Laya.stage.off(u.UPDATE_ENEMY, this, this.UpdateEnemy),
            Laya.stage.off(u.UPDATE_PLAYER, this, this.UpdatePlayer),
            Laya.stage.off(u.UPDATE_HP, this, this.UpdateHp),
            Laya.stage.off(u.ADD_MINGPAI, this, this.AddMingPai),
            Laya.stage.off(u.HINT_SHOW, this, this.ShowHint),
            Laya.stage.off(u.GET_SILVER, this, this.GetSilver),
            Laya.stage.off(u.ALL_HIT, this, this.AllHit),
            Laya.stage.off(u.HIDE_HIT, this, this.HideHit),
            Laya.stage.off(u.HeadDes, this, this.miniMap),
            this.btnMoreGame.off(Laya.Event.CLICK, this, this.onBtnMoreGameClick),
            this.btnRecord.off(Laya.Event.CLICK, this, this.onRecordClick),
            this.missileBtn2.off(Laya.Event.CLICK, this, this.onBombClick),
            this.img_fire.off(Laya.Event.CLICK, this, this.onFireBombClick),
            Laya.stage.off(u.GAMEPAGE_HIDDLEVIDEO_BOMB, this, this.HiddleVideoToBomb),
            this.troopsMove.off(Laya.Event.CLICK, this, this.troopsMthode)
        }
        OpenEvent() {
            Laya.stage.on(u.BUFF_ICON, this, this.BuffIcon),
            Laya.stage.on(u.HIDE_GUIDE, this, this.HideGuide),
            Laya.stage.on(u.SHOW_TOUCH, this, this.ShowTouch),
            Laya.stage.on(u.UPDATE_TOUCH, this, this.UpdateTouch),
            Laya.stage.on(u.UPDATE_MINGPAI, this, this.UpdateMingPai),
            Laya.stage.on(u.UPDATE_ENEMY, this, this.UpdateEnemy),
            Laya.stage.on(u.UPDATE_PLAYER, this, this.UpdatePlayer),
            Laya.stage.on(u.UPDATE_HP, this, this.UpdateHp),
            Laya.stage.on(u.ADD_MINGPAI, this, this.AddMingPai),
            Laya.stage.on(u.HINT_SHOW, this, this.ShowHint),
            Laya.stage.on(u.GET_SILVER, this, this.GetSilver),
            Laya.stage.on(u.CHANGE_HINT, this, this.ChangeHint),
            Laya.stage.on(u.ALL_HIT, this, this.AllHit),
            Laya.stage.on(u.HIDE_HIT, this, this.HideHit),
            Laya.stage.on(u.HeadDes, this, this.miniMap),
            this.btnMoreGame.on(Laya.Event.CLICK, this, this.onBtnMoreGameClick),
            this.btnRecord.on(Laya.Event.CLICK, this, this.onRecordClick),
            this.missileBtn2.on(Laya.Event.CLICK, this, this.onBombClick),
            this.img_fire.on(Laya.Event.CLICK, this, this.onFireBombClick),
            Laya.stage.on(u.GAMEPAGE_HIDDLEVIDEO_BOMB, this, this.HiddleVideoToBomb),
            this.troopsMove.on(Laya.Event.CLICK, this, this.troopsMthode)
        }
        troopsMthode() {
            tt.Instance.SoldierList_Mine.length <= 0 || (1 == this.troops ? tt.Instance.SoldierList_Mine.forEach(t =>{
                t.Activate()
            }) : tt.Instance.SoldierList_Mine.forEach(t =>{
                t.isStartAtk = !1,
                t.isJoinFollow = !1,
                t.isMoveTarget = !0,
                t.isArriveGather = !1,
                t.isActiva = !1,
                t.moveMethod()
            }), this.troops = !this.troops, this.troopsMove.skin = this.troops ? "game/btn_PKattck1.png": "game/btn_PKDefense.png")
        }
        onAutoCustomAd() {}
        onBtnMoreGameClick() {}
        onUpdate() {
            if (isNaN(V.bombCountDown) && (this.missileBtn2.visible = !1), q.Instance.mainScene.isStart) {
                let a,
                s = [];
                if (q.Instance.mainScene.GetMap.enemyGatheringList.length > 0) for (let t = q.Instance.mainScene.GetMap.enemyGatheringList.length - 1; t >= 0; t--) for (let e = q.Instance.mainScene.GetMap.enemyGatheringList[t].enemyList.length - 1; e >= 0; e--) if (null != q.Instance.mainScene.GetMap.enemyGatheringList[t].enemyList[e].attackTarget && q.Instance.mainScene.GetMap.enemyGatheringList[t].enemyList[e].attackTarget.roleCamp == n.FightingUnit) {
                    s.push(q.Instance.mainScene.GetMap.enemyGatheringList[t]);
                    break
                }
                if (s.length > 0) {
                    this.arrow_attack.visible = !0,
                    s.length > 1 && s.sort((t, e) =>{
                        return Laya.Vector3.distanceSquared(q.Instance.mainScene.GetMap.playerCtl.GetPosition, t.GetPosition) < Laya.Vector3.distanceSquared(q.Instance.mainScene.GetMap.playerCtl.GetPosition, e.GetPosition) ? -1 : 1
                    }),
                    a = s[0].land;
                    let n = new Laya.Vector4;
                    q.Instance.mainScene.GetCamera.GetCamera.viewport.project(a.transform.position, q.Instance.mainScene.GetCamera.GetCamera.projectionViewMatrix, n),
                    n.x = n.x / Laya.stage.clientScaleX,
                    n.y = n.y / Laya.stage.clientScaleY,
                    n.x <= 0 || n.x >= Laya.stage.width || n.y <= 0 || n.y >= Laya.stage.height ? this.arrow_attack.visible = !0 : this.arrow_attack.visible = !1,
                    n.x <= this.arrow_attack.width / 2 ? n.x = 0 + this.arrow_attack.width / 2 : n.x >= Laya.stage.width - this.arrow_attack.width / 2 && (n.x = Laya.stage.width - this.arrow_attack.width / 2),
                    n.y <= this.arrow_attack.height / 2 ? n.y = 0 + this.arrow_attack.height / 2 : n.y >= Laya.stage.height - this.arrow_attack.height / 2 && (n.y = Laya.stage.height - this.arrow_attack.height / 2);
                    let o = new Laya.Point(n.x, n.y);
                    n.w < 0 && (o.x *= -1, o.y *= -1),
                    this.arrow_attack.pos(o.x, o.y);
                    var t = a.transform.position.x - q.Instance.mainScene.GetMap.playerCtl.GetPosition.x,
                    e = a.transform.position.z - q.Instance.mainScene.GetMap.playerCtl.GetPosition.z; (i = 180 * Math.atan2(t, e) / Math.PI) < 0 && (i += 360),
                    this.arrow_attack.getChildByName("arrow").rotation = -i
                } else this.arrow_attack.visible = !1;
                let o = new Laya.Vector3(q.Instance.mainScene.GetMap.headquartersList[0].GetPosition.x, q.Instance.mainScene.GetMap.headquartersList[0].GetPosition.y, q.Instance.mainScene.GetMap.headquartersList[0].GetPosition.z + 7),
                r = new Laya.Vector4;
                q.Instance.mainScene.GetCamera.GetCamera.viewport.project(o, q.Instance.mainScene.GetCamera.GetCamera.projectionViewMatrix, r),
                r.x = r.x / Laya.stage.clientScaleX,
                r.y = r.y / Laya.stage.clientScaleY,
                r.x <= 0 || r.x >= Laya.stage.width || r.y <= 0 || r.y >= Laya.stage.height ? this.arrow_camp.visible = !0 : this.arrow_camp.visible = !1,
                r.x <= this.arrow_attack.width / 2 ? r.x = 0 + this.arrow_attack.width / 2 : r.x >= Laya.stage.width - this.arrow_attack.width / 2 && (r.x = Laya.stage.width - this.arrow_attack.width / 2),
                r.y <= this.arrow_attack.height / 2 ? r.y = 0 + this.arrow_attack.height / 2 : r.y >= Laya.stage.height - this.arrow_attack.height / 2 && (r.y = Laya.stage.height - this.arrow_attack.height / 2);
                let h = new Laya.Point(r.x, r.y);
                r.w < 0 && (h.x *= -1, h.y *= -1),
                this.arrow_camp.pos(h.x, h.y);
                t = o.x - q.Instance.mainScene.GetMap.playerCtl.GetPosition.x,
                e = o.z - q.Instance.mainScene.GetMap.playerCtl.GetPosition.z;
                let l; (i = 180 * Math.atan2(t, e) / Math.PI) < 0 && (i += 360),
                this.arrow_camp.getChildByName("arrow").rotation = -i;
                let c = [];
                if (q.Instance.mainScene.GetMap.silverList.length > 0) for (let t = q.Instance.mainScene.GetMap.silverList.length - 1; t >= 0; t--) c.push(q.Instance.mainScene.GetMap.silverList[t]);
                if (c.length > 0) {
                    this.arrow_tag.visible = !0,
                    c.length > 1 && c.sort((t, e) =>{
                        return Laya.Vector3.distanceSquared(q.Instance.mainScene.GetMap.playerCtl.GetPosition, t.GetPosition) < Laya.Vector3.distanceSquared(q.Instance.mainScene.GetMap.playerCtl.GetPosition, e.GetPosition) ? -1 : 1
                    }),
                    l = c[0].GetMainNode;
                    let a = new Laya.Vector4;
                    q.Instance.mainScene.GetCamera.GetCamera.viewport.project(l.transform.position, q.Instance.mainScene.GetCamera.GetCamera.projectionViewMatrix, a),
                    a.x = a.x / Laya.stage.clientScaleX,
                    a.y = a.y / Laya.stage.clientScaleY,
                    a.x <= 0 || a.x >= Laya.stage.width || a.y <= 0 || a.y >= Laya.stage.height ? this.arrow_tag.visible = !0 : this.arrow_tag.visible = !1,
                    a.x <= this.arrow_tag.width / 2 ? a.x = 0 + this.arrow_tag.width / 2 : a.x >= Laya.stage.width - this.arrow_tag.width / 2 && (a.x = Laya.stage.width - this.arrow_tag.width / 2),
                    a.y <= this.arrow_tag.height / 2 ? a.y = 0 + this.arrow_tag.height / 2 : a.y >= Laya.stage.height - this.arrow_tag.height / 2 && (a.y = Laya.stage.height - this.arrow_tag.height / 2);
                    let s = new Laya.Point(a.x, a.y);
                    a.w < 0 && (s.x *= -1, s.y *= -1),
                    this.arrow_tag.pos(s.x, s.y);
                    var i;
                    t = l.transform.position.x - q.Instance.mainScene.GetMap.playerCtl.GetPosition.x,
                    e = l.transform.position.z - q.Instance.mainScene.GetMap.playerCtl.GetPosition.z; (i = 180 * Math.atan2(t, e) / Math.PI) < 0 && (i += 360),
                    this.arrow_tag.getChildByName("arrow").rotation = -i
                } else this.arrow_tag.visible = !1;
                if (Q.zs_game_share_video_switch && !this.isShowShareRecord && zs.platform.sync.getRecorderTime() >= 60 && (console.log("====录屏时间达60s自动弹分享录屏页面"), Laya.stage.once("share_recore_result", this, this.recoverGamePlay), this.isShowShareRecord = !0, q.Instance.GamePause(), zs.core.workflow.runEventConfig("event_show_share_record"), this.recordMarkTip.visible = !1), isNaN(V.bombCountDown)) this.missileBtn2.visible = !1;
                else {
                    this.missileBtn2.visible = !0;
                    let t = Math.floor(V.bombCountDown / 60),
                    e = Math.floor(V.bombCountDown % 60);
                    this.missileBtn2Level.value = (t < 10 ? "0" + t: t) + ":" + (e < 10 ? "0" + e: e)
                }
                if (!isNaN(this.fireBombGuideTimer)) if (this.totalGuideTime > 0) { (Laya.timer.currTimer - this.fireBombGuideTimer) / this.totalGuideTime >= 1 && this.hideFireGuide(!0)
                } else this.fireBombGuideTimer = NaN,
                this.fireBombTimer = Laya.timer.currTimer,
                this.totalTime = _.daodanData.flyTime;
                if (!isNaN(this.fireBombTimer)) {
                    let t = (Laya.timer.currTimer - this.fireBombTimer) / this.totalTime;
                    if (t >= 1) this.fireBombTimer = NaN,
                    this.btn_fire.visible = !1;
                    else {
                        this.fire_fg.mask = null;
                        let e = new Laya.Sprite;
                        e.pos( - 41.5, -42),
                        e.width = e.height = 300,
                        e.graphics.drawPie(150, 150, 150, 360 * t - 90, 270, "#ff0000"),
                        this.fire_fg.mask = e
                    }
                }
            }
            if (1 == V.curGameEarthLevel() && q.Instance.hintIndex < this.taskUrlList.length) {
                let t = new Laya.Vector4;
                q.Instance.mainScene.GetCamera.GetCamera.viewport.project(new Laya.Vector3(q.Instance.mainScene.GetMap.playerCtl.GetPosition.x, q.Instance.mainScene.GetMap.playerCtl.silverPoint.transform.position.y + 2 * q.Instance.mainScene.GetMap.playerCtl.box.extents.y, q.Instance.mainScene.GetMap.playerCtl.GetPosition.z), q.Instance.mainScene.GetCamera.GetCamera.projectionViewMatrix, t),
                t.x = t.x / Laya.stage.clientScaleX,
                t.y = t.y / Laya.stage.clientScaleY;
                let e = this.topUI.globalToLocal(new Laya.Point(t.x, t.y - this.task_1.height / 2));
                switch (this.task_1.pos(e.x, e.y), q.Instance.hintIndex) {
                case 0:
                    q.Instance.mainScene.GetMap.silverList.length > 0 && (this.target = q.Instance.mainScene.GetMap.silverList[0].GetMainNode);
                    break;
                case 4:
                    let t = this.SearchBarrck();
                    if (q.Instance.mainScene.GetMap.playerCtl.silverList.length >= t.levelNum - t.lastNum) return void q.Instance.AddHintShow();
                    let i = [];
                    for (let t = q.Instance.mainScene.GetMap.silverList.length - 1; t >= 0; t--) i.push(q.Instance.mainScene.GetMap.silverList[t]);
                    i.length > 0 ? (i.length > 1 && i.sort((t, e) =>{
                        return Laya.Vector3.distanceSquared(q.Instance.mainScene.GetMap.playerCtl.GetPosition, t.GetPosition) < Laya.Vector3.distanceSquared(q.Instance.mainScene.GetMap.playerCtl.GetPosition, e.GetPosition) ? -1 : 1
                    }), this.target = i[0].GetMainNode) : this.target = null
                }
                if (null == this.target || !this.target.transform) return void(q.Instance.mainScene.GetMap.playerCtl.circleObj.meshRenderer.material = q.Instance.mainScene.GetMap.circleMat.node);
                Laya.Vector3.distance(q.Instance.mainScene.GetMap.playerCtl.GetPosition, this.target.transform.position);
                let i = new Laya.Vector3(this.target.transform.position.x - q.Instance.mainScene.GetMap.playerCtl.GetPosition.x, 0, this.target.transform.position.z - q.Instance.mainScene.GetMap.playerCtl.GetPosition.z);
                Laya.Vector3.normalize(i, i),
                q.Instance.mainScene.GetMap.playerCtl.circleObj.meshRenderer.material = q.Instance.mainScene.GetMap.circleMat.guide,
                q.Instance.mainScene.GetMap.playerCtl.circleObj.transform.lookAt(new Laya.Vector3(this.target.transform.position.x, q.Instance.mainScene.GetMap.playerCtl.circleObj.transform.position.y, this.target.transform.position.z), new Laya.Vector3(0, 1, 0))
            }
            for (let t = 0; t < q.Instance.mainScene.GetMap.roleList.length; t++) {
                let e = q.Instance.mainScene.GetMap.roleList[t];
                if (null != e && this.proHpBox[t].visible) {
                    let i = new Laya.Vector4;
                    q.Instance.mainScene.GetCamera.GetCamera.viewport.project(new Laya.Vector3(e.GetPosition.x, e.GetPosition.y + 2 * e.box.extents.y, e.GetPosition.z), q.Instance.mainScene.GetCamera.GetCamera.projectionViewMatrix, i),
                    i.x = i.x / Laya.stage.clientScaleX,
                    i.y = i.y / Laya.stage.clientScaleY,
                    this.proHpBox[t].x = i.x,
                    this.proHpBox[t].y = i.y
                }
            }
            q.Instance.isRage && this.UpdateRage(),
            this.UpdatePro()
        }
        hideFireGuide(t = !1) {
            if (this.fireTIps.visible && (this.guideAni.stop(), this.guide.visible = !1, this.fireTIps.visible = !1, this.showFireBtn(), t = !0), t) {
                let t = 0;
                isNaN(this.fireBombGuideTimer) || (t = this.totalGuideTime - (Laya.timer.currTimer - this.fireBombGuideTimer)),
                this.fireBombGuideTimer = NaN,
                this.fireBombTimer = Laya.timer.currTimer,
                this.totalTime = _.daodanData.flyTime + (t > 0 ? t: 0)
            }
        }
        showFireBtn() {
            let t = this.owner.fire_in;
            t.play(0, !1),
            t.on(Laya.Event.COMPLETE, this, () =>{
                this.btn_fire.visible = !0
            })
        }
        HiddleVideoToBomb(t, e, i) {
            this.maxroleBtn.visible = t,
            this.maxbarracksBtn.visible = t,
            this.airshipBtn.visible = t,
            V.gmUI && (this.maxroleBtn.visible = !1, this.maxbarracksBtn.visible = !1, this.airshipBtn.visible = !1),
            t || (this.guide.visible = !0, this.guideAni.play(0, !0), this.fireTIps.visible = !0, this.fireBombTimer = NaN, this.fireBombGuideTimer = Laya.timer.currTimer, this.totalGuideTime = i)
        }
        AllHit(t) {
            console.log(" 11111 "),
            this.attacKBtn.scale(1, 1),
            this.attacKBtn.visible = !0,
            this.btnLoopAni.stop(),
            this.btnOutAni.offAll(Laya.Event.COMPLETE),
            this.btnOutAni.stop(),
            this.btnInAni.offAll(Laya.Event.COMPLETE),
            this.btnInAni.play(0, !1),
            this.btnInAni.once(Laya.Event.COMPLETE, this, this.btnLoopAnimation),
            this.attacKBtn.once(Laya.Event.CLICK, this, this.HitClick, [t])
        }
        btnLoopAnimation() {
            this.btnLoopAni.play(0, !0)
        }
        HideHit() {
            this.attacKBtn.visible && (this.btnInAni.offAll(Laya.Event.COMPLETE), this.btnInAni.stop(), this.btnLoopAni.stop(), this.btnOutAni.offAll(Laya.Event.COMPLETE), this.btnOutAni.play(0, !1), this.btnOutAni.once(Laya.Event.COMPLETE, this, () =>{
                this.attacKBtn.visible = !1
            }), this.attacKBtn.off(Laya.Event.CLICK, this, this.HitClick))
        }
        HitClick(t) {
            U.Instance.StopEffectAudio("quanjunchuji"),
            U.Instance.PlayEffectAudio("quanjunchuji"),
            this.HideHit(),
            this.attackAniBox.visible = !0,
            this.attackAni.offAll(Laya.Event.COMPLETE),
            this.attackAni.play(0, !1),
            this.attackAni.once(Laya.Event.COMPLETE, this, () =>{
                this.attackAniBox.visible = !1
            }),
            t.DispatchTroops()
        }
        HideGuide() {
            q.Instance.isGuide = !1,
            this.guideAni.stop(),
            this.guide.visible = !1
        }
        BuffIcon(t) {
            let e = j.BuffIconPrefab.create();
            this.owner.addChild(e),
            e.addComponent(Z).SetTarget = t
        }
        UpdateRage() {}
        UpdatePro() {
            let t = q.Instance.mainScene.GetMap.holeSoldList(0),
            e = q.Instance.mainScene.GetMap.holeSoldList( - 1),
            i = q.Instance.mainScene.GetMap.holeSoldList(1),
            a = t + e + i,
            s = 256 * t / a,
            n = 256 * e / a,
            o = 256 * i / a;
            this.fgBlue.width = s,
            this.fgGreen.x = this.fgBlue.x + s,
            this.fgGreen.width = n,
            this.fgRed.x = this.fgGreen.x + n,
            this.fgRed.width = o
        }
        GetSilver(t) {
            let e = new Laya.Image("game/icon_Tag1.png");
            e.anchorX = .5,
            e.anchorY = .5,
            this.owner.addChild(e),
            e.pos(t.x, t.y),
            e.scale(2, 2);
            let i = this.dem.localToGlobal(new Laya.Point(this.demIcon.x, this.demIcon.y));
            Laya.Tween.to(e, {
                x: i.x,
                y: i.y,
                scaleX: .8,
                scaleY: .8
            },
            1200, null, Laya.Handler.create(this, t =>{
                V.GoldAdd(1),
                this.UpdateGoldMingPai(),
                t.destroy()
            },
            [e]))
        }
        AddMingPai() {
            if (!q.Instance.mainScene.GetMap.playerCtl || 0 == q.Instance.hintIndex) return;
            let t = new Laya.Image(this.addMingPaiUrl);
            this.view.addChild(t);
            let e = new Laya.Vector4;
            q.Instance.mainScene.GetCamera.GetCamera.viewport.project(new Laya.Vector3(q.Instance.mainScene.GetMap.playerCtl.GetPosition.x, q.Instance.mainScene.GetMap.playerCtl.silverPoint.transform.position.y + q.Instance.mainScene.GetMap.playerCtl.box.extents.y, q.Instance.mainScene.GetMap.playerCtl.GetPosition.z), q.Instance.mainScene.GetCamera.GetCamera.projectionViewMatrix, e),
            e.x = e.x / Laya.stage.clientScaleX,
            e.y = e.y / Laya.stage.clientScaleY,
            t.pos(e.x, e.y),
            Laya.Tween.to(t, {
                y: t.y - 150,
                alpha: .2
            },
            500, Laya.Ease.linearNone, Laya.Handler.create(this, t =>{
                t.destroy()
            },
            [t]))
        }
        UpdateMingPai() {
            this.demNum.value = q.Instance.mainScene.GetMap.playerCtl.silverList.length.toString()
        }
        UpdateGoldMingPai() {
            this.gold.value = V.gold.toString()
        }
        UpdateEnemy() {}
        UpdatePlayer() {}
        UpdateHp(t) {
            for (let e = 0; e < q.Instance.mainScene.GetMap.roleList.length; e++) {
                const i = q.Instance.mainScene.GetMap.roleList[e];
                if (null != i && i.id == t) {
                    let t = 0;
                    i.hp > 0 && (t = i.hp / i.maxHp),
                    (t *= this.fgHpWidth) > this.fgHpWidth ? t = this.fgHpWidth: t <= 0 && (t = 1),
                    this.hpfg[e].visible = !(t <= 1),
                    this.hpfg[e].width = t,
                    this.proHpBox[e].visible = !0,
                    this.proHpBox[e].timer.clearAll(this),
                    this.proHpBox[e].timer.once(3e3, this, t =>{
                        this.proHpBox[t].visible = !1
                    },
                    [e]);
                    break
                }
            }
        }
        ShowTouch(t = 0) {
            t ? this.touchImg.visible = !1 : this.touchImg.visible ? this.touchImg.visible = !1 : (this.touchImg.visible = !0, this.touchImg.pos(Laya.stage.mouseX, Laya.stage.mouseY)),
            this.touch.pos(this.touchImg.width / 2, this.touchImg.height / 2)
        }
        UpdateTouch(t) {
            let e = this.touchImg.width / 2;
            var i = Laya.stage.mouseX - this.touchImg.x,
            a = Laya.stage.mouseY - this.touchImg.y;
            t < 0 && (t += 360);
            var s = Math.PI / 180 * t,
            n = 0,
            o = 0;
            Math.abs(i) >= e || Math.abs(a) >= e ? (n = Math.sin(s) * e + e / 2 + this.touch.width / 2, o = Math.cos(s) * e + e / 2 + this.touch.height / 2) : (n = i + e, o = a + e),
            this.touch.pos(n, o)
        }
        ChangeHint(t) {
            switch (t) {
            case 0:
                this.task_1.skin != this.changeTask && (this.task_1.skin = this.changeTask);
                break;
            case 1:
                this.task_1.skin != this.taskUrlList[q.Instance.hintIndex] && (this.task_1.skin = this.taskUrlList[q.Instance.hintIndex])
            }
        }
        ShowHint(t) {
            this.troopsMove.visible = !0,
            V.gmUI || (this.maxbarracksBtn.visible || (this.maxbarracksBtn.on(Laya.Event.CLICK, this, this.MaxBarrackClick), this.maxbarracksBtn.visible = !0), this.maxroleBtn.visible || (this.maxroleBtn.on(Laya.Event.CLICK, this, this.MaxRoleClick), this.maxroleBtn.visible = !0), !this.airshipBtn.visible && V.curGameEarthLevel() > 1 && (this.airshipBtn.on(Laya.Event.CLICK, this, this.onAirshipClick), this.airshipBtn.visible = !0))
        }
        moveRight() {}
        MaxBarrackClick() {
            q.Instance.mainScene.GetMap.playerCtl.GetIsMaxBarrack ? H.Instance.ShowTips(window.lang.barracksMax) : (this.view.mouseEnabled = !1, J.ClickBtnTweenTo(this.maxbarracksBtn, .8, 1, this, () =>{
                V.curGameLevel() <= V.trackEventLevelMax && u.trackEvent((V.starState == d.earth ? "": "月球") + "关卡" + V.curGameLevel() + "观看满级Barracks视频"),
                u.trackEvent("观看满级Barracks视频"),
                q.Instance.GamePause(),
                zs.platform.async.playVideo().then(t =>{
                    t ? (V.curGameLevel() <= V.trackEventLevelMax && u.trackEvent((V.starState == d.earth ? "": "月球") + "关卡" + V.curGameLevel() + "观看满级Barracks视频成功"), u.trackEvent("观看满级Barracks视频成功"), q.Instance.mainScene.GetMap.playerCtl.BattleVideoMaxLevelBarrack(), this.view.mouseEnabled = !0, q.Instance.GameRegain()) : (V.curGameLevel() <= V.trackEventLevelMax && u.trackEvent((V.starState == d.earth ? "": "月球") + "关卡" + V.curGameLevel() + "观看满级Barracks视频失败"), u.trackEvent("观看满级Barracks视频失败"), H.Instance.ShowTips(window.lang.watchVideoTip), this.view.mouseEnabled = !0, q.Instance.GameRegain())
                }).
                catch(() =>{
                    u.trackEvent("无观看视频资源"),
                    H.Instance.ShowTips(window.lang.noVideoTip),
                    this.view.mouseEnabled = !0,
                    q.Instance.GameRegain()
                })
            }))
        }
        MaxRoleClick() {
            q.Instance.mainScene.GetMap.playerCtl.GetIsMaxLevel ? H.Instance.ShowTips(window.lang.commanderMax) : (this.view.mouseEnabled = !1, J.ClickBtnTweenTo(this.maxroleBtn, .8, 1, this, () =>{
                V.curGameLevel() <= V.trackEventLevelMax && u.trackEvent((V.starState == d.earth ? "": "月球") + "关卡" + V.curGameLevel() + "观看满级军长视频"),
                u.trackEvent("观看满级军长视频"),
                q.Instance.GamePause(),
                zs.platform.async.playVideo().then(t =>{
                    t ? (V.curGameLevel() <= V.trackEventLevelMax && u.trackEvent((V.starState == d.earth ? "": "月球") + "关卡" + V.curGameLevel() + "观看满级军长视频成功"), u.trackEvent("观看满级军长视频成功"), q.Instance.mainScene.GetMap.playerCtl.BattleVideoMaxRole(), this.view.mouseEnabled = !0, q.Instance.GameRegain()) : (V.curGameLevel() <= V.trackEventLevelMax && u.trackEvent((V.starState == d.earth ? "": "月球") + "关卡" + V.curGameLevel() + "观看满级军长视频失败"), u.trackEvent("观看满级军长视频失败"), H.Instance.ShowTips(window.lang.watchVideoTip), this.view.mouseEnabled = !0, q.Instance.GameRegain())
                }).
                catch(() =>{
                    u.trackEvent("无观看视频资源"),
                    H.Instance.ShowTips(window.lang.noVideoTip),
                    this.view.mouseEnabled = !0,
                    q.Instance.GameRegain()
                })
            }))
        }
        RageClick() {}
        Rage() {
            this.view.mouseEnabled = !0,
            this.rageAni.play(0, !1),
            q.Instance.mainScene.GetMap.playerCtl.baozou(),
            this.rageAni.once(Laya.Event.COMPLETE, this, () =>{})
        }
        TouchDown() {
            Laya.stage.event(u.TOUCH_DOWN),
            this.hideFireGuide()
        }
        TouchMove() {
            Laya.stage.event(u.TOUCH_MOVE)
        }
        TouchUp(t) {
            Laya.stage.event(u.TOUCH_UP)
        }
        ShowTips(t) {
            this.tips.skin = t,
            this.tips.visible = !0,
            this.tipsAni.play(0, !1),
            this.tipsAni.off(Laya.Event.COMPLETE, this, this.HideTips),
            this.tipsAni.once(Laya.Event.COMPLETE, this, this.HideTips)
        }
        HideTips() {
            this.tips.visible = !1
        }
        SearchBarrck() {
            let t = [];
            return q.Instance.mainScene.GetMap.headquartersList.forEach(e =>{
                e.dispatchTroopsCtlList.forEach(e =>{
                    e.barrackList.forEach(e =>{
                        e.isUnlock && t.push(e)
                    })
                })
            }),
            t.length > 1 && t.sort((t, e) =>t.levelNum - t.lastNum < e.levelNum - e.lastNum ? -1 : 1),
            t[0]
        }
        addAutoVideoTrigger() {
            if (Q.zs_switch && Q.zs_native_gap_time > 0) {
                let t = 1e3 * Q.zs_native_gap_time;
                Laya.timer.once(t, this, this.onAutoVideoTime)
            }
        }
        removeAutoVideoTrigger() {
            Laya.timer.clear(this, this.onAutoVideoTime)
        }
        onAutoVideoTime() {
            if (q.Instance.mainScene.isStart) {
                q.Instance.GamePause(),
                zs.platform.sync.recorderPause(),
                this.removeAutoVideoTrigger();
                let t = this;
                zs.platform.async.playVideo().then(e =>{
                    t.addAutoVideoTrigger(),
                    q.Instance.GameRegain(),
                    zs.platform.sync.recorderResume()
                }).
                catch(() =>{
                    q.Instance.GameRegain(),
                    t.addAutoVideoTrigger(),
                    zs.platform.sync.recorderResume()
                })
            }
        }
        onRecordClick() {
            if (zs.platform.sync.getRecorderTime() > 15) {
                console.log("直接分享视频"),
                this.recordMarkTip.visible = !1;
                let t = this;
                zs.platform.sync.recorderStop({
                    callback: () =>{
                        q.Instance.GamePause(),
                        zs.platform.async.shareRecorderVideo().then(() =>{
                            zs.platform.sync.showToast("分享录屏成功！"),
                            zs.platform.sync.recorderStart({
                                maxTime: Q.zs_best_videotape_time / 1e3
                            }),
                            t.recordMarkTip.visible = !0,
                            q.Instance.GameRegain()
                        }).
                        catch(() =>{
                            zs.platform.sync.showToast("分享录屏失败！"),
                            zs.platform.sync.recorderStart({
                                maxTime: Q.zs_best_videotape_time / 1e3
                            }),
                            t.recordMarkTip.visible = !0,
                            q.Instance.GameRegain()
                        })
                    }
                })
            } else zs.platform.sync.showToast("录屏时间太短！")
        }
        recoverGamePlay(t) {
            console.log("录屏页关闭回调===》", t),
            t || (this.isShowShareRecord = !1, zs.platform.sync.recorderStart({
                maxTime: Q.zs_best_videotape_time / 1e3
            }), this.recordMarkTip.visible = !0),
            q.Instance.GameRegain()
        }
        onBombClick(t) {
            H.isOpenLaunchPage || this.click() || (this.HideHit(), H.isOpenLaunchPage = !0, H.Instance.OpenView(H.Instance.launchUrl, !1, {
                handler: Laya.Handler.create(this, this.clickFalse)
            }))
        }
        onAirshipClick(t) {
            q.Instance.mainScene.GetMap.playerCtl.GetIsAirship ? H.Instance.ShowTips(window.lang.jetTip) : (this.view.mouseEnabled = !1, J.ClickBtnTweenTo(this.airshipBtn, .8, 1, this, () =>{
                u.trackEvent("观看超级战舰视频"),
                q.Instance.GamePause(),
                zs.platform.async.playVideo().then(t =>{
                    t ? (u.trackEvent("观看超级战舰视频成功"), q.Instance.mainScene.GetMap.callAirShip(), this.view.mouseEnabled = !0, q.Instance.GameRegain()) : (u.trackEvent("观看满级Barracks视频失败"), H.Instance.ShowTips(window.lang.watchVideoTip2), this.view.mouseEnabled = !0, q.Instance.GameRegain())
                }).
                catch(() =>{
                    u.trackEvent("无观看视频资源"),
                    H.Instance.ShowTips(window.lang.noVideoTip),
                    this.view.mouseEnabled = !0,
                    q.Instance.GameRegain()
                })
            }))
        }
        onFireBombClick(t) {
            this.view.mouseEnabled = !1,
            J.ClickBtnTweenTo(this.btn_fire, .8, 1, this, () =>{
                this.fireBombGuideTimer = NaN,
                this.fireBombTimer = NaN,
                this.view.mouseEnabled = !0,
                this.btn_fire.visible = !1,
                Laya.stage.event(u.GAMEPAGE_FIREBOMB_BUTTON)
            })
        }
    }
    class it extends g {
        constructor() {
            super(...arguments),
            this.index = null
        }
        onAwake() {
            super.onAwake();
            let t = this.owner.getChildByName("middleUI");
            this.closeBtn = t.getChildByName("reliveBox").getChildByName("btn_close"),
            this.box1 = t.getChildByName("1"),
            this.box2 = t.getChildByName("2"),
            this.input = this.box1.getChildByName("input"),
            this.enterBtn = this.box1.getChildByName("btn_get"),
            this.exchangeBtn = this.box2.getChildByName("btn_1"),
            this.videoBtn = this.box2.getChildByName("btn_2"),
            this.bonus1 = this.exchangeBtn.getChildByName("level"),
            this.bonus2 = this.videoBtn.getChildByName("level"),
            this.input.text = "",
            this.box1.visible = !0,
            this.box2.visible = !1,
            this.closeBtn.on(Laya.Event.CLICK, this, this.CloseClick),
            this.enterBtn.on(Laya.Event.CLICK, this, this.EnterClick),
            this.exchangeBtn.on(Laya.Event.CLICK, this, this.ExchangeClick),
            this.videoBtn.on(Laya.Event.CLICK, this, this.VideoClick)
        }
        SetParameter(t) {
            super.SetParameter(t),
            this.handler = t.handler
        }
        CloseEvent() {
            this.closeBtn.off(Laya.Event.CLICK, this, this.CloseClick),
            this.enterBtn.off(Laya.Event.CLICK, this, this.EnterClick),
            this.exchangeBtn.off(Laya.Event.CLICK, this, this.ExchangeClick),
            this.videoBtn.off(Laya.Event.CLICK, this, this.VideoClick)
        }
        CloseClick() {
            this.view.mouseEnabled = !1,
            J.ClickBtnTweenTo(this.closeBtn, .8, 1, this, () =>{
                this.exit()
            })
        }
        EnterClick() {
            this.view.mouseEnabled = !1,
            J.ClickBtnTweenTo(this.enterBtn, .8, 1, this, () =>{
                this.view.mouseEnabled = !0,
                !p.GetLocalJson(this.input.text, !1) && this.input.text && this.judgeText() ? (this.index >= _.daodanData.giftMinPaiNum.length && (this.index = 0), this.bonus1.value = "+" + parseInt(_.daodanData.giftMinPaiNum[this.index]), this.bonus2.value = "+" + 2 * parseInt(_.daodanData.giftMinPaiNum[this.index]), this.box1.visible = !1, this.box2.visible = !0) : H.Instance.ShowTips("请关注官方抖音号获取最新兑换码")
            })
        }
        judgeText() {
            let t = _.daodanData.giftCode.length;
            for (let e = 0; e < t; e++) {
                if (_.daodanData.giftCode[e] == this.input.text) return this.index = e,
                !0;
                if (e + 1 == t) return ! 1
            }
        }
        ExchangeClick() {
            this.view.mouseEnabled = !1,
            J.ClickBtnTweenTo(this.enterBtn, .8, 1, this, () =>{
                this.duihuan(1)
            })
        }
        VideoClick() {
            this.view.mouseEnabled = !1,
            J.ClickBtnTweenTo(this.enterBtn, .8, 1, this, () =>{
                zs.platform.async.playVideo().then(t =>{
                    t ? (u.trackEvent("观看礼包视频成功"), this.duihuan(2)) : (u.trackEvent("观看礼包视频失败"), this.view.mouseEnabled = !0)
                }).
                catch(() =>{
                    u.trackEvent("无观看视频资源"),
                    this.view.mouseEnabled = !0
                })
            })
        }
        exit() {
            this.handler && this.handler.run(),
            this.handler = null,
            H.Instance.HideView(H.Instance.giftCodeUrl)
        }
        duihuan(t = 1) {
            p.SetLocalJson(this.input.text, !0),
            V.GoldAdd(parseInt(_.daodanData.giftMinPaiNum[this.index]) * t),
            H.Instance.ShowTips(window.lang.getXbadges.replace("{x}", "x"+(parseInt(_.daodanData.giftMinPaiNum[this.index]) * t))),
            this.exit()
        }
    }
    class at extends g {
        constructor() {
            super(...arguments),
            this.showGMNumber = 0
        }
        Open() {
            let t = V.curGameEarthLevel();
            this.topUI = this.owner.getChildByName("top"),
            this.topLeft = this.topUI.getChildByName("left"),
            this.topRight = this.topUI.getChildByName("right"),
            this.middleUI = this.owner.getChildByName("middle"),
            this.bottomUI = this.owner.getChildByName("bottom"),
            this.lv_stage = this.topUI.getChildByName("lv_stage"),
            this.level = this.lv_stage.getChildByName("level"),
            this.btn_setting = this.topLeft.getChildByName("btn_setting"),
            this.btnMoreGame = this.middleUI.getChildByName("btnMoreGame"),
            this.level.value = t.toString(),
            this.attentionBtn = this.topLeft.getChildByName("attentionBtn");
            let e = zs.product.get("zs_seek_attention");
            zs.platform.sync.getInfo() && "Douyin" == zs.platform.sync.getInfo().appName ? this.attentionBtn.visible = !!e: this.attentionBtn.visible = !1,
            this.addShortCutBtn = this.topLeft.getChildByName("addShortCutBtn"),
            // zs.platform.async.checkShortcut().then(t =>{
            //     this.addShortCutBtn.visible = !t,
            //     zs.product.get("zs_add_a_home_page") || (this.addShortCutBtn.visible = !1)
            // }).
            // catch(() =>{
            //     this.addShortCutBtn.visible = !1
            // }),
            this.btnSelect = this.topLeft.getChildByName("btnSelect"),
            this.btnSelect.visible = V.isDaren,
            this.addLevelBtn = this.topRight.getChildByName("addLevelBtn"),
            this.lv = this.addLevelBtn.getChildByName("lv"),
            this.lv_max = this.addLevelBtn.getChildByName("lv_max"),
            this.num = this.addLevelBtn.getChildByName("num"),
            this.icon = this.addLevelBtn.getChildByName("icon"),
            this.str = this.addLevelBtn.getChildByName("str"),
            this.dem = this.topLeft.getChildByName("dem1"),
            this.gold = this.dem.getChildByName("level"),
            this.startBtn = this.bottomUI.getChildByName("stageBtn"),
            this.btn_battle = this.bottomUI.getChildByName("pkBtn"),
            this.modleStage = this.owner.getChildByName("ModleStage"),
            this.closeModleStage = this.modleStage.getChildByName("btn_back"),
            this.btn_univberse = this.modleStage.getChildByName("btn_list").getChildByName("btn_outspace"),
            this.moonLevel = this.btn_univberse.getChildByName("moonLevel"),
            this.earthBtn = this.modleStage.getChildByName("btn_list").getChildByName("btn_earth"),
            this.guideStart = this.bottomUI.getChildByName("guideStart"),
            this.earthLevel = this.earthBtn.getChildByName("earthLevel"),
            this.modleStage.visible = !1,
            this.earthLevel.text = window.lang.lvX.replace("{x}", V.curGameEarthLevel()),
            this.moonLevel.text = window.lang.lvX.replace("{x}", V.curGameMoonLevel());
            let i = this.btn_univberse.getChildByName("video");
            i.visible = !1,
            t >= 11 || V.isDaren ? i.visible = !1 : t < 11 && t >= 6 && (i.visible = !0),
            this.UpdateShowGrade(),
            this.btnMoreGame.visible = !1,
            this.getGMBox(),
            this.startToStrengthenBtn = this.topRight.getChildByName("videoStart"),
            this.startToStrengthenUnlock = this.startToStrengthenBtn.getChildByName("unlock"),
            this.startToStrengthenCountDown = this.startToStrengthenBtn.getChildByName("time"),
            this.startToStrengthenBtn.on(Laya.Event.CLICK, this, this.onStartToStrengthenClick),
            this.startToStrengthenUnlock.visible = !V.startToStrengthen,
            this.startToStrengthenCountDown.visible = V.startToStrengthen,
            this.startToStrengthenBtn.disabled = V.startToStrengthen,
            this.giftCodeBtn = this.topLeft.getChildByName("giftCode"),
            this.giftCodeBtn.on(Laya.Event.CLICK, this, this.onGiftCodeClick),
            this.cloud = this.middleUI.getChildByName("cloud"),
            this.cloud.visible = !1,
            this.guideStart.visible = !1,
            this.startBtn.visible = !0
        }
        onStart() {}
        Hide() {}
        onDisable() {}
        CloseEvent() {
            this.startBtn.off(Laya.Event.CLICK, this, this.StageClick),
            this.earthBtn.off(Laya.Event.CLICK, this, this.StartClick),
            this.guideStart.off(Laya.Event.CLICK, this, this.StartClick),
            this.closeModleStage.off(Laya.Event.CLICK, this, this.closeModleStageClick),
            this.addLevelBtn.off(Laya.Event.CLICK, this, this.AddGrabClick),
            this.btnMoreGame.off(Laya.Event.CLICK, this, this.onBtnMoreGameClick),
            this.btn_setting.off(Laya.Event.CLICK, this, this.onSetClick),
            Laya.stage.off(u.UPDATE_GOLD, this, this.UpdateShowGrade),
            this.btnSelect.off(Laya.Event.CLICK, this, this.onSelectLevelClick),
            this.attentionBtn.off(Laya.Event.CLICK, this, this.attentionClick),
            this.startToStrengthenBtn.off(Laya.Event.CLICK, this, this.onStartToStrengthenClick),
            this.giftCodeBtn.off(Laya.Event.CLICK, this, this.onGiftCodeClick),
            this.addShortCutBtn.off(Laya.Event.CLICK, this, this.onAddShortCut),
            this.btn_univberse.off(Laya.Event.CLICK, this, this.onUnivberseClick),
            this.btn_battle.off(Laya.Event.CLICK, this, this.BattleModel)
        }
        OpenEvent() {
            this.startBtn.on(Laya.Event.CLICK, this, this.StageClick),
            this.earthBtn.on(Laya.Event.CLICK, this, this.StartClick),
            this.guideStart.on(Laya.Event.CLICK, this, this.StartClick),
            this.closeModleStage.on(Laya.Event.CLICK, this, this.closeModleStageClick),
            this.addLevelBtn.on(Laya.Event.CLICK, this, this.AddGrabClick),
            this.btnMoreGame.on(Laya.Event.CLICK, this, this.onBtnMoreGameClick),
            this.btn_setting.on(Laya.Event.CLICK, this, this.onSetClick),
            Laya.stage.on(u.UPDATE_GOLD, this, this.UpdateShowGrade),
            this.btnSelect.on(Laya.Event.CLICK, this, this.onSelectLevelClick),
            this.attentionBtn.on(Laya.Event.CLICK, this, this.attentionClick),
            this.addShortCutBtn.on(Laya.Event.CLICK, this, this.onAddShortCut),
            this.btn_univberse.on(Laya.Event.CLICK, this, this.onUnivberseClick),
            this.btn_battle.on(Laya.Event.CLICK, this, this.BattleModel)
        }
        UpdateShowGrade() {
            this.gold.value = V.gold.toString(),
            this.lv.text = "Lv." + V.grade.grade,
            this.lv.visible = !V.IsGrabeMax,
            this.num.visible = !V.IsGrabeMax,
            this.icon.visible = !V.IsGrabeMax,
            this.str.visible = !V.IsGrabeMax,
            this.lv_max.visible = V.IsGrabeMax,
            this.num.visible && (this.num.text = _.gradeData[V.grade.grade - 1].gold.toString())
        }
        StageClick() {
            1 != V.curGameEarthLevel() ? (this.modleStage.visible = !0, this.modleStage.scale(0, 0), Laya.Tween.to(this.modleStage, {
                scaleX: 1,
                scaleY: 1
            },
            300), Laya.Tween.to(this.topLeft, {
                left: -200
            },
            300), Laya.Tween.to(this.topRight, {
                right: -200
            },
            300)) : this.StartClick(null)
        }
        closeModleStageClick() {
            this.modleStage.visible = !1,
            Laya.Tween.to(this.topLeft, {
                left: 0
            },
            300),
            Laya.Tween.to(this.topRight, {
                right: 0
            },
            300)
        }
        StartClick(t) {
            j.loadResing ? H.Instance.ShowTips(window.lang.loadingRes) : (this.modleStage.visible = !1, this.view.mouseEnabled = !1, null == t ? this.PageOut(m.startGame) : J.ClickBtnTweenTo(t.target, .8, 1, this, () =>{
                this.PageOut(m.startGame)
            }))
        }
        StartLoadResources(t) {
            let e = this.loadResoucreEarth();
            e.length > 0 ? H.Instance.OpenView(H.Instance.gameLoadingUrl, !0, {
                res: e,
                state: t
            }) : (q.Instance.gameModle = t, t == m.selectGame && Laya.stage.event(u.GAME_CHANGE_LEVEL), this.StartNext())
        }
        onSelectLevelClick() {
            this.view.mouseEnabled = !1,
            H.Instance.OpenView(H.Instance.selectLevelUrl, !1, {
                closeHandler: Laya.Handler.create(this, () =>{
                    this.view.mouseEnabled = !0
                }),
                nextEarthHandler: Laya.Handler.create(this, this.PageOut, [m.selectGame]),
                nextMoonHandler: Laya.Handler.create(this, this.PageOutMoon)
            })
        }
        AddGrabClick() {
            V.IsGrabeMax ? H.Instance.ShowTips(window.lang.reachMaxLv) : V.gold < _.gradeData[V.grade.grade - 1].gold ? (H.leofType = L.GoldenBadge, H.Instance.OpenView(H.Instance.leckOfUrl, !1)) : (V.GoldAdd( - _.gradeData[V.grade.grade - 1].gold), V.GradeAdd(1), q.Instance.UpdatePlayerBuff(), this.UpdateShowGrade())
        }
        onBtnMoreGameClick() {
            zs.platform.async.showMoreGamesModalSimple().then(t =>{
                zs.log.debug("是否跳转了其它小游戏", t)
            }).
            catch(() =>{
                zs.log.debug("跳转了其它小游戏失败")
            })
        }
        onSetClick() {
            this.view.mouseEnabled = !1,
            H.Instance.OpenView(H.Instance.setUrl, !1, {
                handler: Laya.Handler.create(this, () =>{
                    this.view.mouseEnabled = !0
                })
            })
        }
        getGMBox() {
            if (V.isDaren) {
                if (this.attentionBtn.visible = !1, this.gmBox) {
                    this.gmBox.visible = !1,
                    V.isGMModel = !0,
                    this.a1 = this.gmBox.getChildByName("1").getChildByName("texInput"),
                    this.a2 = this.gmBox.getChildByName("2").getChildByName("texInput"),
                    this.a2_1 = this.gmBox.getChildByName("2-1").getChildByName("texInput"),
                    this.a3 = this.gmBox.getChildByName("3").getChildByName("texInput"),
                    this.a3_1 = this.gmBox.getChildByName("3-1").getChildByName("texInput"),
                    this.a3_2 = this.gmBox.getChildByName("3-2").getChildByName("texInput"),
                    this.a4 = this.gmBox.getChildByName("4").getChildByName("texInput"),
                    this.a6_1 = this.gmBox.getChildByName("6-1").getChildByName("texInput"),
                    this.a6_2 = this.gmBox.getChildByName("6-2").getChildByName("texInput"),
                    this.a16_1 = this.gmBox.getChildByName("16-1").getChildByName("texInput"),
                    this.a16_2 = this.gmBox.getChildByName("16-2").getChildByName("texInput"),
                    this.a17_1 = this.gmBox.getChildByName("17-1").getChildByName("texInput"),
                    this.a17_2 = this.gmBox.getChildByName("17-2").getChildByName("texInput"),
                    this.a14 = this.gmBox.getChildByName("14").getChildByName("texInput"),
                    this.a14_1 = this.gmBox.getChildByName("14-1").getChildByName("texInput"),
                    this.a14_2 = this.gmBox.getChildByName("14-2").getChildByName("texInput"),
                    this.a11 = this.gmBox.getChildByName("11").getChildByName("texInput"),
                    this.a12 = this.gmBox.getChildByName("12").getChildByName("texInput"),
                    this.a9 = this.gmBox.getChildByName("9").getChildByName("texInput"),
                    this.a15 = this.gmBox.getChildByName("15").getChildByName("texInput"),
                    this.a18_1 = this.gmBox.getChildByName("18-1").getChildByName("texInput"),
                    this.a18_2 = this.gmBox.getChildByName("18-2").getChildByName("texInput"),
                    this.a19_1 = this.gmBox.getChildByName("19-1").getChildByName("texInput"),
                    this.a19_2 = this.gmBox.getChildByName("19-2").getChildByName("texInput"),
                    this.a20_1 = this.gmBox.getChildByName("20-1").getChildByName("texInput"),
                    this.a20_2 = this.gmBox.getChildByName("20-2").getChildByName("texInput"),
                    this.a21 = this.gmBox.getChildByName("21").getChildByName("texInput"),
                    this.a21_1 = this.gmBox.getChildByName("21-1").getChildByName("texInput"),
                    this.a21_2 = this.gmBox.getChildByName("21-2").getChildByName("texInput"),
                    this.a10 = this.gmBox.getChildByName("10").getChildByName("texInput"),
                    this.a13 = this.gmBox.getChildByName("13").getChildByName("gou"),
                    this.a13bg = this.gmBox.getChildByName("13").getChildByName("goubg"),
                    this.a13bg.on(Laya.Event.CLICK, this, this.gouClick),
                    this.a13.visible = V.gmUI,
                    this.gouTime = Laya.timer.currTimer,
                    this.huanyuan = this.gmBox.getChildByName("huanyuan"),
                    this.huanyuan.on(Laya.Event.CLICK, this, this.huanyuanClick),
                    this.baocun = this.gmBox.getChildByName("baocun"),
                    this.baocun.on(Laya.Event.CLICK, this, this.baocunClick),
                    this.guanbi = this.gmBox.getChildByName("guanbi"),
                    this.guanbi.on(Laya.Event.CLICK, this, this.guanbiClick);
                    for (let t = 0; t < _.leveDataCfg.length; t++) _.leveDataCfg[t].mingpai_start_amount = "14,18,25,23,20,0,0";
                    let t = window.ystorageExt.getJSON("GMDATA:");
                    null != t && null != t && "NaN" != t && "" != t ? (this.a1.text = JSON.parse(t.junzhang_atk), this.a2.text = JSON.parse(t.role_speed1), this.a2_1.text = JSON.parse(t.role_speed2), this.a3.text = JSON.parse(t.role_HP1), this.a3_1.text = JSON.parse(t.role_HP2), this.a3_2.text = JSON.parse(t.role_HP3), V.chubingSpeed = JSON.parse(t.chubingSpeed), V.barrackValueSpeedList = [17 / V.chubingSpeed, 17 / (.005 * V.chubingSpeed / .008), 17 / (.005 * V.chubingSpeed / .01)], this.a4.text = "" + V.chubingSpeed, this.a6_1.text = JSON.parse(t.AI1_atk), this.a6_2.text = JSON.parse(t.AI1_HP), this.a16_1.text = JSON.parse(t.AI3_atk), this.a16_2.text = JSON.parse(t.AI3_HP), this.a17_1.text = JSON.parse(t.AI5_atk), this.a17_2.text = JSON.parse(t.AI5_HP), this.a14.text = JSON.parse(t.tank_speed), this.a14_1.text = JSON.parse(t.tank_atk), this.a14_2.text = JSON.parse(t.tank_HP), V.kongtouCOunt = JSON.parse(t.kongtouCOunt), this.a11.text = "" + V.kongtouCOunt, V.kongtouNumber = JSON.parse(t.kongtouNumber), this.a12.text = "" + V.kongtouNumber, this.a9.text = JSON.parse(t.mingpai_start_amount), this.a15.text = JSON.parse(t.AI_speed), this.a18_1.text = JSON.parse(t.AI2_atk), this.a18_2.text = JSON.parse(t.AI2_HP), this.a19_1.text = JSON.parse(t.AI4_atk), this.a19_2.text = JSON.parse(t.AI4_HP), null != t.gmMoonLevel && null != t.gmMoonLevel && (V.gmMoonLevel = JSON.parse(t.gmMoonLevel)), this.a20_1.text = "" + V.gmMoonLevel, null != t.gmEarthLevel && null != t.gmEarthLevel && (V.gmEarthLevel = JSON.parse(t.gmEarthLevel)), this.a20_2.text = "" + V.gmEarthLevel, this.a21.text = JSON.parse(t.tank2_speed), this.a21_1.text = JSON.parse(t.tank2_atk), this.a21_2.text = JSON.parse(t.tank2_HP), this.a10.text = JSON.parse(t.mingpai_acount), V.gmUI = JSON.parse(t.gmUI), this.a13.visible = V.gmUI, this.baocunClick(null)) : this.resetGM()
                } else V.gmUI = !1;
                this.tag && this.tag.on(Laya.Event.CLICK, this, this.showGMClick)
            }
        }
        gouClick() {
            Laya.timer.currTimer - this.gouTime < 500 || (this.gouTime = Laya.timer.currTimer, V.gmUI = !V.gmUI, this.a13.visible = V.gmUI)
        }
        huanyuanClick() {
            this.resetGM()
        }
        guanbiClick() {
            this.gmBox.visible = !1
        }
        baocunClick(t) {
            _.roleData.junzhang_atk = parseFloat(this.a1.text),
            _.roleData.role_speed1 = parseFloat(this.a2.text),
            _.roleData.role_speed2 = parseFloat(this.a2_1.text),
            _.roleData.role_HP1 = parseFloat(this.a3.text),
            _.roleData.role_HP2 = parseFloat(this.a3_1.text),
            _.roleData.role_HP3 = parseFloat(this.a3_2.text),
            V.chubingSpeed = parseFloat(this.a4.text),
            V.barrackValueSpeedList = [17 / V.chubingSpeed, 17 / (.005 * V.chubingSpeed / .008), 17 / (.005 * V.chubingSpeed / .01)],
            q.Instance.lastLevelData.AI1_atk = parseFloat(this.a6_1.text),
            q.Instance.lastLevelData.AI1_HP = parseFloat(this.a6_2.text),
            q.Instance.lastLevelData.AI3_atk = parseFloat(this.a16_1.text),
            q.Instance.lastLevelData.AI3_HP = parseFloat(this.a16_2.text),
            q.Instance.lastLevelData.AI5_atk = parseFloat(this.a17_1.text),
            q.Instance.lastLevelData.AI5_HP = parseFloat(this.a17_2.text),
            q.Instance.lastLevelData.tank_speed = parseFloat(this.a14.text),
            q.Instance.lastLevelData.tank_atk = parseFloat(this.a14_1.text),
            q.Instance.lastLevelData.tank_HP = parseFloat(this.a14_2.text),
            V.kongtouCOunt = parseInt(this.a11.text),
            V.kongtouNumber = parseInt(this.a12.text);
            let e = parseInt(this.a9.text);
            if (_.leveDataCfg && _.leveDataCfg[0]) {
                let t = String(_.leveDataCfg[0].mingpai_start_amount).split(",");
                for (let i = 0; i < t.length; i++) q.Instance.lastLevelData.mingpai_start_amount[i] = Math.round(parseInt(t[i]) * e * .01)
            }
            q.Instance.lastLevelData.AI_speed = parseFloat(this.a15.text),
            q.Instance.lastLevelData.AI2_atk = parseFloat(this.a18_1.text),
            q.Instance.lastLevelData.AI2_HP = parseFloat(this.a18_2.text),
            q.Instance.lastLevelData.AI4_atk = parseFloat(this.a19_1.text),
            q.Instance.lastLevelData.AI4_HP = parseFloat(this.a19_2.text),
            V.gmEarthLevel = parseInt(this.a20_2.text),
            V.gmMoonLevel = parseInt(this.a20_1.text),
            q.Instance.lastLevelData.tank2_speed = parseFloat(this.a21.text),
            q.Instance.lastLevelData.tank2_atk = parseFloat(this.a21_1.text),
            q.Instance.lastLevelData.tank2_HP = parseFloat(this.a21_2.text),
            q.Instance.lastLevelData.mingpai_acount = parseFloat(this.a10.text),
            this.a13.visible = V.gmUI,
            null != t && (this.gmBox.visible = !1, window.ystorageExt.setJSON("GMDATA:", {
                junzhang_atk: _.roleData.junzhang_atk,
                role_speed1: _.roleData.role_speed1,
                role_speed2: _.roleData.role_speed2,
                role_HP1: _.roleData.role_HP1,
                role_HP2: _.roleData.role_HP2,
                role_HP3: _.roleData.role_HP3,
                chubingSpeed: V.chubingSpeed,
                AI1_atk: q.Instance.lastLevelData.AI1_atk,
                AI1_HP: q.Instance.lastLevelData.AI1_HP,
                AI3_atk: q.Instance.lastLevelData.AI3_atk,
                AI3_HP: q.Instance.lastLevelData.AI3_HP,
                AI5_atk: q.Instance.lastLevelData.AI5_atk,
                AI5_HP: q.Instance.lastLevelData.AI5_HP,
                tank_speed: q.Instance.lastLevelData.tank_speed,
                tank_atk: q.Instance.lastLevelData.tank_atk,
                tank_HP: q.Instance.lastLevelData.tank_HP,
                kongtouCOunt: V.kongtouCOunt,
                kongtouNumber: V.kongtouNumber,
                mingpai_start_amount: e,
                AI_speed: q.Instance.lastLevelData.AI_speed,
                AI2_atk: q.Instance.lastLevelData.AI2_atk,
                AI2_HP: q.Instance.lastLevelData.AI2_HP,
                AI4_atk: q.Instance.lastLevelData.AI4_atk,
                AI4_HP: q.Instance.lastLevelData.AI4_HP,
                gmEarthLevel: V.gmEarthLevel,
                gmMoonLevel: V.gmMoonLevel,
                tank2_speed: q.Instance.lastLevelData.tank2_speed,
                tank2_atk: q.Instance.lastLevelData.tank2_atk,
                tank2_HP: q.Instance.lastLevelData.tank2_HP,
                mingpai_acount: q.Instance.lastLevelData.mingpai_acount,
                gmUI: V.gmUI
            }))
        }
        resetGM() {
            let t = _.gkRoleDataCfg[0];
            this.a1.text = JSON.parse(t.junzhang_atk),
            this.a2.text = JSON.parse(t.role_speed1),
            this.a2_1.text = JSON.parse(t.role_speed2),
            this.a3.text = JSON.parse(t.role_HP1),
            this.a3_1.text = JSON.parse(t.role_HP2),
            this.a3_2.text = JSON.parse(t.role_HP3),
            V.chubingSpeed = 3300,
            this.a4.text = "" + V.chubingSpeed,
            V.barrackValueSpeedList = [.005, .008, .01],
            t = _.leveDataCfg[0],
            this.a6_1.text = JSON.parse(t.AI1_atk),
            this.a6_2.text = JSON.parse(t.AI1_HP),
            this.a16_1.text = JSON.parse(t.AI3_atk),
            this.a16_2.text = JSON.parse(t.AI3_HP),
            this.a17_1.text = JSON.parse(t.AI5_atk),
            this.a17_2.text = JSON.parse(t.AI5_HP),
            this.a14.text = JSON.parse(t.tank_speed),
            this.a14_1.text = JSON.parse(t.tank_atk),
            this.a14_2.text = JSON.parse(t.tank_HP),
            V.kongtouCOunt = 0,
            this.a11.text = "" + V.kongtouCOunt,
            V.kongtouNumber = 10,
            this.a12.text = "" + V.kongtouNumber;
            let e = 0,
            i = String(_.leveDataCfg[0].mingpai_start_amount).split(",");
            for (let t = 0; t < i.length; t++) e += parseInt(i[t]);
            this.a9.text = e.toString(),
            this.a15.text = JSON.parse(t.AI_speed),
            this.a18_1.text = JSON.parse(t.AI2_atk),
            this.a18_2.text = JSON.parse(t.AI2_HP),
            this.a19_1.text = JSON.parse(t.AI4_atk),
            this.a19_2.text = JSON.parse(t.AI4_HP),
            V.gmEarthLevel = 0,
            V.gmMoonLevel = 0,
            this.a20_1.text = V.gmMoonLevel.toString(),
            this.a20_2.text = V.gmEarthLevel.toString(),
            this.a21.text = JSON.parse(t.tank2_speed),
            this.a21_1.text = JSON.parse(t.tank2_atk),
            this.a21_2.text = JSON.parse(t.tank2_HP),
            this.a10.text = JSON.parse(t.mingpai_acount),
            V.gmUI = !0,
            this.a13.visible = V.gmUI
        }
        showGMClick(t) {
            this.gmBox.visible || (this.showGMNumber += 1, this.showGMNumber >= 3 && (this.showGMNumber = 0, this.gmBox.visible = !0))
        }
        attentionClick(t) {
            zs.platform.async.openAwemeUserProfile()
        }
        onStartToStrengthenClick(t) {
            V.startToStrengthen || this.click() || H.Instance.OpenView(H.Instance.startToStrengthenUrl, !1, {
                handler: Laya.Handler.create(this, this.callBackStartToStrengthen)
            })
        }
        callBackStartToStrengthen() {
            this.clickFalse(),
            this.startToStrengthenUnlock.visible = !V.startToStrengthen,
            this.startToStrengthenCountDown.visible = V.startToStrengthen,
            this.startToStrengthenBtn.disabled = V.startToStrengthen
        }
        onUpdate() {
            this.startToStrengthenCountDown.text = window.lang.remain + V.updateStartToStrengthenTimer()
        }
        onGiftCodeClick(t) {
            this.click() || H.Instance.OpenView(H.Instance.giftCodeUrl, !1, {
                handler: Laya.Handler.create(this, this.clickFalse)
            })
        }
        onAddShortCut(t) {
            zs.platform.sync.addShortCut(() =>{
                let t = p.GetLocalJson("addShortCut", !1);
                this.addShortCutBtn.visible = !1,
                t ? H.Instance.ShowTips(window.lang.RewardsCannotBeRepeated) : (p.SetLocalJson("addShortCut", !0), V.GoldAdd(100))
            })
        }
        onUnivberseClick(t) {
            this.modleStage.visible = !1,
            this.view.mouseEnabled = !1,
            J.ClickBtnTweenTo(t.target, .8, 1, this, () =>{
                let t = V.curGameEarthLevel();
                if (t >= 11 || V.isDaren) this.PageOutMoon();
                else {
                    if (t >= 1 && t < 6) return void H.Instance.OpenView(H.Instance.moonGameTipUri, !1, {
                        closeHandler: Laya.Handler.create(this, () =>{
                            this.view.mouseEnabled = !0
                        }),
                        enterHandler: Laya.Handler.create(this, this.videoStart)
                    });
                    this.videoStart()
                }
            })
        }
        loadResoucreMoon() {
            let t = [],
            e = [],
            i = V.curGameMoonLevel();
            for (let t = 0; t < _.resourcesMoonJsonData.length && t <= i; t++) for (const i in _.resourcesMoonJsonData[t]) Object.prototype.hasOwnProperty.call(_.resourcesMoonJsonData[t], i) && e.push(_.resourcesMoonJsonData[t][i]);
            for (let i = 0; i < e.length; i++) if (null == j.LoaderPrefabs[e[i]] || null == j.LoaderPrefabs[e[i]]) {
                let a = j.LocalUrl + e[i] + ".lh";
                t.push(a)
            }
            return t
        }
        videoSuccess() {
            V.starState = d.moon;
            let t = this.loadResoucreMoon();
            H.Instance.OpenView(H.Instance.gameLoadingUrl, !0, {
                res: t,
                state: m.moonGame
            })
        }
        videoStart() {
            zs.platform.async.playVideo().then(t =>{
                t ? (this.PageOutMoon(), u.trackEvent("观看月球模式视频成功")) : (u.trackEvent("观看月球模式视频失败"), H.Instance.ShowTips(window.lang.videoMoonTip), this.view.mouseEnabled = !0)
            }).
            catch(() =>{
                u.trackEvent("无观看视频资源"),
                H.Instance.ShowTips(window.lang.noVideoTip),
                this.view.mouseEnabled = !0
            })
        }
        StartNext() {
            this.view.mouseEnabled = !1,
            q.Instance.mainScene.GetMap.CreatEny(),
            zs.core.workflow.next()
        }
        loadResoucreEarth() {
            let t = [],
            e = [];
            for (let t = 0; t < _.resourcesSubJsonData.length && t <= V.curGameLevel(); t++) for (const i in _.resourcesSubJsonData[t]) Object.prototype.hasOwnProperty.call(_.resourcesSubJsonData[t], i) && e.push(_.resourcesSubJsonData[t][i]);
            for (let i = 0; i < e.length; i++) if (null == j.LoaderPrefabs[e[i]] || null == j.LoaderPrefabs[e[i]]) {
                let a = j.LocalUrl + e[i] + ".lh";
                t.push(a)
            }
            return t
        }
        BattleModel() {
            this.view.mouseEnabled = !1,
            J.ClickBtnTweenTo(this.btn_battle, .8, 1, this, this.PageBattle)
        }
        loadResoucreBattle() {
            let t = [];
            for (const e in _.resourcesBattleJsonData) if (Object.prototype.hasOwnProperty.call(_.resourcesBattleJsonData, e) && (null == j.LoaderPrefabs[e] || null == j.LoaderPrefabs[e])) {
                let i = j.LocalUrl + _.resourcesBattleJsonData[e] + ".lh";
                t.push(i)
            }
            return t
        }
        battleSuccess() {
            V.starState = d.battle;
            let t = this.loadResoucreBattle();
            H.Instance.OpenView(H.Instance.gameLoadingUrl, !0, {
                res: t,
                state: m.battleGame
            })
        }
        PageOut(t) {
            this.cloud.visible = !0;
            let e = this.owner.page_out;
            e.play(0, !1),
            e.on(Laya.Event.COMPLETE, this, this.StartLoadResources, [t])
        }
        PageOutMoon() {
            this.cloud.visible = !0,
            u.trackEvent("进入月球模式");
            let t = this.owner.page_out;
            t.play(0, !1),
            t.on(Laya.Event.COMPLETE, this, this.videoSuccess)
        }
        PageBattle() {
            this.cloud.visible = !0;
            let t = this.owner.page_out;
            t.play(0, !1),
            t.on(Laya.Event.COMPLETE, this, this.battleSuccess)
        }
    }
    class st extends Laya.Script {
        constructor() {
            super(),
            this.btn_video = null,
            this.btn_close = null,
            this.videoFunc = null,
            this.closeFunc = null
        }
        onAwake() {
            var t = this.owner.getChildByName("middleUI");
            this.btn_video = t.getChildByName("btn_get"),
            this.btn_close = t.getChildByName("btn_close"),
            this.btn_video.on(Laya.Event.CLICK, this, () =>{
                this.videoFunc && this.videoFunc(() =>{
                    this.owner.close()
                })
            }),
            this.btn_close.on(Laya.Event.CLICK, this, () =>{
                this.closeFunc && this.closeFunc(),
                this.owner.close()
            }),
            zs.core.workflow.showInterstitialAd();
        }
    }
    class nt extends g {
        onAwake() {
            super.onAwake(),
            this.middleUI = this.owner.getChildByName("middleUI"),
            this.bottomUI = this.owner.getChildByName("bottomUI"),
            this.closeBtn = this.middleUI.getChildByName("reliveBox").getChildByName("btn_close"),
            this.getBtn = this.middleUI.getChildByName("reliveBox").getChildByName("btn_get"),
            this.timeNum = this.middleUI.getChildByName("reliveBox").getChildByName("time"),
            this.icon = this.middleUI.getChildByName("reliveBox").getChildByName("icon"),
            this.name = this.middleUI.getChildByName("reliveBox").getChildByName("Title").getChildByName("icon"),
            this.inAni = this.owner. in ,
            this.BombSend(q.Instance.lastBombCtl),
            this.inAni.play(0, !1),
            this.inAni.once(Laya.Event.COMPLETE, this, () =>{
                this.closeBtn.once(Laya.Event.CLICK, this, this.CloseClick),
                this.getBtn.on(Laya.Event.CLICK, this, this.GetClick)
            }),
            this.close = !1,
            zs.core.workflow.showInterstitialAd();
        }
        onUpdate() {
            if (!this.close && this.bombCtl) {
                let t = Math.floor(this.bombCtl.lastSendTime / 60 / 10),
                e = Math.floor(this.bombCtl.lastSendTime / 60 % 10),
                i = this.bombCtl.lastSendTime % 60,
                a = i > 0 ? Math.floor(i / 10) : 0,
                s = i > 0 ? Math.floor(i % 10) : 0;
                this.timeNum.text = t.toString() + e.toString() + ":" + a.toString() + s.toString()
            }
        }
        BombSend(t) {
            this.bombCtl = t
        }
        CloseClick() {
            this.view.mouseEnabled = !1,
            J.ClickBtnTweenTo(this.closeBtn, .8, 1, this, () =>{
                this.exit()
            }),
            this.autoShowCustomAd()
        }
        GetClick() {
            this.view.mouseEnabled = !1,
            J.ClickBtnTweenTo(this.getBtn, .8, 1, this, () =>{
                u.trackEvent("观看导弹视频"),
                q.Instance.GamePause(),
                zs.platform.async.playVideo().then(t =>{
                    t ? (u.trackEvent("观看导弹视频成功"), this.bombCtl.SendBomb(), q.Instance.GameRegain(), this.autoShowCustomAd(), this.exit()) : (u.trackEvent("观看导弹视频失败"), H.Instance.ShowTips(window.lang.videoLaunchTip), this.autoShowCustomAd(), q.Instance.GameRegain(), this.exit())
                }).
                catch(() =>{
                    u.trackEvent("无观看视频资源"),
                    q.Instance.GameRegain(),
                    this.exit()
                })
            })
        }
        exit() {
            this.close = !0,
            this.handler && this.handler.run(),
            this.handler = null,
            H.isOpenLaunchPage = !1,
            Q.zs_game_banner_show_switch || zs.platform.sync.hideBanner(),
            H.Instance.HideView(H.Instance.launchUrl)
        }
        autoShowCustomAd() {}
        SetParameter(t) {
            super.SetParameter(t),
            this.handler = t.handler
        }
    }
    class ot extends g {
        onAwake() {
            switch (super.onAwake(), this.middleUI = this.owner.getChildByName("middleUI"), this.bottomUI = this.owner.getChildByName("bottomUI"), this.closeBtn = this.middleUI.getChildByName("reliveBox").getChildByName("btn_close"), this.getBtn = this.middleUI.getChildByName("reliveBox").getChildByName("btn_get"), this.silverNum = this.middleUI.getChildByName("reliveBox").getChildByName("level"), this.icon = this.middleUI.getChildByName("reliveBox").getChildByName("icon"), this.name = this.middleUI.getChildByName("reliveBox").getChildByName("Title").getChildByName("icon"), this.inAni = this.owner. in , this.silverNum.value = "+" + _.silverNum.toString(), this.inAni.play(0, !1), H.isOpenLeofPage = 2, H.leofType) {
            case L.Badge:
                this.silverNum.value = "+" + _.silverNum.toString(),
                this.icon.skin = "dialog/icon_tag.png";
                break;
            case L.GoldenBadge:
                this.silverNum.value = "+" + _.goldNum.toString(),
                this.icon.skin = "dialog/icon_tag1.png"
            }
            this.inAni.once(Laya.Event.COMPLETE, this, () =>{
                this.closeBtn.once(Laya.Event.CLICK, this, this.CloseClick),
                this.getBtn.on(Laya.Event.CLICK, this, this.GetClick)
            }),
            zs.core.workflow.showInterstitialAd();
        }
        CloseClick() {
            this.view.mouseEnabled = !1,
            J.ClickBtnTweenTo(this.closeBtn, .8, 1, this, () =>{
                this.exit()
            }),
            this.autoShowCustomAd()
        }
        GetClick() {
            this.view.mouseEnabled = !1,
            J.ClickBtnTweenTo(this.getBtn, .8, 1, this, () =>{
                let t = "";
                switch (H.leofType) {
                case L.Badge:
                    t = V.curGameLevel() <= V.trackEventLevelMax ? (V.starState == d.earth ? "": "月球") + "关卡" + V.curGameLevel() + "观看补充铭牌视频": null,
                    u.trackEvent("观看补充铭牌视频"),
                    q.Instance.GamePause();
                    break;
                case L.GoldenBadge:
                    t = "观看补充金铭牌视频"
                }
                null != t && u.trackEvent(t),
                zs.platform.async.playVideo().then(t =>{
                    if (t) {
                        let t = "",
                        e = 0;
                        switch (H.leofType) {
                        case L.Badge:
                            t = V.curGameLevel() <= V.trackEventLevelMax ? (V.starState == d.earth ? "": "月球") + "关卡" + V.curGameLevel() + "观看补充铭牌视频成功": null,
                            u.trackEvent("观看补充铭牌视频成功"),
                            q.Instance.mainScene.GetMap.playerCtl.VideoAddSilver(_.silverNum),
                            q.Instance.GameRegain(),
                            e = _.silverNum;
                            break;
                        case L.GoldenBadge:
                            t = "观看补充金铭牌视频成功",
                            V.GoldAdd(_.goldNum),
                            e = _.goldNum
                        }
                        null != t && u.trackEvent(t),
                        H.Instance.ShowTips(window.lang.getXbadges.replace("{x}", "x"+e)),
                        this.exit(),
                        this.autoShowCustomAd()
                    } else {
                        let t = "";
                        switch (H.leofType) {
                        case L.Badge:
                            t = V.curGameLevel() <= V.trackEventLevelMax ? (V.starState == d.earth ? "": "月球") + "关卡" + V.curGameLevel() + "观看补充铭牌视频失败": null,
                            u.trackEvent("观看补充铭牌视频失败"),
                            q.Instance.GameRegain();
                            break;
                        case L.GoldenBadge:
                            t = "观看补充金铭牌视频失败"
                        }
                        null != t && u.trackEvent(t),
                        H.Instance.ShowTips(window.lang.videoTip2),
                        this.view.mouseEnabled = !0,
                        this.autoShowCustomAd()
                    }
                }).
                catch(() =>{
                    switch (u.trackEvent("无观看视频资源"), this.view.mouseEnabled = !0, H.leofType) {
                    case L.Badge:
                        q.Instance.GameRegain();
                        break;
                    case L.GoldenBadge:
                    }
                })
            })
        }
        exit() {
            Q.zs_game_banner_show_switch || zs.platform.sync.hideBanner(),
            H.isOpenLeofPage = 0,
            H.Instance.HideView(H.Instance.leckOfUrl)
        }
        autoShowCustomAd() {}
    }
    var rt = window.lang.rt;
    class ht extends zs.proxy.NativeLoading {
        static preload() {
            return new Promise((t, e) =>{
                if (this.loadedScene) return t();
                Laya.Scene.load(this.url, Laya.Handler.create(this, e =>{
                    this.loadedScene = e,
                    this.loadedScene.height = Laya.stage.height,
                    this.loadedScene.width = Laya.stage.width,
                    t()
                }))
            })
        }
        static make() {
            if (null == this.loadedScene) return null;
            Laya.stage.addChild(this.loadedScene);
            let t = this.loadedScene.getComponent(ht);
            null == t && (t = this.loadedScene.addComponent(ht)),
            this.loadedScene.scaleX = Laya.stage.width / this.loadedScene.width,
            this.loadedScene.scaleY = this.loadedScene.scaleX,
            this.loadedScene.height += (Laya.stage.height - this.loadedScene.height * Laya.stage.scaleY) / this.loadedScene.scaleY,
            t.lod02 = this.loadedScene.getChildByName("box").getChildByName("lod02"),
            t.loadingWidth = t.lod02.width,
            t.lod02.width = 0,
            t.earnCount = this.loadedScene.getChildByName("box").getChildByName("gbCount"),
            t.tipsss = this.loadedScene.getChildByName("xtBox").getChildByName("tipsss"),
            t.gbCount1 = t.tipsss.getChildByName("gbCount1"),
            t.gbCount2 = t.tipsss.getChildByName("gbCount2"),
            t.bg = this.loadedScene.getChildByName("bg");
            let e = Laya.stage.width * t.bg.height / t.bg.width;
            t.bg.height = e,
            t.bg.width = Laya.stage.width,
            t.gbCount1.text = rt[0],
            t.gbCount2.text = rt[1],
            t.gbCountTime = Laya.timer.currTimer,
            t.gbCountIndex = 1;
            let i = new Date;
            return t.updateLabel(), t
        }
        updateProgress(t) {
            this.earnCount.value = t + "%";
            let e = t / 100 * this.loadingWidth;
            e <= 0 ? e = 1 : e > this.loadingWidth && (e = this.loadingWidth),
            this.lod02.width = e
        }
        updateLabel() {
            this.owner.timer.frameLoop(1, this, () =>{
                Laya.timer.currTimer - this.gbCountTime > 1500 && (this.gbCountTime = Laya.timer.currTimer, Laya.Tween.to(this.gbCount2, {
                    y: 0
                },
                400), Laya.Tween.to(this.gbCount1, {
                    y: -50
                },
                400, null, Laya.Handler.create(this, () =>{
                    Laya.Tween.clearAll(this.gbCount2),
                    this.gbCount1.y = 0,
                    this.gbCount2.y = 50,
                    this.gbCount1.text = rt[this.gbCountIndex],
                    this.gbCountIndex += 1,
                    this.gbCountIndex >= rt.length && (this.gbCountIndex = 0),
                    this.gbCount2.text = rt[this.gbCountIndex]
                })))
            })
        }
    }
    ht.url = window.compUrl + "comp/Loading.scene";
    class lt extends g {
        constructor() {
            super(...arguments),
            this.reliveTime = 5,
            this.lastReliveTime = 0
        }
        Open() {
            this.topUI = this.owner.getChildByName("topUI"),
            this.middleUI = this.owner.getChildByName("middleUI"),
            this.bottomUI = this.owner.getChildByName("bottomUI"),
            this.inAni = this.owner.ani1,
            this.reliveFg = this.middleUI.getChildByName("reliveBox").getChildByName("relive_fg"),
            this.reliveSpr = this.reliveFg.mask,
            this.middleUI.getChildByName("btn_close").visible = !1,
            this.closeBtn = this.bottomUI.getChildByName("giveUpBtn"),
            this.videoBtn = this.bottomUI.getChildByName("videoReliveBtn"),
            this.isTime = !1,
            this.closeBtn.once(Laya.Event.CLICK, this, this.closeClick),
            this.videoBtn.on(Laya.Event.CLICK, this, this.videoClick),
            this.isTime = !0,
            this.btnMoreGame = this.owner.getChildByName("btnMoreGame"),
            this.btnMoreGame.visible = !1,
            zs.core.workflow.showInterstitialAd();
        }
        onUpdate() {
            this.isTime && (this.lastReliveTime += q.Instance.mainScene.delat, this.updateTime(), this.lastReliveTime >= this.reliveTime && (this.view.mouseEnabled = !1, this.lastReliveTime = 0, this.isTime = !1, this.hideView()))
        }
        Hide() {}
        CloseEvent() {
            this.btnMoreGame.off(Laya.Event.CLICK, this, this.onBtnMoreGameClick)
        }
        OpenEvent() {
            this.btnMoreGame.on(Laya.Event.CLICK, this, this.onBtnMoreGameClick)
        }
        closeClick() {
            this.view.mouseEnabled = !1,
            this.isTime = !1,
            this.hideView()
        }
        videoClick() {
            this.view.mouseEnabled = !1,
            this.isTime = !1,
            J.ClickBtnTweenTo(this.videoBtn, .8, 1, this, () =>{
                V.curGameLevel() <= V.trackEventLevelMax && u.trackEvent((V.starState == d.earth ? "": "月球") + "关卡" + V.curGameLevel() + "观看复活视频"),
                u.trackEvent("观看复活视频"),
                zs.platform.async.playVideo().then(t =>{
                    t ? (V.curGameLevel() <= V.trackEventLevelMax && u.trackEvent((V.starState == d.earth ? "": "月球") + "关卡" + V.curGameLevel() + "观看复活视频成功"), u.trackEvent("观看复活视频成功"), H.Instance.ShowTips(window.lang.relife), this.relive()) : (V.curGameLevel() <= V.trackEventLevelMax && u.trackEvent((V.starState == d.earth ? "": "月球") + "关卡" + V.curGameLevel() + "观看复活视频失败"), u.trackEvent("观看复活视频失败"), H.Instance.ShowTips(window.lang.videoRelifeTip), this.view.mouseEnabled = !0, this.isTime = !0)
                }).
                catch(() =>{
                    this.hideView()
                })
            })
        }
        updateTime() {
            this.reliveSpr.graphics.clear();
            let t = this.lastReliveTime > 0 ? this.lastReliveTime: 0,
            e = 0;
            t > 0 ? e = t / this.reliveTime: t = 0,
            e > 1 ? e = 1 : e < 0 && (e = 0);
            let i = 360 * e;
            i > 360 ? i = 360 : i < 0 && (i = 0),
            this.reliveSpr.graphics.drawPie(8, 8, this.reliveFg.width / 2, -90 + i, 270, "#ffffff")
        }
        relive() {
            Laya.stage.event(u.RELIVE)
        }
        hideView(t = 0) {
            t ? H.Instance.OpenView(H.Instance.GameUrl) : Laya.stage.event(u.GAME_END, [1])
        }
        onBtnMoreGameClick() {}
    }
    class ct extends g {
        Open() {
            this.topUI = this.owner.getChildByName("topUI"),
            this.middleUI = this.owner.getChildByName("middleUI"),
            this.bottomUI = this.owner.getChildByName("bottomUI"),
            this.nextBtn = this.bottomUI.getChildByName("btn_get"),
            this.inAni = this.owner.Title_Enter,
            this.nextAni = this.owner.loop,
            this.inAni.play(0, !1),
            this.inAni.once(Laya.Event.COMPLETE, this, () =>{
                U.Instance.PlayEffectAudio("die"),
                this.nextBtn.once(Laya.Event.CLICK, this, this.nextClick),
                this.nextAni.play(0, !0)
            });
            zs.core.workflow.showInterstitialAd();
            window.leaderBoard && window.leaderBoard.setLeaderboardScore(window.boardName, q.killEnermyNum);
        }
        Hide() {}
        CloseEvent() {}
        OpenEvent() {}
        nextClick() {
            this.view.mouseEnabled = !1,
            J.ClickBtnTweenTo(this.nextBtn, .8, 1, this, () =>{
                H.Instance.HideView(H.Instance.LoseUrl),
                zs.core.workflow.next()
            })
        }
    }
    class dt extends g {
        Open() {
            this.topUI = this.owner.getChildByName("topUI"),
            this.middleUI = this.owner.getChildByName("middleUI"),
            this.bottomUI = this.owner.getChildByName("bottomUI"),
            this.nextBtn = this.bottomUI.getChildByName("title"),
            this.videoBtn = this.bottomUI.getChildByName("video"),
            this.gold = this.middleUI.getChildByName("gold"),
            this.inAni = this.owner.Title_Enter,
            this.nextAni = this.owner.loop,
            this.gold.value = "+" + q.Instance.lastLevelData.gold2.toString(),
            this.inAni.play(0, !1),
            this.inAni.once(Laya.Event.COMPLETE, this, () =>{
                U.Instance.PlayEffectAudio("win"),
                this.nextBtn.once(Laya.Event.CLICK, this, this.nextClick),
                this.videoBtn.once(Laya.Event.CLICK, this, this.videoClick),
                this.nextAni.play(0, !0),
                q.Instance.mainScene.GetCamera.ShowWinEffect(!0)
            }),
            q.Instance.mainScene.GetMap.playerCtl.CloseMouseEvent(),
            zs.core.workflow.showInterstitialAd();
            window.leaderBoard && window.leaderBoard.setLeaderboardScore(window.boardName, q.killEnermyNum);
        }
        Hide() {}
        CloseEvent() {}
        OpenEvent() {}
        videoClick() {
            this.view.mouseEnabled = !1,
            J.ClickBtnTweenTo(this.videoBtn, .8, 1, this, () =>{
                u.trackEvent("观看结算双倍奖励视频"),
                zs.platform.async.playVideo().then(t =>{
                    t ? (u.trackEvent("观看结算双倍奖励视频成功"), this.exit(1)) : (u.trackEvent("观看结算双倍奖励视频失败"), this.exit(0))
                }).
                catch(() =>{
                    this.exit(0)
                })
            })
        }
        nextClick() {
            this.view.mouseEnabled = !1,
            J.ClickBtnTweenTo(this.nextBtn, .8, 1, this, () =>{
                this.exit(0)
            })
        }
        exit(t = 0) {
            let e = q.Instance.lastLevelData.gold2;
            switch (t) {
            case 1:
                e = 2 * q.Instance.lastLevelData.gold2
            }
            V.GoldAdd(e),
            H.Instance.ShowTips(window.lang.getXbadges.replace("{x}", 3)),
            Laya.timer.once(1, this, () =>{
                H.Instance.HideView(H.Instance.WinUrl),
                zs.core.workflow.next()
            })
        }
    }
    class mt extends g {
        onAwake() {
            super.onAwake(),
            this.topUI = this.owner.getChildByName("topUI"),
            this.middleUI = this.owner.getChildByName("middleUI"),
            this.bottomUI = this.owner.getChildByName("bottomUI"),
            this.closeBtn = this.topUI.getChildByName("btn_close"),
            this.levelList = this.middleUI.getChildByName("leveList"),
            this.levelList.vScrollBarSkin = "",
            this.levelList.renderHandler = new Laya.Handler(this, this.onRenderLevel),
            this.levelList.selectHandler = new Laya.Handler(this, this.onClickItem),
            this.levelList.selectEnable = !0,
            this.levelList.array = _.levelData,
            this.moonLevelList = this.middleUI.getChildByName("leveList2"),
            this.moonLevelList.vScrollBarSkin = "",
            this.moonLevelList.renderHandler = new Laya.Handler(this, this.onRenderMoonLevel),
            this.moonLevelList.selectHandler = new Laya.Handler(this, this.onClickItemMoonLevel),
            this.moonLevelList.selectEnable = !0,
            this.moonLevelList.array = _.moonLevelData,
            this.closeBtn.on(Laya.Event.CLICK, this, this.CloseClick),
            zs.core.workflow.showInterstitialAd();
        }
        SetParameter(t) {
            this.closeHandler = t.closeHandler,
            this.nextEarthHandler = t.nextEarthHandler,
            this.nextMoonHandler = t.nextMoonHandler
        }
        onRenderLevel(t, e) {
            let i = t.getChildByName("level"),
            a = t.getChildByName("select"),
            s = e + 1;
            i.text = s.toString(),
            a.visible = s == V.curGameEarthLevel()
        }
        onClickItem(t) {
            console.log("选中关卡：", t + 1),
            this.levelList.getCell(t).getChildByName("select").visible = !0,
            V.selectLevel != t + 1 && (V.selectLevel = t + 1, this.view.mouseEnabled = !1, Laya.timer.once(2, this, () =>{
                this.nextEarthHandler && (this.nextEarthHandler.run(), this.nextEarthHandler = null),
                this.nextMoonHandler && (this.nextMoonHandler.clear(), this.nextMoonHandler = null),
                this.closeHandler && (this.closeHandler.clear(), this.closeHandler = null),
                this.exit()
            }))
        }
        CloseClick() {
            this.view.mouseEnabled = !1,
            this.nextEarthHandler && (this.nextEarthHandler.clear(), this.nextEarthHandler = null),
            this.nextMoonHandler && (this.nextMoonHandler.clear(), this.nextMoonHandler = null),
            this.closeHandler && (this.closeHandler.run(), this.closeHandler = null),
            this.exit()
        }
        exit() {
            H.Instance.HideView(H.Instance.selectLevelUrl)
        }
        onRenderMoonLevel(t, e) {
            let i = t.getChildByName("level"),
            a = t.getChildByName("select"),
            s = e + 1;
            i.text = s.toString(),
            a.visible = s == V.curGameMoonLevel()
        }
        onClickItemMoonLevel(t) {
            console.log("选中月球关卡：", t + 1),
            this.moonLevelList.getCell(t).getChildByName("select").visible = !0,
            V.selectMoonLevel != t + 1 && (V.selectMoonLevel = t + 1, this.view.mouseEnabled = !1, Laya.timer.once(2, this, () =>{
                this.nextMoonHandler && (this.nextMoonHandler.run(), this.nextMoonHandler = null),
                this.nextEarthHandler && (this.nextEarthHandler.clear(), this.nextEarthHandler = null),
                this.closeHandler && (this.closeHandler.clear(), this.closeHandler = null),
                this.exit()
            }))
        }
    }
    class gt extends g {
        onAwake() {
            super.onAwake();
            let t = this.owner.getChildByName("middleUI");
            this.zhendong = t.getChildByName("zhendong"),
            this.yinxiao = t.getChildByName("yinxiao"),
            this.yinyue = t.getChildByName("yinyue"),
            this.closeBtn = t.getChildByName("btn_close");
            let e = t.getChildByName("reliveBox");
            this.zhendongpanel = e.getChildByName("zhendongpanel"),
            this.zhendongyuan = this.zhendongpanel.getChildByName("zhendongyuan"),
            this.yinxiao.y = 280;
            this.yinxiaopanel = e.getChildByName("yinxiaopanel"),
            this.yinxiaoyuan = this.yinxiaopanel.getChildByName("yinxiaoyuan"),
            this.yinyue.y = 387;
            this.yinyuepanel = e.getChildByName("yinyuepanel"),
            this.yinyueyuan = this.yinyuepanel.getChildByName("yinyueyuan"),
            this.setZhendong(),
            this.setYinxiao(),
            this.setYinyue(),
            this.closeBtn.once(Laya.Event.CLICK, this, this.CloseClick),
            this.zhendong.on(Laya.Event.CLICK, this, this.onVibrateClick),
            this.yinxiao.on(Laya.Event.CLICK, this, this.onSoundClick),
            this.yinyue.on(Laya.Event.CLICK, this, this.onMusicClick);
            zs.core.workflow.showInterstitialAd();
            console.log(this);
        }
        SetParameter(t) {
            super.SetParameter(t),
            this.handler = t.handler
        }
        CloseClick() {
            this.view.mouseEnabled = !1,
            J.ClickBtnTweenTo(this.closeBtn, .8, 1, this, () =>{
                this.exit()
            })
        }
        onVibrateClick() {
            V.isVibrate = !V.isVibrate,
            V.setVibrate(),
            this.setZhendong()
        }
        onSoundClick() {
            V.isSound = !V.isSound,
            V.setSound(),
            this.setYinxiao()
        }
        onMusicClick() {
            V.isMusic = !V.isMusic,
            V.setMusic(),
            this.setYinyue()
        }
        exit() {
            this.handler && this.handler.run(),
            this.handler = null,
            this.zhendong.off(Laya.Event.CLICK, this, this.onVibrateClick),
            this.yinxiao.off(Laya.Event.CLICK, this, this.onSoundClick),
            this.yinyue.off(Laya.Event.CLICK, this, this.onMusicClick),
            H.Instance.HideView(H.Instance.setUrl)
        }
        setZhendong() {
            this.zhendongpanel.index = V.isVibrate ? 0 : 1,
            this.zhendongyuan.index = V.isVibrate ? 0 : 1,
            this.zhendongyuan.x = V.isVibrate ? 40 : 121
        }
        setYinxiao() {
            this.yinxiaopanel.index = V.isSound ? 0 : 1,
            this.yinxiaoyuan.index = V.isSound ? 0 : 1,
            this.yinxiaoyuan.x = V.isSound ? 40 : 121
        }
        setYinyue() {
            this.yinyuepanel.index = V.isMusic ? 0 : 1,
            this.yinyueyuan.index = V.isMusic ? 0 : 1,
            this.yinyueyuan.x = V.isMusic ? 40 : 121
        }
    }
    class ut extends g {
        onAwake() {
            super.onAwake();
            let t = this.owner.getChildByName("middleUI");
            this.gold = t.getChildByName("level"),
            this.enterBtn = t.getChildByName("btn_get"),
            this.closeBtn = t.getChildByName("btn_close"),
            this.gold.value = _.airShipData.currentAirShipTime.toString(),
            this.closeBtn.once(Laya.Event.CLICK, this, this.CloseClick),
            this.enterBtn.once(Laya.Event.CLICK, this, this.GetClick),
            zs.core.workflow.showInterstitialAd();
        }
        CloseClick() {
            this.view.mouseEnabled = !1,
            J.ClickBtnTweenTo(this.closeBtn, .8, 1, this, () =>{
                this.exit()
            })
        }
        GetClick() {
            this.view.mouseEnabled = !1,
            J.ClickBtnTweenTo(this.enterBtn, .8, 1, this, () =>{
                _.airShipData.airShipIndex = 1,
                q.Instance.mainScene.GetMap.callAirShip(),
                this.exit(),
                H.Instance.ShowTips(window.lang.superJetJoin)
            })
        }
        exit() {
            H.Instance.HideView(H.Instance.summonUrl)
        }
    }
    class pt extends g {
        onAwake() {
            super.onAwake();
            let t = this.owner.getChildByName("middleUI");
            this.videoCount = t.getChildByName("videoCount"),
            this.enterBtn = t.getChildByName("btn_get"),
            this.videoNumber = this.enterBtn.getChildByName("videoNumber"),
            this.videoNumber1 = this.enterBtn.getChildByName("videoNumber1"),
            this.closeBtn = t.getChildByName("btn_close"),
            this.textDesc = t.getChildByName("desc"),
            this.closeBtn.on(Laya.Event.CLICK, this, this.CloseClick),
            this.enterBtn.on(Laya.Event.CLICK, this, this.EnterClick),
            this.textDesc.text = window.lang.XbadgesRound.replace("{x}", _.daodanData.startToStrengthenMinPaiNum),
            this.videoCount.text = window.lang.watchXvideo.replace("{x}",_.daodanData.startToStrengthenCount),
            this.setNumber(),
            zs.core.workflow.showInterstitialAd();
        }
        setNumber() {
            this.videoNumber.text = "（  /" + _.daodanData.startToStrengthenCount + "）",
            this.videoNumber1.text = V.startToStrengthenNumber.toString()
        }
        SetParameter(t) {
            super.SetParameter(t),
            this.handler = t.handler
        }
        CloseEvent() {
            this.closeBtn.off(Laya.Event.CLICK, this, this.CloseClick),
            this.enterBtn.off(Laya.Event.CLICK, this, this.EnterClick)
        }
        CloseClick() {
            this.view.mouseEnabled = !1,
            J.ClickBtnTweenTo(this.closeBtn, .8, 1, this, () =>{
                this.exit()
            })
        }
        EnterClick() {
            this.view.mouseEnabled = !1,
            J.ClickBtnTweenTo(this.enterBtn, .8, 1, this, () =>{
                zs.platform.async.playVideo().then(t =>{
                    t ? (u.trackEvent("观看超强开局视频成功"), this.view.mouseEnabled = !0, V.setStartToStrengthenNumber() ? (H.Instance.ShowTips(window.lang.superStartIsOn), this.exit()) : this.setNumber()) : (u.trackEvent("观看超强开局视频失败"), this.view.mouseEnabled = !0)
                }).
                catch(() =>{
                    this.view.mouseEnabled = !0
                })
            })
        }
        exit() {
            this.handler && this.handler.run(),
            this.handler = null,
            H.Instance.HideView(H.Instance.startToStrengthenUrl)
        }
    }
    class Lt extends Laya.Script {
        onAwake() {
            this.bg = this.owner.getChildByName("tipBg"),
            this.tipsTex = this.bg.getChildAt(0),
            this.tipsTex.text = H.Instance.GetTipsText,
            Laya.Tween.to(this.bg, {
                alpha: 0
            },
            2e3, null, Laya.Handler.create(this, () =>{
                this.exit()
            }))
        }
        exit() {
            H.Instance.HideView(H.Instance.tipsUrl)
        }
    }
    class ft extends g {
        onAwake() {
            super.onAwake();
            let t = this.owner.getChildByName("middleUI");
            this.closeBtn = t.getChildByName("btn_close"),
            this.box1 = t.getChildByName("box1"),
            this.box2 = t.getChildByName("box2"),
            this.
            try = this.box1.getChildByName("btn_try"),
            this.enter = this.box2.getChildByName("btn_ok"),
            this.closeBtn.on(Laya.Event.CLICK, this, this.CloseClick),
            this.
            try.on(Laya.Event.CLICK, this, this.onTryClick),
            this.enter.on(Laya.Event.CLICK, this, this.onEnterClick);
            let e = 1 == V.curGameEarthLevel();
            this.box1.visible = !e,
            this.box2.visible = e,
            zs.core.workflow.showInterstitialAd();
        }
        SetParameter(t) {
            super.SetParameter(t),
            this.closeHandler = t.closeHandler,
            this.enterHandler = t.enterHandler
        }
        CloseClick() {
            this.view.mouseEnabled = !1,
            J.ClickBtnTweenTo(this.closeBtn, .8, 1, this, () =>{
                this.closeHandler && this.closeHandler.run(),
                this.closeHandler = null,
                this.enterHandler && this.enterHandler.clear(),
                this.enterHandler = null,
                this.exit()
            })
        }
        onEnterClick() {
            this.view.mouseEnabled = !1,
            J.ClickBtnTweenTo(this.enter, .8, 1, this, () =>{
                this.closeHandler && this.closeHandler.run(),
                this.closeHandler = null,
                this.enterHandler && this.enterHandler.clear(),
                this.enterHandler = null,
                this.exit()
            })
        }
        onTryClick() {
            this.view.mouseEnabled = !1,
            J.ClickBtnTweenTo(this.
            try, .8, 1, this, () =>{
                this.closeHandler && this.closeHandler.clear(),
                this.closeHandler = null,
                this.enterHandler && this.enterHandler.run(),
                this.enterHandler = null,
                this.exit()
            })
        }
        exit() {
            this.closeBtn.off(Laya.Event.CLICK, this, this.CloseClick),
            this.
            try.off(Laya.Event.CLICK, this, this.onTryClick),
            this.enter.off(Laya.Event.CLICK, this, this.onEnterClick),
            H.Instance.HideView(H.Instance.moonGameTipUri)
        }
    }
    class Ct extends g {
        onAwake() {
            super.onAwake(),
            this.topUI = this.owner.getChildByName("topUI"),
            this.middleUI = this.owner.getChildByName("middleUI"),
            this.bottomUI = this.owner.getChildByName("bottomUI"),
            this.inAni = this.owner. in ,
            this.loopAni = this.owner.loop,
            this.icon = this.middleUI.getChildByName("icon"),
            this.title = this.topUI.getChildByName("title"),
            this.proBox = this.middleUI.getChildByName("pro"),
            this.proFgImg = this.proBox.getChildByName("unlock_pro_fg"),
            this.proValue = this.proBox.getChildByName("progressValue"),
            this.profgMask = this.proFgImg.mask,
            this.btn_continue = this.middleUI.getChildByName("btn_continue"),
            this.btn_use = this.middleUI.getChildByName("btn_use"),
            this.icon.skin = "unlock/" + q.Instance.lastUnlockData.icon + ".png",
            this.title.skin = "unlock/" + q.Instance.lastUnlockData.title + ".png";
            let t = V.curGameEarthLevel() - 1 - q.Instance.lastUnlockData.start_level;
            this.startValue = t <= 0 ? 0 : t / (q.Instance.lastUnlockData.end_level - q.Instance.lastUnlockData.start_level);
            let e = Math.abs(V.curGameEarthLevel() - q.Instance.lastUnlockData.start_level);
            this.endValue = e <= 0 ? 0 : e / (q.Instance.lastUnlockData.end_level - q.Instance.lastUnlockData.start_level),
            this.endValue > 1 && (this.endValue = 1),
            this.btn_continue.visible = !1,
            this.btn_use.visible = !1,
            this.UpdateValue(this.startValue),
            this.inAni.play(0, !1),
            this.inAni.once(Laya.Event.COMPLETE, this, () =>{
                Laya.Tween.to(this, {
                    startValue: this.endValue,
                    update: new Laya.Handler(this, () =>{
                        this.UpdateValue(this.startValue)
                    })
                },
                500, null, Laya.Handler.create(this, () =>{
                    this.endValue >= 1 ? this.btn_use.visible = !0 : this.btn_continue.visible = !0,
                    this.loopAni.play(0, !0),
                    this.btn_use.once(Laya.Event.CLICK, this, this.UseClick),
                    this.btn_continue.once(Laya.Event.CLICK, this, this.ContinueClick)
                }))
            });
            zs.core.workflow.showInterstitialAd();
        }
        UpdateValue(t) {
            let e = t * this.proFgImg.width;
            e > this.proFgImg.width ? e = this.proFgImg.width: e <= 0 && (e = 1),
            this.profgMask.width = e,
            this.proValue.value = Math.floor(100 * t).toString() + "%"
        }
        ContinueClick() {
            this.view.mouseEnabled = !1,
            J.ClickBtnTweenTo(this.btn_continue, .8, 1, this, () =>{
                H.Instance.OpenView(H.Instance.WinUrl)
            })
        }
        UseClick() {
            this.view.mouseEnabled = !1,
            J.ClickBtnTweenTo(this.btn_use, .8, 1, this, () =>{
                H.Instance.OpenView(H.Instance.WinUrl)
            })
        }
    }
    class yt {
        constructor() {}
        static init() {
            var t = Laya.ClassUtils.regClass;
            t("page/GameLoading.ts", F),
            t("page/GamePage.ts", $),
            t("page/GamePage_Battle.ts", et),
            t("page/GiftCodePage.ts", it),
            t("page/HomePage.ts", at),
            t("page/JiJia.ts", st),
            t("page/LaunchPage.ts", nt),
            t("page/LeckOfPage.ts", ot),
            t("LayaLoading.ts", ht),
            t("page/RelivePage.ts", lt),
            t("page/LosePage.ts", ct),
            t("page/WinPage.ts", dt),
            t("page/SelectLevelPage.ts", mt),
            t("page/SettingPage.ts", gt),
            t("page/SummonPage.ts", ut),
            t("page/StartToStrengthenPage.ts", pt),
            t("page/TipsPage.ts", Lt),
            t("page/MoonGameTipPage.ts", ft),
            t("page/UnlockPage.ts", Ct)
        }
    }
    let isIphone = window.navigator.userAgent.toLowerCase();
    isIphone=0<=isIphone.indexOf("android")||0<=isIphone.indexOf("iphone");
    yt.width = 750,
    yt.height = 1334,
    yt.scaleMode = isIphone?"fixedwidth":"showall",
    yt.screenMode = "none",
    yt.alignV = "top",
    yt.alignH = "center",
    yt.startScene = window.compUrl + "comp/GameLoading.scene",
    yt.sceneRoot = "",
    yt.debug = !1,
    yt.stat = !1,
    yt.physicsDebug = !1,
    yt.exportSceneToJson = !0,
    yt.init();
    class _t extends fgui.GComponent {
        static createInstance() {
            return fgui.UIPackage.createObject("zs_example", "main")
        }
        onConstruct() {
            this.hint = this.getChild("hint"),
            this.btn = this.getChild("btn")
        }
    }
    _t.URL = "ui://41w9qxrst50h2";
    class It {
        static bindAll() {
            fgui.UIObjectFactory.setExtension(_t.URL, _t)
        }
    }
    class vt extends fgui.GComponent {
        static createInstance() {
            return fgui.UIPackage.createObject("export", "RecordPage")
        }
        onConstruct() {
            this.btn_share_area = this.getChildAt(2),
            this.btn_drop_share = this.getChildAt(3),
            this.btn_share = this.getChildAt(4),
            this.rewardNum = this.getChildAt(6),
            this.rewardGp = this.getChildAt(8),
            this.bg_record_group = this.getChildAt(9)
        }
    }
    vt.URL = "ui://shs9kog48p4y5";
    class St extends fgui.GButton {
        static createInstance() {
            return fgui.UIPackage.createObject("export", "btn_share")
        }
        onConstruct() {
            this.btn_share = this.getChildAt(0),
            this.t0 = this.getTransitionAt(0)
        }
    }
    St.URL = "ui://shs9kog48p4y7";
    class kt extends fgui.GButton {
        static createInstance() {
            return fgui.UIPackage.createObject("export", "btn_drop_share")
        }
        onConstruct() {
            this.btn_drop = this.getChildAt(0)
        }
    }
    kt.URL = "ui://shs9kog48p4y8";
    class bt extends fgui.GButton {
        static createInstance() {
            return fgui.UIPackage.createObject("export", "btn_more_game")
        }
        onConstruct() {
            this.btn_more_game = this.getChildAt(0)
        }
    }
    bt.URL = "ui://shs9kog48p4yb";
    class Pt extends fgui.GComponent {
        static createInstance() {
            return fgui.UIPackage.createObject("export", "KnockVideo")
        }
        onConstruct() {
            this.bar = this.getChildAt(5),
            this.btn_click = this.getChildAt(6)
        }
    }
    Pt.URL = "ui://shs9kog4gkalh";
    class Mt extends fgui.GButton {
        static createInstance() {
            return fgui.UIPackage.createObject("export", "btn_knock")
        }
        onConstruct() {
            this.btnKnock = this.getChildAt(0)
        }
    }
    Mt.URL = "ui://shs9kog4gkalj";
    class Gt {
        static bindAll() {
            fgui.UIObjectFactory.setExtension(vt.URL, vt),
            fgui.UIObjectFactory.setExtension(St.URL, St),
            fgui.UIObjectFactory.setExtension(kt.URL, kt),
            fgui.UIObjectFactory.setExtension(bt.URL, bt),
            fgui.UIObjectFactory.setExtension(Pt.URL, Pt),
            fgui.UIObjectFactory.setExtension(Mt.URL, Mt)
        }
    }
    class Tt extends zs.fgui.baseGeneric {
        constructor(t) {
            super(t),
            t && t instanceof bt && this.view.onClick(this, this.onClick)
        }
        apply() {
            let t = Laya.Browser.onIOS;
            return this.view.visible = !t,
            this
        }
        onClick() {
            zs.platform.async.showMoreGamesModalSimple().then(t =>{
                zs.log.debug("是否跳转了其它小游戏", t)
            }).
            catch(() =>{
                zs.log.debug("跳转了其它小游戏失败")
            })
        }
    }
    Tt.typeDefine = bt;
    class At extends zs.fgui.baseGeneric {
        constructor(t) {
            super(t),
            this.rewardValue = 0,
            this.closeEvent = null,
            t && t instanceof vt && (this.view.btn_drop_share.onClick(this, this.onDropClick), this.view.btn_share.onClick(this, this.onShareRecord), this.view.btn_share_area.onClick(this, this.onShareRecord))
        }
        setRewardEvent(t) {
            return this.event = t,
            this
        }
        setCloseHandler(t) {
            this.closeEvent = t
        }
        apply() {
            zs.platform.sync.recorderStop();
            let t = Q.zs_switch,
            e = Q.zs_button_delay_time;
            return t && e > 0 && (this.view.btn_drop_share.visible = !1, Laya.timer.once(e, this, () =>{
                this.view.btn_drop_share.visible = !0
            })),
            this
        }
        applyConfig(t) {
            return t && (t.event && this.setRewardEvent(t.event), t.rewardValue > 0 && (this.rewardValue = t.rewardValue, this.view.rewardGp.visible = !0, this.view.rewardNum.text = "x" + t.rewardValue)),
            this.apply()
        }
        onDropClick() {
            this.onCloseClick()
        }
        onCloseClick(t = !1) {
            this.view.visible = !1,
            Laya.stage.event("share_recore_result", t),
            this.closeEvent ? this.closeEvent.run() : zs.core.workflow.childNext()
        }
        onShareRecord() {
            this.setBtnTouchEnable(!1),
            zs.platform.sync.canShareRecorder() ? zs.platform.async.shareRecorderVideo().then(() =>{
                zs.log.debug("分享录屏成功！"),
                this.setBtnTouchEnable(!0),
                zs.core.workflow.applyEvent(this.event, [this.rewardValue]),
                this.onCloseClick(!0)
            }).
            catch(() =>{
                zs.log.debug("分享录屏失败！"),
                this.setBtnTouchEnable(!0),
                this.onCloseClick()
            }) : (zs.log.debug("录屏时间太短！"), this.setBtnTouchEnable(!0), this.onCloseClick())
        }
        setBtnTouchEnable(t) {
            this.view.btn_drop_share.touchable = t,
            this.view.btn_share.touchable = t
        }
    }
    At.typeDefine = vt;
    class xt extends zs.ui.EggKnock {
        constructor(t) {
            super(t),
            this.btnSrcOffset = 0,
            this.btnDstOffset = 370,
            this.progress = 0,
            t && t instanceof Pt && (this._progressBar = t.bar, this._btnKnock = t.btn_click)
        }
        get btnKnock() {
            return this._btnKnock
        }
        onAppShow() {}
        onAppHide() {}
        updateProgress(t) {
            this._progressBar.value = 100 * t
        }
        handleClick(t) {
            t >= this.bannerPoint && !this.isOpenAd && (this.isOpenAd = !0, zs.platform.async.playVideo().then(() =>{
                console.log("是实打实大苏打"),
                this.progress = 1
            }).
            catch(() =>{}))
        }
        onFinish() {
            super.onFinish(),
            zs.core.workflow.childNext()
        }
    }
    xt.typeDefine = Pt;
    class wt extends zs.ui.EggKnock {}
    class Et extends zs.workflow {
        constructor() {
            super(...arguments),
            this.exporterPack = "",
            this.inRecord = !1,
            this._shareRecord = null
        }
        static showPanel(t, e) {
            return zs.fgui.manager.show(!0, t, "Workflow_Export", e)
        }
        static getPanel() {
            return zs.fgui.manager.get("Workflow_Export", !0)
        }
        registe() {
            super.registe(),
            Gt.bindAll(),
            zs.fgui.configs.registeBase(Et.btn_more_game, Tt),
            zs.fgui.configs.registeBase(Et.share_record, At),
            zs.fgui.configs.registeBase(Et.knock_video_egg, xt),
            zs.fgui.configs.registeBase(Et.knock_video_egg_over, wt),
            zs.core.workflow.registeEvent(Et.event_start_video, this, this.playVideo),
            zs.core.workflow.registeEvent(Et.event_game_play, this, this.gamePlay),
            zs.core.workflow.registeEvent(Et.event_record_pause, this, this.recordPause),
            zs.core.workflow.registeEvent(Et.event_show_insert, this, this.showInterstitialAd),
            zs.core.workflow.registeEvent(Et.event_share_record_reward, this, this.onRecordShareReward),
            zs.core.workflow.registeEvent(Et.event_show_knock_video, this, this.showKnockVideo),
            zs.core.workflow.registeEvent(Et.event_check_egg, this, zs.ui.EggKnock.checkEggOpen),
            zs.core.workflow.registeEvent(Et.event_show_share_record, this, this.showShareRecordView),
            zs.core.workflow.registeEvent(Et.event_game_video, this, this.playGameVideo)
        }
        playVideo(t = {}) {
            console.error("谁调用了这个???"),
            !t.
            switch || Q[t.
            switch] ? zs.platform.async.playVideo().then(t =>{
                console.log("视频播放结果1", t),
                zs.core.workflow.childNext()
            }).
            catch(() =>{
                console.log("视频播放出错"),
                zs.core.workflow.childNext()
            }) : zs.core.workflow.childNext()
        }
        playGameVideo() {
            zs.platform.async.playVideo().then(t =>{
                console.log("视频播放结果1", t),
                zs.core.workflow.childNext()
            }).
            catch(() =>{
                console.log("视频播放出错"),
                zs.core.workflow.childNext()
            })
        }
        gamePlay() {
            if (this.inRecord) zs.platform.sync.recorderResume();
            else {
                let t = Q.zs_best_videotape_time / 1e3,
                e = Q.zs_hide_banner_switch;
                zs.platform.sync.recorderStart({
                    maxTime: t
                }),
                e && zs.platform.sync.showOnePixelBanner()
            }
        }
        recordPause() {
            zs.platform.sync.recorderPause()
        }
        showInterstitialAd() {
            var currentTime = Math.round(new Date().getTime() / 1000);
			if (window.ysdk && currentTime - Et.fullAdTime >= 60) {
				window.ysdk.adv.showFullscreenAdv({
					callbacks: {
						onOpen: function () {
							Et.fullAdTime = Math.round(new Date().getTime() / 1000);
                            Laya.SoundManager.muted = true;
							console.log(`fullscreen open`)
						},
						onClose: function (wasShown) {
                            Laya.SoundManager.muted = false;
							console.log(`fullscreen close`, wasShown)
							// some action after close
						},
						onError: function (error) {
							console.log(`fullscreen error`, error)
							// some action on error
						}
					}
				})
			}
        }
        onRecordShareReward(t) {
            console.log(t),
            V.GoldAdd(t),
            u.trackEvent("分享获得金铭牌"),
            zs.platform.sync.showToast(window.lang.getXGoldenbadges.replace("{x}", "x"+t))
        }
        showKnockVideo() {
            console.error("谁调用了这个???2"),
            zs.platform.async.playVideo().then(t =>{
                console.log("视频播放结果2", t),
                zs.core.workflow.childNext()
            }).
            catch(() =>{
                console.log("视频播放出错"),
                zs.core.workflow.childNext()
            })
        }
        showShareRecordView() {
            if (!this._shareRecord) return Et.showPanel(At).block(!0).fit().update(At, t =>{
                this._shareRecord = t,
                t.setCloseHandler(zs.Handler.create(this, () =>{
                    this.hideShareRecordView()
                })),
                t.applyConfig({})
            }).front()
        }
        hideShareRecordView() {
            this._shareRecord && Et.getPanel().detach(this._shareRecord),
            this._shareRecord = null
        }
    }
    Et.fullAdTime = 0;
    Et.PRODUCT_START = "PRODUCT_START",
    Et.PRODUCT_BEGIN = "PRODUCT_BEGIN",
    Et.GAME_HOME = "GAME_HOME",
    Et.PRODUCT_HOME_PLAY = "PRODUCT_HOME_PLAY",
    Et.GAME_PLAY = "GAME_PLAY",
    Et.PRODUCT_PLAY_END = "PRODUCT_PLAY_END",
    Et.GAME_END = "GAME_END",
    Et.PRODUCT_FINISH = "PRODUCT_FINISH",
    Et.btn_more_game = "btn_more_game",
    Et.share_record = "share_record",
    Et.knock_video_egg = "knock_video_egg",
    Et.knock_video_egg_over = "knock_video_egg_over",
    Et.event_start_video = "event_start_video",
    Et.event_game_play = "event_game_play",
    Et.event_show_insert = "event_show_insert",
    Et.event_share_record_reward = "event_share_record_reward",
    Et.event_show_knock_video = "event_show_knock_video",
    Et.event_show_share_record = "event_show_share_record",
    Et.event_game_video = "event_game_video",
    Et.event_check_egg = "event_check_egg",
    Et.event_record_pause = "event_record_pause";
    class Bt extends Laya.Script3D {
        constructor() {
            super(...arguments),
            this.mPosition = new Laya.Vector3,
            this.mRotation = new Laya.Vector3
        }
        get GetMainNode() {
            return this.mPrefab
        }
        get GetPosition() {
            return this.mPrefab.transform || console.log("这个预制件被销毁了为啥还要启用吖" + this.mPrefab.name),
            this.mPrefab.transform.position.clone()
        }
        set SetPosition(t) {
            this.mPrefab.transform.position = t.clone()
        }
        get GetRotate() {
            return this.mPrefab.transform.rotationEuler.clone()
        }
        set SetRotate(t) {
            this.mPrefab.transform.rotationEuler = t.clone()
        }
        get GetRotation() {
            return this.mPrefab.transform.rotation.clone()
        }
        set SetRotation(t) {
            this.mPrefab.transform.rotation = t.clone()
        }
        onAwake() {
            super.onAwake(),
            this.mPrefab = this.owner,
            this.mPosition = this.mPrefab.transform.position.clone(),
            this.mRotation = this.mPrefab.transform.rotationEuler.clone()
        }
        onDisable() {
            super.onDisable(),
            Laya.Tween.clearAll(this.GetMainNode.transform.position),
            this.GetMainNode.timer.clearAll(this),
            this.owner.timer.clearAll(this)
        }
        Remove() {
            this.mPrefab.removeSelf(),
            this.mPrefab.destroy(!0),
            this.destroy()
        }
        UpdateObj() {}
    }
    class Dt extends Bt {
        constructor() {
            super(...arguments),
            this.offsePos = new Laya.Vector3,
            this.offseRot = new Laya.Vector3,
            this.speed = 5,
            this.effectWinList = [],
            this.shakeTime = 0,
            this.shakeAmount = 0,
            this.shakeTime_all = 0
        }
        get GetCamera() {
            return this.camera
        }
        get GetCameraNode() {
            return this.cameraNode
        }
        get GetCameraPoint() {
            return this.camera.transform.position.clone()
        }
        set SetTarget(t) {
            this.target = t,
            this.target && (this.SetPosition = this.target.transform.position, this.offsePos = new Laya.Vector3(this.target.transform.position.x - this.GetPosition.x, this.target.transform.position.y - this.GetPosition.y, this.target.transform.position.z - this.GetPosition.z))
        }
        onAwake() {
            super.onAwake(),
            this.home = this.mPrefab.getChildByName("Home"),
            this.game = this.mPrefab.getChildByName("Game"),
            this.cameraNode = this.GetMainNode.getChildByName("cameraNode"),
            this.camera = this.cameraNode.getChildByName("Main Camera"),
            this.saveSize = this.camera.orthographicVerticalSize,
            this.cameraType = t.None;
            for (let t = 0; t < this.cameraNode.numChildren; t++) this.cameraNode.getChildAt(t).name.indexOf("ef_ljxf_win") >= 0 && this.effectWinList.push(this.cameraNode.getChildAt(t));
            this.ChangeCameraType(t.Home)
        }
        onLateUpdate() {
            if (this.shakeTime > 0) {
                if (this.shakeTime -= Laya.timer.delta, this.shakeTime > 0) {
                    let t = Math.random() * Math.PI,
                    e = 2 * Math.random() * Math.PI,
                    i = new Laya.Vector3(Math.sin(t) * Math.cos(e), Math.sin(t) * Math.sin(e), Math.cos(t));
                    Laya.Vector3.scale(i, this.shakeAmount * Math.sin(this.shakeTime / this.shakeTime_all * Math.PI), i);
                    let a = this.camera.transform.position;
                    Laya.Vector3.add(this.camera.transform.position, i, i),
                    Laya.Vector3.lerp(a, i, 2 * Laya.timer.delta / 1e3, i),
                    this.camera.transform.position = i
                }
            } else this.camera.transform.localPosition = new Laya.Vector3(0, 0, 0)
        }
        UpdateObj() {
            null != this.target && this.cameraDirectFollow()
        }
        ShowWinEffect(t) {
            this.effectWinList.length > 0 && this.effectWinList.forEach(e =>{
                e.active = t
            })
        }
        vibrate_Small() {
            this.shakeTime > 0 || (this.shakeAmount = 1, this.shakeTime_all = this.shakeTime = 200)
        }
        CutsceneAni(t = 1e3, e = 0) {
            let i = e > q.Instance.mainScene.GetMap.enemyGatheringList.length - 1 ? q.Instance.mainScene.GetMap.playerCtl.GetPosition: q.Instance.mainScene.GetMap.enemyGatheringList[e].land.transform.position;
            Laya.Tween.to(this.mPrefab.transform.position, {
                x: i.x,
                z: i.z,
                update: new Laya.Handler(this, () =>{
                    this.SetPosition = this.mPrefab.transform.position
                })
            },
            t, Laya.Ease.linearNone, Laya.Handler.create(this, () =>{
                this.mPrefab.timer.once(200, this, () =>{++e > q.Instance.mainScene.GetMap.enemyGatheringList.length ? zs.core.workflow.childNext() : this.CutsceneAni(t, e)
                })
            }))
        }
        ChangeRotAddPos() {
            this.home.transform.localPosition = new Laya.Vector3(q.Instance.lastLevelData.camera_location[0], q.Instance.lastLevelData.camera_location[1], q.Instance.lastLevelData.camera_location[2]),
            this.home.transform.localRotationEuler = new Laya.Vector3(q.Instance.lastLevelData.camera_rotation[0], q.Instance.lastLevelData.camera_rotation[1], q.Instance.lastLevelData.camera_rotation[2]),
            this.saveSize = this.camera.orthographicVerticalSize = 2 * q.Instance.lastLevelData.camera_size
        }
        ChangeCameraType(e, i = .016, a = null) {
            if (this.cameraType == e) return;
            let s;
            switch (this.cameraType = e, i *= 1e3, this.cameraType) {
            case t.Home:
                s = this.home;
                break;
            case t.Game:
                s = this.game
            }
            Laya.Tween.to(this.cameraNode.transform, {
                localPositionX: s.transform.localPositionX,
                localPositionY: s.transform.localPositionY,
                localPositionZ: s.transform.localPositionZ,
                localRotationEulerX: s.transform.localRotationEulerX,
                localRotationEulerY: s.transform.localRotationEulerY,
                localRotationEulerZ: s.transform.localRotationEulerZ
            },
            i, Laya.Ease.linearNone, Laya.Handler.create(this, () =>{
                a && a()
            }))
        }
        cameraDirectFollow() {
            let t = new Laya.Vector3(0, 0, 0);
            Laya.Vector3.add(new Laya.Vector3(this.target.transform.position.x, this.target.transform.position.y, this.target.transform.position.z), this.offsePos, t);
            let e = new Laya.Vector3(0, 0, 0);
            Laya.Vector3.lerp(this.GetPosition, t, 1, e),
            this.SetPosition = e
        }
        cameraSlowFollow() {
            if (!this.target) return;
            let t = new Laya.Vector3(0, 0, 0);
            Laya.Vector3.add(this.target.transform.position, this.offsePos, t);
            let e = new Laya.Vector3(0, 0, 0);
            Laya.Vector3.subtract(t, this.GetPosition, e),
            Laya.Vector3.lerp(new Laya.Vector3(0, 0, 0), e, q.Instance.mainScene.delat * this.speed, e),
            Laya.Vector3.add(this.GetPosition, e, e),
            this.SetPosition = new Laya.Vector3(e.x, e.y, e.z)
        }
        CameraToMove(t, e, i = 1e3) {
            Laya.Tween.to(this.mPrefab.transform.position, {
                x: t.x,
                z: t.z,
                update: new Laya.Handler(this, () =>{
                    this.SetPosition = this.mPrefab.transform.position
                })
            },
            i, Laya.Ease.linearNone, e)
        }
        CameraOrthographicVerticalSize(t) {
            Laya.Tween.to(this.camera, {
                orthographicVerticalSize: t ? this.saveSize: this.saveSize + 5,
                update: new Laya.Handler(this, () =>{})
            },
            300)
        }
    }
    var Nt, Rt, Ot = Laya.Vector3;
    class Vt {
        constructor(t) {
            this.center = new Laya.Vector3,
            this.rotatioin = new Laya.Quaternion,
            this.extents = new Ot,
            this.obj = t,
            t && this.update()
        }
        update() {
            this.obj && (this.rotatioin = this.obj.transform.rotation.clone(), this.center = this.obj.transform.position.clone(), this.extents = this.obj.transform.getWorldLossyScale().clone(), this.extents.x /= 2, this.extents.y /= 2, this.extents.z /= 2)
        }
        set(t, e, i) {
            this.rotatioin = e.clone(),
            this.center = t.clone(),
            this.extents = i.clone(),
            this.extents.x /= 2,
            this.extents.y /= 2,
            this.extents.z /= 2
        }
    }
    class zt {
        static IntersectOBB(t, e, i = null) {
            t.update(),
            e.update(),
            t.extents[0] = t.extents.x,
            t.extents[1] = t.extents.y,
            t.extents[2] = t.extents.z,
            e.extents[0] = e.extents.x,
            e.extents[1] = e.extents.y,
            e.extents[2] = e.extents.z,
            Ot.subtract(e.center, i || t.center, this._v),
            Ot.transformQuat(this.UnitX, t.rotatioin, this._VAx),
            Ot.transformQuat(this.UnitY, t.rotatioin, this._VAy),
            Ot.transformQuat(this.UnitZ, t.rotatioin, this._VAz),
            this._VA[0] = this._VAx,
            this._VA[1] = this._VAy,
            this._VA[2] = this._VAz,
            Ot.transformQuat(this.UnitX, e.rotatioin, this._VBx),
            Ot.transformQuat(this.UnitY, e.rotatioin, this._VBy),
            Ot.transformQuat(this.UnitZ, e.rotatioin, this._VBz),
            this._VB[0] = this._VBx,
            this._VB[1] = this._VBy,
            this._VB[2] = this._VBz;
            let a,
            s,
            n,
            o,
            r,
            h = Ot.dot(this._v, this._VAx),
            l = Ot.dot(this._v, this._VAy),
            c = Ot.dot(this._v, this._VAz);
            this._T.setValue(h, l, c),
            this._T[0] = h,
            this._T[1] = l,
            this._T[2] = c;
            for (let t = 0; t < 3; t++) for (let e = 0; e < 3; e++) o = Ot.dot(this._VA[t], this._VB[e]),
            this._R[t][e] = o,
            this._FR[t][e] = 1e-6 + Math.abs(o);
            for (let i = 0; i < 3; i++) if (a = t.extents[i], r = this._FR[i], s = e.extents.x * r[0] + e.extents.y * r[1] + e.extents.z * r[2], (n = Math.abs(this._T[i])) > a + s) return ! 1;
            for (let i = 0; i < 3; i++) if (a = t.extents.x * this._FR[0][i] + t.extents.y * this._FR[1][i] + t.extents.z * this._FR[2][i], s = e.extents[i], (n = Math.abs(this._T[0] * this._R[0][i] + this._T[1] * this._R[1][i] + this._T[2] * this._R[2][i])) > a + s) return ! 1;
            return a = t.extents[1] * this._FR[2][0] + t.extents[2] * this._FR[1][0],
            s = e.extents[1] * this._FR[0][2] + e.extents[2] * this._FR[0][1],
            !((n = Math.abs(this._T[2] * this._R[1][0] - this._T[1] * this._R[2][0])) > a + s) && (a = t.extents[1] * this._FR[2][1] + t.extents[2] * this._FR[1][1], s = e.extents[0] * this._FR[0][2] + e.extents[2] * this._FR[0][0], !((n = Math.abs(this._T[2] * this._R[1][1] - this._T[1] * this._R[2][1])) > a + s) && (a = t.extents[1] * this._FR[2][2] + t.extents[2] * this._FR[1][2], s = e.extents[0] * this._FR[0][1] + e.extents[1] * this._FR[0][0], !((n = Math.abs(this._T[2] * this._R[1][2] - this._T[1] * this._R[2][2])) > a + s) && (a = t.extents[0] * this._FR[2][0] + t.extents[2] * this._FR[0][0], s = e.extents[1] * this._FR[1][2] + e.extents[2] * this._FR[1][1], !((n = Math.abs(this._T[0] * this._R[2][0] - this._T[2] * this._R[0][0])) > a + s) && (a = t.extents[0] * this._FR[2][1] + t.extents[2] * this._FR[0][1], s = e.extents[0] * this._FR[1][2] + e.extents[2] * this._FR[1][0], !((n = Math.abs(this._T[0] * this._R[2][1] - this._T[2] * this._R[0][1])) > a + s) && (a = t.extents[0] * this._FR[2][2] + t.extents[2] * this._FR[0][2], s = e.extents[0] * this._FR[1][1] + e.extents[1] * this._FR[1][0], !((n = Math.abs(this._T[0] * this._R[2][2] - this._T[2] * this._R[0][2])) > a + s) && (a = t.extents[0] * this._FR[1][0] + t.extents[1] * this._FR[0][0], s = e.extents[1] * this._FR[2][2] + e.extents[2] * this._FR[2][1], !((n = Math.abs(this._T[1] * this._R[0][0] - this._T[0] * this._R[1][0])) > a + s) && (a = t.extents[0] * this._FR[1][1] + t.extents[1] * this._FR[0][1], s = e.extents[0] * this._FR[2][2] + e.extents[2] * this._FR[2][0], !((n = Math.abs(this._T[1] * this._R[0][1] - this._T[0] * this._R[1][1])) > a + s) && (a = t.extents[0] * this._FR[1][2] + t.extents[1] * this._FR[0][2], s = e.extents[0] * this._FR[2][1] + e.extents[1] * this._FR[2][0], !((n = Math.abs(this._T[1] * this._R[0][2] - this._T[0] * this._R[1][2])) > a + s)))))))))
        }
    }
    zt._v = new Ot,
    zt._VAx = new Ot,
    zt._VAy = new Ot,
    zt._VAz = new Ot,
    zt._VBx = new Ot,
    zt._VBy = new Ot,
    zt._VBz = new Ot,
    zt._VA = new Array,
    zt._VB = new Array,
    zt._T = new Ot,
    zt._R = [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
    zt._FR = [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
    zt.UnitX = new Ot(1, 0, 0),
    zt.UnitY = new Ot(0, 1, 0),
    zt.UnitZ = new Ot(0, 0, 1);
    class Ht {
        constructor(t) {
            this.action = t,
            this.target = t.target
        }
    }
    class Ut extends Ht {
        Enter() {
            null != this.target.idleAni && p.changeAni(this.target.ani, this.target.idleAni),
            this.TargetSelect()
        }
        Execute() {
            this.TargetSelect()
        }
        Exit() {}
        TargetSelect() {
            switch (this.target.roleCamp) {
            case n.FightingUnit:
                this.target.isActiva && this.target.SelectAttackTarget();
                break;
            case n.Player:
                this.target.headCtl && this.target.headCtl.isAttackUnits && this.target.SelectAttackTarget()
            }
        }
    }
    class jt extends Ht {
        Enter() {
            switch (p.changeAni(this.target.ani, this.target.moveAni), this.target.roleCamp) {
            case n.FightingUnit:
                if (!this.target.isActiva) return;
                this.target.SelectAttackTarget(),
                this.target.IsTargetNull() && this.action.ChangeAction(e.Standby)
            }
        }
        Execute() {
            switch (this.target.ChangeMoveForWorld(), this.target.Move(), this.target.roleCamp) {
            case n.FightingUnit:
                if (!this.target.isActiva) return;
                this.target.SelectAttackTarget(),
                this.target.IsTargetNull() && this.action.ChangeAction(e.Standby)
            }
        }
        Exit() {}
    }
    class qt extends Ht {
        Enter() {
            this.target.DieEnter(),
            this.isUpdate = !1,
            p.changeAni(this.target.ani, this.target.dieAni),
            this.target.dieAni ? this.target.GetMainNode.timer.once(1, this, () =>{
                this.isUpdate = !0
            }) : this.target.Die()
        }
        Execute() {
            this.isUpdate && p.isAniEnd(this.target.ani, this.target.dieAni) && (this.isUpdate = !1, this.target.Die())
        }
        Exit() {}
    }
    class Ft extends Ht {
        Enter() {}
        Execute() {}
        Exit() {}
    }
    class Jt extends Ht {
        Enter() {
            this.attackNum = 0,
            this.isUpdate = !1;
            let t = .5 * Math.random() * 1e3;
            this.target.GetMainNode.timer.once(t, this, () =>{
                if (this.target.IsTargetNull()) switch (this.target.roleCamp) {
                case n.FightingUnit:
                    switch (this.target.battleCamp) {
                    case o.Soldier:
                    case o.Tank:
                    case o.Zealot:
                    case o.Beetle:
                    case o.DragonKnight:
                    case o.Turret:
                        return void this.action.ChangeAction(e.Standby);
                    case o.Pyro:
                        if (this.target.SelectAttackTarget(), this.target.IsTargetNull()) return void this.action.ChangeAction(e.Standby)
                    }
                    break;
                case n.Player:
                    return void this.action.ChangeAction(e.Standby)
                }
                this.target.AttackEnter(),
                this.target.attackAni && (p.changeAni(this.target.ani, this.target.attackAni), this.target.GetMainNode.timer.once(1, this, () =>{
                    this.isUpdate = !0
                }))
            })
        }
        Execute() {
            if (this.target.IsTargetNull()) switch (this.target.roleCamp) {
            case n.FightingUnit:
                switch (this.target.battleCamp) {
                case o.Soldier:
                case o.Tank:
                case o.Zealot:
                case o.Beetle:
                case o.DragonKnight:
                case o.Turret:
                    return void this.action.ChangeAction(e.Standby);
                case o.Pyro:
                    return void this.target.SelectAttackTarget()
                }
                break;
            case n.Player:
                return void this.action.ChangeAction(e.Standby)
            }
            this.isUpdate && (this.target.AttackUpdate(), this.target.battleCamp != o.Soldier && this.target.battleCamp != o.Zealot && this.target.battleCamp != o.Beetle && this.target.battleCamp != o.DragonKnight && this.target.battleCamp != o.Turret && this.target.roleCamp != n.Player || (this.attackNum < this.target.attackStage.length && p.isAniValue(this.target.ani, this.target.attackAni, this.target.attackStage[this.attackNum]) && (this.target.AttackStage(this.attackNum), this.attackNum += 1), p.isAniEnd(this.target.ani, this.target.attackAni) && (this.isUpdate = !1, this.action.ChangeAction(e.Standby))))
        }
        Exit() {
            this.isUpdate = !1,
            this.target.AttackEnd(),
            this.target.GetMainNode.timer.clearAll(this)
        }
    }
    class Wt extends Ht {
        Enter() {
            this.isUpdate = !1,
            this.target.Rage(),
            p.changeAni(this.target.ani, "baozou") ? this.target.GetMainNode.timer.once(1, this, () =>{
                this.isUpdate = !0
            }) : this.EndChange()
        }
        Execute() {
            this.isUpdate && p.isAniEnd(this.target.ani, "baozou") && this.EndChange()
        }
        Exit() {}
        EndChange() {
            this.isUpdate = !1,
            this.action.ChangeAction(e.Standby)
        }
    }
    class Yt extends Ht {
        Enter() {
            this.attackNum = 0,
            this.isUpdate = !1;
            let t = .2 * Math.random() * 1e3;
            this.target.GetMainNode.timer.once(t, this, () =>{
                if (this.target.IsTargetNull()) switch (this.target.roleCamp) {
                case n.FightingUnit:
                    switch (this.target.battleCamp) {
                    case o.Soldier:
                    case o.Tank:
                    case o.Zealot:
                    case o.Beetle:
                    case o.DragonKnight:
                    case o.Turret:
                        return void this.action.ChangeAction(e.Standby);
                    case o.Pyro:
                        if (this.target.SelectAttackTarget(), this.target.IsTargetNull()) return void this.action.ChangeAction(e.Standby)
                    }
                    break;
                case n.Player:
                    return void this.action.ChangeAction(e.Standby)
                }
                this.target.AttackEnter(),
                this.target.move_shoot && (p.changeAni(this.target.ani, this.target.move_shoot), this.target.GetMainNode.timer.once(1, this, () =>{
                    this.isUpdate = !0
                }))
            })
        }
        Execute() {
            if (this.target.IsTargetNull()) switch (this.target.roleCamp) {
            case n.FightingUnit:
                switch (this.target.battleCamp) {
                case o.Soldier:
                case o.Tank:
                case o.Zealot:
                case o.Beetle:
                case o.DragonKnight:
                case o.Turret:
                    return void this.action.ChangeAction(e.Standby);
                case o.Pyro:
                    return void this.target.SelectAttackTarget()
                }
                break;
            case n.Player:
                return void this.action.ChangeAction(e.Standby)
            }
            this.isUpdate && (this.target.AttackUpdate(), this.target.battleCamp != o.Soldier && this.target.battleCamp != o.Zealot && this.target.battleCamp != o.Beetle && this.target.battleCamp != o.DragonKnight && this.target.battleCamp != o.Turret && this.target.roleCamp != n.Player || (this.attackNum < this.target.attackStage.length && p.isAniValue(this.target.ani, this.target.move_shoot, this.target.attackStage[this.attackNum]) && (this.target.AttackStage(this.attackNum), this.attackNum += 1), p.isAniEnd(this.target.ani, this.target.move_shoot) && (this.isUpdate = !1, this.target.battleCamp == o.Soldier && (this.target.isStartAtk = !1), this.action.ChangeAction(e.Move))))
        }
        Exit() {
            this.isUpdate = !1,
            this.target.AttackEnd(),
            this.target.GetMainNode.timer.clearAll(this)
        }
    }
    class Kt {
        constructor(t, e) {
            this.target = t,
            this.ChangeAction(e)
        }
        ChangeAction(t, i = !1) {
            if (!i && this.state == t) return;
            let a;
            switch (this.lastState = this.state, this.state = t, t) {
            case e.Standby:
                a = new Ut(this);
                break;
            case e.Move:
                a = new jt(this);
                break;
            case e.Attack:
                a = new Jt(this);
                break;
            case e.Mania:
                a = new Wt(this);
                break;
            case e.Die:
                a = new qt(this);
                break;
            case e.Finish:
                a = new Ft(this);
                break;
            case e.Moveattack:
                a = new Yt(this)
            }
            this.action && this.ExitAction(),
            this.action = null,
            this.action = a,
            this.action.Enter()
        }
        UpdateAction() {
            this.action.Execute()
        }
        ExitAction() {
            this.action.Exit()
        }
    }
    class Xt {
        static GetJudgeDistances(t, e, i) {
            return Laya.Vector3.distance(t, e) < i
        }
        static IsDistances(t, e, i) {
            return Laya.Vector3.distanceSquared(t, e) <= Math.pow(i, 2)
        }
        static GetSprite3DCameraViewport(t, e) {
            var i = e,
            a = null;
            return a = i.skinnedMeshRenderer ? i.skinnedMeshRenderer.bounds._boundBox: (i = e)._render.bounds._boundBox,
            t.boundFrustum.intersects(a)
        }
        static GetLookAtEuler(t, e) {
            var i = new Laya.Vector3;
            Laya.Vector3.subtract(e, t, i);
            var a = new Laya.Quaternion;
            return Laya.Quaternion.rotationLookAt(i, new Laya.Vector3(0, 1, 0), a),
            a
        }
        static Angle1(t, e) {
            var i = new Laya.Vector3,
            a = new Laya.Vector3;
            return Laya.Vector3.normalize(t, i),
            Laya.Vector3.normalize(e, a),
            Math.acos(Laya.Vector3.dot(i, a)) * (180 / Math.PI)
        }
        static Vector2Dot(t, e) {
            return t.x * e.x + t.y * e.y
        }
        static Angle2(t, e) {
            var i = (t.x * e.x + t.y * e.y + t.z * e.z) / (Math.sqrt(t.x * t.x + t.y * t.y + t.z * t.z) * Math.sqrt(e.x * e.x + e.y * e.y + e.z * e.z));
            return i < -1 && (i = -1),
            i > 1 && (i = 1),
            180 * Math.acos(i) / Math.PI
        }
        static RayPointChange3DPoint(t, e, i, a) {
            let s = t.clone(),
            n = new Laya.Vector3(t.x - e.x, t.y - e.y, t.z - e.z);
            Laya.Vector3.normalize(n, n);
            let o = t.z - i.z,
            r = Math.abs(a.y - t.y) * (1 / Math.abs(n.y)),
            h = 0;
            return h = o > 0 ? 1 : -1,
            s.y = a.y,
            s.z += r * n.z * h,
            s.x += r * n.x * h,
            s
        }
        static creatorBezierPoint(t, e, i, a) {
            for (var s = [], n = 0, o = 0; o < a; o++) {
                let o = Math.pow(1 - n, 2) * t.x + 2 * n * (1 - n) * e.x + Math.pow(n, 2) * i.x,
                r = Math.pow(1 - n, 2) * t.y + 2 * n * (1 - n) * e.y + Math.pow(n, 2) * i.y,
                h = Math.pow(1 - n, 2) * t.z + 2 * n * (1 - n) * e.z + Math.pow(n, 2) * i.z;
                s.push(new Laya.Vector3(o, r, h)),
                n += 1 / a
            }
            return s
        }
    }
    class Qt extends Bt {
        constructor() {
            super(...arguments),
            this.capmIndex = -1,
            this.isStartAtk = !1,
            this.elite = !1,
            this.action = null,
            this.forWorldValue = 1,
            this.attackStage = [],
            this.indexTarget = -1
        }
        GetSpeed() {
            let t = this.speed;
            return this.isRage && (t += this.speed * (_.roleData.baozou_speed - 1)),
            this.isRoleBuff && (t += this.speed * (V.grade.speed - 1)),
            t
        }
        GetAttack() {
            let t = this.attack;
            return this.isRage && (t += this.attack * (_.roleData.baozou_atk - 1)),
            this.isRoleBuff && (t += this.attack * (V.grade.attack - 1)),
            t
        }
        GetMaxHp() {
            return this.maxHp
        }
        Rage() {
            this.shield = _.roleData.baozou_HP,
            this.isRage = !0
        }
        RageEnd() {
            this.shield = 0,
            this.isRage = !1
        }
        get IsDie() {
            return null == this.action || this.action.state == e.Die
        }
        SetCamp(t) {
            this.camp = t
        }
        onAwake() {
            super.onAwake(),
            this.model = this.mPrefab.getChildAt(0),
            this.model && (this.ani = this.model.getComponent(Laya.Animator), this.boxModel = this.mPrefab.getChildByName("box"), this.box = new Vt(this.boxModel))
        }
        Reset() {
            this.speed = 10,
            this.maxHp = 100,
            this.attackInterval = 0,
            this.lastAttackTime = 0,
            this.shield = 0,
            this.isAttack = !1,
            this.isActiva = !1,
            this.hp = this.maxHp,
            this.isRage = !1,
            this.isRoleBuff = !1,
            this.model && (this.action = new Kt(this, e.Standby))
        }
        onEnable() {
            super.onEnable()
        }
        onDisable() {
            super.onDisable()
        }
        UpdateObj() {
            super.UpdateObj(),
            null != this.action && this.action.UpdateAction()
        }
        Die() {}
        DieEnter() {}
        ChangeHp(t, i = -1) {
            if (this.indexTarget = i, null != t && NaN != t && null != t || (t = -1), t < 0 && this.shield > 0) {
                if (this.shield += t, t = this.shield, this.shield >= 0) return;
                this.shield = 0
            }
            this.hp += t,
            this.hp <= 0 ? (this.hp = 0, this.IsDie || this.action.ChangeAction(e.Die)) : this.hp > this.maxHp && (this.hp = this.maxHp)
        }
        ChangeMoveForWorld() {
            var t = new Laya.Vector3(0, this.thouchAngel, 0),
            e = 180 / Math.PI,
            i = new Laya.Quaternion;
            Laya.Quaternion.createFromYawPitchRoll(t.y / e, t.x / e, t.z / e, i);
            var a = new Laya.Quaternion;
            Laya.Quaternion.slerp(this.GetMainNode.transform.rotation, i, this.forWorldValue, a),
            this.GetMainNode.transform.rotation = a
        }
        Move() {
            let t = Math.ceil(Math.abs(this.GetSpeed() * q.Instance.mainScene.delat / .1)),
            e = this.GetSpeed() * q.Instance.mainScene.delat / t;
            for (let i = 0; i < t; i++) {
                let t = new Laya.Vector3;
                this.mPrefab.transform.getForward(t),
                Laya.Vector3.normalize(t, t);
                let i = new Laya.Vector3(t.x * e, 0, t.z * e);
                this.ChangePos(i)
            }
        }
        ChangePos(t) {
            if (null != this) {
                if (this.DetectionObs(t), this.CollisionCampObj(t), V.starState == d.moon) {
                    let e = q.Instance.mainScene.GetMap.obsLineArray;
                    if (e.length > 0) {
                        let i = {
                            x: this.GetPosition.x + t.x,
                            y: this.GetPosition.z + t.z
                        };
                        if (!y.pointInPolygon(i, e)) return
                    }
                }
                this.SetPosition = new Laya.Vector3(this.GetPosition.x + t.x, this.GetPosition.y, this.GetPosition.z + t.z)
            }
        }
        DetectionObs(t) {
            if (this.roleCamp == n.Player && this.isActiva) if (V.starState == d.moon) {
                let e = new Laya.Vector2(this.GetPosition.x, this.GetPosition.z),
                i = new Laya.Vector2(this.GetPosition.x + t.x, this.GetPosition.z + t.z),
                a = q.Instance.mainScene.GetMap.obsLineArray;
                for (let s = 0; s < a.length; s++) {
                    let n = a[s],
                    o = a[0];
                    if (s < a.length - 1 && (o = a[s + 1]), y.intersect_in(e, i, n, o)) {
                        let e = n.x - o.x,
                        i = n.y - o.y,
                        a = {
                            x: t.x,
                            y: t.z
                        },
                        s = y.vectorAngle({
                            x: e,
                            y: i
                        },
                        a),
                        r = y.vectorAngle({
                            x: -e,
                            y: -i
                        },
                        a),
                        h = Laya.Vector3.scalarLength(t),
                        l = new Laya.Vector3;
                        return r > 0 ? l = new Laya.Vector3( - e, 0, -i) : s > 0 && (l = new Laya.Vector3(e, 0, i)),
                        Laya.Vector3.normalize(l, l),
                        Laya.Vector3.scale(l, h, l),
                        t.x = l.x,
                        void(t.z = l.z)
                    }
                }
            } else {
                let e = new Laya.Vector3(this.box.center.x, this.box.center.y, this.box.center.z + t.z),
                i = new Laya.Vector3(this.box.center.x + t.x, this.box.center.y, this.box.center.z);
                if (q.Instance.mainScene.GetMap.obsList.length > 0) {
                    for (let a = q.Instance.mainScene.GetMap.obsList.length - 1; a >= 0 && (!Xt.IsDistances(this.GetPosition, q.Instance.mainScene.GetMap.obsList[a].GetPosition, 10) || (zt.IntersectOBB(this.box, q.Instance.mainScene.GetMap.obsList[a].box, i) && (t.x = 0), zt.IntersectOBB(this.box, q.Instance.mainScene.GetMap.obsList[a].box, e) && (t.z = 0), 0 != t.z || 0 != t.x)); a--);
                    for (let t = q.Instance.mainScene.GetMap.obsList.length - 1; t >= 0; t--) if (Xt.IsDistances(this.GetPosition, q.Instance.mainScene.GetMap.obsList[t].GetPosition, 10) && zt.IntersectOBB(this.box, q.Instance.mainScene.GetMap.obsList[t].box)) {
                        let e = new Laya.Vector3(this.GetPosition.x - q.Instance.mainScene.GetMap.obsList[t].GetPosition.x, 0, this.GetPosition.z - q.Instance.mainScene.GetMap.obsList[t].GetPosition.z);
                        Laya.Vector3.normalize(e, e);
                        let i = .1,
                        a = new Laya.Vector3(i * e.x, 0, i * e.z);
                        this.SetPosition = new Laya.Vector3(this.GetPosition.x + a.x, this.GetPosition.y, this.GetPosition.z + a.z);
                        break
                    }
                }
            }
        }
        IsChoosable(t) {
            return ! (this == t || this.IsDie || !this.isActiva) && (t.battleCamp == o.Medic || this.camp != t.camp)
        }
        IsCollision(t) {
            return ! (this == t || this.IsDie || !this.isActiva || !Xt.IsDistances(this.GetPosition, t.GetPosition, 5))
        }
        CollisionCampObj(t) {
            if (this.isActiva && !this.IsDie) switch (this.roleCamp) {
            case n.Player:
                break;
            case n.FightingUnit:
                switch (this.camp) {
                case a.Player:
                    this.CollisionPlayer();
                    break;
                case a.Enermy:
                    this.CollisionEnemy(t)
                }
            }
        }
        CollisionPlayer() {
            for (let t = 0; t < q.Instance.mainScene.GetMap.headquartersList.length; t++) {
                for (let e = 0; e < q.Instance.mainScene.GetMap.headquartersList[t].dispatchTroopsCtlList.length; e++) if (q.Instance.mainScene.GetMap.headquartersList[t].dispatchTroopsCtlList[e].attackList.length > 0) for (let i = q.Instance.mainScene.GetMap.headquartersList[t].dispatchTroopsCtlList[e].attackList.length - 1; i >= 0; i--) q.Instance.mainScene.GetMap.headquartersList[t].dispatchTroopsCtlList[e].attackList[i].IsCollision(this) && Xt.IsDistances(this.GetPosition, q.Instance.mainScene.GetMap.headquartersList[t].dispatchTroopsCtlList[e].attackList[i].GetPosition, 1) && this.Extrusion(q.Instance.mainScene.GetMap.headquartersList[t].dispatchTroopsCtlList[e].attackList[i]);
                for (let e = 0; e < q.Instance.mainScene.GetMap.headquartersList[t].flamingTroopsCtlList.length; e++) if (q.Instance.mainScene.GetMap.headquartersList[t].flamingTroopsCtlList[e].attackList.length > 0) for (let i = q.Instance.mainScene.GetMap.headquartersList[t].flamingTroopsCtlList[e].attackList.length - 1; i >= 0; i--) q.Instance.mainScene.GetMap.headquartersList[t].flamingTroopsCtlList[e].attackList[i].IsCollision(this) && Xt.IsDistances(this.GetPosition, q.Instance.mainScene.GetMap.headquartersList[t].flamingTroopsCtlList[e].attackList[i].GetPosition, 1) && this.Extrusion(q.Instance.mainScene.GetMap.headquartersList[t].flamingTroopsCtlList[e].attackList[i]);
                for (let e = 0; e < q.Instance.mainScene.GetMap.headquartersList[t].tankBattalionList.length; e++) if (q.Instance.mainScene.GetMap.headquartersList[t].tankBattalionList[e].attackList.length > 0) for (let i = q.Instance.mainScene.GetMap.headquartersList[t].tankBattalionList[e].attackList.length - 1; i >= 0; i--) q.Instance.mainScene.GetMap.headquartersList[t].tankBattalionList[e].attackList[i].IsCollision(this) && zt.IntersectOBB(this.box, q.Instance.mainScene.GetMap.headquartersList[t].tankBattalionList[e].attackList[i].box) && this.Extrusion(q.Instance.mainScene.GetMap.headquartersList[t].tankBattalionList[e].attackList[i]);
                for (let e = 0; e < q.Instance.mainScene.GetMap.headquartersList[t].medicalTroopsCtlList.length; e++) if (q.Instance.mainScene.GetMap.headquartersList[t].medicalTroopsCtlList[e].attackList.length > 0) for (let i = q.Instance.mainScene.GetMap.headquartersList[t].medicalTroopsCtlList[e].attackList.length - 1; i >= 0; i--) q.Instance.mainScene.GetMap.headquartersList[t].medicalTroopsCtlList[e].attackList[i].IsCollision(this) && zt.IntersectOBB(this.box, q.Instance.mainScene.GetMap.headquartersList[t].medicalTroopsCtlList[e].attackList[i].box) && this.Extrusion(q.Instance.mainScene.GetMap.headquartersList[t].medicalTroopsCtlList[e].attackList[i])
            }
        }
        CollisionEnemy(t) {}
        Extrusion(t) {
            if (t.battleCamp == o.Turret) return;
            let e = new Laya.Vector3(t.GetPosition.x - this.GetPosition.x, 0, t.GetPosition.z - this.GetPosition.z);
            switch (Laya.Vector3.normalize(e, e), t.camp) {
            case a.Enermy:
                let i = t;
                if (!i.gathering) return;
                let s = new Laya.Vector3(this.box.center.x, this.box.center.y, this.box.center.z + e.z),
                n = new Laya.Vector3(this.box.center.x + e.x, this.box.center.y, this.box.center.z);
                if (i.gathering.obsList.length > 0) for (let t = 0; t < i.gathering.obsList.length; t++) if (Xt.IsDistances(this.GetPosition, i.gathering.obsList[t].center, 17.5) && (zt.IntersectOBB(this.box, i.gathering.obsList[t], n) || zt.IntersectOBB(this.box, i.gathering.obsList[t], s))) {
                    e.z = 0,
                    e.x = 0;
                    break
                }
            }
            t.SetPosition = new Laya.Vector3(t.GetPosition.x + .1 * e.x, t.GetPosition.y, t.GetPosition.z + .1 * e.z)
        }
        SelectAttackTarget() {}
        AttackEnter() {}
        AttackUpdate() {}
        AttackEnd() {}
        AttackStage(t) {}
        SearchAttackRole() {
            return console.log("筛选对象"),
            null
        }
        IsTargetNull() {
            return ! (this.attackTarget && this.attackTarget.owner && !this.attackTarget.IsDie) && (this.attackTarget = null, !0)
        }
        Remove() {
            this.box = null,
            super.Remove()
        }
    }
    class Zt {
        static BaseURL(t, e) {
            let i = this.baseUrl3D + t;
            return null != e && e.trim().length > 0 && (i += "." + e),
            i
        }
        static GetResSprite3D(t) {
            if (!t) return;
            let e = Laya.loader.getRes(t);
            if (e) return e;
            Laya.Sprite3D.load(t, Laya.Handler.create(null,
            function(t) {
                return t
            }))
        }
        static LoadResoures(t, e) {
            t && Laya.loader.create(t, e || null)
        }
        static GetResoures(t) {
            if (t) return Laya.loader.getRes(t)
        }
        static CloneSprite3D(t) {
            if (!t) return;
            return Laya.Sprite3D.instantiate(t)
        }
    }
    Zt.baseUrl3D = "3dres/Conventional/";
    class $t {
        static get getPoolPrefabs() {
            return null == this.poolPrefabs && (this.poolPrefabs = {}),
            this.poolPrefabs
        }
        static InitPoolPrefab(t) {
            t && (this.ContainsKey(t) || (this.poolPrefabs[t] = new Array))
        }
        static GetPoolPrefab(t, e, i) {
            if (!this.ContainsKey(t) || this.poolPrefabs[t].length <= 0) return Laya.Sprite3D.instantiate(e, i, !1);
            let a = this.poolPrefabs[t].pop();
            return a ? null == a.transform || a.destroyed ? (a.destroy(), Laya.Sprite3D.instantiate(e, i, !1)) : (i && i.addChild(a), a) : (console.log("对象名称：--- ", t), Laya.Sprite3D.instantiate(e, i, !1))
        }
        static Add(t, e) {
            this.ContainsKey(t) || this.InitPoolPrefab(t);
            let i = Zt.CloneSprite3D(e);
            this.poolPrefabs[t].push(i)
        }
        static CollectObject(t, e) {
            if (null == e.transform || e.destroyed) return console.log("????????????????????????????????????????????  -- 居然被删除了", e),
            void e.destroy();
            t && e && (this.ContainsKey(t) || this.InitPoolPrefab(t), this.poolPrefabs[t].length < this.poolLength ? (q.Instance.mainScene.GetScene.addChild(e), e.active = !1, this.poolPrefabs[t].push(e)) : e.destroy(!0))
        }
        static ContainsKey(t) {
            return !! this.poolPrefabs[t]
        }
        static ClearPool(t) {
            this.ContainsKey(t) && this.poolPrefabs[t].splice(0, this.poolPrefabs[t].length)
        }
    }
    $t.poolPrefabs = {},
    $t.poolLength = 100;
    class te extends Qt {
        constructor() {
            super(...arguments),
            this.enemyGather = new Laya.Vector3,
            this.gunIntervalList = [],
            this.theirRole = null,
            this.followPos = 0,
            this.flamEffectStartTime = NaN
        }
        onAwake() {
            super.onAwake(),
            this.ef_ljxf_fire_atked01 = this.mPrefab.getChildByName("ef_ljxf_fire_atked01"),
            this.ef_ljxf_zhiliaobing = this.mPrefab.getChildByName("ef_ljxf_zhiliaobing"),
            this.wubuze = this.mPrefab.getChildByName("wubuze")
        }
        Reset() {
            super.Reset(),
            this.isArriveGather = !1,
            this.isActiva = !1,
            this.attackRange = 5,
            this.gunLevel = 0,
            this.armourLevel = 0,
            this.shield = 0,
            this.isAttack = !1,
            this.createGoldSilverObbs = .3,
            this.attackTarget = null,
            this.enemyGather = new Laya.Vector3,
            this.isOver = !1
        }
        SetCamp(t) {
            super.SetCamp(t)
        }
        GetAttack() {
            return super.GetAttack() + _.roleData.attack_add_list * this.gunLevel
        }
        GetMaxHp() {
            return super.GetMaxHp() + _.roleData.hp_add_list * this.armourLevel
        }
        ChangeWeaponLevel(t = 0) {
            switch (this.gunLevel += t, this.gunLevel > 2 ? this.gunLevel = 2 : this.gunLevel < 0 && (this.gunLevel = 0), this.attackInterval = this.gunIntervalList[this.gunLevel], this.gunLevel) {
            case 0:
            case 1:
                this.attackAni = "shoot",
                this.move_shoot = "move_shoot1";
                break;
            case 2:
                this.attackAni = "huojian",
                this.move_shoot = "move_shoot2"
            }
        }
        ChangeArmourLevel(t = 0) {
            this.armourLevel += t,
            this.armourLevel > 2 ? this.armourLevel = 2 : this.armourLevel < 0 && (this.armourLevel = 0),
            this.hp >= this.maxHp && (this.hp = this.GetMaxHp())
        }
        Activate() {
            if (!this.IsDie) switch (this.camp) {
            case a.Enermy:
                this.isActiva = !0;
                break;
            case a.Player:
                this.isArriveGather = !0,
                this.isMoveTarget = !1,
                this.action && this.action.ChangeAction(e.Move)
            }
        }
        moveMethod() {
            this.action && !this.IsDie && this.action.ChangeAction(e.Move)
        }
        UpdateObj() {
            super.UpdateObj(),
            this.isAttack || (this.lastAttackTime += q.Instance.mainScene.delat, this.lastAttackTime >= this.attackInterval && (this.isAttack = !0, this.lastAttackTime = 0)),
            this.UpdateFlamEffect()
        }
        RoleBuff() {
            if (this.isRoleBuff = !0, this.wubuze && this.wubuze.numChildren <= 0) {
                $t.GetPoolPrefab(_.resourcesDataCfg.wubuze, j.LoaderPrefabs[_.resourcesDataCfg.wubuze], this.wubuze).active = !0
            }
        }
        recyclingWubuzeEffect() {
            if (this.wubuze) for (; ! (this.wubuze.numChildren <= 0);) {
                let t = this.wubuze.removeChildAt(0);
                $t.CollectObject(t.name, t)
            }
        }
        RoleBuffEnd() {
            this.isRoleBuff = !1,
            this.recyclingWubuzeEffect()
        }
        AttackEnter() {
            this.mPrefab.transform.lookAt(new Laya.Vector3(this.attackTarget.GetPosition.x, this.GetPosition.y, this.attackTarget.GetPosition.z), new Laya.Vector3(0, 1, 0))
        }
        AttackUpdate() {
            this.mPrefab.transform.lookAt(new Laya.Vector3(this.attackTarget.GetPosition.x, this.GetPosition.y, this.attackTarget.GetPosition.z), new Laya.Vector3(0, 1, 0))
        }
        AttackEnd() {
            super.AttackEnd(),
            this.isAttack = !1,
            this.lastAttackTime = 0
        }
        Flam(t) {
            if (this.ef_ljxf_fire_atked01 && this.ef_ljxf_fire_atked01.numChildren <= 0) {
                let e = t ? _.resourcesDataCfg.ef_gwyqs_duwu_Hit: _.resourcesDataCfg.ef_ljxf_fire_atked01,
                i = $t.GetPoolPrefab(e, j.LoaderPrefabs[e], this.ef_ljxf_fire_atked01);
                i.active = !0,
                i.transform.localPosition = new Laya.Vector3(0, 0, 0),
                i.transform.localRotationEuler = new Laya.Vector3(0, 0, 0),
                this.flamEffectStartTime = Laya.timer.currTimer
            }
        }
        UpdateFlamEffect() {
            isNaN(this.flamEffectStartTime) || Laya.timer.currTimer - this.flamEffectStartTime >= 1200 && this.recyclingFlamEffect()
        }
        recyclingFlamEffect() {
            if (this.flamEffectStartTime = NaN, this.ef_ljxf_fire_atked01) for (; ! (this.ef_ljxf_fire_atked01.numChildren <= 0);) {
                let t = this.ef_ljxf_fire_atked01.removeChildAt(0);
                $t.CollectObject(t.name, t)
            }
        }
        Medical() {
            if (null != this.ef_ljxf_zhiliaobing && null != this.ef_ljxf_zhiliaobing && this.ef_ljxf_zhiliaobing.numChildren <= 0) {
                $t.GetPoolPrefab(_.resourcesDataCfg.ef_ljxf_zhiliaobing, j.LoaderPrefabs[_.resourcesDataCfg.ef_ljxf_zhiliaobing], this.ef_ljxf_zhiliaobing).active = !0,
                Laya.timer.clear(this, this.recyclingMedicalEffect),
                Laya.timer.once(1e3, this, this.recyclingMedicalEffect)
            }
        }
        recyclingMedicalEffect() {
            if (null != this.ef_ljxf_zhiliaobing && null != this.ef_ljxf_zhiliaobing) for (; ! (this.ef_ljxf_zhiliaobing.numChildren <= 0);) {
                let t = this.ef_ljxf_zhiliaobing.removeChildAt(0);
                $t.CollectObject(t.name, t)
            }
        }
        CollisionEnemy(t) {
            for (let e = this.gathering.enemyList.length - 1; e >= 0; e--) if (this.gathering.enemyList[e].IsCollision(this) && zt.IntersectOBB(this.box, this.gathering.enemyList[e].box, new Laya.Vector3(this.GetPosition.x + t.x, this.GetPosition.y, this.GetPosition.z + t.z))) {
                let i = !1;
                if (!this.gathering) return;
                if (this.gathering.obsList.length > 0) for (let t = 0; t < this.gathering.obsList.length; t++) if (Xt.IsDistances(this.gathering.enemyList[e].GetPosition, this.gathering.obsList[t].center, 17.5) && (zt.IntersectOBB(this.gathering.enemyList[e].box, this.gathering.obsList[t]) || zt.IntersectOBB(this.gathering.enemyList[e].box, this.gathering.obsList[t]))) {
                    i = !0;
                    break
                }
                i ? (t.x = 0, t.z = 0) : this.Extrusion(this.gathering.enemyList[e])
            }
        }
        SearchAttackRole() {
            if (this.IsTargetNull() || this.roleCamp == n.Player) {
                let t = [];
                switch (this.camp) {
                case a.Enermy:
                    for (let e = q.Instance.mainScene.GetMap.roleList.length - 1; e >= 0; e--) q.Instance.mainScene.GetMap.roleList[e].IsChoosable(this) && Xt.IsDistances(this.GetPosition, q.Instance.mainScene.GetMap.roleList[e].GetPosition, this.perceptionRange) && t.push(q.Instance.mainScene.GetMap.roleList[e]);
                    for (let e = 0; e < q.Instance.mainScene.GetMap.headquartersList.length; e++) {
                        for (let i = 0; i < q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList.length; i++) if (q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList[i].attackList.length > 0) for (let a = q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList[i].attackList.length - 1; a >= 0; a--) q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList[i].attackList[a].IsChoosable(this) && Xt.IsDistances(this.GetPosition, q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList[i].attackList[a].GetPosition, this.perceptionRange) && t.push(q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList[i].attackList[a]);
                        for (let i = 0; i < q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList.length; i++) if (q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList[i].attackList.length > 0) for (let a = q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList[i].attackList.length - 1; a >= 0; a--) q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList[i].attackList[a].IsChoosable(this) && Xt.IsDistances(this.GetPosition, q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList[i].attackList[a].GetPosition, this.perceptionRange) && t.push(q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList[i].attackList[a]);
                        for (let i = 0; i < q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList.length; i++) if (q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList[i].attackList.length > 0) for (let a = q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList[i].attackList.length - 1; a >= 0; a--) q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList[i].attackList[a].IsChoosable(this) && Xt.IsDistances(this.GetPosition, q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList[i].attackList[a].GetPosition, this.perceptionRange) && t.push(q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList[i].attackList[a]);
                        for (let i = 0; i < q.Instance.mainScene.GetMap.headquartersList[e].medicalTroopsCtlList.length; i++) if (q.Instance.mainScene.GetMap.headquartersList[e].medicalTroopsCtlList[i].attackList.length > 0) for (let a = q.Instance.mainScene.GetMap.headquartersList[e].medicalTroopsCtlList[i].attackList.length - 1; a >= 0; a--) q.Instance.mainScene.GetMap.headquartersList[e].medicalTroopsCtlList[i].attackList[a].IsChoosable(this) && Xt.IsDistances(this.GetPosition, q.Instance.mainScene.GetMap.headquartersList[e].medicalTroopsCtlList[i].attackList[a].GetPosition, this.perceptionRange) && t.push(q.Instance.mainScene.GetMap.headquartersList[e].medicalTroopsCtlList[i].attackList[a])
                    }
                    break;
                case a.Player:
                    for (let e = q.Instance.mainScene.GetMap.enemyGatheringList.length - 1; e >= 0; e--) if (q.Instance.mainScene.GetMap.enemyGatheringList[e].enemyList.length > 0) for (let i = q.Instance.mainScene.GetMap.enemyGatheringList[e].enemyList.length - 1; i >= 0; i--) q.Instance.mainScene.GetMap.enemyGatheringList[e].enemyList[i].IsChoosable(this) && t.push(q.Instance.mainScene.GetMap.enemyGatheringList[e].enemyList[i])
                }
                return t.length > 1 && t.sort((t, e) =>{
                    return Laya.Vector3.distanceSquared(this.GetPosition, t.GetPosition) < Laya.Vector3.distanceSquared(this.GetPosition, e.GetPosition) ? -1 : 1
                }),
                t[0]
            }
            return this.attackTarget
        }
        ChangePos(t) {
            if (this.camp == a.Enermy) {
                if (!this.gathering) return;
                let i = new Laya.Vector3(this.box.center.x, this.box.center.y, this.box.center.z + t.z),
                a = new Laya.Vector3(this.box.center.x + t.x, this.box.center.y, this.box.center.z);
                if (this.gathering.obsList.length > 0) for (let s = 0; s < this.gathering.obsList.length; s++) if (Xt.IsDistances(this.GetPosition, this.gathering.obsList[s].center, 17.5) && (zt.IntersectOBB(this.box, this.gathering.obsList[s], a) || zt.IntersectOBB(this.box, this.gathering.obsList[s], i))) {
                    t.z = 0,
                    t.x = 0,
                    this.attackTarget = null,
                    this.action && this.action.ChangeAction(e.Standby);
                    break
                }
            }
            super.ChangePos(t),
            this.canActiveMethod()
        }
        canActiveMethod() {
            if (!this.isMoveTarget) switch (this.roleCamp) {
            case n.FightingUnit:
                if (this.isArriveGather) {
                    let t = 15;
                    switch (this.battleCamp) {
                    case o.Soldier:
                    case o.Pyro:
                        t = 15;
                        break;
                    case o.Tank:
                        t = 20;
                        break;
                    case o.Medic:
                        t = 17
                    } (null == this.enemyGather || Xt.IsDistances(this.GetPosition, this.enemyGather, t)) && (this.enemyGather = null, this.isArriveGather = !1, this.isActiva = !0)
                }
                break;
            case n.Player:
            }
        }
        Die() {
            super.Die(),
            this.RoleBuffEnd()
        }
        DieEnter() {
            switch (super.DieEnter(), this.RoleBuffEnd(), Laya.timer.clearAll(this), this.recyclingWubuzeEffect(), this.recyclingFlamEffect(), this.roleCamp) {
            case n.FightingUnit:
                for (let t = 0; t < q.Instance.lastLevelData.mingpai_acount; t++) {
                    let t = q.Instance.mainScene.GetMap.CreateSilver();
                    t.SetPosition = new Laya.Vector3(this.GetPosition.x, this.GetPosition.y + 2 * this.box.extents.y, this.GetPosition.z),
                    t.Throw()
                }
                if (Math.random() <= q.Instance.lastLevelData.gold1) {
                    let t = q.Instance.mainScene.GetMap.CreateSilver(h.Gold);
                    t.SetPosition = new Laya.Vector3(this.GetPosition.x, this.GetPosition.y + 2 * this.box.extents.y, this.GetPosition.z),
                    t.Throw()
                }
            }
        }
        SelectAttackTarget() {
            if (this.attackTarget = this.SearchAttackRole(), this.attackTarget) {
                let t = this.IsTargetAttackRange();
                switch (this.roleCamp) {
                case n.FightingUnit:
                    t || this.action && this.action.ChangeAction(e.Move)
                }
            }
        }
        IsTargetAttackRange() {
            return !! Xt.IsDistances(this.attackTarget.GetPosition, this.GetPosition, this.attackRange) && (this.isAttack ? this.action && this.action.ChangeAction(e.Attack) : this.action && this.action.ChangeAction(e.Standby), !0)
        }
        ChangeMoveForWorld() {
            switch (this.roleCamp) {
            case n.FightingUnit:
                this.isMoveTarget ? this.mPrefab.transform.lookAt(new Laya.Vector3(this.dispatchPoint.x, this.GetPosition.y, this.dispatchPoint.z), new Laya.Vector3(0, 1, 0)) : this.isArriveGather ? this.mPrefab.transform.lookAt(new Laya.Vector3(this.enemyGather.x, this.GetPosition.y, this.enemyGather.z), new Laya.Vector3(0, 1, 0)) : this.isActiva && (this.IsTargetNull() || this.mPrefab.transform.lookAt(new Laya.Vector3(this.attackTarget.GetPosition.x, this.GetPosition.y, this.attackTarget.GetPosition.z), new Laya.Vector3(0, 1, 0)));
                break;
            case n.Player:
                super.ChangeMoveForWorld()
            }
        }
        Remove() {
            this.isOver = !0,
            this.recyclingFlamEffect(),
            this.recyclingMedicalEffect(),
            this.recyclingWubuzeEffect(),
            this.action = null
        }
        getHero() {}
        TouchMove() {}
        TouchUp() {}
        TouchDown() {}
    }
    class ee extends Bt {
        constructor() {
            super(...arguments),
            this.model = [],
            this.splitSpeedNum = 500,
            this.roadDis = .02
        }
        onAwake() {
            this.hitPrefabs = [_.resourcesDataCfg.ef_ljxf_zidan_Hit, _.resourcesDataCfg.ef_ljxf_ak_atked, _.resourcesDataCfg.ef_ljxf_huojiantong_atked],
            this.gunButtleHitList = [_.resourcesDataCfg.ef_gwyqs_krz_dianji1_Hit, _.resourcesDataCfg.ef_gwyqs_krz_dianji2_Hit, _.resourcesDataCfg.ef_gwyqs_krz_dianji3_Hit],
            super.onAwake()
        }
        Reset(t, e, i = NaN) {
            if (this.buttleType = e, this.speed = 30, e == s.SoldierBullet) {
                let t = this.mPrefab.getChildAt(0);
                this.model.push(t);
                let e = t.getChildByName("Turbulence_205");
                e && p.clearTrailPositions(e)
            } else if (e == s.TankBullet) for (let t = 0; t < this.owner.numChildren; t++) {
                let e = this.mPrefab.getChildAt(t);
                this.model.push(e),
                "path_091" == e.name && p.clearTrailPositions(e)
            } else if (e == s.RobotBullet) for (let t = 0; t < this.owner.numChildren; t++) {
                let e = this.mPrefab.getChildAt(t);
                e.active = !1,
                e.active = !0,
                this.model.push(e)
            } else if (e == s.ZealotBullet) for (let t = 0; t < this.owner.numChildren; t++) {
                let e = this.mPrefab.getChildAt(t);
                if (this.model.push(e), "EFX" == e.name) for (let t = 0; t < e.numChildren; t++) p.clearTrailPositions(e.getChildAt(t))
            } else e == s.BeetleBullet && (this.speed = 10);
            this.isActive = !1,
            this.speedA = .05,
            this.speedValue = this.speed,
            this.units = t,
            this.attack = isNaN(i) ? this.units.GetAttack() : i,
            this.target = this.units.attackTarget,
            this.isActive = !0
        }
        UpdateObj() {
            if (super.UpdateObj(), this.isActive) if (this.target && !this.target.IsDie) {
                this.speedValue += this.speedA,
                this.splitSpeedNum = Math.abs(Math.ceil( - this.speedValue * q.Instance.mainScene.delat / this.roadDis));
                let t = -this.speedValue * q.Instance.mainScene.delat / this.splitSpeedNum,
                e = new Laya.Vector3(this.target.GetPosition.x, this.GetPosition.y, this.target.GetPosition.z);
                this.GetMainNode.transform.lookAt(e, new Laya.Vector3(0, 1, 0));
                for (let i = 0; i < this.splitSpeedNum; i++) {
                    this.mPrefab.transform.translate(new Laya.Vector3(0, 0, t));
                    let i = !1;
                    if (i = this.buttleType == s.RobotBullet ? Xt.IsDistances(this.GetPosition, e, 1) : Xt.IsDistances(this.GetPosition, e, .1)) return null == this.target && this.target.IsDie ? void this.Remove() : (this.target.ChangeHp( - this.attack, this.units.capmIndex), this.isActive = !1, this.model.forEach(t =>{
                        t.active = !1
                    }), void this.addHitEffect())
                }
            } else this.Remove()
        }
        Remove() {
            this.model.forEach(t =>{
                t.active = !0
            }),
            this.isActive = !1,
            p.RemoveArrayKey(q.Instance.mainScene.GetMap.lastList, this),
            $t.CollectObject(this.mPrefab.name, this.mPrefab)
        }
        addHitEffect() {
            let t = null;
            this.buttleType == s.SoldierBullet ? t = this.hitPrefabs[this.units.gunLevel] : this.buttleType == s.TankBullet ? t = _.resourcesDataCfg.ef_ljxf_tank_atk: this.buttleType == s.RobotBullet ? t = _.resourcesDataCfg.ef_gwyqs_shandianqiu_baozha: this.buttleType == s.ZealotBullet ? t = this.gunButtleHitList[this.units.gunLevel] : this.buttleType == s.BeetleBullet ? t = _.resourcesDataCfg.ef_gwyqs_mmc_dianqiuhit: this.buttleType == s.DragonKnightBullet && (t = _.resourcesDataCfg.ef_gwyqs_lqs_zhadanhit);
            let e = $t.GetPoolPrefab(t, j.LoaderPrefabs[t], q.Instance.mainScene.GetScene);
            e.active = !0,
            e.transform.position = this.mPrefab.transform.position.clone(),
            Laya.timer.once(1e3, null, t =>{
                $t.CollectObject(t.name, t)
            },
            [e]),
            this.Remove()
        }
    }
    class ie extends te {
        constructor() {
            super(...arguments),
            this.isVibrates = [!1, !1],
            this.jiJia = [],
            this.levelPrefabs = [j.LoaderPrefabs[_.resourcesDataCfg.soldier], j.LoaderPrefabs[_.resourcesDataCfg.commander], j.LoaderPrefabs[_.resourcesDataCfg.horseman], j.LoaderPrefabs[_.resourcesDataCfg.cavalryman], j.LoaderPrefabs[_.resourcesDataCfg.armoredvehicleman]],
            this.silverList = [],
            this.effShoot = [],
            this.gunList = [],
            this.armor = null,
            this.shootEffect = [j.LoaderPrefabs[_.resourcesDataCfg.ef_ljxf_shoot], j.LoaderPrefabs[_.resourcesDataCfg.ef_ljxf_ak_atk], j.LoaderPrefabs[_.resourcesDataCfg.ef_ljxf_huojiantong_atk]]
        }
        get isArmoredVehicles() {
            return this.level >= 5
        }
        onAwake() {
            super.onAwake(),
            super.Reset(),
            this.roleCamp = n.Player,
            this.level = 0,
            this.maxLevel = this.levelPrefabs.length,
            this.isBloodReturn = !1,
            this.isBloodTime = !1,
            this.attack = q.Instance.lastLevelData.AI1_atk,
            this.attackRange = q.Instance.lastLevelData.AI1_atk_range,
            this.attackRange = 10
        }
        UpdateObj() {
            super.UpdateObj(),
            this.IsDie || (this.isBloodTime && (this.lastBloodTime += q.Instance.mainScene.delat, this.lastBloodTime >= _.roleData.role_hill_time && (this.lastBloodTime = 0, this.isBloodTime = !1, this.isBloodReturn = !0)), this.isBloodReturn && (this.hp >= this.maxHp ? this.isBloodReturn = !1 : this.jiJia.length <= 0 && this.ChangeHp(_.roleData.role_hill_speed * q.Instance.mainScene.delat))),
            this.CollisonSilver()
        }
        ChangePos(t) {
            super.ChangePos(t)
        }
        ChangeWeaponLevel(t = 0) {
            if (super.ChangeWeaponLevel(t), (this.jiJia.length > 0 || this.isArmoredVehicles) && (this.attackAni = "shoot", this.move_shoot = "move_shoot1"), 1 == this.level) {
                if (this.gunList) {
                    let t = [_.resourcesDataCfg.buqiang, _.resourcesDataCfg.AK, _.resourcesDataCfg.huojiantong];
                    for (let e = 0; e < this.gunList.length; e++) if (this.gunList[e]) if (e == this.gunLevel) {
                        let i = $t.GetPoolPrefab(t[e], j.LoaderPrefabs[t[e]], this.gunList[e]);
                        i.active = !0,
                        i.transform.localPosition = new Laya.Vector3(0, 0, 0),
                        i.transform.localRotationEuler = new Laya.Vector3(0, 0, 0)
                    } else if (this.gunList[e].numChildren > 0) {
                        let t = this.gunList[e].removeChildAt(0);
                        $t.CollectObject(t.name, t)
                    }
                }
            } else for (let t = 0; t < this.gunList.length; t++) this.gunList[t].active = t == this.gunLevel
        }
        IsUnlockBarracks() {
            for (let t = 0; t < q.Instance.mainScene.GetMap.headquartersList.length; t++) {
                if (q.Instance.mainScene.GetMap.headquartersList[t].dispatchTroopsCtlList.length > 0) for (let e = 0; e < q.Instance.mainScene.GetMap.headquartersList[t].dispatchTroopsCtlList.length; e++) if (q.Instance.mainScene.GetMap.headquartersList[t].dispatchTroopsCtlList[e].barrackList.length > 0) for (let i = 0; i < q.Instance.mainScene.GetMap.headquartersList[t].dispatchTroopsCtlList[e].barrackList.length; i++) if (q.Instance.mainScene.GetMap.headquartersList[t].dispatchTroopsCtlList[e].barrackList[i].isUnlock) return ! 0;
                if (q.Instance.mainScene.GetMap.headquartersList[t].flamingTroopsCtlList.length > 0) for (let e = 0; e < q.Instance.mainScene.GetMap.headquartersList[t].flamingTroopsCtlList.length; e++) if (q.Instance.mainScene.GetMap.headquartersList[t].flamingTroopsCtlList[e].barrackList.length > 0) for (let i = 0; i < q.Instance.mainScene.GetMap.headquartersList[t].flamingTroopsCtlList[e].barrackList.length; i++) if (q.Instance.mainScene.GetMap.headquartersList[t].flamingTroopsCtlList[e].barrackList[i].isUnlock) return ! 0
            }
            return ! 1
        }
        CutSilver(t) {
            p.RemoveArrayKey(this.silverList, t),
            Laya.stage.event(u.UPDATE_MINGPAI, [this.silverList.length])
        }
        CollisonSilver() {
            if (q.Instance.mainScene.GetMap.silverList.length > 0) for (let t = q.Instance.mainScene.GetMap.silverList.length - 1; t >= 0; t--) if (Xt.IsDistances(this.GetPosition, q.Instance.mainScene.GetMap.silverList[t].GetPosition, 5) && zt.IntersectOBB(this.box, q.Instance.mainScene.GetMap.silverList[t].box)) {
                Laya.stage.event(u.InterfereAiState, [1]);
                let e = q.Instance.mainScene.GetMap.silverList[t];
                if (e.Pickup(), e.silverType == h.Silver) {
                    let t = this.silverList.length;
                    this.silverList.push(e),
                    q.Instance.mainScene.GetMap.silverList.length <= 0 && 0 == q.Instance.hintIndex && q.Instance.AddHintShow(),
                    Laya.stage.event(u.ADD_MINGPAI),
                    V.isVibrate && !this.isVibrates[0] && (this.isVibrates[0] = !0, zs.platform.sync.vibrate({
                        isLong: !1
                    })),
                    U.Instance.StopEffectAudio("mingpai"),
                    U.Instance.PlayEffectAudio("mingpai"),
                    e.ChangePoint(this.silverPoint, () =>{
                        Laya.stage.event(u.UPDATE_MINGPAI, [this.silverList.length])
                    },
                    new Laya.Vector3(0, e.size.height * t, 0))
                } else if (e.silverType == h.Gold) {
                    let t = new Laya.Vector4;
                    q.Instance.mainScene.GetCamera.GetCamera.worldToViewportPoint(e.GetPosition, t),
                    Laya.stage.event(u.GET_SILVER, [t]),
                    e.Remove()
                }
                return
            }
        }
        ChangeHp(t) {
            null != t && NaN != t && null != t || (t = -1);
            let i = this.hp;
            if (t < 0 && this.shield > 0) {
                if (this.shield += t, t = this.shield, this.shield >= 0) return;
                this.shield = 0
            }
            this.hp += t,
            this.hp <= 0 ? (this.hp = 0, this.IsDie || (this.jiJia.length <= 0 ? this.action.ChangeAction(e.Die) : this.ChangeModel())) : this.hp > this.maxHp && (this.hp = this.maxHp),
            this.hp < i && !this.IsDie && (V.isVibrate && 0 == this.capmIndex && i == this.maxHp && (zs.platform.sync.vibrate({
                isLong: !1
            }), q.Instance.mainScene.GetCamera.vibrate_Small()), this.isBloodReturn && (this.isBloodReturn = !1), this.lastBloodTime = 0, this.isBloodTime = !0),
            Laya.stage.event(u.UPDATE_HP, this.id)
        }
        ChangeJiJia() {
            if (this.attackAni = "shoot", this.recyclingBaozouEffect(), this.recyclingFlamEffect(), this.model.active = !1, 1 == this.level && this.gunList) for (let t = 0; t < this.gunList.length; t++) if (this.gunList[t] && this.gunList[t].numChildren > 0) {
                let e = this.gunList[t].removeChildAt(0);
                $t.CollectObject(e.name, e)
            }
            this.gunList.splice(0, this.gunList.length),
            this.effShoot.splice(0, this.effShoot.length),
            this.attackRange = 10;
            let t = $t.GetPoolPrefab(_.resourcesDataCfg.jijia, j.LoaderPrefabs[_.resourcesDataCfg.jijia], this.mPrefab);
            t.transform.localPosition = new Laya.Vector3(0, 0, 0),
            t.transform.localRotationEuler = new Laya.Vector3(0, 0, 0),
            t.active = !0,
            this.jiJia.push(t),
            t.getChildByName("siwang").active = !1;
            let i = t.getChildByName("jijia");
            if (i.active = !0, this.ani = i.getComponent(Laya.Animator), this.boxModel = t.getChildByName("box"), this.box = null, this.box = new Vt(this.boxModel), this.action = null, this.action = new Kt(this, e.Standby), this.speed = _.roleData.role_speed3, this.maxHp = _.roleData.role_HP3, this.silverPoint = p.FindChild(i, "jijia/ningpai_01/mingpaiPoint"), this.ef_ljxf_fire_atked01 = t.getChildByName("ef_ljxf_fire_atked01"), this.gunPoint = i.getChildByName("qiangkou"), this.ef_ljxf_baozou = t.getChildByName("ef_ljxf_baozou"), q.Instance.isRage && this.addBaozouEffect(), this.hp = this.maxHp, this.silverList.length > 0) for (let t = this.silverList.length - 1; t >= 0; t--) this.silverPoint.addChild(this.silverList[t].GetMainNode),
            this.silverList[t].GetMainNode.transform.localRotationEuler = new Laya.Vector3(0, 0, 0),
            this.silverList[t].GetMainNode.transform.localPosition = new Laya.Vector3(0, 0 + this.silverList[t].size.height * t, 0),
            this.silverList[t].GetMainNode.transform.localScale = new Laya.Vector3(1, 1, 1);
            q.Instance.mainScene.GetCamera.CameraOrthographicVerticalSize(!1)
        }
        ChangeModel() {
            this.isArmoredVehicles ? (this.attackAni = "shoot", this.move_shoot = "move_shoot1") : 2 == this.gunLevel && (this.attackAni = "huojian", this.move_shoot = "move_shoot2"),
            this.recyclingBaozouEffect(),
            this.recyclingFlamEffect();
            let t = !1;
            this.action && (t = this.action.state == e.Move);
            let i = this.jiJia.shift();
            i.getChildByName("jijia").active = !1;
            let a = i.getChildByName("siwang");
            a.active = !0,
            a.getComponent(Laya.Animator).play("die", 0, 0),
            q.Instance.mainScene.GetScene.addChild(i),
            i.transform.position = this.GetPosition,
            this.attackRange = _.roleData.junzhang_range,
            this.model.active = !0,
            this.setModel(),
            t && this.action.ChangeAction(e.Move),
            Laya.timer.once(1200, null, t =>{
                $t.CollectObject(t.name, t)
            },
            [i]),
            q.Instance.mainScene.GetCamera.CameraOrthographicVerticalSize(!0)
        }
        ChangeLevel(t) {
            console.log("-------*英雄等级++");
            let e = this.level;
            if (this.level += t, this.level > this.maxLevel) this.level = this.maxLevel;
            else {
                if (this.jiJia.length <= 0 && this.silverList.length > 0) for (let t = this.silverList.length - 1; t >= 0; t--) this.mPrefab.addChild(this.silverList[t].GetMainNode);
                if (this.model) {
                    if (null != this.armor) for (const t in this.armor) if (Object.prototype.hasOwnProperty.call(this.armor, t) && null != this.armor[t] && this.armor[t].numChildren > 0) {
                        let e = this.armor[t].removeChildAt(0);
                        $t.CollectObject(e.name, e)
                    }
                    if (this.armor = null, 1 == e && this.gunList) for (let t = 0; t < this.gunList.length; t++) if (this.gunList[t] && this.gunList[t].numChildren > 0) {
                        let e = this.gunList[t].removeChildAt(0);
                        $t.CollectObject(e.name, e)
                    }
                    for (let t = 0; t < 3; t++) this.recyclingShootEffect(t);
                    this.recyclingBaozouEffect(),
                    this.recyclingFlamEffect(),
                    this.model.parent.destroy()
                }
                this.model = Laya.Sprite3D.instantiate(this.levelPrefabs[this.level - 1], this.mPrefab, !1).getChildAt(0),
                this.model.parent.transform.localPosition = new Laya.Vector3(0, 0, 0),
                this.model.parent.transform.localRotationEuler = new Laya.Vector3(0, 0, 0),
                this.circleObj = this.model.parent.getChildByName("yuanquan").getChildAt(0),
                this.circleObj.active = !1,
                this.jiJia.length > 0 ? this.model.active = !1 : this.setModel()
            }
        }
        setModel() {
            if (this.ani = this.model.getComponent(Laya.Animator), this.boxModel = this.model.parent.getChildByName("box"), this.box = new Vt(this.boxModel), this.action = null, this.action = new Kt(this, e.Standby), this.attackStage.splice(0, this.attackStage.length), this.gunList.splice(0, this.gunList.length), this.effShoot.splice(0, this.effShoot.length), 1 == this.level) {
                this.speed = _.roleData.role_speed1,
                this.maxHp = _.roleData.role_HP1,
                this.silverPoint = p.FindChild(this.model, "shibing/ningpai_01/mingpaiPoint");
                this.model.parent.getChildByName("wubuze");
                this.gunList.push(this.model.getChildByName("buqiang")),
                this.gunList.push(this.model.getChildByName("AK")),
                this.gunList.push(this.model.getChildByName("huojiantong")),
                this.gunList.push(this.model.getChildByName("jujiqiang")),
                this.armor = {
                    toukui: null,
                    yaodai: null,
                    fangdanyi: null,
                    fangdantoukui: null
                },
                this.armor.toukui = this.model.getChildByName("toukui"),
                this.armor.yaodai = this.model.getChildByName("yaodai"),
                this.armor.fangdanyi = this.model.getChildByName("fangdangyi"),
                this.armor.fangdantoukui = this.model.getChildByName("fangdangtoutui"),
                this.generationObj(_.resourcesDataCfg.toukui, this.armor.toukui),
                this.generationObj(_.resourcesDataCfg.yaodai, this.armor.yaodai)
            } else 5 == this.level ? (this.speed = _.roleData.role_speed5, this.maxHp = _.roleData.role_HP5, this.silverPoint = p.FindChild(this.model, "zhuangjiache/ningpai_01/mingpaiPoint")) : (2 == this.level ? (this.speed = _.roleData.role_speed2, this.maxHp = _.roleData.role_HP2, this.silverPoint = p.FindChild(this.model, "junguan/ningpai_01/mingpaiPoint")) : 3 == this.level ? (this.speed = _.roleData.role_speed3, this.maxHp = _.roleData.role_HP3, this.silverPoint = p.FindChild(this.model, "qibing/ningpai_01/mingpaiPoint")) : 4 == this.level && (this.speed = _.roleData.role_speed4, this.maxHp = _.roleData.role_HP4, this.silverPoint = p.FindChild(this.model, "qibing/ningpai_01/mingpaiPoint")), this.gunList.push(this.model.getChildByName("mod_ljxf_NPC_gun_1")), this.gunList.push(this.model.getChildByName("mod_ljxf_NPC_gun_2")), this.gunList.push(this.model.getChildByName("mod_ljxf_NPC_gun_3")));
            this.ef_ljxf_fire_atked01 = this.model.parent.getChildByName("ef_ljxf_fire_atked01"),
            this.gunPoint = this.model.getChildByName("qiangkou");
            for (let t = 0; t < this.gunPoint.numChildren; t++) this.effShoot.push(this.gunPoint.getChildAt(t));
            if (this.attackStage.push(.3), this.ChangeWeaponLevel(), this.circleObj = this.model.parent.getChildByName("yuanquan").getChildAt(0), this.circleObj.active = !1, this.ef_ljxf_baozou = this.model.parent.getChildByName("ef_ljxf_baozou"), q.Instance.isRage && this.addBaozouEffect(), this.hp = this.maxHp, this.silverList.length > 0) for (let t = this.silverList.length - 1; t >= 0; t--) this.silverPoint.addChild(this.silverList[t].GetMainNode),
            this.silverList[t].GetMainNode.transform.localRotationEuler = new Laya.Vector3(0, 0, 0),
            this.silverList[t].GetMainNode.transform.localPosition = new Laya.Vector3(0, 0 + this.silverList[t].size.height * t, 0),
            this.silverList[t].GetMainNode.transform.localScale = new Laya.Vector3(1, 1, 1)
        }
        generationObj(t, e) {
            let i = $t.GetPoolPrefab(t, j.LoaderPrefabs[t], e);
            i.active = !0,
            i.transform.localPosition = new Laya.Vector3(0, 0, 0),
            i.transform.localRotationEuler = new Laya.Vector3(0, 0, 0),
            i.getChildAt(0).meshRenderer.material = q.Instance.mainScene.GetMap.roleMat.player
        }
        ChangeSilverPos() {
            if (this.silverList.length > 0) for (let t = this.silverList.length - 1; t >= 0; t--) this.silverList[t].GetMainNode.transform.localRotationEuler = new Laya.Vector3(0, 0, 0),
            this.silverList[t].GetMainNode.transform.localPosition = new Laya.Vector3(0, 0 + this.silverList[t].size.height * t, 0),
            this.silverList[t].GetMainNode.transform.localScale = new Laya.Vector3(1, 1, 1)
        }
        AttackStage(t) {
            U.Instance.PlayEffectAudio("shoot");
            let e = s.SoldierBullet,
            i = this.GetAttack(),
            a = null;
            this.jiJia.length <= 0 ? (this.addShootEffect(), a = $t.GetPoolPrefab(_.resourcesDataCfg.ef_ljxf_zidan, j.LoaderPrefabs[_.resourcesDataCfg.ef_ljxf_zidan], q.Instance.mainScene.GetScene)) : (e = s.RobotBullet, i = _.airShipData.airShipAttack, a = $t.GetPoolPrefab(_.resourcesDataCfg.ef_gwyqs_shandianqiu, j.LoaderPrefabs[_.resourcesDataCfg.ef_gwyqs_shandianqiu], q.Instance.mainScene.GetScene)),
            a.active = !0,
            a.transform.position = this.gunPoint.transform.position.clone();
            let n = a.getComponent(ee);
            n || (n = a.addComponent(ee)),
            n.Reset(this, e, i),
            q.Instance.mainScene.GetMap.lastList.push(n)
        }
        DieEnter() {
            super.DieEnter(),
            U.Instance.PlayEffectAudio("AI_die")
        }
        AttackEnd() {
            super.AttackEnd()
        }
        addBaozouEffect() {
            if (this.ef_ljxf_baozou.numChildren <= 0) {
                $t.GetPoolPrefab(_.resourcesDataCfg.ef_ljxf_baozou, j.LoaderPrefabs[_.resourcesDataCfg.ef_ljxf_baozou], this.ef_ljxf_baozou).active = !0
            }
        }
        recyclingBaozouEffect() {
            if (this.ef_ljxf_baozou) for (; ! (this.ef_ljxf_baozou.numChildren <= 0);) {
                let t = this.ef_ljxf_baozou.removeChildAt(0);
                $t.CollectObject(t.name, t)
            }
        }
        addShootEffect() {
            Laya.timer.clear(this, this.recyclingShootEffect);
            let t = this.isArmoredVehicles ? 2 : this.gunLevel;
            if (this.shootEffect[t] && this.effShoot[t]) {
                $t.GetPoolPrefab(this.shootEffect[t].name, this.shootEffect[t], this.effShoot[t]).active = !0,
                Laya.timer.once(1200, this, this.recyclingShootEffect, [t])
            }
        }
        recyclingShootEffect(t) {
            if (!this.effShoot) return;
            let e = this.effShoot[t];
            if (e) for (; ! (e.numChildren <= 0);) {
                let t = e.removeChildAt(0);
                $t.CollectObject(t.name, t)
            }
        }
        baozou() {
            null != this.action && this.action.ChangeAction(e.Mania)
        }
        Remove() {
            this.jiJia.length,
            super.Remove()
        }
        getHero() {}
    }
    class ae extends ie {
        constructor() {
            super(...arguments),
            this.touchDownPoint = new Laya.Point
        }
        onAwake() {
            super.onAwake(),
            this.idleAni = "hold",
            this.moveAni = "move_gun",
            this.dieAni = "die",
            this.attackAni = "shoot",
            this.level = 0,
            this.maxLevel = this.levelPrefabs.length,
            this.forWorldValue = 1,
            this.lastInvincibleTime = 0,
            this.attackInterval = 1,
            this.invincibleTime = 3,
            this.gunIntervalList.push(.2, .9, .8),
            this.attack = _.roleData.junzhang_atk,
            this.attackRange = _.roleData.junzhang_range,
            this.ChangeLevel(1),
            this.ef_ljxf_zhiliaobing = null
        }
        get GetIsMaxLevel() {
            return this.level >= this.maxLevel
        }
        get GetIsMaxBarrack() {
            for (let t = 0; t < q.Instance.mainScene.GetMap.headquartersList.length; t++) {
                for (let e = 0; e < q.Instance.mainScene.GetMap.headquartersList[t].dispatchTroopsCtlList.length; e++) for (let i = 0; i < q.Instance.mainScene.GetMap.headquartersList[t].dispatchTroopsCtlList[e].barrackList.length; i++) if (!q.Instance.mainScene.GetMap.headquartersList[t].dispatchTroopsCtlList[e].barrackList[i].isMaxLevel) return ! 1;
                for (let e = 0; e < q.Instance.mainScene.GetMap.headquartersList[t].flamingTroopsCtlList.length; e++) for (let i = 0; i < q.Instance.mainScene.GetMap.headquartersList[t].flamingTroopsCtlList[e].barrackList.length; i++) if (!q.Instance.mainScene.GetMap.headquartersList[t].flamingTroopsCtlList[e].barrackList[i].isMaxLevel) return ! 1;
                for (let e = 0; e < q.Instance.mainScene.GetMap.headquartersList[t].medicalTroopsCtlList.length; e++) for (let i = 0; i < q.Instance.mainScene.GetMap.headquartersList[t].medicalTroopsCtlList[e].barrackList.length; i++) if (!q.Instance.mainScene.GetMap.headquartersList[t].medicalTroopsCtlList[e].barrackList[i].isMaxLevel) return ! 1;
                for (let e = 0; e < q.Instance.mainScene.GetMap.headquartersList[t].tankBattalionList.length; e++) if (!q.Instance.mainScene.GetMap.headquartersList[t].tankBattalionList[e].isMaxLevel) return ! 1
            }
            return ! 0
        }
        get GetIsAirship() {
            for (let t = 0; t < q.Instance.mainScene.GetMap.headquartersList.length; t++) if (q.Instance.mainScene.GetMap.airshipList.length > 0) return ! 0;
            return ! 1
        }
        get GetIsCollision() {
            for (let t = 0; t < q.Instance.mainScene.GetMap.headquartersList.length; t++) {
                if (q.Instance.mainScene.GetMap.headquartersList[t].isGuideCollision) return ! 0;
                for (let e = 0; e < q.Instance.mainScene.GetMap.headquartersList[t].dispatchTroopsCtlList.length; e++) {
                    if (q.Instance.mainScene.GetMap.headquartersList[t].dispatchTroopsCtlList[e].isGuideCollision) return ! 0;
                    for (let i = 0; i < q.Instance.mainScene.GetMap.headquartersList[t].dispatchTroopsCtlList[e].barrackList.length; i++) if (q.Instance.mainScene.GetMap.headquartersList[t].dispatchTroopsCtlList[e].barrackList[i].isGuideCollision) return ! 0
                }
                for (let e = 0; e < q.Instance.mainScene.GetMap.headquartersList[t].flamingTroopsCtlList.length; e++) for (let i = 0; i < q.Instance.mainScene.GetMap.headquartersList[t].flamingTroopsCtlList[e].barrackList.length; i++) if (q.Instance.mainScene.GetMap.headquartersList[t].flamingTroopsCtlList[e].barrackList[i].isGuideCollision) return ! 0;
                for (let e = 0; e < q.Instance.mainScene.GetMap.headquartersList[t].medicalTroopsCtlList.length; e++) for (let i = 0; i < q.Instance.mainScene.GetMap.headquartersList[t].medicalTroopsCtlList[e].barrackList.length; i++) if (q.Instance.mainScene.GetMap.headquartersList[t].medicalTroopsCtlList[e].barrackList[i].isGuideCollision) return ! 0;
                for (let e = 0; e < q.Instance.mainScene.GetMap.headquartersList[t].tankBattalionList.length; e++) if (q.Instance.mainScene.GetMap.headquartersList[t].tankBattalionList[e].isGuideCollision) return ! 0
            }
            return ! 1
        }
        onEnable() {
            super.onEnable()
        }
        onDisable() {
            super.onDisable()
        }
        OpenMouseEvent() {
            Laya.stage.once(u.TOUCH_DOWN, this, this.TouchDown)
        }
        Relive() {
            this.IsDie && (this.lastInvincibleTime = this.invincibleTime, this.ChangeHp(this.maxHp), this.action.ChangeAction(e.Standby))
        }
        UpdateObj() {
            super.UpdateObj(),
            this.lastInvincibleTime > 0 && (this.lastInvincibleTime -= q.Instance.mainScene.delat)
        }
        CloseMouseEvent() {
            Laya.stage.off(u.TOUCH_DOWN, this, this.TouchDown),
            Laya.stage.off(u.TOUCH_MOVE, this, this.TouchMove),
            Laya.stage.off(u.TOUCH_UP, this, this.TouchUp),
            Laya.stage.event(u.SHOW_TOUCH, [1])
        }
        TouchDown() {
            this.action.state != e.Mania ? (this.isTouchDown = !0, q.Instance.isGuide && Laya.stage.event(u.HIDE_GUIDE), this.touchDownPoint = new Laya.Point(Laya.stage.mouseX, Laya.stage.mouseY), Laya.stage.once(u.TOUCH_UP, this, this.TouchUp), Laya.stage.on(u.TOUCH_MOVE, this, this.TouchMove), this.action.ChangeAction(e.Move), Laya.stage.event(u.SHOW_TOUCH)) : Laya.stage.once(u.TOUCH_DOWN, this, this.TouchDown)
        }
        TouchMove() {
            var t = Laya.stage.mouseX - this.touchDownPoint.x,
            e = Laya.stage.mouseY - this.touchDownPoint.y;
            Math.abs(t) <= 20 && Math.abs(e) <= 20 || (this.thouchAngel = 180 * Math.atan2(t, e) / Math.PI, Laya.stage.event(u.UPDATE_TOUCH, [this.thouchAngel]))
        }
        TouchUp() {
            this.isTouchDown = !1,
            this.touchDownPoint = new Laya.Point(0, 0),
            Laya.stage.off(u.TOUCH_MOVE, this, this.TouchMove),
            Laya.stage.once(u.TOUCH_DOWN, this, this.TouchDown),
            this.action.ChangeAction(e.Standby),
            Laya.stage.event(u.SHOW_TOUCH)
        }
        AddSilver(t) {
            this.silverList.push(t),
            this.silverPoint.addChild(t.GetMainNode),
            t.GetMainNode.transform.localPosition = new Laya.Vector3(0, this.silverList.length * t.size.height, 0),
            t.GetMainNode.transform.localRotationEuler = new Laya.Vector3(0, 0, 0),
            t.GetMainNode.transform.localScale = new Laya.Vector3(1, 1, 1)
        }
        DieEnter() {
            V.isVibrate && zs.platform.sync.vibrate({
                isLong: !0
            }),
            this.CloseMouseEvent(),
            this.RageEnd()
        }
        Die() {
            Laya.stage.event(u.GAME_RELIVE)
        }
        Rage() {
            super.Rage(),
            q.Instance.lastRageTime = _.rageTime,
            q.Instance.isRage = !0,
            this.addBaozouEffect();
            for (let t = 0; t < q.Instance.mainScene.GetMap.headquartersList.length; t++) {
                for (let e = 0; e < q.Instance.mainScene.GetMap.headquartersList[t].dispatchTroopsCtlList.length; e++) {
                    if (q.Instance.mainScene.GetMap.headquartersList[t].dispatchTroopsCtlList[e].attackList.length > 0) for (let i = q.Instance.mainScene.GetMap.headquartersList[t].dispatchTroopsCtlList[e].attackList.length - 1; i >= 0; i--) q.Instance.mainScene.GetMap.headquartersList[t].dispatchTroopsCtlList[e].attackList[i].Rage();
                    if (q.Instance.mainScene.GetMap.headquartersList[t].dispatchTroopsCtlList[e].soldierList.length > 0) for (let i = q.Instance.mainScene.GetMap.headquartersList[t].dispatchTroopsCtlList[e].soldierList.length - 1; i >= 0; i--) q.Instance.mainScene.GetMap.headquartersList[t].dispatchTroopsCtlList[e].soldierList[i].Rage()
                }
                for (let e = 0; e < q.Instance.mainScene.GetMap.headquartersList[t].flamingTroopsCtlList.length; e++) {
                    if (q.Instance.mainScene.GetMap.headquartersList[t].flamingTroopsCtlList[e].attackList.length > 0) for (let i = q.Instance.mainScene.GetMap.headquartersList[t].flamingTroopsCtlList[e].attackList.length - 1; i >= 0; i--) q.Instance.mainScene.GetMap.headquartersList[t].flamingTroopsCtlList[e].attackList[i].Rage();
                    if (q.Instance.mainScene.GetMap.headquartersList[t].flamingTroopsCtlList[e].soldierList.length > 0) for (let i = q.Instance.mainScene.GetMap.headquartersList[t].flamingTroopsCtlList[e].soldierList.length - 1; i >= 0; i--) q.Instance.mainScene.GetMap.headquartersList[t].flamingTroopsCtlList[e].soldierList[i].Rage()
                }
                for (let e = 0; e < q.Instance.mainScene.GetMap.headquartersList[t].tankBattalionList.length; e++) {
                    if (q.Instance.mainScene.GetMap.headquartersList[t].tankBattalionList[e].attackList.length > 0) for (let i = q.Instance.mainScene.GetMap.headquartersList[t].tankBattalionList[e].attackList.length - 1; i >= 0; i--) q.Instance.mainScene.GetMap.headquartersList[t].tankBattalionList[e].attackList[i].Rage();
                    if (q.Instance.mainScene.GetMap.headquartersList[t].tankBattalionList[e].tankList.length > 0) for (let i = q.Instance.mainScene.GetMap.headquartersList[t].tankBattalionList[e].tankList.length - 1; i >= 0; i--) q.Instance.mainScene.GetMap.headquartersList[t].tankBattalionList[e].tankList[i].Rage()
                }
            }
        }
        ChangeHp(t) {
            t < 0 && this.lastInvincibleTime > 0 || super.ChangeHp(t)
        }
        RageEnd() {
            super.RageEnd(),
            q.Instance.isRage = !1,
            q.Instance.lastRageTime = 0,
            this.recyclingBaozouEffect();
            for (let t = 0; t < q.Instance.mainScene.GetMap.headquartersList.length; t++) {
                for (let e = 0; e < q.Instance.mainScene.GetMap.headquartersList[t].dispatchTroopsCtlList.length; e++) {
                    if (q.Instance.mainScene.GetMap.headquartersList[t].dispatchTroopsCtlList[e].attackList.length > 0) for (let i = q.Instance.mainScene.GetMap.headquartersList[t].dispatchTroopsCtlList[e].attackList.length - 1; i >= 0; i--) q.Instance.mainScene.GetMap.headquartersList[t].dispatchTroopsCtlList[e].attackList[i].RageEnd();
                    if (q.Instance.mainScene.GetMap.headquartersList[t].dispatchTroopsCtlList[e].soldierList.length > 0) for (let i = q.Instance.mainScene.GetMap.headquartersList[t].dispatchTroopsCtlList[e].soldierList.length - 1; i >= 0; i--) q.Instance.mainScene.GetMap.headquartersList[t].dispatchTroopsCtlList[e].soldierList[i].RageEnd()
                }
                for (let e = 0; e < q.Instance.mainScene.GetMap.headquartersList[t].flamingTroopsCtlList.length; e++) {
                    if (q.Instance.mainScene.GetMap.headquartersList[t].flamingTroopsCtlList[e].attackList.length > 0) for (let i = q.Instance.mainScene.GetMap.headquartersList[t].flamingTroopsCtlList[e].attackList.length - 1; i >= 0; i--) q.Instance.mainScene.GetMap.headquartersList[t].flamingTroopsCtlList[e].attackList[i].RageEnd();
                    if (q.Instance.mainScene.GetMap.headquartersList[t].flamingTroopsCtlList[e].soldierList.length > 0) for (let i = q.Instance.mainScene.GetMap.headquartersList[t].flamingTroopsCtlList[e].soldierList.length - 1; i >= 0; i--) q.Instance.mainScene.GetMap.headquartersList[t].flamingTroopsCtlList[e].soldierList[i].RageEnd()
                }
                for (let e = 0; e < q.Instance.mainScene.GetMap.headquartersList[t].tankBattalionList.length; e++) {
                    if (q.Instance.mainScene.GetMap.headquartersList[t].tankBattalionList[e].attackList.length > 0) for (let i = q.Instance.mainScene.GetMap.headquartersList[t].tankBattalionList[e].attackList.length - 1; i >= 0; i--) q.Instance.mainScene.GetMap.headquartersList[t].tankBattalionList[e].attackList[i].RageEnd();
                    if (q.Instance.mainScene.GetMap.headquartersList[t].tankBattalionList[e].tankList.length > 0) for (let i = q.Instance.mainScene.GetMap.headquartersList[t].tankBattalionList[e].tankList.length - 1; i >= 0; i--) q.Instance.mainScene.GetMap.headquartersList[t].tankBattalionList[e].tankList[i].RageEnd()
                }
            }
        }
        VideoAddSilver(t) {
            for (let e = 0; e < t; e++) {
                let t = q.Instance.mainScene.GetMap.CreateSilver();
                this.AddSilver(t)
            }
            Laya.stage.event(u.UPDATE_MINGPAI)
        }
        VideoMaxLevelBarrack() {
            let t = [];
            if (q.Instance.mainScene.GetMap.headquartersList.forEach(e =>{
                e.dispatchTroopsCtlList.length > 0 && e.dispatchTroopsCtlList.forEach(e =>{
                    e.barrackList.length > 0 && e.barrackList.forEach(e =>{
                        e.isMaxLevel || t.push(e)
                    })
                }),
                e.flamingTroopsCtlList.length > 0 && e.flamingTroopsCtlList.forEach(e =>{
                    e.barrackList.length > 0 && e.barrackList.forEach(e =>{
                        e.isMaxLevel || t.push(e)
                    })
                }),
                e.tankBattalionList.length > 0 && e.tankBattalionList.forEach(e =>{
                    e.isMaxLevel || t.push(e)
                }),
                e.medicalTroopsCtlList.length > 0 && e.medicalTroopsCtlList.forEach(e =>{
                    e.barrackList.length > 0 && e.barrackList.forEach(e =>{
                        e.isMaxLevel || t.push(e)
                    })
                })
            }), t.length > 0) {
                t.length > 1 && t.sort((t, e) =>{
                    return Math.abs(t.maxLevel - t.level) <= Math.abs(e.maxLevel - e.level) ? 1 : -1
                });
                let e = t[0].isUnlock ? 0 : 1;
                e += t[0].maxLevel - t[0].level;
                for (let i = 0; i < e; i++) null != t[0].headquarters.theirRole && t[0].LevelAdd()
            } else H.Instance.ShowTips(window.lang.barracksMax)
        }
        VideoMaxRole() {
            if (this.level >= this.maxLevel) return void H.Instance.ShowTips(window.lang.commanderMax);
            let t = [];
            q.Instance.mainScene.GetMap.headquartersList.forEach(e =>{
                e.dispatchTroopsCtlList.length > 0 && e.dispatchTroopsCtlList.forEach(e =>{
                    t.push(e)
                })
            }),
            t.length > 0 ? t.forEach(t =>{
                let e = t.isUnlock ? 0 : 1;
                e += t.maxLevel - t.level;
                for (let i = 0; i < e; i++) null != t.headquarters.theirRole && t.LevelAdd()
            }) : H.Instance.ShowTips(window.lang.commanderMax)
        }
        Remove() {
            this.CloseMouseEvent(),
            super.Remove(),
            this.box = null,
            this.mPrefab.removeSelf(),
            this.mPrefab.destroy(!0),
            this.destroy()
        }
        BattleVideoMaxLevelBarrack() {
            let t = [];
            for (let e = 0; e < q.Instance.mainScene.GetMap.headquartersList.length; e++) {
                const i = q.Instance.mainScene.GetMap.headquartersList[e];
                null != i.theirRole && 0 == i.theirRole.capmIndex && (i.dispatchTroopsCtlList.length > 0 && i.dispatchTroopsCtlList.forEach(e =>{
                    e.barrackList.length > 0 && e.barrackList.forEach(e =>{
                        e.isMaxLevel || t.push(e)
                    })
                }), i.flamingTroopsCtlList.length > 0 && i.flamingTroopsCtlList.forEach(e =>{
                    e.barrackList.length > 0 && e.barrackList.forEach(e =>{
                        e.isMaxLevel || t.push(e)
                    })
                }), i.tankBattalionList.length > 0 && i.tankBattalionList.forEach(e =>{
                    e.isMaxLevel || t.push(e)
                }), i.medicalTroopsCtlList.length > 0 && i.medicalTroopsCtlList.forEach(e =>{
                    e.barrackList.length > 0 && e.barrackList.forEach(e =>{
                        e.isMaxLevel || t.push(e)
                    })
                }))
            }
            if (t.length > 0) {
                t.length > 1 && t.sort((t, e) =>{
                    return Math.abs(t.maxLevel - t.level) <= Math.abs(e.maxLevel - e.level) ? 1 : -1
                });
                let e = t[0].isUnlock ? 0 : 1;
                e += t[0].maxLevel - t[0].level;
                for (let i = 0; i < e; i++) null != t[0].headquarters.theirRole && t[0].LevelAdd()
            } else H.Instance.ShowTips(window.lang.barracksMax)
        }
        BattleVideoMaxRole() {
            if (this.level >= this.maxLevel) return void H.Instance.ShowTips(window.lang.commanderMax);
            let t = [];
            for (let e = 0; e < q.Instance.mainScene.GetMap.headquartersList.length; e++) {
                const i = q.Instance.mainScene.GetMap.headquartersList[e];
                null != i.theirRole && 0 == i.theirRole.capmIndex && i.dispatchTroopsCtlList.length > 0 && i.dispatchTroopsCtlList.forEach(e =>{
                    t.push(e)
                })
            }
            t.length > 0 ? t.forEach(t =>{
                let e = t.isUnlock ? 0 : 1;
                e += t.maxLevel - t.level;
                for (let i = 0; i < e; i++) null != t.headquarters.theirRole && t.LevelAdd()
            }) : H.Instance.ShowTips(window.lang.commanderMax)
        }
        getHero() {}
    }
    class se extends Bt {
        onAwake() {
            super.onAwake(),
            this.boxModel = this.mPrefab.getChildByName("box"),
            this.boxModel ? this.box = new Vt(this.boxModel) : this.box = new Vt(this.mPrefab)
        }
        Remove() {
            this.box = null,
            super.Remove()
        }
    }
    class ne extends te {
        constructor() {
            super(...arguments),
            this.effShoot = [],
            this.gunList = [],
            this.armor = {
                toukui: null,
                yaodai: null,
                fangdangyi: null,
                fangdangtoukui: null
            },
            this.shootEffectList = [],
            this.gunNameList = [_.resourcesDataCfg.buqiang, _.resourcesDataCfg.AK, _.resourcesDataCfg.huojiantong, _.resourcesDataCfg.jujiqiang],
            this.hitEnemy = [],
            this.shootEffect = [j.LoaderPrefabs[_.resourcesDataCfg.ef_ljxf_shoot], j.LoaderPrefabs[_.resourcesDataCfg.ef_ljxf_ak_atk], j.LoaderPrefabs[_.resourcesDataCfg.ef_ljxf_huojiantong_atk], j.LoaderPrefabs[_.resourcesDataCfg.ef_gwyqs_hongxian]]
        }
        onAwake() {
            this.idleAni = "hold",
            this.moveAni = "move_gun",
            this.dieAni = "die",
            this.attackAni = "shoot",
            this.move_shoot = "move_shoot1",
            super.onAwake(),
            this.mPrefab.getChildByName("yuanquan").active = !1,
            this.gunPoint = this.model.getChildByName("qiangkou"),
            this.jujiqiangGunPoint = this.model.getChildByName("jujiqiang_qaingkou");
            for (let t = 0; t < this.gunPoint.numChildren; t++) this.effShoot.push(this.gunPoint.getChildAt(t));
            this.gunList.push(this.model.getChildByName("buqiang")),
            this.gunList.push(this.model.getChildByName("AK")),
            this.gunList.push(this.model.getChildByName("huojiantong")),
            this.gunList.push(this.model.getChildByName("jujiqiang")),
            this.armor.toukui = this.model.getChildByName("toukui"),
            this.armor.yaodai = this.model.getChildByName("yaodai"),
            this.armor.fangdangyi = this.model.getChildByName("fangdangyi"),
            this.armor.fangdangtoukui = this.model.getChildByName("fangdangtoutui"),
            this.attackStage.push(.3)
        }
        Reset() {
            super.Reset(),
            this.isMoveTarget = !1,
            this.isActiva = !1,
            this.hp = 50,
            this.maxHp = 50,
            this.attack = 10,
            this.attackRange = 5,
            this.perceptionRange = 8,
            this.outRange = 10,
            this.speed = 5,
            this.attackInterval = 1;
            let t = this.model.transform.localPosition;
            t.y = 0,
            this.model.transform.localPosition = t,
            this.shootEffectList = []
        }
        SetCamp(t, e = !1) {
            switch (super.SetCamp(t), this.elite = e, this.gunIntervalList.push(1, .9, .8), this.setSelfMat(), e && this.setSelfMat_elite(), this.hp = this.maxHp, this.model.getChildByName("mod_ljxf_NPC").simpleSkinnedMeshRenderer.material = this.selfMat, this.ChangeWeaponLevel(), this.ChangeArmourLevel(), this.camp) {
            case a.Player:
                q.Instance.isRage && this.Rage()
            }
        }
        setSelfMat_elite() {
            this.maxHp = this.maxHp * _.elitesoldiersData.special_HP,
            this.attack = this.attack * _.elitesoldiersData.special_atk,
            this.attackRange = this.attackRange * _.elitesoldiersData.special_range,
            this.selfMat = q.Instance.mainScene.GetMap.eliteMat.solider
        }
        ChangeWeaponLevel() {
            super.ChangeWeaponLevel();
            let t = this.elite ? 3 : this.gunLevel;
            this.gunList[t] && this.gunList[t].numChildren <= 0 && this.generationObj(this.gunNameList[t], this.gunList[t], !1)
        }
        generationObj(t, e, i = !0) {
            let a = $t.GetPoolPrefab(t, j.LoaderPrefabs[t], e);
            a.active = !0,
            a.transform.localPosition = new Laya.Vector3(0, 0, 0),
            a.transform.localRotationEuler = new Laya.Vector3(0, 0, 0),
            i && t != _.resourcesDataCfg.yaodai && (a.getChildAt(0).meshRenderer.material = this.selfMat)
        }
        ChangeArmourLevel() {
            switch (super.ChangeArmourLevel(), this.armourLevel) {
            case 0:
                this.generationObj(_.resourcesDataCfg.toukui, this.armor.toukui),
                this.generationObj(_.resourcesDataCfg.yaodai, this.armor.yaodai);
                break;
            case 1:
                this.generationObj(_.resourcesDataCfg.toukui, this.armor.toukui),
                this.generationObj(_.resourcesDataCfg.fangdangyi, this.armor.fangdangyi);
                break;
            case 2:
                this.generationObj(_.resourcesDataCfg.fangdangyi, this.armor.fangdangyi),
                this.generationObj(_.resourcesDataCfg.fangdangtoukui, this.armor.fangdangtoukui)
            }
        }
        UpdateObj() {
            super.UpdateObj(),
            this.recyclingShootEffect()
        }
        RoleBuff() {
            if (!this.isRoleBuff) {
                for (const t in this.armor) Object.prototype.hasOwnProperty.call(this.armor, t) && this.armor[t].numChildren > 0 && (this.armor[t].getChildAt(0).getChildAt(0).meshRenderer.material = q.Instance.mainScene.GetMap.roleMat.buff);
                super.RoleBuff()
            }
        }
        RoleBuffEnd() {
            if (this.isRoleBuff) {
                for (const t in this.armor) Object.prototype.hasOwnProperty.call(this.armor, t) && this.armor[t].numChildren > 0 && (this.armor[t].getChildAt(0).getChildAt(0).meshRenderer.material = this.selfMat);
                super.RoleBuffEnd()
            }
        }
        ChangePos(t) {
            if (super.ChangePos(t), this.camp == a.Player && this.isMoveTarget && Xt.IsDistances(this.GetPosition, this.dispatchPoint, .1)) {
                let t = 0;
                this.dispatchTroops && (t = this.dispatchTroops.GetRotate.y),
                this.SetRotate = new Laya.Vector3(0, 180 + t, 0),
                this.isMoveTarget = !1,
                q.Instance.gameModle == m.battleGame || (this.dispatchPoint = null),
                this.action && !this.IsDie && this.action.ChangeAction(e.Standby)
            }
        }
        Die() {
            super.Die()
        }
        Remove() {
            for (let t = 0; t < this.gunList.length; t++) if (this.gunList[t].numChildren > 0) {
                let e = this.gunList[t].removeChildAt(0);
                $t.CollectObject(e.name, e)
            }
            for (const t in this.armor) if (Object.prototype.hasOwnProperty.call(this.armor, t) && null != this.armor[t] && this.armor[t].numChildren > 0) {
                let e = this.armor[t].removeChildAt(0);
                $t.CollectObject(e.name, e)
            }
            this.recyclingShootEffect(!0),
            super.Remove(),
            this.mPrefab._destroyComponent(this),
            $t.CollectObject(this.mPrefab.name, this.mPrefab)
        }
        AttackStage(t) {
            if (U.Instance.PlayEffectAudio("shoot"), this.addShootEffect(), this.elite) {
                this.hitEnemy.splice(0);
                let t = new Vt(this.jujiqiangBox);
                if (this.camp == a.Enermy) {
                    for (let e = q.Instance.mainScene.GetMap.roleList.length - 1; e >= 0; e--) {
                        let i = !0;
                        for (let t = 0; t < this.hitEnemy.length; t++) if (this.hitEnemy[t] == q.Instance.mainScene.GetMap.roleList[e]) {
                            i = !1;
                            break
                        }
                        i && q.Instance.mainScene.GetMap.roleList[e].IsChoosable(this) && zt.IntersectOBB(t, q.Instance.mainScene.GetMap.roleList[e].box) && (q.Instance.mainScene.GetMap.roleList[e].ChangeHp( - this.GetAttack()), this.hitEnemy.push(q.Instance.mainScene.GetMap.roleList[e]))
                    }
                    for (let e = 0; e < q.Instance.mainScene.GetMap.headquartersList.length; e++) {
                        for (let i = 0; i < q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList.length; i++) if (q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList[i].attackList.length > 0) for (let a = q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList[i].attackList.length - 1; a >= 0; a--) {
                            let s = !0;
                            for (let t = 0; t < this.hitEnemy.length; t++) if (this.hitEnemy[t] == q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList[i].attackList[a]) {
                                s = !1;
                                break
                            }
                            s && q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList[i].attackList[a].IsChoosable(this) && zt.IntersectOBB(t, q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList[i].attackList[a].box) && (q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList[i].attackList[a].ChangeHp( - this.GetAttack()), this.hitEnemy.push(q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList[i].attackList[a]))
                        }
                        for (let i = 0; i < q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList.length; i++) if (q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList[i].attackList.length > 0) for (let a = q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList[i].attackList.length - 1; a >= 0; a--) {
                            let s = !0;
                            for (let t = 0; t < this.hitEnemy.length; t++) if (this.hitEnemy[t] == q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList[i].attackList[a]) {
                                s = !1;
                                break
                            }
                            s && q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList[i].attackList[a].IsChoosable(this) && zt.IntersectOBB(t, q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList[i].attackList[a].box) && (q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList[i].attackList[a].ChangeHp( - this.GetAttack()), this.hitEnemy.push(q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList[i].attackList[a]))
                        }
                        for (let i = 0; i < q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList.length; i++) if (q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList[i].attackList.length > 0) for (let a = q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList[i].attackList.length - 1; a >= 0; a--) {
                            let s = !0;
                            for (let t = 0; t < this.hitEnemy.length; t++) if (this.hitEnemy[t] == q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList[i].attackList[a]) {
                                s = !1;
                                break
                            }
                            s && q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList[i].attackList[a].IsChoosable(this) && zt.IntersectOBB(t, q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList[i].attackList[a].box) && (q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList[i].attackList[a].ChangeHp( - this.GetAttack()), this.hitEnemy.push(q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList[i].attackList[a]))
                        }
                    }
                } else for (let e = q.Instance.mainScene.GetMap.enemyGatheringList.length - 1; e >= 0; e--) for (let i = q.Instance.mainScene.GetMap.enemyGatheringList[e].enemyList.length - 1; i >= 0; i--) {
                    let a = q.Instance.mainScene.GetMap.enemyGatheringList[e].enemyList[i],
                    s = !0;
                    for (let t = 0; t < this.hitEnemy.length; t++) if (this.hitEnemy[t] == a) {
                        s = !1;
                        break
                    }
                    s && !a.IsDie && zt.IntersectOBB(t, a.box) && (a.ChangeHp( - this.GetAttack()), this.hitEnemy.push(a))
                }
            } else {
                let t = $t.GetPoolPrefab(_.resourcesDataCfg.ef_ljxf_zidan, j.LoaderPrefabs[_.resourcesDataCfg.ef_ljxf_zidan], q.Instance.mainScene.GetScene);
                t.active = !0,
                t.transform.position = this.gunPoint.transform.position.clone();
                let e = t.getComponent(ee);
                e || (e = t.addComponent(ee)),
                e.Reset(this, s.SoldierBullet),
                q.Instance.mainScene.GetMap.lastList.push(e)
            }
        }
        DieEnter() {
            super.DieEnter(),
            U.Instance.PlayEffectAudio("AI_die")
        }
        AttackEnd() {
            super.AttackEnd()
        }
        moveDisPatchPoint(t) {
            this.dispatchPoint = t,
            this.isMoveTarget = !0,
            this.action && !this.IsDie && this.action.ChangeAction(e.Move)
        }
        addShootEffect() {
            let t = this.gunLevel,
            e = this.effShoot[t];
            if (this.elite && (t = 3, e = this.mPrefab), this.shootEffect[t]) {
                let i = $t.GetPoolPrefab(this.shootEffect[t].name, this.shootEffect[t], e);
                i.active = !0,
                this.shootEffectList.push({
                    startTime: Laya.timer.currTimer,
                    shoot: i
                }),
                this.elite && (this.jujiqiangBox = i.getChildAt(0).getChildByName("box"))
            }
        }
        recyclingShootEffect(t = !1) {
            for (let e = 0; e < this.shootEffectList.length; e++) {
                let i = this.shootEffectList[e]; (t || Laya.timer.currTimer - i.startTime >= 1e3) && ($t.CollectObject(i.shoot.name, i.shoot), this.shootEffectList.splice(e, 1), e--)
            }
        }
    }
    class oe extends ne {
        setSelfMat() {
            switch (this.camp) {
            case a.Enermy:
                this.selfMat = q.Instance.mainScene.GetMap.roleMat.enemy,
                this.maxHp = q.Instance.lastLevelData.AI2_HP,
                this.attack = q.Instance.lastLevelData.AI2_atk,
                this.speed = q.Instance.lastLevelData.AI_speed,
                this.attackRange = q.Instance.lastLevelData.AI2_atk_range;
                break;
            case a.Player:
                this.selfMat = q.Instance.mainScene.GetMap.roleMat.player,
                this.maxHp = q.Instance.lastLevelData.AI1_HP,
                this.attack = q.Instance.lastLevelData.AI1_atk,
                this.speed = q.Instance.lastLevelData.AI_speed,
                this.attackRange = q.Instance.lastLevelData.AI1_atk_range,
                this.gunLevel = this.dispatchTroops.headquarters.getWeaponLevel,
                this.armourLevel = this.dispatchTroops.headquarters.getArmourLevel
            }
        }
        UpdateObj() {
            super.UpdateObj(),
            this.camp == a.Player && this.isActiva && !this.IsDie && (Xt.IsDistances(this.GetPosition, this.dispatchTroops.headquarters.theirRole.GetPosition, V.grade.buffRange) ? this.RoleBuff() : this.RoleBuffEnd())
        }
        IsTargetNull() {
            if (null == this.attackTarget || this.attackTarget.IsDie) return this.attackTarget = null,
            !0;
            switch (this.camp) {
            case a.Enermy:
                if (!Xt.IsDistances(this.GetPosition, this.attackTarget.GetPosition, this.perceptionRange)) return ! 0
            }
            return ! 1
        }
        Die() {
            super.Die(),
            null != this.dispatchTroops && (q.Instance.lastSoliderNum -= 1, p.RemoveArrayKey(this.dispatchTroops.attackList, this), Laya.stage.event(u.UPDATE_PLAYER)),
            Laya.Tween.to(this.model.transform, {
                localPositionY: -1.5
            },
            800, Laya.Ease.linearNone, Laya.Handler.create(this, () =>{
                null != this.gathering && this.gathering.EnemeyDie(this),
                this.Remove()
            }))
        }
        getHero() {}
    }
    class re extends te {
        constructor() {
            super(...arguments),
            this.tankAttackTime = 0,
            this.isAttackTime = !1,
            this.attackTime = 0
        }
        onAwake() {
            this.idleAni = null,
            this.dieAni = "break",
            super.onAwake(),
            this.gunPoint = this.mPrefab.getChildByName("gun"),
            this.tankeModel = this.owner.getChildByName("tank"),
            this.tankeModelChe = this.tankeModel.getChildByName("mod_tanke_che"),
            this.tankeModelPao = this.tankeModel.getChildByName("mod_tanke_pao"),
            this.attackStage.push(0),
            this.tankeModelChe.transform.localRotationEuler = new Laya.Vector3
        }
        Reset() {
            super.Reset(),
            this.isMoveTarget = !1,
            this.isActiva = !1,
            this.isAttackTime = !1,
            this.hp = 100,
            this.maxHp = 100,
            this.attack = 20,
            this.attackRange = 6,
            this.perceptionRange = 10,
            this.outRange = 12,
            this.speed = 7,
            this.attackInterval = 1,
            this.attackTime = 1.5,
            this.tankAttackTime = 0,
            this.tankeModel.active = !0,
            this.model.active = !1
        }
        SetCamp(t) {
            super.SetCamp(t),
            this.setSelfMat();
            for (let t = 0; t < this.model.numChildren; t++) this.model.getChildAt(t).meshRenderer.material = this.selfMat;
            switch (this.tankeModelChe.meshRenderer.material = this.selfMat, this.tankeModelPao.meshRenderer.material = this.selfMat, this.hp = this.maxHp, this.camp) {
            case a.Player:
                q.Instance.isRage && this.Rage()
            }
            this.tankeModelChe.transform.localRotationEuler = new Laya.Vector3
        }
        Die() {
            super.Die()
        }
        Remove() {
            Laya.timer.clearAll(this),
            this.recyclingBaozouEffect(),
            this.mPrefab._destroyComponent(this),
            $t.CollectObject(this.mPrefab.name, this.mPrefab)
        }
        UpdateObj() {
            super.UpdateObj(),
            null != this.action && this.action.state == e.Attack && this.isAttackTime && (this.tankAttackTime += q.Instance.mainScene.delat, this.lastAttackNum < this.attackStage.length && this.tankAttackTime >= .5 && (this.lastAttackNum += 1, this.AttackStage(this.lastAttackNum)), this.tankAttackTime >= this.attackTime && this.action.ChangeAction(e.Standby))
        }
        CollisionEnemy(t) {
            for (let e = this.gathering.enemyList.length - 1; e >= 0; e--) if (this.gathering.enemyList[e].IsCollision(this) && Xt.IsDistances(new Laya.Vector3(this.GetPosition.x + t.x, this.GetPosition.y, this.GetPosition.z + t.z), this.gathering.enemyList[e].GetPosition, 1)) {
                let i = !1;
                if (!this.gathering) return;
                if (this.gathering.obsList.length > 0) for (let t = 0; t < this.gathering.obsList.length; t++) if (Xt.IsDistances(this.gathering.enemyList[e].GetPosition, this.gathering.obsList[t].center, 17.5) && (zt.IntersectOBB(this.gathering.enemyList[e].box, this.gathering.obsList[t]) || zt.IntersectOBB(this.gathering.enemyList[e].box, this.gathering.obsList[t]))) {
                    i = !0;
                    break
                }
                i ? (t.x = 0, t.z = 0) : this.Extrusion(this.gathering.enemyList[e])
            }
        }
        RoleBuff() {
            this.isRoleBuff || (this.tankeModelChe.meshRenderer.material = q.Instance.mainScene.GetMap.tankMat.buff, this.tankeModelPao.meshRenderer.material = q.Instance.mainScene.GetMap.tankMat.buff, super.RoleBuff())
        }
        RoleBuffEnd() {
            this.isRoleBuff && (this.tankeModelChe.meshRenderer.material = this.selfMat, this.tankeModelPao.meshRenderer.material = this.selfMat, super.RoleBuffEnd())
        }
        DieEnter() {
            super.DieEnter(),
            this.baozha = $t.GetPoolPrefab(_.resourcesDataCfg.ef_ljxf_baozha, j.LoaderPrefabs[_.resourcesDataCfg.ef_ljxf_baozha], this.owner),
            this.baozha.active = !0,
            U.Instance.PlayEffectAudio("tank_break")
        }
        AttackEnter() {
            super.AttackEnter(),
            this.tankAttackTime = 0,
            this.lastAttackNum = 0,
            this.isAttackTime = !0
        }
        AttackStage(t) {
            U.Instance.PlayEffectAudio("tank_atk"),
            $t.GetPoolPrefab(_.resourcesDataCfg.ef_ljxf_tank_shoot, j.LoaderPrefabs[_.resourcesDataCfg.ef_ljxf_tank_shoot], this.gunPoint).active = !0,
            Laya.timer.clearAll(this),
            Laya.timer.once(1200, this, this.recyclingBaozouEffect);
            let e = $t.GetPoolPrefab(_.resourcesDataCfg.ef_ljxf_tank_zidan, j.LoaderPrefabs[_.resourcesDataCfg.ef_ljxf_tank_zidan], q.Instance.mainScene.GetMap.GetMainNode);
            e.active = !0,
            e.transform.position = this.gunPoint.transform.position.clone();
            let i = e.getComponent(ee);
            i || (i = e.addComponent(ee)),
            i.Reset(this, s.TankBullet),
            q.Instance.mainScene.GetMap.lastList.push(i)
        }
        AttackEnd() {
            super.AttackEnd(),
            this.isAttackTime = !1
        }
        moveDisPatchPoint(t) {
            this.dispatchPoint = t,
            this.isMoveTarget = !0,
            this.action && this.action.ChangeAction(e.Move)
        }
        ChangePos(t) {
            switch (super.ChangePos(t), this.camp) {
            case a.Player:
                this.isMoveTarget && Xt.IsDistances(this.GetPosition, this.dispatchPoint, .1) && (this.SetRotate = new Laya.Vector3(0, 180 + this.tankBattalionCtl.GetRotate.y, 0), this.isMoveTarget = !1, this.action && this.action.ChangeAction(e.Standby))
            }
        }
        ChangeHp(t, i = -1) {
            super.ChangeHp(t, i),
            this.hp <= 0 && (this.model.active = !0, this.tankeModel.active = !1, Laya.timer.frameOnce(1, this, () =>{
                this.action && this.action.ChangeAction(e.Die, !0)
            }))
        }
        recyclingBaozouEffect() {
            if (this.gunPoint) for (; ! (this.gunPoint.numChildren <= 0);) {
                let t = this.gunPoint.removeChildAt(0);
                $t.CollectObject(t.name, t)
            }
        }
    }
    class he extends re {
        setSelfMat() {
            switch (this.camp) {
            case a.Enermy:
                this.maxHp = q.Instance.lastLevelData.tank2_HP,
                this.attack = q.Instance.lastLevelData.tank2_atk,
                this.speed = q.Instance.lastLevelData.tank2_speed,
                this.selfMat = q.Instance.mainScene.GetMap.tankMat.enemy2;
                break;
            case a.Player:
                this.selfMat = q.Instance.mainScene.GetMap.tankMat.player,
                this.maxHp = q.Instance.lastLevelData.tank_HP,
                this.attack = q.Instance.lastLevelData.tank_atk,
                this.speed = q.Instance.lastLevelData.tank_speed
            }
        }
        IsTargetNull() {
            return null == this.attackTarget || this.attackTarget.IsDie ? (this.attackTarget = null, !0) : this.camp == a.Enermy && !Xt.IsDistances(this.GetPosition, this.attackTarget.GetPosition, this.perceptionRange)
        }
        Die() {
            for (super.Die();;) {
                let t = !0;
                for (let e = 0; e < this.owner.numChildren; e++) {
                    let i = this.owner.getChildAt(e);
                    if (i.name.indexOf(_.resourcesDataCfg.ef_ljxf_baozha) >= 0) {
                        $t.CollectObject(_.resourcesDataCfg.ef_ljxf_baozha, i),
                        t = !1;
                        break
                    }
                }
                if (t) break
            }
            null != this.tankBattalionCtl && (p.RemoveArrayKey(this.tankBattalionCtl.attackList, this), q.Instance.lastSoliderNum -= 1, Laya.stage.event(u.UPDATE_PLAYER)),
            null != this.gathering && this.gathering.EnemeyDie(this),
            this.Remove()
        }
        UpdateObj() {
            super.UpdateObj(),
            this.camp == a.Player && this.isActiva && !this.IsDie && (Xt.IsDistances(this.GetPosition, this.tankBattalionCtl.headquarters.theirRole.GetPosition, V.grade.buffRange) ? this.RoleBuff() : this.RoleBuffEnd())
        }
        getHero() {}
    }
    class le extends te {
        onAwake() {
            this.idleAni = "hold",
            this.moveAni = "move_gun",
            this.dieAni = "die",
            this.attackAni = "shoot",
            this.move_shoot = "move_shoot1",
            super.onAwake(),
            this.gunPoint = p.FindChild(this.model, "penhuobing/qiangkou")
        }
        Reset() {
            super.Reset(),
            this.isMoveTarget = !1,
            this.isActiva = !1,
            this.hp = 50,
            this.maxHp = 50,
            this.attack = 10,
            this.attackRange = 5,
            this.perceptionRange = 8,
            this.outRange = 10,
            this.speed = 5,
            this.attackInterval = .5,
            this.flameInterval = .2;
            let t = this.model.transform.localPosition;
            t.y = 0,
            this.model.transform.localPosition = t
        }
        SetCamp(t, e = !1) {
            switch (this.elite = e, super.SetCamp(t), this.setSelfMat(), e && this.setSelfMat_elite(), this.hp = this.maxHp, this.mPrefab.getChildAt(0).getChildByName("mod_ljxf_role_penhuobing").simpleSkinnedMeshRenderer.material = this.selfMat, this.speed = q.Instance.lastLevelData.AI_speed, this.camp) {
            case a.Player:
                q.Instance.isRage && this.Rage()
            }
        }
        setSelfMat_elite() {
            this.maxHp = this.maxHp * _.elitesoldiersData.special_HP,
            this.attack = this.attack * _.elitesoldiersData.special_atk,
            this.attackRange = this.attackRange * _.elitesoldiersData.special_range,
            this.selfMat = q.Instance.mainScene.GetMap.eliteMat.flam
        }
        UpdateObj() {
            super.UpdateObj(),
            this.action && this.action.state == e.Attack && (this.lastFlameInterval += q.Instance.mainScene.delat, this.lastFlameInterval >= this.flameInterval && (this.lastFlameInterval = 0, this.AttackStage()))
        }
        RoleBuff() {
            this.isRoleBuff || (this.mPrefab.getChildAt(0).getChildByName("mod_ljxf_role_penhuobing").simpleSkinnedMeshRenderer.material = q.Instance.mainScene.GetMap.flamMat.buff, super.RoleBuff())
        }
        RoleBuffEnd() {
            this.isRoleBuff && (this.mPrefab.getChildAt(0).getChildByName("mod_ljxf_role_penhuobing").simpleSkinnedMeshRenderer.material = this.selfMat, super.RoleBuffEnd())
        }
        ChangePos(t) {
            if (super.ChangePos(t), this.camp == a.Player && this.isMoveTarget && Xt.IsDistances(this.GetPosition, this.dispatchPoint, .1)) {
                let t = 0;
                this.flamingTroopsCtl && (t = this.flamingTroopsCtl.GetRotate.y),
                this.SetRotate = new Laya.Vector3(0, 180 + t, 0),
                this.isMoveTarget = !1,
                q.Instance.gameModle == m.battleGame || (this.dispatchPoint = null),
                this.action && !this.IsDie && this.action.ChangeAction(e.Standby)
            }
        }
        CollisionEnemy(t) {
            for (let e = this.gathering.enemyList.length - 1; e >= 0; e--) if (this.gathering.enemyList[e].IsCollision(this) && Xt.IsDistances(new Laya.Vector3(this.GetPosition.x + t.x, this.GetPosition.y, this.GetPosition.z + t.z), this.gathering.enemyList[e].GetPosition, 1)) {
                let i = !1;
                if (!this.gathering) return;
                if (this.gathering.obsList.length > 0) for (let t = 0; t < this.gathering.obsList.length; t++) if (Xt.IsDistances(this.gathering.enemyList[e].GetPosition, this.gathering.obsList[t].center, 17.5) && (zt.IntersectOBB(this.gathering.enemyList[e].box, this.gathering.obsList[t]) || zt.IntersectOBB(this.gathering.enemyList[e].box, this.gathering.obsList[t]))) {
                    i = !0;
                    break
                }
                i ? (t.x = 0, t.z = 0) : this.Extrusion(this.gathering.enemyList[e])
            }
        }
        Die() {
            super.Die()
        }
        Remove() {
            super.Remove(),
            this.recyclingFlameEffect(),
            this.mPrefab._destroyComponent(this),
            $t.CollectObject(this.mPrefab.name, this.mPrefab)
        }
        AttackEnter() {
            if (super.AttackEnter(), this.lastFlameInterval = 0, this.gunPoint.numChildren <= 0) {
                let t = this.elite ? _.resourcesDataCfg.ef_gwyqs_duwu: _.resourcesDataCfg.ef_ljxf_fire_atk01,
                e = $t.GetPoolPrefab(t, j.LoaderPrefabs[t], this.gunPoint);
                e.active = !0,
                this.flameEffectBox = new Vt(e.getChildByName("box"))
            }
        }
        AttackStage(t = 0) {
            let e = this.SearchEnemy();
            if (e.length > 0) for (let t = e.length - 1; t >= 0; t--) null == e[t] || e[t].IsDie || (e[t].Flam(this.elite), e[t].ChangeHp( - this.GetAttack(), this.capmIndex))
        }
        AttackUpdate() {
            super.AttackUpdate(),
            Xt.IsDistances(this.attackTarget.GetPosition, this.GetPosition, this.attackRange) || this.action && !this.IsDie && this.action.ChangeAction(e.Move)
        }
        DieEnter() {
            super.DieEnter(),
            this.lastFlameInterval = 0,
            U.Instance.PlayEffectAudio("AI_die")
        }
        AttackEnd() {
            super.AttackEnd(),
            this.recyclingFlameEffect()
        }
        moveDisPatchPoint(t) {
            this.dispatchPoint = t,
            this.isMoveTarget = !0,
            this.action && !this.IsDie && this.action.ChangeAction(e.Move)
        }
        SearchEnemy() {
            if (null == this.flameEffectBox || null == this.flameEffectBox) return [];
            let t = [];
            if (this.flameEffectBox.update(), this.camp == a.Player) {
                for (let e = q.Instance.mainScene.GetMap.enemyGatheringList.length - 1; e >= 0; e--) if (q.Instance.mainScene.GetMap.enemyGatheringList[e].enemyList.length > 0) for (let i = q.Instance.mainScene.GetMap.enemyGatheringList[e].enemyList.length - 1; i >= 0; i--) q.Instance.mainScene.GetMap.enemyGatheringList[e].enemyList[i].IsChoosable(this) && zt.IntersectOBB(this.flameEffectBox, q.Instance.mainScene.GetMap.enemyGatheringList[e].enemyList[i].box) && t.push(q.Instance.mainScene.GetMap.enemyGatheringList[e].enemyList[i])
            } else if (this.camp == a.Enermy) {
                for (let e = q.Instance.mainScene.GetMap.roleList.length - 1; e >= 0; e--) q.Instance.mainScene.GetMap.roleList[e].IsChoosable(this) && zt.IntersectOBB(this.flameEffectBox, q.Instance.mainScene.GetMap.roleList[e].box) && t.push(q.Instance.mainScene.GetMap.roleList[e]);
                for (let e = 0; e < q.Instance.mainScene.GetMap.headquartersList.length; e++) {
                    for (let i = 0; i < q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList.length; i++) if (q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList[i].attackList.length > 0) for (let a = q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList[i].attackList.length - 1; a >= 0; a--) q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList[i].attackList[a].IsChoosable(this) && zt.IntersectOBB(this.flameEffectBox, q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList[i].attackList[a].box) && t.push(q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList[i].attackList[a]);
                    for (let i = 0; i < q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList.length; i++) if (q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList[i].attackList.length > 0) for (let a = q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList[i].attackList.length - 1; a >= 0; a--) q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList[i].attackList[a].IsChoosable(this) && zt.IntersectOBB(this.flameEffectBox, q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList[i].attackList[a].box) && t.push(q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList[i].attackList[a]);
                    for (let i = 0; i < q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList.length; i++) if (q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList[i].attackList.length > 0) for (let a = q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList[i].attackList.length - 1; a >= 0; a--) q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList[i].attackList[a].IsChoosable(this) && zt.IntersectOBB(this.flameEffectBox, q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList[i].attackList[a].box) && t.push(q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList[i].attackList[a]);
                    for (let i = 0; i < q.Instance.mainScene.GetMap.headquartersList[e].medicalTroopsCtlList.length; i++) if (q.Instance.mainScene.GetMap.headquartersList[e].medicalTroopsCtlList[i].attackList.length > 0) for (let a = q.Instance.mainScene.GetMap.headquartersList[e].medicalTroopsCtlList[i].attackList.length - 1; a >= 0; a--) q.Instance.mainScene.GetMap.headquartersList[e].medicalTroopsCtlList[i].attackList[a].IsChoosable(this) && zt.IntersectOBB(this.flameEffectBox, q.Instance.mainScene.GetMap.headquartersList[e].medicalTroopsCtlList[i].attackList[a].box) && t.push(q.Instance.mainScene.GetMap.headquartersList[e].medicalTroopsCtlList[i].attackList[a])
                }
            }
            return t
        }
        recyclingFlameEffect() {
            for (; ! (this.gunPoint.numChildren <= 0);) {
                let t = this.gunPoint.removeChildAt(0);
                $t.CollectObject(t.name, t)
            }
            this.flameEffectBox && (this.flameEffectBox = null)
        }
        IsNullAttackTarget() {
            super.SelectAttackTarget()
        }
    }
    class ce extends le {
        setSelfMat() {
            switch (this.camp) {
            case a.Enermy:
                this.selfMat = q.Instance.mainScene.GetMap.flamMat.enemy,
                this.maxHp = q.Instance.lastLevelData.AI4_HP,
                this.attack = q.Instance.lastLevelData.AI4_atk,
                this.attackRange = q.Instance.lastLevelData.AI4_atk_range;
                break;
            case a.Player:
                this.selfMat = q.Instance.mainScene.GetMap.flamMat.player,
                this.maxHp = q.Instance.lastLevelData.AI3_HP,
                this.attack = q.Instance.lastLevelData.AI3_atk,
                this.attackRange = q.Instance.lastLevelData.AI3_atk_range
            }
        }
        UpdateObj() {
            super.UpdateObj(),
            this.camp == a.Player && this.isActiva && !this.IsDie && (Xt.IsDistances(this.GetPosition, this.flamingTroopsCtl.headquarters.theirRole.GetPosition, V.grade.buffRange) ? this.RoleBuff() : this.RoleBuffEnd())
        }
        IsTargetNull() {
            if (null == this.attackTarget || this.attackTarget.IsDie) return this.attackTarget = null,
            !0;
            switch (this.camp) {
            case a.Enermy:
                if (!Xt.IsDistances(this.GetPosition, this.attackTarget.GetPosition, this.perceptionRange)) return ! 0
            }
            return ! 1
        }
        Die() {
            super.Die(),
            null != this.flamingTroopsCtl && (q.Instance.lastSoliderNum -= 1, p.RemoveArrayKey(this.flamingTroopsCtl.attackList, this), Laya.stage.event(u.UPDATE_PLAYER)),
            Laya.Tween.to(this.model.transform, {
                localPositionY: -1.5
            },
            800, Laya.Ease.linearNone, Laya.Handler.create(this, () =>{
                null != this.gathering && this.gathering.EnemeyDie(this),
                this.Remove()
            }))
        }
        getHero() {}
    }
    class de extends te {
        constructor() {
            super(...arguments),
            this.effShoot = [],
            this.gunPointList = [],
            this.gunList = [],
            this.armor = {
                shouwan_1: null,
                shouwan_2: null,
                kuijia: null
            },
            this.shootEffectList = [],
            this.gunNameList = [_.resourcesDataCfg.gun_shouqiang, _.resourcesDataCfg.gun_dianqiang, _.resourcesDataCfg.gun_dapao],
            this.gunButtleList = [_.resourcesDataCfg.ef_gwyqs_krz_dianji1, _.resourcesDataCfg.ef_gwyqs_krz_dianji2_F, _.resourcesDataCfg.ef_gwyqs_krz_dianji3]
        }
        onAwake() {
            this.idleAni = "hold_shouqiang",
            this.moveAni = "move_shouqiang",
            this.attackAni = "atk_shouqiang",
            this.dieAni = "die",
            super.onAwake(),
            this.gunPointList.push(this.model.getChildByName("shouqiang_qiangkou")),
            this.gunPointList.push(this.model.getChildByName("dianqiang_qiangkou")),
            this.gunPointList.push(this.model.getChildByName("dapao_qiangkou")),
            this.gunList.push(this.model.getChildByName("shouqiang")),
            this.gunList.push(this.model.getChildByName("dianqiang")),
            this.gunList.push(this.model.getChildByName("dapao")),
            this.armor.shouwan_1 = this.model.getChildByName("shouwan_01"),
            this.armor.shouwan_2 = this.model.getChildByName("shouwan_02"),
            this.armor.kuijia = this.model.getChildByName("kuijia"),
            this.attackStage.push(.3)
        }
        Reset() {
            super.Reset(),
            this.isMoveTarget = !1,
            this.isActiva = !1,
            this.hp = 50,
            this.maxHp = 50,
            this.attack = 10,
            this.attackRange = 5,
            this.perceptionRange = 8,
            this.outRange = 10,
            this.speed = 5,
            this.attackInterval = 1;
            let t = this.model.transform.localPosition;
            t.y = 0,
            this.model.transform.localPosition = t,
            this.shootEffectList = []
        }
        SetCamp(t, e = !1) {
            switch (super.SetCamp(t), this.elite = e, this.gunIntervalList.push(1, .9, .8), this.ChangeWeaponLevel(), this.selfMat = q.Instance.mainScene.GetMap.zealotMat.
        default, this.speed = q.Instance.lastLevelData.AI_speed, this.gunLevel) {
            case 0:
                this.maxHp = q.Instance.lastLevelData.krz_HP1,
                this.attack = q.Instance.lastLevelData.krz_atk1,
                this.attackRange = q.Instance.lastLevelData.krz_range1;
                break;
            case 1:
                this.maxHp = q.Instance.lastLevelData.krz_HP2,
                this.attack = q.Instance.lastLevelData.krz_atk2,
                this.attackRange = q.Instance.lastLevelData.krz_range2;
                break;
            case 2:
                this.maxHp = q.Instance.lastLevelData.krz_HP3,
                this.attack = q.Instance.lastLevelData.krz_atk3,
                this.attackRange = q.Instance.lastLevelData.krz_range3
            }
            e && (this.maxHp = this.maxHp * _.elitesoldiersData.special_HP, this.attack = this.attack * _.elitesoldiersData.special_atk, this.attackRange = this.attackRange * _.elitesoldiersData.special_range, this.selfMat = q.Instance.mainScene.GetMap.zealotMat.elite),
            this.hp = this.maxHp,
            this.model.getChildByName("mod_shenzu").simpleSkinnedMeshRenderer.material = this.selfMat,
            this.ChangeArmourLevel()
        }
        generationObj(t, e, i = !0) {
            let a = $t.GetPoolPrefab(t, j.LoaderPrefabs[t], e);
            a.active = !0,
            a.transform.localPosition = new Laya.Vector3(0, 0, 0),
            a.transform.localRotationEuler = new Laya.Vector3(0, 0, 0),
            i && (a.getChildAt(0).getChildAt(0).meshRenderer.material = this.selfMat)
        }
        ChangeWeaponLevel() {
            switch (this.gunLevel > 2 ? this.gunLevel = 2 : this.gunLevel < 0 && (this.gunLevel = 0), this.attackInterval = this.gunIntervalList[this.gunLevel], this.gunLevel) {
            case 0:
                this.idleAni = "hold_shouqiang",
                this.moveAni = "move_shouqiang",
                this.attackAni = "atk_shouqiang";
            case 1:
                this.idleAni = "hold_dianqiang",
                this.moveAni = "move_dianqiang",
                this.attackAni = "atk_dianqiang";
                break;
            case 2:
                this.idleAni = "hold_dapao",
                this.moveAni = "move_dapao",
                this.attackAni = "atk_dapao"
            }
            this.action && this.action.ChangeAction(e.Standby),
            this.generationObj(this.gunNameList[this.gunLevel], this.gunList[this.gunLevel], !1)
        }
        ChangeArmourLevel() {
            switch (super.ChangeArmourLevel(), this.armourLevel) {
            case 0:
                break;
            case 1:
                this.generationObj(_.resourcesDataCfg.shouwan_1, this.armor.shouwan_1),
                this.generationObj(_.resourcesDataCfg.shouwan_2, this.armor.shouwan_2);
                break;
            case 2:
                this.generationObj(_.resourcesDataCfg.kuijia, this.armor.kuijia)
            }
        }
        UpdateObj() {
            super.UpdateObj()
        }
        RoleBuff() {}
        RoleBuffEnd() {}
        ChangePos(t) {
            super.ChangePos(t)
        }
        IsTargetNull() {
            if (null == this.attackTarget || this.attackTarget.IsDie) return this.attackTarget = null,
            !0;
            switch (this.camp) {
            case a.Enermy:
                if (!Xt.IsDistances(this.GetPosition, this.attackTarget.GetPosition, this.perceptionRange)) return ! 0
            }
            return ! 1
        }
        Die() {
            super.Die(),
            null != this.dispatchTroops && (q.Instance.lastSoliderNum -= 1, p.RemoveArrayKey(this.dispatchTroops.attackList, this), Laya.stage.event(u.UPDATE_PLAYER)),
            Laya.Tween.to(this.model.transform, {
                localPositionY: -1.5
            },
            800, Laya.Ease.linearNone, Laya.Handler.create(this, () =>{
                null != this.gathering && this.gathering.EnemeyDie(this),
                this.Remove()
            }))
        }
        Remove() {
            for (let t = 0; t < this.gunList.length; t++) if (this.gunList[t].numChildren > 0) {
                let e = this.gunList[t].removeChildAt(0);
                $t.CollectObject(e.name, e)
            }
            for (const t in this.armor) if (Object.prototype.hasOwnProperty.call(this.armor, t) && null != this.armor[t] && this.armor[t].numChildren > 0) {
                let e = this.armor[t].removeChildAt(0);
                $t.CollectObject(e.name, e)
            }
            super.Remove(),
            $t.CollectObject(this.mPrefab.name, this.mPrefab)
        }
        AttackStage(t) {
            U.Instance.PlayEffectAudio("dian_atk");
            let e = $t.GetPoolPrefab(this.gunButtleList[this.gunLevel], j.LoaderPrefabs[this.gunButtleList[this.gunLevel]], q.Instance.mainScene.GetScene);
            e.active = !0,
            e.transform.position = this.gunPointList[this.gunLevel].transform.position.clone();
            let i = e.getComponent(ee);
            i || (i = e.addComponent(ee)),
            i.Reset(this, s.ZealotBullet),
            q.Instance.mainScene.GetMap.lastList.push(i)
        }
        DieEnter() {
            super.DieEnter(),
            U.Instance.PlayEffectAudio("AI_die")
        }
        AttackEnd() {
            super.AttackEnd()
        }
    }
    class me extends Bt {
        onAwake() {
            super.onAwake()
        }
        Reset() {
            if (this.model = this.owner.getChildAt(0), this.model) {
                let t = this.model.transform.localPosition;
                t.y = 0,
                this.model.transform.localPosition = t,
                this.animator = this.model.getComponent(Laya.Animator),
                this.animator && (this.animator.play("die", 0, 0), Laya.timer.frameLoop(1, this, this.beetledeadAnimatorUpdate))
            }
        }
        onDisable() {
            super.onDisable()
        }
        Remove() {
            $t.CollectObject(this.mPrefab.name, this.mPrefab)
        }
        UpdateObj() {
            super.UpdateObj()
        }
        beetledeadAnimatorUpdate() {
            if (this.animator) {
                let t = this.animator.getCurrentAnimatorPlayState(); (null == t || "die" == t.animatorState.name && t.normalizedTime >= 1) && (Laya.timer.clear(this, this.beetledeadAnimatorUpdate), Laya.Tween.to(this.model.transform, {
                    localPositionY: -1.5
                },
                800, Laya.Ease.linearNone, Laya.Handler.create(this, () =>{
                    this.Remove()
                })))
            }
        }
    }
    class ge extends te {
        constructor() {
            super(...arguments),
            this.shootEffectList = []
        }
        onAwake() {
            this.idleAni = "hold",
            this.moveAni = "move",
            this.attackAni = "shoot",
            super.onAwake(),
            this.gunPoint = this.owner.getChildByName("gunPoint"),
            this.attackStage.push(.3)
        }
        Reset() {
            super.Reset(),
            this.isMoveTarget = !1,
            this.isActiva = !1,
            this.hp = 50,
            this.maxHp = 50,
            this.attack = 10,
            this.attackRange = 5,
            this.perceptionRange = 8,
            this.outRange = 10,
            this.speed = 5,
            this.attackInterval = 1;
            let t = this.model.transform.localPosition;
            t.y = 0,
            this.model.transform.localPosition = t,
            this.shootEffectList = [],
            this.isRemove = !1
        }
        SetCamp(t, e = !1) {
            super.SetCamp(t),
            this.elite = e,
            this.gunIntervalList.push(1, .9, .8),
            this.selfMat = q.Instance.mainScene.GetMap.beetleMat.
        default,
            this.maxHp = q.Instance.lastLevelData.mmc_HP,
            this.attack = q.Instance.lastLevelData.mmc_atk,
            this.speed = q.Instance.lastLevelData.AI_speed,
            this.attackRange = q.Instance.lastLevelData.mmc_range,
            e && (this.maxHp = this.maxHp * _.elitesoldiersData.special_HP, this.attack = this.attack * _.elitesoldiersData.special_atk, this.attackRange = this.attackRange * _.elitesoldiersData.special_range, this.selfMat = q.Instance.mainScene.GetMap.beetleMat.elite),
            this.hp = this.maxHp,
            this.model.getChildByName("mod_jiachong_01").simpleSkinnedMeshRenderer.material = this.selfMat,
            this.ChangeWeaponLevel(),
            this.ChangeArmourLevel()
        }
        ChangeWeaponLevel() {
            super.ChangeWeaponLevel()
        }
        ChangeArmourLevel() {
            super.ChangeArmourLevel()
        }
        UpdateObj() {
            this.hp <= 0 || super.UpdateObj()
        }
        RoleBuff() {}
        RoleBuffEnd() {}
        ChangePos(t) {
            this.hp <= 0 || super.ChangePos(t)
        }
        IsTargetNull() {
            if (! (this.hp <= 0)) {
                if (null == this.attackTarget || this.attackTarget.IsDie) return this.attackTarget = null,
                !0;
                switch (this.camp) {
                case a.Enermy:
                    if (!Xt.IsDistances(this.GetPosition, this.attackTarget.GetPosition, this.perceptionRange)) return ! 0
                }
                return ! 1
            }
        }
        Remove() {
            super.Remove(),
            $t.CollectObject(this.mPrefab.name, this.mPrefab)
        }
        AttackStage(t) {
            U.Instance.PlayEffectAudio("dian_atk");
            let e = $t.GetPoolPrefab(_.resourcesDataCfg.ef_gwyqs_mmc_dianqiu, j.LoaderPrefabs[_.resourcesDataCfg.ef_gwyqs_mmc_dianqiu], q.Instance.mainScene.GetScene);
            e.active = !0,
            e.transform.position = this.gunPoint.transform.position.clone();
            let i = e.getComponent(ee);
            i || (i = e.addComponent(ee)),
            i.Reset(this, s.BeetleBullet),
            q.Instance.mainScene.GetMap.lastList.push(i)
        }
        Die() {
            super.Die(),
            null != this.dispatchTroops && (q.Instance.lastSoliderNum -= 1, p.RemoveArrayKey(this.dispatchTroops.attackList, this), Laya.stage.event(u.UPDATE_PLAYER)),
            null != this.gathering && this.gathering.EnemeyDie(this),
            this.Remove()
        }
        DieEnter() {
            super.DieEnter(),
            U.Instance.PlayEffectAudio("AI_die")
        }
        AttackEnd() {
            super.AttackEnd()
        }
        ChangeHp(t) {
            if (null != t && NaN != t && null != t || (t = -1), !(this.hp <= 0)) {
                if (t < 0 && this.shield > 0) {
                    if (this.shield += t, t = this.shield, this.shield >= 0) return;
                    this.shield = 0
                }
                this.hp += t,
                this.hp <= 0 ? (this.hp = 0, this.showBeetleDead()) : this.hp > this.maxHp && (this.hp = this.maxHp)
            }
        }
        showBeetleDead() {
            this.DieEnter();
            let t = $t.GetPoolPrefab(_.resourcesDataCfg.beetledead, j.LoaderPrefabs[_.resourcesDataCfg.beetledead], q.Instance.mainScene.GetScene);
            t.active = !0,
            t.transform.position = this.GetPosition;
            let e = t.getChildAt(0);
            for (let t = 0; t < e.numChildren; t++) e.getChildAt(t).meshRenderer.material = this.selfMat;
            let i = t.getComponent(me);
            i || (i = t.addComponent(me)),
            i.Reset(),
            this.Die()
        }
    }
    class ue extends te {
        constructor() {
            super(...arguments),
            this.shootEffectList = []
        }
        onAwake() {
            this.idleAni = "hold",
            this.moveAni = "move",
            this.attackAni = "shoot",
            this.dieAni = "die",
            super.onAwake(),
            this.gunPoint = this.owner.getChildByName("gunPoint"),
            this.attackStage.push(.3)
        }
        Reset() {
            super.Reset(),
            this.isMoveTarget = !1,
            this.isActiva = !1,
            this.hp = 50,
            this.maxHp = 50,
            this.attack = 10,
            this.attackRange = 5,
            this.perceptionRange = 8,
            this.outRange = 10,
            this.speed = 5,
            this.attackInterval = 1;
            let t = this.model.transform.localPosition;
            t.y = 0,
            this.model.transform.localPosition = t,
            this.shootEffectList = []
        }
        SetCamp(t, e = !1) {
            super.SetCamp(t),
            this.elite = e,
            this.gunIntervalList.push(1, .9, .8),
            this.selfMat = q.Instance.mainScene.GetMap.eragonMat.
        default,
            this.maxHp = q.Instance.lastLevelData.lqs_HP,
            this.attack = q.Instance.lastLevelData.lqs_atk,
            this.speed = q.Instance.lastLevelData.AI_speed,
            this.attackRange = q.Instance.lastLevelData.lqs_range,
            e && (this.maxHp = this.maxHp * _.elitesoldiersData.special_HP, this.attack = this.attack * _.elitesoldiersData.special_atk, this.attackRange = this.attackRange * _.elitesoldiersData.special_range, this.selfMat = q.Instance.mainScene.GetMap.eragonMat.elite),
            this.hp = this.maxHp,
            this.model.getChildByName("mod_longqishi_01").simpleSkinnedMeshRenderer.material = this.selfMat,
            this.ChangeWeaponLevel(),
            this.ChangeArmourLevel()
        }
        ChangeWeaponLevel() {
            super.ChangeWeaponLevel()
        }
        ChangeArmourLevel() {
            super.ChangeArmourLevel()
        }
        UpdateObj() {
            super.UpdateObj()
        }
        RoleBuff() {}
        RoleBuffEnd() {}
        ChangePos(t) {
            super.ChangePos(t)
        }
        IsTargetNull() {
            if (null == this.attackTarget || this.attackTarget.IsDie) return this.attackTarget = null,
            !0;
            switch (this.camp) {
            case a.Enermy:
                if (!Xt.IsDistances(this.GetPosition, this.attackTarget.GetPosition, this.perceptionRange)) return ! 0
            }
            return ! 1
        }
        Remove() {
            super.Remove(),
            $t.CollectObject(this.mPrefab.name, this.mPrefab)
        }
        AttackStage(t) {
            U.Instance.PlayEffectAudio("longqishi_atk");
            let e = $t.GetPoolPrefab(_.resourcesDataCfg.ef_gwyqs_lqs_zhadan, j.LoaderPrefabs[_.resourcesDataCfg.ef_gwyqs_lqs_zhadan], q.Instance.mainScene.GetScene);
            e.active = !0,
            e.transform.position = this.gunPoint.transform.position.clone();
            let i = e.getComponent(ee);
            i || (i = e.addComponent(ee)),
            i.Reset(this, s.DragonKnightBullet),
            q.Instance.mainScene.GetMap.lastList.push(i)
        }
        Die() {
            super.Die(),
            null != this.dispatchTroops && (q.Instance.lastSoliderNum -= 1, p.RemoveArrayKey(this.dispatchTroops.attackList, this), Laya.stage.event(u.UPDATE_PLAYER)),
            Laya.Tween.to(this.model.transform, {
                localPositionY: -1.5
            },
            800, Laya.Ease.linearNone, Laya.Handler.create(this, () =>{
                null != this.gathering && this.gathering.EnemeyDie(this),
                this.Remove()
            }))
        }
        DieEnter() {
            super.DieEnter(),
            U.Instance.PlayEffectAudio("AI_die")
        }
        AttackEnd() {
            super.AttackEnd()
        }
    }
    class pe extends te {
        constructor() {
            super(...arguments),
            this.shootEffectList = [],
            this.hitEnemy = []
        }
        onAwake() {
            this.idleAni = "hold",
            this.attackAni = "shoot",
            this.dieAni = "die",
            super.onAwake(),
            this.attackStage.push(.3)
        }
        Reset() {
            super.Reset(),
            this.isMoveTarget = !1,
            this.isActiva = !1,
            this.hp = 50,
            this.maxHp = 50,
            this.attack = 10,
            this.attackRange = 5,
            this.perceptionRange = 8,
            this.outRange = 10,
            this.speed = 5,
            this.attackInterval = 1;
            let t = this.model.transform.localPosition;
            t.y = 0,
            this.model.transform.localPosition = t,
            this.shootEffectList = [],
            this.turretbase = $t.GetPoolPrefab(_.resourcesDataCfg.turretbase, j.LoaderPrefabs[_.resourcesDataCfg.turretbase], q.Instance.mainScene.GetScene),
            this.turretbase.active = !0,
            this.turretbase.transform.position = this.GetPosition
        }
        SetCamp(t, e = !1) {
            super.SetCamp(t),
            this.elite = e,
            this.gunIntervalList.push(1, .9, .8),
            this.maxHp = q.Instance.lastLevelData.paota_HP,
            this.attack = q.Instance.lastLevelData.paota_atk,
            this.speed = q.Instance.lastLevelData.AI_speed,
            this.attackRange = q.Instance.lastLevelData.paota_range,
            e && (this.maxHp = this.maxHp * _.elitesoldiersData.special_HP, this.attack = this.attack * _.elitesoldiersData.special_atk, this.attackRange = this.attackRange * _.elitesoldiersData.special_range),
            this.hp = this.maxHp,
            this.ChangeWeaponLevel(),
            this.ChangeArmourLevel()
        }
        ChangeWeaponLevel() {
            super.ChangeWeaponLevel()
        }
        ChangeArmourLevel() {
            super.ChangeArmourLevel()
        }
        UpdateObj() {
            super.UpdateObj(),
            this.recyclingShootEffect()
        }
        RoleBuff() {}
        RoleBuffEnd() {}
        ChangePos(t) {}
        IsTargetNull() {
            if (null == this.attackTarget || this.attackTarget.IsDie) return this.attackTarget = null,
            !0;
            switch (this.camp) {
            case a.Enermy:
                if (!Xt.IsDistances(this.GetPosition, this.attackTarget.GetPosition, this.perceptionRange)) return ! 0
            }
            return ! 1
        }
        Remove() {
            this.recyclingShootEffect(!0),
            super.Remove(),
            $t.CollectObject(this.turretbase.name, this.turretbase),
            $t.CollectObject(this.mPrefab.name, this.mPrefab)
        }
        AttackStage(t) {
            U.Instance.PlayEffectAudio("jiguang"),
            this.addShootEffect(),
            this.hitEnemy.splice(0);
            let e = new Vt(this.jiguangBox);
            if (this.camp == a.Enermy) {
                for (let t = q.Instance.mainScene.GetMap.roleList.length - 1; t >= 0; t--) {
                    let i = !0;
                    for (let e = 0; e < this.hitEnemy.length; e++) if (this.hitEnemy[e] == q.Instance.mainScene.GetMap.roleList[t]) {
                        i = !1;
                        break
                    }
                    i && q.Instance.mainScene.GetMap.roleList[t].IsChoosable(this) && zt.IntersectOBB(e, q.Instance.mainScene.GetMap.roleList[t].box) && (q.Instance.mainScene.GetMap.roleList[t].ChangeHp( - this.GetAttack()), this.hitEnemy.push(q.Instance.mainScene.GetMap.roleList[t]))
                }
                for (let t = 0; t < q.Instance.mainScene.GetMap.headquartersList.length; t++) {
                    for (let i = 0; i < q.Instance.mainScene.GetMap.headquartersList[t].dispatchTroopsCtlList.length; i++) if (q.Instance.mainScene.GetMap.headquartersList[t].dispatchTroopsCtlList[i].attackList.length > 0) for (let a = q.Instance.mainScene.GetMap.headquartersList[t].dispatchTroopsCtlList[i].attackList.length - 1; a >= 0; a--) {
                        let s = !0;
                        for (let e = 0; e < this.hitEnemy.length; e++) if (this.hitEnemy[e] == q.Instance.mainScene.GetMap.headquartersList[t].dispatchTroopsCtlList[i].attackList[a]) {
                            s = !1;
                            break
                        }
                        s && q.Instance.mainScene.GetMap.headquartersList[t].dispatchTroopsCtlList[i].attackList[a].IsChoosable(this) && zt.IntersectOBB(e, q.Instance.mainScene.GetMap.headquartersList[t].dispatchTroopsCtlList[i].attackList[a].box) && (q.Instance.mainScene.GetMap.headquartersList[t].dispatchTroopsCtlList[i].attackList[a].ChangeHp( - this.GetAttack()), this.hitEnemy.push(q.Instance.mainScene.GetMap.headquartersList[t].dispatchTroopsCtlList[i].attackList[a]))
                    }
                    for (let i = 0; i < q.Instance.mainScene.GetMap.headquartersList[t].flamingTroopsCtlList.length; i++) if (q.Instance.mainScene.GetMap.headquartersList[t].flamingTroopsCtlList[i].attackList.length > 0) for (let a = q.Instance.mainScene.GetMap.headquartersList[t].flamingTroopsCtlList[i].attackList.length - 1; a >= 0; a--) {
                        let s = !0;
                        for (let e = 0; e < this.hitEnemy.length; e++) if (this.hitEnemy[e] == q.Instance.mainScene.GetMap.headquartersList[t].flamingTroopsCtlList[i].attackList[a]) {
                            s = !1;
                            break
                        }
                        s && q.Instance.mainScene.GetMap.headquartersList[t].flamingTroopsCtlList[i].attackList[a].IsChoosable(this) && zt.IntersectOBB(e, q.Instance.mainScene.GetMap.headquartersList[t].flamingTroopsCtlList[i].attackList[a].box) && (q.Instance.mainScene.GetMap.headquartersList[t].flamingTroopsCtlList[i].attackList[a].ChangeHp( - this.GetAttack()), this.hitEnemy.push(q.Instance.mainScene.GetMap.headquartersList[t].flamingTroopsCtlList[i].attackList[a]))
                    }
                    for (let i = 0; i < q.Instance.mainScene.GetMap.headquartersList[t].tankBattalionList.length; i++) if (q.Instance.mainScene.GetMap.headquartersList[t].tankBattalionList[i].attackList.length > 0) for (let a = q.Instance.mainScene.GetMap.headquartersList[t].tankBattalionList[i].attackList.length - 1; a >= 0; a--) {
                        let s = !0;
                        for (let e = 0; e < this.hitEnemy.length; e++) if (this.hitEnemy[e] == q.Instance.mainScene.GetMap.headquartersList[t].tankBattalionList[i].attackList[a]) {
                            s = !1;
                            break
                        }
                        s && q.Instance.mainScene.GetMap.headquartersList[t].tankBattalionList[i].attackList[a].IsChoosable(this) && zt.IntersectOBB(e, q.Instance.mainScene.GetMap.headquartersList[t].tankBattalionList[i].attackList[a].box) && (q.Instance.mainScene.GetMap.headquartersList[t].tankBattalionList[i].attackList[a].ChangeHp( - this.GetAttack()), this.hitEnemy.push(q.Instance.mainScene.GetMap.headquartersList[t].tankBattalionList[i].attackList[a]))
                    }
                    for (let i = 0; i < q.Instance.mainScene.GetMap.headquartersList[t].medicalTroopsCtlList.length; i++) if (q.Instance.mainScene.GetMap.headquartersList[t].medicalTroopsCtlList[i].attackList.length > 0) for (let a = q.Instance.mainScene.GetMap.headquartersList[t].medicalTroopsCtlList[i].attackList.length - 1; a >= 0; a--) {
                        let s = !0;
                        for (let e = 0; e < this.hitEnemy.length; e++) if (this.hitEnemy[e] == q.Instance.mainScene.GetMap.headquartersList[t].medicalTroopsCtlList[i].attackList[a]) {
                            s = !1;
                            break
                        }
                        s && q.Instance.mainScene.GetMap.headquartersList[t].medicalTroopsCtlList[i].attackList[a].IsChoosable(this) && zt.IntersectOBB(e, q.Instance.mainScene.GetMap.headquartersList[t].medicalTroopsCtlList[i].attackList[a].box) && (q.Instance.mainScene.GetMap.headquartersList[t].medicalTroopsCtlList[i].attackList[a].ChangeHp( - this.GetAttack()), this.hitEnemy.push(q.Instance.mainScene.GetMap.headquartersList[t].medicalTroopsCtlList[i].attackList[a]))
                    }
                }
            } else for (let t = q.Instance.mainScene.GetMap.enemyGatheringList.length - 1; t >= 0; t--) for (let i = q.Instance.mainScene.GetMap.enemyGatheringList[t].enemyList.length - 1; i >= 0; i--) {
                let a = q.Instance.mainScene.GetMap.enemyGatheringList[t].enemyList[i],
                s = !0;
                for (let t = 0; t < this.hitEnemy.length; t++) if (this.hitEnemy[t] == a) {
                    s = !1;
                    break
                }
                s && !a.IsDie && zt.IntersectOBB(e, a.box) && (a.ChangeHp( - this.GetAttack()), this.hitEnemy.push(a))
            }
        }
        Die() {
            super.Die(),
            null != this.dispatchTroops && (q.Instance.lastSoliderNum -= 1, p.RemoveArrayKey(this.dispatchTroops.attackList, this), Laya.stage.event(u.UPDATE_PLAYER)),
            Laya.Tween.to(this.model.transform, {
                localPositionY: -1.5
            },
            800, Laya.Ease.linearNone, Laya.Handler.create(this, () =>{
                null != this.gathering && this.gathering.EnemeyDie(this),
                this.Remove()
            }))
        }
        DieEnter() {
            super.DieEnter(),
            U.Instance.PlayEffectAudio("AI_die")
        }
        AttackEnd() {
            super.AttackEnd()
        }
        addShootEffect() {
            let t = $t.GetPoolPrefab(_.resourcesDataCfg.ef_gwyqs_paota_jiguang, j.LoaderPrefabs[_.resourcesDataCfg.ef_gwyqs_paota_jiguang], this.mPrefab);
            t.active = !0,
            this.shootEffectList.push({
                startTime: Laya.timer.currTimer,
                shoot: t
            }),
            this.jiguangBox = t.getChildAt(0).getChildByName("box")
        }
        recyclingShootEffect(t = !1) {
            for (let e = 0; e < this.shootEffectList.length; e++) {
                let i = this.shootEffectList[e]; (t || Laya.timer.currTimer - i.startTime >= 1e3) && ($t.CollectObject(i.shoot.name, i.shoot), this.shootEffectList.splice(e, 1), e--)
            }
        }
        SelectAttackTarget() {
            this.attackTarget = this.SearchAttackRole(),
            this.attackTarget && this.IsTargetAttackRange() && this.ChangeMoveForWorld()
        }
    }
    class Le {
        constructor(t) {
            this.enemyList = [],
            this.obsList = [],
            this.position = t.pos.clone(),
            this.land = $t.GetPoolPrefab(t.panel.name, j.LoaderPrefabs[t.panel.name], q.Instance.mainScene.GetScene),
            this.land.active = !0,
            this.land.transform.position = t.panel.pos.clone(),
            this.land.transform.rotation = t.panel.rot.clone(),
            this.land.transform.setWorldLossyScale(t.panel.scale.clone());
            let e = this.land.getChildAt(0).getChildByName("mod_ljxf_land_2_2").meshRenderer.material;
            if (V.starState == d.moon) this.land.getChildAt(0).getChildByName("mod_ljxf_land_2_1").meshRenderer.material = q.Instance.mainScene.GetMap.landMatList[3],
            e.albedoColor = new Laya.Vector4(115 / 255, 124 / 255, 144 / 255, 1);
            else {
                if (V.starState != d.earth) return void(this.land.getChildAt(0).getChildByName("mod_ljxf_land_2_1").meshRenderer.material = q.Instance.mainScene.GetMap.landMatList[5]);
                this.land.getChildAt(0).getChildByName("mod_ljxf_land_2_1").meshRenderer.material = q.Instance.mainScene.GetMap.landMatList[2],
                e.albedoColor = new Laya.Vector4(233 / 255, 219 / 255, 219 / 255, 1)
            }
            for (let e = 0; e < t.enemyList.length; e++) {
                let i = t.enemyList[e];
                if (i.name.indexOf("soldier") >= 0) {
                    let t = i.name.split("_"),
                    e = $t.GetPoolPrefab(_.resourcesDataCfg.soldier, j.LoaderPrefabs[_.resourcesDataCfg.soldier], q.Instance.mainScene.GetScene);
                    e.active = !0,
                    e.transform.localPosition = new Laya.Vector3(0, 0, 0),
                    e.transform.localRotationEuler = new Laya.Vector3(0, 0, 0),
                    e.transform.position = i.pos.clone(),
                    e.transform.setWorldLossyScale(i.scale.clone());
                    let s = e.getComponent(oe);
                    s || (s = e.addComponent(oe)),
                    s.Reset(),
                    s.gathering = this,
                    s.gunLevel = parseInt(t[1]),
                    s.armourLevel = parseInt(t[2]),
                    s.SetCamp(a.Enermy, i.scale.x > 1),
                    s.roleCamp = n.FightingUnit,
                    s.battleCamp = o.Soldier,
                    this.enemyList.push(s)
                } else if (i.name.indexOf("tank") >= 0) {
                    let t = $t.GetPoolPrefab(_.resourcesDataCfg.tank, j.LoaderPrefabs[_.resourcesDataCfg.tank], q.Instance.mainScene.GetScene);
                    t.active = !0,
                    t.transform.localPosition = new Laya.Vector3(0, 0, 0),
                    t.transform.localRotationEuler = new Laya.Vector3(0, 0, 0),
                    t.transform.position = i.pos.clone();
                    let e = t.getComponent(he);
                    e || (e = t.addComponent(he)),
                    e.Reset(),
                    e.gathering = this,
                    e.SetCamp(a.Enermy),
                    e.roleCamp = n.FightingUnit,
                    e.battleCamp = o.Tank,
                    this.enemyList.push(e)
                } else if (i.name.indexOf("flaming") >= 0) {
                    let t = $t.GetPoolPrefab(_.resourcesDataCfg.flamingsoldier, j.LoaderPrefabs[_.resourcesDataCfg.flamingsoldier], q.Instance.mainScene.GetScene);
                    t.active = !0,
                    t.transform.localPosition = new Laya.Vector3(0, 0, 0),
                    t.transform.localRotationEuler = new Laya.Vector3(0, 0, 0),
                    t.transform.position = i.pos.clone(),
                    t.transform.setWorldLossyScale(i.scale.clone());
                    let e = t.getComponent(ce);
                    e || (e = t.addComponent(ce)),
                    e.Reset(),
                    e.gathering = this,
                    e.SetCamp(a.Enermy, i.scale.x > 1),
                    e.roleCamp = n.FightingUnit,
                    e.battleCamp = o.Pyro,
                    this.enemyList.push(e)
                } else if (i.name.indexOf("kuangrezhe") >= 0) {
                    let t = i.name.split("_"),
                    e = $t.GetPoolPrefab(_.resourcesDataCfg.zealot, j.LoaderPrefabs[_.resourcesDataCfg.zealot], q.Instance.mainScene.GetScene);
                    e.active = !0,
                    e.transform.localPosition = new Laya.Vector3(0, 0, 0),
                    e.transform.localRotationEuler = new Laya.Vector3(0, 0, 0),
                    e.transform.position = i.pos.clone();
                    let s = i.scale.clone();
                    Laya.Vector3.scale(s, 1.2, s),
                    e.transform.setWorldLossyScale(s);
                    let r = e.getComponent(de);
                    r || (r = e.addComponent(de)),
                    r.Reset(),
                    r.gathering = this,
                    r.gunLevel = parseInt(t[1]),
                    r.armourLevel = parseInt(t[1]),
                    r.SetCamp(a.Enermy, i.scale.x > 1),
                    r.roleCamp = n.FightingUnit,
                    r.battleCamp = o.Zealot,
                    this.enemyList.push(r)
                } else if (i.name.indexOf("maomaochong") >= 0) {
                    let t = $t.GetPoolPrefab(_.resourcesDataCfg.beetle, j.LoaderPrefabs[_.resourcesDataCfg.beetle], q.Instance.mainScene.GetScene);
                    t.active = !0,
                    t.transform.localPosition = new Laya.Vector3(0, 0, 0),
                    t.transform.localRotationEuler = new Laya.Vector3(0, 0, 0),
                    t.transform.position = i.pos.clone(),
                    t.transform.setWorldLossyScale(i.scale.clone());
                    let e = t.getComponent(ge);
                    e || (e = t.addComponent(ge)),
                    e.Reset(),
                    e.gathering = this,
                    e.SetCamp(a.Enermy, i.scale.x > 1),
                    e.roleCamp = n.FightingUnit,
                    e.battleCamp = o.Beetle,
                    this.enemyList.push(e)
                } else if (i.name.indexOf("longqishi") >= 0) {
                    let t = $t.GetPoolPrefab(_.resourcesDataCfg.eragon, j.LoaderPrefabs[_.resourcesDataCfg.eragon], q.Instance.mainScene.GetScene);
                    t.active = !0,
                    t.transform.localPosition = new Laya.Vector3(0, 0, 0),
                    t.transform.localRotationEuler = new Laya.Vector3(0, 0, 0),
                    t.transform.position = i.pos.clone(),
                    t.transform.setWorldLossyScale(i.scale.clone());
                    let e = t.getComponent(ue);
                    e || (e = t.addComponent(ue)),
                    e.Reset(),
                    e.gathering = this,
                    e.SetCamp(a.Enermy, i.scale.x > 1),
                    e.roleCamp = n.FightingUnit,
                    e.battleCamp = o.DragonKnight,
                    this.enemyList.push(e)
                } else if (i.name.indexOf("paota") >= 0) {
                    let t = $t.GetPoolPrefab(_.resourcesDataCfg.turret, j.LoaderPrefabs[_.resourcesDataCfg.turret], q.Instance.mainScene.GetScene);
                    t.active = !0,
                    t.transform.localPosition = new Laya.Vector3(0, 0, 0),
                    t.transform.localRotationEuler = new Laya.Vector3(0, 0, 0),
                    t.transform.position = i.pos.clone(),
                    t.transform.setWorldLossyScale(i.scale.clone());
                    let e = t.getComponent(pe);
                    e || (e = t.addComponent(pe)),
                    e.Reset(),
                    e.gathering = this,
                    e.SetCamp(a.Enermy, i.scale.x > 1),
                    e.roleCamp = n.FightingUnit,
                    e.battleCamp = o.Turret,
                    this.enemyList.push(e)
                }
            }
            for (let e = 0; e < t.cubeList.length; e++) {
                let i = new Vt(null);
                i.set(t.cubeList[e].pos, t.cubeList[e].rot, t.cubeList[e].scale),
                this.obsList.push(i)
            }
        }
        get GetPosition() {
            return this.position
        }
        UpdateObj() {
            if (this.enemyList.length > 0) for (let t = this.enemyList.length - 1; t >= 0; t--) this.enemyList[t].UpdateObj()
        }
        EnemeyDie(t) {
            q.Instance.lastLevelNum++,
            Laya.stage.event(u.UPDATE_PRO, [q.Instance.lastLevelNum / q.Instance.maxLevelNum]),
            Laya.stage.event(u.UPDATE_ENEMY),
            p.RemoveArrayKey(this.enemyList, t),
            this.DestroyJudgment()
        }
        DestroyJudgment() {
            this.enemyList.length <= 0 && q.Instance.mainScene.GetMap.ClearEnemyGathering(this)
        }
        Remove() {
            for (; ! (this.enemyList.length <= 0);) {
                this.enemyList.pop().Remove()
            }
            this.land && $t.CollectObject(this.land.name, this.land)
        }
    }
    class fe extends Bt {
        onAwake() {
            super.onAwake(),
            this.model = this.mPrefab.getChildAt(0),
            this.boxModel = this.mPrefab.getChildByName("box"),
            this.size = p.GetBoundBoxSize(this.model),
            this.box = new Vt(this.boxModel)
        }
        set SetType(t) {
            switch (this.silverType = t, this.silverType) {
            case h.Silver:
                this.model.meshRenderer.material = q.Instance.mainScene.GetMap.mingpaiMat.yin;
                break;
            case h.Gold:
                this.model.meshRenderer.material = q.Instance.mainScene.GetMap.mingpaiMat.jin
            }
        }
        ChangePoint(t, e = null, i = new Laya.Vector3(0, 0, 0)) {
            Laya.Tween.clearAll(this.mPrefab.transform);
            let a = this.GetPosition,
            s = this.mPrefab.transform.getWorldLossyScale().clone(),
            n = this.GetRotate.clone();
            t.addChild(this.mPrefab),
            this.SetPosition = a,
            this.SetRotate = n,
            this.mPrefab.transform.setWorldLossyScale(s),
            Laya.Tween.to(this.mPrefab.transform, {
                localPositionX: i.x,
                localPositionY: i.y,
                localPositionZ: i.z,
                localRotationEulerX: 0,
                localRotationEulerY: 0,
                localRotationEulerZ: 0,
                localScaleX: 1,
                localScaleY: 1,
                localScaleZ: 1
            },
            100, Laya.Ease.linearNone, Laya.Handler.create(this, () =>{
                e && e()
            }))
        }
        Throw() {
            let t = 1 * Math.random() - .5,
            e = 1 * Math.random() - .5;
            Laya.Tween.to(this.mPrefab.transform, {
                localPositionX: t / 2 + this.mPrefab.transform.localPosition.x,
                localPositionY: this.mPrefab.transform.localPosition.y + 1 * Math.random() + .2,
                localPositionZ: this.mPrefab.transform.localPosition.z + e / 2,
                localRotationEulerX: 360
            },
            250, Laya.Ease.linearNone, Laya.Handler.create(this, () =>{
                Laya.Tween.to(this.mPrefab.transform, {
                    localPositionX: t / 2 + this.mPrefab.transform.localPosition.x,
                    localPositionY: q.Instance.mainScene.GetMap.GetPosition.y,
                    localPositionZ: this.mPrefab.transform.localPosition.z + e / 2,
                    localRotationEulerX: 720
                },
                250, Laya.Ease.linearNone, Laya.Handler.create(this, () =>{
                    q.Instance.mainScene.GetMap.silverList.push(this)
                }))
            }))
        }
        Pickup() {
            this.airdropCtl && this.airdropCtl.RemoveSilver(this),
            p.RemoveArrayKey(q.Instance.mainScene.GetMap.silverList, this)
        }
        Remove() {
            this.box = null,
            super.Remove()
        }
    }
    class Ce extends Bt {
        onAwake() {
            super.onAwake(),
            this.model = this.mPrefab.getChildAt(0),
            this.mat = this.model.meshRenderer.material,
            this.size = p.GetBoundBoxSize(this.model)
        }
        onStart() {}
        ChangeSize(t) {
            this.mPrefab.transform.localScale = new Laya.Vector3(1, 1, Math.round(t / this.size.long)),
            this.mat.tilingOffsetY = Math.round(t / this.size.long)
        }
    } !
    function(t) {
        t[t.Standby = 0] = window.lang.Standby,
        t[t.Landing = 1] = window.lang.Landing,
        t[t.Open = 2] = window.lang.Open
    } (Nt || (Nt = {}));
    class ye extends Bt {
        constructor() {
            super(...arguments),
            this.modelList = [],
            this.silverList = []
        }
        onAwake() {
            super.onAwake(),
            this.box = new Vt(this.mPrefab.getChildByName("box")),
            this.model = this.mPrefab.getChildAt(0),
            this.ani = this.model.getComponent(Laya.Animator),
            this.silverPoint = this.model.getChildByName("silverPoint");
            for (let t = 0; t < this.model.numChildren; t++) this.model.getChildAt(t).name.indexOf("mod") >= 0 && this.modelList.push(this.model.getChildAt(t));
            this.videoObj = this.model.getChildByName("Object002"),
            this.videoObj.active = !0
        }
        Reset() {
            this.airdropAction = Nt.Standby,
            this.isCollision = !1,
            this.isVideo = !1
        }
        set SetType(t) {
            this.airdropType = t;
            let e,
            i = 0;
            switch (this.speed = 5, this.airdropType) {
            case r.Normal:
                e = h.Silver,
                this.modelList.forEach(t =>{
                    t.skinnedMeshRenderer.material = q.Instance.mainScene.GetMap.kongtouMat.none
                }),
                this.videoObj.active = !1,
                i = V.kongtouNumber;
                break;
            case r.Video:
                e = h.Gold,
                this.modelList.forEach(t =>{
                    t.skinnedMeshRenderer.material = q.Instance.mainScene.GetMap.kongtouMat.video
                }),
                this.videoObj.active = !0,
                i = 20
            }
            for (let t = 0; t < i; t++) {
                let i = q.Instance.mainScene.GetMap.CreateSilver(e);
                this.silverPoint.addChild(i.GetMainNode);
                let a = i.size.height * this.silverPoint.transform.localScaleY;
                i.SetPosition = new Laya.Vector3(this.silverPoint.transform.position.x, this.silverPoint.transform.position.y + a * t, this.silverPoint.transform.position.z),
                i.SetRotate = this.silverPoint.transform.rotationEuler,
                i.GetMainNode.transform.localScale = new Laya.Vector3(1, 1, 1),
                i.airdropCtl = this,
                this.silverList.push(i)
            }
        }
        get GetType() {
            return this.airdropType
        }
        Activate() {
            this.model.transform.localPosition = new Laya.Vector3(0, 10, 0),
            this.airdropAction = Nt.Landing,
            p.changeAni(this.ani, "piaoluo")
        }
        UpdateObj() {
            switch (super.UpdateObj(), this.airdropAction) {
            case Nt.Standby:
                if (this.isCollision && Xt.IsDistances(this.GetPosition, q.Instance.mainScene.GetMap.playerCtl.GetPosition, 7) && zt.IntersectOBB(this.box, q.Instance.mainScene.GetMap.playerCtl.box)) {
                    switch (this.airdropType) {
                    case r.Normal:
                        this.open();
                        break;
                    case r.Video:
                        if (this.isVideo) return;
                        this.isVideo = !0,
                        q.Instance.GamePause(),
                        Laya.Scene.open(window.compUrl + "comp/kongtou.scene", !1, null, Laya.Handler.create(this, t =>{
                            var e = t.getComponent(st);
                            e && (e.videoFunc = (t =>{
                                this.video(t)
                            }), e.closeFunc = (() =>{
                                this.Remove(),
                                q.Instance.GameRegain()
                            }))
                        }))
                    }
                    return
                }
                break;
            case Nt.Landing:
                let t = this.model.transform.localPosition.y - this.speed * q.Instance.mainScene.delat;
                t < 0 && (t = 0),
                this.model.transform.localPosition = new Laya.Vector3(this.model.transform.localPosition.x, t, this.model.transform.localPosition.z),
                t <= 0 && (this.ef_ljxf_kongtou_piaoluo = $t.GetPoolPrefab(_.resourcesDataCfg.ef_ljxf_kongtou_piaoluo, j.LoaderPrefabs[_.resourcesDataCfg.ef_ljxf_kongtou_piaoluo], this.mPrefab), this.ef_ljxf_kongtou_piaoluo.active = !0, this.airdropAction = Nt.Standby, this.ef_ljxf_kongtou_luodi = $t.GetPoolPrefab(_.resourcesDataCfg.ef_ljxf_kongtou_luodi, j.LoaderPrefabs[_.resourcesDataCfg.ef_ljxf_kongtou_luodi], this.mPrefab), this.ef_ljxf_kongtou_luodi.active = !0, p.ChangeAni(this.ani, "shousan", null, null, new Laya.Handler(this, () =>{
                    this.isCollision = !0,
                    $t.CollectObject(this.ef_ljxf_kongtou_luodi.name, this.ef_ljxf_kongtou_luodi)
                })))
            }
        }
        video(t) {
            u.trackEvent("观看空投视频"),
            zs.platform.async.playVideo().then(e =>{
                e ? (u.trackEvent("观看空投视频成功"), this.open(), q.Instance.GameRegain(), t && t()) : (u.trackEvent("观看空投视频失败"), H.Instance.ShowTips(window.lang.watchVideoTip2), q.Instance.GameRegain(), this.isVideo = !1)
            }).
            catch(() =>{
                u.trackEvent("无观看视频资源"),
                q.Instance.GameRegain()
            })
        }
        open() {
            $t.CollectObject(this.ef_ljxf_kongtou_piaoluo.name, this.ef_ljxf_kongtou_piaoluo),
            this.isCollision = !1,
            p.ChangeAni(this.ani, "dakai", null, null, new Laya.Handler(this, () =>{
                for (let t = this.silverList.length - 1; t >= 0; t--) {
                    let e = this.silverList[t],
                    i = e.GetMainNode.transform.getWorldLossyScale(),
                    a = e.GetMainNode.transform.position,
                    s = e.GetMainNode.transform.rotationEuler;
                    q.Instance.mainScene.GetMap.GetMainNode.addChild(e.GetMainNode),
                    e.GetMainNode.transform.setWorldLossyScale(i),
                    e.SetPosition = a,
                    e.SetRotate = s,
                    q.Instance.mainScene.GetMap.silverList.push(e)
                }
            }))
        }
        RemoveSilver(t) {
            p.RemoveArrayKey(this.silverList, t),
            this.silverList.length <= 0 && this.Remove()
        }
        Remove() {
            p.RemoveArrayKey(q.Instance.mainScene.GetMap.airdropList, this),
            super.Remove()
        }
    }
    class _e extends Bt {
        constructor() {
            super(...arguments),
            this.headquarters = [],
            this.bullet = [],
            this.effect = [],
            this.out = new Laya.Vector3,
            this.outq4 = new Laya.Quaternion,
            this.up = new Laya.Vector3(0, 1, 0),
            this.rotX = 0,
            this.hitEnemy = []
        }
        onAwake() {
            super.onAwake()
        }
        resetAirShip(t) {
            U.Instance.PlayEffectAudio("feiru"),
            this.isStart = !1,
            this.rotX = 0,
            this.attackTime = Laya.timer.currTimer,
            this.jgTime = Math.floor(1e3 * Math.random() + 2400),
            Laya.Tween.to(this.mPrefab.transform.position, {
                x: t.x,
                z: t.z,
                update: new Laya.Handler(this, () =>{
                    this.mPrefab.transform.position = this.mPrefab.transform.position
                })
            },
            500)
        }
        startGame() {
            this.isStart = !0,
            this.rotX = 0
        }
        pushPool() {
            Laya.Tween.clearAll(this),
            p.RemoveArrayKey(q.Instance.mainScene.GetMap.airshipList, this),
            Laya.timer.clear(this, this.recoveryEffect),
            this.recoveryEffect(),
            this.recoveryBullet(),
            this.Remove()
        }
        Remove() {
            $t.CollectObject(this.mPrefab.name, this.mPrefab)
        }
        UpdateObj() {
            super.UpdateObj();
            let t = null;
            if (this.isStart) {
                if (this.headquarters) for (let e = 0; e < this.headquarters.length; e++) if (this.headquarters[e] && this.headquarters[e].theirRole && 0 == this.headquarters[e].theirRole.capmIndex) {
                    if (this.headquarters[e].dispatchTroopsCtlList.length > 0) for (let i = 0; i < this.headquarters[e].dispatchTroopsCtlList.length; i++) if (this.headquarters[e].dispatchTroopsCtlList[i].attackList.length > 0) {
                        t = this.headquarters[e].dispatchTroopsCtlList[i].attackList[0];
                        break
                    }
                    if (null == t) {
                        if (this.headquarters[e].tankBattalionList.length > 0) for (let i = 0; i < this.headquarters[e].tankBattalionList.length; i++) if (this.headquarters[e].tankBattalionList[i].attackList.length > 0) {
                            t = this.headquarters[e].tankBattalionList[i].attackList[0];
                            break
                        }
                        if (null == t) {
                            if (this.headquarters[e].flamingTroopsCtlList.length > 0) for (let i = 0; i < this.headquarters[e].flamingTroopsCtlList.length; i++) if (this.headquarters[e].flamingTroopsCtlList[i].attackList.length > 0) {
                                t = this.headquarters[e].flamingTroopsCtlList[i].attackList[0];
                                break
                            }
                            if (null == t && this.headquarters[e].medicalTroopsCtlList.length > 0) for (let i = 0; i < this.headquarters[e].medicalTroopsCtlList.length; i++) if (this.headquarters[e].medicalTroopsCtlList[i].attackList.length > 0) {
                                t = this.headquarters[e].medicalTroopsCtlList[i].attackList[0];
                                break
                            }
                        }
                    }
                    if (null != t) break
                }
                if (null == t) return U.Instance.PlayEffectAudio("feichu"),
                this.isStart = !1,
                void Laya.Tween.to(this.mPrefab.transform.position, {
                    z: this.mPrefab.transform.position.z + 12,
                    update: new Laya.Handler(this, () =>{
                        this.mPrefab.transform.position = this.mPrefab.transform.position
                    })
                },
                600, null, Laya.Handler.create(this, this.pushPool)); {
                    if (this.rotX > 0) return;
                    t.GetPosition.y = this.GetPosition.y;
                    let e = t.GetRotate;
                    e.y += 180,
                    this.mPrefab.transform.rotationEuler = e;
                    let i = t.GetPosition;
                    if (i.y = this.GetPosition.y, Laya.Vector3.lerp(this.GetPosition, i, .1, this.out), this.out.y = 6, this.mPrefab.transform.position = this.out.clone(), Laya.timer.currTimer - this.attackTime >= this.jgTime && (this.jgTime = Math.floor(1e3 * Math.random() + 2400), this.attackTime = Laya.timer.currTimer, t.attackTarget)) {
                        let e = t.attackTarget.GetPosition;
                        e.y = 0;
                        let i = this.GetPosition;
                        i.y = 0,
                        Xt.IsDistances(i, e, 10) && this.addButtle()
                    }
                }
            }
        }
        addButtle() {
            this.recoveryBullet(),
            U.Instance.PlayEffectAudio("feiting_jiguang");
            let t = $t.GetPoolPrefab(_.resourcesDataCfg.feichuan_jiguang, j.LoaderPrefabs[_.resourcesDataCfg.feichuan_jiguang], this.mPrefab);
            t.active = !0,
            t.transform.position = this.GetPosition,
            this.rotX = 60,
            t.transform.rotationEuler.x = this.rotX,
            t.transform.rotationEuler = t.transform.rotationEuler,
            this.box = null,
            this.box = new Vt(t.getChildByName("box")),
            this.hitEnemy.splice(0),
            this.bullet.push(t),
            Laya.Tween.to(this, {
                rotX: 0,
                update: new Laya.Handler(this, this.bulletTweenUpdate, [t])
            },
            1200, null, Laya.Handler.create(this, this.recoveryBullet))
        }
        bulletTweenUpdate(t) {
            t.transform.rotationEuler.x = this.rotX,
            t.transform.rotationEuler = t.transform.rotationEuler;
            for (let t = q.Instance.mainScene.GetMap.enemyGatheringList.length - 1; t >= 0; t--) for (let e = q.Instance.mainScene.GetMap.enemyGatheringList[t].enemyList.length - 1; e >= 0; e--) {
                let i = q.Instance.mainScene.GetMap.enemyGatheringList[t].enemyList[e],
                a = !0;
                for (let t = 0; t < this.hitEnemy.length; t++) if (this.hitEnemy[t] == i) {
                    a = !1;
                    break
                }
                a && !i.IsDie && zt.IntersectOBB(this.box, i.box) && (i.ChangeHp( - _.airShipData.airShipAttack), this.hitEnemy.push(i), this.addEffect(i.GetPosition))
            }
            if (this.headquarters) for (let t = 0; t < this.headquarters.length; t++) if (this.headquarters[t] && this.headquarters[t].theirRole && 1 == this.headquarters[t].theirRole.capmIndex) {
                if (this.headquarters[t].dispatchTroopsCtlList.length > 0) for (let e = 0; e < this.headquarters[t].dispatchTroopsCtlList.length; e++) if (this.headquarters[t].dispatchTroopsCtlList[e].attackList.length > 0) for (let i = this.headquarters[t].dispatchTroopsCtlList[e].attackList.length - 1; i >= 0; i--) {
                    let a = this.headquarters[t].dispatchTroopsCtlList[e].attackList[i],
                    s = !0;
                    for (let t = 0; t < this.hitEnemy.length; t++) if (this.hitEnemy[t] == a) {
                        s = !1;
                        break
                    }
                    s && !a.IsDie && zt.IntersectOBB(this.box, a.box) && (a.ChangeHp( - _.airShipData.airShipAttack), this.hitEnemy.push(a), this.addEffect(a.GetPosition))
                }
                if (this.headquarters[t].tankBattalionList.length > 0) for (let e = 0; e < this.headquarters[t].tankBattalionList.length; e++) if (this.headquarters[t].tankBattalionList[e].attackList.length > 0) for (let i = this.headquarters[t].tankBattalionList[e].attackList.length - 1; i >= 0; i--) {
                    let a = this.headquarters[t].tankBattalionList[e].attackList[i],
                    s = !0;
                    for (let t = 0; t < this.hitEnemy.length; t++) if (this.hitEnemy[t] == a) {
                        s = !1;
                        break
                    }
                    s && !a.IsDie && zt.IntersectOBB(this.box, a.box) && (a.ChangeHp( - _.airShipData.airShipAttack), this.hitEnemy.push(a), this.addEffect(a.GetPosition))
                }
                if (this.headquarters[t].flamingTroopsCtlList.length > 0) for (let e = 0; e < this.headquarters[t].flamingTroopsCtlList.length; e++) if (this.headquarters[t].flamingTroopsCtlList[e].attackList.length > 0) for (let i = this.headquarters[t].flamingTroopsCtlList[e].attackList.length - 1; i >= 0; i--) {
                    let a = this.headquarters[t].flamingTroopsCtlList[e].attackList[i],
                    s = !0;
                    for (let t = 0; t < this.hitEnemy.length; t++) if (this.hitEnemy[t] == a) {
                        s = !1;
                        break
                    }
                    s && !a.IsDie && zt.IntersectOBB(this.box, a.box) && (a.ChangeHp( - _.airShipData.airShipAttack), this.hitEnemy.push(a), this.addEffect(a.GetPosition))
                }
            }
        }
        recoveryBullet() {
            for (; ! (this.bullet.length <= 0);) {
                let t = this.bullet.shift();
                $t.CollectObject(t.name, t)
            }
            this.box = null
        }
        addEffect(t) {
            this.recoveryEffect();
            let e = $t.GetPoolPrefab(_.resourcesDataCfg.feichuan_jiguang_hit, j.LoaderPrefabs[_.resourcesDataCfg.feichuan_jiguang_hit], q.Instance.mainScene.GetScene);
            e.active = !0,
            e.transform.position = t,
            this.effect.push(e),
            Laya.timer.once(600, this, this.recoveryEffect)
        }
        recoveryEffect() {
            for (; ! (this.effect.length <= 0);) {
                let t = this.effect.shift();
                $t.CollectObject(t.name, t)
            }
        }
    }
    class Ie extends re {
        constructor() {
            super(...arguments),
            this.tankDi = null,
            this.localTarget = null,
            this.localV3 = new Laya.Vector3,
            this.attackNum = 0,
            this.localAtkTarget = null,
            this.localActive = !1,
            this.localspeed = 1,
            this.canFollow = !1,
            this.needFight = !1,
            this.needFightInReady = !1
        }
        Reset() {
            super.Reset(),
            this.isJoinFollow = !1,
            this.localTarget = null,
            Laya.stage.on(u.SoldierWarn, this, this.setWarn)
        }
        Remove() {
            super.Remove(),
            Laya.stage.off(u.SoldierWarn, this, this.setWarn)
        }
        onAwake() {
            super.onAwake()
        }
        setWarn(t) {
            this.isActiva && 0 == this.capmIndex && null == this.localTarget && 0 == this.needFight && (this.localTarget = t)
        }
        setSelfMat() {
            switch (this.camp) {
            case a.Enermy:
                this.maxHp = q.Instance.lastLevelData.tank2_HP,
                this.attack = q.Instance.lastLevelData.tank2_atk,
                this.speed = q.Instance.lastLevelData.tank2_speed,
                this.selfMat = q.Instance.mainScene.GetMap.tankMat.enemy2;
                break;
            case a.Player:
                0 == this.capmIndex ? this.selfMat = q.Instance.mainScene.GetMap.tankMat.player: 1 == this.capmIndex && (this.selfMat = q.Instance.mainScene.GetMap.tankMat.enemy),
                this.maxHp = q.Instance.lastLevelData.tank_HP,
                this.attack = q.Instance.lastLevelData.tank_atk,
                this.speed = q.Instance.lastLevelData.tank_speed
            }
        }
        isInFighting() {
            return 0 == this.isArriveGather && 0 == this.isMoveTarget && 0 == this.isActiva && this.attackTarget && Xt.IsDistances(this.GetPosition, this.dispatchPoint, 6)
        }
        IsTargetNull() {
            return ! (this.attackTarget && this.attackTarget.owner && !this.attackTarget.IsDie) && (this.attackTarget = null, !0)
        }
        UpdateObj() {
            if (super.UpdateObj(), !this.IsDie) {
                if (0 == this.isArriveGather && 0 == this.isMoveTarget && 0 == this.isActiva) {
                    if (this.attackTarget, this.IsTargetNull() || !Xt.IsDistances(this.GetPosition, this.attackTarget.GetPosition, 10)) return this.attackTarget = null,
                    void(this.attackTarget = this.SearchAttackRole());
                    this.dispatchPoint && Xt.IsDistances(this.GetPosition, this.dispatchPoint, 6) ? (this.mPrefab.transform.lookAt(new Laya.Vector3(this.attackTarget.GetPosition.x, this.GetPosition.y, this.attackTarget.GetPosition.z), new Laya.Vector3(0, 1, 0)), this.SelectAttackTarget(a.Enermy)) : this.isMoveTarget = !0
                }
                if (!this.IsDie && 1 == this.isActiva && 1 == this.isJoinFollow) {
                    let t = new Laya.Vector3(this.theirRole.getFollowArrayPosX_Tank(this.followPos), this.GetPosition.y, this.theirRole.getFollowArrayPoZ_Tank(this.followPos)),
                    i = q.Instance.mainScene.GetMap.obsLineArray;
                    if (!Xt.IsDistances(this.GetPosition, t, 1)) return this.isJoinFollow = !1,
                    this.isMoveTarget = !0,
                    this.isStartAtk = !1,
                    void(this.action && !this.IsDie && this.action.ChangeAction(e.Move));
                    if (i.length > 0) {
                        if (!y.pointInPolygon(t, i)) return void(this.action && !this.IsDie && this.action.ChangeAction(e.Standby));
                        this.SetPosition = t
                    }
                    if (this.canBattle(), this.attackTarget) {
                        if (this.mPrefab.transform.lookAt(new Laya.Vector3(this.attackTarget.GetPosition.x, this.GetPosition.y, this.attackTarget.GetPosition.z), new Laya.Vector3(0, 1, 0)), this.localAtkTarget = this.attackTarget, this.attackTarget.capmIndex == this.capmIndex) return void this.attackTarget;
                        this.atkMethod()
                    } else {
                        let t = this.searchBuid();
                        if (null != t) {
                            if (this.mPrefab.transform.lookAt(new Laya.Vector3(t.GetPosition.x, this.GetPosition.y, t.GetPosition.z), new Laya.Vector3(0, 1, 0)), this.attackTarget = t, this.localAtkTarget = t, this.attackTarget.capmIndex == this.capmIndex) return void this.attackTarget;
                            this.atkMethod()
                        } else this.SetRotation = this.theirRole.GetRotation,
                        this.isStartAtk = !1,
                        this.action && !this.IsDie && (this.theirRole && this.theirRole.action && 1 == this.theirRole.action.state ? this.action.ChangeAction(e.Move) : (this.theirRole && this.theirRole.action && this.theirRole.action.state, this.action.ChangeAction(e.Standby)))
                    }
                    this.tankeModelChe.transform.localRotationEuler = this.theirRole.GetMainNode.transform.localRotationEuler
                }
            }
        }
        atkMethod() {
            if (this.action && !this.IsDie) {
                this.ani.getCurrentAnimatorPlayState(0).animatorState.name,
                this.attackAni;
                0 == this.isStartAtk && (this.attackNum = 0, this.action.ChangeAction(e.Attack), this.isStartAtk = !0)
            }
        }
        Die() {
            for (this.action = null;;) {
                let t = !0;
                for (let e = 0; e < this.owner.numChildren; e++) {
                    let i = this.owner.getChildAt(e);
                    if (i.name.indexOf(_.resourcesDataCfg.ef_ljxf_baozha) >= 0) {
                        $t.CollectObject(_.resourcesDataCfg.ef_ljxf_baozha, i),
                        t = !1;
                        break
                    }
                }
                if (t) break
            }
            for (this.RoleBuffEnd(), tt.Instance.arrayChange(this.capmIndex, this), this.theirRole ? this.theirRole.ReSetArrayPos() : console.log("-*--------------摧毁了但是没重置"), null != this.tankBattalionCtl && (q.Instance.lastSoliderNum -= 1, Laya.stage.event(u.UPDATE_PLAYER));;) {
                let t = !0;
                for (let e = 0; e < this.owner.numChildren; e++) {
                    let i = this.owner.getChildAt(e);
                    if (i.name.indexOf(_.resourcesDataCfg.ef_ljxf_baozha) >= 0) {
                        $t.CollectObject(_.resourcesDataCfg.ef_ljxf_baozha, i),
                        t = !1;
                        break
                    }
                }
                if (t) break
            }
            Laya.Tween.to(this.model.transform, {
                localPositionY: -1.5
            },
            300, Laya.Ease.linearNone, Laya.Handler.create(this, () =>{
                null != this.gathering ? (console.log("---------关闭gather"), this.gathering.EnemeyDie(this)) : null != this.tankBattalionCtl && this.tankBattalionCtl.EnemeyDie(this),
                this.Remove()
            }))
        }
        onStart() {}
        TouchMove() {
            this.IsDie || (super.TouchMove(), this.theirRole && this.theirRole.action && 1 == this.isActiva && 0 == this.isStartAtk && this.action && !this.IsDie && this.action.ChangeAction(e.Move), this.theirRole && this.theirRole.action && 1 == this.isActiva && 0 == this.needFight && (this.IsTargetNull() && (this.attackTarget = this.SearchAttackRole()), this.canFollow = !0, this.localActive = !0))
        }
        TouchUp() {
            this.IsDie || (this.theirRole && this.theirRole.action && 1 == this.isActiva && 1 == this.isJoinFollow && (this.action && !this.IsDie && this.action.ChangeAction(e.Standby), 1 == this.isJoinFollow && Laya.timer.frameOnce(2, this, () =>{
                this.isArriveGather = !1
            })), 0 == this.isJoinFollow && 0 == this.isActiva && 1 == this.isArriveGather && Laya.timer.frameOnce(11, this, () =>{
                this.isActiva = !0,
                this.isArriveGather = !1
            }))
        }
        TouchDown() {
            1 == this.isActiva && (this.isStartAtk = !1)
        }
        GetSpeed() {
            let t = this.speed;
            return 0 == this.capmIndex ? t = q.Instance.mainScene.GetMap.playerCtl.GetSpeed() : this.capmIndex > 0 && (t = q.Instance.mainScene.GetMap.roleList[this.capmIndex - 1].GetSpeed()),
            t * this.localspeed
        }
        SelectAttackTarget(t = null) {
            switch (t || this.camp) {
            case a.Enermy:
                super.SelectAttackTarget();
                break;
            case a.Player:
                if (this.attackTarget = this.SearchAttackRole(), this.attackTarget) {
                    let t = this.IsTargetAttackRange();
                    switch (this.roleCamp) {
                    case n.FightingUnit:
                        t || 1 != this.needFight || this.action && !this.IsDie && this.action.ChangeAction(e.Move)
                    }
                }
            }
        }
        IsTargetAttackRange() {
            return !! Xt.IsDistances(this.attackTarget.GetPosition, this.GetPosition, this.attackRange) && (this.isAttack && (this.action && !this.IsDie && this.action.ChangeAction(e.Attack), 0 == this.capmIndex && Laya.stage.event(u.SoldierWarn, [this.attackTarget])), !0)
        }
        Activate() {
            switch (this.camp) {
            case a.Enermy:
                this.isActiva = !0,
                this.capmIndex = -1;
                break;
            case a.Player:
                this.isArriveGather = !0,
                this.isMoveTarget = !1,
                this.needFight = !1,
                this.canFollow = !1,
                this.enemyGather = new Laya.Vector3(this.theirRole.GetPosition.x, this.GetPosition.y, this.theirRole.GetPosition.z),
                this.action && !this.IsDie && this.action.ChangeAction(e.Move)
            }
        }
        canActiveMethod() {
            if (!this.isMoveTarget) switch (this.roleCamp) {
            case n.FightingUnit:
                if (this.isArriveGather) {
                    let t = 15;
                    switch (this.battleCamp) {
                    case o.Soldier:
                    case o.Pyro:
                        t = 15;
                        break;
                    case o.Tank:
                        t = 10;
                        break;
                    case o.Medic:
                        t = 17
                    } (null == this.enemyGather || Xt.IsDistances(this.GetPosition, this.enemyGather, t)) && (this.enemyGather = null, this.isArriveGather = !1, this.isActiva = !0)
                }
                break;
            case n.Player:
            }
        }
        SetRole(t) {
            this.theirRole = t,
            this.followPos = this.theirRole.setFollowArrayPos_Tank(),
            this.capmIndex = this.theirRole.capmIndex,
            0 == this.capmIndex ? this.selfMat = q.Instance.mainScene.GetMap.roleMat.player: 1 == this.capmIndex && (this.selfMat = q.Instance.mainScene.GetMap.roleMat.enemy2)
        }
        changeMat() {
            console.log("-*------------------设置皮肤", this.selfMat),
            this.model.getChildByName("mod_ljxf_NPC").simpleSkinnedMeshRenderer.material = this.selfMat
        }
        ChangePos(t) {
            if (this.isActiva && 0 != this.isJoinFollow || super.ChangePos(t), this.canFollow = !1, this.camp == a.Player) {
                let t = new Laya.Vector3(this.theirRole.getFollowArrayPosX_Tank(this.followPos), this.GetPosition.y, this.theirRole.getFollowArrayPoZ_Tank(this.followPos));
                if (this.isActiva) {
                    if (0 == this.isJoinFollow) if (Xt.IsDistances(this.GetPosition, t, .5)) this.isJoinFollow = !0;
                    else {
                        this.mPrefab.transform.lookAt(t, new Laya.Vector3(0, 1, 0));
                        let i = Laya.Vector3.distance(this.GetPosition, t);
                        this.localspeed = 1 + .2 * i,
                        this.localspeed = this.localspeed > 3 ? 3 : this.localspeed,
                        this.action && !this.IsDie && this.action.ChangeAction(e.Move)
                    }
                } else this.localspeed = 1
            }
            let i = q.Instance.mainScene.GetMap.obsLineArray;
            if (i.length > 0) {
                let e = {
                    x: this.GetPosition.x + t.x,
                    y: this.GetPosition.z + t.z
                };
                y.pointInPolygon(e, i) ? this.localV3 = this.GetPosition: this.SetPosition = this.localV3
            }
        }
        canBattle() {
            null != this.attackTarget && Xt.IsDistances(this.GetPosition, this.attackTarget.GetPosition, 10) ? this.needFight = !0 : (this.attackTarget = null, this.needFight = !1)
        }
        ChangeMoveForWorld() {
            switch (this.roleCamp) {
            case n.FightingUnit:
                if (this.isMoveTarget) this.mPrefab.transform.lookAt(new Laya.Vector3(this.dispatchPoint.x, this.GetPosition.y, this.dispatchPoint.z), new Laya.Vector3(0, 1, 0));
                else if (this.isArriveGather) this.mPrefab.transform.lookAt(new Laya.Vector3(this.theirRole.getFollowArrayPosX_Tank(this.followPos), this.GetPosition.y, this.theirRole.getFollowArrayPoZ_Tank(this.followPos)), new Laya.Vector3(0, 1, 0)),
                Xt.IsDistances(this.GetPosition, new Laya.Vector3(this.theirRole.getFollowArrayPosX_Tank(this.followPos), this.GetPosition.y, this.theirRole.getFollowArrayPoZ_Tank(this.followPos)), .5) && (this.isJoinFollow = !0, this.isArriveGather = !1, this.isActiva = !0);
                else if (this.isActiva) switch (this.needFightInReady = !1, this.camp) {
                case a.Player:
                    this.canFollow = !0;
                    break;
                case a.Enermy:
                    this.IsTargetNull() || this.mPrefab.transform.lookAt(new Laya.Vector3(this.attackTarget.GetPosition.x, this.GetPosition.y, this.attackTarget.GetPosition.z), new Laya.Vector3(0, 1, 0))
                }
                break;
            case n.Player:
                super.ChangeMoveForWorld()
            }
        }
        SearchAttackRole() {
            if (this.IsTargetNull() || this.roleCamp == n.Player) {
                let t = [];
                switch (this.camp) {
                case a.Enermy:
                    for (let e = q.Instance.mainScene.GetMap.roleList.length - 1; e >= 0; e--) q.Instance.mainScene.GetMap.roleList[e].IsChoosable(this) && Xt.IsDistances(this.GetPosition, q.Instance.mainScene.GetMap.roleList[e].GetPosition, this.perceptionRange) && t.push(q.Instance.mainScene.GetMap.roleList[e]);
                    for (let e = 0; e < tt.Instance.SoldierList_Mine.length; e++) tt.Instance.SoldierList_Mine[e].IsChoosable(this) && Xt.IsDistances(this.GetPosition, tt.Instance.SoldierList_Mine[e].GetPosition, this.perceptionRange) && t.push(tt.Instance.SoldierList_Mine[e]);
                    for (let e = 0; e < tt.Instance.SoldierList_Ai.length; e++) tt.Instance.SoldierList_Ai[e].IsChoosable(this) && Xt.IsDistances(this.GetPosition, tt.Instance.SoldierList_Ai[e].GetPosition, this.perceptionRange) && t.push(tt.Instance.SoldierList_Ai[e]);
                    break;
                case a.Player:
                    for (let e = q.Instance.mainScene.GetMap.enemyGatheringList.length - 1; e >= 0; e--) if (q.Instance.mainScene.GetMap.enemyGatheringList[e].enemyList.length > 0) for (let i = q.Instance.mainScene.GetMap.enemyGatheringList[e].enemyList.length - 1; i >= 0; i--) q.Instance.mainScene.GetMap.enemyGatheringList[e].enemyList[i].IsChoosable(this) && t.push(q.Instance.mainScene.GetMap.enemyGatheringList[e].enemyList[i]);
                    for (let e = 0; e < q.Instance.mainScene.GetMap.roleList.length; e++) q.Instance.mainScene.GetMap.roleList[e].IsChoosable(this) && t.push(q.Instance.mainScene.GetMap.roleList[e]);
                    for (let e = 0; e < tt.Instance.SoldierList_Mine.length; e++) tt.Instance.SoldierList_Mine[e].IsChoosable(this) && t.push(tt.Instance.SoldierList_Mine[e]);
                    for (let e = 0; e < tt.Instance.SoldierList_Ai.length; e++) tt.Instance.SoldierList_Ai[e].IsChoosable(this) && t.push(tt.Instance.SoldierList_Ai[e])
                }
                return t.length > 1 && t.sort((t, e) =>{
                    return Laya.Vector3.distanceSquared(this.GetPosition, t.GetPosition) < Laya.Vector3.distanceSquared(this.GetPosition, e.GetPosition) ? -1 : 1
                }),
                t[0]
            }
            return this.attackTarget
        }
        searchBuid() {
            if (this.IsTargetNull() || this.roleCamp == n.Player) {
                let t = [];
                for (let e = 0; e < tt.Instance.BuildLIst_Mine.length; e++) tt.Instance.BuildLIst_Mine[e].IsChoosable(this) && this.capmIndex != tt.Instance.BuildLIst_Mine[e].capmIndex && Xt.IsDistances(this.GetPosition, tt.Instance.BuildLIst_Mine[e].GetPosition, this.perceptionRange) && t.push(tt.Instance.BuildLIst_Mine[e]);
                for (let e = 0; e < tt.Instance.BuildList_Eny.length; e++) tt.Instance.BuildList_Eny[e].IsChoosable(this) && this.capmIndex != tt.Instance.BuildList_Eny[e].capmIndex && Xt.IsDistances(this.GetPosition, tt.Instance.BuildList_Eny[e].GetPosition, this.perceptionRange) && t.push(tt.Instance.BuildList_Eny[e]);
                return t.length > 1 && t.sort((t, e) =>{
                    return Laya.Vector3.distanceSquared(this.GetPosition, t.GetPosition) < Laya.Vector3.distanceSquared(this.GetPosition, e.GetPosition) ? -1 : 1
                }),
                t[0]
            }
            return null
        }
        IsChoosable(t) {
            return this != t && !this.IsDie && (t.battleCamp == o.Medic || this.capmIndex != t.capmIndex)
        }
        getHero() {}
    }
    class ve extends ae {
        constructor() {
            super(...arguments),
            this.myHeadquarters = [],
            this.followPosArray = [],
            this.followPosArray_Tank = [],
            this.selfMat = null
        }
        onAwake() {
            super.onAwake()
        }
        setFollowArrayPos() {
            let t = this.followPosArray.length;
            return t += 1,
            this.followPosArray = this.fCreat(t),
            this.followPosArray.length - 1
        }
        setFollowArrayPos_Tank() {
            let t = this.followPosArray_Tank.length;
            return t += 1,
            this.followPosArray_Tank = this.fCreat_Tank(t),
            this.followPosArray_Tank.length - 1
        }
        ChangePos(t) {
            super.ChangePos(t),
            this.heroMove()
        }
        heroMove() {
            tt.Instance.SoldierList_Mine.forEach(t =>{
                t.TouchMove()
            })
        }
        TouchUp() {
            super.TouchUp(),
            this.heroUp()
        }
        heroUp() {
            tt.Instance.SoldierList_Mine.forEach(t =>{
                t.TouchUp()
            })
        }
        TouchDown() {
            super.TouchDown(),
            tt.Instance.SoldierList_Mine.forEach(t =>{
                t.TouchDown()
            })
        }
        checkState() {
            this.action.state == e.Standby && tt.Instance.SoldierList_Mine.forEach(t =>{
                t.TouchUp()
            })
        }
        ReSetArrayPos() {
            this.followPosArray = [],
            tt.Instance.SoldierList_Mine.forEach(t =>{
                t.isStartAtk = !1,
                t.isJoinFollow = !1,
                t.owner.getComponent(Ie) ? t.followPos = this.setFollowArrayPos_Tank() : t.followPos = this.setFollowArrayPos()
            })
        }
        ChangeHp(t) {
            q.Instance.mainScene.GetMap.holeSoldList_AtkList(this.capmIndex) > 0 || super.ChangeHp(t)
        }
        circleCreat(t) {
            let e = [];
            for (let i = 0; i < t; i++) {
                let a = i * (360 / t),
                s = 2.5 * Math.cos(a),
                n = 2.5 * Math.sin(a),
                o = new Laya.Vector3(s, 0, n);
                e.push(o)
            }
            return e
        }
        fCreat(t) {
            let e = [];
            for (let i = 0; i < t; i++) {
                let t = Math.floor(i % 5),
                a = Math.floor(i / 5),
                s = 1.2;
                if (0 == a) {
                    t = t >= 2 ? t + 1 : t;
                    let i = new Laya.Vector3(t * s - 2 * s, 0, 0);
                    e.push(i)
                } else if (a % 2 == 0) {
                    a /= 2;
                    let i = new Laya.Vector3(t * s - 2 * s, 0, s * a);
                    e.push(i)
                } else {
                    a = (a + 1) / 2 * -1;
                    let i = new Laya.Vector3(t * s - 2 * s, 0, s * a);
                    e.push(i)
                }
            }
            return e
        }
        fCreat_Tank(t) {
            let e = [];
            for (let i = 0; i < t; i++) {
                let t = Math.floor(i % 5),
                a = 5,
                s = 1;
                if (0 == a) {
                    let i = new Laya.Vector3(t * s, 0, 0);
                    e.push(i)
                } else if (a % 2 == 0) {
                    a /= 2;
                    let i = new Laya.Vector3(t * s, 0, s * a);
                    e.push(i)
                } else {
                    a = (a + 1) / 2 * -1;
                    let i = new Laya.Vector3(t * s, 0, s * a);
                    e.push(i)
                }
            }
            return e
        }
        setSelfMat() {
            0 == this.capmIndex ? this.selfMat = q.Instance.mainScene.GetMap.roleMat.player: 1 == this.capmIndex && (this.selfMat = q.Instance.mainScene.GetMap.roleMat.enemy2)
        }
        ChangeLevel(t) {
            super.ChangeLevel(t),
            this.changeMat()
        }
        TouchMove() {
            super.TouchMove(),
            Laya.stage.event(u.PLYER_MOVE, this.capmIndex)
        }
        getFollowArrayPos(t) {
            return new Laya.Vector3(this.GetPosition.x + this.followPosArray[t].x, 0, this.GetPosition.z + this.followPosArray[t].z)
        }
        getFollowArrayPosX(t) {
            return this.GetPosition.x + this.followPosArray[t].x
        }
        getFollowArrayPoZ(t) {
            return this.GetPosition.z + this.followPosArray[t].z
        }
        getFollowArrayPosX_Tank(t) {
            if (! (this.followPosArray_Tank.length <= t)) return this.GetPosition.x + this.followPosArray_Tank[t].x;
            console.error("---------------xxxxxxxx-", this.followPosArray_Tank.length, t)
        }
        getFollowArrayPoZ_Tank(t) {
            if (! (this.followPosArray_Tank.length <= t)) return this.GetPosition.z + this.followPosArray_Tank[t].z;
            console.error("----------------zzzz", this.followPosArray_Tank.length, t)
        }
        IsChoosable(t) {
            return ! (this == t || this.IsDie || !this.isActiva) && (t.battleCamp == o.Medic || this.capmIndex != t.capmIndex)
        }
        SetCamp(t) {
            super.SetCamp(t),
            this.changeMat()
        }
        changeSolider(t) {
            for (let e = 0; e < t.numChildren; e++) t.getChildAt(e).getChildAt(0).meshRenderer.material = 0 == this.capmIndex ? q.Instance.mainScene.GetMap.roleMat.player: q.Instance.mainScene.GetMap.roleMat.enemy
        }
        changeCommon(t) {
            this.model.getChildByName(t).skinnedMeshRenderer.material = 0 == this.capmIndex ? q.Instance.mainScene.GetMap.officerMat.player: q.Instance.mainScene.GetMap.officerMat.enemy
        }
        changeMat() {
            switch (this.level) {
            case 1:
                let t = this.model.getChildByName("toukui");
                this.changeSolider(t);
                let e = this.model.getChildByName("yaodai");
                this.changeSolider(e);
                let i = this.model.getChildByName("fangdangyi");
                this.changeSolider(i);
                let a = this.model.getChildByName("fangdangtoutui");
                this.changeSolider(a),
                this.model.getChildByName("mod_ljxf_NPC").simpleSkinnedMeshRenderer.material = 0 == this.capmIndex ? q.Instance.mainScene.GetMap.roleMat.player: q.Instance.mainScene.GetMap.roleMat.enemy;
                break;
            case 2:
            case 3:
                this.changeCommon("mod_ljxf_role")
            }
        }
    }
    class Se extends Bt {
        constructor() {
            super(...arguments),
            this.addCoinNum = [],
            this.minMatValue = 0,
            this.maxMatValue = -.49
        }
        onAwake() {
            super.onAwake(),
            this.level = 0,
            this.maxLevel = 5,
            this.lastCoinNum = this.addCoinNum[this.level]
        }
        SetCamp(t) {
            this.camp = t
        }
        LevelAdd() {
            V.isVibrate && zs.platform.sync.vibrate({
                isLong: !1
            })
        }
        LevelCut() {}
        UpdateObj() {
            super.UpdateObj()
        }
    }
    class ke extends Se {
        constructor() {
            super(...arguments),
            this.waitSend = 0,
            this.localCampTarget = 0,
            this.capmIndex = -1,
            this.unlockNumberMatList = [],
            this.levelNumberMatList = [],
            this.leveNumList = [],
            this.lastSilverPro = 0,
            this.maxSilverNum = 5,
            this.proSilverScale = new Laya.Vector3,
            this.lastAddIntervalTime = 0,
            this.addIntervalTime = 2,
            this.lastSilverTime = 0,
            this.silverUIOpenTime = 0
        }
        get isMaxLevel() {
            return this.isUnlock && this.level >= this.maxLevel
        }
        onAwake() {
            if (super.onAwake(), this.lastSilverTime = 0, this.isGuideCollision = !1, this.unlockPro = this.mPrefab.getChildByName("jindutiao"), this.unlockPro) {
                this.unlockNumber = this.mPrefab.getChildByName("number"),
                this.unlockMingpai = this.mPrefab.getChildByName("mingpai"),
                this.unlockMat = this.unlockPro.getChildAt(0).meshRenderer.material.clone(),
                this.unlockPro.getChildAt(0).meshRenderer.material = this.unlockMat,
                this.box = new Vt(this.unlockPro.getChildByName("box")),
                this.isUnlock = !1;
                for (let t = 0; t < this.unlockNumber.getChildAt(0).numChildren; t++) {
                    let e = this.unlockNumber.getChildAt(0).getChildAt(t),
                    i = e.meshRenderer.material.clone();
                    e.meshRenderer.material = i,
                    this.unlockNumberMatList.push(i)
                }
                this.proSilverScale = this.unlockMingpai.getChildAt(0).transform.localScale.clone(),
                this.lastNum = 0,
                this.lastProValue = 0,
                this.isCollision = !1,
                this.ChangeProValue()
            }
        }
        UpdateObj() {
            super.UpdateObj(),
            this.isMaxLevel || this.CollisionRole()
        }
        CollisionRole() {
            if (null != this.headquarters.theirRole) if (this.lastAddIntervalTime < 0) {
                if (this.headquarters.theirRole.action && this.headquarters.theirRole.action.state == e.Standby) {
                    switch (this.campsiteType) {
                    case l.TankBattalion:
                    case l.DispatchPoint:
                    case l.MedicBattalion:
                    case l.MissileBattalion:
                    case l.ArmorBattalion:
                    case l.WeaponBattalion:
                    case l.MortarsBattalion:
                        if (!this.headquarters.theirRole.IsUnlockBarracks()) return
                    }
                    if (this.box.update(), this.headquarters.theirRole.box.update(), Xt.IsDistances(this.box.center, this.headquarters.theirRole.GetPosition, 7)) if (zt.IntersectOBB(this.box, this.headquarters.theirRole.box) && this.lastNum < (this.isUnlock ? this.levelNum: this.unlockNum)) {
                        if (this.isGuideCollision = !1, q.Instance.mainScene.GetMap.playerCtl.GetIsCollision || Laya.stage.event(u.CHANGE_HINT, [1]), this.headquarters.theirRole.silverList.length > 0) {
                            if (this.lastSilverTime = 0, this.lastSilverPro++, this.lastSilverPro >= this.maxSilverNum) {
                                this.lastSilverPro = 0;
                                let t = this.headquarters.theirRole.silverList[0];
                                this.headquarters.theirRole.CutSilver(t),
                                this.lastNum += 1,
                                t.GetMainNode.transform.rotationEuler = this.isUnlock ? this.levelMingpai.transform.rotationEuler: this.unlockMingpai.transform.rotationEuler,
                                t.ChangePoint(this.isUnlock ? this.levelMingpai.getChildAt(0) : this.unlockMingpai.getChildAt(0), () =>{
                                    let e = t.GetMainNode.parent;
                                    t.Remove(),
                                    this.ChangeProValue(),
                                    Laya.Tween.to(e.transform, {
                                        localScaleX: this.proSilverScale.x + .2
                                    },
                                    100, Laya.Ease.linearNone, Laya.Handler.create(this, (t, e) =>{
                                        Laya.Tween.to(t.transform, {
                                            localScaleX: e.x,
                                            localScaleY: e.y + .2
                                        },
                                        100, Laya.Ease.linearNone, Laya.Handler.create(this, (t, e) =>{
                                            Laya.Tween.to(t.transform, {
                                                localScaleX: e.x,
                                                localScaleY: e.y
                                            },
                                            100, Laya.Ease.backOut)
                                        },
                                        [t, e]))
                                    },
                                    [e, this.proSilverScale]))
                                }),
                                this.headquarters.theirRole.ChangeSilverPos()
                            }
                            return
                        } {
                            let t = this.isCollision;
                            this.isCollision = !0,
                            1 == H.isOpenLeofPage && Laya.timer.currTimer - this.silverUIOpenTime > 5e3 && (H.isOpenLeofPage = 0),
                            0 == H.isOpenLeofPage && 0 == t && 0 == this.headquarters.theirRole.capmIndex && (this.silverUIOpenTime = Laya.timer.currTimer, H.isOpenLeofPage = 1, H.leofType = L.Badge, H.Instance.OpenView(H.Instance.leckOfUrl, !1))
                        }
                    } else this.isCollision = !1,
                    this.lastSilverTime = 0
                } else {
                    if (1 == V.curGameEarthLevel() && q.Instance.mainScene.GetMap.arrow.GetMainNode.active) if (zt.IntersectOBB(this.box, this.headquarters.theirRole.box)) switch (this.isGuideCollision = !0, this.campsiteType) {
                    case l.TankBattalion:
                    case l.DispatchPoint:
                    case l.MedicBattalion:
                    case l.MissileBattalion:
                    case l.ArmorBattalion:
                    case l.WeaponBattalion:
                    case l.MortarsBattalion:
                        this.headquarters.theirRole.IsUnlockBarracks() && Laya.stage.event(u.CHANGE_HINT, [0]);
                        break;
                    case l.Barracks:
                        Laya.stage.event(u.CHANGE_HINT, [0])
                    } else this.isGuideCollision = !1,
                    q.Instance.mainScene.GetMap.playerCtl.GetIsCollision || Laya.stage.event(u.CHANGE_HINT, [1]);
                    this.isCollision = !1
                }
                this.lastSilverPro = 0
            } else this.isCollision = !1,
            this.lastAddIntervalTime -= q.Instance.mainScene.delat
        }
        LevelReset() {
            console.log(" LevelReset -- this.name---- ", this.owner.name, this.id),
            this.lastNum = 0,
            this.level = 1,
            this.isUnlock = !1,
            this.levelNumber && (this.levelNumber.active = !1),
            this.levelMingpai && (this.levelMingpai.active = !1),
            this.levelPro && (this.levelPro.active = !1),
            this.unlockMingpai && (this.unlockMingpai.active = !0),
            this.unlockNumber && (this.unlockNumber.active = !0),
            this.unlockPro && (this.unlockPro.active = !0),
            this.levelNum = this.leveNumList[this.level - 1],
            this.levelNumber && this.ChangeProValue()
        }
        ChangeProValue() {
            if (this.isMaxLevel) return;
            this.lastProValue = this.lastNum > 0 ? this.lastNum / (this.isUnlock ? this.levelNum: this.unlockNum) : 0,
            this.lastProValue > 1 ? this.lastProValue = 1 : this.lastProValue <= 0 && (this.lastProValue = 0);
            let t = (this.isUnlock ? this.levelNum: this.unlockNum) - this.lastNum;
            this.isUnlock ? (this.proMat.tilingOffsetZ = this.minMatValue + (this.maxMatValue - this.minMatValue) * this.lastProValue, this.levelNumberMatList[1].tilingOffsetW = 1 - .1 * Math.floor(t / 10), this.levelNumberMatList[0].tilingOffsetW = 1 - t % 10 * .1) : (this.unlockMat.tilingOffsetZ = this.minMatValue + (this.maxMatValue - this.minMatValue) * this.lastProValue, this.unlockNumberMatList[1].tilingOffsetW = 1 - .1 * Math.floor(t / 10), this.unlockNumberMatList[0].tilingOffsetW = 1 - t % 10 * .1),
            this.lastProValue >= 1 && this.LevelAdd()
        }
        LevelAdd() {
            if (Laya.stage.event(u.InterfereAiState, [this.capmIndex]), super.LevelAdd(), this.lastNum = 0, this.isUnlock) {
                if (this.level += 1, this.isMaxLevel) return this.levelNumber.active = !1,
                this.levelMingpai.active = !1,
                void(this.levelPro.active = !1);
                this.lastAddIntervalTime = this.addIntervalTime,
                this.levelNum = this.leveNumList[this.level - 1],
                this.ChangeProValue()
            } else this.Unlock()
        }
        Unlock() {
            U.Instance.PlayEffectAudio("jiesuo"),
            this.isUnlock = !0,
            this.unlockMingpai.active = !1,
            this.unlockNumber.active = !1,
            this.unlockPro.active = !1
        }
        showYanWu() {
            let t = $t.GetPoolPrefab(_.resourcesDataCfg.ef_ljxf_yanwu, j.LoaderPrefabs[_.resourcesDataCfg.ef_ljxf_yanwu], q.Instance.mainScene.GetScene);
            t.active = !1,
            t.active = !0,
            t.transform.position = this.GetPosition,
            Laya.timer.once(1200, null, t =>{
                $t.CollectObject(t.name, t)
            },
            [t])
        }
    }
    class be extends ke {
        onAwake() {
            this.unlockNum = _.architectureData.wuqiku_unlock,
            this.campsiteType = l.WeaponBattalion,
            super.onAwake(),
            this.unlockArchitecture = this.mPrefab.getChildByName("wuqi_gongchang"),
            this.level = 1,
            this.maxLevel = 3,
            this.leveNumList = [0, 35, 65],
            this.unlockArchitecture.active = !1
        }
        UpdateObj() {
            super.UpdateObj()
        }
        LevelAdd() {
            super.LevelAdd(),
            this.showYanWu(),
            this.headquarters.theirRole.ChangeWeaponLevel(1)
        }
        Unlock() {
            super.Unlock(),
            this.unlockArchitecture.active = !0,
            this.level = 2,
            this.levelNum = this.leveNumList[this.level - 1],
            this.showYanWu(),
            this.levelPro = this.unlockArchitecture.getChildByName("jindutiao"),
            this.proMat = this.levelPro.getChildAt(0).meshRenderer.material.clone(),
            this.levelPro.getChildAt(0).meshRenderer.material = this.proMat,
            this.levelNumber = this.unlockArchitecture.getChildByName("number"),
            this.box = null,
            this.box = new Vt(this.levelPro.getChildByName("box"));
            for (let t = 0; t < this.levelNumber.getChildAt(0).numChildren; t++) {
                let e = this.levelNumber.getChildAt(0).getChildAt(t),
                i = e.meshRenderer.material.clone();
                e.meshRenderer.material = i,
                this.levelNumberMatList.push(i)
            }
            this.levelMingpai = this.unlockArchitecture.getChildByName("mingpai"),
            this.proSilverScale = this.levelMingpai.getChildAt(0).transform.localScale.clone(),
            this.ChangeProValue()
        }
    }
    class Pe extends ke {
        onAwake() {
            this.unlockNum = _.architectureData.fangju_unlock,
            this.campsiteType = l.ArmorBattalion,
            super.onAwake(),
            this.unlockArchitecture = this.mPrefab.getChildByName("zhuangbei_gongchang"),
            this.level = 1,
            this.maxLevel = 3,
            this.leveNumList = [0, 35, 65],
            this.unlockArchitecture.active = !1
        }
        UpdateObj() {
            super.UpdateObj()
        }
        LevelAdd() {
            super.LevelAdd(),
            this.showYanWu()
        }
        Unlock() {
            super.Unlock(),
            this.unlockArchitecture.active = !0,
            this.level = 2,
            this.levelNum = this.leveNumList[this.level - 1],
            this.showYanWu(),
            this.levelPro = this.unlockArchitecture.getChildByName("jindutiao"),
            this.proMat = this.levelPro.getChildAt(0).meshRenderer.material.clone(),
            this.levelPro.getChildAt(0).meshRenderer.material = this.proMat,
            this.levelNumber = this.unlockArchitecture.getChildByName("number"),
            this.box = null,
            this.box = new Vt(this.levelPro.getChildByName("box"));
            for (let t = 0; t < this.levelNumber.getChildAt(0).numChildren; t++) {
                let e = this.levelNumber.getChildAt(0).getChildAt(t),
                i = e.meshRenderer.material.clone();
                e.meshRenderer.material = i,
                this.levelNumberMatList.push(i)
            }
            this.levelMingpai = this.unlockArchitecture.getChildByName("mingpai"),
            this.proSilverScale = this.levelMingpai.getChildAt(0).transform.localScale.clone(),
            this.ChangeProValue()
        }
    }
    class Me extends Bt {
        constructor() {
            super(...arguments),
            this.daodan_miaozhun_speed = 10,
            this.endPos = new Laya.Vector3,
            this.pointList = [],
            this.splitSpeedNum = 500,
            this.upHeight = 7,
            this.daodan_miaozhun_scaleSpeed = .02,
            this.efBomb = null,
            this.touchDownX = 0,
            this.touchDownY = 0,
            this.startTime = NaN
        }
        onAwake() {
            super.onAwake(),
            this.attackNum = 99999,
            this.speedA = .05,
            this.attackRange = 5,
            this.speed = 6,
            this.speedValue = this.speed,
            this.efHangover = this.mPrefab.getChildByName("ef_ljxf_daodan_tuowei"),
            this.efHangover.active = !1,
            this.daodan_miaozhun = null
        }
        Fire() {
            q.Instance.mainScene.GetMap.playerCtl.CloseMouseEvent(),
            this.daodan_miaozhun = Laya.Sprite3D.instantiate(j.LoaderPrefabs[_.resourcesDataCfg.daodan_miaozhun], q.Instance.mainScene.GetScene),
            this.daodan_miaozhun.active = !0,
            this.daodan_miaozhun.transform.position = new Laya.Vector3(this.endPos.x, .03, this.endPos.z),
            this.daodan_miaozhun_scale = this.attackRange,
            this.daodan_miaozhun_scaleSpeed = .02,
            this.daodan_miaozhun.transform.setWorldLossyScale(new Laya.Vector3(this.attackRange, 1, this.attackRange)),
            this.saveCameraPosition = q.Instance.mainScene.GetCamera.GetPosition,
            q.Instance.mainScene.GetCamera.SetTarget = null,
            q.Instance.mainScene.GetCamera.CameraToMove(this.daodan_miaozhun.transform.position, Laya.Handler.create(this, () =>{
                q.Instance.mainScene.GetCamera.SetTarget = this.daodan_miaozhun;
                let t = p.GetLocalItem("guideFireBomb", 0),
                e = 0;
                e = 5e3,
                this.startTime = Laya.timer.currTimer + 5e3,
                Laya.stage.event(u.GAMEPAGE_HIDDLEVIDEO_BOMB, [!1, t, 5e3]),
                this.worldVec = null,
                Laya.stage.on(u.TOUCH_DOWN, this, this.TouchDown),
                Laya.stage.on(u.TOUCH_MOVE, this, this.TouchMove),
                Laya.stage.on(u.TOUCH_UP, this, this.TouchUp),
                Laya.stage.once(u.GAMEPAGE_FIREBOMB_BUTTON, this, this.ToFire)
            }))
        }
        ToFire() {
            isNaN(this.startTime) || (this.startTime = NaN, q.Instance.mainScene.GetCamera.SetTarget = null, this.endPos = this.daodan_miaozhun.transform.position.clone(), Laya.stage.off(u.TOUCH_DOWN, this, this.TouchDown), Laya.stage.off(u.TOUCH_MOVE, this, this.TouchMove), Laya.stage.off(u.TOUCH_UP, this, this.TouchUp), Laya.stage.off(u.GAMEPAGE_FIREBOMB_BUTTON, this, this.ToFire), this.worldVec = null, q.Instance.mainScene.GetCamera.CameraToMove(this.saveCameraPosition, Laya.Handler.create(this, this.ToToFire)))
        }
        ToToFire() {
            this.pointList.splice(0, this.pointList.length),
            this.speedValue = this.speed,
            this.efHangover.active = !0,
            Laya.Tween.to(q.Instance.mainScene.GetCamera.GetMainNode.transform.position, {
                x: this.GetPosition.x,
                y: this.GetPosition.y,
                z: this.GetPosition.z,
                update: new Laya.Handler(this, () =>{
                    q.Instance.mainScene.GetCamera.SetPosition = q.Instance.mainScene.GetCamera.GetMainNode.transform.position
                })
            },
            1e3, null, Laya.Handler.create(this, () =>{
                q.Instance.mainScene.GetCamera.SetTarget = this.mPrefab,
                Laya.Tween.to(this.mPrefab.transform.position, {
                    y: this.upHeight,
                    update: new Laya.Handler(this, () =>{
                        this.SetPosition = this.mPrefab.transform.position
                    })
                },
                Math.abs(this.GetPosition.y - this.upHeight) / this.speedValue * 1e3, null, Laya.Handler.create(this, () =>{
                    let t = Laya.Vector3.distance(this.GetPosition, this.endPos),
                    e = new Laya.Vector3(this.endPos.x - this.GetPosition.x, 0, this.endPos.z - this.GetPosition.z);
                    Laya.Vector3.normalize(e, e);
                    this.pointIndex = 1;
                    let i = new Laya.Vector3(this.GetPosition.x + t / 2 * e.x, this.GetPosition.y + 1, this.GetPosition.z + t / 2);
                    this.pointList = Xt.creatorBezierPoint(this.GetPosition, i, this.endPos, 50),
                    this.isMove = !0,
                    this.mPrefab.transform.lookAt(this.pointList[this.pointIndex], new Laya.Vector3(0, 1, 0)),
                    this.SetRotate = new Laya.Vector3(this.GetRotate.x - 90, this.GetRotate.y, this.GetRotate.z)
                }))
            }))
        }
        UpdateObj() {
            if (super.UpdateObj(), !isNaN(this.startTime)) {
                if (null != this.worldVec) {
                    this.splitSpeedNum = Math.abs(Math.ceil( - this.daodan_miaozhun_speed * q.Instance.mainScene.delat / .02));
                    let t = this.daodan_miaozhun_speed * q.Instance.mainScene.delat / this.splitSpeedNum;
                    for (let e = 0; e < this.splitSpeedNum; e++) this.daodan_miaozhun.transform.position = new Laya.Vector3(this.daodan_miaozhun.transform.position.x + this.worldVec.x * t, this.daodan_miaozhun.transform.position.y, this.daodan_miaozhun.transform.position.z + this.worldVec.z * t)
                }
                Laya.timer.currTimer - this.startTime > _.daodanData.flyTime && this.ToFire()
            }
            if (null != this.daodan_miaozhun && null != this.daodan_miaozhun.transform && (this.daodan_miaozhun_scale += this.daodan_miaozhun_scaleSpeed, this.daodan_miaozhun_scale >= 1.1 * this.attackRange ? (this.daodan_miaozhun_scale = 1.1 * this.attackRange, this.daodan_miaozhun_scaleSpeed = -this.daodan_miaozhun_scaleSpeed) : this.daodan_miaozhun_scale <= .9 * this.attackRange && (this.daodan_miaozhun_scale = .9 * this.attackRange, this.daodan_miaozhun_scaleSpeed = -this.daodan_miaozhun_scaleSpeed), this.daodan_miaozhun.transform.setWorldLossyScale(new Laya.Vector3(this.daodan_miaozhun_scale, 1, this.daodan_miaozhun_scale))), this.isMove) {
                this.speedValue += this.speedA,
                this.splitSpeedNum = Math.abs(Math.ceil( - this.speedValue * q.Instance.mainScene.delat / .02));
                let t = this.speedValue * q.Instance.mainScene.delat / this.splitSpeedNum;
                for (let e = 0; e < this.splitSpeedNum; e++) {
                    let e = new Laya.Vector3(this.pointList[this.pointIndex].x - this.mPrefab.transform.position.x, this.pointList[this.pointIndex].y - this.mPrefab.transform.position.y, this.pointList[this.pointIndex].z - this.mPrefab.transform.position.z);
                    if (Laya.Vector3.normalize(e, e), this.mPrefab.transform.position = new Laya.Vector3(this.mPrefab.transform.position.x + e.x * t, this.mPrefab.transform.position.y + e.y * t, this.mPrefab.transform.position.z + e.z * t), Xt.IsDistances(this.mPrefab.transform.position, this.pointList[this.pointIndex], .1) && (this.pointIndex++, this.pointIndex >= this.pointList.length)) {
                        this.AttackEnemy();
                        break
                    }
                    this.mPrefab.transform.lookAt(this.pointList[this.pointIndex], new Laya.Vector3(0, 1, 0)),
                    this.mPrefab.transform.rotationEuler = new Laya.Vector3(this.mPrefab.transform.rotationEuler.x - 90, this.mPrefab.transform.rotationEuler.y, this.mPrefab.transform.rotationEuler.z)
                }
            }
        }
        AttackEnemy() {
            this.isMove = !1,
            this.efHangover.active = !1;
            let t = [];
            for (let e = q.Instance.mainScene.GetMap.enemyGatheringList.length - 1; e >= 0; e--) for (let i = q.Instance.mainScene.GetMap.enemyGatheringList[e].enemyList.length - 1; i >= 0; i--) 0 != q.Instance.mainScene.GetMap.enemyGatheringList[e].enemyList[i].capmIndex && t.push(q.Instance.mainScene.GetMap.enemyGatheringList[e].enemyList[i]);
            if (q.Instance.gameModle == m.battleGame) for (let e = 0; e < q.Instance.mainScene.GetMap.headquartersList.length; e++) {
                for (let i = 0; i < q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList.length; i++) {
                    if (q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList[i].soldierList.length > 0) for (let a = q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList[i].soldierList.length - 1; a >= 0; a--) q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList[i].soldierList[a].IsDie || 0 == q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList[i].soldierList[a].capmIndex || t.push(q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList[i].soldierList[a]);
                    if (q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList[i].attackList.length > 0) for (let a = q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList[i].attackList.length - 1; a >= 0; a--) q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList[i].attackList[a].IsDie || 0 == q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList[i].attackList[a].capmIndex || t.push(q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList[i].attackList[a])
                }
                for (let i = 0; i < q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList.length; i++) {
                    if (q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList[i].soldierList.length > 0) for (let a = q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList[i].soldierList.length - 1; a >= 0; a--) q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList[i].soldierList[a].IsDie || 0 == q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList[i].soldierList[a].capmIndex || t.push(q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList[i].soldierList[a]);
                    for (let a = q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList[i].attackList.length - 1; a >= 0; a--) q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList[i].attackList[a].IsDie || 0 == q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList[i].attackList[a].capmIndex || t.push(q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList[i].attackList[a])
                }
                for (let i = 0; i < q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList.length; i++) {
                    if (q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList[i].tankList.length > 0) for (let a = q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList[i].tankList.length - 1; a >= 0; a--) q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList[i].tankList[a].IsDie || 0 == q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList[i].tankList[a].capmIndex || t.push(q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList[i].tankList[a]);
                    if (q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList[i].attackList.length > 0) for (let a = q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList[i].attackList.length - 1; a >= 0; a--) q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList[i].attackList[a].IsDie || 0 == q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList[i].attackList[a].capmIndex || t.push(q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList[i].attackList[a])
                }
            }
            if (t.length > 0) for (let e = t.length - 1; e >= 0; e--) ! t[e].IsDie && Xt.IsDistances(this.GetPosition, t[e].GetPosition, this.attackRange) && t[e].ChangeHp( - this.attackNum, 0);
            this.efBomb = Laya.Sprite3D.instantiate(j.LoaderPrefabs[_.resourcesDataCfg.ef_ljxf_daodan_baozha], q.Instance.mainScene.GetScene),
            this.efBomb.active = !0,
            this.efBomb.transform.position = null == this.worldVec ? this.endPos.clone() : new Laya.Vector3(this.GetPosition.x, this.endPos.y, this.GetPosition.z),
            this.mPrefab.active = !1,
            this.bombBarrackCtl.GetMainNode.timer.once(2e3, this, () =>{
                this.destoryEfBomb(),
                this.Remove()
            }),
            this.destroyDaoDanMiaoZhun(),
            Laya.stage.event(u.GAMEPAGE_HIDDLEVIDEO_BOMB, [!0])
        }
        destoryTempObj() {
            this.bombBarrackCtl.GetMainNode.timer.clearAll(this),
            this.destoryEfBomb(),
            this.destroyDaoDanMiaoZhun()
        }
        destoryEfBomb() {
            null != this.efBomb && (this.efBomb.destroy(), this.efBomb = null)
        }
        destroyDaoDanMiaoZhun() {
            null != this.daodan_miaozhun && (this.daodan_miaozhun.destroy(), this.daodan_miaozhun = null)
        }
        Remove() {
            this.bombBarrackCtl.resetCountDown(),
            q.Instance.mainScene.GetCamera.SetTarget = q.Instance.mainScene.GetMap.playerCtl.GetMainNode,
            q.Instance.mainScene.GetMap.playerCtl.OpenMouseEvent(),
            this.bombBarrackCtl.isOpenVideo = !1,
            this.SetRotate = this.mRotation,
            this.SetPosition = this.mPosition
        }
        TouchDown() {
            this.touchDownX = Laya.stage.mouseX,
            this.touchDownY = Laya.stage.mouseY
        }
        TouchMove() {
            let t = Laya.stage.mouseX - this.touchDownX,
            e = Laya.stage.mouseY - this.touchDownY;
            this.worldVec = new Laya.Vector3( - t, 0, -e),
            Laya.Vector3.normalize(this.worldVec, this.worldVec)
        }
        TouchUp() {
            this.worldVec = null
        }
    }
    class Ge extends ke {
        constructor() {
            super(...arguments),
            this.timeMatList = [],
            this.lastSendTime = 0
        }
        onAwake() {
            this.unlockNum = _.architectureData.hedan_unlock,
            this.campsiteType = l.MissileBattalion,
            super.onAwake(),
            this.unlockArchitecture = this.mPrefab.getChildByName("daodan"),
            this.model = this.unlockArchitecture.getChildAt(0),
            this.mod_daodan = this.model.getChildByName("mod_daodan"),
            this.bombCtl = this.mod_daodan.addComponent(Me),
            this.bombCtl.bombBarrackCtl = this,
            this.switchBox = new Vt(this.model.getChildByName("mod_daodan_anniutai").getChildAt(0));
            for (let t = 0; t < this.model.numChildren; t++) if (this.model.getChildAt(t).name.indexOf("mod_daodan_number") >= 0) {
                let e = this.model.getChildAt(t).meshRenderer.material.clone();
                this.model.getChildAt(t).meshRenderer.material = e,
                this.timeMatList.push(e)
            }
            this.level = 1,
            this.maxLevel = 1,
            this.lastSendTime = 0,
            V.bombCountDown = NaN,
            this.unlockArchitecture.active = !1,
            this.isOpenVideo = !1,
            this.isCollison = !1,
            this.launch = !1
        }
        UpdateObj() {
            super.UpdateObj(),
            this.bombCtl.UpdateObj(),
            this.isUnlock && (this.launch || (this.lastSendTime > 0 ? (this.lastSendTime -= q.Instance.mainScene.delat, V.bombCountDown = this.lastSendTime, q.Instance.lastBombCtl = this, this.lastSendTime < 0 && (this.lastSendTime = 0, V.bombCountDown = NaN), this.UpdateTimeShow(), this.headquarters.theirRole.action && this.headquarters.theirRole.action.state == e.Standby && Xt.IsDistances(this.switchBox.obj.transform.position, this.headquarters.theirRole.GetPosition, 7) && zt.IntersectOBB(this.switchBox, this.headquarters.theirRole.box) ? (this.lastCollisionTime += q.Instance.mainScene.delat, this.lastCollisionTime >= .5 && !this.isOpenVideo && !this.isCollison && (this.isCollison = !0, this.lastCollisionTime = 0, this.isOpenVideo = !0, q.Instance.lastBombCtl = this, H.isOpenLaunchPage || (H.isOpenLaunchPage = !0, H.Instance.OpenView(H.Instance.launchUrl, !1, {
                handler: null
            })))) : (this.isOpenVideo = !1, this.isCollison = !1, this.lastCollisionTime = 0)) : (this.mod_daodan.active = !0, this.headquarters.theirRole.action && this.headquarters.theirRole.action.state == e.Standby && (Xt.IsDistances(this.switchBox.obj.transform.position, this.headquarters.theirRole.GetPosition, 7) && zt.IntersectOBB(this.switchBox, this.headquarters.theirRole.box) ? (this.lastCollisionTime += q.Instance.mainScene.delat, this.lastCollisionTime >= .5 && this.SendBomb()) : this.lastCollisionTime = 0))))
        }
        UpdateTimeShow() {
            let t = Math.floor(this.lastSendTime / 60),
            e = Math.floor(this.lastSendTime % 60);
            this.timeMatList[0].tilingOffsetW = t > 0 ? -.1 * Math.floor(t / 10) : 0,
            this.timeMatList[1].tilingOffsetW = -.1 * t % 10,
            this.timeMatList[2].tilingOffsetW = e > 0 ? -.1 * Math.floor(e / 10) : 0,
            this.timeMatList[3].tilingOffsetW = -.1 * e % 10
        }
        Unlock() {
            super.Unlock(),
            this.unlockArchitecture.active = !0,
            this.lastSendTime = 0,
            V.bombCountDown = NaN,
            this.bombTime = _.architectureData.hedan_time,
            this.lastCollisionTime = 0,
            this.showYanWu()
        }
        SendBomb() {
            this.isOpenVideo = !0,
            this.isCollison = !0,
            this.mod_daodan.active = !0,
            H.Instance.HideView(H.Instance.launchUrl),
            this.lastCollisionTime = 0;
            let t = [];
            for (let e = q.Instance.mainScene.GetMap.enemyGatheringList.length - 1; e >= 0; e--) for (let i = q.Instance.mainScene.GetMap.enemyGatheringList[e].enemyList.length - 1; i >= 0; i--) ! q.Instance.mainScene.GetMap.enemyGatheringList[e].enemyList[i].IsDie && q.Instance.mainScene.GetMap.enemyGatheringList[e].enemyList[i].capmIndex < 0 && t.push(q.Instance.mainScene.GetMap.enemyGatheringList[e].enemyList[i]);
            if (q.Instance.gameModle == m.battleGame) for (let e = 0; e < q.Instance.mainScene.GetMap.headquartersList.length; e++) {
                for (let i = 0; i < q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList.length; i++) {
                    if (q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList[i].soldierList.length > 0) for (let a = q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList[i].soldierList.length - 1; a >= 0; a--) q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList[i].soldierList[a].IsDie || 0 == q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList[i].soldierList[a].capmIndex || t.push(q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList[i].soldierList[a]);
                    if (q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList[i].attackList.length > 0) for (let a = q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList[i].attackList.length - 1; a >= 0; a--) q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList[i].attackList[a].IsDie || 0 == q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList[i].attackList[a].capmIndex || t.push(q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList[i].attackList[a])
                }
                for (let i = 0; i < q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList.length; i++) {
                    if (q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList[i].soldierList.length > 0) for (let a = q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList[i].soldierList.length - 1; a >= 0; a--) q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList[i].soldierList[a].IsDie || 0 == q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList[i].soldierList[a].capmIndex || t.push(q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList[i].soldierList[a]);
                    for (let a = q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList[i].attackList.length - 1; a >= 0; a--) q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList[i].attackList[a].IsDie || 0 == q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList[i].attackList[a].capmIndex || t.push(q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList[i].attackList[a])
                }
                for (let i = 0; i < q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList.length; i++) {
                    if (q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList[i].tankList.length > 0) for (let a = q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList[i].tankList.length - 1; a >= 0; a--) q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList[i].tankList[a].IsDie || 0 == q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList[i].tankList[a].capmIndex || t.push(q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList[i].tankList[a]);
                    if (q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList[i].attackList.length > 0) for (let a = q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList[i].attackList.length - 1; a >= 0; a--) q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList[i].attackList[a].IsDie || 0 == q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList[i].attackList[a].capmIndex || t.push(q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList[i].attackList[a])
                }
            }
            t.length > 0 ? (t.length > 1 && t.sort((t, e) =>{
                return Laya.Vector3.distanceSquared(this.GetPosition, t.GetPosition) < Laya.Vector3.distanceSquared(this.GetPosition, e.GetPosition) ? -1 : 1
            }), this.bombCtl.endPos = t[0].GetPosition, this.bombCtl.Fire(), V.bombCountDown = NaN, this.launch = !0) : console.error("无合适区域")
        }
        resetCountDown() {
            this.launch = !1,
            this.lastSendTime = this.bombTime
        }
        Remove() {
            this.bombCtl.destoryTempObj(),
            super.Remove()
        }
    }
    class Te extends Bt {
        constructor() {
            super(...arguments),
            this.endPos = new Laya.Vector3,
            this.pointList = [],
            this.splitSpeedNum = 500
        }
        onAwake() {
            super.onAwake(),
            this.model = this.mPrefab.getChildAt(0),
            this.speedA = .05,
            this.attackRange = 3,
            this.speed = 20,
            this.speedValue = this.speed,
            this.efBomb = this.mPrefab.getChildByName("ef_ljxf_paijipao_baozha"),
            this.efHangover = this.mPrefab.getChildByName("ef_ljxf_paijipao_tuowei"),
            this.efBomb.active = !1,
            this.efHangover.active = !1
        }
        onStart() {}
        Fire() {
            let t = Laya.Vector3.distance(this.GetPosition, this.endPos),
            e = new Laya.Vector3(this.endPos.x - this.GetPosition.x, 0, this.endPos.z - this.GetPosition.z);
            Laya.Vector3.normalize(e, e);
            this.pointIndex = 1;
            let i = new Laya.Vector3(this.GetPosition.x + t / 2 * e.x, this.GetPosition.y + 3, this.GetPosition.z + t / 2);
            this.pointList = Xt.creatorBezierPoint(this.GetPosition, i, this.endPos, 50),
            this.isMove = !0,
            this.mPrefab.transform.lookAt(this.pointList[this.pointIndex], new Laya.Vector3(0, 1, 0)),
            this.efHangover.active = !0
        }
        UpdateObj() {
            if (super.UpdateObj(), !this.isMove) return;
            this.speedValue += this.speedA,
            this.splitSpeedNum = Math.abs(Math.ceil( - this.speedValue * q.Instance.mainScene.delat / .02));
            let t = -this.speedValue * q.Instance.mainScene.delat / this.splitSpeedNum;
            for (let e = 0; e < this.splitSpeedNum; e++) if (this.mPrefab.transform.translate(new Laya.Vector3(0, 0, t)), Xt.IsDistances(this.GetPosition, this.pointList[this.pointIndex], .1)) {
                if (this.pointIndex++, !(this.pointIndex <= this.pointList.length - 1)) {
                    this.isMove = !1;
                    let t = [];
                    for (let e = q.Instance.mainScene.GetMap.enemyGatheringList.length - 1; e >= 0; e--) for (let i = q.Instance.mainScene.GetMap.enemyGatheringList[e].enemyList.length - 1; i >= 0; i--) t.push(q.Instance.mainScene.GetMap.enemyGatheringList[e].enemyList[i]);
                    if (t.length > 0) for (let e = t.length - 1; e >= 0; e--) ! t[e].IsDie && Xt.IsDistances(this.GetPosition, t[e].GetPosition, this.attackRange) && t[e].ChangeHp( - this.attackNum);
                    this.model.active = !1,
                    this.efHangover.active = !1,
                    this.efBomb.active = !0,
                    this.SetRotate = this.mRotation,
                    this.mPrefab.timer.once(1e3, this, () =>{
                        this.efBomb.active = !1,
                        this.Remove()
                    });
                    break
                }
                this.mPrefab.transform.lookAt(this.pointList[this.pointIndex], new Laya.Vector3(0, 1, 0))
            } else this.mPrefab.transform.lookAt(this.pointList[this.pointIndex], new Laya.Vector3(0, 1, 0))
        }
        Remove() {
            p.RemoveArrayKey(q.Instance.mainScene.GetMap.lastList, this),
            super.Remove()
        }
    }
    class Ae extends ke {
        onAwake() {
            this.unlockNum = _.architectureData.paijipao_unlock,
            this.campsiteType = l.MortarsBattalion,
            super.onAwake(),
            this.unlockArchitecture = this.mPrefab.getChildByName("paijipao"),
            this.firePoint = this.unlockArchitecture.getChildByName("gunMuzzle"),
            this.level = 1,
            this.maxLevel = 1,
            this.unlockArchitecture.active = !1
        }
        UpdateObj() {
            super.UpdateObj(),
            this.isUnlock && (this.headquarters.isDisPathch ? (this.lastFireTime += q.Instance.mainScene.delat, this.lastFireTime >= this.fireTime && this.Fire()) : this.lastFireTime = 0)
        }
        Unlock() {
            super.Unlock(),
            this.unlockArchitecture.active = !0,
            this.lastFireTime = 0,
            this.fireTime = 2,
            this.shellAttack = 10,
            this.showYanWu()
        }
        Fire() {
            this.lastFireTime = 0;
            let t = [];
            for (let e = q.Instance.mainScene.GetMap.enemyGatheringList.length - 1; e >= 0; e--) for (let i = q.Instance.mainScene.GetMap.enemyGatheringList[e].enemyList.length - 1; i >= 0; i--) q.Instance.mainScene.GetMap.enemyGatheringList[e].enemyList[i].IsDie || t.push(q.Instance.mainScene.GetMap.enemyGatheringList[e].enemyList[i]);
            if (! (t.length > 0)) return;
            t.length > 1 && t.sort((t, e) =>{
                return Laya.Vector3.distanceSquared(this.GetPosition, t.GetPosition) < Laya.Vector3.distanceSquared(this.GetPosition, e.GetPosition) ? -1 : 1
            });
            let e = Laya.Sprite3D.instantiate(j.LoaderPrefabs[_.resourcesDataCfg.paijipao_paodan], q.Instance.mainScene.GetScene, !1);
            e.transform.position = this.firePoint.transform.position.clone();
            let i = e.addComponent(Te);
            i.attackNum = this.shellAttack,
            i.endPos = t[0].GetPosition,
            i.Fire(),
            q.Instance.mainScene.GetMap.lastList.push(i)
        }
    }
    class xe extends te {
        onAwake() {
            this.idleAni = "hold",
            this.moveAni = "move",
            this.dieAni = "die",
            super.onAwake()
        }
        Reset() {
            super.Reset(),
            this.isMoveTarget = !1,
            this.isActiva = !1,
            this.hp = 50,
            this.maxHp = 50,
            this.attack = 10,
            this.attackRange = 5,
            this.perceptionRange = 8,
            this.outRange = 10,
            this.speed = 5,
            this.attackInterval = .5,
            this.medicalInterval = 2,
            this.medicalTargetDis = 2,
            this.lastMedicalInterval = 0;
            let t = this.model.transform.localPosition;
            t.y = 0,
            this.model.transform.localPosition = t
        }
        SetCamp(t) {
            switch (super.SetCamp(t), this.camp) {
            case a.Enermy:
                this.selfMat = q.Instance.mainScene.GetMap.roleMat.enemy;
                break;
            case a.Player:
                this.selfMat = q.Instance.mainScene.GetMap.roleMat.player
            }
            switch (this.model.getChildByName("mod_ljxf_NPC_yiliaobing").simpleSkinnedMeshRenderer.material = this.selfMat, this.maxHp = q.Instance.lastLevelData.AI5_HP, this.hp = this.maxHp, this.attack = q.Instance.lastLevelData.AI5_atk, this.speed = q.Instance.lastLevelData.AI_speed, this.attackRange = q.Instance.lastLevelData.AI5_atk_range, this.camp) {
            case a.Player:
                q.Instance.isRage && this.Rage()
            }
        }
        isRemain() {
            for (let t = 0; t < this.medicalTroopsCtl.headquarters.dispatchTroopsCtlList.length; t++) if (this.medicalTroopsCtl.headquarters.dispatchTroopsCtlList[t].attackList.length > 0) return ! 1;
            for (let t = 0; t < this.medicalTroopsCtl.headquarters.flamingTroopsCtlList.length; t++) if (this.medicalTroopsCtl.headquarters.flamingTroopsCtlList[t].attackList.length > 0) return ! 1;
            return ! 0
        }
        UpdateObj() {
            if (super.UpdateObj(), this.isActiva && !this.IsDie) {
                if (this.lastMedicalInterval += q.Instance.mainScene.delat, this.lastMedicalInterval >= this.medicalInterval) {
                    this.lastMedicalInterval = 0,
                    this.medicalInterval = .5 * Math.random() + 2.5;
                    for (let t = 0; t < this.medicalTroopsCtl.headquarters.dispatchTroopsCtlList.length; t++) for (let e = this.medicalTroopsCtl.headquarters.dispatchTroopsCtlList[t].attackList.length - 1; e >= 0; e--) this.medicalTroopsCtl.headquarters.dispatchTroopsCtlList[t].attackList[e].IsChoosable(this) && Xt.IsDistances(this.GetPosition, this.medicalTroopsCtl.headquarters.dispatchTroopsCtlList[t].attackList[e].GetPosition, this.attackRange) && (this.medicalTroopsCtl.headquarters.dispatchTroopsCtlList[t].attackList[e].Medical(), this.medicalTroopsCtl.headquarters.dispatchTroopsCtlList[t].attackList[e].ChangeHp(this.GetAttack()));
                    for (let t = 0; t < this.medicalTroopsCtl.headquarters.tankBattalionList.length; t++) for (let e = this.medicalTroopsCtl.headquarters.tankBattalionList[t].attackList.length - 1; e >= 0; e--) this.medicalTroopsCtl.headquarters.tankBattalionList[t].attackList[e].IsChoosable(this) && Xt.IsDistances(this.GetPosition, this.medicalTroopsCtl.headquarters.tankBattalionList[t].attackList[e].GetPosition, this.attackRange) && (this.medicalTroopsCtl.headquarters.tankBattalionList[t].attackList[e].Medical(), this.medicalTroopsCtl.headquarters.tankBattalionList[t].attackList[e].ChangeHp(this.GetAttack()));
                    for (let t = 0; t < this.medicalTroopsCtl.headquarters.flamingTroopsCtlList.length; t++) for (let e = this.medicalTroopsCtl.headquarters.flamingTroopsCtlList[t].attackList.length - 1; e >= 0; e--) this.medicalTroopsCtl.headquarters.flamingTroopsCtlList[t].attackList[e].IsChoosable(this) && Xt.IsDistances(this.GetPosition, this.medicalTroopsCtl.headquarters.flamingTroopsCtlList[t].attackList[e].GetPosition, this.attackRange) && (this.medicalTroopsCtl.headquarters.flamingTroopsCtlList[t].attackList[e].Medical(), this.medicalTroopsCtl.headquarters.flamingTroopsCtlList[t].attackList[e].ChangeHp(this.GetAttack()))
                }
                this.isRemain() || this.attackTarget && this.attackTarget.owner && (this.lastAttackTime += q.Instance.mainScene.delat, this.lastAttackTime >= 5 && (this.lastAttackTime = 0, this.SelectAttackTarget()))
            }
            switch (this.camp) {
            case a.Player:
                this.isActiva && !this.IsDie && (Xt.IsDistances(this.GetPosition, this.medicalTroopsCtl.headquarters.theirRole.GetPosition, V.grade.buffRange) ? this.RoleBuff() : this.RoleBuffEnd())
            }
        }
        IsTargetNull() {
            return ! (null != this.attackTarget && !this.attackTarget.IsDie) && (this.attackTarget = null, !0)
        }
        RoleBuff() {
            this.isRoleBuff || (this.model.getChildByName("mod_ljxf_NPC_yiliaobing").simpleSkinnedMeshRenderer.material = q.Instance.mainScene.GetMap.roleMat.buff, super.RoleBuff())
        }
        RoleBuffEnd() {
            this.isRoleBuff && (this.model.getChildByName("mod_ljxf_NPC_yiliaobing").simpleSkinnedMeshRenderer.material = this.selfMat, super.RoleBuffEnd())
        }
        ChangePos(t) {
            switch (super.ChangePos(t), this.camp) {
            case a.Player:
                this.isMoveTarget && Xt.IsDistances(this.GetPosition, this.dispatchPoint, .1) && (this.SetRotate = new Laya.Vector3(0, 180 + this.medicalTroopsCtl.GetRotate.y, 0), this.isMoveTarget = !1, this.dispatchPoint = null, this.action && this.action.ChangeAction(e.Standby))
            }
        }
        SearchAttackRole() {
            if (this.IsTargetNull()) {
                let t = [];
                if (this.isRemain()) {
                    for (let e = q.Instance.mainScene.GetMap.enemyGatheringList.length - 1; e >= 0; e--) if (q.Instance.mainScene.GetMap.enemyGatheringList[e].enemyList.length > 0) for (let i = q.Instance.mainScene.GetMap.enemyGatheringList[e].enemyList.length - 1; i >= 0; i--) q.Instance.mainScene.GetMap.enemyGatheringList[e].enemyList[i].IsChoosable(this) && t.push(q.Instance.mainScene.GetMap.enemyGatheringList[e].enemyList[i])
                } else for (let e = 0; e < q.Instance.mainScene.GetMap.headquartersList.length; e++) {
                    for (let i = 0; i < q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList.length; i++) if (q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList[i].attackList.length > 0) for (let a = q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList[i].attackList.length - 1; a >= 0; a--) q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList[i].attackList[a].IsChoosable(this) && t.push(q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList[i].attackList[a]);
                    for (let i = 0; i < q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList.length; i++) if (q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList[i].attackList.length > 0) for (let a = q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList[i].attackList.length - 1; a >= 0; a--) q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList[i].attackList[a].IsChoosable(this) && t.push(q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList[i].attackList[a])
                }
                return t.length > 1 && t.sort((t, e) =>{
                    return t.hp / t.maxHp < e.hp / e.maxHp ? -1 : 1
                }),
                t[0]
            }
            return this.attackTarget
        }
        SelectAttackTarget() {
            if (this.attackTarget = this.SearchAttackRole(), this.attackTarget) {
                this.lastMedicalTarget != this.attackTarget && (this.lastMedicalTime = 0),
                this.lastMedicalTarget = this.attackTarget,
                this.IsTargetAttackRange() ? this.action.ChangeAction(e.Standby) : this.action.ChangeAction(e.Move)
            }
        }
        IsTargetAttackRange() {
            let t = this.medicalTargetDis;
            switch (this.attackTarget.battleCamp) {
            case o.Tank:
                t = this.attackRange - 1
            }
            return !! Xt.IsDistances(this.attackTarget.GetPosition, this.GetPosition, t)
        }
        CollisionEnemy(t) {
            for (let e = this.gathering.enemyList.length - 1; e >= 0; e--) if (this.gathering.enemyList[e].IsCollision(this) && Xt.IsDistances(new Laya.Vector3(this.GetPosition.x + t.x, this.GetPosition.y, this.GetPosition.z + t.z), this.gathering.enemyList[e].GetPosition, 1)) {
                let i = !1;
                if (!this.gathering) return;
                if (this.gathering.obsList.length > 0) for (let t = 0; t < this.gathering.obsList.length; t++) if (Xt.IsDistances(this.gathering.enemyList[e].GetPosition, this.gathering.obsList[t].center, 17.5) && (zt.IntersectOBB(this.gathering.enemyList[e].box, this.gathering.obsList[t]) || zt.IntersectOBB(this.gathering.enemyList[e].box, this.gathering.obsList[t]))) {
                    i = !0;
                    break
                }
                i ? (t.x = 0, t.z = 0) : this.Extrusion(this.gathering.enemyList[e])
            }
        }
        Die() {
            super.Die(),
            null != this.medicalTroopsCtl && (q.Instance.lastSoliderNum -= 1, p.RemoveArrayKey(this.medicalTroopsCtl.attackList, this), Laya.stage.event(u.UPDATE_PLAYER)),
            Laya.Tween.to(this.model.transform, {
                localPositionY: -1.5
            },
            800, Laya.Ease.linearNone, Laya.Handler.create(this, () =>{
                null != this.gathering && this.gathering.EnemeyDie(this),
                this.Remove()
            }))
        }
        Remove() {
            super.Remove(),
            $t.CollectObject(this.mPrefab.name, this.mPrefab)
        }
        DieEnter() {
            super.DieEnter(),
            this.lastMedicalInterval = 0,
            U.Instance.PlayEffectAudio("AI_die")
        }
        moveDisPatchPoint(t) {
            this.dispatchPoint = t,
            this.isMoveTarget = !0,
            this.action.ChangeAction(e.Move)
        }
    }
    class we extends ke {
        constructor() {
            super(...arguments),
            this.barrackValueSpeedList = [],
            this.minValue = .49,
            this.maxValue = 0
        }
        onAwake() {
            this.campsiteType = l.MedicBattalion,
            this.barrackValueSpeedList = [.005, .008, .01],
            this.leveNumList.push(_.architectureData.bingying_up1),
            this.leveNumList.push(_.architectureData.bingying_up2),
            this.unlockNum = _.architectureData.bingying_unlock,
            this.levelNum = this.leveNumList[this.level - 1],
            this.barrackValueSpeed = V.barrackValueSpeedList[this.level - 1],
            super.onAwake(),
            this.level = 1,
            this.maxLevel = 3,
            this.unlockPoint = this.mPrefab.getChildByName("barracksPoint")
        }
        UpdateObj() {
            super.UpdateObj(),
            this.isUnlock && this.ChangeBarrckValue(this.barrackValueSpeed)
        }
        Unlock() {
            super.Unlock(),
            this.levelNum = this.leveNumList[this.level - 1],
            this.showYanWu(),
            this.unlockArchitecture = Laya.Sprite3D.instantiate(j.LoaderPrefabs[_.resourcesDataCfg.yiliaobingying], this.unlockPoint, !1),
            this.unlockArchitecture.transform.localPosition = new Laya.Vector3(0, 0, 0),
            this.unlockArchitecture.transform.localRotationEuler = new Laya.Vector3(0, 0, 0),
            this.inPoint = this.unlockArchitecture.getChildByName("soldierPoint"),
            this.levelPro = this.unlockArchitecture.getChildByName("jindutiao"),
            this.proMat = this.levelPro.getChildAt(0).meshRenderer.material.clone(),
            this.levelPro.getChildAt(0).meshRenderer.material = this.proMat,
            this.levelNumber = this.unlockArchitecture.getChildByName("number"),
            this.box = null,
            this.box = new Vt(this.levelPro.getChildByName("box"));
            for (let t = 0; t < this.levelNumber.getChildAt(0).numChildren; t++) {
                let e = this.levelNumber.getChildAt(0).getChildAt(t),
                i = e.meshRenderer.material.clone();
                e.meshRenderer.material = i,
                this.levelNumberMatList.push(i)
            }
            this.levelMingpai = this.unlockArchitecture.getChildByName("mingpai"),
            this.proSilverScale = this.levelMingpai.getChildAt(0).transform.localScale.clone(),
            this.lastBarrackProValue = 0,
            this.ChangeProValue()
        }
        LevelAdd() {
            super.LevelAdd(),
            this.showYanWu(),
            this.LevelChange()
        }
        LevelChange() {
            this.barrackValueSpeed = V.barrackValueSpeedList[this.level - 1]
        }
        ChangeBarrckValue(t) {
            this.lastBarrackProValue += t,
            this.lastBarrackProValue > 1 ? this.lastBarrackProValue = 1 : this.lastBarrackProValue < 0 && (this.lastBarrackProValue = 0),
            this.lastBarrackProValue >= 1 && this.SendSoldier()
        }
        SendSoldier() {
            if (this.ChangeBarrckValue( - this.lastBarrackProValue), this.medicalTroopsCtl.isSoldMax || q.Instance.GetIsMaxSolider) return;
            q.Instance.lastSoliderNum += 1,
            Laya.stage.event(u.UPDATE_PLAYER);
            let t = $t.GetPoolPrefab(_.resourcesDataCfg.medicalSoldier, j.LoaderPrefabs[_.resourcesDataCfg.medicalSoldier], q.Instance.mainScene.GetScene);
            t.active = !0;
            let e = t.getComponent(xe);
            e || (e = t.addComponent(xe)),
            e.Reset(),
            e.gathering = null,
            e.medicalTroopsCtl = this.medicalTroopsCtl,
            e.SetCamp(this.camp),
            e.roleCamp = n.FightingUnit,
            e.battleCamp = o.Medic;
            let i = this.medicalTroopsCtl.soldierPointList[this.medicalTroopsCtl.soldierList.length];
            t.transform.position = this.inPoint.transform.position,
            t.transform.rotationEuler = new Laya.Vector3(0, 180, 0),
            e.moveDisPatchPoint(i),
            this.medicalTroopsCtl.soldierList.push(e)
        }
    }
    class Ee extends ke {
        constructor() {
            super(...arguments),
            this.barrackList = [],
            this.soldierList = [],
            this.attackList = [],
            this.soldierPanel = [],
            this.points = [],
            this.soldierPointList = []
        }
        get isMaxLevel() {
            return this.level >= this.maxLevel
        }
        get isSoldMax() {
            return this.soldierList.length >= this.soldierPointList.length
        }
        SetHead(t, e) {
            this.headquarters = t;
            let i = new Laya.Vector3;
            this.points = [];
            for (let a = 0; a < e.point.length; a++) {
                let s = [];
                for (let n = 0; n < e.point[a].length; n++) Laya.Vector3.add(t.GetPosition, e.point[a][n], i),
                s.push(i.clone());
                this.points.push(s)
            }
            this.AddPoint();
            for (let i = 0; i < e.barracksList.length; i++) {
                let a = Laya.Sprite3D.instantiate(j.LoaderPrefabs[e.barracksList[i].name], this.mPrefab, !1);
                a.active = !0,
                a.transform.localPosition = e.barracksList[i].pos.clone(),
                a.transform.localRotation = e.barracksList[i].rot.clone(),
                a.transform.localScale = e.barracksList[i].scale.clone();
                let s = a.addComponent(we);
                s.medicalTroopsCtl = this,
                s.headquarters = t,
                this.barrackList.push(s)
            }
            for (let t = this.level; t < this.maxLevel; t++) this.LevelAdd()
        }
        onAwake() {
            super.onAwake(),
            this.campsiteType = l.DispatchPoint,
            this.proIcon = this.mPrefab.getChildByName("shengji_1");
            this.mPrefab.getChildByName("barracksList");
            for (let t = 0; t < this.mPrefab.numChildren; t++) this.mPrefab.getChildAt(t).name.indexOf("zhandian") >= 0 && (this.soldierPanel.push(this.mPrefab.getChildAt(t)), this.soldierPanel[this.soldierPanel.length - 1].active = !1);
            this.panelSize = p.GetBoundBoxSize(this.soldierPanel[0].getChildAt(0)),
            this.isUnlock = !0,
            this.lastNum = 0,
            this.maxLevel = 3,
            this.level = 1,
            this.soldierPanel[this.level - 1].active = !0
        }
        SetCamp(t) {
            super.SetCamp(t),
            this.barrackList.length > 0 && this.barrackList.forEach(t =>{
                t.SetCamp(this.camp)
            })
        }
        DispatchTroops(t) {
            if (this.soldierList.forEach(e =>{
                let i = Laya.Vector3.distance(this.soldierPanel[0].transform.position, t.land.transform.position),
                a = new Laya.Vector3(t.land.transform.position.x - this.soldierPanel[0].transform.position.x, e.GetPosition.y, t.land.transform.position.z - this.soldierPanel[0].transform.position.z);
                Laya.Vector3.normalize(a, a),
                e.enemyGather = new Laya.Vector3(e.GetPosition.x + a.x * i, e.GetPosition.y, e.GetPosition.z + a.z * i),
                e.Activate()
            }), this.soldierPointList.length > 0) for (let t = this.soldierList.length - 1; t >= 0; t--) {
                let e = this.soldierList.splice(t, 1)[0];
                this.attackList.push(e)
            }
        }
        UpdateObj() {
            if (super.UpdateObj(), this.barrackList.length > 0 && this.barrackList.forEach(t =>{
                t.UpdateObj()
            }), this.soldierList.length > 0) for (let t = this.soldierList.length - 1; t >= 0; t--) this.soldierList[t].UpdateObj();
            if (this.attackList.length > 0) for (let t = this.attackList.length - 1; t >= 0; t--) this.attackList[t].UpdateObj();
            return this.attackList.length > 0
        }
        ChangeProValue() {}
        CollisionRole() {}
        LevelAdd() {
            this.soldierPanel[this.level - 1].active = !1,
            this.level += 1,
            this.soldierPanel[this.level - 1].active = !0,
            this.AddPoint()
        }
        LevelReset() {
            this.level = 1;
            for (let t = 0; t < this.soldierPanel.length; t++) this.soldierPanel[t].active = t == this.level - 1;
            for (let t = 0; t < this.barrackList.length; t++) this.barrackList[t].LevelReset();
            if (this.soldierPointList.splice(0), this.points[this.level - 1]) for (let t = 0; t < this.points[this.level - 1].length; t++) this.soldierPointList.push(this.points[this.level - 1][t])
        }
        AddPoint() {
            if (this.points[this.level - 1]) for (let t = 0; t < this.points[this.level - 1].length; t++) this.soldierPointList.push(this.points[this.level - 1][t])
        }
        Remove() {
            for (this.barrackList.splice(0, this.barrackList.length); ! (this.soldierList.length <= 0);) {
                this.soldierList.pop().Remove()
            }
            for (; ! (this.attackList.length <= 0);) {
                this.attackList.pop().Remove()
            }
            super.Remove()
        }
    }
    class Be extends Bt {
        constructor() {
            super(...arguments),
            this.addCoinNum = [],
            this.minMatValue = 0,
            this.maxMatValue = -.49,
            this.box = null,
            this.out = new Laya.Vector3,
            this.dispatchTroopsCtlList = [],
            this.tankBattalionList = [],
            this.flamingTroopsCtlList = [],
            this.medicalTroopsCtlList = [],
            this.bombBarrackCtlList = [],
            this.shellBarrackCtlList = [],
            this.instructPoint = null
        }
        onAwake() {
            super.onAwake()
        }
        init(t, e) {
            if (this.SetPosition = e, this.kuosan = null, this.level = 0, this.maxLevel = 5, this.lastCoinNum = this.addCoinNum[this.level], this.isGuideCollision = !1, this.isCollision = !1, null != t.wuqiying.name && null != t.wuqiying.name && t.wuqiying.name.length > 0) {
                let e = Laya.Sprite3D.instantiate(j.LoaderPrefabs[_.resourcesDataCfg.wuqiying], this.mPrefab, !1);
                this.setTransform(e, t.wuqiying),
                this.weaponCtl = e.addComponent(be),
                this.weaponCtl.headquarters = this
            }
            if (null != t.fangjuying.name && null != t.fangjuying.name && t.fangjuying.name.length > 0) {
                let e = Laya.Sprite3D.instantiate(j.LoaderPrefabs[_.resourcesDataCfg.fangjuying], this.mPrefab, !1);
                this.setTransform(e, t.fangjuying),
                e.transform.setWorldLossyScale(t.fangjuying.scale.clone()),
                this.armourCtl = e.addComponent(Pe),
                this.armourCtl.headquarters = this
            }
            for (let e = 0; e < t.daodanyingList.length; e++) {
                let i = Laya.Sprite3D.instantiate(j.LoaderPrefabs[_.resourcesDataCfg.daodanying], this.mPrefab, !1);
                this.setTransform(i, t.daodanyingList[e]);
                let a = i.addComponent(Ge);
                a.headquarters = this,
                this.bombBarrackCtlList.push(a)
            }
            for (let e = 0; e < t.paijipaoyingList.length; e++) {
                let i = Laya.Sprite3D.instantiate(j.LoaderPrefabs[_.resourcesDataCfg.paijipaoying], this.mPrefab, !1);
                this.setTransform(i, t.paijipaoyingList[e]);
                let a = i.addComponent(Ae);
                a.headquarters = this,
                this.shellBarrackCtlList.push(a)
            }
            for (let e = 0; e < t.medicalBattalionList.length; e++) {
                let i = new Laya.Sprite3D;
                i.active = !0,
                this.mPrefab.addChild(i),
                this.dispatchTroopsPush(_.resourcesDataCfg.mod_ljxf_zhandian_yiliaobing_2, t.medicalBattalionList[e].mod_ljxf_zhandian_yiliaobing_2, i),
                this.dispatchTroopsPush(_.resourcesDataCfg.mod_ljxf_zhandian_yiliaobing_3, t.medicalBattalionList[e].mod_ljxf_zhandian_yiliaobing_3, i),
                this.dispatchTroopsPush(_.resourcesDataCfg.mod_ljxf_zhandian_yiliaobing_4, t.medicalBattalionList[e].mod_ljxf_zhandian_yiliaobing_4, i);
                let a = i.addComponent(Ee);
                a.SetHead(this, t.medicalBattalionList[e]),
                this.medicalTroopsCtlList.push(a)
            }
            this.lastProValue = 0,
            this.proChangeValue = 1 / 30
        }
        dispatchTroopsPush(t, e, i) {
            let a = Laya.Sprite3D.instantiate(j.LoaderPrefabs[t], i, !1);
            this.setTransform(a, e)
        }
        setTransform(t, e) {
            t.active = !0,
            t.transform.localPosition = e.pos.clone(),
            e.rot && (t.transform.localRotation = e.rot.clone()),
            e.scale && (t.transform.localScale = e.scale.clone())
        }
        get getWeaponLevel() {
            return this.weaponCtl ? this.weaponCtl.level - 1 : 0
        }
        get getArmourLevel() {
            return this.armourCtl ? this.armourCtl.level - 1 : 0
        }
        get isDisPathch() {
            if (q.Instance.isAutoSolider) return ! 1;
            for (let t = 0; t < this.dispatchTroopsCtlList.length; t++) if (this.dispatchTroopsCtlList[t].attackList.length > 0) return ! 0;
            for (let t = 0; t < this.tankBattalionList.length; t++) if (this.tankBattalionList[t].attackList.length > 0) return ! 0;
            for (let t = 0; t < this.flamingTroopsCtlList.length; t++) if (this.flamingTroopsCtlList[t].attackList.length > 0) return ! 0;
            for (let t = 0; t < this.medicalTroopsCtlList.length; t++) if (this.medicalTroopsCtlList[t].attackList.length > 0) return ! 0;
            return ! 1
        }
        get isAttackUnits() {
            for (let t = 0; t < this.dispatchTroopsCtlList.length; t++) if (this.dispatchTroopsCtlList[t].attackList.length > 0) return ! 0;
            for (let t = 0; t < this.tankBattalionList.length; t++) if (this.tankBattalionList[t].attackList.length > 0) return ! 0;
            for (let t = 0; t < this.flamingTroopsCtlList.length; t++) if (this.flamingTroopsCtlList[t].attackList.length > 0) return ! 0;
            for (let t = 0; t < this.medicalTroopsCtlList.length; t++) if (this.medicalTroopsCtlList[t].attackList.length > 0) return ! 0;
            return ! 1
        }
        SetRole(t) {
            this.theirRole = t,
            this.theirRole.headCtl = this,
            this.SetCamp(this.theirRole.camp)
        }
        SetCamp(t) {
            this.camp = t,
            this.tankBattalionList.length > 0 && this.tankBattalionList.forEach(t =>{
                t.capmIndex = this.theirRole.capmIndex,
                t.SetCamp(this.camp)
            }),
            this.dispatchTroopsCtlList.length > 0 && this.dispatchTroopsCtlList.forEach(t =>{
                t.capmIndex = this.theirRole.capmIndex,
                t.SetCamp(this.camp),
                console.log("----------------设置他的index", this.theirRole.capmIndex)
            }),
            this.flamingTroopsCtlList.length > 0 && this.flamingTroopsCtlList.forEach(t =>{
                t.capmIndex = this.theirRole.capmIndex,
                t.SetCamp(this.camp)
            }),
            this.medicalTroopsCtlList.length > 0 && this.medicalTroopsCtlList.forEach(t =>{
                t.capmIndex = this.theirRole.capmIndex,
                t.SetCamp(this.camp)
            })
        }
        UpdateObj() {
            if (null == this) return;
            let t = !0;
            for (let e = 0; e < this.dispatchTroopsCtlList.length; e++) {
                this.dispatchTroopsCtlList[e].UpdateObj() && (t = !1)
            }
            for (let e = 0; e < this.tankBattalionList.length; e++) {
                this.tankBattalionList[e].UpdateObj() && (t = !1)
            }
            for (let e = 0; e < this.flamingTroopsCtlList.length; e++) {
                this.flamingTroopsCtlList[e].UpdateObj() && (t = !1)
            }
            for (let e = 0; e < this.medicalTroopsCtlList.length; e++) {
                this.medicalTroopsCtlList[e].UpdateObj() && (t = !1)
            }
            this.showKuosan(t);
            for (let t = 0; t < this.bombBarrackCtlList.length; t++) this.bombBarrackCtlList[t].UpdateObj();
            for (let t = 0; t < this.shellBarrackCtlList.length; t++) this.shellBarrackCtlList[t].UpdateObj();
            if (this.weaponCtl && this.weaponCtl.UpdateObj(), this.armourCtl && this.armourCtl.UpdateObj(), this.CollisionRole(), q.Instance.isAutoSolider) {
                let t = !0;
                for (let e = 0; e < this.dispatchTroopsCtlList.length; e++) if (this.dispatchTroopsCtlList[e].isUnlock && (t = this.dispatchTroopsCtlList[e].isSoldMax), !t) return;
                for (let e = 0; e < this.tankBattalionList.length; e++) if (this.tankBattalionList[e].isUnlock && (t = this.tankBattalionList[e].isSoldMax), !t) return;
                for (let e = 0; e < this.flamingTroopsCtlList.length; e++) if (this.flamingTroopsCtlList[e].isUnlock && (t = this.flamingTroopsCtlList[e].isSoldMax), !t) return;
                for (let e = 0; e < this.medicalTroopsCtlList.length; e++) if (this.medicalTroopsCtlList[e].isUnlock && (t = this.medicalTroopsCtlList[e].isSoldMax), !t) return;
                this.DispatchTroops()
            }
        }
        CollisionRole() {
            if (null != this.box) {
                if (this.theirRole.action && this.theirRole.action.state == e.Standby) {
                    if (Xt.IsDistances(this.theirRole.GetPosition, this.box.center, 7) && (this.isCollision || zt.IntersectOBB(this.box, this.theirRole.box))) return this.isGuideCollision = !1,
                    q.Instance.mainScene.GetMap.playerCtl.GetIsCollision || Laya.stage.event(u.CHANGE_HINT, [1]),
                    this.isCollision || Laya.stage.event(u.ALL_HIT, [this]),
                    void(this.isCollision = !0)
                } else 1 == V.level && q.Instance.mainScene.GetMap.arrow.GetMainNode.active && (zt.IntersectOBB(this.box, this.theirRole.box) ? (this.isGuideCollision = !0, this.theirRole.IsUnlockBarracks() && Laya.stage.event(u.CHANGE_HINT, [0])) : (this.isGuideCollision = !1, q.Instance.mainScene.GetMap.playerCtl.GetIsCollision || Laya.stage.event(u.CHANGE_HINT, [1])));
                this.isCollision && (this.isCollision = !1, Laya.stage.event(u.HIDE_HIT))
            }
        }
        ChangeProValue(t) {
            this.lastProValue += t,
            this.lastProValue > 1 ? this.lastProValue = 1 : this.lastProValue <= 0 && (this.lastProValue = 0),
            this.proMat.tilingOffsetZ = this.minMatValue + (this.maxMatValue - this.minMatValue) * this.lastProValue,
            this.lastProValue >= 1 && this.DispatchTroops()
        }
        DispatchTroops(t = !0) {
            3 == q.Instance.hintIndex && q.Instance.AddHintShow(),
            this.isCollision = !1,
            this.selectEnemy(),
            t && q.Instance.mainScene.GetMap.airshipList.forEach(t =>{
                t.startGame()
            }),
            this.ChangeProValue( - this.lastProValue)
        }
        ClearArrElement(t) {
            for (;;) {
                if (t.length <= 0) return;
                t.pop().Remove()
            }
        }
        Remove() {
            for (this.ClearArrElement(this.dispatchTroopsCtlList), this.ClearArrElement(this.flamingTroopsCtlList), this.ClearArrElement(this.medicalTroopsCtlList), this.instructPoint && $t.CollectObject(this.instructPoint.name, this.instructPoint), this.charge && $t.CollectObject(this.charge.name, this.charge), this.weaponCtl && this.weaponCtl.Remove(), this.armourCtl && this.armourCtl.Remove(); ! (this.tankBattalionList.length <= 0);) {
                let t = this.tankBattalionList.shift();
                t && t.Remove()
            }
            for (; ! (this.bombBarrackCtlList.length <= 0);) {
                let t = this.bombBarrackCtlList.shift();
                t && t.Remove()
            }
            for (; ! (this.shellBarrackCtlList.length <= 0);) {
                let t = this.shellBarrackCtlList.shift();
                t && t.Remove()
            }
            this.showKuosan(!1),
            super.Remove()
        }
        showKuosan(t) {
            null != this.instructPoint && (t ? null == this.kuosan && (this.kuosan = $t.GetPoolPrefab(_.resourcesDataCfg.kuosan, j.LoaderPrefabs[_.resourcesDataCfg.kuosan], this.charge), this.kuosan.active = !0) : null != this.kuosan && ($t.CollectObject(this.kuosan.name, this.kuosan), this.kuosan = null))
        }
    }
    class De extends ke {
        constructor() {
            super(...arguments),
            this.barrackList = [],
            this.soldierList = [],
            this.attackList = [],
            this.soldierPanel = [],
            this.points = [],
            this.soldierPointList = []
        }
        get isMaxLevel() {
            return this.level >= this.maxLevel
        }
        get isSoldMax() {
            return this.soldierList.length >= this.soldierPointList.length
        }
        onAwake() {
            console.log("----------生成tele的兵点"),
            super.onAwake(),
            this.campsiteType = l.DispatchPoint,
            this.levelPro = this.mPrefab.getChildByName("jindutiao"),
            this.proIcon = this.mPrefab.getChildByName("shengji_1"),
            this.box = new Vt(this.levelPro.getChildByName("box")),
            this.proMat = this.levelPro.getChildAt(0).meshRenderer.material.clone(),
            this.levelPro.getChildAt(0).meshRenderer.material = this.proMat,
            this.levelNumber = this.mPrefab.getChildByName("number"),
            this.levelMingpai = this.mPrefab.getChildByName("mingpai");
            for (let t = 0; t < this.mPrefab.numChildren; t++) this.mPrefab.getChildAt(t).name.indexOf("zhandian") >= 0 && (this.soldierPanel.push(this.mPrefab.getChildAt(t)), this.soldierPanel[this.soldierPanel.length - 1].active = !1);
            for (let t = 0; t < this.levelNumber.getChildAt(0).numChildren; t++) {
                let e = this.levelNumber.getChildAt(0).getChildAt(t),
                i = e.meshRenderer.material.clone();
                e.meshRenderer.material = i,
                this.levelNumberMatList.push(i)
            }
            this.leveNumList.push(_.architectureData.junzhang_up1),
            this.leveNumList.push(_.architectureData.junzhang_up2),
            this.leveNumList.push(_.architectureData.junzhang_up3),
            this.leveNumList.push(_.architectureData.junzhang_up4),
            this.panelSize = p.GetBoundBoxSize(this.soldierPanel[0].getChildAt(0).getChildAt(0)),
            this.proSilverScale = this.levelMingpai.getChildAt(0).transform.localScale.clone(),
            this.isUnlock = !0,
            this.lastNum = 0,
            this.maxLevel = 5,
            this.level = 1,
            this.soldierPanel[this.level - 1].active = !0,
            this.levelNum = this.leveNumList[this.level - 1],
            this.ChangeProValue()
        }
        SetCamp(t) {
            super.SetCamp(t),
            this.barrackList.length > 0 && this.barrackList.forEach(t =>{
                t.capmIndex = this.headquarters.theirRole.capmIndex,
                t.SetCamp(this.camp)
            })
        }
        UpdateObj() {
            if (super.UpdateObj(), this.barrackList.length > 0 && this.barrackList.forEach(t =>{
                t.UpdateObj()
            }), this.soldierList.length > 0) for (let t = this.soldierList.length - 1; t >= 0; t--) this.soldierList[t].UpdateObj();
            if (this.attackList.length > 0) for (let t = this.attackList.length - 1; t >= 0; t--) this.attackList[t].UpdateObj();
            return this.attackList.length > 0
        }
        LevelAdd() {
            super.LevelAdd()
        }
        AddPoint() {
            if (this.points[this.level - 1]) for (let t = 0; t < this.points[this.level - 1].length; t++) this.soldierPointList.push(this.points[this.level - 1][t])
        }
        Remove() {
            for (this.barrackList.splice(0, this.barrackList.length); ! (this.soldierList.length <= 0);) {
                this.soldierList.pop().Remove()
            }
            for (; ! (this.attackList.length <= 0);) {
                this.attackList.pop().Remove()
            }
            super.Remove()
        }
        DestroyJudgment() {}
        LevelReset() {
            super.LevelReset()
        }
        resetPoint() {}
        EnemeyDie(t) {}
        changeMat() {}
    }
    class Ne extends ne {
        constructor() {
            super(...arguments),
            this.localTarget = null,
            this.localV3 = new Laya.Vector3,
            this.attackNum = 0,
            this.localAtkTarget = null,
            this.localActive = !1,
            this.localspeed = 1,
            this.canFollow = !1,
            this.needFight = !1,
            this.needFightInReady = !1
        }
        SetCamp(t, e) {
            super.SetCamp(t, e)
        }
        Reset() {
            super.Reset(),
            this.isJoinFollow = !1,
            this.localTarget = null,
            Laya.stage.on(u.SoldierWarn, this, this.setWarn)
        }
        Remove() {
            super.Remove(),
            Laya.stage.off(u.SoldierWarn, this, this.setWarn)
        }
        setWarn(t) {
            this.isActiva && 0 == this.capmIndex && null == this.localTarget && 0 == this.needFight && (this.localTarget = t)
        }
        setSelfMat_elite() {
            this.maxHp = this.maxHp * _.elitesoldiersData.special_HP,
            this.attack = this.attack * _.elitesoldiersData.special_atk,
            this.attackRange = this.attackRange * _.elitesoldiersData.special_range,
            0 == this.capmIndex ? this.selfMat = q.Instance.mainScene.GetMap.roleMat.player: 1 == this.capmIndex ? this.selfMat = q.Instance.mainScene.GetMap.roleMat.enemy: this.selfMat = q.Instance.mainScene.GetMap.roleMat.enemy2
        }
        setSelfMat() {
            switch (this.camp) {
            case a.Enermy:
                this.selfMat = q.Instance.mainScene.GetMap.roleMat.enemy2,
                this.maxHp = q.Instance.lastLevelData.AI2_HP,
                this.attack = q.Instance.lastLevelData.AI2_atk,
                this.speed = q.Instance.lastLevelData.AI_speed,
                this.attackRange = q.Instance.lastLevelData.AI2_atk_range;
                break;
            case a.Player:
                0 == this.capmIndex ? this.selfMat = q.Instance.mainScene.GetMap.roleMat.player: 1 == this.capmIndex && (this.selfMat = q.Instance.mainScene.GetMap.roleMat.enemy),
                this.maxHp = q.Instance.lastLevelData.AI1_HP,
                this.attack = q.Instance.lastLevelData.AI1_atk,
                this.speed = q.Instance.lastLevelData.AI_speed,
                this.attackRange = q.Instance.lastLevelData.AI1_atk_range,
                this.dispatchTroops && (this.gunLevel = this.dispatchTroops.headquarters.getWeaponLevel, this.armourLevel = this.dispatchTroops.headquarters.getArmourLevel)
            }
            this.localTarget = null
        }
        isInFighting() {
            return 0 == this.isArriveGather && 0 == this.isMoveTarget && 0 == this.isActiva && this.attackTarget && Xt.IsDistances(this.GetPosition, this.dispatchPoint, 6)
        }
        UpdateObj() {
            if (super.UpdateObj(), this.IsDie) return;
            this.GetPosition.clone();
            if (0 == this.isArriveGather && 0 == this.isMoveTarget && 0 == this.isActiva) {
                if (this.IsTargetNull() || !Xt.IsDistances(this.GetPosition, this.attackTarget.GetPosition, 10)) return this.attackTarget = null,
                void(this.attackTarget = this.SearchAttackRole());
                this.dispatchPoint && Xt.IsDistances(this.GetPosition, this.dispatchPoint, 6) ? (this.mPrefab.transform.lookAt(new Laya.Vector3(this.attackTarget.GetPosition.x, this.GetPosition.y, this.attackTarget.GetPosition.z), new Laya.Vector3(0, 1, 0)), this.SelectAttackTarget(a.Enermy)) : this.isMoveTarget = !0
            }
            if (!this.IsDie && 1 == this.isActiva && 1 == this.isJoinFollow) {
                let t = new Laya.Vector3(this.theirRole.getFollowArrayPosX(this.followPos), this.GetPosition.y, this.theirRole.getFollowArrayPoZ(this.followPos)),
                i = q.Instance.mainScene.GetMap.obsLineArray;
                if (!Xt.IsDistances(this.GetPosition, t, 1)) return this.isJoinFollow = !1,
                this.isMoveTarget = !0,
                this.isStartAtk = !1,
                void(this.action && !this.IsDie && this.action.ChangeAction(e.Move));
                if (i.length > 0) {
                    if (!y.pointInPolygon(t, i)) return void(this.action && !this.IsDie && this.action.ChangeAction(e.Standby));
                    this.SetPosition = t
                }
                if (this.canBattle(), this.attackTarget) {
                    if (this.mPrefab.transform.lookAt(new Laya.Vector3(this.attackTarget.GetPosition.x, this.GetPosition.y, this.attackTarget.GetPosition.z), new Laya.Vector3(0, 1, 0)), this.localAtkTarget = this.attackTarget, this.attackTarget.capmIndex == this.capmIndex) return void this.attackTarget;
                    Xt.IsDistances(this.GetPosition, this.attackTarget.GetPosition, this.perceptionRange) && this.atkMethod()
                } else {
                    let t = this.searchBuid();
                    if (null != t) {
                        if (this.mPrefab.transform.lookAt(new Laya.Vector3(t.GetPosition.x, this.GetPosition.y, t.GetPosition.z), new Laya.Vector3(0, 1, 0)), this.attackTarget = t, this.localAtkTarget = t, this.attackTarget.capmIndex == this.capmIndex) return void this.attackTarget;
                        Xt.IsDistances(this.GetPosition, this.attackTarget.GetPosition, this.perceptionRange) && this.atkMethod()
                    } else this.SetRotation = this.theirRole.GetRotation,
                    this.isStartAtk = !1,
                    this.action && !this.IsDie && (this.theirRole && this.theirRole.action && 1 == this.theirRole.action.state ? this.action.ChangeAction(e.Move) : (this.theirRole && this.theirRole.action && this.theirRole.action.state, this.action.ChangeAction(e.Standby)))
                }
            }
        }
        atkMethod() {
            if (this.action && !this.IsDie) {
                this.ani.getCurrentAnimatorPlayState(0).animatorState.name,
                this.attackAni;
                0 == this.isStartAtk && (this.attackNum = 0, this.theirRole && this.theirRole.action && this.theirRole.action.state == e.Move ? this.action.ChangeAction(e.Moveattack) : this.action.ChangeAction(e.Attack), this.isStartAtk = !0)
            }
        }
        ChangePos(t) {
            if (this.isActiva && 0 != this.isJoinFollow || super.ChangePos(t), this.canFollow = !1, this.capmIndex >= 0) if (this.isActiva) {
                let t = new Laya.Vector3(this.theirRole.getFollowArrayPosX(this.followPos), this.GetPosition.y, this.theirRole.getFollowArrayPoZ(this.followPos));
                if (0 == this.isJoinFollow) if (Xt.IsDistances(this.GetPosition, t, .5)) this.isJoinFollow = !0;
                else {
                    this.mPrefab.transform.lookAt(t, new Laya.Vector3(0, 1, 0));
                    let i = Laya.Vector3.distance(this.GetPosition, t);
                    this.localspeed = 1 + .2 * i,
                    this.localspeed = this.localspeed > 3 ? 3 : this.localspeed,
                    this.action && !this.IsDie && this.action.ChangeAction(e.Move)
                }
            } else this.localspeed = 1;
            let i = q.Instance.mainScene.GetMap.obsLineArray;
            if (i.length > 0) {
                let e = {
                    x: this.GetPosition.x + t.x,
                    y: this.GetPosition.z + t.z
                };
                y.pointInPolygon(e, i) ? this.localV3 = this.GetPosition: this.SetPosition = this.localV3
            }
        }
        AttackEnter() {
            super.AttackEnter()
        }
        IsTargetNull() {
            return ! (this.attackTarget && this.attackTarget.owner && !this.attackTarget.IsDie) && (this.attackTarget = null, !0)
        }
        Die() {
            super.Die(),
            this.DieMethod()
        }
        ChangeHp(t, e) {
            super.ChangeHp(t, e),
            this.hp
        }
        DieMethod() {
            this.action = null,
            this.RoleBuffEnd(),
            console.log(),
            tt.Instance.arrayChange(this.capmIndex, this),
            this.theirRole && this.theirRole.ReSetArrayPos(),
            null != this.dispatchTroops && (q.Instance.lastSoliderNum -= 1, Laya.stage.event(u.UPDATE_PLAYER)),
            Laya.Tween.to(this.model.transform, {
                localPositionY: -1.5
            },
            300, Laya.Ease.linearNone, Laya.Handler.create(this, () =>{
                null != this.gathering ? this.gathering.EnemeyDie(this) : null != this.dispatchTroops && this.dispatchTroops.EnemeyDie(this),
                this.Remove()
            }))
        }
        onStart() {}
        TouchMove() {
            this.IsDie || (super.TouchMove(), this.theirRole && 1 == this.isActiva && 0 == this.isStartAtk && this.action && !this.IsDie && this.action.ChangeAction(e.Move), this.theirRole && 1 == this.isActiva && 0 == this.needFight && (this.IsTargetNull() && (this.attackTarget = this.SearchAttackRole()), this.canFollow = !0, this.localActive = !0))
        }
        TouchUp() {
            this.IsDie || (this.theirRole && 1 == this.isActiva && (this.action.state != e.Attack && this.action.state != e.Moveattack ? this.action && !this.IsDie && this.action.ChangeAction(e.Standby) : Laya.timer.frameOnce(10, this, () =>{
                this.action.state == e.Moveattack && this.action && !this.IsDie && (this.isStartAtk = !1, p.changeAni(this.ani, this.attackAni))
            })), 1 == this.isJoinFollow && 1 == this.isArriveGather && Laya.timer.frameOnce(11, this, () =>{
                this.isActiva = !0,
                this.isArriveGather = !1
            }))
        }
        TouchDown() {
            1 == this.isActiva && (this.isStartAtk = !1)
        }
        GetSpeed() {
            let t = this.speed;
            return 0 == this.capmIndex ? t = q.Instance.mainScene.GetMap.playerCtl.GetSpeed() : this.capmIndex > 0 && (t = q.Instance.mainScene.GetMap.roleList[this.capmIndex - 1].GetSpeed()),
            t * this.localspeed
        }
        SelectAttackTarget(t = null) {
            switch (t || this.camp) {
            case a.Enermy:
                super.SelectAttackTarget();
                break;
            case a.Player:
                if (this.attackTarget = this.SearchAttackRole(), this.attackTarget) {
                    let t = this.IsTargetAttackRange();
                    switch (this.roleCamp) {
                    case n.FightingUnit:
                        t || 1 != this.needFight || (this.theirRole && this.theirRole.action && 1 == this.theirRole.action.state ? this.action && !this.IsDie && this.action.ChangeAction(e.Move) : this.theirRole && this.theirRole.action && 0 == this.theirRole.action.state ? this.action && !this.IsDie && this.action.ChangeAction(e.Standby) : this.action.ChangeAction(e.Standby))
                    }
                }
            }
        }
        IsTargetAttackRange() {
            return !! Xt.IsDistances(this.attackTarget.GetPosition, this.GetPosition, this.attackRange) && (this.isAttack && (this.action && !this.IsDie && (1 == this.isJoinFollow && this.theirRole && this.theirRole.action && this.theirRole.action.state == e.Move ? this.action.ChangeAction(e.Moveattack) : this.action.ChangeAction(e.Attack)), 0 == this.capmIndex && Laya.stage.event(u.SoldierWarn, [this.attackTarget])), !0)
        }
        Activate() {
            switch (this.isJoinFollow = !1, this.camp) {
            case a.Enermy:
                this.capmIndex < 0 ? this.isActiva = !0 : (this.isArriveGather = !0, this.isMoveTarget = !1, this.needFight = !1, this.canFollow = !1, this.enemyGather = new Laya.Vector3(this.theirRole.GetPosition.x, this.GetPosition.y, this.theirRole.GetPosition.z), this.action && !this.IsDie && this.action.ChangeAction(e.Move));
                break;
            case a.Player:
                this.isArriveGather = !0,
                this.isMoveTarget = !1,
                this.needFight = !1,
                this.canFollow = !1,
                this.enemyGather = new Laya.Vector3(this.theirRole.GetPosition.x, this.GetPosition.y, this.theirRole.GetPosition.z),
                this.action && !this.IsDie && this.action.ChangeAction(e.Move)
            }
        }
        SetRole(t) {
            this.theirRole = t,
            this.followPos = this.theirRole.setFollowArrayPos(),
            this.setCampindex()
        }
        setCampindex(t) {
            null != t ? this.capmIndex = t: null != this.theirRole ? this.capmIndex = this.theirRole.capmIndex: this.capmIndex = -1
        }
        setCampHeroByIndex() {
            0 == this.capmIndex ? (tt.Instance.SoldierList_Mine.push(this), this.theirRole = q.Instance.mainScene.GetMap.roleList[0], this.followPos = this.theirRole.setFollowArrayPos()) : 1 == this.capmIndex && (tt.Instance.SoldierList_Ai.push(this), this.theirRole = q.Instance.mainScene.GetMap.roleList[1], this.followPos = this.theirRole.setFollowArrayPos())
        }
        canBattle() { ! this.IsTargetNull() && Xt.IsDistances(this.GetPosition, this.attackTarget.GetPosition, 6) ? this.needFight = !0 : (this.attackTarget = null, this.needFight = !1)
        }
        canBattle_New() {}
        ChangeMoveForWorld() {
            switch (this.roleCamp) {
            case n.FightingUnit:
                if (this.isMoveTarget) this.mPrefab.transform.lookAt(new Laya.Vector3(this.dispatchPoint.x, this.GetPosition.y, this.dispatchPoint.z), new Laya.Vector3(0, 1, 0));
                else if (this.isArriveGather) this.mPrefab.transform.lookAt(new Laya.Vector3(this.theirRole.getFollowArrayPosX(this.followPos), this.GetPosition.y, this.theirRole.getFollowArrayPoZ(this.followPos)), new Laya.Vector3(0, 1, 0)),
                Xt.IsDistances(this.GetPosition, new Laya.Vector3(this.theirRole.getFollowArrayPosX(this.followPos), this.GetPosition.y, this.theirRole.getFollowArrayPoZ(this.followPos)), .5) && (this.isJoinFollow = !0, this.isArriveGather = !1, this.isActiva = !0);
                else if (this.isActiva) switch (this.needFightInReady = !1, this.camp) {
                case a.Player:
                    this.canFollow = !0;
                    break;
                case a.Enermy:
                    this.IsTargetNull() || this.isJoinFollow || this.mPrefab.transform.lookAt(new Laya.Vector3(this.attackTarget.GetPosition.x, this.GetPosition.y, this.attackTarget.GetPosition.z), new Laya.Vector3(0, 1, 0))
                }
                break;
            case n.Player:
                super.ChangeMoveForWorld()
            }
        }
        SearchAttackRole() {
            if (this.IsTargetNull() || this.roleCamp == n.Player) {
                let t = [];
                switch (this.camp) {
                case a.Enermy:
                    for (let e = q.Instance.mainScene.GetMap.roleList.length - 1; e >= 0; e--) q.Instance.mainScene.GetMap.roleList[e].IsChoosable(this) && Xt.IsDistances(this.GetPosition, q.Instance.mainScene.GetMap.roleList[e].GetPosition, this.perceptionRange) && t.push(q.Instance.mainScene.GetMap.roleList[e]);
                    for (let e = 0; e < tt.Instance.SoldierList_Mine.length; e++) tt.Instance.SoldierList_Mine[e].IsChoosable(this) && Xt.IsDistances(this.GetPosition, tt.Instance.SoldierList_Mine[e].GetPosition, this.perceptionRange) && t.push(tt.Instance.SoldierList_Mine[e]);
                    for (let e = 0; e < tt.Instance.SoldierList_Ai.length; e++) tt.Instance.SoldierList_Ai[e].IsChoosable(this) && Xt.IsDistances(this.GetPosition, tt.Instance.SoldierList_Ai[e].GetPosition, this.perceptionRange) && t.push(tt.Instance.SoldierList_Ai[e]);
                    break;
                case a.Player:
                    for (let e = q.Instance.mainScene.GetMap.enemyGatheringList.length - 1; e >= 0; e--) if (q.Instance.mainScene.GetMap.enemyGatheringList[e].enemyList.length > 0) for (let i = q.Instance.mainScene.GetMap.enemyGatheringList[e].enemyList.length - 1; i >= 0; i--) q.Instance.mainScene.GetMap.enemyGatheringList[e].enemyList[i].IsChoosable(this) && t.push(q.Instance.mainScene.GetMap.enemyGatheringList[e].enemyList[i]);
                    for (let e = 0; e < q.Instance.mainScene.GetMap.roleList.length; e++) q.Instance.mainScene.GetMap.roleList[e].IsChoosable(this) && t.push(q.Instance.mainScene.GetMap.roleList[e]);
                    for (let e = 0; e < tt.Instance.SoldierList_Mine.length; e++) tt.Instance.SoldierList_Mine[e].IsChoosable(this) && t.push(tt.Instance.SoldierList_Mine[e]);
                    for (let e = 0; e < tt.Instance.SoldierList_Ai.length; e++) tt.Instance.SoldierList_Ai[e].IsChoosable(this) && t.push(tt.Instance.SoldierList_Ai[e])
                }
                return t.length > 1 && t.sort((t, e) =>{
                    return Laya.Vector3.distanceSquared(this.GetPosition, t.GetPosition) < Laya.Vector3.distanceSquared(this.GetPosition, e.GetPosition) ? -1 : 1
                }),
                t[0]
            }
            return this.attackTarget
        }
        searchBuid() {
            if (this.IsTargetNull() || this.roleCamp == n.Player) {
                let t = [];
                for (let e = 0; e < tt.Instance.BuildLIst_Mine.length; e++) tt.Instance.BuildLIst_Mine[e].IsChoosable(this) && this.capmIndex != tt.Instance.BuildLIst_Mine[e].capmIndex && Xt.IsDistances(this.GetPosition, tt.Instance.BuildLIst_Mine[e].GetPosition, this.perceptionRange) && t.push(tt.Instance.BuildLIst_Mine[e]);
                for (let e = 0; e < tt.Instance.BuildList_Eny.length; e++) tt.Instance.BuildList_Eny[e].IsChoosable(this) && this.capmIndex != tt.Instance.BuildList_Eny[e].capmIndex && Xt.IsDistances(this.GetPosition, tt.Instance.BuildList_Eny[e].GetPosition, this.perceptionRange) && t.push(tt.Instance.BuildList_Eny[e]);
                return t.length > 1 && t.sort((t, e) =>{
                    return Laya.Vector3.distanceSquared(this.GetPosition, t.GetPosition) < Laya.Vector3.distanceSquared(this.GetPosition, e.GetPosition) ? -1 : 1
                }),
                t[0]
            }
            return null
        }
        IsChoosable(t) {
            return this != t && !this.IsDie && (t.battleCamp == o.Medic || this.capmIndex != t.capmIndex)
        }
        getHero() {}
    }
    class Re extends ke {
        constructor() {
            super(...arguments),
            this.barrackValueSpeedList = [],
            this.minValue = .49,
            this.maxValue = 0
        }
        onAwake() {
            this.campsiteType = l.Barracks,
            this.barrackValueSpeedList = [.005, .008, .01],
            this.leveNumList.push(_.architectureData.bingying_up1),
            this.leveNumList.push(_.architectureData.bingying_up2),
            this.unlockNum = _.architectureData.bingying_unlock,
            this.levelNum = this.leveNumList[this.level - 1],
            this.barrackValueSpeed = V.barrackValueSpeedList[this.level - 1],
            super.onAwake(),
            this.level = 1,
            this.maxLevel = 3,
            this.unlockPoint = this.mPrefab.getChildByName("barracksPoint")
        }
        UpdateObj() {
            super.UpdateObj(),
            this.isUnlock && this.ChangeBarrckValue(this.barrackValueSpeed)
        }
        reSetTargetPos() {}
        Unlock() {
            if (super.Unlock(), 1 == q.Instance.hintIndex && q.Instance.AddHintShow(), this.levelNum = this.leveNumList[this.level - 1], this.showYanWu(), null == this.unlockArchitecture && (this.unlockArchitecture = Laya.Sprite3D.instantiate(j.LoaderPrefabs[_.resourcesDataCfg.bingying], this.unlockPoint, !1), this.unlockArchitecture.transform.localPosition = new Laya.Vector3(0, 0, 0), this.unlockArchitecture.transform.localRotationEuler = new Laya.Vector3(0, 0, 0)), this.unlockArchitecture.active = !0, this.barrackModel = this.unlockArchitecture.getChildByName("mod_ljxf_bingying"), this.barrackModel.active = !0, this.baseModel = this.barrackModel.getChildByName("mod_ljxf_bingying"), this.mod_ljxf_bingying_gun = this.barrackModel.getChildByName("mod_ljxf_bingying_gun"), this.mod_ljxf_bingying_mutou = this.barrackModel.getChildByName("mod_ljxf_bingying_mutou"), this.mod_ljxf_bingying_shengji_2 = this.barrackModel.getChildByName("mod_ljxf_bingying_shengji_2"), this.barrackProMat = this.barrackModel.getChildByName("mod_ljxf_bingying_jindutiao").meshRenderer.material.clone(), this.barrackModel.getChildByName("mod_ljxf_bingying_jindutiao").meshRenderer.material = this.barrackProMat, this.barrackNumerMat = this.barrackModel.getChildByName("mod_ljxf_bingying_number").meshRenderer.material.clone(), this.barrackModel.getChildByName("mod_ljxf_bingying_number").meshRenderer.material = this.barrackNumerMat, this.mod_ljxf_bingying_gun.active = 3 == this.level, this.mod_ljxf_bingying_mutou.active = 3 == this.level, this.mod_ljxf_bingying_shengji_2.active = this.level >= 2, this.inPoint = this.unlockArchitecture.getChildByName("soldierPoint"), this.levelPro = this.unlockArchitecture.getChildByName("jindutiao"), this.proMat = this.levelPro.getChildAt(0).meshRenderer.material.clone(), this.levelPro.getChildAt(0).meshRenderer.material = this.proMat, this.box = null, this.box = new Vt(this.levelPro.getChildByName("box")), this.levelNumber = this.unlockArchitecture.getChildByName("number"), this.levelNumberMatList.length <= 0) for (let t = 0; t < this.levelNumber.getChildAt(0).numChildren; t++) {
                let e = this.levelNumber.getChildAt(0).getChildAt(t),
                i = e.meshRenderer.material.clone();
                e.meshRenderer.material = i,
                this.levelNumberMatList.push(i)
            }
            this.levelMingpai = this.unlockArchitecture.getChildByName("mingpai"),
            this.proSilverScale = this.levelMingpai.getChildAt(0).transform.localScale.clone(),
            this.lastBarrackProValue = 0,
            this.ChangeProValue(),
            this.setMat(this.capmIndex),
            this.levelNumber.active = !0,
            this.levelMingpai.active = !0,
            this.levelPro.active = !0
        }
        LevelAdd() {
            super.LevelAdd(),
            5 == q.Instance.hintIndex && q.Instance.AddHintShow(),
            this.showYanWu(),
            this.LevelChange()
        }
        setMat(t) {
            if (this.capmIndex = t, null == this.baseModel) return;
            let e = null;
            0 == t ? e = q.Instance.mainScene.GetMap.camp_carr_Mat.mat_0: 1 == t && (e = q.Instance.mainScene.GetMap.camp_carr_Mat.mat_1),
            this.baseModel.meshRenderer.material = e,
            this.mod_ljxf_bingying_shengji_2.meshRenderer.material = e,
            this.mod_ljxf_bingying_mutou.meshRenderer.material = e
        }
        LevelReset() {
            super.LevelReset(),
            this.box = new Vt(this.unlockPro.getChildByName("box")),
            null != this.unlockArchitecture && (this.unlockArchitecture.active = !1, this.LevelChange())
        }
        LevelChange() {
            this.barrackValueSpeed = V.barrackValueSpeedList[this.level - 1],
            this.barrackNumerMat.tilingOffsetW = -.1 * this.level,
            this.mod_ljxf_bingying_gun.active = 3 == this.level,
            this.mod_ljxf_bingying_mutou.active = 3 == this.level,
            this.mod_ljxf_bingying_shengji_2.active = this.level >= 2
        }
        ChangeBarrckValue(t) {
            this.waitSend >= 0 ? this.waitSend -= Laya.timer.delta: (this.lastBarrackProValue += t, this.lastBarrackProValue > 1 ? this.lastBarrackProValue = 1 : this.lastBarrackProValue < 0 && (this.lastBarrackProValue = 0), this.barrackProMat.tilingOffsetZ = this.minValue + this.lastBarrackProValue * (this.maxValue - this.minValue), this.lastBarrackProValue >= 1 && this.SendSoldier())
        }
        deterList() {
            return ! 0
        }
    }
    class Oe extends Qt {
        constructor() {
            super(...arguments),
            this.Barra = null,
            this.dying = !1
        }
        onAwake() {
            super.onAwake(),
            this.model = null,
            this.action = null
        }
        get IsDie() {
            return this.hp < 0 || 1 == this.dying
        }
        Reset() {
            this.speed = 10,
            this.maxHp = _.dzBattleConfigData.bubing_build_hp,
            this.attackInterval = 0,
            this.lastAttackTime = 0,
            this.shield = 0,
            this.isAttack = !1,
            this.isActiva = !1,
            this.hp = this.maxHp,
            this.isRage = !1,
            this.isRoleBuff = !1,
            this.roleCamp = n.FightingUnit,
            this.battleCamp = o.Zealot,
            this.dying = !1
        }
        ChangeMoveForWorld() {}
        Move() {}
        ChangePos(t) {}
        CollisionPlayer() {}
        ChangeHp(t, e = -1) {
            if (null != t && NaN != t && null != t || (t = -1), t < 0 && (this.Barra.waitSend = 5e3), console.log("----------建筑受伤", t, this.maxHp, this.hp), t < 0 && this.shield > 0) {
                if (this.shield += t, t = this.shield, this.shield >= 0) return;
                this.shield = 0
            }
            this.hp += t,
            this.hp <= 0 ? (this.hp = 0, this.Barra.LevelReset(), this.dying = !0, this.capmIndex >= 0 && (0 == this.capmIndex ? p.RemoveArrayKey(tt.Instance.BuildLIst_Mine, this) : p.RemoveArrayKey(tt.Instance.BuildList_Eny, this))) : this.hp > this.maxHp && (this.hp = this.maxHp)
        }
        IsChoosable(t) {
            return this != t && this.capmIndex != t.capmIndex
        }
    }
    class Ve extends Re {
        Unlock() {
            U.Instance.PlayEffectAudio("jiesuo"),
            this.isUnlock = !0,
            this.unlockMingpai.active = !1,
            this.unlockNumber.active = !1,
            this.unlockPro.active = !1,
            1 == q.Instance.hintIndex && q.Instance.AddHintShow(),
            this.levelNum = this.leveNumList[this.level - 1],
            this.showYanWu(),
            null == this.unlockArchitecture && (this.unlockArchitecture = Laya.Sprite3D.instantiate(j.LoaderPrefabs[_.resourcesDataCfg.bingying], this.unlockPoint, !1), this.unlockArchitecture.transform.localPosition = new Laya.Vector3(0, 0, 0), this.unlockArchitecture.transform.localRotationEuler = new Laya.Vector3(0, 0, 0));
            let t = this.owner.getComponent(Oe);
            if (null == t && ((t = this.owner.addComponent(Oe)).capmIndex = this.capmIndex, t.Barra = this), this.capmIndex >= 0 && (0 == this.capmIndex ? tt.Instance.BuildLIst_Mine.push(t) : tt.Instance.BuildList_Eny.push(t)), t.Reset(), this.unlockArchitecture.active = !0, this.barrackModel = this.unlockArchitecture.getChildByName("mod_ljxf_bingying"), this.barrackModel.active = !0, this.baseModel = this.barrackModel.getChildByName("mod_ljxf_bingying"), this.mod_ljxf_bingying_gun = this.barrackModel.getChildByName("mod_ljxf_bingying_gun"), this.mod_ljxf_bingying_mutou = this.barrackModel.getChildByName("mod_ljxf_bingying_mutou"), this.mod_ljxf_bingying_shengji_2 = this.barrackModel.getChildByName("mod_ljxf_bingying_shengji_2"), this.barrackProMat = this.barrackModel.getChildByName("mod_ljxf_bingying_jindutiao").meshRenderer.material.clone(), this.barrackModel.getChildByName("mod_ljxf_bingying_jindutiao").meshRenderer.material = this.barrackProMat, this.barrackNumerMat = this.barrackModel.getChildByName("mod_ljxf_bingying_number").meshRenderer.material.clone(), this.barrackModel.getChildByName("mod_ljxf_bingying_number").meshRenderer.material = this.barrackNumerMat, this.mod_ljxf_bingying_gun.active = 3 == this.level, this.mod_ljxf_bingying_mutou.active = 3 == this.level, this.mod_ljxf_bingying_shengji_2.active = this.level >= 2, this.inPoint = this.unlockArchitecture.getChildByName("soldierPoint"), this.levelPro = this.unlockArchitecture.getChildByName("jindutiao"), this.proMat = this.levelPro.getChildAt(0).meshRenderer.material.clone(), this.levelPro.getChildAt(0).meshRenderer.material = this.proMat, this.box = null, this.box = new Vt(this.levelPro.getChildByName("box")), this.levelNumber = this.unlockArchitecture.getChildByName("number"), this.levelNumberMatList.length <= 0) for (let t = 0; t < this.levelNumber.getChildAt(0).numChildren; t++) {
                let e = this.levelNumber.getChildAt(0).getChildAt(t),
                i = e.meshRenderer.material.clone();
                e.meshRenderer.material = i,
                this.levelNumberMatList.push(i)
            }
            this.levelMingpai = this.unlockArchitecture.getChildByName("mingpai"),
            this.proSilverScale = this.levelMingpai.getChildAt(0).transform.localScale.clone(),
            this.lastBarrackProValue = 0,
            this.ChangeProValue(),
            this.setMat(this.capmIndex),
            this.levelNumber.active = !0,
            this.levelMingpai.active = !0,
            this.levelPro.active = !0
        }
        deterList() {
            return this.headquarters.dispatchTroopsCtlList.forEach(t =>{
                t.soldierList.forEach(t =>{
                    if (t.isInFighting()) return ! 0
                })
            }),
            this.headquarters.flamingTroopsCtlList.forEach(t =>{
                t.soldierList.forEach(t =>{})
            }),
            !1
        }
        SendSoldier() {
            if (this.ChangeBarrckValue( - this.lastBarrackProValue), this.dispatchTroopsCtl.attackList.length > 0 && this.dispatchTroopsCtl.soldierList.length >= 5) return;
            if (this.deterList()) return;
            if (this.dispatchTroopsCtl.isSoldMax || q.Instance.GetIsMaxSolider) return;
            q.Instance.lastSoliderNum += 1,
            Laya.stage.event(u.UPDATE_PLAYER);
            let t = $t.GetPoolPrefab(_.resourcesDataCfg.soldier, j.LoaderPrefabs[_.resourcesDataCfg.soldier], q.Instance.mainScene.GetScene);
            t.active = !0;
            let e = t.getComponent(Ne);
            e || (e = t.addComponent(Ne)),
            e.Reset(),
            e.gathering = null,
            e.dispatchTroops = this.dispatchTroopsCtl,
            e.SetRole(this.dispatchTroopsCtl.headquarters.theirRole),
            e.SetCamp(this.camp),
            e.roleCamp = n.FightingUnit,
            e.battleCamp = o.Soldier;
            let i = this.dispatchTroopsCtl.soldierPointList[this.dispatchTroopsCtl.soldierList.length];
            t.transform.position = this.inPoint.transform.position,
            t.transform.setWorldLossyScale(new Laya.Vector3(1, 1, 1)),
            t.transform.rotationEuler = new Laya.Vector3(0, 180, 0),
            e.moveDisPatchPoint(i),
            this.dispatchTroopsCtl.soldierList.push(e),
            this.capmIndex >= 0 && (0 == this.capmIndex ? tt.Instance.SoldierList_Mine.push(e) : tt.Instance.SoldierList_Ai.push(e))
        }
    }
    class ze extends De {
        constructor() {
            super(...arguments),
            this.pointsSprite3d = []
        }
        SetHead(t, e) {
            this.headquarters = t,
            this.points = [],
            this.pointsSprite3d = [];
            for (let t = 0; t < e.point.length; t++) {
                let i = [],
                a = [];
                for (let s = 0; s < e.point[t].length; s++) {
                    let n = new Laya.Sprite3D;
                    this.mPrefab.addChild(n),
                    n.transform.localPosition = e.point[t][s].clone(),
                    a.push(n),
                    i.push(e.point[t][s].clone())
                }
                this.pointsSprite3d.push(a),
                this.points.push(i)
            }
            this.AddPoint();
            for (let i = 0; i < e.barracksList.length; i++) {
                let a = Laya.Sprite3D.instantiate(j.LoaderPrefabs[e.barracksList[i].name], this.mPrefab, !1);
                a.active = !0,
                a.transform.localPosition = e.barracksList[i].pos.clone(),
                a.transform.localRotation = e.barracksList[i].rot.clone(),
                a.transform.localScale = e.barracksList[i].scale.clone();
                let s = a.addComponent(Ve);
                s.dispatchTroopsCtl = this,
                s.headquarters = t,
                this.barrackList.push(s)
            }
            for (let t = 0; t < this.barrackList.length; t++) this.barrackList[t].setMat(this.capmIndex);
            this.changeMat()
        }
        DispatchTroops(t) {}
        LevelAdd(t = !0) {
            0 == t && this.level >= this.headquarters.theirRole.level || (this.soldierPanel[this.level - 1] && this.level < 3 && (this.soldierPanel[this.level - 1].active = !1), super.LevelAdd(), this.isMaxLevel && (this.proIcon.active = !1), 1 == t && this.headquarters.theirRole.ChangeLevel(1), 4 != this.level && 5 != this.level || this.headquarters.flamingTroopsCtlList.length > 0 && this.headquarters.flamingTroopsCtlList.forEach(t =>{
                t.LevelAdd()
            }), 2 == q.Instance.hintIndex && q.Instance.AddHintShow(), this.soldierPanel[this.level - 1] && (this.soldierPanel[this.level - 1].active = !0), this.AddPoint())
        }
        AddPoint() {
            if (this.pointsSprite3d[this.level - 1]) for (let t = 0; t < this.pointsSprite3d[this.level - 1].length; t++) this.soldierPointList.push(this.pointsSprite3d[this.level - 1][t].transform.position.clone())
        }
        DestroyJudgment() {
            console.log(" DispatchTroopsCtl_Battle--  "),
            this.soldierList.length <= 0 && (this.soldierList = [], Laya.stage.event(u.HeadDes)),
            q.Instance.mainScene.GetMap.battCountWinDeter()
        }
        LevelReset() {
            super.LevelReset(),
            this.box.update(),
            this.isUnlock = !0;
            for (let t = 0; t < this.soldierPanel.length; t++) this.soldierPanel[t].active = t == this.level - 1;
            this.proIcon.active = !0;
            for (let t = 0; t < this.barrackList.length; t++) this.barrackList[t].LevelReset(),
            console.log("---------------本身营地的index", this.capmIndex),
            this.barrackList[t].setMat(this.capmIndex);
            if (this.pointsSprite3d) for (let t = 0; t < this.pointsSprite3d.length; t++) for (let e = 0; e < this.pointsSprite3d[t].length; e++) this.pointsSprite3d[t][e].destroy();
            this.resetPoint()
        }
        resetPoint() {
            this.pointsSprite3d = [],
            this.soldierPointList = [];
            for (let t = 0; t < this.points.length; t++) {
                let e = [];
                for (let i = 0; i < this.points[t].length; i++) {
                    let a = new Laya.Sprite3D;
                    this.mPrefab.addChild(a),
                    a.transform.localPosition = this.points[t][i].clone(),
                    e.push(a)
                }
                this.pointsSprite3d.push(e)
            }
            this.AddPoint()
        }
        changeMat() {
            let t = null;
            0 == this.capmIndex ? t = q.Instance.mainScene.GetMap.roleMat.player: 1 == this.capmIndex && (t = q.Instance.mainScene.GetMap.roleMat.enemy2)
        }
        reSetTargetPos() {
            for (let t = 0; t < this.soldierList.length; t++) {
                let e = this.soldierList[t],
                i = this.soldierPointList[t];
                e.isActiva ? e.dispatchPoint = i: e.moveDisPatchPoint(i)
            }
        }
        EnemeyDie(t) {
            t.indexTarget >= 0 && (this.localCampTarget = t.indexTarget),
            p.RemoveArrayKey(this.soldierList, t),
            this.reSetTargetPos(),
            this.DestroyJudgment()
        }
    }
    class He extends ke {
        constructor() {
            super(...arguments),
            this.barrackList = [],
            this.soldierList = [],
            this.attackList = [],
            this.soldierPanel = [],
            this.points = [],
            this.soldierPointList = []
        }
        get isMaxLevel() {
            return this.level >= this.maxLevel
        }
        get isSoldMax() {
            return this.soldierList.length >= this.soldierPointList.length
        }
        onAwake() {
            super.onAwake(),
            this.campsiteType = l.DispatchPoint,
            this.proIcon = this.mPrefab.getChildByName("shengji_1");
            for (let t = 0; t < this.mPrefab.numChildren; t++) this.mPrefab.getChildAt(t).name.indexOf("zhandian") >= 0 && (this.soldierPanel.push(this.mPrefab.getChildAt(t)), this.soldierPanel[this.soldierPanel.length - 1].active = !1);
            this.panelSize = p.GetBoundBoxSize(this.soldierPanel[0].getChildAt(0).getChildAt(0)),
            this.isUnlock = !0,
            this.lastNum = 0,
            this.maxLevel = 3,
            this.level = 1,
            this.soldierPanel[this.level - 1].active = !0
        }
        SetCamp(t) {
            super.SetCamp(t),
            this.barrackList.length > 0 && this.barrackList.forEach(t =>{
                t.SetCamp(this.camp),
                t.capmIndex = this.capmIndex
            })
        }
        UpdateObj() {
            if (super.UpdateObj(), this.barrackList.length > 0 && this.barrackList.forEach(t =>{
                t.UpdateObj()
            }), this.soldierList.length > 0) for (let t = this.soldierList.length - 1; t >= 0; t--) this.soldierList[t].UpdateObj();
            if (this.attackList.length > 0) for (let t = this.attackList.length - 1; t >= 0; t--) this.attackList[t].UpdateObj();
            return this.attackList.length > 0
        }
        ChangeProValue() {}
        CollisionRole() {}
        LevelAdd(t = !0) {
            this.soldierPanel[this.level - 1].active = !1,
            this.level += 1,
            this.level = this.level > this.maxLevel ? this.maxLevel: this.level,
            this.soldierPanel[this.level - 1].active = !0,
            this.AddPoint()
        }
        Remove() {
            for (this.barrackList.splice(0, this.barrackList.length); ! (this.soldierList.length <= 0);) {
                this.soldierList.pop().Remove()
            }
            for (; ! (this.attackList.length <= 0);) {
                this.attackList.pop().Remove()
            }
            super.Remove()
        }
        EnemeyDie(t) {}
        DestroyJudgment() {}
        resetPoint() {}
        LevelReset() {
            super.LevelReset()
        }
        changeMat() {}
    }
    class Ue extends ke {
        constructor() {
            super(...arguments),
            this.barrackValueSpeedList = [],
            this.barrackModelList = [],
            this.minValue = .49,
            this.maxValue = 0
        }
        onAwake() {
            this.campsiteType = l.Barracks,
            this.barrackValueSpeedList = [.005, .008, .01],
            this.leveNumList.push(_.architectureData.bingying_up1),
            this.leveNumList.push(_.architectureData.bingying_up2),
            this.unlockNum = _.architectureData.bingying_unlock,
            this.levelNum = this.leveNumList[this.level - 1],
            this.barrackValueSpeed = V.barrackValueSpeedList[this.level - 1],
            super.onAwake(),
            this.level = 1,
            this.maxLevel = 3,
            this.unlockPoint = this.mPrefab.getChildByName("barracksPoint")
        }
        UpdateObj() {
            super.UpdateObj(),
            this.isUnlock && this.ChangeBarrckValue(this.barrackValueSpeed)
        }
        Unlock() {
            if (super.Unlock(), 1 == q.Instance.hintIndex && q.Instance.AddHintShow(), this.levelNum = this.leveNumList[this.level - 1], this.showYanWu(), null == this.unlockArchitecture && (this.unlockArchitecture = Laya.Sprite3D.instantiate(j.LoaderPrefabs[_.resourcesDataCfg.fooCamp], this.unlockPoint, !1), this.unlockArchitecture.transform.localPosition = new Laya.Vector3(0, 0, 0), this.unlockArchitecture.transform.localRotationEuler = new Laya.Vector3(0, 0, 0)), this.unlockArchitecture.active = !0, this.barrackModelList.length <= 0) for (let t = 0; t < this.unlockArchitecture.getChildAt(0).getChildAt(0).numChildren; t++) this.unlockArchitecture.getChildAt(0).getChildAt(0).getChildAt(t).name.indexOf("mod_ljxf_bingying_penhuobing") >= 0 && this.barrackModelList.push(this.unlockArchitecture.getChildAt(0).getChildAt(0).getChildAt(t));
            this.barrackModelList.forEach(t =>{
                t.active = !1
            }),
            this.barrackModelList[0].active = !0;
            let t = this.unlockArchitecture.getChildAt(0).getChildAt(0).getChildByName("mod_ljxf_penhuobing_jindutiao"),
            e = t.meshRenderer.material.clone();
            t.meshRenderer.material = e,
            this.barrackProMat = e;
            let i = this.unlockArchitecture.getChildAt(0).getChildAt(0).getChildByName("mod_ljxf_penhuobing_number"),
            a = i.meshRenderer.material.clone();
            if (i.meshRenderer.material = a, this.barrackNumerMat = a, this.inPoint = this.unlockArchitecture.getChildByName("soldierPoint"), this.levelPro = this.unlockArchitecture.getChildByName("jindutiao"), this.proMat = this.levelPro.getChildAt(0).meshRenderer.material.clone(), this.levelPro.getChildAt(0).meshRenderer.material = this.proMat, this.box = null, this.box = new Vt(this.levelPro.getChildByName("box")), this.levelNumber = this.unlockArchitecture.getChildByName("number"), this.levelNumberMatList.length <= 0) for (let t = 0; t < this.levelNumber.getChildAt(0).numChildren; t++) {
                let e = this.levelNumber.getChildAt(0).getChildAt(t),
                i = e.meshRenderer.material.clone();
                e.meshRenderer.material = i,
                this.levelNumberMatList.push(i)
            }
            this.levelMingpai = this.unlockArchitecture.getChildByName("mingpai"),
            this.proSilverScale = this.levelMingpai.getChildAt(0).transform.localScale.clone(),
            this.lastBarrackProValue = 0,
            this.ChangeProValue(),
            this.levelNumber.active = !0,
            this.levelMingpai.active = !0,
            this.levelPro.active = !0
        }
        setMat(t) {
            this.capmIndex = t;
            let e = null;
            0 == t ? e = q.Instance.mainScene.GetMap.campMat_Flam.mat_0: 1 == t && (e = q.Instance.mainScene.GetMap.campMat_Flam.mat_1);
            for (let t = 0; t < this.barrackModelList.length; t++) this.barrackModelList[t].meshRenderer.material = e
        }
        LevelAdd() {
            super.LevelAdd(),
            5 == q.Instance.hintIndex && q.Instance.AddHintShow(),
            this.showYanWu(),
            this.LevelChange()
        }
        LevelReset() {
            super.LevelReset(),
            null != this.unlockArchitecture ? (this.unlockArchitecture.active = !1, this.LevelChange()) : this.box.update()
        }
        LevelChange() {
            this.barrackModelList.length > 0 && (this.barrackModelList[this.level - 1].active = !0, this.barrackNumerMat.tilingOffsetW = -.1 * this.level, this.setMat(this.capmIndex)),
            this.barrackValueSpeed = V.barrackValueSpeedList[this.level - 1]
        }
        ChangeBarrckValue(t) {
            this.waitSend >= 0 ? this.waitSend -= Laya.timer.delta: (this.lastBarrackProValue += t, this.lastBarrackProValue > 1 ? this.lastBarrackProValue = 1 : this.lastBarrackProValue < 0 && (this.lastBarrackProValue = 0), this.barrackProMat.tilingOffsetZ = this.minValue + this.lastBarrackProValue * (this.maxValue - this.minValue), this.lastBarrackProValue >= 1 && this.SendSoldier())
        }
    }
    class je extends le {
        constructor() {
            super(...arguments),
            this.localTarget = null,
            this.attackNum = 0,
            this.localAtkTarget = null,
            this.localV3 = new Laya.Vector3,
            this.localActive = !1,
            this.localspeed = 1,
            this.canFollow = !1,
            this.needFight = !1,
            this.needFightInReady = !1
        }
        Reset() {
            super.Reset(),
            this.localTarget = null,
            this.isJoinFollow = !1,
            Laya.stage.on(u.SoldierWarn, this, this.setWarn)
        }
        Remove() {
            super.Remove(),
            Laya.stage.off(u.SoldierWarn, this, this.setWarn)
        }
        setWarn(t) {
            this.isActiva && 0 == this.capmIndex && null == this.localTarget && 0 == this.needFight && (this.localTarget = t)
        }
        setSelfMat_elite() {
            this.maxHp = this.maxHp * _.elitesoldiersData.special_HP,
            this.attack = this.attack * _.elitesoldiersData.special_atk,
            this.attackRange = this.attackRange * _.elitesoldiersData.special_range,
            0 == this.capmIndex ? this.selfMat = q.Instance.mainScene.GetMap.flamMat.player: 1 == this.capmIndex ? this.selfMat = q.Instance.mainScene.GetMap.flamMat.enemy: this.selfMat = q.Instance.mainScene.GetMap.flamMat.enemy2
        }
        setSelfMat() {
            switch (this.camp) {
            case a.Enermy:
                this.selfMat = q.Instance.mainScene.GetMap.flamMat.enemy2,
                this.maxHp = q.Instance.lastLevelData.AI2_HP,
                this.attack = q.Instance.lastLevelData.AI2_atk,
                this.speed = q.Instance.lastLevelData.AI_speed,
                this.attackRange = q.Instance.lastLevelData.AI2_atk_range;
                break;
            case a.Player:
                0 == this.capmIndex ? this.selfMat = q.Instance.mainScene.GetMap.flamMat.player: 1 == this.capmIndex && (this.selfMat = q.Instance.mainScene.GetMap.flamMat.enemy),
                this.maxHp = q.Instance.lastLevelData.AI1_HP,
                this.attack = q.Instance.lastLevelData.AI1_atk,
                this.speed = q.Instance.lastLevelData.AI_speed,
                this.attackRange = q.Instance.lastLevelData.AI1_atk_range,
                this.flamingTroopsCtl && (this.gunLevel = this.flamingTroopsCtl.headquarters.getWeaponLevel, this.armourLevel = this.flamingTroopsCtl.headquarters.getArmourLevel)
            }
            this.localTarget = null
        }
        UpdateObj() {
            if (super.UpdateObj(), !this.IsDie) {
                if (0 == this.isArriveGather && 0 == this.isMoveTarget && 0 == this.isActiva) {
                    if (this.IsTargetNull() || !Xt.IsDistances(this.GetPosition, this.attackTarget.GetPosition, 10)) return this.attackTarget = null,
                    void(this.attackTarget = this.SearchAttackRole());
                    this.dispatchPoint && Xt.IsDistances(this.GetPosition, this.dispatchPoint, 6) ? (this.mPrefab.transform.lookAt(new Laya.Vector3(this.attackTarget.GetPosition.x, this.GetPosition.y, this.attackTarget.GetPosition.z), new Laya.Vector3(0, 1, 0)), this.SelectAttackTarget(a.Enermy)) : this.isMoveTarget = !0
                }
                if (!this.IsDie && 1 == this.isActiva && 1 == this.isJoinFollow) {
                    let t = new Laya.Vector3(this.theirRole.getFollowArrayPosX(this.followPos), this.GetPosition.y, this.theirRole.getFollowArrayPoZ(this.followPos)),
                    i = q.Instance.mainScene.GetMap.obsLineArray;
                    if (!Xt.IsDistances(this.GetPosition, t, 1)) return this.isJoinFollow = !1,
                    this.isMoveTarget = !0,
                    this.isStartAtk = !1,
                    void(this.action && !this.IsDie && this.action.ChangeAction(e.Move));
                    if (i.length > 0) {
                        if (!y.pointInPolygon(t, i)) return void(this.action && !this.IsDie && this.action.ChangeAction(e.Standby));
                        this.SetPosition = t
                    }
                    if (this.canBattle(), this.attackTarget) {
                        if (this.mPrefab.transform.lookAt(new Laya.Vector3(this.attackTarget.GetPosition.x, this.GetPosition.y, this.attackTarget.GetPosition.z), new Laya.Vector3(0, 1, 0)), this.localAtkTarget = this.attackTarget, this.attackTarget.capmIndex == this.capmIndex) return void this.attackTarget;
                        Xt.IsDistances(this.GetPosition, this.attackTarget.GetPosition, this.perceptionRange) && this.atkMethod()
                    } else {
                        let t = this.searchBuid();
                        if (null != t) {
                            if (this.mPrefab.transform.lookAt(new Laya.Vector3(t.GetPosition.x, this.GetPosition.y, t.GetPosition.z), new Laya.Vector3(0, 1, 0)), this.attackTarget = t, this.localAtkTarget = t, this.attackTarget.capmIndex == this.capmIndex) return void this.attackTarget;
                            Xt.IsDistances(this.GetPosition, this.attackTarget.GetPosition, this.perceptionRange) && this.atkMethod()
                        } else this.SetRotation = this.theirRole.GetRotation,
                        this.isStartAtk = !1,
                        this.action && !this.IsDie && (this.theirRole && this.theirRole.action && 1 == this.theirRole.action.state ? this.action.ChangeAction(e.Move) : (this.theirRole && this.theirRole.action && this.theirRole.action.state, this.action.ChangeAction(e.Standby)))
                    }
                }
            }
        }
        atkMethod() {
            if (this.action && !this.IsDie) {
                let t = this.ani.getCurrentAnimatorPlayState(0).animatorState.name == this.attackAni;
                0 != this.isStartAtk || t ? p.isAniEnd(this.ani, this.attackAni) : (this.attackNum = 0, this.theirRole && this.theirRole.action && this.theirRole.action.state == e.Move ? this.action.ChangeAction(e.Moveattack) : this.action.ChangeAction(e.Attack), this.isStartAtk = !0)
            }
        }
        IsTargetNull() {
            return ! (this.attackTarget && this.attackTarget.owner && !this.attackTarget.IsDie) && (this.attackTarget = null, !0)
        }
        ChangePos(t) {
            if (this.isActiva && 0 != this.isJoinFollow || super.ChangePos(t), this.canFollow = !1, this.camp == a.Player) if (this.isActiva) {
                let t = new Laya.Vector3(this.theirRole.getFollowArrayPosX(this.followPos), this.GetPosition.y, this.theirRole.getFollowArrayPoZ(this.followPos));
                if (1 == this.isJoinFollow);
                else if (Xt.IsDistances(this.GetPosition, t, .5)) this.isJoinFollow = !0;
                else {
                    this.mPrefab.transform.lookAt(t, new Laya.Vector3(0, 1, 0));
                    let i = Laya.Vector3.distance(this.GetPosition, t);
                    this.localspeed = 1 + .2 * i,
                    this.localspeed = this.localspeed > 3 ? 3 : this.localspeed,
                    this.action && !this.IsDie && this.action.ChangeAction(e.Move)
                }
            } else this.localspeed = 1;
            let i = q.Instance.mainScene.GetMap.obsLineArray;
            if (i.length > 0) {
                let e = {
                    x: this.GetPosition.x + t.x,
                    y: this.GetPosition.z + t.z
                };
                y.pointInPolygon(e, i) ? this.localV3 = this.GetPosition: this.SetPosition = this.localV3
            }
        }
        TouchMove() {
            this.IsDie || (super.TouchMove(), this.theirRole && 1 == this.isActiva && 0 == this.isStartAtk && this.action && !this.IsDie && this.action.ChangeAction(e.Move), this.theirRole && 1 == this.isActiva && 0 == this.needFight && (this.IsTargetNull() && (this.attackTarget = this.SearchAttackRole()), this.canFollow = !0, this.localActive = !0))
        }
        TouchUp() {
            this.IsDie || (this.theirRole && 1 == this.isActiva && (this.action.state != e.Attack && this.action.state != e.Moveattack ? this.action && !this.IsDie && this.action.ChangeAction(e.Standby) : Laya.timer.frameOnce(10, this, () =>{
                this.action.state == e.Moveattack && this.action && !this.IsDie && p.changeAni(this.ani, this.attackAni)
            })), 0 == this.isJoinFollow && 0 == this.isActiva && 1 == this.isArriveGather && Laya.timer.frameOnce(11, this, () =>{
                this.isActiva = !0,
                this.isArriveGather = !1
            }))
        }
        TouchDown() {
            1 == this.isActiva && (this.isStartAtk = !1)
        }
        GetSpeed() {
            let t = this.speed;
            return 0 == this.capmIndex ? t = q.Instance.mainScene.GetMap.playerCtl.GetSpeed() : this.capmIndex > 0 && (t = q.Instance.mainScene.GetMap.roleList[this.capmIndex - 1].GetSpeed()),
            t * this.localspeed
        }
        SelectAttackTarget(t = null) {
            switch (t || this.camp) {
            case a.Enermy:
                super.SelectAttackTarget();
                break;
            case a.Player:
                if (this.attackTarget = this.SearchAttackRole(), this.attackTarget) {
                    let t = this.IsTargetAttackRange();
                    switch (this.roleCamp) {
                    case n.FightingUnit:
                        t || 1 != this.needFight || (this.theirRole && this.theirRole.action && 1 == this.theirRole.action.state ? this.action && !this.IsDie && this.action.ChangeAction(e.Move) : this.theirRole && this.theirRole.action && 0 == this.theirRole.action.state ? this.action && !this.IsDie && this.action.ChangeAction(e.Standby) : this.action.ChangeAction(e.Standby))
                    }
                }
            }
        }
        IsTargetAttackRange() {
            return !! Xt.IsDistances(this.attackTarget.GetPosition, this.GetPosition, this.attackRange) && (this.isAttack && (this.action && !this.IsDie && (1 == this.isJoinFollow && this.theirRole && this.theirRole.action && this.theirRole.action.state == e.Move ? this.action.ChangeAction(e.Moveattack) : this.action.ChangeAction(e.Attack)), 0 == this.capmIndex && Laya.stage.event(u.SoldierWarn, [this.attackTarget])), !0)
        }
        Activate() {
            switch (this.isJoinFollow = !1, this.camp) {
            case a.Enermy:
                this.isActiva = !0;
                break;
            case a.Player:
                this.isArriveGather = !0,
                this.isMoveTarget = !1,
                this.needFight = !1,
                this.canFollow = !1,
                this.enemyGather = new Laya.Vector3(this.theirRole.GetPosition.x, this.GetPosition.y, this.theirRole.GetPosition.z),
                this.action && !this.IsDie && this.action.ChangeAction(e.Move)
            }
        }
        SetRole(t) {
            this.theirRole = t,
            this.followPos = this.theirRole.setFollowArrayPos(),
            this.setCampindex()
        }
        setCampindex(t) {
            null != t ? this.capmIndex = t: null != this.theirRole ? this.capmIndex = this.theirRole.capmIndex: this.capmIndex = -1
        }
        setCampHeroByIndex() {
            0 == this.capmIndex ? (tt.Instance.SoldierList_Mine.push(this), this.theirRole = q.Instance.mainScene.GetMap.roleList[0], this.followPos = this.theirRole.setFollowArrayPos()) : 1 == this.capmIndex && (tt.Instance.SoldierList_Ai.push(this), this.theirRole = q.Instance.mainScene.GetMap.roleList[1], this.followPos = this.theirRole.setFollowArrayPos())
        }
        canBattle() { ! this.IsTargetNull() && Xt.IsDistances(this.GetPosition, this.attackTarget.GetPosition, 6) ? this.needFight = !0 : (this.attackTarget = null, this.needFight = !1)
        }
        canBattle_New() {}
        ChangeMoveForWorld() {
            switch (this.roleCamp) {
            case n.FightingUnit:
                if (this.isMoveTarget) this.mPrefab.transform.lookAt(new Laya.Vector3(this.dispatchPoint.x, this.GetPosition.y, this.dispatchPoint.z), new Laya.Vector3(0, 1, 0));
                else if (this.isArriveGather) this.mPrefab.transform.lookAt(new Laya.Vector3(this.theirRole.getFollowArrayPosX(this.followPos), this.GetPosition.y, this.theirRole.getFollowArrayPoZ(this.followPos)), new Laya.Vector3(0, 1, 0)),
                Xt.IsDistances(this.GetPosition, new Laya.Vector3(this.theirRole.getFollowArrayPosX(this.followPos), this.GetPosition.y, this.theirRole.getFollowArrayPoZ(this.followPos)), .5) && (this.isJoinFollow = !0, this.isArriveGather = !1, this.isActiva = !0);
                else if (this.isActiva) switch (this.needFightInReady = !1, this.camp) {
                case a.Player:
                    this.canFollow = !0;
                    break;
                case a.Enermy:
                    this.IsTargetNull() || this.isJoinFollow || this.mPrefab.transform.lookAt(new Laya.Vector3(this.attackTarget.GetPosition.x, this.GetPosition.y, this.attackTarget.GetPosition.z), new Laya.Vector3(0, 1, 0))
                }
                break;
            case n.Player:
                super.ChangeMoveForWorld()
            }
        }
        SearchAttackRole() {
            if (this.IsTargetNull() || this.roleCamp == n.Player) {
                let t = [];
                switch (this.camp) {
                case a.Enermy:
                    for (let e = q.Instance.mainScene.GetMap.roleList.length - 1; e >= 0; e--) q.Instance.mainScene.GetMap.roleList[e].IsChoosable(this) && Xt.IsDistances(this.GetPosition, q.Instance.mainScene.GetMap.roleList[e].GetPosition, this.perceptionRange) && t.push(q.Instance.mainScene.GetMap.roleList[e]);
                    for (let e = 0; e < tt.Instance.SoldierList_Mine.length; e++) tt.Instance.SoldierList_Mine[e].IsChoosable(this) && Xt.IsDistances(this.GetPosition, tt.Instance.SoldierList_Mine[e].GetPosition, this.perceptionRange) && t.push(tt.Instance.SoldierList_Mine[e]);
                    for (let e = 0; e < tt.Instance.SoldierList_Ai.length; e++) tt.Instance.SoldierList_Ai[e].IsChoosable(this) && Xt.IsDistances(this.GetPosition, tt.Instance.SoldierList_Ai[e].GetPosition, this.perceptionRange) && t.push(tt.Instance.SoldierList_Ai[e]);
                    break;
                case a.Player:
                    for (let e = q.Instance.mainScene.GetMap.enemyGatheringList.length - 1; e >= 0; e--) if (q.Instance.mainScene.GetMap.enemyGatheringList[e].enemyList.length > 0) for (let i = q.Instance.mainScene.GetMap.enemyGatheringList[e].enemyList.length - 1; i >= 0; i--) q.Instance.mainScene.GetMap.enemyGatheringList[e].enemyList[i].IsChoosable(this) && t.push(q.Instance.mainScene.GetMap.enemyGatheringList[e].enemyList[i]);
                    for (let e = 0; e < q.Instance.mainScene.GetMap.roleList.length; e++) q.Instance.mainScene.GetMap.roleList[e].IsChoosable(this) && t.push(q.Instance.mainScene.GetMap.roleList[e]);
                    for (let e = 0; e < tt.Instance.SoldierList_Mine.length; e++) tt.Instance.SoldierList_Mine[e].IsChoosable(this) && t.push(tt.Instance.SoldierList_Mine[e]);
                    for (let e = 0; e < tt.Instance.SoldierList_Ai.length; e++) tt.Instance.SoldierList_Ai[e].IsChoosable(this) && t.push(tt.Instance.SoldierList_Ai[e])
                }
                return t.length > 1 && t.sort((t, e) =>{
                    return Laya.Vector3.distanceSquared(this.GetPosition, t.GetPosition) < Laya.Vector3.distanceSquared(this.GetPosition, e.GetPosition) ? -1 : 1
                }),
                t[0]
            }
            return this.attackTarget
        }
        searchBuid() {
            if (this.IsTargetNull() || this.roleCamp == n.Player) {
                let t = [];
                for (let e = 0; e < tt.Instance.BuildLIst_Mine.length; e++) tt.Instance.BuildLIst_Mine[e].IsChoosable(this) && this.capmIndex != tt.Instance.BuildLIst_Mine[e].capmIndex && Xt.IsDistances(this.GetPosition, tt.Instance.BuildLIst_Mine[e].GetPosition, this.perceptionRange) && t.push(tt.Instance.BuildLIst_Mine[e]);
                for (let e = 0; e < tt.Instance.BuildList_Eny.length; e++) tt.Instance.BuildList_Eny[e].IsChoosable(this) && this.capmIndex != tt.Instance.BuildList_Eny[e].capmIndex && Xt.IsDistances(this.GetPosition, tt.Instance.BuildList_Eny[e].GetPosition, this.perceptionRange) && t.push(tt.Instance.BuildList_Eny[e]);
                return t.length > 1 && t.sort((t, e) =>{
                    return Laya.Vector3.distanceSquared(this.GetPosition, t.GetPosition) < Laya.Vector3.distanceSquared(this.GetPosition, e.GetPosition) ? -1 : 1
                }),
                t[0]
            }
            return null
        }
        IsChoosable(t) {
            return this != t && !this.IsDie && (t.battleCamp == o.Medic || this.capmIndex != t.capmIndex)
        }
        ChangeHp(t, e) {
            super.ChangeHp(t, e)
        }
        Die() {
            super.Die(),
            this.DieMethod()
        }
        DieMethod() {
            this.action = null,
            super.Die(),
            tt.Instance.arrayChange(this.capmIndex, this),
            this.theirRole && this.theirRole.ReSetArrayPos(),
            null != this.flamingTroopsCtl && (q.Instance.lastSoliderNum -= 1, Laya.stage.event(u.UPDATE_PLAYER)),
            Laya.Tween.to(this.model.transform, {
                localPositionY: -1.5
            },
            0, Laya.Ease.linearNone, Laya.Handler.create(this, () =>{
                null != this.gathering ? (console.log("---------关闭gather"), this.gathering.EnemeyDie(this)) : null != this.flamingTroopsCtl && this.flamingTroopsCtl.EnemeyDie(this),
                this.Remove()
            }))
        }
        SearchEnemy() {
            if (null == this.flameEffectBox || null == this.flameEffectBox) return [];
            let t = super.SearchEnemy();
            if (this.camp == a.Player) {
                for (let e = q.Instance.mainScene.GetMap.roleList.length - 1; e >= 0; e--) q.Instance.mainScene.GetMap.roleList[e].IsChoosable(this) && zt.IntersectOBB(this.flameEffectBox, q.Instance.mainScene.GetMap.roleList[e].box) && t.push(q.Instance.mainScene.GetMap.roleList[e]);
                for (let e = 0; e < q.Instance.mainScene.GetMap.headquartersList.length; e++) {
                    for (let i = 0; i < q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList.length; i++) {
                        if (q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList[i].attackList.length > 0) for (let a = q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList[i].attackList.length - 1; a >= 0; a--) q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList[i].attackList[a].IsChoosable(this) && zt.IntersectOBB(this.flameEffectBox, q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList[i].attackList[a].box) && t.push(q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList[i].attackList[a]);
                        if (q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList[i].soldierList.length > 0) for (let a = q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList[i].soldierList.length - 1; a >= 0; a--) q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList[i].soldierList[a].IsChoosable(this) && zt.IntersectOBB(this.flameEffectBox, q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList[i].soldierList[a].box) && t.push(q.Instance.mainScene.GetMap.headquartersList[e].dispatchTroopsCtlList[i].soldierList[a])
                    }
                    for (let i = 0; i < q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList.length; i++) {
                        if (q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList[i].attackList.length > 0) for (let a = q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList[i].attackList.length - 1; a >= 0; a--) q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList[i].attackList[a].IsChoosable(this) && zt.IntersectOBB(this.flameEffectBox, q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList[i].attackList[a].box) && t.push(q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList[i].attackList[a]);
                        if (q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList[i].soldierList.length > 0) for (let a = q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList[i].soldierList.length - 1; a >= 0; a--) q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList[i].soldierList[a].IsChoosable(this) && zt.IntersectOBB(this.flameEffectBox, q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList[i].soldierList[a].box) && t.push(q.Instance.mainScene.GetMap.headquartersList[e].flamingTroopsCtlList[i].soldierList[a])
                    }
                    for (let i = 0; i < q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList.length; i++) {
                        if (q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList[i].attackList.length > 0) for (let a = q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList[i].attackList.length - 1; a >= 0; a--) q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList[i].attackList[a].IsChoosable(this) && zt.IntersectOBB(this.flameEffectBox, q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList[i].attackList[a].box) && t.push(q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList[i].attackList[a]);
                        if (q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList[i].tankList.length > 0) for (let a = q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList[i].tankList.length - 1; a >= 0; a--) q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList[i].tankList[a].IsChoosable(this) && zt.IntersectOBB(this.flameEffectBox, q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList[i].tankList[a].box) && t.push(q.Instance.mainScene.GetMap.headquartersList[e].tankBattalionList[i].tankList[a])
                    }
                }
            }
            return t
        }
        getHero() {}
    }
    class qe extends Ue {
        Unlock() {
            super.Unlock(),
            1 == q.Instance.hintIndex && q.Instance.AddHintShow(),
            this.levelNum = this.leveNumList[this.level - 1],
            this.showYanWu(),
            null == this.unlockArchitecture && (this.unlockArchitecture = Laya.Sprite3D.instantiate(j.LoaderPrefabs[_.resourcesDataCfg.fooCamp], this.unlockPoint, !1), this.unlockArchitecture.transform.localPosition = new Laya.Vector3(0, 0, 0), this.unlockArchitecture.transform.localRotationEuler = new Laya.Vector3(0, 0, 0)),
            this.unlockArchitecture.active = !0;
            let t = this.owner.getComponent(Oe);
            if (null == t && ((t = this.owner.addComponent(Oe)).capmIndex = this.capmIndex, t.Barra = this), this.capmIndex >= 0 && (0 == this.capmIndex ? tt.Instance.BuildLIst_Mine.push(t) : tt.Instance.BuildList_Eny.push(t)), t.Reset(), this.barrackModelList.length <= 0) for (let t = 0; t < this.unlockArchitecture.getChildAt(0).getChildAt(0).numChildren; t++) this.unlockArchitecture.getChildAt(0).getChildAt(0).getChildAt(t).name.indexOf("mod_ljxf_bingying_penhuobing") >= 0 && this.barrackModelList.push(this.unlockArchitecture.getChildAt(0).getChildAt(0).getChildAt(t));
            this.barrackModelList.forEach(t =>{
                t.active = !1
            }),
            this.barrackModelList[0].active = !0;
            let e = this.unlockArchitecture.getChildAt(0).getChildAt(0).getChildByName("mod_ljxf_penhuobing_jindutiao"),
            i = e.meshRenderer.material.clone();
            e.meshRenderer.material = i,
            this.barrackProMat = i;
            let a = this.unlockArchitecture.getChildAt(0).getChildAt(0).getChildByName("mod_ljxf_penhuobing_number"),
            s = a.meshRenderer.material.clone();
            if (a.meshRenderer.material = s, this.barrackNumerMat = s, this.inPoint = this.unlockArchitecture.getChildByName("soldierPoint"), this.levelPro = this.unlockArchitecture.getChildByName("jindutiao"), this.proMat = this.levelPro.getChildAt(0).meshRenderer.material.clone(), this.levelPro.getChildAt(0).meshRenderer.material = this.proMat, this.box = null, this.box = new Vt(this.levelPro.getChildByName("box")), this.levelNumber = this.unlockArchitecture.getChildByName("number"), this.levelNumberMatList.length <= 0) for (let t = 0; t < this.levelNumber.getChildAt(0).numChildren; t++) {
                let e = this.levelNumber.getChildAt(0).getChildAt(t),
                i = e.meshRenderer.material.clone();
                e.meshRenderer.material = i,
                this.levelNumberMatList.push(i)
            }
            this.levelMingpai = this.unlockArchitecture.getChildByName("mingpai"),
            this.proSilverScale = this.levelMingpai.getChildAt(0).transform.localScale.clone(),
            this.lastBarrackProValue = 0,
            this.ChangeProValue(),
            this.levelNumber.active = !0,
            this.levelMingpai.active = !0,
            this.levelPro.active = !0
        }
        LevelReset() {
            super.LevelReset(),
            this.box = new Vt(this.unlockPro.getChildByName("box")),
            null != this.unlockArchitecture && (this.unlockArchitecture.active = !1, this.LevelChange())
        }
        SendSoldier() {
            if (this.ChangeBarrckValue( - this.lastBarrackProValue), this.flamingTroopsCtl.isSoldMax || q.Instance.GetIsMaxSolider) return;
            q.Instance.lastSoliderNum += 1,
            Laya.stage.event(u.UPDATE_PLAYER);
            let t = $t.GetPoolPrefab(_.resourcesDataCfg.flamingsoldier, j.LoaderPrefabs[_.resourcesDataCfg.flamingsoldier], q.Instance.mainScene.GetScene);
            t.active = !0;
            let e = t.getComponent(je);
            e || (e = t.addComponent(je)),
            e.Reset(),
            e.gathering = null,
            e.flamingTroopsCtl = this.flamingTroopsCtl,
            e.SetRole(this.flamingTroopsCtl.headquarters.theirRole),
            e.SetCamp(this.camp),
            e.roleCamp = n.FightingUnit,
            e.battleCamp = o.Pyro;
            let i = this.flamingTroopsCtl.soldierPointList[this.flamingTroopsCtl.soldierList.length];
            t.transform.position = this.inPoint.transform.position,
            t.transform.setWorldLossyScale(new Laya.Vector3(1, 1, 1)),
            t.transform.rotationEuler = new Laya.Vector3(0, 180, 0),
            e.moveDisPatchPoint(i),
            this.flamingTroopsCtl.soldierList.push(e),
            this.capmIndex >= 0 && (0 == this.capmIndex ? tt.Instance.SoldierList_Mine.push(e) : tt.Instance.SoldierList_Ai.push(e))
        }
    }
    class Fe extends He {
        constructor() {
            super(...arguments),
            this.pointsSprite3d = [],
            this.capmIndex = 0
        }
        SetHead(t, e) {
            this.headquarters = t,
            this.points = [],
            this.pointsSprite3d = [];
            for (let t = 0; t < e.point.length; t++) {
                let i = [],
                a = [];
                for (let s = 0; s < e.point[t].length; s++) {
                    let n = new Laya.Sprite3D;
                    this.mPrefab.addChild(n),
                    n.transform.localPosition = e.point[t][s].clone(),
                    a.push(n),
                    i.push(e.point[t][s].clone())
                }
                this.pointsSprite3d.push(a),
                this.points.push(i)
            }
            this.AddPoint();
            for (let i = 0; i < e.barracksList.length; i++) {
                let a = Laya.Sprite3D.instantiate(j.LoaderPrefabs[e.barracksList[i].name], this.mPrefab, !1);
                a.active = !0,
                a.transform.localPosition = e.barracksList[i].pos.clone(),
                a.transform.localRotation = e.barracksList[i].rot.clone(),
                a.transform.localScale = e.barracksList[i].scale.clone();
                let s = a.addComponent(qe);
                s.flamingTroopsCtl = this,
                s.headquarters = t,
                this.barrackList.push(s)
            }
            for (let t = 0; t < this.barrackList.length; t++) this.barrackList[t].setMat(this.capmIndex);
            this.changeMat(),
            this.soldierList = []
        }
        DispatchTroops(t) {
            if (this.soldierList.forEach(e =>{
                let i = Laya.Vector3.distance(this.soldierPanel[0].transform.position, t),
                a = new Laya.Vector3(t.x - this.soldierPanel[0].transform.position.x, e.GetPosition.y, t.z - this.soldierPanel[0].transform.position.z);
                Laya.Vector3.normalize(a, a),
                e.enemyGather = new Laya.Vector3(e.GetPosition.x + a.x * i, e.GetPosition.y, e.GetPosition.z + a.z * i),
                e.Activate()
            }), this.soldierPointList.length > 0) for (let t = this.soldierList.length - 1; t >= 0; t--) {
                let e = this.soldierList.splice(t, 1)[0];
                this.attackList.push(e)
            }
        }
        changeMat() {
            let t = null;
            0 == this.capmIndex ? t = q.Instance.mainScene.GetMap.roleMat.player: 1 == this.capmIndex && (t = q.Instance.mainScene.GetMap.roleMat.enemy2)
        }
        LevelReset() {
            super.LevelReset(),
            this.isUnlock = !0,
            this.level = 1;
            for (let t = 0; t < this.soldierPanel.length; t++) this.soldierPanel[t].active = t == this.level - 1;
            for (let t = 0; t < this.barrackList.length; t++) this.barrackList[t].LevelReset(),
            this.barrackList[t].setMat(this.capmIndex);
            if (this.pointsSprite3d) for (let t = 0; t < this.pointsSprite3d.length; t++) for (let e = 0; e < this.pointsSprite3d[t].length; e++) this.pointsSprite3d[t][e].destroy();
            this.resetPoint()
        }
        resetPoint() {
            this.pointsSprite3d = [],
            this.soldierPointList = [];
            for (let t = 0; t < this.points.length; t++) {
                let e = [];
                for (let i = 0; i < this.points[t].length; i++) {
                    let a = new Laya.Sprite3D;
                    this.mPrefab.addChild(a),
                    a.transform.localPosition = this.points[t][i].clone(),
                    e.push(a)
                }
                this.pointsSprite3d.push(e)
            }
            this.AddPoint()
        }
        AddPoint() {
            if (this.pointsSprite3d[this.level - 1]) for (let t = 0; t < this.pointsSprite3d[this.level - 1].length; t++) this.soldierPointList.push(this.pointsSprite3d[this.level - 1][t].transform.position.clone())
        }
        LevelAdd(t = !0) {
            0 == t && this.level >= this.headquarters.theirRole.level || (this.soldierPanel[this.level - 1].active = !1, this.level += 1, this.level = this.level > this.maxLevel ? this.maxLevel: this.level, this.soldierPanel[this.level - 1].active = !0, this.AddPoint())
        }
        reSetTargetPos() {
            for (let t = 0; t < this.soldierList.length; t++) {
                let e = this.soldierList[t],
                i = this.soldierPointList[t];
                e.isActiva || e.moveDisPatchPoint(i)
            }
        }
        DestroyJudgment() {
            this.soldierList.length <= 0 && (console.log("------------------数组index", this.localCampTarget), this.changeMat(), Laya.stage.event(u.HeadDes)),
            q.Instance.mainScene.GetMap.battCountWinDeter()
        }
        EnemeyDie(t) {
            t.indexTarget >= 0 && (this.localCampTarget = t.indexTarget),
            p.RemoveArrayKey(this.soldierList, t),
            this.reSetTargetPos(),
            this.DestroyJudgment()
        }
    }
    class Je extends ke {
        constructor() {
            super(...arguments),
            this.tankList = [],
            this.attackList = [],
            this.tankPanel = [],
            this.tankPointList = [],
            this.points = []
        }
        get isSoldMax() {
            return this.tankList.length >= this.tankPointList.length
        }
        SetHead(t, e) {
            this.headquarters = t,
            this.tankBarracksPoint = e.barracksPoint.pos.clone(),
            this.points = [];
            for (let t = 0; t < e.point.length; t++) {
                let i = new Laya.Sprite3D;
                this.mPrefab.addChild(i),
                i.transform.localPosition = e.point[t].clone(),
                this.points.push(i.transform.position.clone()),
                i.destroy()
            }
        }
        onAwake() {
            this.campsiteType = l.TankBattalion,
            this.unlockNum = _.architectureData.tank_unlock,
            this.barrackValueSpeed = .01,
            super.onAwake();
            for (let t = 0; t < this.mPrefab.numChildren; t++) this.mPrefab.getChildAt(t).name.indexOf("tanke_jijie") >= 0 && (this.tankPanel.push(this.mPrefab.getChildAt(t)), this.tankPanel[this.tankPanel.length - 1].active = !1);
            this.leveNumList.push(_.architectureData.tank_upgrade1),
            this.leveNumList.push(_.architectureData.tank_upgrade2),
            this.level = 1,
            this.maxLevel = 3,
            this.tankPanel[this.level - 1].active = !0,
            this.levelNum = this.leveNumList[this.level - 1]
        }
        UpdateObj() {
            return super.UpdateObj(),
            this.tankList.length > 0
        }
        LevelAdd() {
            super.LevelAdd(),
            this.tankPanel[this.level - 1].active = !0,
            this.AddPoint()
        }
        AddPoint() {
            let t = this.level - 1;
            this.points && this.points.length > t && (this.tankPointList.push(this.points[t]), console.log(" 添加坦克点位： ", this.level, this.tankPointList))
        }
        Unlock() {
            super.Unlock(),
            this.showYanWu(),
            null == this.unlockArchitecture && (this.unlockArchitecture = Laya.Sprite3D.instantiate(j.LoaderPrefabs[_.resourcesDataCfg.tankeying], this.mPrefab, !1), this.unlockArchitecture.transform.localPosition = this.tankBarracksPoint, this.unlockArchitecture.transform.localRotationEuler = new Laya.Vector3(0, 0, 0)),
            this.unlockArchitecture.active = !0,
            this.inPoint = this.unlockArchitecture.getChildByName("inPoint"),
            this.levelPro = this.unlockArchitecture.getChildByName("jindutiao"),
            this.proMat = this.levelPro.getChildAt(0).meshRenderer.material.clone(),
            this.levelPro.getChildAt(0).meshRenderer.material = this.proMat,
            this.levelNumber = this.unlockArchitecture.getChildByName("number"),
            this.box = null,
            this.box = new Vt(this.levelPro.getChildByName("box"));
            for (let t = 0; t < this.levelNumber.getChildAt(0).numChildren; t++) {
                let e = this.levelNumber.getChildAt(0).getChildAt(t),
                i = e.meshRenderer.material.clone();
                e.meshRenderer.material = i,
                this.levelNumberMatList.push(i)
            }
            this.levelMingpai = this.unlockArchitecture.getChildByName("mingpai"),
            this.proSilverScale = this.levelMingpai.getChildAt(0).transform.localScale.clone(),
            this.lastBarrackProValue = 0,
            this.ChangeProValue()
        }
        LevelReset() {
            if (super.LevelReset(), this.unlockPro = this.mPrefab.getChildByName("jindutiao"), this.unlockPro) {
                this.unlockNumber = this.mPrefab.getChildByName("number"),
                this.unlockMingpai = this.mPrefab.getChildByName("mingpai"),
                this.unlockMat = this.unlockPro.getChildAt(0).meshRenderer.material.clone(),
                this.unlockPro.getChildAt(0).meshRenderer.material = this.unlockMat,
                this.box = null,
                this.box = new Vt(this.unlockPro.getChildByName("box")),
                this.isUnlock = !1;
                for (let t = 0; t < this.unlockNumber.getChildAt(0).numChildren; t++) {
                    let e = this.unlockNumber.getChildAt(0).getChildAt(t),
                    i = e.meshRenderer.material.clone();
                    e.meshRenderer.material = i,
                    this.unlockNumberMatList.push(i)
                }
                this.proSilverScale = this.unlockMingpai.getChildAt(0).transform.localScale.clone(),
                this.lastNum = 0,
                this.lastProValue = 0,
                this.isCollision = !1,
                this.ChangeProValue()
            }
            null != this.unlockArchitecture && (this.unlockArchitecture.active = !1, this.box.update())
        }
        ChangeBarrckValue(t) {
            this.lastBarrackProValue += t,
            this.lastBarrackProValue > 1 ? this.lastBarrackProValue = 1 : this.lastBarrackProValue < 0 && (this.lastBarrackProValue = 0),
            this.lastBarrackProValue >= 1 && this.Sendtank()
        }
        Remove() {
            for (; ! (this.tankList.length <= 0);) {
                this.tankList.pop().Remove()
            }
            for (; ! (this.attackList.length <= 0);) {
                this.attackList.pop().Remove()
            }
            super.Remove()
        }
        EnemeyDie(t) {}
        DestroyJudgment() {}
    }
    class We extends Je {
        Unlock() {
            super.Unlock(),
            this.showYanWu(),
            null == this.unlockArchitecture && (this.unlockArchitecture = Laya.Sprite3D.instantiate(j.LoaderPrefabs[_.resourcesDataCfg.tankeying], this.unlockPoint, !1), this.unlockArchitecture.transform.localPosition = new Laya.Vector3(0, 0, 0), this.unlockArchitecture.transform.localRotationEuler = new Laya.Vector3(0, 0, 0));
            let t = this.owner.getComponent(Oe);
            null == t && ((t = this.owner.addComponent(Oe)).capmIndex = this.capmIndex, t.Barra = this),
            this.capmIndex >= 0 && (0 == this.capmIndex ? tt.Instance.BuildLIst_Mine.push(t) : tt.Instance.BuildList_Eny.push(t)),
            t.Reset(),
            this.unlockArchitecture.active = !0,
            this.inPoint = this.unlockArchitecture.getChildByName("inPoint"),
            this.lastBarrackProValue = 0
        }
        Sendtank() {
            if (this.ChangeBarrckValue( - this.lastBarrackProValue), this.isSoldMax || q.Instance.GetIsMaxSolider) return;
            q.Instance.lastSoliderNum += 1,
            Laya.stage.event(u.UPDATE_PLAYER);
            let t = $t.GetPoolPrefab(_.resourcesDataCfg.tank, j.LoaderPrefabs[_.resourcesDataCfg.tank], q.Instance.mainScene.GetScene);
            t.active = !0;
            let e = t.getComponent(Ie);
            e || (e = t.addComponent(Ie)),
            e.Reset(),
            e.gathering = null,
            e.tankBattalionCtl = this,
            e.SetRole(this.headquarters.theirRole),
            e.SetCamp(this.camp),
            e.battleCamp = o.Tank,
            e.roleCamp = n.FightingUnit;
            let i = this.tankPointList[this.tankList.length];
            e.SetPosition = this.inPoint.transform.position,
            t.transform.rotationEuler = new Laya.Vector3(0, 180, 0),
            e.moveDisPatchPoint(i),
            this.tankList.push(e),
            this.capmIndex >= 0 && (0 == this.capmIndex ? tt.Instance.SoldierList_Mine.push(e) : tt.Instance.SoldierList_Ai.push(e))
        }
        DispatchTroops(t) {}
        reSetTargetPos() {
            for (let t = 0; t < this.tankList.length; t++) {
                let e = this.tankList[t],
                i = this.tankPointList[t];
                e.isActiva ? e.dispatchPoint = i: e.moveDisPatchPoint(i)
            }
        }
        EnemeyDie(t) {
            t.indexTarget >= 0 && (this.localCampTarget = t.indexTarget);
            let e = p.RemoveArrayKey(this.tankList, t);
            this.reSetTargetPos(),
            1 == e && this.DestroyJudgment()
        }
        DestroyJudgment() {
            this.tankList.length,
            q.Instance.mainScene.GetMap.battCountWinDeter()
        }
        UpdateObj() {
            if (super.UpdateObj(), this.tankList.length > 0) for (let t = this.tankList.length - 1; t >= 0; t--) this.tankList[t].UpdateObj();
            return this.isUnlock && this.ChangeBarrckValue(this.barrackValueSpeed),
            this.tankList.length > 0
        }
    }
    class Ye extends Be {
        init(t, e, i) {
            let a = _.headquartersJsonData[t];
            super.init(a, e);
            for (let t = 0; t < a.tankBattalionList.length; t++) {
                let e = new Laya.Sprite3D;
                e.active = !0,
                this.mPrefab.addChild(e),
                this.dispatchTroopsPush(_.resourcesDataCfg.jindutiao, a.tankBattalionList[t].jindutiao, e),
                this.dispatchTroopsPush(_.resourcesDataCfg.mingpai, a.tankBattalionList[t].mingpai, e),
                this.dispatchTroopsPush(_.resourcesDataCfg.number, a.tankBattalionList[t].number, e);
                for (let i = 0; i < a.tankBattalionList[t].tankejijieList.length; i++) this.dispatchTroopsPush(_.resourcesDataCfg.tanke_jijie, a.tankBattalionList[t].tankejijieList[i], e);
                let i = e.addComponent(We);
                i.SetHead(this, a.tankBattalionList[t]),
                this.tankBattalionList.push(i)
            }
            for (let t = 0; t < a.dispatchTroopsList.length; t++) {
                let e = new Laya.Sprite3D;
                e.active = !0,
                this.mPrefab.addChild(e),
                this.dispatchTroopsPush(_.resourcesDataCfg.jindutiao, a.dispatchTroopsList[t].jindutiao, e),
                this.dispatchTroopsPush(_.resourcesDataCfg.shengji_1, a.dispatchTroopsList[t].shengji_1, e),
                this.dispatchTroopsPush(_.resourcesDataCfg.mingpai, a.dispatchTroopsList[t].mingpai, e),
                this.dispatchTroopsPush(_.resourcesDataCfg.number, a.dispatchTroopsList[t].number, e),
                this.dispatchTroopsPush(_.resourcesDataCfg.zhandian_2_5, a.dispatchTroopsList[t].zhandian_2_5, e),
                this.dispatchTroopsPush(_.resourcesDataCfg.zhandian_3_5, a.dispatchTroopsList[t].zhandian_3_5, e),
                this.dispatchTroopsPush(_.resourcesDataCfg.zhandian_4_5, a.dispatchTroopsList[t].zhandian_4_5, e);
                let i = e.addComponent(ze);
                i.SetHead(this, a.dispatchTroopsList[t]),
                this.dispatchTroopsCtlList.push(i)
            }
            for (let t = 0; t < a.stingoutBattalionList.length; t++) {
                let e = new Laya.Sprite3D;
                e.active = !0,
                this.mPrefab.addChild(e),
                this.dispatchTroopsPush(_.resourcesDataCfg.mod_ljxf_zhandian_penhuobing_2, a.stingoutBattalionList[t].mod_ljxf_zhandian_penhuobing_2, e),
                this.dispatchTroopsPush(_.resourcesDataCfg.mod_ljxf_zhandian_penhuobing_3, a.stingoutBattalionList[t].mod_ljxf_zhandian_penhuobing_3, e),
                this.dispatchTroopsPush(_.resourcesDataCfg.mod_ljxf_zhandian_penhuobing_4, a.stingoutBattalionList[t].mod_ljxf_zhandian_penhuobing_4, e);
                let i = e.addComponent(Fe);
                i.SetHead(this, a.stingoutBattalionList[t]),
                this.flamingTroopsCtlList.push(i)
            }
            this.mPrefab.active = !1
        }
        SetRole(t) {
            if (this.mPrefab.active = !0, this.theirRole = t, super.SetRole(t), 0 != t.capmIndex) {
                this.SetRotate = new Laya.Vector3(0, 180, 0);
                for (let t = 0; t < this.flamingTroopsCtlList.length; t++) {
                    this.flamingTroopsCtlList[t].LevelReset(),
                    this.flamingTroopsCtlList[t].resetPoint()
                }
                for (let t = 0; t < this.dispatchTroopsCtlList.length; t++) {
                    let e = this.theirRole.level,
                    i = this.dispatchTroopsCtlList[t];
                    i.LevelReset(),
                    this.dispatchTroopsCtlList[t].resetPoint();
                    let a = i.isUnlock ? 0 : 1;
                    a += e - i.level;
                    for (let t = 0; t < a; t++) i.LevelAdd(!1)
                }
            } else {
                this.SetRotate = new Laya.Vector3(0, 0, 0);
                for (let t = 0; t < this.flamingTroopsCtlList.length; t++) {
                    this.flamingTroopsCtlList[t].LevelReset(),
                    this.flamingTroopsCtlList[t].resetPoint()
                }
                for (let t = 0; t < this.dispatchTroopsCtlList.length; t++) {
                    let e = this.theirRole.level,
                    i = this.dispatchTroopsCtlList[t];
                    i.LevelReset(),
                    this.dispatchTroopsCtlList[t].resetPoint();
                    let a = i.isUnlock ? 0 : 1;
                    a += e - i.level;
                    for (let t = 0; t < a; t++) i.LevelAdd(!1)
                }
            }
        }
        CollisionRole() { ! q.Instance.isAutoSolider && this.isDisPathch || null == this.theirRole || 0 == this.theirRole.capmIndex && super.CollisionRole()
        }
        selectEnemy() {
            this.tankBattalionList.length > 0 && this.tankBattalionList.forEach(t =>{
                t.DispatchTroops(this.theirRole.GetPosition)
            }),
            this.dispatchTroopsCtlList.length > 0 && this.dispatchTroopsCtlList.forEach(t =>{
                t.DispatchTroops(this.theirRole.GetPosition)
            }),
            this.flamingTroopsCtlList.length > 0 && this.flamingTroopsCtlList.forEach(t =>{
                t.DispatchTroops(this.theirRole.GetPosition)
            })
        }
    }
    class Ke extends Le {
        constructor(t) {
            super(t),
            this.campIndex = -1,
            this.EnySoldList = [],
            this.jsonList = [],
            this.EnySoldList_Map = [],
            this.timeCount = 0,
            this.timeSum = 0,
            this.localCampTarget = -1,
            this.timeSum = _.dzBattleConfigData.neutral_soldier_timebirth,
            this.campIndex = -1;
            for (let e = 0; e < t.enemyList.length; e++) this.EnySoldList_Map.push({
                index: e,
                sod: null
            });
            this.jsonList = t.enemyList;
            for (let t = 0; t < 2; t++) this.CreatEnySod(t);
            for (let e = 0; e < t.cubeList.length; e++) {
                let i = new Vt(null);
                i.set(t.cubeList[e].pos, t.cubeList[e].rot, t.cubeList[e].scale),
                this.obsList.push(i)
            }
        }
        CreatEnySod(t) {
            let e = this.jsonList[t];
            if (null == this.EnySoldList_Map[t]) return;
            let i = this.jsonList[this.EnySoldList_Map[t].index].pos.clone();
            if (e.name.indexOf("soldier") >= 0) {
                let s = e.name.split("_"),
                r = $t.GetPoolPrefab(_.resourcesDataCfg.soldier, j.LoaderPrefabs[_.resourcesDataCfg.soldier], q.Instance.mainScene.GetScene);
                r.active = !0,
                r.transform.localPosition = new Laya.Vector3(0, 0, 0),
                r.transform.localRotationEuler = new Laya.Vector3(0, 0, 0),
                r.transform.position = i,
                r.transform.setWorldLossyScale(e.scale.clone());
                let h = r.getComponent(Ne);
                h || (h = r.addComponent(Ne)),
                h.Reset(),
                h.gathering = this,
                h.gunLevel = parseInt(s[1]),
                h.armourLevel = parseInt(s[2]),
                h.setCampindex(this.campIndex),
                h.setCampHeroByIndex(),
                this.campIndex >= 0 ? h.SetCamp(a.Player, e.scale.x > 1) : (h.SetCamp(a.Enermy, e.scale.x > 1), h.Activate()),
                h.roleCamp = n.FightingUnit,
                h.battleCamp = o.Soldier,
                h.dispatchPoint = i.clone(),
                this.enemyList.push(h),
                this.EnySoldList_Map[t].sod = h,
                this.showYanWu(e.pos.clone())
            } else if (e.name.indexOf("tank") >= 0) {
                let s = $t.GetPoolPrefab(_.resourcesDataCfg.tank, j.LoaderPrefabs[_.resourcesDataCfg.tank], q.Instance.mainScene.GetScene);
                s.active = !0,
                s.transform.localPosition = new Laya.Vector3(0, 0, 0),
                s.transform.localRotationEuler = new Laya.Vector3(0, 0, 0),
                s.transform.position = i;
                let r = s.getComponent(Ie);
                r || (r = s.addComponent(Ie)),
                r.Reset(),
                r.gathering = this,
                r.SetCamp(a.Enermy),
                r.roleCamp = n.FightingUnit,
                r.battleCamp = o.Tank,
                r.dispatchPoint = i.clone(),
                this.enemyList.push(r),
                this.EnySoldList_Map[t].sod = r,
                this.showYanWu(e.pos.clone())
            } else if (e.name.indexOf("flaming") >= 0) {
                let s = $t.GetPoolPrefab(_.resourcesDataCfg.flamingsoldier, j.LoaderPrefabs[_.resourcesDataCfg.flamingsoldier], q.Instance.mainScene.GetScene);
                s.active = !0,
                s.transform.localPosition = new Laya.Vector3(0, 0, 0),
                s.transform.localRotationEuler = new Laya.Vector3(0, 0, 0),
                s.transform.position = i,
                s.transform.setWorldLossyScale(e.scale.clone());
                let r = s.getComponent(je);
                r || (r = s.addComponent(je)),
                r.Reset(),
                r.gathering = this,
                r.setCampindex(this.campIndex),
                r.setCampHeroByIndex(),
                this.campIndex >= 0 ? r.SetCamp(a.Player, e.scale.x > 1) : (r.SetCamp(a.Enermy, e.scale.x > 1), r.Activate()),
                r.roleCamp = n.FightingUnit,
                r.battleCamp = o.Pyro,
                r.dispatchPoint = i.clone(),
                this.enemyList.push(r),
                this.EnySoldList_Map[t].sod = r,
                this.showYanWu(e.pos.clone())
            } else if (e.name.indexOf("kuangrezhe") >= 0) {
                let s = e.name.split("_"),
                r = $t.GetPoolPrefab(_.resourcesDataCfg.zealo, j.LoaderPrefabs[_.resourcesDataCfg.zealo], q.Instance.mainScene.GetScene);
                r.active = !0,
                r.transform.localPosition = new Laya.Vector3(0, 0, 0),
                r.transform.localRotationEuler = new Laya.Vector3(0, 0, 0),
                r.transform.position = i,
                r.transform.setWorldLossyScale(e.scale.clone());
                let h = r.getComponent(de);
                h || (h = r.addComponent(de)),
                h.Reset(),
                h.gathering = this,
                h.gunLevel = parseInt(s[1]),
                h.armourLevel = parseInt(s[1]),
                h.SetCamp(a.Enermy, e.scale.x > 1),
                h.roleCamp = n.FightingUnit,
                h.battleCamp = o.Zealot,
                this.enemyList.push(h),
                this.EnySoldList_Map[t].sod = h,
                this.showYanWu(e.pos.clone())
            }
        }
        UpdateObj() {
            if (this.enemyList.length > 0) for (let t = this.enemyList.length - 1; t >= 0; t--) this.enemyList[t].UpdateObj();
            if (this.timeCount <= 0) {
                this.timeCount = this.timeSum;
                for (let t = 0; t < this.EnySoldList_Map.length; t++) if (null == this.EnySoldList_Map[t].sod) {
                    this.CreatEnySod(t);
                    break
                }
            }
            this.timeCount -= Laya.timer.delta
        }
        EnemeyDie(t) {
            q.Instance.lastLevelNum++,
            Laya.stage.event(u.UPDATE_PRO, [q.Instance.lastLevelNum / q.Instance.maxLevelNum]),
            Laya.stage.event(u.UPDATE_ENEMY),
            t.indexTarget >= 0 && (this.localCampTarget = t.indexTarget);
            for (let e = 0; e < this.EnySoldList_Map.length; e++) if (this.EnySoldList_Map[e].sod == t) {
                this.EnySoldList_Map[e].sod = null;
                break
            }
            p.RemoveArrayKey(this.enemyList, t),
            (0 == t.isActiva || t.capmIndex < 0) && this.DestroyJudgment()
        }
        changeMat(t) {
            this.land.getChildAt(0).getChildByName("mod_ljxf_land_2_1").meshRenderer.material = 0 == t ? q.Instance.mainScene.GetMap.landMatList[4] : q.Instance.mainScene.GetMap.landMatList[6]
        }
        DestroyJudgment() {
            if (this.enemyList.length <= 0) {
                let t = this.localCampTarget;
                t = t < 0 ? 0 : t,
                this.campIndex = t;
                for (let t = 0; t < 5; t++) this.CreatEnySod(t);
                this.changeMat(this.campIndex),
                Laya.stage.event(u.HeadDes)
            }
        }
        Remove() {
            for (; ! (this.enemyList.length <= 0);) {
                this.enemyList.pop().Remove()
            }
            this.land && $t.CollectObject(this.land.name, this.land)
        }
        showYanWu(t) {
            let e = $t.GetPoolPrefab(_.resourcesDataCfg.ef_ljxf_yanwu, j.LoaderPrefabs[_.resourcesDataCfg.ef_ljxf_yanwu], q.Instance.mainScene.GetScene);
            e.active = !1,
            e.active = !0,
            e.transform.position = t,
            Laya.timer.once(1200, null, t =>{
                $t.CollectObject(t.name, t)
            },
            [e])
        }
    }
    class Xe {
        constructor(t) {
            this.ailogic = t,
            this.target = t.target
        }
        EndState() {}
    }
    class Qe extends Xe {
        constructor() {
            super(...arguments),
            this.randMaxBrand = 0,
            this.count = 0
        }
        Enter() {
            this.count = 0,
            this.target.IsDie || this.target.action.ChangeAction(e.Move),
            null == this.target.targetLook && this.ailogic.ChangeAiState(c.Circle)
        }
        selectSoldier() {}
        ActionEnd() {}
        Execute() {
            this.target.GetTargetDis < .5 && (this.count < 1e3 ? this.count++:this.ailogic.ChangeAiState(c.Circle), this.target.targetLook = null, this.target.IsDie || this.target.action.ChangeAction(e.Standby), console.log("----------------找寻军长升级")),
            this.target.silverList.length <= 0 && (console.log("----------------铭牌用完了"), this.ailogic.ChangeAiState(c.Circle))
        }
        Exit() {}
    }
    class Ze extends Xe {
        constructor() {
            super(...arguments),
            this.count = 0
        }
        Enter() {
            this.target.selectGofightNode = null,
            this.target.selectGofght(0),
            this.target.IsDie || this.target.action.ChangeAction(e.Move)
        }
        AiSelect() {}
        Execute() {}
        Exit() {
            this.target.GetMainNode.timer.clearAll(this)
        }
    }
    class $e extends Xe {
        Enter() {
            this.target.targetLook = null,
            this.target.GetMainNode.timer.once(5, this, () =>{
                this.TargetSelect()
            })
        }
        Execute() {}
        Exit() {}
        TargetSelect() {
            this.target.selectHomeNode = null,
            this.target.selectGofightNode = null;
            q.Instance.mainScene.GetMap.silverList.length;
            let t = this.target.silverList.length,
            i = this.target.SearchTargetPos_Sliver(),
            a = this.target.SearchTargetPos_HomePros(),
            s = this.target.getSumAttackList();
            if (this.target.hp, this.target.maxHp, t <= this.target.mySliverLen) if (this.ailogic.ChangeAiState(c.FindBrand), i && Xt.IsDistances(this.target.GetPosition, i.transform.position, 5)) this.ailogic.ChangeAiState(c.FindBrand);
            else if (s > this.target.mySolderToFind) console.log("-----------找Enermy1"),
            this.ailogic.ChangeAiState(c.FindEny);
            else if (i && Xt.IsDistances(this.target.GetPosition, i.transform.position, 20)) this.target.getSumWaitList() > 3 ? a ? (console.log("-----------GoFight1"), this.target.selectGofightNode = a.headquarters, this.ailogic.ChangeAiState(c.GoFight)) : (console.log("-----------Standby循环"), Laya.timer.frameOnce(50, this, () =>{
                this.ailogic.ChangeAiState(c.Circle)
            }), this.target.IsDie || this.target.action.ChangeAction(e.Standby)) : (console.log("-----------找铭牌1"), this.ailogic.ChangeAiState(c.FindBrand));
            else {
                let n = this.target.serchHaveAnyUnLock();
                console.log("-------------判斷是否有兵營解鎖"),
                null != n && t > this.target.sliverLenToLockBar ? t > 0 ? (this.target.selectHomeNode = n.GetMainNode, console.log("---------------去解鎖啊"), this.ailogic.ChangeAiState(c.PutSoldier)) : (console.log("-------------但是我沒有牌子"), i ? this.ailogic.ChangeAiState(c.FindBrand) : (this.target.IsDie || this.target.action.ChangeAction(e.Standby), this.ailogic.ChangeAiState(c.Circle), console.log("----------------場上也沒牌子所以我等待"))) : (console.log("----------------------判断军营人数比例", this.target.getSumWaitList()), this.target.getSumWaitList() > this.target.waitSoldToGoFight ? a ? (console.log("-----------gofaight2"), this.target.selectGofightNode = a.headquarters, this.ailogic.ChangeAiState(c.GoFight)) : (Laya.timer.frameOnce(50, this, () =>{
                    this.ailogic.ChangeAiState(c.Circle)
                }), this.target.IsDie || this.target.action.ChangeAction(e.Standby)) : i && Xt.IsDistances(this.target.GetPosition, i.transform.position, 20) ? (console.log("-*******状态转换FindBrand"), this.ailogic.ChangeAiState(c.FindBrand), console.log("-*******状态转换FindBrandaaaaaaaa")) : s > this.target.mySolderToFind ? (console.log("-*******找Enermy"), this.ailogic.ChangeAiState(c.FindEny)) : (console.log("-*******soldhead", null == a), a ? (console.log("-*------------找Enermy"), this.ailogic.ChangeAiState(c.GoFight)) : (Laya.timer.frameOnce(50, this, () =>{
                    this.ailogic.ChangeAiState(c.Circle)
                }), this.target.IsDie || this.target.action.ChangeAction(e.Standby))))
            } else if (console.log("|------------曾进入circ"), i && Xt.IsDistances(this.target.GetPosition, i.transform.position, 5)) this.ailogic.ChangeAiState(c.FindBrand);
            else if (s > this.target.mySolderToFind) this.ailogic.ChangeAiState(c.FindEny);
            else {
                let i = !1;
                if (this.target.myHeadquarters.length > 0) {
                    if (this.target.myHeadquarters[0].dispatchTroopsCtlList.length > 0) {
                        let t = this.target.myHeadquarters[0].dispatchTroopsCtlList[0].barrackList;
                        for (let e = 0; e < t.length; e++) 0 == t[e].isUnlock && (i = !0)
                    }
                    if (this.target.myHeadquarters[0].flamingTroopsCtlList.length > 0) {
                        let t = this.target.myHeadquarters[0].flamingTroopsCtlList[0].barrackList;
                        for (let e = 0; e < t.length; e++) 0 == t[e].isUnlock && (i = !0)
                    }
                }
                if (this.target.level < this.target.maxLevel && 0 == i) this.target.selectHome_AddCamp(),
                this.ailogic.ChangeAiState(c.AddCamp);
                else {
                    let i = this.target.serchHaveAnyUnLock();
                    if (null != i) return void(t > this.target.sliverLenToLockBar ? (this.target.selectHomeNode = i.GetMainNode, this.ailogic.ChangeAiState(c.PutSoldier)) : this.ailogic.ChangeAiState(c.FindBrand));
                    let n = this.target.serchHaveAnyUnNoMax();
                    null != n ? (this.target.selectHomeNode = n.levelPro, this.ailogic.ChangeAiState(c.PutSoldier)) : s > this.target.mySolderToFind ? this.ailogic.ChangeAiState(c.FindEny) : (console.log("-*******状态转换GoFight"), a ? (this.target.selectGofightNode = a.headquarters, this.ailogic.ChangeAiState(c.GoFight)) : (Laya.timer.frameOnce(50, this, () =>{
                        this.ailogic.ChangeAiState(c.Circle)
                    }), this.target.IsDie || this.target.action.ChangeAction(e.Standby)))
                }
            }
        }
    }
    class ti extends Xe {
        constructor() {
            super(...arguments),
            this.randMaxBrand = 0
        }
        Enter() {
            this.randMaxBrand = Math.floor(.5 * Math.random() * 1e3),
            this.target.IsDie || this.target.action.ChangeAction(e.Move),
            this.target.selectBrand()
        }
        Execute() {}
        Exit() {}
    }
    class ei extends Xe {
        constructor() {
            super(...arguments),
            this.randMaxBrand = 0,
            this.soldierList = null
        }
        Enter() {
            this.target.IsDie || this.target.action.ChangeAction(e.Move),
            this.target.selectEny()
        }
        Execute() {
            null == this.target.targetLook && (this.target.GetMainNode.timer.once(500, this, () =>{}), this.ailogic.ChangeAiState(c.Circle)),
            this.target.GetTargetDis < 4 && (this.target.targetLook = null, this.target.IsDie || this.target.action.ChangeAction(e.Attack))
        }
        Exit() {}
    }
    class ii extends Xe {
        constructor() {
            super(...arguments),
            this.randMaxBrand = 0,
            this.soldierList = null,
            this.count = 0
        }
        Enter() {
            this.target.dispatchTroops()
        }
        Execute() {}
        Exit() {}
    }
    class ai extends Xe {
        constructor() {
            super(...arguments),
            this.randMaxBrand = 0,
            this.count = 0
        }
        Enter() {
            this.count = 0,
            this.target.IsDie || this.target.action.ChangeAction(e.Move),
            this.target.selectHome()
        }
        selectSoldier() {}
        ActionEnd() {}
        Execute() {
            console.log("---------------循环put"),
            this.target.GetTargetDis < .5 && (this.count < 1e3 && this.count++, this.target.targetLook = null, this.target.IsDie || this.target.action.ChangeAction(e.Standby)),
            this.target.silverList.length <= 0 && (console.log("----------------铭牌用完了"), this.ailogic.ChangeAiState(c.Circle))
        }
        Exit() {}
    }
    class si {
        constructor(t, e) {
            this.target = t,
            this.ChangeAiState(e)
        }
        ChangeAiState(t, e = !1) {
            if (this.target.IsDie) return;
            if (!e && this.state == t) return;
            let i;
            switch (this.lastState = this.state, this.state = t, t) {
            case c.Circle:
                i = new $e(this);
                break;
            case c.AvoidWar:
                i = new Ze(this);
                break;
            case c.FindBrand:
                i = new ti(this);
                break;
            case c.PutSoldier:
                i = new ai(this);
                break;
            case c.GoFight:
                i = new ii(this);
                break;
            case c.FindEny:
                i = new ei(this);
                break;
            case c.AddCamp:
                i = new Qe(this)
            }
            this.ailogic && this.ExitAction(),
            this.ailogic = null,
            this.ailogic = i,
            this.ailogic.Enter()
        }
        UpdateAiAc() {
            this.ailogic.Execute()
        }
        ExitAction() {
            this.ailogic.Exit()
        }
    }
    class ni extends ve {
        constructor() {
            super(...arguments),
            this.playerFsm = c.Circle,
            this.aiCtr = null,
            this.sliverLenToLockBar = 0,
            this.mySliverLen = 0,
            this.mySolderToFind = 8,
            this.waitSoldToGoFight = 3,
            this.backHp = .6,
            this.reliveTime = 1,
            this.thouchAngel = 0,
            this.targetLook = null,
            this.dtX = 0,
            this.dtY = 0,
            this.selectHomeNode = null,
            this.selectGofightNode = null,
            this.isRest = !1,
            this.selectTarget = null
        }
        Reset() {
            super.Reset()
        }
        onAwake() {
            console.log("---------------类名", typeof this),
            super.onAwake(),
            this.playerFsm = c.Circle,
            this.aiCtr = null,
            this.hp = this.maxHp,
            this.sliverLenToLockBar = _.dzBattleConfigData.sliverLenToLockBar,
            this.mySliverLen = _.dzBattleConfigData.mySliverLen,
            this.mySolderToFind = _.dzBattleConfigData.mySolderToFind,
            this.waitSoldToGoFight = _.dzBattleConfigData.waitSoldToGoFight,
            this.backHp = _.dzBattleConfigData.backHp,
            Laya.stage.on(u.InterfereAiState, this, this.interfereAiState),
            Laya.stage.on(u.GAME_START, this, this.GameStart)
        }
        GameStart() {
            this.aiCtr = new si(this, this.playerFsm)
        }
        GetTartgetMove() {
            if (q.Instance.mainScene.isStart && null != this.targetLook && null != this.GetPosition && null != this.targetLook.transform) {
                this.dtX = this.targetLook.transform.position.x - this.GetPosition.x,
                this.dtY = this.targetLook.transform.position.z - this.GetPosition.z;
                var t = 180 * Math.atan2(this.dtX, this.dtY) / Math.PI;
                this.thouchAngel = 180 + t,
                this.action && !this.IsDie && this.action.ChangeAction(e.Move)
            }
        }
        ReSetArrayPos() {
            this.followPosArray = [],
            tt.Instance.SoldierList_Ai.forEach(t =>{
                t.isStartAtk = !1,
                t.isJoinFollow = !1,
                t && t.owner && t.owner.getComponent(Ie) ? t.followPos = this.setFollowArrayPos_Tank() : t.followPos = this.setFollowArrayPos()
            })
        }
        OpenMouseEvent() {}
        selectEny() {
            this.targetLook = this.SearchTargetPos()
        }
        selectBrand() {
            q.Instance.mainScene.GetMap.silverList.length > 0 ? (this.targetLook = this.SearchTargetPos_Sliver(), console.log("---------有牌子")) : (console.log("---------0牌子"), this.aiCtr.ChangeAiState(c.Circle))
        }
        dispatchTroops() {
            this.IsDie || tt.Instance.SoldierList_Ai.forEach(t =>{
                t.Activate()
            })
        }
        selectLevelAdd(t = -1) {
            if (this.targetLook = null, this.myHeadquarters.length > 0) {
                let t = this.myHeadquarters[0];
                t.level < t.maxLevel && (this.targetLook = t.box)
            } else console.log("--------------没有家", this.myHeadquarters),
            this.aiCtr.ChangeAiState(c.Circle)
        }
        selectGofght(t = -1) {
            if (this.myHeadquarters.length > 0) {
                let t = this.SearchTargetPos_HomePros();
                null != t ? (this.selectGofightNode = t.headquarters, this.targetLook = t.headquarters.box) : this.aiCtr.ChangeAiState(c.Circle)
            } else this.aiCtr.ChangeAiState(c.Circle)
        }
        selectHome() {
            if (this.targetLook = null, null != this.selectHomeNode) this.targetLook = this.selectHomeNode;
            else {
                let t = null;
                this.myHeadquarters[0].dispatchTroopsCtlList.length > 0 && (t = this.myHeadquarters[0].dispatchTroopsCtlList);
                for (let e = 0; e < t.length; e++) for (let i = 0; i < t[e].barrackList.length; i++) t[e].barrackList[i].isUnlock ? this.targetLook = t[e].barrackList[i].isUnlock: this.targetLook = t[e].barrackList[i].GetMainNode;
                let e = null;
                this.myHeadquarters[0].flamingTroopsCtlList.length > 0 && (e = this.myHeadquarters[0].flamingTroopsCtlList);
                for (let t = 0; t < e.length; t++) for (let i = 0; i < e[t].barrackList.length; i++) e[t].barrackList[i].isUnlock ? this.targetLook = e[t].barrackList[i].isUnlock: this.targetLook = e[t].barrackList[i].GetMainNode
            }
        }
        selectHome_AddCamp() {
            this.targetLook = null,
            null != this.selectHomeNode ? this.targetLook = this.selectHomeNode: this.myHeadquarters[0].dispatchTroopsCtlList.length > 0 && this.myHeadquarters[0].dispatchTroopsCtlList[0].levelPro && (this.targetLook = this.myHeadquarters[0].dispatchTroopsCtlList[0].levelPro)
        }
        getHurt() {
            this.isRest = !0,
            this.hp <= 0 && (this.action.state = e.Die, this.action = null, console.log("*------------军长Diexxxxx"), q.Instance.mainScene.GetMap.enyMainisLive = !1, q.Instance.mainScene.GetMap.battCountWinDeter())
        }
        ChangeHp(t) {
            t *= .5,
            super.ChangeHp(t),
            this.hp / this.maxHp < .7 && this.getHurt()
        }
        CloseMouseEvent() {
            Laya.stage.off(u.TOUCH_DOWN, this, this.TouchDown),
            Laya.stage.off(u.TOUCH_MOVE, this, this.TouchMove),
            Laya.stage.off(u.TOUCH_UP, this, this.TouchUp),
            Laya.stage.off(u.GAME_START, this, this.GameStart)
        }
        heroMove() {
            tt.Instance.SoldierList_Ai.forEach(t =>{
                t.TouchMove()
            })
        }
        heroUp() {
            tt.Instance.SoldierList_Ai.forEach(t =>{
                t.TouchUp()
            })
        }
        checkState() {
            this.action.state == e.Standby && tt.Instance.SoldierList_Mine.forEach(t =>{
                t.TouchUp()
            })
        }
        TouchDown() {
            this.action.state != e.Mania ? (this.isTouchDown = !0, q.Instance.isGuide && Laya.stage.event(u.HIDE_GUIDE), this.touchDownPoint = new Laya.Point(Laya.stage.mouseX, Laya.stage.mouseY), Laya.stage.once(u.TOUCH_UP, this, this.TouchUp), Laya.stage.on(u.TOUCH_MOVE, this, this.TouchMove), this.action && !this.IsDie && this.action.ChangeAction(e.Move), tt.Instance.SoldierList_Ai.forEach(t =>{
                t.TouchDown()
            })) : Laya.stage.once(u.TOUCH_DOWN, this, this.TouchDown)
        }
        TouchUp() {
            this.isTouchDown = !1,
            this.touchDownPoint = new Laya.Point(0, 0),
            Laya.stage.off(u.TOUCH_MOVE, this, this.TouchMove),
            Laya.stage.once(u.TOUCH_DOWN, this, this.TouchDown),
            this.action && !this.IsDie && this.action.ChangeAction(e.Standby),
            this.heroUp()
        }
        get GetTargetDis() {
            return null == this.targetLook ? 0 : Laya.Vector3.distance(this.targetLook.transform.position, this.GetPosition)
        }
        get GetIsAirship() {
            return ! 1
        }
        VideoAddSilver(t) {}
        VideoMaxLevelBarrack() {
            super.VideoMaxLevelBarrack()
        }
        VideoMaxRole() {
            super.VideoMaxRole()
        }
        ChangeJiJia() {}
        CollisonSilver() {
            if (q.Instance.mainScene.GetMap.silverList.length > 0) for (let t = q.Instance.mainScene.GetMap.silverList.length - 1; t >= 0; t--) if (Xt.IsDistances(this.GetPosition, q.Instance.mainScene.GetMap.silverList[t].GetPosition, 5) && zt.IntersectOBB(this.box, q.Instance.mainScene.GetMap.silverList[t].box)) {
                this.aiCtr.ChangeAiState(c.Circle);
                let e = q.Instance.mainScene.GetMap.silverList[t];
                switch (e.Pickup(), e.silverType) {
                case h.Silver:
                    let t = this.silverList.length;
                    this.silverList.push(e),
                    q.Instance.mainScene.GetMap.silverList.length <= 0 && 0 == q.Instance.hintIndex && q.Instance.AddHintShow(),
                    e.ChangePoint(this.silverPoint, () =>{
                        Laya.stage.event(u.UPDATE_MINGPAI, [this.silverList.length])
                    },
                    new Laya.Vector3(0, e.size.height * t, 0));
                    break;
                case h.Gold:
                    let i = new Laya.Vector4;
                    q.Instance.mainScene.GetCamera.GetCamera.worldToViewportPoint(e.GetPosition, i),
                    e.Remove()
                }
                return
            }
        }
        UpdateObj() {
            this.isRest,
            null != this.aiCtr && this.aiCtr.UpdateAiAc(),
            null != this.targetLook && (super.UpdateObj(), this.GetTartgetMove())
        }
        interfereAiState(t) {
            t == this.capmIndex && this.aiCtr.ChangeAiState(c.Circle)
        }
        onDestroy() {
            Laya.stage.off(u.InterfereAiState, this, this.interfereAiState)
        }
        SearchTargetPos() {
            if (null == this.selectTarget) {
                let t = [];
                for (let e = q.Instance.mainScene.GetMap.enemyGatheringList.length - 1; e >= 0; e--) if (q.Instance.mainScene.GetMap.enemyGatheringList[e].enemyList.length > 0) for (let i = q.Instance.mainScene.GetMap.enemyGatheringList[e].enemyList.length - 1; i >= 0; i--) q.Instance.mainScene.GetMap.enemyGatheringList[e].enemyList[i].IsChoosable(this) && t.push(q.Instance.mainScene.GetMap.enemyGatheringList[e].enemyList[i].GetMainNode);
                for (let e = 0; e < q.Instance.mainScene.GetMap.roleList.length; e++) {
                    let i = q.Instance.mainScene.GetMap.roleList;
                    i[e].IsChoosable(this) && t.push(i[e].GetMainNode)
                }
                for (let e = 0; e < tt.Instance.SoldierList_Mine.length; e++) tt.Instance.SoldierList_Mine[e].IsChoosable(this) && Xt.IsDistances(this.GetPosition, tt.Instance.SoldierList_Mine[e].GetPosition, this.perceptionRange) && t.push(tt.Instance.SoldierList_Mine[e].GetMainNode);
                return t.length > 1 && t.sort((t, e) =>{
                    return Laya.Vector3.distanceSquared(this.GetPosition, t.transform.position) < Laya.Vector3.distanceSquared(this.GetPosition, e.transform.position) ? -1 : 1
                }),
                t[0]
            }
            return this.targetLook
        }
        serchHaveAnyUnLock() {
            let t = null;
            if (this.myHeadquarters[0].dispatchTroopsCtlList.length > 0) {
                t = this.myHeadquarters[0].dispatchTroopsCtlList;
                for (let e = 0; e < t.length; e++) for (let i = 0; i < t[e].barrackList.length; i++) if (0 == t[e].barrackList[i].isUnlock) return t[e].barrackList[i]
            }
            if (this.myHeadquarters[0].flamingTroopsCtlList.length > 0) {
                let t = null;
                t = this.myHeadquarters[0].flamingTroopsCtlList;
                for (let e = 0; e < t.length; e++) for (let i = 0; i < t[e].barrackList.length; i++) if (0 == t[e].barrackList[i].isUnlock) return t[e].barrackList[i]
            }
            return null
        }
        serchHaveAnyUnNoMax() {
            let t = null,
            e = null;
            if (this.myHeadquarters[0].dispatchTroopsCtlList.length > 0) {
                t = this.myHeadquarters[0].dispatchTroopsCtlList;
                for (let e = 0; e < t.length; e++) for (let i = 0; i < t[e].barrackList.length; i++) if (!t[e].barrackList[i].isMaxLevel) return t[e].barrackList[i]
            }
            if (this.myHeadquarters[0].flamingTroopsCtlList.length > 0) {
                e = this.myHeadquarters[0].flamingTroopsCtlList;
                for (let t = 0; t < e.length; t++) for (let i = 0; i < e[t].barrackList.length; i++) if (!e[t].barrackList[i].isMaxLevel) return e[t].barrackList[i]
            }
            return null
        }
        getSumAttackList() {
            let t = 0;
            return tt.Instance.SoldierList_Ai.forEach(e =>{
                1 == e.isActiva && t++
            }),
            t
        }
        getSumWaitList() {
            let t = 0;
            return tt.Instance.SoldierList_Ai.forEach(e =>{
                0 == e.isActiva && t++
            }),
            t
        }
        SearchTargetPos_HomePros() {
            return this.myHeadquarters[0].dispatchTroopsCtlList[0]
        }
        deterGetSold(t) {
            return null != t.owner.getComponent(ze) ? t.soldierList: null != t.owner.getComponent(Fe) ? t.soldierList: void 0
        }
        deterDis(t) {
            if (null != t) return t.owner.getComponent(ze) ? t.soldierList.length / t.soldierPointList.length: t.owner.getComponent(Fe) ? t.soldierList.length / t.soldierPointList.length: void 0
        }
        SearchTargetPos_Sliver() {
            let t = [];
            if (0 != q.Instance.isPlaying && null != this.mPrefab && null != this.mPrefab.transform && null != this.mPrefab.transform.position) {
                for (let e = 0; e < q.Instance.mainScene.GetMap.silverList.length; e++) {
                    let i = q.Instance.mainScene.GetMap.silverList[e];
                    t.push(i.GetMainNode)
                }
                return t.length > 1 && t.sort((t, e) =>{
                    return Laya.Vector3.distanceSquared(this.GetPosition, t.transform.position) < Laya.Vector3.distanceSquared(this.GetPosition, e.transform.position) ? -1 : 1
                }),
                t.length > 0 ? t[0] : null
            }
        }
        Die() {
            this.action.state = e.Die,
            this.action = null,
            console.log("*------------军长Die???????"),
            q.Instance.mainScene.GetMap.enyMainisLive = !1,
            q.Instance.mainScene.GetMap.battCountWinDeter()
        }
    }
    class oi extends Re {
        SendSoldier() {
            if (this.ChangeBarrckValue( - this.lastBarrackProValue), this.dispatchTroopsCtl.isSoldMax || q.Instance.GetIsMaxSolider) return;
            q.Instance.lastSoliderNum += 1,
            Laya.stage.event(u.UPDATE_PLAYER);
            let t = $t.GetPoolPrefab(_.resourcesDataCfg.soldier, j.LoaderPrefabs[_.resourcesDataCfg.soldier], q.Instance.mainScene.GetScene);
            t.active = !0;
            let e = t.getComponent(oe);
            e || (e = t.addComponent(oe)),
            e.Reset(),
            e.gathering = null,
            e.dispatchTroops = this.dispatchTroopsCtl,
            e.SetCamp(this.camp),
            e.roleCamp = n.FightingUnit,
            e.battleCamp = o.Soldier;
            let i = this.dispatchTroopsCtl.soldierPointList[this.dispatchTroopsCtl.soldierList.length];
            t.transform.position = this.inPoint.transform.position,
            t.transform.setWorldLossyScale(new Laya.Vector3(1, 1, 1)),
            t.transform.rotationEuler = new Laya.Vector3(0, 180, 0),
            e.moveDisPatchPoint(i),
            this.dispatchTroopsCtl.soldierList.push(e)
        }
    }
    class ri extends De {
        SetHead(t, e) {
            this.headquarters = t;
            let i = new Laya.Vector3;
            this.points = [];
            for (let a = 0; a < e.point.length; a++) {
                let s = [];
                for (let n = 0; n < e.point[a].length; n++) Laya.Vector3.add(t.GetPosition, e.point[a][n], i),
                s.push(i.clone());
                this.points.push(s)
            }
            this.AddPoint();
            for (let i = 0; i < e.barracksList.length; i++) {
                let a = Laya.Sprite3D.instantiate(j.LoaderPrefabs[e.barracksList[i].name], this.mPrefab, !1);
                a.active = !0,
                a.transform.localPosition = e.barracksList[i].pos.clone(),
                a.transform.localRotation = e.barracksList[i].rot.clone(),
                a.transform.localScale = e.barracksList[i].scale.clone();
                let s = a.addComponent(oi);
                s.dispatchTroopsCtl = this,
                s.headquarters = t,
                this.barrackList.push(s)
            }
        }
        DispatchTroops(t) {
            if (this.soldierList.forEach(e =>{
                let i = Laya.Vector3.distance(this.soldierPanel[0].transform.position, t.land.transform.position),
                a = new Laya.Vector3(t.land.transform.position.x - this.soldierPanel[0].transform.position.x, e.GetPosition.y, t.land.transform.position.z - this.soldierPanel[0].transform.position.z);
                Laya.Vector3.normalize(a, a),
                e.enemyGather = new Laya.Vector3(e.GetPosition.x + a.x * i, e.GetPosition.y, e.GetPosition.z + a.z * i),
                e.Activate()
            }), this.soldierPointList.length > 0) for (let t = this.soldierList.length - 1; t >= 0; t--) {
                let e = this.soldierList.splice(t, 1)[0];
                this.attackList.push(e)
            }
        }
        LevelAdd() {
            this.soldierPanel[this.level - 1] && this.level < 3 && (this.soldierPanel[this.level - 1].active = !1),
            super.LevelAdd(),
            this.isMaxLevel && (this.proIcon.active = !1),
            this.headquarters.theirRole.ChangeLevel(1),
            4 != this.level && 5 != this.level || this.headquarters.flamingTroopsCtlList.length > 0 && this.headquarters.flamingTroopsCtlList.forEach(t =>{
                t.LevelAdd()
            }),
            2 == q.Instance.hintIndex && q.Instance.AddHintShow(),
            this.soldierPanel[this.level - 1] && (this.soldierPanel[this.level - 1].active = !0),
            this.AddPoint()
        }
        AddPoint() {
            if (this.points[this.level - 1]) for (let t = 0; t < this.points[this.level - 1].length; t++) this.soldierPointList.push(this.points[this.level - 1][t])
        }
    }
    class hi extends Ue {
        SendSoldier() {
            if (this.ChangeBarrckValue( - this.lastBarrackProValue), this.flamingTroopsCtl.isSoldMax || q.Instance.GetIsMaxSolider) return;
            q.Instance.lastSoliderNum += 1,
            Laya.stage.event(u.UPDATE_PLAYER);
            let t = $t.GetPoolPrefab(_.resourcesDataCfg.flamingsoldier, j.LoaderPrefabs[_.resourcesDataCfg.flamingsoldier], q.Instance.mainScene.GetScene);
            t.active = !0;
            let e = t.getComponent(ce);
            e || (e = t.addComponent(ce)),
            e.Reset(),
            e.gathering = null,
            e.flamingTroopsCtl = this.flamingTroopsCtl,
            e.SetCamp(this.camp),
            e.roleCamp = n.FightingUnit,
            e.battleCamp = o.Pyro;
            let i = this.flamingTroopsCtl.soldierPointList[this.flamingTroopsCtl.soldierList.length];
            t.transform.position = this.inPoint.transform.position,
            t.transform.setWorldLossyScale(new Laya.Vector3(1, 1, 1)),
            t.transform.rotationEuler = new Laya.Vector3(0, 180, 0),
            e.moveDisPatchPoint(i),
            this.flamingTroopsCtl.soldierList.push(e)
        }
    }
    class li extends He {
        SetHead(t, e) {
            this.headquarters = t;
            let i = new Laya.Vector3;
            this.points = [];
            for (let a = 0; a < e.point.length; a++) {
                let s = [];
                for (let n = 0; n < e.point[a].length; n++) Laya.Vector3.add(t.GetPosition, e.point[a][n], i),
                s.push(i.clone());
                this.points.push(s)
            }
            this.AddPoint();
            for (let i = 0; i < e.barracksList.length; i++) {
                let a = Laya.Sprite3D.instantiate(j.LoaderPrefabs[e.barracksList[i].name], this.mPrefab, !1);
                a.active = !0,
                a.transform.localPosition = e.barracksList[i].pos.clone(),
                a.transform.localRotation = e.barracksList[i].rot.clone(),
                a.transform.localScale = e.barracksList[i].scale.clone();
                let s = a.addComponent(hi);
                s.flamingTroopsCtl = this,
                s.headquarters = t,
                this.barrackList.push(s)
            }
        }
        DispatchTroops(t) {
            if (this.soldierList.forEach(e =>{
                let i = Laya.Vector3.distance(this.soldierPanel[0].transform.position, t.land.transform.position),
                a = new Laya.Vector3(t.land.transform.position.x - this.soldierPanel[0].transform.position.x, e.GetPosition.y, t.land.transform.position.z - this.soldierPanel[0].transform.position.z);
                Laya.Vector3.normalize(a, a),
                e.enemyGather = new Laya.Vector3(e.GetPosition.x + a.x * i, e.GetPosition.y, e.GetPosition.z + a.z * i),
                e.Activate()
            }), this.soldierPointList.length > 0) for (let t = this.soldierList.length - 1; t >= 0; t--) {
                let e = this.soldierList.splice(t, 1)[0];
                this.attackList.push(e)
            }
        }
        AddPoint() {
            if (this.points[this.level - 1]) for (let t = 0; t < this.points[this.level - 1].length; t++) this.soldierPointList.push(this.points[this.level - 1][t])
        }
    }
    class ci extends Je {
        Sendtank() {
            if (this.ChangeBarrckValue( - this.lastBarrackProValue), this.isSoldMax || q.Instance.GetIsMaxSolider) return;
            q.Instance.lastSoliderNum += 1,
            Laya.stage.event(u.UPDATE_PLAYER);
            let t = $t.GetPoolPrefab(_.resourcesDataCfg.tank, j.LoaderPrefabs[_.resourcesDataCfg.tank], q.Instance.mainScene.GetScene);
            t.active = !0;
            let e = t.getComponent(he);
            e || (e = t.addComponent(he)),
            e.Reset(),
            e.gathering = null,
            e.tankBattalionCtl = this,
            e.SetCamp(this.camp),
            e.battleCamp = o.Tank,
            e.roleCamp = n.FightingUnit;
            let i = this.tankPointList[this.tankList.length];
            e.SetPosition = this.inPoint.transform.position,
            t.transform.rotationEuler = new Laya.Vector3(0, 180, 0),
            e.moveDisPatchPoint(i),
            this.tankList.push(e)
        }
        DispatchTroops(t) {
            if (this.tankList.forEach(e =>{
                let i = Laya.Vector3.distance(e.GetPosition, t.land.transform.position),
                a = new Laya.Vector3(t.land.transform.position.x - e.GetPosition.x, e.GetPosition.y, t.land.transform.position.z - e.GetPosition.z);
                Laya.Vector3.normalize(a, a),
                e.enemyGather = new Laya.Vector3(e.GetPosition.x + a.x * i, e.GetPosition.y, e.GetPosition.z + a.z * i),
                e.Activate()
            }), this.tankList.length > 0) for (let t = this.tankList.length - 1; t >= 0; t--) {
                let e = this.tankList.splice(t, 1)[0];
                this.attackList.push(e)
            }
        }
        UpdateObj() {
            if (super.UpdateObj(), this.tankList.length > 0) for (let t = this.tankList.length - 1; t >= 0; t--) this.tankList[t].UpdateObj();
            if (this.attackList.length > 0) for (let t = this.attackList.length - 1; t >= 0; t--) this.attackList[t].UpdateObj();
            return this.isUnlock && this.ChangeBarrckValue(this.barrackValueSpeed),
            this.tankList.length > 0
        }
    }
    class di extends Be {
        init(t, e, i) {
            let a = _.headquartersJsonData[t];
            super.init(a, e),
            this.instructPoint = $t.GetPoolPrefab(_.resourcesDataCfg.jindutiao, j.LoaderPrefabs[_.resourcesDataCfg.jindutiao], this.mPrefab),
            this.setTransform(this.instructPoint, a.jindutiao),
            this.box = new Vt(this.instructPoint.getChildByName("box")),
            this.proMat = this.instructPoint.getChildAt(0).meshRenderer.material.clone(),
            this.instructPoint.getChildAt(0).meshRenderer.material = this.proMat,
            this.charge = $t.GetPoolPrefab(_.resourcesDataCfg.charge, j.LoaderPrefabs[_.resourcesDataCfg.charge], this.mPrefab),
            this.setTransform(this.charge, a.charge);
            for (let t = 0; t < a.tankBattalionList.length; t++) {
                let e = new Laya.Sprite3D;
                e.active = !0,
                this.mPrefab.addChild(e),
                this.dispatchTroopsPush(_.resourcesDataCfg.jindutiao, a.tankBattalionList[t].jindutiao, e),
                this.dispatchTroopsPush(_.resourcesDataCfg.mingpai, a.tankBattalionList[t].mingpai, e),
                this.dispatchTroopsPush(_.resourcesDataCfg.number, a.tankBattalionList[t].number, e);
                for (let i = 0; i < a.tankBattalionList[t].tankejijieList.length; i++) this.dispatchTroopsPush(_.resourcesDataCfg.tanke_jijie, a.tankBattalionList[t].tankejijieList[i], e);
                let i = e.addComponent(ci);
                i.SetHead(this, a.tankBattalionList[t]),
                this.tankBattalionList.push(i)
            }
            for (let t = 0; t < a.dispatchTroopsList.length; t++) {
                let e = new Laya.Sprite3D;
                e.active = !0,
                this.mPrefab.addChild(e),
                this.dispatchTroopsPush(_.resourcesDataCfg.jindutiao, a.dispatchTroopsList[t].jindutiao, e),
                this.dispatchTroopsPush(_.resourcesDataCfg.shengji_1, a.dispatchTroopsList[t].shengji_1, e),
                this.dispatchTroopsPush(_.resourcesDataCfg.mingpai, a.dispatchTroopsList[t].mingpai, e),
                this.dispatchTroopsPush(_.resourcesDataCfg.number, a.dispatchTroopsList[t].number, e),
                this.dispatchTroopsPush(_.resourcesDataCfg.zhandian_2_5, a.dispatchTroopsList[t].zhandian_2_5, e),
                this.dispatchTroopsPush(_.resourcesDataCfg.zhandian_3_5, a.dispatchTroopsList[t].zhandian_3_5, e),
                this.dispatchTroopsPush(_.resourcesDataCfg.zhandian_4_5, a.dispatchTroopsList[t].zhandian_4_5, e);
                let i = e.addComponent(ri);
                i.SetHead(this, a.dispatchTroopsList[t]),
                this.dispatchTroopsCtlList.push(i)
            }
            for (let t = 0; t < a.stingoutBattalionList.length; t++) {
                let e = new Laya.Sprite3D;
                e.active = !0,
                this.mPrefab.addChild(e),
                this.dispatchTroopsPush(_.resourcesDataCfg.mod_ljxf_zhandian_penhuobing_2, a.stingoutBattalionList[t].mod_ljxf_zhandian_penhuobing_2, e),
                this.dispatchTroopsPush(_.resourcesDataCfg.mod_ljxf_zhandian_penhuobing_3, a.stingoutBattalionList[t].mod_ljxf_zhandian_penhuobing_3, e),
                this.dispatchTroopsPush(_.resourcesDataCfg.mod_ljxf_zhandian_penhuobing_4, a.stingoutBattalionList[t].mod_ljxf_zhandian_penhuobing_4, e);
                let i = e.addComponent(li);
                i.SetHead(this, a.stingoutBattalionList[t]),
                this.flamingTroopsCtlList.push(i)
            }
        }
        CollisionRole() { ! q.Instance.isAutoSolider && this.isDisPathch || super.CollisionRole()
        }
        selectEnemy() {
            let t = [],
            e = null;
            if (q.Instance.mainScene.GetMap.enemyGatheringList.length > 0) for (let e = q.Instance.mainScene.GetMap.enemyGatheringList.length - 1; e >= 0; e--) t.push(q.Instance.mainScene.GetMap.enemyGatheringList[e]);
            t.length > 0 && t.length > 1 && t.sort((t, e) =>{
                return Laya.Vector3.distanceSquared(this.GetPosition, t.land.transform.position) > Laya.Vector3.distanceSquared(this.GetPosition, e.land.transform.position) ? 1 : -1
            }),
            (e = t[0]) && (this.tankBattalionList.length > 0 && this.tankBattalionList.forEach(t =>{
                t.DispatchTroops(e)
            }), this.dispatchTroopsCtlList.length > 0 && this.dispatchTroopsCtlList.forEach(t =>{
                t.DispatchTroops(e)
            }), this.flamingTroopsCtlList.length > 0 && this.flamingTroopsCtlList.forEach(t =>{
                t.DispatchTroops(e)
            }), this.medicalTroopsCtlList.length > 0 && this.medicalTroopsCtlList.forEach(t =>{
                t.DispatchTroops(e)
            }))
        }
    }
    class mi extends Bt {
        constructor() {
            super(...arguments),
            this.roleMat = {
                player: null,
                enemy: null,
                buff: null,
                enemy2: null
            },
            this.officerMat = {
                player: null,
                enemy: null
            },
            this.tankMat = {
                player: null,
                enemy: null,
                buff: null,
                enemy2: null
            },
            this.flamMat = {
                player: null,
                enemy: null,
                buff: null,
                enemy2: null
            },
            this.circleMat = {
                node: null,
                guide: null
            },
            this.mingpaiMat = {
                yin: null,
                jin: null
            },
            this.kongtouMat = {
                none: null,
                video: null
            },
            this.eliteMat = {
                solider: null,
                flam: null
            },
            this.camp_carr_Mat = {
                mat_0: null,
                mat_1: null
            },
            this.campMat_Flam = {
                mat_0: null,
                mat_1: null
            },
            this.campMat_Tank = {
                mat_0: null,
                mat_1: null
            },
            this.zealotMat = {
            default:
                null,
                elite: null
            },
            this.eragonMat = {
            default:
                null,
                elite: null
            },
            this.beetleMat = {
            default:
                null,
                elite: null
            },
            this.landMatList = [],
            this.roleList = [],
            this.lastList = [],
            this.obsList = [],
            this.battleObsList = [],
            this.obsLineArray = [],
            this.headquartersList = [],
            this.enemyGatheringList = [],
            this.silverList = [],
            this.airdropList = [],
            this.jijiataiList = [],
            this.jijiaList = [],
            this.time = 0,
            this.locallevel = 2,
            this.airshipList = [],
            this.isVideo = !1,
            this.enyMainisLive = !0,
            this.isOver = !1
        }
        onAwake() {
            super.onAwake(),
            this.effect_Arrow = this.mPrefab.getChildByName("ZhiShi");
            let t = this.mPrefab.getChildByName("campMat");
            this.roleMat.player = t.meshRenderer.materials[0],
            this.roleMat.enemy = t.meshRenderer.materials[1],
            this.roleMat.buff = t.meshRenderer.materials[2],
            this.roleMat.enemy2 = t.meshRenderer.materials[3];
            let e = this.mPrefab.getChildByName("officerMat");
            this.officerMat.player = e.meshRenderer.materials[0],
            this.officerMat.enemy = e.meshRenderer.materials[1];
            let i = this.mPrefab.getChildByName("campMat_Carr");
            this.camp_carr_Mat.mat_0 = i.meshRenderer.materials[0],
            this.camp_carr_Mat.mat_1 = i.meshRenderer.materials[1];
            let a = this.mPrefab.getChildByName("campMat_Flam");
            this.campMat_Flam.mat_0 = a.meshRenderer.materials[0],
            this.campMat_Flam.mat_1 = a.meshRenderer.materials[1];
            let s = this.mPrefab.getChildByName("campMat_Tank");
            this.campMat_Tank.mat_0 = s.meshRenderer.materials[0],
            this.campMat_Tank.mat_1 = s.meshRenderer.materials[1],
            this.roleMat.buff._TillingX = 1,
            this.roleMat.buff._TillingY = 1;
            let n = this.mPrefab.getChildByName("circleMat");
            this.circleMat.node = n.meshRenderer.materials[0],
            this.circleMat.guide = n.meshRenderer.materials[1];
            let o = this.mPrefab.getChildByName("flamMat");
            this.flamMat.player = o.meshRenderer.materials[0],
            this.flamMat.enemy = o.meshRenderer.materials[1],
            this.flamMat.buff = o.meshRenderer.materials[2],
            this.flamMat.enemy2 = o.meshRenderer.materials[3],
            this.flamMat.buff._TillingX = 1,
            this.flamMat.buff._TillingY = 1;
            let r = this.mPrefab.getChildByName("eliteMat");
            this.eliteMat.solider = r.meshRenderer.materials[0],
            this.eliteMat.flam = r.meshRenderer.materials[1];
            let h = this.mPrefab.getChildByName("tankMat");
            this.tankMat.player = h.meshRenderer.materials[0],
            this.tankMat.enemy = h.meshRenderer.materials[1],
            this.tankMat.buff = h.meshRenderer.materials[2],
            this.tankMat.enemy2 = h.meshRenderer.materials[3],
            this.tankMat.buff._TillingX = 1,
            this.tankMat.buff._TillingY = 1;
            let l = this.mPrefab.getChildByName("mingpaiMat");
            this.mingpaiMat.yin = l.meshRenderer.materials[0],
            this.mingpaiMat.jin = l.meshRenderer.materials[1];
            let c = this.mPrefab.getChildByName("kongtouMat");
            this.kongtouMat.none = c.meshRenderer.materials[0],
            this.kongtouMat.video = c.meshRenderer.materials[1];
            let d = this.mPrefab.getChildByName("zealotMat");
            this.zealotMat.
        default = d.meshRenderer.materials[0],
            this.zealotMat.elite = d.meshRenderer.materials[1];
            let m = this.mPrefab.getChildByName("eragonMat");
            this.eragonMat.
        default = m.meshRenderer.materials[0],
            this.eragonMat.elite = m.meshRenderer.materials[1];
            let g = this.mPrefab.getChildByName("beetleMat");
            this.beetleMat.
        default = g.meshRenderer.materials[0],
            this.beetleMat.elite = g.meshRenderer.materials[1],
            this.effect_Arrow.active = !1,
            this.mPrefab.getChildByName("landMat").meshRenderer.materials.forEach(t =>{
                this.landMatList.push(t)
            }),
            this.arrow = this.mPrefab.getChildByName("arrows").addComponent(Ce)
        }
        onStart() {
            this.airdropTime = 50,
            this.lastAirdropTime = 0
        }
        CreatEny() {
            let t = null;
            if (V.starState == d.earth) t = _.levelJsonData[this.level];
            else if (V.starState == d.moon) t = _.levelMoonJsonData[this.level];
            else if (V.starState == d.battle) {
                t = _.levelBattleJsonData[this.locallevel],
                console.log("--------------Enermy地块生成", this.locallevel, t.enemyGatheringList);
                for (let e = 0; e < t.enemyGatheringList.length; e++) {
                    let i = new Ke(t.enemyGatheringList[e]);
                    this.enemyGatheringList.push(i),
                    q.Instance.maxLevelNum += t.enemyGatheringList[e].enemyList.length
                }
                return
            }
            for (let e = 0; e < t.enemyGatheringList.length; e++) {
                let i = new Le(t.enemyGatheringList[e]);
                this.enemyGatheringList.push(i),
                q.Instance.maxLevelNum += t.enemyGatheringList[e].enemyList.length
            }
        }
        CreateMap() {
            _.roleData = _.gkRoleData,
            _.architectureData = _.gkArchitectureData,
            _.elitesoldiersData = _.gkElitesoldiersData,
            this.obsLineArray.splice(0),
            V.starState = d.earth,
            q.Instance.mainScene.showEarth(),
            this.lastAirdropTime = 0,
            this.arrow.GetMainNode.active = !1;
            let t = V.curGameEarthLevel();
            t >= _.MaxEarthLevel ? this.level = (t - 10) % 5 + 10 - 1 : this.level = t - 1,
            V.isGMModel && null != q.Instance.lastLevelData || (q.Instance.lastLevelData = _.levelData[this.level]);
            let e = _.levelJsonData[this.level];
            q.Instance.mainScene.SetEarthLandMat(this.landMatList[q.Instance.lastLevelData.level_scene - 1]);
            for (let t = 0; t < e.obsList.length; t++) {
                let i = e.obsList[t],
                a = parseInt(i.name[6]),
                s = Laya.Sprite3D.instantiate(j.LoaderPrefabs["zhalan_" + a], q.Instance.mainScene.GetScene, !1),
                n = s.addComponent(se);
                s.transform.position = i.pos.clone(),
                s.transform.rotation = i.rot.clone(),
                this.obsList.push(n)
            }
            this.CommonMap(e)
        }
        MoonMap() {
            _.roleData = _.gkRoleData,
            _.architectureData = _.gkArchitectureData,
            _.elitesoldiersData = _.gkElitesoldiersData,
            q.Instance.mainScene.showMoon(),
            this.ClearMap(),
            this.lastAirdropTime = 0,
            this.arrow.GetMainNode.active = !1,
            V.curGameMoonLevel() % _.MaxMoonLevel != 0 ? this.level = V.curGameMoonLevel() % _.MaxMoonLevel - 1 : this.level = _.MaxMoonLevel - 1,
            V.isGMModel && null != q.Instance.lastLevelData || (q.Instance.lastLevelData = _.moonLevelData[this.level]);
            let t = _.levelMoonJsonData[this.level];
            q.Instance.mainScene.GetMoonLand(t.land),
            this.obsLineArray.splice(0);
            for (let e = 0; e < t.obsLineArray.length; e++) this.obsLineArray.push(t.obsLineArray[e]);
            this.CommonMap(t)
        }
        BattleMap() {
            V.starState = d.battle,
            _.roleData = _.dzRoleData,
            _.architectureData = _.dzArchitectureData,
            _.elitesoldiersData = _.dzElitesoldiersData,
            q.Instance.mainScene.showEarth(),
            q.Instance.mainScene.BuffParentScene(),
            q.Instance.UpdatePlayerBuff(),
            this.ClearMap(),
            this.lastAirdropTime = 0,
            this.arrow.GetMainNode.active = !1,
            V.curGameBattleLevel() % _.MaxBattleLevel != 0 ? this.level = V.curGameBattleLevel() % _.MaxBattleLevel - 1 : this.level = _.MaxBattleLevel - 1,
            V.isGMModel && null != q.Instance.lastLevelData || (q.Instance.lastLevelData = _.battleLevelData[this.level]),
            this.locallevel = 0;
            let t = _.levelBattleJsonData[this.locallevel];
            console.log("---------------curvlevel", t),
            this.obsList.splice(0);
            for (let e = 0; e < t.obsList.length; e++) {
                let i = t.obsList[e],
                a = parseInt(i.name[6]),
                s = Laya.Sprite3D.instantiate(j.LoaderPrefabs["zhalan_" + a], q.Instance.mainScene.GetScene, !1),
                n = s.addComponent(se);
                s.transform.position = i.pos.clone(),
                s.transform.rotation = i.rot.clone(),
                this.obsList.push(n)
            }
            this.obsLineArray.splice(0);
            for (let e = 0; e < t.obsLineArray.length; e++) this.obsLineArray.push(t.obsLineArray[e]);
            this.CommonBattleMap(t)
        }
        CommonMap(t) {
            let e = new Laya.Sprite3D("player");
            if (this.mPrefab.addChild(e), this.roleList.splice(0), null != this.playerCtl && (this.playerCtl.Remove(), this.playerCtl = null), this.playerCtl = e.addComponent(ae), this.playerStartPoint = t.playerPoint.clone(), this.playerCtl.SetPosition = t.playerPoint.clone(), this.playerCtl.capmIndex = 0, this.playerCtl.SetCamp(a.Player), this.playerCtl.roleCamp = n.Player, this.roleList.push(this.playerCtl), e.addChild(q.Instance.mainScene.buff), q.Instance.mainScene.buff.active = !0, q.Instance.mainScene.GetCamera.SetTarget = this.playerCtl.GetMainNode, V.curGameEarthLevel() > 2) {
                let e = $t.GetPoolPrefab(_.resourcesDataCfg.jijiazhantai, j.LoaderPrefabs[_.resourcesDataCfg.jijiazhantai], this.mPrefab);
                e.active = !0,
                e.transform.position = t.jijiazhantaiPoint.clone(),
                this.jijiataiList.push(e);
                let i = $t.GetPoolPrefab(_.resourcesDataCfg.jijia, j.LoaderPrefabs[_.resourcesDataCfg.jijia], this.mPrefab);
                i.active = !0,
                i.transform.position = t.jijiazhantaiPoint.clone();
                let a = i.getChildByName("jijia");
                a.active = !0,
                a.getComponent(Laya.Animator).play("hold", 0, 0),
                i.getChildByName("siwang").active = !1,
                this.jijiaList.push(i)
            }
            for (let e = 0; e < t.headquartersList.length; e++) {
                let i = t.headquartersList[e].id,
                a = new Laya.Sprite3D;
                this.mPrefab.addChild(a);
                let s = a.addComponent(di);
                s.init(i, t.headquartersList[e].pos),
                this.headquartersList.push(s),
                s.SetRole(this.playerCtl)
            }
            for (let e = 0; e < t.startMingpaiPointList.length; e++) {
                let i = t.startMingpaiPointList[e],
                a = q.Instance.lastLevelData.mingpai_start_amount[e] ? q.Instance.lastLevelData.mingpai_start_amount[e] : 0;
                for (let t = 0; t < a; t++) {
                    let e = this.CreateSilver(),
                    a = i.pos.clone();
                    a.y += e.size.height * t,
                    e.SetPosition = a,
                    e.SetRotation = i.rot,
                    e.GetMainNode.transform.localScale = new Laya.Vector3(1, 1, 1),
                    this.silverList.push(e)
                }
            }
        }
        CommonBattleMap(t) {
            this.enyMainisLive = !0,
            this.isOver = !1;
            let e = new Laya.Sprite3D("player");
            this.mPrefab.addChild(e),
            this.roleList.splice(0),
            null != this.playerCtl && (this.playerCtl.Remove(), this.playerCtl = null),
            this.playerCtl = e.addComponent(ve),
            this.playerStartPoint = t.playerPoint.clone(),
            this.playerCtl.SetPosition = t.playerPoint.clone(),
            this.playerCtl.capmIndex = 0,
            this.playerCtl.SetCamp(a.Player),
            this.playerCtl.roleCamp = n.Player,
            this.roleList.push(this.playerCtl),
            e.addChild(q.Instance.mainScene.buff),
            q.Instance.mainScene.buff.active = !0,
            q.Instance.mainScene.GetCamera.SetTarget = this.playerCtl.GetMainNode,
            tt.Instance.Init();
            for (let e = 0; e < t.roleList.length; e++) {
                let i = new Laya.Sprite3D("player");
                this.mPrefab.addChild(i);
                let s = i.addComponent(ni);
                s.SetPosition = t.roleList[e].pos,
                s.capmIndex = e + 1,
                s.SetCamp(a.Player),
                s.roleCamp = n.Player,
                this.roleList.push(s)
            }
            if (V.curGameEarthLevel() > 2) {
                let e = $t.GetPoolPrefab(_.resourcesDataCfg.jijiazhantai, j.LoaderPrefabs[_.resourcesDataCfg.jijiazhantai], this.mPrefab);
                e.active = !0,
                e.transform.position = t.jijiazhantaiPoint.clone(),
                this.jijiataiList.push(e);
                let i = $t.GetPoolPrefab(_.resourcesDataCfg.jijia, j.LoaderPrefabs[_.resourcesDataCfg.jijia], this.mPrefab);
                i.active = !0,
                i.transform.position = t.jijiazhantaiPoint.clone();
                let a = i.getChildByName("jijia");
                a.active = !0,
                a.getComponent(Laya.Animator).play("hold", 0, 0),
                i.getChildByName("siwang").active = !1,
                this.jijiaList.push(i)
            }
            console.log("-------------------headQuqaaaaaaaaa", t.headquartersList.length, t.headquartersList);
            for (let e = 0; e < t.headquartersList.length; e++) {
                let i = t.headquartersList[e].id,
                a = new Laya.Sprite3D;
                this.mPrefab.addChild(a);
                let s = a.addComponent(Ye);
                0 == e ? (s.init(i, t.headquartersList[e].pos, 0), s.SetRole(this.playerCtl)) : 1 == e ? (s.init(i, t.headquartersList[e].pos, e), s.SetRole(this.roleList[e]), this.roleList[e].myHeadquarters.push(s)) : s.init(i, t.headquartersList[e].pos, -1),
                this.headquartersList.push(s)
            }
            for (let e = 0; e < t.startMingpaiPointList.length; e++) {
                let i = t.startMingpaiPointList[e],
                a = q.Instance.lastLevelData.mingpai_start_amount[e] ? q.Instance.lastLevelData.mingpai_start_amount[e] : 0;
                for (let t = 0; t < a; t++) {
                    let e = this.CreateSilver(),
                    a = i.pos.clone();
                    a.y += e.size.height * t,
                    e.SetPosition = a,
                    e.SetRotation = i.rot,
                    e.GetMainNode.transform.localScale = new Laya.Vector3(1, 1, 1),
                    this.silverList.push(e)
                }
            }
        }
        CreateSilver(t = h.Silver) {
            let e = $t.GetPoolPrefab(_.resourcesDataCfg.mingpai, j.LoaderPrefabs[_.resourcesDataCfg.mingpai], this.mPrefab);
            e.active = !0;
            let i = e.addComponent(fe);
            return i.SetType = t,
            i
        }
        UpdateObj() {
            if (this.roleList.length > 0) for (let t = this.roleList.length - 1; t >= 0; t--) this.roleList[t].UpdateObj();
            if (this.lastList.length > 0) for (let t = this.lastList.length - 1; t >= 0; t--) this.lastList[t].UpdateObj();
            if (this.airdropList.length > 0) for (let t = this.airdropList.length - 1; t >= 0; t--) this.airdropList[t].UpdateObj();
            this.time += q.Instance.mainScene.delat;
            let t = zs.product.get("zs_video_delay_switch");
            if (this.jijiataiList.length > 0 && this.time > t) for (let t = 0; t < this.jijiataiList.length; t++) this.jijiataiIntersect(this.jijiataiList[t].transform.position);
            if (this.enemyGatheringList.length > 0) for (let t = this.enemyGatheringList.length - 1; t >= 0; t--) this.enemyGatheringList[t].UpdateObj();
            this.headquartersList.length > 0 && this.headquartersList.forEach(t =>{
                t.UpdateObj()
            });
            for (let t = 0; t < this.airshipList.length; t++) this.airshipList[t].UpdateObj();
            this.lastAirdropTime += q.Instance.mainScene.delat,
            (V.kongtouCOunt > 0 && V.kongtouNoN < V.kongtouCOunt || V.kongtouCOunt <= 0) && this.lastAirdropTime >= this.airdropTime && this.airdropList.length < 3 && this.CreateAirdrop()
        }
        CreateAirdrop() {
            this.lastAirdropTime = 0;
            let t = 0,
            e = 0;
            for (let i = this.airdropList.length - 1; i >= 0; i--) switch (this.airdropList[i].GetType) {
            case r.Normal:
                t += 1;
                break;
            case r.Video:
                Q.zs_airgift_switch && (e += 1)
            }
            if (t >= 1 && e >= 1) return;
            let i = this.playerCtl.GetPosition,
            a = i.x + 4 * Math.random() - 2,
            s = i.z + 4 * Math.random() - 2;
            if (this.obsLineArray.length > 0) {
                let t = {
                    x: a,
                    y: s
                };
                y.pointInPolygon(t, this.obsLineArray) && (i.x = a, i.z = s)
            } else i.x = a,
            i.z = s;
            let n = new Laya.Vector3(0, 360 * Math.random(), 0);
            V.kongtouNoN += 1;
            let o = $t.GetPoolPrefab(_.resourcesDataCfg.kongtou, j.LoaderPrefabs[_.resourcesDataCfg.kongtou], this.mPrefab);
            o.active = !0;
            let h,
            l = o.getComponent(ye);
            l || (l = o.addComponent(ye)),
            l.Reset(),
            h = e >= 2 ? r.Normal: t >= 2 ? r.Video: Math.random() <= .5 ? r.Normal: Q.zs_airgift_switch ? r.Video: r.Normal,
            l.SetType = h,
            l.SetRotate = n,
            l.SetPosition = i,
            l.Activate(),
            this.airdropList.push(l)
        }
        ClearEnemyGathering(t) {
            for (let e = this.enemyGatheringList.length - 1; e >= 0; e--) if (this.enemyGatheringList[e] == t) {
                let t = this.enemyGatheringList.splice(e, 1);
                t && t[0] && (t[0].Remove(), t[0] = null);
                break
            }
            this.enemyGatheringList.length <= 0 && (q.Instance.gameModle == m.battleGame || Laya.stage.event(u.GAME_END, [0]))
        }
        ClearMap() {
            for (let t = 1; t < this.roleList.length; t++) this.roleList[t].Remove();
            this.roleList.splice(0),
            this.ClearArrElement(this.lastList),
            this.ClearArrElement(this.airdropList),
            this.ClearArrElement(this.obsList),
            this.ClearArrElement(this.silverList),
            this.ClearArrElement(this.airshipList),
            this.recyclingJiJiaTai();
            let t = this.battleObsList.splice(0);
            for (let e = 0; e < t.length; e++) t[e] = null;
            for (; ! (this.headquartersList.length <= 0);) {
                this.headquartersList.pop().Remove()
            }
            for (; ! (this.enemyGatheringList.length <= 0);) {
                let t = this.enemyGatheringList.pop();
                t.Remove(),
                t = null
            }
            null != this.playerCtl && (this.playerCtl.Remove(), this.playerCtl = null)
        }
        ClearArrElement(t) {
            for (;;) {
                if (t.length <= 0) return;
                t.pop().Remove()
            }
        }
        callAirShip() {
            let t = $t.GetPoolPrefab(_.resourcesDataCfg.feichuan, j.LoaderPrefabs[_.resourcesDataCfg.feichuan], q.Instance.mainScene.GetScene);
            t.active = !0;
            let e = t.getComponent(_e);
            e || (e = t.addComponent(_e));
            let i = this.playerStartPoint.clone();
            i.y += 6;
            let a = i.clone();
            i.z -= 12,
            e.SetPosition = i,
            e.SetRotate = new Laya.Vector3(0, 0, 0),
            e.resetAirShip(a),
            e.headquarters = this.headquartersList,
            this.airshipList.push(e)
        }
        jijiataiIntersect(t) {
            this.isVideo ? Xt.IsDistances(t, this.playerCtl.GetPosition, 2) || (this.isVideo = !1) : (this.time = 0, Xt.IsDistances(t, this.playerCtl.GetPosition, 2) && (this.isVideo = !0, q.Instance.GamePause(), Laya.Scene.open(window.compUrl + "comp/jijia.scene", !1, null, Laya.Handler.create(this, t =>{
                var e = t.getComponent(st);
                e && (e.videoFunc = (t =>{
                    this.video(t)
                }), e.closeFunc = (() =>{
                    q.Instance.GameRegain()
                }))
            }))))
        }
        video(t) {
            u.trackEvent("观看获得机甲视频"),
            zs.platform.async.playVideo().then(e =>{
                e ? (u.trackEvent("观看获得机甲视频成功"), this.getJiJia(), q.Instance.GameRegain(), t && t()) : (u.trackEvent("观看获得机甲视频失败"), H.Instance.ShowTips(window.lang.watchVideoTip2), q.Instance.GameRegain())
            }).
            catch(() =>{
                u.trackEvent("无观看视频资源"),
                q.Instance.GameRegain()
            })
        }
        recyclingJiJiaTai() {
            for (; ! (this.jijiaList.length <= 0);) {
                let t = this.jijiaList.shift();
                $t.CollectObject(t.name, t)
            }
            for (; ! (this.jijiataiList.length <= 0);) {
                let t = this.jijiataiList.shift();
                $t.CollectObject(t.name, t)
            }
        }
        getJiJia() {
            this.isVideo = !1,
            this.recyclingJiJiaTai(),
            this.playerCtl.ChangeJiJia()
        }
        searchOther(t, e, i, s) {
            let n = [];
            if (t == a.Enermy) {
                for (let t = this.roleList.length - 1; t >= 0; t--) this.roleList[t].IsChoosable(e) && Xt.IsDistances(i, this.roleList[t].GetPosition, s) && n.push(this.roleList[t]);
                for (let t = 0; t < this.headquartersList.length; t++) {
                    for (let a = 0; a < this.headquartersList[t].dispatchTroopsCtlList.length; a++) if (this.headquartersList[t].dispatchTroopsCtlList[a].attackList.length > 0) for (let o = this.headquartersList[t].dispatchTroopsCtlList[a].attackList.length - 1; o >= 0; o--) this.headquartersList[t].dispatchTroopsCtlList[a].attackList[o].IsChoosable(e) && Xt.IsDistances(i, this.headquartersList[t].dispatchTroopsCtlList[a].attackList[o].GetPosition, s) && n.push(this.headquartersList[t].dispatchTroopsCtlList[a].attackList[o]);
                    for (let a = 0; a < this.headquartersList[t].flamingTroopsCtlList.length; a++) if (this.headquartersList[t].flamingTroopsCtlList[a].attackList.length > 0) for (let o = this.headquartersList[t].flamingTroopsCtlList[a].attackList.length - 1; o >= 0; o--) this.headquartersList[t].flamingTroopsCtlList[a].attackList[o].IsChoosable(e) && Xt.IsDistances(i, this.headquartersList[t].flamingTroopsCtlList[a].attackList[o].GetPosition, s) && n.push(this.headquartersList[t].flamingTroopsCtlList[a].attackList[o]);
                    for (let a = 0; a < this.headquartersList[t].tankBattalionList.length; a++) if (this.headquartersList[t].tankBattalionList[a].attackList.length > 0) for (let o = this.headquartersList[t].tankBattalionList[a].attackList.length - 1; o >= 0; o--) this.headquartersList[t].tankBattalionList[a].attackList[o].IsChoosable(e) && Xt.IsDistances(i, this.headquartersList[t].tankBattalionList[a].attackList[o].GetPosition, s) && n.push(this.headquartersList[t].tankBattalionList[a].attackList[o]);
                    for (let a = 0; a < this.headquartersList[t].medicalTroopsCtlList.length; a++) if (this.headquartersList[t].medicalTroopsCtlList[a].attackList.length > 0) for (let o = this.headquartersList[t].medicalTroopsCtlList[a].attackList.length - 1; o >= 0; o--) this.headquartersList[t].medicalTroopsCtlList[a].attackList[o].IsChoosable(e) && Xt.IsDistances(i, this.headquartersList[t].medicalTroopsCtlList[a].attackList[o].GetPosition, s) && n.push(this.headquartersList[t].medicalTroopsCtlList[a].attackList[o])
                }
            } else for (let t = this.enemyGatheringList.length - 1; t >= 0; t--) if (this.enemyGatheringList[t].enemyList.length > 0) for (let i = this.enemyGatheringList[t].enemyList.length - 1; i >= 0; i--) this.enemyGatheringList[t].enemyList[i].IsChoosable(e) && n.push(this.enemyGatheringList[t].enemyList[i]);
            return n
        }
        reSetAiHead() {
            for (let t = 0; t < this.roleList.length; t++) {
                this.roleList[t].myHeadquarters = []
            }
            for (let t = 0; t < this.headquartersList.length; t++) {
                let e = this.headquartersList[t];
                for (let t = 0; t < this.roleList.length; t++) {
                    let i = this.roleList[t];
                    e.theirRole && (i.capmIndex != e.theirRole.capmIndex || i.IsDie || this.roleList[t].myHeadquarters.push(e))
                }
            }
        }
        holeSoldList(t = -1) {
            let e = 0;
            if (t >= 0) for (let i = 0; i < this.headquartersList.length; i++) {
                let a = this.headquartersList[i];
                if (null != a.theirRole && t == a.theirRole.capmIndex) {
                    if (a.dispatchTroopsCtlList && a.dispatchTroopsCtlList.length > 0) for (let t = 0; t < a.dispatchTroopsCtlList.length; t++) e += a.dispatchTroopsCtlList[t].soldierList.length,
                    e += a.dispatchTroopsCtlList[t].attackList.length;
                    if (a.flamingTroopsCtlList && a.flamingTroopsCtlList.length > 0) for (let t = 0; t < a.flamingTroopsCtlList.length; t++) e += a.flamingTroopsCtlList[t].soldierList.length,
                    e += a.flamingTroopsCtlList[t].attackList.length;
                    if (a.tankBattalionList && a.tankBattalionList.length > 0) for (let t = 0; t < a.tankBattalionList.length; t++) e += a.tankBattalionList[t].tankList.length,
                    e += a.tankBattalionList[t].attackList.length
                }
            } else for (let t = 0; t < this.enemyGatheringList.length; t++) e += this.enemyGatheringList[t].enemyList.length;
            return e
        }
        holeSoldList_AtkList(t = -1) {
            let e = 0;
            if (t >= 0) for (let i = 0; i < this.headquartersList.length; i++) {
                let a = this.headquartersList[i];
                if (null != a.theirRole && t == a.theirRole.capmIndex) {
                    if (a.dispatchTroopsCtlList && a.dispatchTroopsCtlList.length > 0) for (let i = 0; i < a.dispatchTroopsCtlList.length; i++) a.dispatchTroopsCtlList[i].attackList.forEach(i =>{
                        i.capmIndex == t && e++
                    });
                    if (a.flamingTroopsCtlList && a.flamingTroopsCtlList.length > 0) for (let i = 0; i < a.flamingTroopsCtlList.length; i++) a.flamingTroopsCtlList[i].attackList.forEach(i =>{
                        i.capmIndex == t && e++
                    });
                    if (a.tankBattalionList && a.tankBattalionList.length > 0) for (let i = 0; i < a.tankBattalionList.length; i++) a.tankBattalionList[i].attackList.forEach(i =>{
                        i.capmIndex == t && e++
                    })
                }
            } else for (let t = 0; t < this.enemyGatheringList.length; t++) e += this.enemyGatheringList[t].enemyList.length;
            return e
        }
        battCountWinDeter() {
            if (1 != this.isOver) return console.log("*-----------------判断游戏Finish", this.holeSoldList(0), this.holeSoldList(1), 0 == this.enyMainisLive, this.roleList[1].IsDie),
            console.log("*-----------------判断游戏Finishxxx", this.holeSoldList(0), this.holeSoldList(1), 0 == this.enyMainisLive, this.roleList[1].IsDie),
            this.holeSoldList(0) <= 0 && this.roleList[0].IsDie ? (this.isOver = !0, void Laya.timer.frameOnce(60, this, () =>{
                Laya.stage.event(u.GAME_END, [1])
            })) : this.holeSoldList(1) <= 0 && (0 == this.enyMainisLive || this.roleList[1].IsDie) ? (this.isOver = !0, void Laya.timer.frameOnce(60, this, () =>{
                Laya.stage.event(u.GAME_END, [0])
            })) : void 0
        }
        battleWinDeter() {}
    }
    class gi extends Laya.Script3D {
        constructor() {
            super(...arguments),
            this.startPos = new Laya.Vector3,
            this.delat = .016,
            this.isStart = !1
        }
        get GetMap() {
            return this.mapCtl
        }
        get GetCamera() {
            return this.cameraCtl
        }
        get GetScene() {
            return this.scene
        }
        onAwake() {
            this.scene = this.owner,
            this.cameraCtl = this.scene.getChildByName("CameraNode").addComponent(Dt),
            this.earth = this.scene.getChildByName("earth"),
            this.moon = this.scene.getChildByName("moon"),
            this.mapCtl = this.scene.getChildByName("Map").addComponent(mi),
            this.lightNode = this.scene.getChildByName("Directional Light"),
            this.buff = this.scene.getChildByName("buff"),
            this.buffSize = p.GetBoundBoxSize(this.buff),
            p.EnableLightShadow(this.lightNode),
            this.EarthLand(),
            this.showEarth()
        }
        onEnable() {
            super.onEnable()
        }
        onDisable() {
            super.onDisable()
        }
        onUpdate() {
            this.isStart && (null != this.mapCtl && this.mapCtl.UpdateObj(), null != this.cameraCtl && this.cameraCtl.UpdateObj(), q.Instance.isRage && (q.Instance.lastRageTime -= q.Instance.mainScene.delat))
        }
        GameStart() {
            this.GetMap.roleList.forEach(t =>{
                t.isActiva = !0
            }),
            this.GetMap.enemyGatheringList.forEach(t =>{
                t.enemyList.forEach(t =>{
                    t.Activate()
                })
            }),
            this.GetMap.playerCtl.OpenMouseEvent(),
            this.cameraCtl.SetTarget = this.GetMap.playerCtl.GetMainNode
        }
        EarthLand() {
            let t = this.earth.getChildByName("land_1");
            this.size = p.GetBoundBoxSize(t.getChildAt(0)),
            this.startPos = new Laya.Vector3(t.transform.position.x + this.size.width / 2, this.mapCtl.GetPosition.y, t.transform.position.z + this.size.long / 2)
        }
        showEarth() {
            this.earth.active = !0,
            this.moon.active = !1,
            this.SetEarthScene()
        }
        showMoon() {
            console.log("--------"),
            this.earth.active = !1,
            this.moon.active = !0,
            this.BuffParentScene(),
            this.SetMoonScene()
        }
        GetMoonLand(t) {
            let e = this.moon.getChildByName("land"),
            i = null;
            for (let a = 0; a < e.numChildren; a++) {
                let s = e.getChildAt(a);
                s.active = s.name == t.name,
                s.name == t.name && (i = s)
            }
            null == i && (i = j.LoaderPrefabs[t.name], e.addChild(i)),
            i.transform.position = t.pos.clone(),
            i.transform.rotation = t.rot.clone()
        }
        GetBattleLand(t) {
            let e = this.moon.getChildByName("land"),
            i = null;
            for (let a = 0; a < e.numChildren; a++) {
                let s = e.getChildAt(a);
                s.active = s.name == t.name,
                s.name == t.name && (i = s)
            }
            null == i && (i = j.LoaderPrefabs[t.name], e.addChild(i)),
            i.transform.position = t.pos.clone(),
            i.transform.rotation = t.rot.clone()
        }
        SetEarthLandMat(t) {
            this.earth.getChildByName("land_1").getChildAt(0).meshRenderer.material = t
        }
        BuffParentScene() {
            this.scene.addChild(this.buff),
            this.buff.active = !1
        }
        SetEarthScene() {
            this.lightNode.transform.position = new Laya.Vector3(0, 3, 0),
            this.lightNode.transform.rotation = new Laya.Quaternion( - .3535534, .6123725, .3535534, .6123725),
            this.lightNode.color = new Laya.Vector3(.8392157, .7882353, .654902),
            this.scene.ambientColor = new Laya.Vector3(.5647059, .6235294, .7372549)
        }
        reSetRoleHead() {}
        SetMoonScene() {
            this.lightNode.transform.position = new Laya.Vector3(0, 3, 0),
            this.lightNode.transform.rotation = new Laya.Quaternion(.03233121, .8320231, .4681619, -.2958321),
            this.lightNode.color = new Laya.Vector3(1, 1, 1),
            this.scene.ambientColor = new Laya.Vector3(.3843137, .454902, .6313726)
        }
    } !
    function(t) {
        t.event_type = {
            active: "0",
            active_register: "1",
            active_pay: "2",
            game_addiction: "25",
            next_day_open: "6"
        },
        t.data = {
            token: "96B161F09BE79D5A6A66F3EBEA806281",
            url: ""
        },
        t.request = function(t) {};
        var e = 0,
        i = 8;
        function hex_sha1(t) {
            return binb2hex(core_sha1(str2binb(t), t.length * i))
        }
        function core_sha1(t, e) {
            t[e >> 5] |= 128 << 24 - e % 32,
            t[15 + (e + 64 >> 9 << 4)] = e;
            for (var i = Array(80), a = 1732584193, s = -271733879, n = -1732584194, o = 271733878, r = -1009589776, h = 0; h < t.length; h += 16) {
                for (var l = a,
                c = s,
                d = n,
                m = o,
                g = r,
                u = 0; u < 80; u++) {
                    i[u] = u < 16 ? t[h + u] : rol(i[u - 3] ^ i[u - 8] ^ i[u - 14] ^ i[u - 16], 1);
                    var p = safe_add(safe_add(rol(a, 5), sha1_ft(u, s, n, o)), safe_add(safe_add(r, i[u]), sha1_kt(u)));
                    r = o,
                    o = n,
                    n = rol(s, 30),
                    s = a,
                    a = p
                }
                a = safe_add(a, l),
                s = safe_add(s, c),
                n = safe_add(n, d),
                o = safe_add(o, m),
                r = safe_add(r, g)
            }
            return Array(a, s, n, o, r)
        }
        function sha1_ft(t, e, i, a) {
            return t < 20 ? e & i | ~e & a: t < 40 ? e ^ i ^ a: t < 60 ? e & i | e & a | i & a: e ^ i ^ a
        }
        function sha1_kt(t) {
            return t < 20 ? 1518500249 : t < 40 ? 1859775393 : t < 60 ? -1894007588 : -899497514
        }
        function safe_add(t, e) {
            var i = (65535 & t) + (65535 & e);
            return (t >> 16) + (e >> 16) + (i >> 16) << 16 | 65535 & i
        }
        function rol(t, e) {
            return t << e | t >>> 32 - e
        }
        function str2binb(t) {
            for (var e = Array(), a = (1 << i) - 1, s = 0; s < t.length * i; s += i) e[s >> 5] |= (t.charCodeAt(s / i) & a) << 24 - s % 32;
            return e
        }
        function binb2hex(t) {
            for (var i = e ? "0123456789ABCDEF": "0123456789abcdef", a = "", s = 0; s < 4 * t.length; s++) a += i.charAt(t[s >> 2] >> 8 * (3 - s % 4) + 4 & 15) + i.charAt(t[s >> 2] >> 8 * (3 - s % 4) & 15);
            return a
        }
        t.hex_sha1 = hex_sha1
    } (Rt || (Rt = {}));
    class ui extends Laya.Script {
        constructor() {
            super(),
            this.playNum = 0,
            this.init()
        }
        init() {
            return __awaiter(this, void 0, void 0,
            function * () {
                Laya.stage.on(Laya.Event.BLUR, this, this.onBlur),
                Laya.stage.on(Laya.Event.FOCUS, this, this.onFocus),
                zs.core.workflow = new Et,
                zs.core.onFGUIBind = zs.Handler.create(this, () =>{
                    It.bindAll()
                }),
                zs.core.workflow.setFSM(Et.GAME_HOME, (new zs.fsm).registe("START", "SHOP").registe("SHOP", "START").setDefault("START")),
                zs.core.addAppShow(Laya.Handler.create(this, () =>{
                    zs.core.workflow.state == Et.GAME_PLAY && "PLAY" == zs.core.workflow.childState && U.Instance.PlayBGM("BGM")
                })),
                zs.core.onPrepare = zs.Handler.create(this, () =>__awaiter(this, void 0, void 0,
                function * () {
                    V.loadData(zs.Handler.create(this, () =>__awaiter(this, void 0, void 0,
                    function * () {
                        this.loadConfigJson()
                    })))
                })),
                zs.core.onWorkflow(Et.GAME_HOME + ".START", zs.Handler.create(this, () =>{
                    Laya.stage.event(u.GAME_HOME),
                    console.log("Workflow ====== GAME_HOME"),
                    H.Instance.OpenView(H.Instance.homeUrl)
                })),
                zs.core.onWorkflow(Et.GAME_HOME + ".SHOP", zs.Handler.create(this, () =>{
                    console.log("Workflow ====== GAME_HOME")
                })),
                zs.core.onWorkflow(Et.GAME_PLAY, zs.Handler.create(this, () =>{
                    console.log("Workflow ===== GAME_PLAY"),
                    this.playNum++,
                    3 == this.playNum && Rt.request(Rt.event_type.game_addiction)
                })),
                zs.core.onWorkflow(Et.GAME_PLAY + ".START", zs.Handler.create(this, () =>{
                    console.log("Workflow ===== GAME_PLAY START"),
                    this.workflowChildNext()
                })),
                zs.core.onWorkflow(Et.GAME_PLAY + ".READY", zs.Handler.create(this, () =>{
                    console.log("Workflow ===== GAME_PLAY READY"),
                    q.Instance.gameModle == m.battleGame ? H.Instance.OpenView(H.Instance.GameUrl_Battle) : H.Instance.OpenView(H.Instance.GameUrl),
                    U.Instance.PlayBGM("BGM")
                })),
                zs.core.onWorkflow(Et.GAME_PLAY + ".PLAY", zs.Handler.create(this, () =>{
                    console.log("Workflow ===== GAME_PLAY PLAY"),
                    q.Instance.isPlaying = !0,
                    Laya.stage.event(u.GAME_START)
                })),
                zs.core.onWorkflow(Et.GAME_PLAY + ".SETTLE", zs.Handler.create(this, () =>{
                    console.log("Workflow ===== GAME_PLAY SETTLE")
                })),
                zs.core.onWorkflow(Et.GAME_PLAY + ".END", zs.Handler.create(this, () =>{
                    console.log("Workflow ===== GAME_PLAY END"),
                    console.log("-*--------------有Finish"),
                    q.Instance.isPlaying = !1
                })),
                zs.core.onWorkflow(Et.GAME_END, zs.Handler.create(this, () =>{
                    q.Instance.isPlaying = !1,
                    console.log("Workflow ====== GAME_END"),
                    q.Instance.isBackHome = !0,
                    q.Instance.mainScene.GetMap.ClearMap(),
                    zs.core.workflow.next()
                })),
                zs.core.init(Q)
            })
        }
        onBlur() {
            console.log("失去焦点"),
            Laya.stage.once(Laya.Event.MOUSE_DOWN, this, () =>{
                console.log("点击获得焦点"),
                window.focus()
            })
        }
        onFocus() {
            console.log("获得焦点")
        }
        workflowNext() {
            zs.core.workflow.next()
        }
        workflowChildNext() {
            zs.core.workflow.childNext()
        }
        loadResources() {
            let t = [],
            e = V.level > _.resourcesLevelMax ? _.resourcesJsonData[_.resourcesLevelMax] : _.resourcesJsonData[V.level];
            for (let i = 0; i < e.length; i++) t.push(e[i]);
            Laya.loader.create(t, Laya.Handler.create(this, () =>{
                j.initLoaderSprite3D(e),
                Laya.Scene3D.load(j.LocalUrl + "MainScene.ls", Laya.Handler.create(this, t =>{
                    q.Instance.mainScene = Laya.stage.addChildAt(t, 0).addComponent(gi),
                    Laya.loader.load("config/gameDataCfg.json", Laya.Handler.create(this, () =>{
                        _.init();
                        zs.network.config(!1, null, "gamecfg", zs.NetworkMode.Sync).then(t =>{
                            if (t) {
                                let e = t.gamecfg;
                                _.leveDataCfg = JSON.parse(e[0].config_item),
                                _.gkRoleDataCfg = JSON.parse(e[1].config_item),
                                _.gkArchitectureDataCfg = JSON.parse(e[2].config_item),
                                _.unlockDataCfg = JSON.parse(e[3].config_item),
                                _.gradeDataCfg = JSON.parse(e[4].config_item),
                                _.airshipDataCfg = JSON.parse(e[5].config_item),
                                _.daodanDataCfg = JSON.parse(e[6].config_item),
                                _.gkElitesoldiersCfg = JSON.parse(e[7].config_item),
                                _.moonLevelCfg = JSON.parse(e[8].config_item),
                                _.battleLevelCfg = JSON.parse(e[9].config_item),
                                _.dzRoleDataCfg = JSON.parse(e[10].config_item),
                                _.dzArchitectureDataCfg = JSON.parse(e[11].config_item),
                                _.dzElitesoldiersCfg = JSON.parse(e[12].config_item),
                                _.battleconfig = JSON.parse(e[13].config_item)
                            }
                            this.postGamecfg()
                        }).
                        catch(t =>{
                            this.postGamecfg()
                        })
                    }))
                }))
            }))
        }
        postGamecfg() {
            _.SetData(),
            j.init(),
            V.init(),
            q.Instance.Init(),
            zs.core.readyFinish(),
            Rt.request(Rt.event_type.active)
        }
        loadConfigJson() {
            return __awaiter(this, void 0, void 0,
            function * () {
                let t = yield zs.resource.load("config/resources.json");
                if (t) {
                    let e = [];
                    _.resourcesLevelMax = t.length - 1;
                    for (let i = 0; i < t.length; i++) {
                        let a = t[i],
                        s = [];
                        for (const t in a) if (Object.prototype.hasOwnProperty.call(a, t)) {
                            let n = j.LocalUrl + a[t] + ".lh";
                            i <= V.level ? e.push(n) : s.push(n),
                            _.resourcesDataCfg[t] = a[t]
                        }
                        i == V.level || i == t.length - 1 && i < V.level ? _.resourcesJsonData.push(e) : _.resourcesJsonData.push(s)
                    }
                    this.loadResources()
                } else console.log("loading加载资源居然没有....世界第一奇观？？？？？？？？？");
                if (t = yield zs.resource.load("config/resourcesSub.json")) for (let e = 0; e < t.length; e++) {
                    let i = t[e],
                    a = [];
                    for (const t in i) Object.prototype.hasOwnProperty.call(i, t) && (a.push(i[t]), _.resourcesDataCfg[t] = i[t]);
                    _.resourcesSubJsonData.push(a)
                }
                let e = yield zs.resource.load("config/level.json");
                if (e) {
                    let t = e.levelList;
                    if (t) {
                        for (let e = 0; e < t.length; e++) {
                            let i = t[e],
                            a = new E(i);
                            _.levelJsonData.push(a)
                        }
                        _.MaxEarthLevel = _.levelJsonData.length
                    }
                }
                if (e = yield zs.resource.load("config/levelMoon.json")) {
                    let t = e.levelList;
                    if (t) {
                        for (let e = 0; e < t.length; e++) {
                            let i = t[e],
                            a = new E(i);
                            _.levelMoonJsonData.push(a)
                        }
                        _.MaxMoonLevel = _.levelMoonJsonData.length
                    }
                }
                if (e = yield zs.resource.load("config/battleLevelJson.json")) {
                    let t = e.levelList;
                    if (t) {
                        for (let e = 0; e < t.length; e++) {
                            let i = t[e],
                            a = new E(i);
                            _.levelBattleJsonData.push(a)
                        }
                        _.MaxBattleLevel = _.levelBattleJsonData.length
                    }
                }
                let i = yield zs.resource.load("config/headquarters.json");
                if (i) {
                    let t = i.headquartersList;
                    if (t) {
                        for (let e = 0; e < t.length; e++) {
                            let i = t[e],
                            a = new O(i);
                            _.headquartersJsonData[a.id] = a
                        }
                        console.log("aaaa --- ", _.headquartersJsonData)
                    }
                }
                if (t = yield zs.resource.load("config/resourcesMoon.json")) {
                    _.resourcesMoonLevelMax = t.length - 1;
                    for (let e = 0; e < t.length; e++) {
                        let i = t[e],
                        a = [];
                        for (const t in i) if (Object.prototype.hasOwnProperty.call(i, t)) {
                            let e = i[t];
                            a.push(e),
                            _.resourcesDataCfg[t] = i[t]
                        }
                        _.resourcesMoonJsonData.push(a)
                    }
                }
                if (t = yield zs.resource.load("config/resourceBattle.json")) for (let e = 0; e < t.length; e++) {
                    let i = t[e];
                    for (const t in i) Object.prototype.hasOwnProperty.call(i, t) && _.resourcesBattleJsonData.push(i[t])
                }
            })
        }
    }
    var pi = '#if defined(GL_FRAGMENT_PRECISION_HIGH)\r\n\tprecision highp float;\r\n\tprecision highp int;\r\n#else\r\n\tprecision mediump float;\r\n\tprecision mediump int;\r\n#endif\r\n\r\n#include "Lighting.glsl";\r\n#include "Shadow.glsl"\r\n\r\nuniform vec4 u_DiffuseColor;\r\nuniform vec4 u_SpecularColor;\r\nuniform vec4 u_RimColor;\r\nuniform float u_Contrast;\r\nuniform float u_Specular;\r\nuniform float u_SpecularSmooth;\r\nuniform float u_RimPower;\r\n\r\n#if defined(EMISSIONMAP) || defined(FOGMAP)\r\n\tuniform float u_Time;\r\n#endif\r\n\r\n#if defined(COLOR)\r\n\tvarying vec4 v_Color;\r\n#endif\r\n\r\n#ifdef DIFFUSEMAP\r\n    uniform sampler2D u_DiffuseTexture;\r\n#endif\r\n\r\n#ifdef MASKMAP\r\n\tuniform sampler2D u_MaskTexture;\r\n#endif\r\n\r\n#ifdef EMISSIONMAP\r\n    uniform sampler2D u_EmissionTexture;\r\n    uniform float u_EmissionDirectionX;\r\n\tuniform float u_EmissionDirectionY;\r\n    uniform float u_EmissionPower;\r\n    uniform vec4 u_EmissionColor;\r\n#endif\r\n\r\nvarying vec2 v_Texcoord0;\r\nvarying vec3 v_Normal;\r\n#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\tvarying vec3 v_ViewDir; \r\n\r\n\tuniform vec3 u_MaterialSpecular;\r\n\tuniform float u_Shininess;\r\n\r\n\t#ifdef LEGACYSINGLELIGHTING\r\n\t\t#ifdef DIRECTIONLIGHT\r\n\t\t\tuniform DirectionLight u_DirectionLight;\r\n\t\t#endif\r\n\t\t#ifdef POINTLIGHT\r\n\t\t\tuniform PointLight u_PointLight;\r\n\t\t#endif\r\n\t\t#ifdef SPOTLIGHT\r\n\t\t\tuniform SpotLight u_SpotLight;\r\n\t\t#endif\r\n\t#else\r\n\t\tuniform mat4 u_View;\r\n\t\tuniform vec4 u_ProjectionParams;\r\n\t\tuniform vec4 u_Viewport;\r\n\t\tuniform int u_DirationLightCount;\r\n\t\tuniform DirectionLight u_SunLight;\r\n\t\tuniform sampler2D u_LightBuffer;\r\n\t\tuniform sampler2D u_LightClusterBuffer;\r\n\t#endif\r\n#endif\r\n\r\n#ifdef NORMALMAP \r\n\tuniform sampler2D u_NormalTexture;\r\n\tvarying vec3 v_Tangent;\r\n\tvarying vec3 v_Binormal;\r\n#endif\r\n\r\nuniform float u_TillingX;\r\nuniform float u_TillingY;\r\nuniform float u_OffsetX;\r\nuniform float u_OffsetY;\r\n\r\n#ifdef FOGMAP\r\n    uniform sampler2D u_FogTexture;\r\n    uniform float u_FogDirectionX;\r\n    uniform float u_FogDirectionY;\r\n    uniform float u_FogMapScale;\r\n    uniform float u_FogPower;\r\n    uniform vec4 u_FogColor;\r\n    uniform float u_FogStart;\r\n    uniform float u_FogRange;\r\n\tuniform vec4 u_FadeFogColor;\r\n\tuniform vec4 u_FadeHeightFogColor;\r\n\tuniform float u_FadeFogNear;\r\n\tuniform float u_FadeFogFar;\r\n\tuniform float u_HeightFogPower;\r\n\tuniform float u_HeightFogStart;\r\n\tuniform float u_HeightFogRange;\r\n#endif\r\n\r\n\r\nvarying vec3 v_PositionWorld;\r\n#include "GlobalIllumination.glsl";//"GlobalIllumination.glsl use uniform should at front of this\r\n\r\n#if defined(CALCULATE_SHADOWS)&&!defined(SHADOW_CASCADE)\r\n\tvarying vec4 v_ShadowCoord;\r\n#endif\r\n\r\nvoid main() {\r\n    vec4 baseColor = u_DiffuseColor;\r\n\tvec2 uv = TransformUV(v_Texcoord0, vec4(u_TillingX, u_TillingY, u_OffsetX, u_OffsetY));\r\n    #ifdef DIFFUSEMAP\r\n\t\tvec4 difTexColor=texture2D(u_DiffuseTexture, uv);\r\n\t\tbaseColor=baseColor*difTexColor;\r\n\t#endif\r\n\r\n    vec3 normal;//light and SH maybe use normal\r\n\t#if defined(NORMALMAP)\r\n\t\tvec3 normalMapSample = texture2D(u_NormalTexture, uv).rgb;\r\n\t\tnormal = normalize(NormalSampleToWorldSpace(normalMapSample, v_Normal, v_Tangent,v_Binormal));\r\n\t#else\r\n\t\tnormal = normalize(v_Normal);\r\n\t#endif\r\n\r\n    LayaGIInput giInput;\r\n\tvec3 globalDiffuse=layaGIBase(giInput,1.0,normal);\r\n\r\n    vec3 lightDir;\r\n    vec3 lightColor;\r\n    #if defined(DIRECTIONLIGHT)\r\n       #if defined(LEGACYSINGLELIGHTING)\r\n         lightDir = u_DirectionLight.direction;\r\n         lightColor = u_DirectionLight.color;\r\n       #else\r\n         lightDir = u_SunLight.direction;\r\n         lightColor = u_SunLight.color;\r\n       #endif\r\n    #else\r\n       lightDir = normalize(vec3(1.0, 1.0, 1.0));\r\n       lightColor = vec3(1.0, 1.0, 1.0);\r\n    #endif\r\n    lightDir = -lightDir;\r\n\r\n    vec3 viewDir;\r\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\t\tviewDir = normalize(v_ViewDir);\r\n\t#else\r\n\t\tviewDir = normalize(vec3(1.0, 1.0, 1.0));\r\n\t#endif\r\n\r\n\tvec3 halfDir = normalize(lightDir + viewDir);\r\n\r\n    float ndl = max(0.001, dot(normal, lightDir));\r\n\tfloat ndh = max(0.001, dot(normal, halfDir));\r\n\tfloat ndv = max(0.001, dot(normal, viewDir));\r\n\r\n    float diff = ndl * u_Contrast + (1.0 - u_Contrast);\r\n    float spec = pow(ndh, u_Specular * 128.0);\r\n\tspec = smoothstep(0.5 - u_SpecularSmooth * 0.5, 0.5 + u_SpecularSmooth * 0.5, spec);\r\n\r\n\tvec4 maskCol = vec4(1.0, 1.0, 1.0, 1.0);\r\n\t#ifdef MASKMAP\r\n\t\tmaskCol = texture2D(u_MaskTexture, v_Texcoord0);\r\n\t#endif\r\n\r\n    vec3 specular =  u_SpecularColor.rgb * spec * maskCol.r;\r\n\r\n    float rim = (1.0 - ndv) * ndl;\r\n    vec3 rimColor = u_RimColor.rgb * u_RimPower * rim;\r\n\r\n\tvec3 emission = vec3(0.0, 0.0, 0.0);\r\n\t#ifdef EMISSIONMAP\r\n\t\tvec4 emissionCol = texture2D(u_EmissionTexture, v_Texcoord0);\r\n\t\t#ifdef MASKMAP\r\n\t\t\tvec4 emissionOffsetCol = texture2D(u_MaskTexture, v_Texcoord0 + vec2(u_EmissionDirectionX, u_EmissionDirectionY) * u_Time * 0.05);\r\n\t\t\temission = emissionCol.rgb * u_EmissionPower * emissionOffsetCol.g;\r\n\t\t\temission = mix(emission, emission * u_EmissionColor.rgb,  maskCol.b);\r\n\t\t#else\r\n\t\t\temission = emissionCol.rgb * u_EmissionColor.rgb * u_EmissionPower;\r\n\t\t#endif\r\n\t#endif\r\n\r\n\tfloat atten = 1.0;\r\n\r\n\t#ifdef LEGACYSINGLELIGHTING\r\n\t\t#ifdef DIRECTIONLIGHT\r\n\t\t\t#ifdef CALCULATE_SHADOWS\r\n\t\t\t\t#ifdef SHADOW_CASCADE\r\n\t\t\t\t\tvec4 shadowCoord = getShadowCoord(vec4(v_PositionWorld,1.0));\r\n\t\t\t\t#else\r\n\t\t\t\t\tvec4 shadowCoord = v_ShadowCoord;\r\n\t\t\t\t#endif\r\n\t\t\t\tatten=sampleShadowmap(shadowCoord);\r\n\t\t\t#endif\r\n\t\t#endif\r\n\t#else\r\n\t\t#ifdef DIRECTIONLIGHT\r\n\t\t\tfor (int i = 0; i < MAX_LIGHT_COUNT; i++) \r\n\t\t\t{\r\n\t\t\t\tif(i >= u_DirationLightCount)\r\n\t\t\t\t\tbreak;\r\n\t\t\t\tDirectionLight directionLight = getDirectionLight(u_LightBuffer,i);\r\n\t\t\t\t#ifdef CALCULATE_SHADOWS\r\n\t\t\t\t\tif(i == 0)\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\t#ifdef SHADOW_CASCADE\r\n\t\t\t\t\t\t\tvec4 shadowCoord = getShadowCoord(vec4(v_PositionWorld,1.0));\r\n\t\t\t\t\t\t#else\r\n\t\t\t\t\t\t\tvec4 shadowCoord = v_ShadowCoord;\r\n\t\t\t\t\t\t#endif\r\n\t\t\t\t\t\tatten *= sampleShadowmap(shadowCoord);\r\n\t\t\t\t\t}\r\n\t\t\t\t#endif\r\n\t\t\t}\r\n\t\t#endif\r\n\t#endif\r\n\r\n    vec3 finalCol = (baseColor.rgb * lightColor + rimColor) * diff + specular + emission;\r\n\tfinalCol = finalCol + globalDiffuse * baseColor.rgb * lightColor;\r\n\t#if defined(COLOR)\r\n\t\tfinalCol = finalCol * v_Color.rgb;\r\n\t#endif\r\n\tfinalCol = finalCol * atten;\r\n\r\n\t#ifdef FOGMAP\r\n\t\tfloat fogCoord = 1.0 - (1.0/gl_FragCoord.w-u_FogStart)/u_FogRange;\r\n\r\n\t\tvec2 worldUV = v_PositionWorld.xz / u_FogMapScale;\r\n\t\tvec4 fogHeightColor = texture2D(u_FogTexture, worldUV + vec2(-u_FogDirectionX, u_FogDirectionY) * u_Time * 0.05);\r\n\r\n\t\tfloat fogDis = max(u_HeightFogRange, 0.01) * fogHeightColor.r;\r\n\t\tfloat hFogLerp = (v_PositionWorld.y - u_HeightFogStart) / fogDis;\r\n\t\thFogLerp = mix(fogHeightColor.g * (1.0 - u_HeightFogPower), 1.0, clamp(hFogLerp, 0.0, 1.0));\r\n\r\n\t\tfloat fadeFogDis = max(u_FadeFogFar - u_FadeFogNear, 0.01);\r\n\t\tfloat fadeFogLerp = clamp((1.0/gl_FragCoord.w - u_FadeFogNear) / fadeFogDis, 0.0, 1.0);\r\n\r\n\t\tvec4 fogColor = mix(u_FogColor, u_FadeHeightFogColor, clamp(fogCoord, 0.0, 1.0));\r\n\t\tfogCoord = hFogLerp * (1.0 - fadeFogLerp) + fogCoord * fadeFogLerp;\r\n\t\tfogColor = mix(fogColor, u_FadeFogColor, clamp(fogCoord, 0.0, 1.0));\r\n\r\n\t\tfinalCol = mix(mix(finalCol,  fogColor.rgb, u_FogPower), finalCol, clamp(fogCoord, 0.0, 1.0));\r\n\t#endif\r\n\r\n\tgl_FragColor = vec4(finalCol, 1.0);\r\n}',
    Li = '#include "Lighting.glsl";\r\n#include "Shadow.glsl";\r\n\r\nattribute vec4 a_Position;\r\n\r\n#ifdef GPU_INSTANCE\r\n\tuniform mat4 u_ViewProjection;\r\n#else\r\n\tuniform mat4 u_MvpMatrix;\r\n#endif\r\n\r\nattribute vec2 a_Texcoord0;\r\nvarying vec2 v_Texcoord0;\r\n\r\n#ifdef COLOR\r\n\tattribute vec4 a_Color;\r\n\tvarying vec4 v_Color;\r\n#endif\r\n\r\n#ifdef BONE\r\n\tconst int c_MaxBoneCount = 24;\r\n\tattribute vec4 a_BoneIndices;\r\n\tattribute vec4 a_BoneWeights;\r\n\tuniform mat4 u_Bones[c_MaxBoneCount];\r\n#endif\r\n\r\nattribute vec3 a_Normal;\r\nvarying vec3 v_Normal; \r\n\r\n#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\tuniform vec3 u_CameraPos;\r\n\tvarying vec3 v_ViewDir; \r\n#endif\r\n\r\n#if defined(NORMALMAP)\r\n\tattribute vec4 a_Tangent0;\r\n\tvarying vec3 v_Tangent;\r\n\tvarying vec3 v_Binormal;\r\n#endif\r\n\r\n#ifdef GPU_INSTANCE\r\n\tattribute mat4 a_WorldMat;\r\n#else\r\n\tuniform mat4 u_WorldMat;\r\n#endif\r\n\r\nvarying vec3 v_PositionWorld;\r\n\r\n// #if defined(CALCULATE_SHADOWS)&&!defined(SHADOW_CASCADE)\r\n// \tvarying vec4 v_ShadowCoord;\r\n// #endif\r\n\r\n// #ifdef CALCULATE_SPOTSHADOWS\r\n// \tvarying vec4 v_SpotShadowCoord;\r\n// #endif\r\n\r\n\r\n#ifdef TILINGOFFSET\r\n\tuniform vec4 u_TilingOffset;\r\n#endif\r\n\r\n#ifdef SIMPLEBONE\r\n\t#ifdef GPU_INSTANCE\r\n\t\tattribute vec4 a_SimpleTextureParams;\r\n\t#else\r\n\t\tuniform vec4 u_SimpleAnimatorParams;\r\n\t#endif\r\n\tuniform sampler2D u_SimpleAnimatorTexture;\r\n\r\n\tuniform float u_SimpleAnimatorTextureSize; \r\n#endif\r\n\r\n\r\n#ifdef SIMPLEBONE\r\nmat4 loadMatFromTexture(float FramePos,int boneIndices,float offset)\r\n{\r\n\tvec2 uv;\r\n\tfloat PixelPos = FramePos+float(boneIndices)*4.0;\r\n\tfloat halfOffset = offset * 0.5;\r\n\tfloat uvoffset = PixelPos/u_SimpleAnimatorTextureSize;\r\n\tuv.y = floor(uvoffset)*offset+halfOffset;\r\n\tuv.x = mod(float(PixelPos),u_SimpleAnimatorTextureSize)*offset+halfOffset;\r\n\tvec4 mat0row = texture2D(u_SimpleAnimatorTexture,uv);\r\n\tuv.x+=offset;\r\n\tvec4 mat1row = texture2D(u_SimpleAnimatorTexture,uv);\r\n\tuv.x+=offset;\r\n\tvec4 mat2row = texture2D(u_SimpleAnimatorTexture,uv);\r\n\tuv.x+=offset;\r\n\tvec4 mat3row = texture2D(u_SimpleAnimatorTexture,uv);\r\n\tmat4 m =mat4(mat0row.x,mat0row.y,mat0row.z,mat0row.w,\r\n\t\t\t  mat1row.x,mat1row.y,mat1row.z,mat1row.w,\r\n\t\t\t  mat2row.x,mat2row.y,mat2row.z,mat2row.w,\r\n\t\t\t  mat3row.x,mat3row.y,mat3row.z,mat3row.w);\r\n\treturn m;\r\n}\r\n#endif\r\n\r\nvoid main()\r\n{\r\n\tvec4 position;\r\n\t#ifdef BONE\r\n\t\tmat4 skinTransform;\r\n\t \t#ifdef SIMPLEBONE\r\n\t\t\tfloat currentPixelPos;\r\n\t\t\t#ifdef GPU_INSTANCE\r\n\t\t\t\tcurrentPixelPos = a_SimpleTextureParams.x+a_SimpleTextureParams.y;\r\n\t\t\t#else\r\n\t\t\t\tcurrentPixelPos = u_SimpleAnimatorParams.x+u_SimpleAnimatorParams.y;\r\n\t\t\t#endif\r\n\t\t\tfloat offset = 1.0/u_SimpleAnimatorTextureSize;\r\n\t\t\tskinTransform =  loadMatFromTexture(currentPixelPos,int(a_BoneIndices.x),offset) * a_BoneWeights.x;\r\n\t\t\tskinTransform += loadMatFromTexture(currentPixelPos,int(a_BoneIndices.y),offset) * a_BoneWeights.y;\r\n\t\t\tskinTransform += loadMatFromTexture(currentPixelPos,int(a_BoneIndices.z),offset) * a_BoneWeights.z;\r\n\t\t\tskinTransform += loadMatFromTexture(currentPixelPos,int(a_BoneIndices.w),offset) * a_BoneWeights.w;\r\n\t\t#else\r\n\t\t\tskinTransform =  u_Bones[int(a_BoneIndices.x)] * a_BoneWeights.x;\r\n\t\t\tskinTransform += u_Bones[int(a_BoneIndices.y)] * a_BoneWeights.y;\r\n\t\t\tskinTransform += u_Bones[int(a_BoneIndices.z)] * a_BoneWeights.z;\r\n\t\t\tskinTransform += u_Bones[int(a_BoneIndices.w)] * a_BoneWeights.w;\r\n\t\t#endif\r\n\t\tposition=skinTransform*a_Position;\r\n\t #else\r\n\t\tposition=a_Position;\r\n\t#endif\r\n\t\r\n\tmat4 worldMat;\r\n\t#ifdef GPU_INSTANCE\r\n\t\tworldMat = a_WorldMat;\r\n\t#else\r\n\t\tworldMat = u_WorldMat;\r\n\t#endif\r\n\r\n\t#ifdef GPU_INSTANCE\r\n\t\tgl_Position = u_ViewProjection * worldMat * position;\r\n\t#else\r\n\t\tgl_Position = u_MvpMatrix * position;\r\n\t#endif\r\n\r\n\tmat3 worldInvMat;\r\n\t#ifdef BONE\r\n\t\tworldInvMat=INVERSE_MAT(mat3(worldMat*skinTransform));\r\n\t#else\r\n\t\tworldInvMat=INVERSE_MAT(mat3(worldMat));\r\n\t#endif  \r\n\tv_Normal=normalize(a_Normal*worldInvMat);\r\n\t#if defined(NORMALMAP)\r\n\t\tv_Tangent=normalize(a_Tangent0.xyz*worldInvMat);\r\n\t\tv_Binormal=cross(v_Normal,v_Tangent)*a_Tangent0.w;\r\n\t#endif\r\n\r\n\tvec3 positionWS=(worldMat*position).xyz;\r\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\t\tv_ViewDir = u_CameraPos-positionWS;\r\n\t#endif\r\n\tv_PositionWorld = positionWS;\r\n\r\n\tv_Texcoord0=a_Texcoord0;\r\n\r\n\t#if defined(COLOR)&&defined(ENABLEVERTEXCOLOR)\r\n\t\tv_Color=a_Color;\r\n\t#endif\r\n\r\n\t// #if defined(CALCULATE_SHADOWS)&&!defined(SHADOW_CASCADE)\r\n\t// \tv_ShadowCoord =getShadowCoord(vec4(positionWS,1.0));\r\n\t// #endif\r\n\r\n\t// #ifdef CALCULATE_SPOTSHADOWS\r\n\t// \tv_SpotShadowCoord = u_SpotViewProjectMatrix*vec4(positionWS,1.0);\r\n\t// #endif\r\n\r\n\tgl_Position=remapGLPositionZ(gl_Position);\r\n}',
    fi = Laya.Shader3D,
    Ci = Laya.SubShader,
    yi = Laya.VertexMesh;
    class _i {
        static init() {
            var t = {
                a_Position: yi.MESH_POSITION0,
                a_Color: yi.MESH_COLOR0,
                a_Normal: yi.MESH_NORMAL0,
                a_Texcoord0: yi.MESH_TEXTURECOORDINATE0,
                a_Texcoord1: yi.MESH_TEXTURECOORDINATE1,
                a_BoneWeights: yi.MESH_BLENDWEIGHT0,
                a_BoneIndices: yi.MESH_BLENDINDICES0,
                a_Tangent0: yi.MESH_TANGENT0,
                a_WorldMat: yi.MESH_WORLDMATRIX_ROW0,
                a_SimpleTextureParams: yi.MESH_SIMPLEANIMATOR
            },
            e = {
                u_Bones: fi.PERIOD_CUSTOM,
                u_WorldMat: fi.PERIOD_SPRITE,
                u_MvpMatrix: fi.PERIOD_SPRITE,
                u_Projection: fi.PERIOD_CAMERA,
                u_LightmapScaleOffset: fi.PERIOD_SPRITE,
                u_LightMap: fi.PERIOD_SPRITE,
                u_LightMapDirection: fi.PERIOD_SPRITE,
                u_SimpleAnimatorTexture: Laya.Shader3D.PERIOD_SPRITE,
                u_SimpleAnimatorParams: Laya.Shader3D.PERIOD_SPRITE,
                u_SimpleAnimatorTextureSize: Laya.Shader3D.PERIOD_SPRITE,
                u_CameraPos: fi.PERIOD_CAMERA,
                u_Viewport: fi.PERIOD_CAMERA,
                u_ProjectionParams: fi.PERIOD_CAMERA,
                u_View: fi.PERIOD_CAMERA,
                u_ViewProjection: fi.PERIOD_CAMERA,
                u_ReflectTexture: fi.PERIOD_SCENE,
                u_ReflectIntensity: fi.PERIOD_SCENE,
                u_FogColor: fi.PERIOD_SCENE,
                u_FogRange: fi.PERIOD_SCENE,
                u_FogStart: fi.PERIOD_SCENE,
                u_DirationLightCount: fi.PERIOD_SCENE,
                u_LightBuffer: fi.PERIOD_SCENE,
                u_LightClusterBuffer: fi.PERIOD_SCENE,
                u_AmbientColor: fi.PERIOD_SCENE,
                u_ShadowBias: fi.PERIOD_SCENE,
                u_ShadowLightDirection: fi.PERIOD_SCENE,
                u_ShadowMap: fi.PERIOD_SCENE,
                u_ShadowParams: fi.PERIOD_SCENE,
                u_ShadowSplitSpheres: fi.PERIOD_SCENE,
                u_ShadowMatrices: fi.PERIOD_SCENE,
                u_ShadowMapSize: fi.PERIOD_SCENE,
                u_Time: fi.PERIOD_SCENE,
                u_AmbientSHAr: fi.PERIOD_SCENE,
                u_AmbientSHAg: fi.PERIOD_SCENE,
                u_AmbientSHAb: fi.PERIOD_SCENE,
                u_AmbientSHBr: fi.PERIOD_SCENE,
                u_AmbientSHBg: fi.PERIOD_SCENE,
                u_AmbientSHBb: fi.PERIOD_SCENE,
                u_AmbientSHC: fi.PERIOD_SCENE,
                "u_DirectionLight.color": fi.PERIOD_SCENE,
                "u_DirectionLight.direction": fi.PERIOD_SCENE,
                "u_SunLight.color": fi.PERIOD_SCENE,
                "u_SunLight.direction": fi.PERIOD_SCENE,
                "u_PointLight.position": fi.PERIOD_SCENE,
                "u_PointLight.range": fi.PERIOD_SCENE,
                "u_PointLight.color": fi.PERIOD_SCENE,
                "u_SpotLight.position": fi.PERIOD_SCENE,
                "u_SpotLight.direction": fi.PERIOD_SCENE,
                "u_SpotLight.range": fi.PERIOD_SCENE,
                "u_SpotLight.spot": fi.PERIOD_SCENE,
                "u_SpotLight.color": fi.PERIOD_SCENE,
                u_DiffuseTexture: fi.PERIOD_MATERIAL,
                u_DiffuseColor: fi.PERIOD_MATERIAL,
                u_NormalTexture: fi.PERIOD_MATERIAL,
                u_SpecularColor: fi.PERIOD_MATERIAL,
                u_TillingX: fi.PERIOD_MATERIAL,
                u_TillingY: fi.PERIOD_MATERIAL,
                u_OffsetX: fi.PERIOD_MATERIAL,
                u_OffsetY: fi.PERIOD_MATERIAL,
                u_RimColor: fi.PERIOD_MATERIAL,
                u_Contrast: fi.PERIOD_MATERIAL,
                u_Specular: fi.PERIOD_MATERIAL,
                u_SpecularSmooth: fi.PERIOD_MATERIAL,
                u_RimPower: fi.PERIOD_MATERIAL,
                u_MaskTexture: fi.PERIOD_MATERIAL,
                u_EmissionTexture: fi.PERIOD_MATERIAL,
                u_EmissionDirectionX: fi.PERIOD_MATERIAL,
                u_EmissionDirectionY: fi.PERIOD_MATERIAL,
                u_EmissionPower: fi.PERIOD_MATERIAL,
                u_EmissionColor: fi.PERIOD_MATERIAL,
                u_FogTexture: fi.PERIOD_MATERIAL,
                u_FogDirectionX: fi.PERIOD_MATERIAL,
                u_FogDirectionY: fi.PERIOD_MATERIAL,
                u_FogMapScale: fi.PERIOD_MATERIAL,
                u_FogPower: fi.PERIOD_MATERIAL,
                u_FadeFogColor: fi.PERIOD_MATERIAL,
                u_FadeHeightFogColor: fi.PERIOD_MATERIAL,
                u_FadeFogNear: fi.PERIOD_MATERIAL,
                u_FadeFogFar: fi.PERIOD_MATERIAL,
                u_HeightFogPower: fi.PERIOD_MATERIAL,
                u_HeightFogStart: fi.PERIOD_MATERIAL,
                u_HeightFogRange: fi.PERIOD_MATERIAL
            },
            i = {
                s_Cull: fi.RENDER_STATE_CULL,
                s_Blend: fi.RENDER_STATE_BLEND,
                s_BlendSrc: fi.RENDER_STATE_BLEND_SRC,
                s_BlendDst: fi.RENDER_STATE_BLEND_DST,
                s_DepthTest: fi.RENDER_STATE_DEPTH_TEST,
                s_DepthWrite: fi.RENDER_STATE_DEPTH_WRITE
            },
            a = fi.add("BlinnPhongFog", null, null, !0),
            s = new Ci(t, e);
            a.addSubShader(s),
            s.addShaderPass(Li, pi, i, "Forward");
            s.addShaderPass(this.MeshBlinnPhongShadowCasterVS, this.MeshBlinnPhongShadowCasterPS, i, "ShadowCaster")
        }
    }
    _i.MeshBlinnPhongShadowCasterPS = '#if defined(GL_FRAGMENT_PRECISION_HIGH)\r\n\tprecision highp float;\r\n\tprecision highp int;\r\n#else\r\n\tprecision mediump float;\r\n\tprecision mediump int;\r\n#endif\r\n\r\n#include "ShadowCasterFS.glsl"\r\n\r\nvoid main()\r\n{\r\n\tgl_FragColor=shadowCasterFragment();\r\n}',
    _i.MeshBlinnPhongShadowCasterVS = '#include "ShadowCasterVS.glsl"\r\n\r\nvoid main()\r\n{\r\n\tvec4 positionCS =  shadowCasterVertex();\r\n\tgl_Position=remapGLPositionZ(positionCS);\r\n}';
    var Ii = Laya.Shader3D;
    class vi extends Laya.Material {
        constructor() {
            super(),
            this.setShaderName("BlinnPhongFog"),
            this.renderQueue = Laya.Material.RENDERQUEUE_OPAQUE
        }
        static init() {
            Laya.ClassUtils.regClass("Laya.BlinnPhongFog", vi)
        }
        clone() {
            let t = new vi;
            return t._Color = this._Color,
            t._Cull = this._Cull,
            t._SpecularColor = this._SpecularColor,
            t._RimColor = this._RimColor,
            t._MainTex = this._MainTex,
            t._NormalTex = this._NormalTex,
            t._MaskTex = this._MaskTex,
            t._EmissionTex = this._EmissionTex,
            t._EmissionDirX = this._EmissionDirX,
            t._EmissionDirY = this._EmissionDirY,
            t._EmissionPower = this._EmissionPower,
            t._EmissionColor = this._EmissionColor,
            t._FogTex = this._FogTex,
            t._FogDirX = this._FogDirX,
            t._FogDirY = this._FogDirY,
            t._FogMapScale = this._FogMapScale,
            t._FogPower = this._FogPower,
            t._FadeFogColor = this._FadeFogColor,
            t._FadeHeightFogColor = this._FadeHeightFogColor,
            t._FadeFogNear = this._FadeFogNear,
            t._FadeFogFar = this._FadeFogFar,
            t._HeightFogPower = this._HeightFogPower,
            t._HeightFogStart = this._HeightFogStart,
            t._HeightFogRange = this._HeightFogRange,
            t._Contrast = this._Contrast,
            t._Specular = this._Specular,
            t._SpecSmooth = this._SpecSmooth,
            t._RimPower = this._RimPower,
            t
        }
        get _Cull() {
            return this._shaderValues.getInt(vi.CULL)
        }
        set _Cull(t) {
            let e = 0;
            e = t < 1 ? 0 : t < 2 ? 1 : 2,
            this._shaderValues.setInt(vi.CULL, e)
        }
        get _Color() {
            return this._shaderValues.getVector(vi.DIFFUSECOLOR)
        }
        set _Color(t) {
            this._shaderValues.setVector(vi.DIFFUSECOLOR, t)
        }
        get _SpecularColor() {
            return this._shaderValues.getVector(vi.SPECULARCOLOR)
        }
        set _SpecularColor(t) {
            this._shaderValues.setVector(vi.SPECULARCOLOR, t)
        }
        get _RimColor() {
            return this._shaderValues.getVector(vi.RIMCOLOR)
        }
        set _RimColor(t) {
            this._shaderValues.setVector(vi.RIMCOLOR, t)
        }
        get _MainTex() {
            return this._shaderValues.getTexture(vi.DIFFUSETEXTURE)
        }
        set _MainTex(t) {
            t ? this._shaderValues.addDefine(vi.SHADERDEFINE_DIFFUSEMAP) : this._shaderValues.removeDefine(vi.SHADERDEFINE_DIFFUSEMAP),
            this._shaderValues.setTexture(vi.DIFFUSETEXTURE, t)
        }
        get _NormalTex() {
            return this._shaderValues.getTexture(vi.NORMALTEXTURE)
        }
        set _NormalTex(t) {
            t ? this._shaderValues.addDefine(vi.SHADERDEFINE_NORMALMAP) : this._shaderValues.removeDefine(vi.SHADERDEFINE_NORMALMAP),
            this._shaderValues.setTexture(vi.NORMALTEXTURE, t)
        }
        get _TillingX() {
            return this._shaderValues.getNumber(vi.TILLINGX)
        }
        set _TillingX(t) {
            this._shaderValues.setNumber(vi.TILLINGX, t)
        }
        get _TillingY() {
            return this._shaderValues.getNumber(vi.TILLINGY)
        }
        set _TillingY(t) {
            this._shaderValues.setNumber(vi.TILLINGY, t)
        }
        get _OffsetX() {
            return this._shaderValues.getNumber(vi.OFFSETX)
        }
        set _OffsetX(t) {
            this._shaderValues.setNumber(vi.OFFSETX, t)
        }
        get _OffsetY() {
            return this._shaderValues.getNumber(vi.OFFSETY)
        }
        set _OffsetY(t) {
            this._shaderValues.setNumber(vi.OFFSETY, t)
        }
        get _MaskTex() {
            return this._shaderValues.getTexture(vi.MASKTEXTURE)
        }
        set _MaskTex(t) {
            t ? this._shaderValues.addDefine(vi.SHADERDEFINE_MASKMAP) : this._shaderValues.removeDefine(vi.SHADERDEFINE_MASKMAP),
            this._shaderValues.setTexture(vi.MASKTEXTURE, t)
        }
        get _EmissionTex() {
            return this._shaderValues.getTexture(vi.EMISSIONTEXTURE)
        }
        set _EmissionTex(t) {
            t ? this._shaderValues.addDefine(vi.SHADERDEFINE_EMISSIONMAP) : this._shaderValues.removeDefine(vi.SHADERDEFINE_EMISSIONMAP),
            this._shaderValues.setTexture(vi.EMISSIONTEXTURE, t)
        }
        get _EmissionDirX() {
            return this._shaderValues.getNumber(vi.EMISSIONDIRECTIONX)
        }
        set _EmissionDirX(t) {
            this._shaderValues.setNumber(vi.EMISSIONDIRECTIONX, t)
        }
        get _EmissionDirY() {
            return this._shaderValues.getNumber(vi.EMISSIONDIRECTIONY)
        }
        set _EmissionDirY(t) {
            this._shaderValues.setNumber(vi.EMISSIONDIRECTIONY, t)
        }
        get _EmissionPower() {
            return this._shaderValues.getNumber(vi.EMISSIONPOWER)
        }
        set _EmissionPower(t) {
            this._shaderValues.setNumber(vi.EMISSIONPOWER, t)
        }
        get _EmissionColor() {
            return this._shaderValues.getVector(vi.EMISSIONCOLOR)
        }
        set _EmissionColor(t) {
            this._shaderValues.setVector(vi.EMISSIONCOLOR, t)
        }
        get _FogTex() {
            return this._shaderValues.getTexture(vi.FOGTEXURE)
        }
        set _FogTex(t) {
            t ? this._shaderValues.addDefine(vi.SHADERDEFINE_FOGMAP) : this._shaderValues.removeDefine(vi.SHADERDEFINE_FOGMAP),
            this._shaderValues.setTexture(vi.FOGTEXURE, t)
        }
        get _FogDirX() {
            return this._shaderValues.getNumber(vi.FOGDIRECTIONX)
        }
        set _FogDirX(t) {
            this._shaderValues.setNumber(vi.FOGDIRECTIONX, t)
        }
        get _FogDirY() {
            return this._shaderValues.getNumber(vi.FOGDIRECTIONY)
        }
        set _FogDirY(t) {
            this._shaderValues.setNumber(vi.FOGDIRECTIONY, t)
        }
        get _FogMapScale() {
            return this._shaderValues.getNumber(vi.FOGMAPSCALE)
        }
        set _FogMapScale(t) {
            this._shaderValues.setNumber(vi.FOGMAPSCALE, t)
        }
        get _FadeFogColor() {
            return this._shaderValues.getNumber(vi.FADEFOGCOLOR)
        }
        set _FadeFogColor(t) {
            this._shaderValues.setNumber(vi.FADEFOGCOLOR, t)
        }
        get _FadeHeightFogColor() {
            return this._shaderValues.getNumber(vi.FADEHEIGHTFOGCOLOR)
        }
        set _FadeHeightFogColor(t) {
            this._shaderValues.setNumber(vi.FADEHEIGHTFOGCOLOR, t)
        }
        get _FadeFogNear() {
            return this._shaderValues.getNumber(vi.FADEFOGNEAR)
        }
        set _FadeFogNear(t) {
            this._shaderValues.setNumber(vi.FADEFOGNEAR, t)
        }
        get _FadeFogFar() {
            return this._shaderValues.getNumber(vi.FADEFOGFAR)
        }
        set _FadeFogFar(t) {
            this._shaderValues.setNumber(vi.FADEFOGFAR, t)
        }
        get _FogPower() {
            return this._shaderValues.getNumber(vi.FOGPOWER)
        }
        set _FogPower(t) {
            this._shaderValues.setNumber(vi.FOGPOWER, t)
        }
        get _HeightFogPower() {
            return this._shaderValues.getNumber(vi.HEIGHTFOGPOWER)
        }
        set _HeightFogPower(t) {
            this._shaderValues.setNumber(vi.HEIGHTFOGPOWER, t)
        }
        get _HeightFogStart() {
            return this._shaderValues.getNumber(vi.HEIGHTFOGSTART)
        }
        set _HeightFogStart(t) {
            this._shaderValues.setNumber(vi.HEIGHTFOGSTART, t)
        }
        get _HeightFogRange() {
            return this._shaderValues.getNumber(vi.HEIGHTFOGRANGE)
        }
        set _HeightFogRange(t) {
            this._shaderValues.setNumber(vi.HEIGHTFOGRANGE, t)
        }
        get _Contrast() {
            return this._shaderValues.getNumber(vi.CONTRAST)
        }
        set _Contrast(t) {
            this._shaderValues.setNumber(vi.CONTRAST, t)
        }
        get _Specular() {
            return this._shaderValues.getNumber(vi.SPECULAR)
        }
        set _Specular(t) {
            this._shaderValues.setNumber(vi.SPECULAR, t)
        }
        get _SpecSmooth() {
            return this._shaderValues.getNumber(vi.SPECUALRSMOOTH)
        }
        set _SpecSmooth(t) {
            this._shaderValues.setNumber(vi.SPECUALRSMOOTH, t)
        }
        get _RimPower() {
            return this._shaderValues.getNumber(vi.RIMPOWER)
        }
        set _RimPower(t) {
            this._shaderValues.setNumber(vi.RIMPOWER, t)
        }
    }
    vi.DIFFUSETEXTURE = Laya.Shader3D.propertyNameToID("u_DiffuseTexture"),
    vi.DIFFUSECOLOR = Laya.Shader3D.propertyNameToID("u_DiffuseColor"),
    vi.NORMALTEXTURE = Laya.Shader3D.propertyNameToID("u_NormalTexture"),
    vi.SPECULARCOLOR = Laya.Shader3D.propertyNameToID("u_SpecularColor"),
    vi.TILLINGX = Laya.Shader3D.propertyNameToID("u_TillingX"),
    vi.TILLINGY = Laya.Shader3D.propertyNameToID("u_TillingY"),
    vi.OFFSETX = Laya.Shader3D.propertyNameToID("u_OffsetX"),
    vi.OFFSETY = Laya.Shader3D.propertyNameToID("u_OffsetY"),
    vi.RIMCOLOR = Laya.Shader3D.propertyNameToID("u_RimColor"),
    vi.CONTRAST = Laya.Shader3D.propertyNameToID("u_Contrast"),
    vi.SPECULAR = Laya.Shader3D.propertyNameToID("u_Specular"),
    vi.SPECUALRSMOOTH = Laya.Shader3D.propertyNameToID("u_SpecularSmooth"),
    vi.RIMPOWER = Laya.Shader3D.propertyNameToID("u_RimPower"),
    vi.MASKTEXTURE = Laya.Shader3D.propertyNameToID("u_MaskTexture"),
    vi.EMISSIONTEXTURE = Laya.Shader3D.propertyNameToID("u_EmissionTexture"),
    vi.EMISSIONDIRECTIONX = Laya.Shader3D.propertyNameToID("u_EmissionDirectionX"),
    vi.EMISSIONDIRECTIONY = Laya.Shader3D.propertyNameToID("u_EmissionDirectionY"),
    vi.EMISSIONPOWER = Laya.Shader3D.propertyNameToID("u_EmissionPower"),
    vi.EMISSIONCOLOR = Laya.Shader3D.propertyNameToID("u_EmissionColor"),
    vi.FOGTEXURE = Laya.Shader3D.propertyNameToID("u_FogTexture"),
    vi.FOGDIRECTIONX = Laya.Shader3D.propertyNameToID("u_FogDirectionX"),
    vi.FOGDIRECTIONY = Laya.Shader3D.propertyNameToID("u_FogDirectionY"),
    vi.FOGMAPSCALE = Laya.Shader3D.propertyNameToID("u_FogMapScale"),
    vi.FOGPOWER = Laya.Shader3D.propertyNameToID("u_FogPower"),
    vi.FADEFOGCOLOR = Laya.Shader3D.propertyNameToID("u_FadeFogColor"),
    vi.FADEHEIGHTFOGCOLOR = Laya.Shader3D.propertyNameToID("u_FadeHeightFogColor"),
    vi.FADEFOGNEAR = Laya.Shader3D.propertyNameToID("u_FadeFogNear"),
    vi.FADEFOGFAR = Laya.Shader3D.propertyNameToID("u_FadeFogFar"),
    vi.HEIGHTFOGPOWER = Laya.Shader3D.propertyNameToID("u_HeightFogPower"),
    vi.HEIGHTFOGSTART = Laya.Shader3D.propertyNameToID("u_HeightFogStart"),
    vi.HEIGHTFOGRANGE = Laya.Shader3D.propertyNameToID("u_HeightFogRange"),
    vi.CULL = Ii.propertyNameToID("s_Cull"),
    vi.SHADERDEFINE_DIFFUSEMAP = Laya.Shader3D.getDefineByName("DIFFUSEMAP"),
    vi.SHADERDEFINE_NORMALMAP = Laya.Shader3D.getDefineByName("NORMALMAP"),
    vi.SHADERDEFINE_MASKMAP = Laya.Shader3D.getDefineByName("MASKMAP"),
    vi.SHADERDEFINE_EMISSIONMAP = Laya.Shader3D.getDefineByName("EMISSIONMAP"),
    vi.SHADERDEFINE_FOGMAP = Laya.Shader3D.getDefineByName("FOGMAP");
    new class {
        constructor() {
            window.ystorage = Laya.LocalStorage;
            window.ystorageExt = {
                getJSON: function(key) {
                    return JSON.parse(window.ystorage.getItem(key));
                },
                setJSON: function(key, value) {
                    window.ystorage.setItem(key, JSON.stringify(value));
                }
            }
            let t = window.navigator.userAgent;
            if (t.includes("iPhone") || t.includes("iPad")) {
                let e = t.match(/iPhone OS .*?(?= )/);
                if (e && e.length > 0) {
                    let t = e[0].match(/\d+/g)[0];
                    console.log("当前ios版本:" + t),
                    Number(t) >= 15 && (Config.isAntialias = !0, Config.useWebGL2 = !1)
                }
            }
            window.Laya3D ? Laya3D.init(yt.width, yt.height) : Laya.init(yt.width, yt.height, Laya.WebGL),
            Laya.Physics && Laya.Physics.enable(),
            Laya.DebugPanel && Laya.DebugPanel.enable(),
            Laya.stage.scaleMode = yt.scaleMode,
            Laya.stage.screenMode = yt.screenMode,
            Laya.stage.alignV = yt.alignV,
            Laya.stage.alignH = yt.alignH,
            Laya.URL.exportSceneToJson = yt.exportSceneToJson,
            (yt.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(),
            yt.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(),
            yt.stat && Laya.Stat.show(),
            Laya.alertGlobalError(!0),
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION)
        }
        onVersionLoaded() {
            if (window.YaGames) {
                window.boardName = "board193057", 
                window.leaderBoard = null
                YaGames.init().then(ysdk => {
                    console.log('Yandex SDK initialized');
                    window.ysdk = ysdk;
                    window.ysdk.getStorage()
                        .then(storage => {
                        var useAgent = window.navigator.userAgent.toLowerCase();
                        if (useAgent.indexOf("iphone")>0) {
                            window.ystorage = storage;
                        }
                        })
                    window.ysdk.getLeaderboards()
                    .then((lb) => { 
                        window.leaderBoard = lb;
                        lb.getLeaderboardPlayerEntry(window.boardName)
                        .then(res => {
                            console.log(res);
                            if (res && res.score) {
                                q.killEnermyNum = res.score;
                            }
                        })
                    });
                }).catch(err => { })
            }
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded))
        }
        onConfigLoaded() {
            return __awaiter(this, void 0, void 0,
            function * () {
                _i.init(),
                vi.init(),
                zs.core.nativeLoadingPage = ht,
                Laya.stage.addComponent(ui)
            })
        }
    }
} ();