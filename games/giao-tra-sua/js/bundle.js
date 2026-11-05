(function () {
    'use strict';

    class ImageClickAni extends Laya.Image {
        constructor() {
            super();
            this.scaleTime = 100;
            this.anchorX = this.anchorY = 0.5;
            this.on(Laya.Event.MOUSE_DOWN, this, this.scaleSmall);
            this.on(Laya.Event.MOUSE_UP, this, this.scaleBig);
            this.on(Laya.Event.MOUSE_OUT, this, this.scaleBig);
        }
        destroy(destroyChild) {
            Laya.Tween.clearAll(this);
            super.destroy(destroyChild);
        }
        scaleBig() {
            Laya.Tween.to(this, { scaleX: 1, scaleY: 1 }, this.scaleTime);
        }
        scaleSmall() {
            Laya.Tween.to(this, { scaleX: 0.9, scaleY: 0.9 }, this.scaleTime);
        }
    }

    class AudioManager {
        constructor() { }
        static get Instance() {
            if (AudioManager.instance == null)
                AudioManager.instance = new AudioManager();
            return AudioManager.instance;
        }
        stopMusic() {
            fc.framework.Audio.stopMusic();
        }
        playMusic(music) {
            fc.framework.Audio.playMusic(AudioManager.MusicUrl + music);
        }
        playSound(res, loop = false) {
            if (fc.platform.PlatformConfig.platformTag.indexOf('iptv') != -1 || fc.platform.PlatformConfig.platformTag == 'native') {
                res = res.replace('.mp3', '.ogg');
            }
            fc.framework.Audio.playSound(res, loop);
        }
        stopSound(res) {
            if (fc.platform.PlatformConfig.platformTag.indexOf('iptv') != -1 || fc.platform.PlatformConfig.platformTag == 'native') {
                res = res.replace('.mp3', '.ogg');
            }
            fc.framework.Audio.stopSound(res);
        }
        stopSfx(sfx) {
            if (fc.platform.PlatformConfig.platformTag.indexOf('iptv') != -1 || fc.platform.PlatformConfig.platformTag == 'native') {
                sfx = sfx.replace('.mp3', '.ogg');
            }
            fc.framework.Audio.stopSound(AudioManager.AudioUrl + sfx);
        }
        playSfx(sfx, loop = false) {
            if (fc.platform.PlatformConfig.platformTag.indexOf('iptv') != -1 || fc.platform.PlatformConfig.platformTag == 'native') {
                sfx = sfx.replace('.mp3', '.ogg');
            }
            fc.framework.Audio.playSound(AudioManager.AudioUrl + sfx, loop);
        }
    }
    AudioManager.AudioUrl = "sound/";
    AudioManager.MusicUrl = "music/";

    class ResConst {
    }
    ResConst.MaterialPath = "3dres/Conventional/Assets/Materials/";
    ResConst.Cups = ["Cup_2", "Cup_3", "Cup_4", "Cup_5", "Cup_6", "Cup_7", "Cup_8"];
    ResConst.Stickmans = ["stickman_2", "stickman_3", "stickman_4", "stickman_5", "stickman_6", "stickman_7", "stickman_8"];
    ResConst.StickmanColor = [
        new Laya.Vector4(255 / 255, 109 / 255, 168 / 255, 255 / 255),
        new Laya.Vector4(16 / 255, 160 / 255, 229 / 255, 255 / 255),
        new Laya.Vector4(67 / 255, 67 / 255, 67 / 255, 255 / 255),
        new Laya.Vector4(172 / 255, 13 / 255, 209 / 255, 255 / 255),
        new Laya.Vector4(217 / 255, 0 / 255, 4 / 255, 255 / 255),
        new Laya.Vector4(254 / 255, 215 / 255, 0 / 255, 255 / 255),
        new Laya.Vector4(45 / 255, 202 / 255, 99 / 255, 255 / 255)
    ];
    var Number_Mat;
    (function (Number_Mat) {
        Number_Mat["_-"] = "num_min.lmat";
        Number_Mat["_+"] = "num_add.lmat";
        Number_Mat["_x"] = "num_mul.lmat";
        Number_Mat["_0"] = "num_00.lmat";
        Number_Mat["_1"] = "num_01.lmat";
        Number_Mat["_2"] = "num_02.lmat";
        Number_Mat["_3"] = "num_03.lmat";
        Number_Mat["_4"] = "num_04.lmat";
        Number_Mat["_5"] = "num_05.lmat";
        Number_Mat["_6"] = "num_06.lmat";
        Number_Mat["_7"] = "num_07.lmat";
        Number_Mat["_8"] = "num_08.lmat";
        Number_Mat["_9"] = "num_09.lmat";
    })(Number_Mat || (Number_Mat = {}));
    var GameMode;
    (function (GameMode) {
        GameMode[GameMode["Normal"] = 0] = "Normal";
        GameMode[GameMode["Coin"] = 1] = "Coin";
        GameMode[GameMode["Mahjong"] = 2] = "Mahjong";
        GameMode[GameMode["Challenge"] = 3] = "Challenge";
    })(GameMode || (GameMode = {}));
    var DoorDir;
    (function (DoorDir) {
        DoorDir[DoorDir["Left"] = 1] = "Left";
        DoorDir[DoorDir["Right"] = -1] = "Right";
        DoorDir[DoorDir["Top"] = 0] = "Top";
    })(DoorDir || (DoorDir = {}));
    var CupState;
    (function (CupState) {
        CupState[CupState["CanTake"] = 1] = "CanTake";
        CupState[CupState["WaitingTake"] = 2] = "WaitingTake";
        CupState[CupState["Taked"] = 3] = "Taked";
        CupState[CupState["UnTake"] = 4] = "UnTake";
    })(CupState || (CupState = {}));
    var StickManState;
    (function (StickManState) {
        StickManState[StickManState["Idle"] = 0] = "Idle";
        StickManState[StickManState["Middle"] = 1] = "Middle";
        StickManState[StickManState["BackMiddle"] = 2] = "BackMiddle";
        StickManState[StickManState["Carrying"] = 3] = "Carrying";
        StickManState[StickManState["Waiting"] = 4] = "Waiting";
        StickManState[StickManState["Center"] = 5] = "Center";
        StickManState[StickManState["Full"] = 6] = "Full";
    })(StickManState || (StickManState = {}));
    var ScriptType;
    (function (ScriptType) {
        ScriptType[ScriptType["idle"] = 0] = "idle";
        ScriptType[ScriptType["run"] = 1] = "run";
        ScriptType[ScriptType["atk"] = 2] = "atk";
        ScriptType[ScriptType["win"] = 3] = "win";
        ScriptType[ScriptType["move"] = 4] = "move";
        ScriptType[ScriptType["astar"] = 5] = "astar";
        ScriptType[ScriptType["runaway"] = 6] = "runaway";
        ScriptType[ScriptType["unknow"] = 7] = "unknow";
    })(ScriptType || (ScriptType = {}));

    class EventConst {
    }
    EventConst.LOADRES_SUCCESS = "LOADRES_SUCCESS";
    EventConst.Start_Game = "Start_Game";
    EventConst.UI_DROP_ITEM_ANIM_COMPLETED = "UI_DROP_ITEM_ANIM_COMPLETED";
    EventConst.SHOW_SUCCESS = "SHOW_SUCCESS";
    EventConst.SHOW_FAILED = "SHOW_FAILED";
    EventConst.CHANGE_CUR_MODEL = "CHANGE_CUR_MODEL";
    EventConst.SHOW_GUIDE = "SHOW_GUIDE";
    EventConst.Hide_Loading = "Hide_Laoding";
    EventConst.Open_Door = "Open_Door";
    EventConst.Use_Item = "Use_Item";
    EventConst.Level_Update = "Level_Update";
    EventConst.Refresh_Game = "Refresh_Game";
    EventConst.Game_Angry_Tip = "Game_Angry_Tip";
    EventConst.Game_Failed_Check = "Game_Failed_Check";

    class DropItemFactory {
        constructor(skin) {
            this.mSkin = skin;
            this.mSign = "fc_dropItem_" + this.mSkin;
        }
        get Skin() {
            return this.mSkin;
        }
        get Sign() {
            return this.mSign;
        }
        create() {
            return Laya.Pool.getItemByCreateFun(this.mSign, this.createFun, this);
        }
        createFun() {
            return new Laya.Image(this.mSkin);
        }
    }
    class DropItem extends Laya.Script {
        static create(root, skin, srcX, srcY, dstX, dstY, flyDelay) {
            var factory = this.sFactoryMap[skin];
            if (factory == null) {
                this.sFactoryMap[skin] = factory = new DropItemFactory(skin);
            }
            var dropItem = factory.create();
            root.addChild(dropItem);
            var script = dropItem.getComponent(DropItem);
            if (script == null) {
                script = dropItem.addComponent(DropItem);
            }
            script.init(factory.Sign, srcX, srcY, dstX, dstY, flyDelay);
            return dropItem;
        }
        get ItemImage() {
            return this.owner;
        }
        init(sign, srcX, srcY, dstX, dstY, flyDelay) {
            this.ItemImage.visible = true;
            this.ItemImage.x = srcX;
            this.ItemImage.y = srcY;
            this.mSign = sign;
            this.mDstX = dstX;
            this.mDstY = dstY;
            var radius = Math.floor(Math.random() * 5) / 5 * 128;
            var orient = Math.floor(Math.random() * 36) * 10 * (Math.PI / 180);
            var dropX = Math.sin(orient) * radius + srcX;
            var dropY = Math.cos(orient) * radius + srcY;
            Laya.Tween.to(this.ItemImage, { x: dropX }, 500);
            Laya.Tween.to(this.ItemImage, { y: dropY }, 500, Laya.Ease.strongIn, Laya.Handler.create(this, this.onReachDropPos, [flyDelay]), null, false);
        }
        onReachDropPos(flyDelay) {
            Laya.Tween.to(this.ItemImage, { x: this.mDstX, y: this.mDstY }, 500, Laya.Ease.strongIn, Laya.Handler.create(this, this.onReachDst), flyDelay, false);
        }
        onReachDst() {
            this.ItemImage.event(EventConst.UI_DROP_ITEM_ANIM_COMPLETED);
            this.ItemImage.visible = false;
            this.ItemImage.removeSelf();
            Laya.Pool.recover(this.mSign, this.ItemImage);
        }
    }
    DropItem.sFactoryMap = {};

    var Vector3 = Laya.Vector3;
    class Util {
        static getTransformUp(transform, out) {
            out = out ? out : new Laya.Vector3();
            transform.getUp(out);
            Vector3.normalize(out, out);
            return out;
        }
        static getTransformForward(transform, out) {
            out = out ? out : new Laya.Vector3();
            transform.getForward(out);
            Vector3.normalize(out, out);
            return out;
        }
        static getTransformRight(transform, out) {
            out = out ? out : new Laya.Vector3();
            transform.getRight(out);
            Vector3.normalize(out, out);
            return out;
        }
        static vector3Scale(vector3, scale, out) {
            out = out ? out : new Vector3();
            Vector3.scale(vector3, scale, out);
            return out;
        }
        static vector3Subtract(a, b, out) {
            out = out ? out : new Vector3();
            Vector3.subtract(a, b, out);
            return out;
        }
        static vector3Add(a, b, out) {
            out = out ? out : new Vector3();
            Vector3.add(a, b, out);
            return out;
        }
        static vector3Normalize(a, out) {
            out = out ? out : new Vector3();
            Vector3.normalize(a, out);
            return out;
        }
        static magnitude(vector3) {
            return Math.sqrt(this.sqrMagnitude(vector3));
        }
        static magHorizontal(first, second) {
            return Math.sqrt((first.x - second.x) * (first.x - second.x) + (first.z - second.z) * (first.z - second.z));
        }
        static mag(x1, y1, x2, y2) {
            return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
        }
        static sqrMagnitude(vector3) {
            return vector3.x * vector3.x + vector3.y * vector3.y + vector3.z * vector3.z;
        }
        static normalize(point) {
            var magSqr = point.x * point.x + point.y * point.y;
            if (magSqr == 1.0)
                return new Laya.Point(point.x, point.y);
            if (magSqr == 0.0) {
                return new Laya.Point(point.x, point.y);
            }
            let out = new Laya.Point();
            var invsqrt = 1.0 / Math.sqrt(magSqr);
            out.x = point.x * invsqrt;
            out.y = point.y * invsqrt;
            return out;
        }
        ;
        static normalizeSelf(vector3) {
            var magSqr = vector3.x * vector3.x + vector3.z * vector3.z;
            if (magSqr == 1.0)
                return vector3;
            if (magSqr == 0.0) {
                return vector3;
            }
            var invsqrt = 1.0 / Math.sqrt(magSqr);
            vector3.x = vector3.x * invsqrt;
            vector3.z = vector3.z * invsqrt;
            return vector3;
        }
        ;
        static mul(point, num) {
            let out = new Laya.Point();
            out.x = point.x * num;
            out.y = point.y * num;
            return out;
        }
        static magSqr(point) {
            return point.x * point.x + point.y * point.y;
        }
        static add(point, addPoint) {
            let out = new Laya.Point();
            out.x = point.x + addPoint.x;
            out.y = point.y + addPoint.y;
            return new Laya.Point(out.x, out.y);
        }
        static dot(a, b) {
            return a.x * b.x + a.y * b.y;
        }
        static scalarLength(a) {
            var x = a.x, y = a.y;
            return Math.sqrt(x * x + y * y);
        }
        static scale(a, scale) {
            return new Laya.Point(a.x * scale, a.y * scale);
            ;
        }
        static distanceVector2(targetPoint, sourcePoint) {
            let x = targetPoint.x - sourcePoint.x;
            let y = targetPoint.y - sourcePoint.y;
            return x * x + y * y;
        }
        static distanceSquared(targetPoint, sourcePoint) {
            let x = targetPoint.x - sourcePoint.x;
            let y = targetPoint.y - sourcePoint.y;
            return x * x + y * y;
        }
        static rotateY(vector3, radians) {
            var sin = Math.sin(radians);
            var cos = Math.cos(radians);
            var x = vector3.x;
            vector3.x = cos * x - sin * vector3.z;
            vector3.z = sin * x + cos * vector3.z;
            return vector3;
        }
        ;
        static angleY(target, source) {
            let x = target.x - source.x;
            let y = target.z - source.z;
            return Math.atan2(x, y) * 180 / Math.PI;
        }
        static getTargetAngle(firstPos, endPos) {
            var angle = 0;
            var dir = new Laya.Vector3();
            Laya.Vector3.subtract(endPos, firstPos, dir);
            angle = Math.atan2(dir.x, dir.z) * 180 / Math.PI;
            return angle;
        }
        static angleY2(vec) {
            return Math.atan2(vec.x, vec.z) * 180 / Math.PI;
        }
        static angleX(target, source) {
            let x = target.y - source.y;
            let y = target.z - source.z;
            return Math.atan2(-x, y) * 180 / Math.PI;
        }
        static angleZ(target, source) {
            let x = target.x - source.x;
            let y = target.y - source.y;
            return Math.atan2(-x, y) * 180 / Math.PI;
        }
        static angleZ2(vec) {
            return Math.atan2(-vec.x, vec.y) * 180 / Math.PI;
        }
        static angleDirection(direction, up) {
            Laya.Vector3.normalize(direction, direction);
            var cosVal = Laya.Vector3.dot(direction, up);
            var pitch = Math.acos(cosVal);
            pitch = 90 - pitch * 180 / Math.PI;
            return pitch;
        }
        static cross(a, b) {
            return a.x * b.y - a.y * b.x;
        }
        static angle(a, b) {
            var magSqr1 = this.magSqr(a);
            var magSqr2 = this.magSqr(b);
            if (magSqr1 === 0 || magSqr2 === 0) {
                return 0.0;
            }
            var dot = this.dot(a, b);
            var theta = dot / (Math.sqrt(magSqr1 * magSqr2));
            theta = this.clampf(theta, -1.0, 1.0);
            return Math.acos(theta);
        }
        ;
        static clampf(value, min_inclusive, max_inclusive) {
            if (min_inclusive > max_inclusive) {
                var temp = min_inclusive;
                min_inclusive = max_inclusive;
                max_inclusive = temp;
            }
            return value < min_inclusive ? min_inclusive : value < max_inclusive ? value : max_inclusive;
        }
        ;
        static clamp(value, min = Number.NEGATIVE_INFINITY, max = Number.POSITIVE_INFINITY) {
            if (min > max) {
                var temp = min;
                min = max;
                max = temp;
            }
            return Math.max(min, Math.min(max, value));
        }
        static clamp01(value) {
            return Math.max(0, Math.min(1, value));
        }
        static random(min, max) {
            return Math.random() * (max - min) + min << 0;
        }
        static probabilityCanHappen(num) {
            let random = this.random(0, 100);
            return random <= num;
        }
        static scaleTo(target, startScale, endScale, duration, caller, callback) {
            Laya.Tween.clearAll(target);
            Laya.Tween.to(target, { scaleX: startScale, scaleY: startScale }, duration * 0.5, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(target, { scaleX: endScale, scaleY: endScale }, duration * 0.5, null, Laya.Handler.create(caller, callback));
            }));
        }
        static scaleToDefault(target, caller, callback) {
            this.scaleTo(target, 0.8, 1, 200, caller, callback);
            this.delayMouseEnabled(target);
        }
        static scaleToDefault2(target, caller, callback) {
            this.scaleTo(target, 0.8, 1, 200, caller, callback);
        }
        static delayMouseEnabled(node) {
            node.mouseEnabled = false;
            Laya.stage.timerOnce(500, this, () => {
                node && (node.mouseEnabled = true);
            });
        }
        static ComputeCollision(w, h, r, rx, ry) {
            var dx = Math.min(rx, w * 0.5);
            var dx1 = Math.max(dx, -w * 0.5);
            var dy = Math.min(ry, h * 0.5);
            var dy1 = Math.max(dy, -h * 0.5);
            return (dx1 - rx) * (dx1 - rx) + (dy1 - ry) * (dy1 - ry) <= r * r;
        }
        static IsCircleIntersectTriangle(x, y, r, x1, y1, x2, y2, x3, y3) {
            if (this.PointinTriangle1(new Laya.Vector3(x, 0, y), new Laya.Vector3(x1, 0, y1), new Laya.Vector3(x2, 0, y2), new Laya.Vector3(x3, 0, y3)))
                return true;
            if (this.IsCircleIntersectLineSeg(x, y, r, x1, y1, x2, y2))
                return true;
            if (this.IsCircleIntersectLineSeg(x, y, r, x2, y2, x3, y3))
                return true;
            if (this.IsCircleIntersectLineSeg(x, y, r, x3, y3, x1, y1))
                return true;
            return false;
        }
        static SameSide(A, B, C, P) {
            let AB = new Laya.Vector3();
            let AC = new Laya.Vector3();
            let AP = new Laya.Vector3();
            Laya.Vector3.subtract(B, A, AB);
            Laya.Vector3.subtract(C, A, AC);
            Laya.Vector3.subtract(P, A, AP);
            let v1 = new Laya.Vector3();
            let v2 = new Laya.Vector3();
            Laya.Vector3.cross(AB, AC, v1);
            Laya.Vector3.cross(AB, AP, v2);
            let num = Laya.Vector3.dot(v1, v2);
            return num >= 0;
        }
        static PointinTriangle1(A, B, C, P) {
            return this.SameSide(A, B, C, P) && this.SameSide(B, C, A, P) && this.SameSide(C, A, B, P);
        }
        static IsCircleIntersectLineSeg(x, y, r, x1, y1, x2, y2) {
            var vx1 = x - x1;
            var vy1 = y - y1;
            var vx2 = x2 - x1;
            var vy2 = y2 - y1;
            if (Math.abs(vx2) < 0.00001 && Math.abs(vy2) < 0.00001)
                return false;
            var len = Math.sqrt(vx2 * vx2 + vy2 * vy2);
            vx2 /= len;
            vy2 /= len;
            var u = vx1 * vx2 + vy1 * vy2;
            var x0 = 0;
            var y0 = 0;
            if (u <= 0) {
                x0 = x1;
                y0 = y1;
            }
            else if (u >= len) {
                x0 = x2;
                y0 = y2;
            }
            else {
                x0 = x1 + vx2 * u;
                y0 = y1 + vy2 * u;
            }
            return (x - x0) * (x - x0) + (y - y0) * (y - y0) <= r * r;
        }
        static computeDistanceBetweenPointAndLine(x, y, x1, y1, x2, y2) {
            var a = y2 - y1;
            var b = x1 - x2;
            var c = x2 * y1 - x1 * y2;
            return Math.abs(a * x + b * y + c) / Math.sqrt(a * a + b * b);
        }
        static segmentsIntr(a, b, c, d) {
            var area_abc = (a.x - c.x) * (b.y - c.y) - (a.y - c.y) * (b.x - c.x);
            var area_abd = (a.x - d.x) * (b.y - d.y) - (a.y - d.y) * (b.x - d.x);
            if (area_abc * area_abd >= 0) {
                return false;
            }
            var area_cda = (c.x - a.x) * (d.y - a.y) - (c.y - a.y) * (d.x - a.x);
            var area_cdb = area_cda + area_abc - area_abd;
            if (area_cda * area_cdb >= 0) {
                return false;
            }
            var t = area_cda / (area_abd - area_abc);
            var dx = t * (b.x - a.x), dy = t * (b.y - a.y);
            return { x: a.x + dx, y: a.y + dy };
        }
        static judgeIntersect(x1, y1, x2, y2, x3, y3, x4, y4) {
            if (!(Math.min(x1, x2) <= Math.max(x3, x4) && Math.min(y3, y4) <= Math.max(y1, y2) && Math.min(x3, x4) <= Math.max(x1, x2) && Math.min(y1, y2) <= Math.max(y3, y4)))
                return false;
            var u, v, w, z;
            u = (x3 - x1) * (y2 - y1) - (x2 - x1) * (y3 - y1);
            v = (x4 - x1) * (y2 - y1) - (x2 - x1) * (y4 - y1);
            w = (x1 - x3) * (y4 - y3) - (x4 - x3) * (y1 - y3);
            z = (x2 - x3) * (y4 - y3) - (x4 - x3) * (y2 - y3);
            return (u * v <= 0.00000001 && w * z <= 0.00000001);
        }
        static vectorDirection(srcVec, desVec) {
            var subtractPos = new Laya.Vector3(0, 0, 0);
            Laya.Vector3.subtract(desVec, srcVec, subtractPos);
            var normalizeDir = new Laya.Vector3(0, 0, 0);
            Laya.Vector3.normalize(subtractPos, normalizeDir);
            return normalizeDir;
        }
        static lerp(from, to, t) {
            return from + (to - from) * Math.min(1, t);
        }
        static IsNumber(val) {
            var regPos = /^\d+(\.\d+)?$/;
            var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/;
            if (regPos.test(val) || regNeg.test(val)) {
                return true;
            }
            else {
                return false;
            }
        }
        static padding(num, length) {
            for (var len = (num + "").length; len < length; len = num.length) {
                num = "0" + num;
            }
            return num;
        }
        static Reflect(vec, normal) {
            let out = new Laya.Vector3();
            Laya.Vector3.normalize(vec, vec);
            Laya.Vector3.normalize(normal, normal);
            Laya.Vector3.scale(normal, 2.0 * Laya.Vector3.dot(vec, normal), out);
            Laya.Vector3.subtract(vec, out, out);
            return out;
        }
        static GetVerticalDir(_dir) {
            if (_dir.z == 0) {
                return new Laya.Vector3(0, 0, -1);
            }
            else if (_dir.x == 0) {
                return new Laya.Vector3(1, 0, 0);
            }
            else {
                let out = new Laya.Vector3();
                Laya.Vector3.normalize(new Laya.Vector3(-_dir.z / _dir.x, 0, 1), out);
                return out;
            }
        }
        static WorldToScreen2(camera, point) {
            var pointA = this.InverseTransformPoint(camera.transform, point);
            var distance = pointA.z;
            var out = new Laya.Vector3();
            camera.viewport.project(point, camera.projectionViewMatrix, out);
            var value = new Laya.Vector3(out.x / Laya.stage.clientScaleX, out.y / Laya.stage.clientScaleY, distance);
            return value;
        }
        static ScreenToWorld(camera, point) {
            var halfFOV = (camera.fieldOfView * 0.5) * Math.PI / 180;
            let height = point.z * Math.tan(halfFOV);
            let width = height * camera.aspectRatio;
            let lowerLeft = this.GetLowerLeft(camera.transform, point.z, width, height);
            let v = this.GetScreenScale(width, height);
            var value = new Laya.Vector3();
            var lowerLeftA = this.InverseTransformPoint(camera.transform, lowerLeft);
            value = new Laya.Vector3(-point.x / v.x, point.y / v.y, 0);
            Laya.Vector3.add(lowerLeftA, value, value);
            value = this.TransformPoint(camera.transform, value);
            return value;
        }
        static GetScreenScale(width, height) {
            var v = new Laya.Vector3();
            v.x = Laya.stage.width / width / 2;
            v.y = Laya.stage.height / height / 2;
            return v;
        }
        static GetLowerLeft(transform, distance, width, height) {
            var lowerLeft = new Laya.Vector3();
            var right = new Laya.Vector3();
            transform.getRight(right);
            Laya.Vector3.normalize(right, right);
            var xx = new Laya.Vector3(right.x * width, right.y * width, right.z * width);
            Laya.Vector3.add(transform.position, xx, lowerLeft);
            var up = new Laya.Vector3();
            transform.getUp(up);
            Laya.Vector3.normalize(up, up);
            var yy = new Laya.Vector3(up.x * height, up.y * height, up.z * height);
            Laya.Vector3.subtract(lowerLeft, yy, lowerLeft);
            var forward = new Laya.Vector3();
            transform.getForward(forward);
            Laya.Vector3.normalize(forward, forward);
            var zz = new Laya.Vector3(forward.x * distance, forward.y * distance, forward.z * distance);
            Laya.Vector3.subtract(lowerLeft, zz, lowerLeft);
            return lowerLeft;
        }
        static InverseTransformPoint(origin, point) {
            var xx = new Laya.Vector3();
            origin.getRight(xx);
            var yy = new Laya.Vector3();
            origin.getUp(yy);
            var zz = new Laya.Vector3();
            origin.getForward(zz);
            var zz1 = new Laya.Vector3(-zz.x, -zz.y, -zz.z);
            var x = this.ProjectDistance(point, origin.position, xx);
            var y = this.ProjectDistance(point, origin.position, yy);
            var z = this.ProjectDistance(point, origin.position, zz1);
            var value = new Laya.Vector3(x, y, z);
            return value;
        }
        static TransformPoint(origin, point) {
            var value = new Laya.Vector3();
            Laya.Vector3.transformQuat(point, origin.rotation, value);
            Laya.Vector3.add(value, origin.position, value);
            return value;
        }
        static ProjectDistance(A, C, B) {
            var CA = new Laya.Vector3();
            Laya.Vector3.subtract(A, C, CA);
            var angle = this.Angle2(CA, B) * Math.PI / 180;
            var distance = Laya.Vector3.distance(A, C);
            distance *= Math.cos(angle);
            return distance;
        }
        static Angle2(ma, mb) {
            var v1 = (ma.x * mb.x) + (ma.y * mb.y) + (ma.z * mb.z);
            var ma_val = Math.sqrt(ma.x * ma.x + ma.y * ma.y + ma.z * ma.z);
            var mb_val = Math.sqrt(mb.x * mb.x + mb.y * mb.y + mb.z * mb.z);
            var cosM = v1 / (ma_val * mb_val);
            if (cosM < -1)
                cosM = -1;
            if (cosM > 1)
                cosM = 1;
            var angleAMB = Math.acos(cosM) * 180 / Math.PI;
            return angleAMB;
        }
        static IsEqual(num1, num2) {
            let absX = Math.abs(num1 - num2);
            return absX < 0.00001;
        }
        static changMat(matname, meshRenderer, renderQueue = 2000) {
            let npcmat = Laya.Loader.getRes(matname);
            if (!npcmat) {
                Laya.Material.load(matname, Laya.Handler.create(null, function (mat) {
                    if (mat && meshRenderer) {
                        meshRenderer.material = mat;
                    }
                }));
            }
            else {
                meshRenderer && (meshRenderer.material = npcmat);
            }
        }
        static changMat0(matname, meshRenderer) {
            let npcmat = Laya.Loader.getRes(matname);
            if (!npcmat) {
                Laya.Material.load(matname, Laya.Handler.create(null, function (mat) {
                    if (mat && meshRenderer) {
                        let mats = meshRenderer.materials;
                        mats[0] = mat;
                        meshRenderer.materials = mats;
                    }
                }));
            }
            else {
                if (npcmat && meshRenderer) {
                    let mats = meshRenderer.materials;
                    mats[0] = npcmat;
                    meshRenderer.materials = mats;
                }
            }
        }
        static changShareMat(matname, meshRenderer) {
            let npcmat = Laya.Loader.getRes(matname);
            if (!npcmat) {
                Laya.Material.load(matname, Laya.Handler.create(null, function (mat) {
                    if (mat && meshRenderer) {
                        meshRenderer.sharedMaterial = mat;
                    }
                }));
            }
            else {
                meshRenderer && (meshRenderer.sharedMaterial = npcmat);
            }
        }
        static mutation(first, second) {
            if (first.length != second.length)
                return false;
            var a = first.toLowerCase();
            var b = second.toLowerCase();
            for (var i = 0; i < b.length; i++) {
                if (a.indexOf(b[i]) === -1) {
                    return false;
                }
            }
            return true;
        }
        static isCollision(x1, y1, x2, y2, w, h) {
            if (x1 >= x2 && x1 <= x2 + w && y1 >= y2 && y1 <= y2 + h) {
                return true;
            }
            return false;
        }
        static isCollisionWithRect(x1, y1, w1, h1, x2, y2, w2, h2) {
            if (x1 >= x2 && x1 >= x2 + w2) {
                return false;
            }
            else if (x1 <= x2 && x1 + w1 <= x2) {
                return false;
            }
            else if (y1 >= y2 && y1 >= y2 + h2) {
                return false;
            }
            else if (y1 <= y2 && y1 + h1 <= y2) {
                return false;
            }
            return true;
        }
        static activeAllChild(node, isActive) {
            if (!node)
                return;
            for (let i = 0; i < node.numChildren; i++) {
                let child = node.getChildAt(i);
                child.active = isActive;
            }
        }
        static visibleAllChild(node, isActive) {
            if (!node)
                return;
            for (let i = 0; i < node.numChildren; i++) {
                let child = node.getChildAt(i);
                child.visible = isActive;
            }
        }
        static clearSprite(sprite3d) {
            if (!sprite3d)
                return;
            while (sprite3d.numChildren > 0) {
                let el = sprite3d.getChildAt(0);
                let scripts3d = sprite3d.getComponents(Laya.Script3D);
                if (scripts3d) {
                    for (let index = 0; index < scripts3d.length; index++) {
                        let script = scripts3d[index];
                        if (script) {
                            script.destroy();
                        }
                    }
                }
                let scripts = sprite3d.getComponents(Laya.Script);
                if (scripts) {
                    for (let index = 0; index < scripts.length; index++) {
                        let script = scripts[index];
                        if (script) {
                            script.destroy();
                        }
                    }
                }
                el.active = false;
                el.removeSelf();
                el.destroy();
            }
        }
        static clearNode(node) {
            if (!node)
                return;
            while (node.numChildren > 0) {
                let el = node.getChildAt(0);
                el.destroy(true);
            }
        }
        static removeComponent(sprite3d) {
            if (sprite3d) {
                let scripts3d = sprite3d.getComponents(Laya.Script3D);
                if (scripts3d) {
                    for (let index = 0; index < scripts3d.length; index++) {
                        let script = scripts3d[index];
                        if (script) {
                            script.destroy();
                        }
                    }
                }
                let scripts = sprite3d.getComponents(Laya.Script);
                if (scripts) {
                    for (let index = 0; index < scripts.length; index++) {
                        let script = scripts[index];
                        if (script) {
                            script.destroy();
                        }
                    }
                }
            }
        }
        static removeComponent2d(sprite) {
            if (sprite) {
                let scripts = sprite.getComponents(Laya.Script);
                if (scripts) {
                    for (let index = 0; index < scripts.length; index++) {
                        let script = scripts[index];
                        if (script) {
                            script.destroy();
                        }
                    }
                }
            }
        }
        static unique(array) {
            var temp = [];
            var index = [];
            var l = array.length;
            for (var i = 0; i < l; i++) {
                for (var j = i + 1; j < l; j++) {
                    if (array[i] === array[j]) {
                        i++;
                        j = i;
                    }
                }
                temp.push(array[i]);
                index.push(i);
            }
            return temp;
        }
        static screen2worldPosByName(checkObjName, scenee3d, camera, screenPos, worldPos, collisionGroup = Laya.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER, canCollideWith = Laya.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER) {
            let _startray = new Laya.Ray(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 0, 0));
            let _outHitResult = [];
            let screenPoint = new Laya.Vector2(screenPos.x / (Laya.stage.width * Laya.stage.scaleX), screenPos.y / (Laya.stage.height * Laya.stage.scaleY));
            camera.normalizedViewportPointToRay(screenPoint, _startray);
            scenee3d.physicsSimulation.rayCastAll(_startray, _outHitResult, 10000, collisionGroup, canCollideWith);
            for (let i = 0, n = _outHitResult.length; i < n; i++) {
                let collisionName = _outHitResult[i].collider.owner.name;
                if (collisionName.indexOf(checkObjName) != -1) {
                    worldPos.setValue(_outHitResult[i].point.x, _outHitResult[i].point.y, _outHitResult[i].point.z);
                    return true;
                }
            }
            return false;
        }
        static screen2worldPos(scenee3d, camera, screenPos, worldPos, collisionGroup = Laya.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER, canCollideWith = Laya.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER) {
            let _startray = new Laya.Ray(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 0, 0));
            let _outHitResult = new Laya.HitResult();
            camera.viewportPointToRay(screenPos, _startray);
            scenee3d.physicsSimulation.rayCast(_startray, _outHitResult, 10000, collisionGroup, canCollideWith);
            if (_outHitResult.succeeded) {
                console.log('碰撞的：', _outHitResult.collider.owner.name);
                worldPos.setValue(_outHitResult.point.x, _outHitResult.point.y, _outHitResult.point.z);
                console.log("worldPos", worldPos);
            }
        }
        static raySpriteByName(checkObjName, scenee3d, camera, screenPos, worldPos, collisionGroup = Laya.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER, canCollideWith = Laya.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER) {
            let _startray = new Laya.Ray(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 0, 0));
            let _outHitResult = [];
            camera.viewportPointToRay(screenPos, _startray);
            scenee3d.physicsSimulation.rayCastAll(_startray, _outHitResult, 10000, collisionGroup, canCollideWith);
            let posY = 0;
            let index = -1;
            for (let i = 0, n = _outHitResult.length; i < n; i++) {
                let collisionObj = _outHitResult[i].collider.owner;
                if ((index == -1 || collisionObj.transform.position.y > posY)) {
                    index = i;
                    posY = collisionObj.transform.position.y;
                }
            }
            if (index != -1) {
                worldPos.setValue(_outHitResult[index].point.x, _outHitResult[index].point.y, _outHitResult[index].point.z);
                return _outHitResult[index].collider.owner;
            }
            return null;
        }
        static rayCheckSprite(scenee3d, from, to, worldPos, collisionGroup = Laya.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER, canCollideWith = Laya.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER) {
            let direction = Util.vectorDirection(from, to);
            let _startray = new Laya.Ray(from, direction);
            let _outHitResult = new Laya.HitResult();
            ;
            scenee3d.physicsSimulation.rayCast(_startray, _outHitResult, 10000, collisionGroup, canCollideWith);
            if (_outHitResult && _outHitResult.succeeded) {
                worldPos.setValue(_outHitResult.point.x, _outHitResult.point.y, _outHitResult.point.z);
                return _outHitResult.collider.owner;
            }
            return null;
        }
        static shapeCheckSprite(scenee3d, from, to, worldPos, collisionGroup = Laya.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER, canCollideWith = Laya.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER) {
            let _outHitResult = new Laya.HitResult();
            var boxCollider = new Laya.BoxColliderShape(1, 1, 1);
            scenee3d.physicsSimulation.shapeCast(boxCollider, from, to, _outHitResult, null, null, collisionGroup, canCollideWith);
            if (_outHitResult && _outHitResult.succeeded) {
                worldPos.setValue(_outHitResult.point.x, _outHitResult.point.y, _outHitResult.point.z);
                return _outHitResult.collider.owner;
            }
            return null;
        }
        static getBaseURL(name, subPachage, suffix) {
            subPachage = subPachage ? subPachage : "3dres";
            let finalUrl = subPachage + "/Conventional/" + name;
            if (suffix != null && suffix.trim().length > 0) {
                finalUrl += "." + suffix;
            }
            return finalUrl;
        }
        static formatter(num, digits) {
            const si = [
                { value: 1, symbol: "" },
                { value: 1E3, symbol: "K" },
                { value: 1E6, symbol: "M" }
            ];
            const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
            let i;
            for (i = si.length - 1; i > 0; i--) {
                if (num >= si[i].value) {
                    break;
                }
            }
            return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
        }
        static formatterNoSi(num, digits) {
            const si = [
                { value: 1, symbol: "" },
                { value: 1E3, symbol: "K" },
                { value: 1E6, symbol: "M" }
            ];
            const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
            let i;
            for (i = si.length - 1; i > 0; i--) {
                if (num >= si[i].value) {
                    break;
                }
            }
            return (num / si[i].value).toFixed(digits).replace(rx, "$1");
        }
        static formatterSi(num, digits) {
            const si = [
                { value: 1, symbol: "" },
                { value: 1E3, symbol: "K" },
                { value: 1E6, symbol: "M" }
            ];
            const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
            let i;
            for (i = si.length - 1; i > 0; i--) {
                if (num >= si[i].value) {
                    break;
                }
            }
            return si[i].symbol;
        }
        static formatTime(minutes) {
            let h = Math.floor((minutes) / 60);
            let m = Math.floor((minutes) % 60);
            return this.pad(h, 2) + ":" + this.pad(m, 2);
        }
        static formatSecond(seconds) {
            let h = Math.floor((seconds) / 60);
            let m = Math.floor((seconds) % 60);
            return this.pad(h, 2) + ":" + this.pad(m, 2);
        }
        static pad(num, cover) {
            return String("0".repeat(cover) + num).slice(-cover);
        }
        static toFixed(num, decimal) {
            num = num.toString();
            let index = num.indexOf('.');
            if (index !== -1) {
                num = num.substring(0, decimal + index + 1);
            }
            else {
                num = num.substring(0);
            }
            return parseFloat(num).toFixed(decimal);
        }
        static secondToTime(second) {
            let days = Math.floor(second / 86400);
            second = second % 86400;
            let hours = Math.floor(second / 3600);
            second = second % 3600;
            let minutes = Math.floor(second / 60);
            second = second % 60;
            if (days > 0) {
                return days + "天" + hours + "小时" + minutes + "分" + second + "秒";
            }
            else if (hours > 0) {
                return hours + "小时" + minutes + "分" + second + "秒";
            }
            else {
                return minutes + "分" + second + "秒";
            }
        }
        static numberToPerBit(num) {
            let w = Math.floor(num / 10000);
            let d = Math.floor(num / 1000) % 10;
            let c = Math.floor(num / 100) % 10;
            let b = Math.floor(num / 10) % 10;
            let a = num % 10;
            let data = {};
            data.tenthousand = w;
            data.thousand = d;
            data.hundreds = c;
            data.tens = b;
            data.ones = a;
            return data;
        }
        static numberToPerBitArray(num) {
            return num.toString().split('');
        }
        static drawText3d(mTitleText, mTitleLabel, mTitleMat, txt) {
            mTitleLabel.width = 256;
            mTitleLabel.height = 128;
            mTitleLabel.align = "center";
            mTitleLabel.valign = "middle";
            mTitleLabel.fontSize = 30;
            mTitleLabel.font = "Arial";
            mTitleLabel.color = "#000000";
            mTitleLabel.text = txt;
            mTitleMat.albedoTexture = mTitleText;
            Laya.stage.frameOnce(2, this, function () {
                mTitleLabel.drawToTexture(256, 128, 0, 0, mTitleText);
            }, null, false);
        }
        static showNewGuide(data, parent, hasMask = true) {
            this.hideGuide(parent);
            if (hasMask) {
                let guideContainer = new Laya.Sprite();
                guideContainer.cacheAs = "bitmap";
                guideContainer.name = 'newguide';
                parent.addChild(guideContainer);
                guideContainer.zOrder = 100;
                var maskArea = new Laya.Sprite();
                maskArea.alpha = 0.5;
                maskArea.graphics.drawRect(0, 0, Math.min(2000, Laya.stage.width), Laya.stage.height, "#000000");
                guideContainer.addChild(maskArea);
                let interactionArea = new Laya.Sprite();
                interactionArea.blendMode = "destination-out";
                guideContainer.addChild(interactionArea);
                let hitArea = new Laya.HitArea();
                hitArea.hit.drawRect(0, 0, Math.min(2000, Laya.stage.width), Laya.stage.height, "#000000");
                guideContainer.hitArea = hitArea;
                guideContainer.mouseEnabled = true;
                if (Laya.stage.width > 2000) {
                    let guideContainer1 = new Laya.Sprite();
                    guideContainer1.cacheAs = "bitmap";
                    guideContainer1.name = 'newguide2';
                    parent.addChild(guideContainer1);
                    guideContainer1.zOrder = 100;
                    var maskArea1 = new Laya.Sprite();
                    maskArea1.alpha = 0.5;
                    maskArea1.graphics.drawRect(2000, 0, Laya.stage.width - 2000, Laya.stage.height, "#000000");
                    guideContainer1.addChild(maskArea1);
                    let hitArea1 = new Laya.HitArea();
                    hitArea1.hit.drawRect(2000, 0, Laya.stage.width - 2000, Laya.stage.height, "#000000");
                    guideContainer1.hitArea = hitArea1;
                    guideContainer1.mouseEnabled = true;
                }
                hitArea.unHit.clear();
                hitArea.unHit.drawCircle(data.x, data.y, data.radius, "#000000");
                interactionArea.graphics.clear();
                interactionArea.graphics.drawCircle(data.x, data.y, data.radius, "#000000");
            }
            Laya.loader.create("fc-layout/prefab/guide/ef_finger.json", Laya.Handler.create(this, this.onPrefabReady, [data, parent]), null, Laya.Loader.PREFAB);
        }
        static onPrefabReady(data, parent, prefab) {
            let guideFinger = prefab.create();
            parent.addChild(guideFinger);
            guideFinger.name = 'newfinger';
            guideFinger.pos(data.x + data.radius * 0.4, data.y);
            guideFinger.ef_finger.stop();
            guideFinger.ef_finger.play(0, true);
            guideFinger.zOrder = 101;
        }
        static hideGuide(parent) {
            parent && (parent.removeChildByName('newguide'));
            parent && (parent.removeChildByName('newguide1'));
            parent && (parent.removeChildByName('newfinger'));
        }
        static addCashEffect(root, goldShow, count, initPos, tartgetPos, isCashTip = false) {
            if (count == 0)
                return;
            if (!root || root.destroyed)
                return;
            if (isCashTip) {
                this.addCashTip(root, count, initPos);
            }
            if (count > 0) {
                let price = Math.floor(count / 6);
                for (let index = 0; index < 6; index++) {
                    let coin = DropItem.create(root, 'gameui/jb.png', initPos.x, initPos.y, tartgetPos.x, tartgetPos.y, 50 * index);
                    coin.once(EventConst.UI_DROP_ITEM_ANIM_COMPLETED, this, this.onCoinRecover, [count, goldShow, price, index == 5]);
                }
            }
        }
        static onCoinRecover(count, goldShow, award, isLast) {
            if (goldShow && !goldShow.destroyed) {
                let ani = goldShow['ani1'];
                if (ani) {
                    ani.stop();
                    ani.play(0, false);
                }
                if (isLast) {
                    this.addCountTip(goldShow, count, new Laya.Point(100, 24));
                }
            }
        }
        static addCountTip(root, count, pos) {
            let prefab = Laya.loader.getRes('game/prefab/goldCount.json');
            if (!prefab) {
                Laya.loader.load("game/prefab/goldCount.json", Laya.Handler.create(this, this.onCountPrefabReady, [root, count, pos]), null, Laya.Loader.PREFAB);
            }
            else {
                this.onCountPrefabReady(root, count, pos, prefab);
            }
        }
        static onCountPrefabReady(root, count, pos, prefab) {
            var cashTip = Laya.Pool.getItemByCreateFun("countTip", prefab.create, prefab);
            Laya.Tween.clearAll(cashTip);
            cashTip.visible = true;
            cashTip.value = (count > 0 ? "+" : "-") + count;
            cashTip.scaleX = 0.5;
            cashTip.scaleY = 0.5;
            cashTip.x = pos.x;
            cashTip.y = pos.y;
            cashTip.alpha = 1;
            root.addChild(cashTip);
            Laya.Tween.to(cashTip, { y: pos.y - 32, alpha: 0.5 }, 800, null, Laya.Handler.create(this, () => {
                cashTip.removeSelf();
                Laya.Pool.recover("countTip", cashTip);
            }));
        }
        static addCashTip(root, count, pos) {
            let prefab = Laya.loader.getRes('game/prefab/goldTip.json');
            if (!prefab) {
                Laya.loader.load("game/prefab/goldTip.json", Laya.Handler.create(this, this.onCashPrefabReady, [root, count, pos]), null, Laya.Loader.PREFAB);
            }
            else {
                this.onCashPrefabReady(root, count, pos, prefab);
            }
        }
        static onCashPrefabReady(root, count, pos, prefab) {
            if (!root || root.destroyed)
                return;
            var cashTip = Laya.Pool.getItemByCreateFun("goldTip", prefab.create, prefab);
            Laya.Tween.clearAll(cashTip);
            cashTip.visible = true;
            cashTip.getChildByName('val').value = ((count > 0 ? "+" : "-") + Util.formatter(Math.abs(count), 1));
            cashTip.x = pos.x;
            cashTip.y = pos.y + 200;
            cashTip.alpha = 1;
            root.addChild(cashTip);
            Laya.Tween.to(cashTip, { alpha: 0.5 }, 200, null, Laya.Handler.create(this, () => {
                cashTip.removeSelf();
                Laya.Pool.recover("goldTip", cashTip);
            }), 1000);
        }
    }
    Util.UP = new Laya.Vector3(0, 1, 0);
    Util.DOWN = new Laya.Vector3(0, -1, 0);
    Util.LEFT = new Laya.Vector3(1, 0, 0);
    Util.RIGHT = new Laya.Vector3(-1, 0, 0);
    Util.FORWARD = new Laya.Vector3(0, 0, 1);
    Util.ONE = new Laya.Vector3(1, 1, 1);
    Util.ZERO = new Laya.Vector3(0, 0, 0);
    Util.RADIUS_TO_ANGLE = 180 / Math.PI;
    Util.ANGLE_TO_RADIUS = Math.PI / 180;
    Util.signAngle = function (a, b) {
        let angle = this.angle(a, b);
        return this.cross(a, b) < 0 ? -angle : angle;
    };

    class GameData {
        constructor() {
            this.levelCfg = [];
            this.gameFinish = false;
            this.gameMode = 0;
            this.gameRefreshCount = 0;
            this.gameCrushCount = 0;
            this.gameChangCount = 0;
            this.isVideoClose = false;
            this.isShowAddColum = false;
            this.teamColumMax = 5;
            this.teamRowMax = 5;
            this.manRowMax = 6;
            this.mShareCount = 0;
        }
        getGameModeLock(mode) {
            var passcount = this.getLocalStorage("gamemodelock", mode);
            if (Util.IsNumber(passcount)) {
                return Number(passcount);
            }
            return 0;
        }
        setGameModeLock(val, mode) {
            this.setLocalStorage(val, "gamemodelock", mode);
        }
        getItemCount(name) {
            var passcount = this.getLocalStorage("itemcount", name);
            if (Util.IsNumber(passcount)) {
                return Number(passcount);
            }
            return 1;
        }
        setItemCount(val, name) {
            this.setLocalStorage(val, "itemcount", name);
        }
        get middlefield() {
            var middlefield = fc.framework.GameFrame.playerInfo.middlefield;
            return middlefield;
        }
        unlockMiddlefield(index) {
            var middlefield = fc.framework.GameFrame.playerInfo.middlefield;
            middlefield[index] = 1;
            fc.framework.GameFrame.savePlayerInfo({ middlefield: middlefield });
        }
        resetMiddlefield() {
            var middlefield = [0, 0, 1, 1, 1, 0];
            fc.framework.GameFrame.savePlayerInfo({ middlefield: middlefield });
        }
        isUnlockByMiddlefieldIndex(index) {
            return this.middlefield[index] == 1;
        }
        getUnlockMiddlefield() {
            let list = [];
            for (let index = 0; index < this.middlefield.length; index++) {
                let middlefield = this.middlefield[index];
                if (middlefield == 1) {
                    list.push(index);
                }
            }
            return list;
        }
        getIsGuide(step) {
            var isGuide = this.getLocalStorage("isGuide", step);
            if (Util.IsNumber(isGuide)) {
                return Number(isGuide);
            }
            return 0;
        }
        setIsGuide(val, step) {
            this.setLocalStorage(val, "isGuide", step);
        }
        get gameLevel() {
            switch (GameData.data.gameMode) {
                case GameMode.Normal:
                    var levelId = fc.framework.GameFrame.playerInfo.levelId;
                    if (Util.IsNumber(levelId)) {
                        return Number(levelId);
                    }
                    break;
                default:
                    break;
            }
            return 1;
        }
        set gameLevel(val) {
            switch (GameData.data.gameMode) {
                case GameMode.Normal:
                    fc.framework.GameFrame.savePlayerInfo({ levelId: val });
                    break;
                default:
                    break;
            }
        }
        get teacolum() {
            var teacolum = fc.framework.GameFrame.playerInfo.teacolum;
            if (Util.IsNumber(teacolum)) {
                return Number(teacolum);
            }
            return 3;
        }
        set teacolum(val) {
            fc.framework.GameFrame.savePlayerInfo({ teacolum: val });
        }
        get gameGold() {
            var gold = fc.framework.GameFrame.playerInfo.gold;
            if (Util.IsNumber(gold)) {
                return Number(gold);
            }
            return 0;
        }
        set gameGold(val) {
            fc.framework.GameFrame.savePlayerInfo({ gold: val });
        }
        gameGoldEarn(val) {
            val = val || 0;
            val = Math.abs(val);
            let gold = this.gameGold;
            gold += val;
            fc.framework.GameFrame.savePlayerInfo({ gold: gold });
            Laya.stage.event(fc.define.Event.GOLD_UPDATE);
            AudioManager.Instance.playSfx('gold.mp3');
        }
        isEnoughGold(val) {
            let gold = this.gameGold;
            if (val > gold) {
                return false;
            }
            return true;
        }
        gameGoldSpend(val) {
            if (!this.isEnoughGold(val)) {
                GameData.data.gameGold = 0;
                Laya.stage.event(fc.define.Event.GOLD_UPDATE);
                return;
            }
            ;
            val = Math.abs(val);
            let gold = this.gameGold;
            gold -= val;
            gold = Math.max(0, gold);
            fc.framework.GameFrame.savePlayerInfo({ gold: gold });
            Laya.stage.event(fc.define.Event.GOLD_UPDATE);
        }
        static initData(data) {
            this.data.levelCfg = data;
        }
        getLevelData(levelId) {
            if (levelId >= this.levelCfg.length) {
                levelId = Util.random(this.levelCfg.length - 5, this.levelCfg.length);
            }
            return this.levelCfg[levelId - 1];
        }
        getLocalStorage(key, suffix = 0) {
            let localName = key + suffix;
            return fc.framework.GameFrame.getLocalStorage(localName);
        }
        setLocalStorage(val, key, suffix = 0) {
            let localName = key + suffix;
            fc.framework.GameFrame.setLocalStorage(localName, val);
        }
    }
    GameData.data = new GameData();

    var AnimListener = fc.plugin.AnimStateListener;
    class CameraCtr extends Laya.Script3D {
        constructor() {
            super();
            this.camera = null;
            this.cameraApe = null;
            this.cameraTransform = null;
            this.defaultCamPosition = new Laya.Vector3();
            this.defaultCamRotation = new Laya.Vector3();
            this.curCamPosition = new Laya.Vector3();
            this.curCamRotation = new Laya.Vector3();
            this.target = null;
            this.offsetRotation = new Laya.Vector3();
            this.offsetPosition = new Laya.Vector3();
            this.animator = null;
            this.nodeAnimator = null;
            this.directionLight = null;
            this.isHomeing = false;
            this.isFight = false;
            this.pos = Util.ZERO.clone();
        }
        initCameraByPlayer(player) {
            this.target = player;
            if (!player)
                return;
            this.cameraApe.transform.position = this.defaultCamPosition.clone();
            this.defaultCamPosition.cloneTo(this.curCamPosition);
            Laya.Vector3.subtract(this.curCamPosition, player.transform.position, this.offsetPosition);
            this.cameraApe.transform.rotationEuler = this.defaultCamRotation.clone();
            this.defaultCamRotation.cloneTo(this.curCamRotation);
            Laya.Vector3.subtract(this.curCamRotation, player.transform.rotationEuler, this.offsetRotation);
        }
        resetCamera() {
            this.cameraTransform.position = this.defaultCamPosition.clone();
            this.cameraTransform.rotationEuler = this.defaultCamRotation.clone();
        }
        updateRotation(isTurnAngle) {
            let localRotationEulerY = -isTurnAngle;
            Laya.Tween.to(this.cameraApe.transform, {
                localRotationEulerY: localRotationEulerY
            }, 500, null, null);
        }
        followPos(targetpos) {
            Laya.MouseManager.enabled = false;
            this.target = null;
            Laya.Tween.to(this.cameraApe.transform, {
                localPositionX: targetpos.x, localPositionZ: targetpos.z, localPositionY: targetpos.y
            }, 500, null, Laya.Handler.create(this, () => {
                Laya.MouseManager.enabled = true;
            }));
        }
        setPosition(targetpos) {
            this.target = null;
            this.cameraApe.transform.position = targetpos.clone();
        }
        world2ScreenPos(worldPos, screenPos) {
            let screenPoint = new Laya.Vector4();
            this.camera.viewport.project(worldPos, this.camera.projectionViewMatrix, screenPoint);
            screenPos.x = screenPoint.x / Laya.stage.clientScaleX;
            screenPos.y = screenPoint.y / Laya.stage.clientScaleY;
        }
        camera2PlayerDir() {
            if (this.target) {
                return Util.vectorDirection(this.camera.transform.position, this.target.transform.position);
            }
            else {
                return Util.FORWARD;
            }
        }
        onAwake() {
            this.cameraApe = this.owner;
            this.camera = this.cameraApe.getChildByName("Main Camera");
            this.animator = this.camera.getComponent(Laya.Animator);
            this.animator && (this.animator.speed = 0);
            this.nodeAnimator = this.cameraApe.getComponent(Laya.Animator);
            this.nodeAnimator && (this.nodeAnimator.speed = 0);
            this.cameraTransform = this.owner.transform;
            this.cameraApe.transform.position.cloneTo(this.defaultCamPosition);
            this.defaultCamPosition.cloneTo(this.curCamPosition);
            this.cameraApe.transform.rotationEuler.cloneTo(this.defaultCamRotation);
            this.defaultCamRotation.cloneTo(this.curCamRotation);
            this.directionLight = this.cameraApe.getChildByName("Directional Light");
            this.directionLight.shadowMode = Laya.ShadowMode.Hard;
            this.directionLight.shadowDistance = 40;
            this.directionLight.shadowResolution = 2048;
            this.directionLight.shadowCascadesMode = Laya.ShadowCascadesMode.NoCascades;
            this.directionLight.shadowNormalBias = 4;
            this.directionLight.shadowStrength = 0.3;
            Laya.stage.on("CameraTarget", this, this.initCameraByPlayer);
        }
        setShadowMode(mode) {
            this.directionLight.shadowMode = mode;
        }
        onEnable() {
            if (this.animator) {
                AnimListener.add(this.animator, "game", this);
                AnimListener.add(this.animator, "home", this);
            }
        }
        onStart() {
        }
        setFieldOfView(val) {
            this.camera && (this.camera.fieldOfView = val);
        }
        onDisable() {
        }
        onDestroy() {
            this.camera = null;
            this.cameraApe = null;
        }
        onAnimStateEnter(stateName, animator) {
        }
        onAnimStateUpdate(stateName, animator) {
        }
        onAnimStateExit(stateName, animator) {
        }
        playHomeAni() {
        }
        playGameAni() {
        }
        playFightAni() {
        }
        play(newName) {
            if (!this.animator || !newName)
                return;
            this.animator.play(newName, 0, 0);
            this.curClipName = newName;
            this.animator.speed = 1;
        }
        onLateUpdate() {
            if (!this.target)
                return;
            if (this.isFight)
                return;
            if (!this.isHomeing) {
            }
        }
    }

    class ResourceMgr {
        static preLoadRes(resRootPath, resList) {
            resList.forEach(function (cfgUrl) {
                ResourceMgr.urls.push(ResourceMgr.get3dPrefabUrl(resRootPath, cfgUrl));
            });
        }
        static preCreateRes() {
            if (this.urls.length > 0) {
                Laya.loader.create(this.urls, Laya.Handler.create(this, () => {
                    Laya.stage.event(EventConst.LOADRES_SUCCESS);
                }));
            }
            else {
                Laya.stage.event(EventConst.LOADRES_SUCCESS);
            }
        }
        static get3dPrefabUrl(resRootPath, filename) {
            return resRootPath + filename + ".lh";
        }
        static loadSprite3d(resRootPath, url) {
            return Laya.loader.getRes(this.get3dPrefabUrl(resRootPath, url));
        }
        static getSprite3d(original) {
            var fc_sign = original.url;
            var self = this;
            return Laya.Pool.getItemByCreateFun(fc_sign, function () {
                var sprite3d = Laya.Sprite3D.instantiate(original, null, false, new Laya.Vector3(0, 0, 0));
                sprite3d["_fc_sign"] = fc_sign;
                return sprite3d;
            });
        }
        static recoverSprite3d(sprite3d) {
            sprite3d.removeSelf();
            if (sprite3d["_fc_sign"] == null) {
                return;
            }
            Laya.Pool.recover(sprite3d["_fc_sign"], sprite3d);
        }
        static load3dResAsyn(resPath, onCompleted, onProgress) {
            Laya.loader.create(resPath, onCompleted, onProgress);
        }
        static loadSprite3dAsyn(resRootPath, resName, onCompleted, onProgress) {
            if (resName instanceof Array) {
                var spriteUrls = [];
                for (let index = 0; index < resName.length; index++) {
                    spriteUrls.push(this.get3dPrefabUrl(resRootPath, resName[index]));
                }
                this.load3dResAsyn(spriteUrls, onCompleted, onProgress);
            }
            else {
                var spriteUrl = this.get3dPrefabUrl(resRootPath, resName);
                this.load3dResAsyn(spriteUrl, onCompleted, onProgress);
            }
        }
    }
    ResourceMgr.threeDResRootPath1 = "3dres/Conventional/";
    ResourceMgr.threeDResRootPath2 = "3dres2/Conventional/";
    ResourceMgr.threeDResRootPath3 = "3dres3/Conventional/";
    ResourceMgr.res = "3dres";
    ResourceMgr.res2 = "3dres2";
    ResourceMgr.res3 = "3dres3";
    ResourceMgr.res3List = [];
    ResourceMgr.res2List = [];
    ResourceMgr.efEesList = [];
    ResourceMgr.urls = [];

    var Resource = fc.framework.Resource;
    var ObjectPool = fc.plugin.ObjectPool;
    class EffectMgr {
        constructor() {
            this.effectList = [];
            this.spriteEffectList = [];
            this.spriteOtherEfList = [];
        }
        static Instance() {
            if (this.instance == null)
                this.instance = new EffectMgr();
            return this.instance;
        }
        init(parent) {
            this.parent = parent;
        }
        createSpriteEffect(name, isSceneRoot = true, pkgName = null) {
            let original = Resource.loadSprite3d(name, pkgName);
            let clone3d = ObjectPool.getSprite3d(original);
            clone3d.name = name;
            if (isSceneRoot && this.parent) {
                this.parent.addChild(clone3d);
            }
            clone3d.active = true;
            let index = this.spriteEffectList.indexOf(clone3d);
            if (index == -1)
                this.spriteEffectList[this.spriteEffectList.length] = clone3d;
            return clone3d;
        }
        removeSpriteEffect(ape, isRecover = true) {
            let index = this.spriteEffectList.indexOf(ape);
            if (index != -1)
                this.spriteEffectList.splice(index, 1);
            if (isRecover) {
                ape.active = false;
                ObjectPool.recoverSprite3d(ape);
            }
            else {
                ape.removeSelf();
                ape.destroy();
            }
        }
        createSpriteEf2(resRootPath, name, isSceneRoot = true) {
            let original = ResourceMgr.loadSprite3d(resRootPath, name);
            if (original == null)
                return null;
            let clone3d = ResourceMgr.getSprite3d(original);
            if (clone3d == null)
                return null;
            clone3d.name = name;
            if (isSceneRoot && this.parent) {
                this.parent.addChild(clone3d);
            }
            clone3d.active = true;
            let index = this.spriteOtherEfList.indexOf(clone3d);
            if (index == -1)
                this.spriteOtherEfList[this.spriteOtherEfList.length] = clone3d;
            return clone3d;
        }
        removeSpriteE2(ape, isRecover = true) {
            let index = this.spriteOtherEfList.indexOf(ape);
            if (index != -1)
                this.spriteOtherEfList.splice(index, 1);
            if (isRecover) {
                ape.active = false;
                ResourceMgr.recoverSprite3d(ape);
            }
            else {
                ape.removeSelf();
                ape.destroy();
            }
        }
        addEffect(effect) {
            if (!effect)
                return;
            let index = this.effectList.indexOf(effect);
            if (index == -1)
                this.effectList[this.effectList.length] = effect;
        }
        removeEffect(effect) {
            let index = this.effectList.indexOf(effect);
            if (index != -1)
                this.effectList.splice(index, 1);
            let sprite3d = effect.sprite3d;
            sprite3d.removeSelf();
            sprite3d.destroy();
            effect.destroy();
        }
        onDestroy() {
            if (this.effectList.length > 0) {
                for (let i = this.effectList.length - 1; i >= 0; i--) {
                    const effect = this.effectList.pop();
                    let sprite3d = effect.sprite3d;
                    effect.destroy();
                    sprite3d.active = false;
                    sprite3d.removeSelf();
                    sprite3d.destroy();
                }
                this.effectList = [];
            }
            if (this.spriteEffectList.length > 0) {
                for (let i = this.spriteEffectList.length - 1; i >= 0; i--) {
                    const effect = this.spriteEffectList.pop();
                    ObjectPool.recoverSprite3d(effect);
                }
                this.spriteEffectList = [];
            }
            if (this.spriteOtherEfList.length > 0) {
                for (let i = this.spriteOtherEfList.length - 1; i >= 0; i--) {
                    const effect = this.spriteOtherEfList.pop();
                    ResourceMgr.recoverSprite3d(effect);
                }
                this.spriteOtherEfList = [];
            }
        }
    }
    EffectMgr.instance = null;

    var Resource$1 = fc.framework.Resource;
    var ObjectPool$1 = fc.plugin.ObjectPool;
    class BulletMgr {
        constructor() {
            this.bulletList = [];
        }
        static Instance() {
            if (this.instance == null)
                this.instance = new BulletMgr();
            return this.instance;
        }
        init(parent) {
            this.parent = parent;
        }
        createBullet(name) {
            var original = Resource$1.loadSprite3d(name);
            let clone3d = ObjectPool$1.getSprite3d(original);
            clone3d.name = name;
            clone3d.active = true;
            this.parent.addChild(clone3d);
            return clone3d;
        }
        addBullet(bullet) {
            if (!bullet)
                return;
            let index = this.bulletList.indexOf(bullet);
            if (index == -1)
                this.bulletList[this.bulletList.length] = bullet;
        }
        getBulletList() {
            return this.bulletList;
        }
        removeBullet(bullet, isRecover = true) {
            let index = this.bulletList.indexOf(bullet);
            if (index != -1)
                this.bulletList.splice(index, 1);
            let bullet3d = bullet.bullet3d;
            bullet.destroy();
            if (isRecover) {
                bullet3d.active = false;
                ObjectPool$1.recoverSprite3d(bullet3d);
            }
            else {
                bullet3d.removeSelf();
                bullet3d.destroy();
            }
        }
        onDestroy() {
            if (this.bulletList.length > 0) {
                for (let i = this.bulletList.length - 1; i >= 0; i--) {
                    let bullet = this.bulletList.pop();
                    let sprite3d = bullet.bullet3d;
                    bullet.destroy();
                    sprite3d.active = false;
                    bullet = null;
                    ObjectPool$1.recoverSprite3d(sprite3d);
                }
                this.bulletList = [];
            }
        }
    }
    BulletMgr.instance = null;

    class GoldMgr {
        constructor() {
            this.goldList = [];
        }
        static Instance() {
            if (this.instance == null)
                this.instance = new GoldMgr();
            return this.instance;
        }
        init(parent) {
            this.parent = parent;
        }
        createGold(name, pos, type = null) {
            var original = ResourceMgr.loadSprite3d(ResourceMgr.threeDResRootPath2, name);
            let clone3d = ResourceMgr.getSprite3d(original);
            clone3d.name = name;
            this.parent.addChild(clone3d);
            Util.removeComponent(clone3d);
            clone3d.active = true;
            clone3d.transform.position = pos.clone();
            type && clone3d.addComponent(type);
            let index = this.goldList.indexOf(clone3d);
            if (index == -1)
                this.goldList[this.goldList.length] = clone3d;
            return clone3d;
        }
        removeGold(ape) {
            let index = this.goldList.indexOf(ape);
            if (index != -1)
                this.goldList.splice(index, 1);
            Util.removeComponent(ape);
            ape.active = false;
            ResourceMgr.recoverSprite3d(ape);
        }
        onDestroy() {
            if (this.goldList.length > 0) {
                for (let i = this.goldList.length - 1; i >= 0; i--) {
                    const gold = this.goldList.pop();
                    Util.removeComponent(gold);
                    gold.active = false;
                    ResourceMgr.recoverSprite3d(gold);
                }
                this.goldList = [];
            }
        }
        getGoldList() {
            return this.goldList;
        }
        addGoldsY(count, name, radius, diePosition) {
            var angleRate = Math.floor(360 / count);
            angleRate = angleRate * Math.PI / 180;
            for (let i = 0; i < count; i++) {
                const gold = this.createGold(name, diePosition.clone());
                let offsetX = Math.sin(angleRate * i) * radius;
                let offsetZ = Math.cos(angleRate * i) * radius;
                let x = gold.transform.position.x + offsetX;
                let y = gold.transform.position.y + 2;
                let yy = gold.transform.position.y + 0.5;
                let z = gold.transform.position.z + offsetZ;
                Laya.Tween.to(gold.transform, {
                    localPositionX: x - offsetX * 0.5, localPositionY: y, localPositionZ: z - offsetZ * 0.5
                }, 150, Laya.Ease.strongIn, Laya.Handler.create(this, () => {
                    Laya.Tween.to(gold.transform, {
                        localPositionX: x, localPositionY: yy, localPositionZ: z
                    }, 150, Laya.Ease.strongIn, null);
                }));
            }
        }
        addGoldsZ(parent, count, name, radius, centerPosition) {
            var angleRate = Math.floor(360 / count);
            angleRate = angleRate * Math.PI / 180;
            for (let i = 0; i < count; i++) {
                const gold = this.createGold(name, centerPosition.clone());
                parent.addChild(gold);
                if (gold && gold.getComponent(Laya.PhysicsCollider)) {
                    let collider = gold.getComponent(Laya.PhysicsCollider);
                    collider.enabled = false;
                }
                gold.transform.position = centerPosition.clone();
                let offsetX = Math.sin(angleRate * i) * radius;
                let offsetY = Math.cos(angleRate * i) * radius;
                let x = centerPosition.x + offsetX;
                let y = centerPosition.y + offsetY;
                gold.transform.localPosition = new Laya.Vector3(x, y, centerPosition.z);
                Laya.Tween.to(gold.transform, {
                    localPositionX: x, localPositionY: y
                }, 200, Laya.Ease.strongIn, null);
            }
        }
    }
    GoldMgr.instance = null;

    class AStar {
        searchRoad(grid) {
            this._grid = grid;
            let start_x = grid.startNode.x;
            let start_y = grid.startNode.y;
            let end_x = grid.endNode.x;
            let end_y = grid.endNode.y;
            let openList = [], closeList = [], result = [], result_index;
            grid.startNode.g = 0;
            openList.push(grid.startNode);
            do {
                let currentPoint = openList.pop();
                closeList.push(currentPoint);
                let surroundPoint = this.SurroundPoint(currentPoint);
                for (let i in surroundPoint) {
                    let item = surroundPoint[i];
                    if (item.x >= 0 &&
                        item.y >= 0 &&
                        item.y < grid.numRows &&
                        item.x < grid.numCols &&
                        grid.getNode(item.x, item.y).walkable &&
                        !this.existList(item, closeList) &&
                        grid.getNode(item.x, currentPoint.y).walkable &&
                        grid.getNode(currentPoint.x, item.y).walkable) {
                        let g = currentPoint.g + ((currentPoint.x - item.x) * (currentPoint.y - item.y) == 0 ? 10 : 14);
                        if (!this.existList(item, openList)) {
                            item.h = Math.abs(end_x - item.x) * 10 + Math.abs(end_y - item.y) * 10;
                            item.g = g;
                            item.h = item.h + item.g;
                            item.parent = currentPoint;
                            openList.push(item);
                            if (item.y == 0) {
                                end_x = item.x;
                                end_y = item.y;
                                openList.sort(this.sortF);
                                break;
                            }
                        }
                        else {
                            let index = Number(this.existList(item, openList));
                            if (g < openList[index].g) {
                                openList[index].parent = currentPoint;
                                openList[index].g = g;
                                openList[index].f = g + openList[index].h;
                                if (item.y == 0) {
                                    end_x = item.x;
                                    end_y = item.y;
                                    openList.sort(this.sortF);
                                    break;
                                }
                            }
                        }
                    }
                }
                if (openList.length == 0) {
                    break;
                }
                openList.sort(this.sortF);
            } while (!(result_index = this.existList({ x: end_x, y: end_y }, openList)));
            if (!result_index) {
                result = [];
            }
            else {
                let currentObj = openList[result_index];
                do {
                    result.unshift({
                        x: currentObj.x,
                        y: currentObj.y
                    });
                    currentObj = currentObj.parent;
                } while (currentObj.x != start_x || currentObj.y != start_y);
            }
            return result;
        }
        searchHorizontal(grid) {
            this._grid = grid;
            let start_x = grid.startNode.x;
            let start_y = grid.startNode.y;
            let end_x = grid.endNode.x;
            let end_y = grid.endNode.y;
            let openList = [], closeList = [], result = [], result_index;
            grid.startNode.g = 0;
            openList.push(grid.startNode);
            do {
                let currentPoint = openList.pop();
                closeList.push(currentPoint);
                let surroundPoint = this.horizontalPoint(currentPoint);
                for (let i in surroundPoint) {
                    let item = surroundPoint[i];
                    if (item.x >= 0 &&
                        item.y >= 0 &&
                        item.y < grid.numRows &&
                        item.x < grid.numCols &&
                        grid.getNode(item.x, item.y).walkable &&
                        !this.existList(item, closeList) &&
                        grid.getNode(item.x, currentPoint.y).walkable &&
                        grid.getNode(currentPoint.x, item.y).walkable) {
                        let g = currentPoint.g + ((currentPoint.x - item.x) * (currentPoint.y - item.y) == 0 ? 10 : 14);
                        if (!this.existList(item, openList)) {
                            item.h = Math.abs(end_x - item.x) * 10 + Math.abs(end_y - item.y) * 10;
                            item.g = g;
                            item.h = item.h + item.g;
                            item.parent = currentPoint;
                            openList.push(item);
                        }
                        else {
                            let index = Number(this.existList(item, openList));
                            if (g < openList[index].g) {
                                openList[index].parent = currentPoint;
                                openList[index].g = g;
                                openList[index].f = g + openList[index].h;
                            }
                        }
                    }
                }
                if (openList.length == 0) {
                    break;
                }
                openList.sort(this.sortF);
            } while (!(result_index = this.existList({ x: end_x, y: end_y }, openList)));
            if (!result_index) {
                result = [];
            }
            else {
                let currentObj = openList[result_index];
                do {
                    result.unshift({
                        x: currentObj.x,
                        y: currentObj.y
                    });
                    currentObj = currentObj.parent;
                } while (currentObj.x != start_x || currentObj.y != start_y);
            }
            return result;
        }
        sortF(a, b) {
            return b.f - a.f;
        }
        horizontalPoint(curPoint) {
            let x = curPoint.x, y = curPoint.y;
            var points = [];
            var point0 = this._grid.getNode(x, y - 1);
            if (point0 && this._grid.canJoint(curPoint, point0)) {
                points.push(point0);
            }
            var point1 = this._grid.getNode(x, y + 1);
            if (point1 && this._grid.canJoint(curPoint, point1)) {
                points.push(point1);
            }
            return points;
        }
        SurroundPoint(curPoint) {
            let x = curPoint.x, y = curPoint.y;
            var points = [];
            var point0 = this._grid.getNode(x + 1, y);
            if (point0 && this._grid.canJoint(curPoint, point0)) {
                points.push(point0);
            }
            var point1 = this._grid.getNode(x, y + 1);
            if (point1 && this._grid.canJoint(curPoint, point1)) {
                points.push(point1);
            }
            var point2 = this._grid.getNode(x - 1, y);
            if (point2 && this._grid.canJoint(curPoint, point2)) {
                points.push(point2);
            }
            var point3 = this._grid.getNode(x, y - 1);
            if (point3 && this._grid.canJoint(curPoint, point3)) {
                points.push(point3);
            }
            return points;
        }
        existList(point, list) {
            for (let i in list) {
                if (point.x == list[i].x && point.y == list[i].y) {
                    return i;
                }
            }
            return false;
        }
    }

    class ANode {
        constructor(x, y, posX, posY) {
            this.costMultiplier = 1.0;
            this.x = x;
            this.y = y;
            this.posX = posX;
            this.posY = posY;
        }
    }

    class Grid {
        constructor(mapData, embolusData, width, height, startPos) {
            this._numCols = mapData[0].length;
            this._numRows = mapData.length;
            this._embolusData = embolusData;
            this._nodes = [];
            for (let y = 0; y < this._numRows; y++) {
                this._nodes[y] = new Array();
                for (let x = 0; x < this._numCols; x++) {
                    this._nodes[y][x] = new ANode(x, y, startPos.x - x * width, startPos.z - y * height + 1);
                    this._nodes[y][x].walkable = mapData[y][x];
                }
            }
        }
        addEmbolusData(data) {
            if (!this._embolusData)
                return;
            this._embolusData = this._embolusData.concat(data);
            this._embolusData = Util.unique(this._embolusData);
        }
        removeEmbolusData(data) {
            if (!this._embolusData)
                return;
            for (let i = 0; i < data.length; i++) {
                const value = data[i];
                var index = this._embolusData.indexOf(value);
                if (index != -1) {
                    this._embolusData.splice(index, 1);
                }
            }
            this._embolusData = Util.unique(this._embolusData);
        }
        canJoint(startNode, endNode) {
            return true;
        }
        getNode(x, y) {
            if (this._nodes[y])
                return this._nodes[y][x];
            return null;
        }
        getNodes() {
            return this._nodes;
        }
        setEndNode(x, y) {
            this._endNode = this._nodes[y][x];
        }
        setStartNode(x, y) {
            this._startNode = this._nodes[y][x];
        }
        setWalkable(x, y, value) {
            this._nodes[y][x].walkable = value;
        }
        get endNode() {
            return this._endNode;
        }
        get numCols() {
            return this._numCols;
        }
        get numRows() {
            return this._numRows;
        }
        get startNode() {
            return this._startNode;
        }
        get embolusData() {
            return this._embolusData;
        }
    }

    class BaseScript extends Laya.Script3D {
        constructor() {
            super();
        }
        onAwake() {
            super.onAwake();
            this.sprite3d = this.owner;
            this.mtransform = this.sprite3d.transform;
        }
        initBase() {
            this.sprite3d = this.owner;
        }
        set position(pos) {
            this.sprite3d.transform.position = pos;
        }
        get position() {
            return this.sprite3d.transform.position;
        }
        set localPosition(pos) {
            this.sprite3d.transform.localPosition = pos;
        }
        get localPosition() {
            return this.sprite3d.transform.localPosition;
        }
        set localPositionX(val) {
            this.sprite3d.transform.localPositionX = val;
        }
        get localPositionX() {
            return this.sprite3d.transform.localPositionX;
        }
        set localPositionY(val) {
            this.sprite3d.transform.localPositionY = val;
        }
        get localPositionY() {
            return this.sprite3d.transform.localPositionY;
        }
        set localPositionZ(val) {
            this.sprite3d.transform.localPositionZ = val;
        }
        get localPositionZ() {
            return this.sprite3d.transform.localPositionZ;
        }
        translate(translation, isLocal) {
            this.sprite3d.transform.translate(translation, isLocal);
        }
        setRotate(rot, isLocal, isRadian) {
            this.sprite3d.transform.rotate(rot, isLocal, isRadian);
        }
        get transform() {
            return this.sprite3d.transform;
        }
        set rotationEuler(euler) {
            this.sprite3d.transform.rotationEuler = euler;
        }
        get rotationEuler() {
            return this.sprite3d.transform.rotationEuler;
        }
        get rotation() {
            return this.sprite3d.transform.rotation;
        }
        set rotation(rot) {
            this.sprite3d.transform.rotation = rot;
        }
        setScale(scale) {
            this.sprite3d.transform.setWorldLossyScale(scale);
        }
        getScale() {
            return this.sprite3d.transform.getWorldLossyScale();
        }
        getObj() {
            return this.sprite3d;
        }
        show() {
            this.sprite3d.active = true;
        }
        hide() {
            this.sprite3d.active = false;
        }
        get active() {
            return this.sprite3d.active;
        }
        set active(active) {
            this.sprite3d.active = active;
        }
        destroy() {
            super.destroy();
        }
        shake() {
        }
        unLock() {
            return false;
        }
        isFull() {
            return false;
        }
        isEmpty() {
            return false;
        }
        addStackPlate(plates) { }
        selectTopSamllPlates() {
            return [];
        }
        getPlateColorId() {
            return -1;
        }
        getAllPlate() {
            return [];
        }
        onUnLock() { }
        addWasherSound(count) {
            if (count < 6) {
                AudioManager.Instance.playSfx('plate1.mp3');
            }
            else if (count == 6) {
                AudioManager.Instance.playSfx('plate2.mp3');
            }
            else {
                AudioManager.Instance.playSfx('plate3.mp3');
            }
        }
    }

    var GameFrame = fc.framework.GameFrame;
    class GameObject extends BaseScript {
        constructor() {
            super(...arguments);
            this.isPause = true;
            this.dir = new Laya.Vector3();
            this.moveDir = new Laya.Vector3(0, 0, 0);
        }
        setScene3d(scene3d) {
            this.scene3d = scene3d;
        }
        onAwake() {
            super.onAwake();
            this.sprite3d = this.owner;
            this.mtransform = this.sprite3d.transform;
        }
        onEnable() {
            super.onEnable();
            this.initEvent();
        }
        onDisable() {
            super.onDisable();
            this.removeEvent();
        }
        onStart() {
            super.onStart();
            this.setScene3d(GameFrame.scene3d);
        }
        initEvent() {
        }
        removeEvent() {
        }
        setColliderEnable(isEnable) {
            if (!this.owner)
                return;
            this.rigidbody3d && (this.rigidbody3d.enabled = isEnable);
            this.collider3d && (this.collider3d.enabled = isEnable);
        }
        activeSprite(isEnable) {
        }
        on3dTriggerEnter(other, self) {
        }
        on3dTriggerExit(other, self) {
        }
        on3dTriggerStay(other, self) {
        }
        fcCollisionEnter(script, collision) {
            console.log('碰撞到', collision.other.owner.name);
        }
        fcCollisionStay(script, collision) {
        }
        fcCollisionExit(script, collision) {
        }
    }

    class MiddleField extends GameObject {
        constructor() {
            super(...arguments);
            this.idx = 0;
            this.isUnlock = false;
            this.stickMan = null;
            this.defaultColor = new Laya.Vector4(255 / 255, 255 / 255, 255 / 255, 255 / 255);
        }
        get SlotPos() {
            return this.slot.transform.position.clone();
        }
        onAwake() {
            super.onAwake();
            this.sprite3d = this.owner;
            this.mtransform = this.sprite3d.transform;
            this.slot = this.sprite3d.getChildByName('slot');
            this.locked = this.sprite3d.getChildByName('Locked');
            this.icon = this.sprite3d.getChildByName('icon').getChildByName('icon');
            this.video = this.locked.getChildByName('video').getChildByName('video');
            this.share = this.locked.getChildByName('video').getChildByName('share');
            this.collider3d = this.sprite3d.getComponent(Laya.PhysicsCollider);
        }
        init(idx) {
            this.idx = idx;
        }
        onEnable() {
            super.onEnable();
        }
        onDisable() {
            super.onDisable();
        }
        onDestroy() {
            super.onDestroy();
        }
        onStart() {
            super.onStart();
            this.initMiddleField();
            if (this.idx == 5 && (fc.platform.PlatformConfig.platformTag == 'byte' || fc.platform.PlatformConfig.platformTag == 'ks')) {
                this.video.active = false;
                this.share && (this.share.active = true);
            }
            else {
                this.video.active = true;
                this.share && (this.share.active = false);
            }
        }
        initMiddleField() {
            this.isUnlock = this.unLock();
            this.locked.active = !this.isUnlock;
            this.icon.active = false;
            this.setColliderEnable(!this.isUnlock);
        }
        setStickMan(stickMan) {
            this.stickMan = stickMan;
            let mat = this.icon.meshRenderer.material;
            if (stickMan) {
                this.icon.active = true;
                mat.albedoColor = ResConst.StickmanColor[stickMan.colorId].clone();
            }
            else {
                this.icon.active = false;
                mat.albedoColor = this.defaultColor.clone();
            }
        }
        isEmpty() {
            return this.stickMan == null;
        }
        unLock() {
            return GameData.data.isUnlockByMiddlefieldIndex(this.idx);
        }
        onUnLock() {
            fc.framework.GameFrame.playClickSound();
            if (this.idx == 5 && (fc.platform.PlatformConfig.platformTag == 'byte' || fc.platform.PlatformConfig.platformTag == 'ks')) {
                Laya.MouseManager.enabled = false;
                fc.framework.Channel.shareAppMessage({ title: fc.view.ActivityCenter.getShareTitle(), imageUrl: fc.view.ActivityCenter.getShareImage(), desc: fc.view.ActivityCenter.getShareDesc() }, Laya.Handler.create(this, function () {
                    GameData.data.unlockMiddlefield(this.idx);
                    this.initMiddleField();
                    Laya.MouseManager.enabled = true;
                }), Laya.Handler.create(this, function () {
                    Laya.MouseManager.enabled = true;
                    fc.framework.GameFrame.showToastMsg(fc.framework.GameFrame['langCfg'].sharefailtxt);
                }));
            }
            else {
                if (fc.framework.Channel.isVideoEnable()) {
                    Laya.MouseManager.enabled = false;
                    fc.framework.Channel.playVideo(Laya.Handler.create(this, () => {
                        GameData.data.unlockMiddlefield(this.idx);
                        this.initMiddleField();
                        Laya.MouseManager.enabled = true;
                    }), Laya.Handler.create(this, function () {
                        Laya.MouseManager.enabled = true;
                        if (fc.platform.PlatformConfig.platformTag != 'ssjjh5') {
                            fc.framework.GameFrame.showToastMsg(fc.framework.GameFrame['langCfg'].novideotxt);
                        }
                    }), Laya.Handler.create(this, function () {
                        Laya.MouseManager.enabled = true;
                        if (fc.platform.PlatformConfig.platformTag != 'ssjjh5') {
                            fc.framework.GameFrame.showToastMsg(fc.framework.GameFrame['langCfg'].novideotxt);
                        }
                    }));
                }
                else {
                    if (fc.platform.PlatformConfig.platformTag != 'ssjjh5') {
                        fc.framework.GameFrame.showToastMsg(fc.framework.GameFrame['langCfg'].novideotxt);
                    }
                }
            }
        }
    }

    class Field extends GameObject {
        constructor() {
            super(...arguments);
            this.x = 0;
            this.y = 0;
        }
        onAwake() {
            super.onAwake();
            this.sprite3d = this.owner;
            this.mtransform = this.sprite3d.transform;
        }
        init(x, y) {
            this.x = x;
            this.y = y;
        }
        onEnable() {
            super.onEnable();
        }
        onDisable() {
            super.onDisable();
        }
        onDestroy() {
            super.onDestroy();
        }
        onStart() {
            super.onStart();
            this.smokes = this.sprite3d.getChildByName('slot').getChildByName('ef_smokes');
            this.smokes.active = false;
        }
        showSmokes() {
            this.smokes.active = true;
            this.owner.timerOnce(500, this, () => {
                this.smokes.active = false;
            }, null, false);
        }
    }

    class Bezier {
        static draw_bezier_curves(points, count, step) {
            var bezier_curves_points = new Array();
            var t = 0;
            do {
                var temp_point = this.bezier_interpolation_func(t, points, count);
                t += step;
                bezier_curves_points.push(temp_point);
            } while (t <= 1 && count > 1);
            return bezier_curves_points;
        }
        static bezier_interpolation_func(t, points, count) {
            var result = new Laya.Vector3();
            var part = [];
            var sum_x = 0, sum_y = 0, sum_z = 0;
            for (let i = 0; i < count; i++) {
                var tmp;
                var n_order = count - 1;
                tmp = this.calc_combination_number(n_order, i);
                sum_x += (tmp * points[i].x * Math.pow((1 - t), n_order - i) * Math.pow(t, i));
                sum_y += (tmp * points[i].y * Math.pow((1 - t), n_order - i) * Math.pow(t, i));
                sum_z += (tmp * points[i].z * Math.pow((1 - t), n_order - i) * Math.pow(t, i));
            }
            result.x = sum_x;
            result.y = sum_y;
            result.z = sum_z;
            return result;
        }
        static calc_combination_number(n, k) {
            var result = [];
            for (let i = 1; i <= n; i++) {
                result[i] = 1;
                for (let j = i - 1; j >= 1; j--)
                    result[j] += result[j - 1];
                result[0] = 1;
            }
            return result[k];
        }
        static creatorTwoBezierPoint(p0, p1, p2, pointCount) {
            var vertices = [], t = 0;
            for (var i = 0; i < pointCount; i++) {
                let x = Math.pow(1 - t, 2) * p0.x + 2 * t * (1 - t) * p1.x + Math.pow(t, 2) * p2.x;
                let y = Math.pow(1 - t, 2) * p0.y + 2 * t * (1 - t) * p1.y + Math.pow(t, 2) * p2.y;
                let z = Math.pow(1 - t, 2) * p0.z + 2 * t * (1 - t) * p1.z + Math.pow(t, 2) * p2.z;
                vertices.push(new Laya.Vector3(x, y, z));
                t += 1.0 / pointCount;
            }
            return vertices;
        }
    }

    class Cup extends GameObject {
        constructor() {
            super(...arguments);
            this.x = 0;
            this.y = 0;
            this.cupState = CupState.UnTake;
        }
        onAwake() {
            super.onAwake();
            this.sprite3d = this.owner;
            this.mtransform = this.sprite3d.transform;
            this.lid = this.sprite3d.getChildByName('lid');
            this.lid.active = false;
            Laya.stage.on(EventConst.Refresh_Game, this, this.onRefresh);
        }
        onEnable() {
            super.onEnable();
        }
        onDisable() {
            super.onDisable();
        }
        onDestroy() {
            super.onDestroy();
            Laya.stage.off(EventConst.Refresh_Game, this, this.onRefresh);
        }
        onStart() {
            super.onStart();
            this.transform.localRotationEuler = Util.ZERO.clone();
            this.transform.localScale = new Laya.Vector3(0.5, 0.5, 0.5);
            this.cupState = CupState.UnTake;
            Laya.Tween.to(this.transform, { localScaleX: 1, localScaleY: 1, localScaleZ: 1 }, 100, null, Laya.Handler.create(this, () => {
                this.cupState = CupState.CanTake;
            }));
        }
        get CupState() {
            return this.cupState;
        }
        set CupState(val) {
            this.cupState = val;
        }
        init(x, y, colorId) {
            this.colorId = colorId;
            this.x = x;
            this.y = y;
        }
        resetXY(x, y) {
            this.x = x;
            this.y = y;
            this.cupState = CupState.UnTake;
        }
        onRefresh() {
            if (this.cupState != CupState.UnTake)
                return;
            this.transform.position = GameMgr.Instance().getTeafield(this.x, this.y).transform.position.clone();
            GameMgr.Instance().setTeaList(this.x, this.y, this);
            this.cupState = CupState.UnTake;
            this.transform.localScale = new Laya.Vector3(0.5, 0.5, 0.5);
            Laya.Tween.to(this.transform, { localScaleX: 1, localScaleY: 1, localScaleZ: 1 }, 100, null, Laya.Handler.create(this, () => {
                this.cupState = CupState.CanTake;
            }));
        }
        moveToPosition(x, y, pos) {
            this.x = x;
            this.y = y;
            this.cupState = CupState.UnTake;
            Laya.Tween.to(this.transform, { localPositionX: pos.x, localPositionY: pos.y, localPositionZ: pos.z }, 200, null, Laya.Handler.create(this, () => {
                this.cupState = CupState.CanTake;
                this.transform.position = pos;
            }));
        }
        takenAway() {
            if (this.x != -1 && this.y != -1) {
                let field = GameMgr.Instance().getTeafield(this.x, this.y);
                if (field) {
                    let fc = field.getComponent(Field);
                    fc && (fc.showSmokes());
                }
                GameMgr.Instance().setTeaList(this.x, this.y, null);
            }
            this.lid.active = true;
            this.cupState = CupState.Taked;
        }
        throwTrack(curPos, targetPos) {
            this.mtransform.localRotationEuler = Util.ZERO.clone();
            var positions = Bezier.creatorTwoBezierPoint(curPos, new Laya.Vector3((curPos.x + targetPos.x) * 0.5, 2, (curPos.z + targetPos.z) * 0.5), targetPos, 10);
            var flytime = 300;
            var totleTime = 0;
            var tweenTime = flytime / positions.length;
            var d = flytime / (positions.length * (positions.length - 1));
            var curTime = tweenTime;
            for (let i = 0; i < positions.length; i++) {
                Laya.Tween.to(this.transform, {
                    localPositionX: positions[i].x,
                    localPositionY: positions[i].y,
                    localPositionZ: positions[i].z
                }, curTime, null, Laya.Handler.create(this, (i) => {
                    if (i == positions.length - 1) {
                        this.localPosition = targetPos.clone();
                    }
                }, [i]), totleTime);
                totleTime += curTime;
                curTime += d;
            }
            Laya.Tween.to(this.transform, {
                localScaleX: 1,
                localScaleY: 1,
                localScaleZ: 1
            }, flytime);
        }
    }

    class CollisionConst {
    }
    CollisionConst.GROUP_A = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CHARACTERFILTER;
    CollisionConst.GROUP_PLAYER = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER5;
    CollisionConst.GROUP_SPAWMER = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER6;
    CollisionConst.GROUP_BULLET = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER1;
    CollisionConst.GROUP_ENEMY_BULLET = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER4;
    CollisionConst.GROUP_RAY = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER2;
    CollisionConst.GROUP_ENMEY = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER3;
    CollisionConst.CAN_BULLET = Laya.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER ^ CollisionConst.GROUP_A ^ CollisionConst.GROUP_BULLET ^ CollisionConst.GROUP_ENEMY_BULLET;
    CollisionConst.CAN_ENEMY_BULLET = Laya.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER ^ CollisionConst.GROUP_ENMEY ^ CollisionConst.GROUP_BULLET ^ CollisionConst.GROUP_ENEMY_BULLET;
    CollisionConst.CAN_ENMEY = CollisionConst.GROUP_BULLET | CollisionConst.GROUP_RAY;
    CollisionConst.CAN_PLAYER = CollisionConst.GROUP_ENEMY_BULLET | CollisionConst.GROUP_RAY;
    CollisionConst.CAN_A = Laya.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER ^ CollisionConst.GROUP_RAY ^ CollisionConst.GROUP_A ^ CollisionConst.GROUP_BULLET;
    CollisionConst.CAN_SPAWMER = CollisionConst.GROUP_A;
    CollisionConst.CAN_RAY = Laya.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER ^ CollisionConst.GROUP_BULLET ^ CollisionConst.GROUP_ENEMY_BULLET ^ CollisionConst.GROUP_A;

    class AnimatorController extends Laya.Script {
        onAwake() {
        }
        onStart() {
        }
        onEnable() {
            super.onEnable();
        }
        onDisable() {
            super.onDestroy();
        }
        onAnimEvt(...args) {
        }
        onAnimStateEnter(stateName, animator) {
        }
        onAnimStateUpdate(stateName, animator) {
        }
        onAnimStateExit(stateName, animator) {
        }
        onDestroy() {
            this.animator = null;
            this.character = null;
            this.curClipName = null;
        }
        stop() { }
        play(newName) {
            if (!this.animator || !newName || this.curClipName == newName)
                return;
            if (!this.character)
                return;
            this.animator.play(newName, 0, 0);
            this.curClipName = newName;
            this.animator.speed = 1;
        }
    }
    AnimatorController.Walking = "Walking";
    AnimatorController.Walking_1 = "Walking_1";
    AnimatorController.Carrying = "Carrying";
    AnimatorController.Idle = "Idle";

    class CollisionScript3d extends Laya.Script3D {
        constructor() {
            super();
            this.listener = null;
        }
        static Init(sprite3d, listener) {
            var trigger = sprite3d.getComponent(CollisionScript3d);
            if (!trigger) {
                trigger = sprite3d.addComponent(CollisionScript3d);
            }
            trigger.listener = listener;
        }
        onCollisionEnter(collision) {
            if (this.listener != null && this.listener.fcCollisionEnter) {
                this.listener.fcCollisionEnter(this, collision);
            }
        }
        onCollisionExit(collision) {
            if (this.listener != null && this.listener.fcCollisionExit) {
                this.listener.fcCollisionExit(this, collision);
            }
        }
        onCollisionStay(collision) {
            if (this.listener != null && this.listener.fcCollisionStay) {
                this.listener.fcCollisionStay(this, collision);
            }
        }
        onDestroy() {
            this.listener = null;
        }
    }

    var TriggerScript3d = fc.plugin.Trigger3dListener;
    class Character extends GameObject {
        constructor() {
            super(...arguments);
            this.isMoveing = false;
            this.moveSpeed = 4;
            this.isAtkedLock = false;
            this.nickName = "游客" + Util.random(10000, 9000000);
            this.name = null;
            this.tartgetPoint = new Laya.Vector2();
            this.isTouching = false;
            this.movevelocity = new Laya.Vector3;
        }
        getTouch() {
            return this.isTouching;
        }
        setTouch(val) {
            this.isTouching = val;
        }
        onAwake() {
            this.sprite3d = this.owner;
            this.mtransform = this.sprite3d.transform;
        }
        onStart() {
            super.onStart();
            this.rigidbody3d = this.sprite3d.getComponent(Laya.Rigidbody3D);
            this.collider3d = this.sprite3d.getComponent(Laya.PhysicsCollider);
            if (this.rigidbody3d) {
                TriggerScript3d.add(this.rigidbody3d, this);
                CollisionScript3d.Init(this.sprite3d, this);
            }
            else if (this.collider3d) {
                TriggerScript3d.add(this.collider3d, this);
            }
            this.animatorController = this.owner.getComponent(AnimatorController);
        }
        reset() { }
        onRun() {
        }
        onIdle() {
        }
        getBoxCount() {
            return 0;
        }
        initEvent() {
            Laya.stage.on(Character.EVENT_PAUSE, this, this.onPause);
            Laya.stage.on(Character.EVENT_RESUME, this, this.onResume);
        }
        removeEvent() {
            Laya.stage.off(Character.EVENT_PAUSE, this, this.onPause);
            Laya.stage.off(Character.EVENT_RESUME, this, this.onResume);
        }
        onResume() {
            this.isPause = false;
        }
        onPause() {
            this.isPause = true;
        }
        onDie() {
            this.onPause();
        }
        onWin() {
            this.onPause();
        }
        onAtk(atkedObj) {
        }
        onDamage(damage, critatk = 1) {
        }
        isCritAtk() {
            return false;
        }
        on3dTriggerEnter(other, self) {
            super.on3dTriggerEnter(other, self);
        }
        on3dTriggerExit(other, self) {
            super.on3dTriggerExit(other, self);
        }
        fcCollisionEnter(script, collision) {
            super.fcCollisionEnter(script, collision);
        }
        playIdleAni() {
        }
        playMageAni() {
        }
        playShotAni() {
        }
        playUpgradeAni() {
        }
        playCollectAni() {
        }
        playAtkAni() {
        }
        playRunAni() {
        }
        playWinAni() {
        }
        playDieAni() {
        }
        playAimAni() {
        }
        setPath(path) {
            this.mtransform.position = path.clone();
        }
        setRotation(angle) {
            let rotation = new Laya.Vector3(this.mtransform.rotationEuler.x, angle, this.mtransform.rotationEuler.z);
            this.mtransform.rotationEuler = rotation.clone();
            this.mtransform.getForward(this.dir);
        }
        setRotationTo(angleDelta) {
            let rotation = new Laya.Vector3();
            Laya.Vector3.add(this.mtransform.rotationEuler, angleDelta, rotation);
            this.mtransform.rotationEuler = rotation.clone();
            this.mtransform.getForward(this.dir);
        }
        isLife() {
            return !this.isPause;
        }
        move(dir) {
        }
        getNearEnemyOfAtkRang(character = null) {
            return null;
        }
        getNearEnemyOfRang(character = null) {
            return null;
        }
        getRandomEnemyOfRang() {
            return;
        }
        getEnemiesOfRang(rang) {
            return [];
        }
        getNearObjectOfRang() {
            return;
        }
        getRandomObjectOfRang() {
            return;
        }
        rotationRole(angle) {
        }
        isInAtkRang(character) {
            if (!character)
                return false;
            let newDisSqr = Laya.Vector3.distanceSquared(character.mtransform.position, this.mtransform.position);
            return (newDisSqr < 1);
        }
        isInRadarRang(character) {
            return false;
        }
        collectBrick(brick3d) {
        }
        rayCheckWall(dir, rang, y = 0) {
            if (!dir || dir == null) {
                return null;
            }
            var from = new Laya.Vector3(0, 0, 0);
            Laya.Vector3.normalize(dir, from);
            var to = new Laya.Vector3(0, 0, 0);
            var raylenght = new Laya.Vector3(0, 0, 0);
            Laya.Vector3.scale(from, -rang, raylenght);
            Laya.Vector3.add(this.mtransform.position.clone(), raylenght, to);
            this.mtransform.position.cloneTo(from);
            from.y = 1;
            to.y = 1;
            var hitResults = [];
            this.scene3d.physicsSimulation.raycastAllFromTo(from, to, hitResults, CollisionConst.GROUP_RAY, CollisionConst.CAN_RAY);
            var lineSprite = this.scene3d.addChild(new Laya.PixelLineSprite3D(1));
            lineSprite.addLine(from, to, Laya.Color.RED, Laya.Color.RED);
            for (let i = 0, n = hitResults.length; i < n; i++) {
                console.log('射线检测到的：', hitResults[i].collider.owner.name, '碰撞法线：', hitResults[i].normal);
                var otherSprite3d = hitResults[i].collider.owner;
                if (otherSprite3d && otherSprite3d.active) {
                    var character = otherSprite3d.getComponent(Character);
                    if (!character || character != this) {
                        return hitResults[i];
                    }
                }
            }
            return null;
        }
        intersectsWall(dir, rang, targetObj) {
            if (!dir || dir == null) {
                return false;
            }
            if (!targetObj.meshRenderer)
                return false;
            var from = new Laya.Vector3(0, 0, 0);
            Laya.Vector3.normalize(dir, from);
            var to = new Laya.Vector3(0, 0, 0);
            var raylenght = new Laya.Vector3(0, 0, 0);
            Laya.Vector3.scale(from, -rang, raylenght);
            Laya.Vector3.add(this.mtransform.position.clone(), raylenght, to);
            var hitResult = new Laya.HitResult();
            this.mtransform.position.cloneTo(from);
            from.y = 1;
            to.y = 1;
            let boundBox = targetObj.meshRenderer.bounds._boundBox;
            let intersects = Util.judgeIntersect(from.x, from.z, to.x, to.z, boundBox.max.x, boundBox.max.z, boundBox.min.x, boundBox.min.z);
            return intersects;
        }
    }
    Character.EVENT_PAUSE = "pause";
    Character.EVENT_RESUME = "resume";
    Character.EVENT_REVIVE = "relive";
    Character.EVENT_DIE = "die";
    Character.EVENT_CHANGESTATE = "changestate";

    class IState {
        Enter(ai) {
        }
        Update(ai) {
        }
        Exit(ai) {
        }
    }

    class Idle extends IState {
        constructor() {
            super(...arguments);
            this.idleTime = 0;
            this.behavior = ScriptType.idle;
        }
        Enter(ai) {
            ai.character.playIdleAni();
            this.idleTime = 0;
            ai.character.move(null);
        }
        Update(ai) {
        }
    }

    class Move extends IState {
        constructor() {
            super(...arguments);
            this.behavior = ScriptType.move;
            this.targetPosition = [];
            this.curPosIndex = 0;
            this.isReverse = false;
            this.srcPosition = new Laya.Vector3();
            this.destPosition = new Laya.Vector3();
            this.position = new Laya.Vector3();
            this.delayTime = 0;
            this.delay = 0;
            this.normalizeDir = new Laya.Vector3();
        }
        Enter(ai) {
            console.log("Di chuyển bình thường!");
            this.character = ai.character;
            this.targetPosition = this.character.getMovePoints();
            if (this.targetPosition.length <= 1) {
                ai.changeState(new Idle());
                return;
            }
            this.isReverse = false;
            this.curPosIndex = 0;
            var node = this.curNode();
            ai.character.setPath(node.clone());
            this.updatePath(ai.character);
            this.delayTime = 0;
            this.delay = 10;
            this.speed = ai.character.moveSpeed;
            this.isLoop = 0;
        }
        Update(ai) {
            if (Laya.timer.delta > 500)
                return;
            let delta = Laya.timer.delta;
            if (this.delay > 0) {
                this.delay -= delta;
                ai.character.playIdleAni();
                return;
            }
            let character = ai.character;
            if (character && character.isLife() && character.animatorController) {
                ai.character.playRunAni();
                var deltaPos = new Laya.Vector3();
                Laya.Vector3.scale(this.normalizeDir, delta * this.speed * 0.001, deltaPos);
                this.moveForward(deltaPos, ai);
                character.setPath(this.position.clone());
            }
            else {
                ai.character && ai.character.move(null);
            }
        }
        moveForward(moveDelta, ai) {
            var moveDist = Laya.Vector3.scalarLength(moveDelta);
            this.passedDist += moveDist;
            Laya.Vector3.add(ai.character.mtransform.position.clone(), moveDelta, this.position);
            while (this.passedDist >= this.nodeDist) {
                if (this.isLoop == 0 && this.curPosIndex == this.targetPosition.length - 1) {
                    ai.changeState(new Idle());
                    this.character.reachTargetPos();
                    return;
                }
                Laya.Vector3.lerp(this.srcPosition, this.destPosition, 1, this.position);
                this.updatePath(ai.character);
                if (this.delayTime > 0) {
                    this.delay = this.delayTime;
                }
            }
        }
        curNode() {
            return this.targetPosition[this.curPosIndex].clone();
        }
        nextNode() {
            let index = 0;
            if (this.isReverse) {
                index = this.curPosIndex - 1;
                if (index < 0) {
                    this.isReverse = false;
                    index = this.curPosIndex + 1;
                }
            }
            else {
                index = this.curPosIndex + 1;
                if (index >= this.targetPosition.length) {
                    this.isReverse = true;
                    index = this.curPosIndex - 1;
                }
            }
            this.curPosIndex = index;
            return this.targetPosition[this.curPosIndex].clone();
        }
        updatePath(ai) {
            var curNode = this.curNode();
            if (curNode) {
                curNode.cloneTo(this.srcPosition);
                var nextNode = this.nextNode();
                if (nextNode) {
                    nextNode.cloneTo(this.destPosition);
                    this.nodeDist = Laya.Vector3.distance(this.srcPosition, this.destPosition);
                    this.passedDist = 0;
                    this.normalizeDir = Util.vectorDirection(this.srcPosition, this.destPosition).clone();
                    var y = Util.angleY(this.destPosition, this.srcPosition);
                    ai.setRotation(y);
                }
                else {
                    this.nodeDist = 1;
                    this.passedDist = 0;
                }
            }
            else {
                this.passedDist = 0;
                this.nodeDist = 1;
            }
        }
        Exit(ai) {
        }
    }

    class ElementController extends Laya.Script3D {
        constructor() {
            super(...arguments);
            this.character = null;
            this.dir = new Laya.Vector3(0, 0, 1);
            this.curState = null;
        }
        onStart() {
            this.character = this.owner.getComponent(Character);
            this.sprite3d = this.owner;
            this.mTransform = this.sprite3d.transform;
            this.setBehaviorAndChangeState(this.behavior);
        }
        setBehavior(behavior) {
            this.behavior = behavior;
        }
        setBehaviorAndChangeState(behavior) {
            this.behavior = behavior;
            switch (this.behavior) {
                case ScriptType.move:
                    this.changeState(new Move());
                    break;
                case ScriptType.idle:
                    this.changeState(new Idle());
                    break;
                default:
                    break;
            }
        }
        onEnable() {
            this.initEvent();
        }
        onDisable() {
            this.removeEvent();
        }
        initEvent() {
            this.owner.on(Character.EVENT_REVIVE, this, this.reset);
            this.owner.on(Character.EVENT_DIE, this, this.onDie);
            this.owner.on(Character.EVENT_CHANGESTATE, this, this.setBehaviorAndChangeState);
        }
        removeEvent() {
            this.owner.off(Character.EVENT_REVIVE, this, this.reset);
            this.owner.off(Character.EVENT_DIE, this, this.onDie);
            this.owner.off(Character.EVENT_CHANGESTATE, this, this.setBehaviorAndChangeState);
        }
        reset() {
            this.changeState(this.curState);
        }
        onDie() {
            this.changeState(null);
        }
        onUpdate() {
            if (this.curState == null || this.character == null || this.character.isPause)
                return;
            this.curState.Update(this);
        }
        changeState(newState) {
            if (this.curState && newState && newState.behavior == this.curState.behavior)
                return;
            if (this.curState != null) {
                this.curState.Exit(this);
                this.curState = null;
            }
            if (!newState)
                return;
            this.curState = newState;
            this.curState.Enter(this);
            this.behavior = this.curState.behavior;
        }
    }

    class AnimEvents extends Laya.Script3D {
        constructor() {
            super();
        }
        onStart() {
        }
        onPullEvt() {
            console.log("onPullEvt");
            this.callFunc && this.callFunc('onPullEvt');
        }
        onPushEvt() {
            console.log("onPushEvt");
            this.callFunc && this.callFunc('onPushEvt');
        }
        onChoiceEvt() {
            console.log("onChoiceEvt");
            this.callFunc && this.callFunc('onChoiceEvt');
        }
        onBulletEvt() {
            console.log("onBulletEvt");
            this.callFunc && this.callFunc('onBulletEvt');
        }
        onFlyEvt() {
            console.log("onFlyEvt");
            this.callFunc && this.callFunc('onFlyEvt');
        }
    }

    class PlayerAnimatorController extends AnimatorController {
        constructor() {
            super(...arguments);
            this.animEvents = null;
        }
        onAwake() {
            this.animator = this.owner.getComponent(Laya.Animator);
            this.animator.speed = 0;
        }
        onStart() {
            this.animEvents = this.owner.getComponent(AnimEvents);
            if (this.animEvents) {
                this.animEvents.destroy();
            }
            this.animEvents = this.owner.addComponent(AnimEvents);
            this.animEvents.callFunc = function (event) {
                if (this.character && this.character[event]) {
                    var method = this.character[event];
                    method.apply(this.character, null);
                }
            }.bind(this);
            if (this.animator) {
            }
        }
        onEnable() {
            super.onEnable();
            this.animator = this.owner.getComponent(Laya.Animator);
            this.animator.speed = 0;
            if (this.character == null) {
            }
        }
        onDisable() {
            if (this.animator) {
            }
            this.onDestroy();
        }
        onAnimStateEnter(stateName, animator) {
        }
        onAnimStateExit(stateName, animator) {
            switch (stateName) {
                default:
                    break;
            }
        }
        onDestroy() {
            this.animator = null;
            this.character = null;
            this.curClipName = null;
        }
        play(newName) {
            if (!this.animator || !newName || this.curClipName == newName)
                return;
            if (!this.character)
                return;
            this.animator.play(newName, 0, 0);
            this.animator.speed = 2;
            this.curClipName = newName;
            console.log(newName);
        }
        stop() {
            this.animator.speed = 0;
            this.curClipName = null;
        }
    }

    var OutlineVS = "#if defined(GL_FRAGMENT_PRECISION_HIGH)// 原来的写法会被我们自己的解析流程处理，而我们的解析是不认内置宏的，导致被删掉，所以改成 if defined 了\n\tprecision highp float;\n\tprecision highp int;\n#else\n\tprecision mediump float;\n\tprecision mediump int;\n#endif\n\n#include \"Lighting.glsl\";\n#include \"LayaUtile.glsl\"\n#include \"Shadow.glsl\";\n\nattribute vec4 a_Position;\n\n#ifdef GPU_INSTANCE\n\tuniform mat4 u_ViewProjection;\n#else\n\tuniform mat4 u_MvpMatrix;\n#endif\n\n#if defined(DIFFUSEMAP)&&defined(ALPHATEST)\n\tattribute vec2 a_Texcoord0;\n\tvarying vec2 v_Texcoord0;\n\tuniform vec4 u_TilingOffset;\n#endif\n\n#ifdef COLOR\n\tattribute vec4 a_Color;\n\tvarying vec4 v_Color;\n#endif\n\n#ifdef BONE\n\tconst int c_MaxBoneCount = 24;\n\tattribute vec4 a_BoneIndices;\n\tattribute vec4 a_BoneWeights;\n\tuniform mat4 u_Bones[c_MaxBoneCount];\n#endif\n\nattribute vec3 a_Normal;\nvarying vec3 v_Normal; \nvarying vec3 v_ViewDir; \nuniform vec3 u_CameraPos;\n\n#ifdef GPU_INSTANCE\n\tattribute mat4 a_WorldMat;\n#else\n\tuniform mat4 u_WorldMat;\n#endif\n\nuniform float u_OutlineWidth;\n\nvoid main()\n{\n\tvec4 position;\n\t#ifdef BONE\n\t\tmat4 skinTransform;\n\t \t#ifdef SIMPLEBONE\n\t\t\tfloat currentPixelPos;\n\t\t\t#ifdef GPU_INSTANCE\n\t\t\t\tcurrentPixelPos = a_SimpleTextureParams.x+a_SimpleTextureParams.y;\n\t\t\t#else\n\t\t\t\tcurrentPixelPos = u_SimpleAnimatorParams.x+u_SimpleAnimatorParams.y;\n\t\t\t#endif\n\t\t\tfloat offset = 1.0/u_SimpleAnimatorTextureSize;\n\t\t\tskinTransform =  loadMatFromTexture(currentPixelPos,int(a_BoneIndices.x),offset) * a_BoneWeights.x;\n\t\t\tskinTransform += loadMatFromTexture(currentPixelPos,int(a_BoneIndices.y),offset) * a_BoneWeights.y;\n\t\t\tskinTransform += loadMatFromTexture(currentPixelPos,int(a_BoneIndices.z),offset) * a_BoneWeights.z;\n\t\t\tskinTransform += loadMatFromTexture(currentPixelPos,int(a_BoneIndices.w),offset) * a_BoneWeights.w;\n\t\t#else\n\t\t\tskinTransform =  u_Bones[int(a_BoneIndices.x)] * a_BoneWeights.x;\n\t\t\tskinTransform += u_Bones[int(a_BoneIndices.y)] * a_BoneWeights.y;\n\t\t\tskinTransform += u_Bones[int(a_BoneIndices.z)] * a_BoneWeights.z;\n\t\t\tskinTransform += u_Bones[int(a_BoneIndices.w)] * a_BoneWeights.w;\n\t\t#endif\n\t\tposition = vec4(a_Position.xyz + a_Normal * u_OutlineWidth, a_Position.w);\n\t\tposition = skinTransform*position;\n\t #else\n\t\tposition = vec4(a_Position.xyz + a_Normal * u_OutlineWidth, a_Position.w);\n\t#endif\n\t\n\n\tmat4 worldMat;\n\t#ifdef GPU_INSTANCE\n\t\tworldMat = a_WorldMat;\n\t#else\n\t\tworldMat = u_WorldMat;\n\t#endif\n\n\tvec3 positionWS = (worldMat*position).xyz;\n\tv_ViewDir = normalize(u_CameraPos-positionWS);\n\n\t#ifdef GPU_INSTANCE\n\t\tgl_Position = u_ViewProjection * worldMat * position;\n\t#else\n\t\tgl_Position = u_MvpMatrix * position;\n\t#endif\n\n\tmat3 worldInvMat;\n\t#ifdef BONE\n\t\tworldInvMat=INVERSE_MAT(mat3(worldMat*skinTransform));\n\t#else\n\t\tworldInvMat=INVERSE_MAT(mat3(worldMat));\n\t#endif  \n\n\tv_Normal=normalize(a_Normal*worldInvMat);\n\n\t#if defined(DIFFUSEMAP)&&defined(ALPHATEST)\n\t\tv_Texcoord0=TransformUV(a_Texcoord0,u_TilingOffset);\n\t#endif\n\n\tgl_Position=remapGLPositionZ(gl_Position);\n}";

    var OutlinePS = "#if defined(GL_FRAGMENT_PRECISION_HIGH)// 原来的写法会被我们自己的解析流程处理，而我们的解析是不认内置宏的，导致被删掉，所以改成 if defined 了\n\tprecision highp float;\n\tprecision highp int;\n#else\n\tprecision mediump float;\n\tprecision mediump int;\n#endif\n\n#include \"Lighting.glsl\";\n#include \"LayaUtile.glsl\"\n#include \"Shadow.glsl\";\n\nvarying vec3 v_Normal;\nvarying vec3 v_ViewDir;\n\nuniform float u_OutlineLightness; \nuniform vec4 u_OutlineColor;\n\n#if defined(DIFFUSEMAP)&&defined(ALPHATEST)\n\tuniform float u_AlphaTestValue;\n\tuniform sampler2D u_DiffuseTexture;\n#endif\n\nvoid main()\n{\n\t#if defined(DIFFUSEMAP)&&defined(ALPHATEST)\n\t\tvec4 difTexColor=texture2D(u_DiffuseTexture, v_Texcoord0);\n\t\tif(difTexColor.a<u_AlphaTestValue)\n\t\t\tdiscard;\n\t#endif \n\n\tvec3 normal = normalize(v_Normal);\n\tvec3 viewDir = normalize(v_ViewDir);\n\tif (dot(normal, viewDir) > 0.0)\n\t\tdiscard;\n\n    vec3 finalColor = u_OutlineColor.rgb * u_OutlineLightness; \n\tgl_FragColor = vec4(finalColor.rgb, 1.0);\n\t\n}\n\n";

    var MeshBlinnPhongVS = "#if defined(GL_FRAGMENT_PRECISION_HIGH)// 原来的写法会被我们自己的解析流程处理，而我们的解析是不认内置宏的，导致被删掉，所以改成 if defined 了\n\tprecision highp float;\n\tprecision highp int;\n#else\n\tprecision mediump float;\n\tprecision mediump int;\n#endif\n#include \"Lighting.glsl\";\n#include \"LayaUtile.glsl\"\n#include \"Shadow.glsl\";\n\n\nattribute vec4 a_Position;\n\n#ifdef GPU_INSTANCE\n\tuniform mat4 u_ViewProjection;\n#else\n\tuniform mat4 u_MvpMatrix;\n#endif\n\n#if defined(DIFFUSEMAP)||defined(THICKNESSMAP)||((defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&(defined(SPECULARMAP)||defined(NORMALMAP)))||(defined(LIGHTMAP)&&defined(UV))\n\tattribute vec2 a_Texcoord0;\n\tvarying vec2 v_Texcoord0;\n#endif\n\n#if defined(LIGHTMAP)&&defined(UV1)\n\tattribute vec2 a_Texcoord1;\n#endif\n\n#ifdef LIGHTMAP\n\tuniform vec4 u_LightmapScaleOffset;\n\tvarying vec2 v_LightMapUV;\n#endif\n\n#ifdef COLOR\n\tattribute vec4 a_Color;\n\tvarying vec4 v_Color;\n#endif\n\n#ifdef BONE\n\tconst int c_MaxBoneCount = 24;\n\tattribute vec4 a_BoneIndices;\n\tattribute vec4 a_BoneWeights;\n\tuniform mat4 u_Bones[c_MaxBoneCount];\n#endif\n\nattribute vec3 a_Normal;\nvarying vec3 v_Normal; \n\n#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\n\tuniform vec3 u_CameraPos;\n\tvarying vec3 v_ViewDir; \n#endif\n\n#if defined(NORMALMAP)\n\tattribute vec4 a_Tangent0;\n\tvarying vec3 v_Tangent;\n\tvarying vec3 v_Binormal;\n#endif\n\n#ifdef GPU_INSTANCE\n\tattribute mat4 a_WorldMat;\n#else\n\tuniform mat4 u_WorldMat;\n#endif\n\n#if defined(POINTLIGHT)||defined(SPOTLIGHT)||(defined(CALCULATE_SHADOWS)&&defined(SHADOW_CASCADE))||defined(CALCULATE_SPOTSHADOWS)\n\tvarying vec3 v_PositionWorld;\n#endif\n\n#if defined(CALCULATE_SHADOWS)&&!defined(SHADOW_CASCADE)\n\tvarying vec4 v_ShadowCoord;\n#endif\n\n#if defined(CALCULATE_SPOTSHADOWS)//shader中自定义的宏不可用ifdef 必须改成if defined\n\tvarying vec4 v_SpotShadowCoord;\n#endif\n\nuniform vec4 u_TilingOffset;\n\nvoid main()\n{\n\tvec4 position;\n\t#ifdef BONE\n\t\tmat4 skinTransform;\n\t \t#ifdef SIMPLEBONE\n\t\t\tfloat currentPixelPos;\n\t\t\t#ifdef GPU_INSTANCE\n\t\t\t\tcurrentPixelPos = a_SimpleTextureParams.x+a_SimpleTextureParams.y;\n\t\t\t#else\n\t\t\t\tcurrentPixelPos = u_SimpleAnimatorParams.x+u_SimpleAnimatorParams.y;\n\t\t\t#endif\n\t\t\tfloat offset = 1.0/u_SimpleAnimatorTextureSize;\n\t\t\tskinTransform =  loadMatFromTexture(currentPixelPos,int(a_BoneIndices.x),offset) * a_BoneWeights.x;\n\t\t\tskinTransform += loadMatFromTexture(currentPixelPos,int(a_BoneIndices.y),offset) * a_BoneWeights.y;\n\t\t\tskinTransform += loadMatFromTexture(currentPixelPos,int(a_BoneIndices.z),offset) * a_BoneWeights.z;\n\t\t\tskinTransform += loadMatFromTexture(currentPixelPos,int(a_BoneIndices.w),offset) * a_BoneWeights.w;\n\t\t#else\n\t\t\tskinTransform =  u_Bones[int(a_BoneIndices.x)] * a_BoneWeights.x;\n\t\t\tskinTransform += u_Bones[int(a_BoneIndices.y)] * a_BoneWeights.y;\n\t\t\tskinTransform += u_Bones[int(a_BoneIndices.z)] * a_BoneWeights.z;\n\t\t\tskinTransform += u_Bones[int(a_BoneIndices.w)] * a_BoneWeights.w;\n\t\t#endif\n\t\tposition=skinTransform*a_Position;\n\t #else\n\t\tposition=a_Position;\n\t#endif\n\n\n\t\n\tmat4 worldMat;\n\t#ifdef GPU_INSTANCE\n\t\tworldMat = a_WorldMat;\n\t#else\n\t\tworldMat = u_WorldMat;\n\t#endif\n\n\t#ifdef GPU_INSTANCE\n\t\tgl_Position = u_ViewProjection * worldMat * position;\n\t#else\n\t\tgl_Position = u_MvpMatrix * position;\n\t#endif\n\n\tmat3 worldInvMat;\n\t#ifdef BONE\n\t\tworldInvMat=INVERSE_MAT(mat3(worldMat*skinTransform));\n\t#else\n\t\tworldInvMat=INVERSE_MAT(mat3(worldMat));\n\t#endif  \n\tv_Normal=normalize(a_Normal*worldInvMat);\n\t#if defined(NORMALMAP)\n\t\tv_Tangent=normalize(a_Tangent0.xyz*worldInvMat);\n\t\tv_Binormal=cross(v_Normal,v_Tangent)*a_Tangent0.w;\n\t#endif\n\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)||(defined(CALCULATE_SHADOWS)&&defined(SHADOW_CASCADE))||defined(CALCULATE_SPOTSHADOWS)\n\t\tvec3 positionWS=(worldMat*position).xyz;\n\t\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\n\t\t\tv_ViewDir = u_CameraPos-positionWS;\n\t\t#endif\n\t\t#if defined(POINTLIGHT)||defined(SPOTLIGHT)||(defined(CALCULATE_SHADOWS)&&defined(SHADOW_CASCADE))||defined(CALCULATE_SPOTSHADOWS)\n\t\t\tv_PositionWorld = positionWS;\n\t\t#endif\n\t#endif\n\n\t#if defined(DIFFUSEMAP)||defined(THICKNESSMAP)||((defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&(defined(SPECULARMAP)||defined(NORMALMAP)))\n\t\tv_Texcoord0=TransformUV(a_Texcoord0,u_TilingOffset);\n\t#endif\n\n\t#ifdef LIGHTMAP\n\t\t#ifdef UV1\n\t\t\tv_LightMapUV=vec2(a_Texcoord1.x,1.0-a_Texcoord1.y)*u_LightmapScaleOffset.xy+u_LightmapScaleOffset.zw;\n\t\t#else\n\t\t\tv_LightMapUV=vec2(a_Texcoord0.x,1.0-a_Texcoord0.y)*u_LightmapScaleOffset.xy+u_LightmapScaleOffset.zw;\n\t\t#endif \n\t\tv_LightMapUV.y=1.0-v_LightMapUV.y;\n\t#endif\n\n\t#if defined(COLOR)&&defined(ENABLEVERTEXCOLOR)\n\t\tv_Color=a_Color;\n\t#endif\n\n\t#if defined(CALCULATE_SHADOWS)&&!defined(SHADOW_CASCADE)\n\t\tv_ShadowCoord =getShadowCoord(vec4(positionWS,1.0));\n\t#endif\n\n\t#if defined(CALCULATE_SPOTSHADOWS)//shader中自定义的宏不可用ifdef 必须改成if defined\n\t\tv_SpotShadowCoord = u_SpotViewProjectMatrix*vec4(positionWS,1.0);\n\t#endif\n\n\tgl_Position=remapGLPositionZ(gl_Position);\n}";

    var MeshBlinnPhongPS = "#if defined(GL_FRAGMENT_PRECISION_HIGH)// 原来的写法会被我们自己的解析流程处理，而我们的解析是不认内置宏的，导致被删掉，所以改成 if defined 了\n\tprecision highp float;\n\tprecision highp int;\n#else\n\tprecision mediump float;\n\tprecision mediump int;\n#endif\n\n\n#include \"Lighting.glsl\";\n#include \"Shadow.glsl\"\n\nuniform vec4 u_DiffuseColor;\n\n#if defined(COLOR)&&defined(ENABLEVERTEXCOLOR)\n\tvarying vec4 v_Color;\n#endif\n\n#ifdef ALPHATEST\n\tuniform float u_AlphaTestValue;\n#endif\n\n#ifdef DIFFUSEMAP\n\tuniform sampler2D u_DiffuseTexture;\n#endif\n\n\n#if defined(DIFFUSEMAP)||defined(THICKNESSMAP)||((defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&(defined(SPECULARMAP)||defined(NORMALMAP)))\n\tvarying vec2 v_Texcoord0;\n#endif\n\n#ifdef LIGHTMAP\n\tvarying vec2 v_LightMapUV;\n\tuniform sampler2D u_LightMap;\n\t#ifdef LIGHTMAP_DIRECTIONAL\n\t\tuniform sampler2D u_LightMapDirection;\n\t#endif\n#endif\n\nvarying vec3 v_Normal;\n#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\n\tvarying vec3 v_ViewDir; \n\n\tuniform vec3 u_MaterialSpecular;\n\tuniform float u_Shininess;\n\n\t#ifdef LEGACYSINGLELIGHTING\n\t\t#ifdef DIRECTIONLIGHT\n\t\t\tuniform DirectionLight u_DirectionLight;\n\t\t#endif\n\t\t#ifdef POINTLIGHT\n\t\t\tuniform PointLight u_PointLight;\n\t\t#endif\n\t\t#ifdef SPOTLIGHT\n\t\t\tuniform SpotLight u_SpotLight;\n\t\t#endif\n\t#else\n\t\tuniform mat4 u_View;\n\t\tuniform vec4 u_ProjectionParams;\n\t\tuniform vec4 u_Viewport;\n\t\tuniform int u_DirationLightCount;\n\t\tuniform sampler2D u_LightBuffer;\n\t\tuniform sampler2D u_LightClusterBuffer;\n\t#endif\n\n\t#ifdef SPECULARMAP \n\t\tuniform sampler2D u_SpecularTexture;\n\t#endif\n#endif\n\n#ifdef NORMALMAP \n\tuniform sampler2D u_NormalTexture;\n\tvarying vec3 v_Tangent;\n\tvarying vec3 v_Binormal;\n#endif\n\n#ifdef FOG\n\tuniform float u_FogStart;\n\tuniform float u_FogRange;\n\tuniform vec3 u_FogColor;\n#endif\n\n#if defined(POINTLIGHT)||defined(SPOTLIGHT)||(defined(CALCULATE_SHADOWS)&&defined(SHADOW_CASCADE))||defined(CALCULATE_SPOTSHADOWS)\n\tvarying vec3 v_PositionWorld;\n#endif\n\n\n#include \"GlobalIllumination.glsl\";//\"GlobalIllumination.glsl use uniform should at front of this\n\n#if defined(CALCULATE_SHADOWS)&&!defined(SHADOW_CASCADE)\n\tvarying vec4 v_ShadowCoord;\n#endif\n\n#if defined(CALCULATE_SPOTSHADOWS)//shader中自定义的宏不可用ifdef 必须改成if defined\n\tvarying vec4 v_SpotShadowCoord;\n#endif\n\n\nvoid main()\n{\n\tvec3 normal;//light and SH maybe use normal\n\t#if defined(NORMALMAP)\n\t\tvec3 normalMapSample = texture2D(u_NormalTexture, v_Texcoord0).rgb;\n\t\tnormal = normalize(NormalSampleToWorldSpace(normalMapSample, v_Normal, v_Tangent,v_Binormal));\n\t#else\n\t\tnormal = normalize(v_Normal);\n\t#endif\n\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\n\t\tvec3 viewDir= normalize(v_ViewDir);\n\t#endif\n\n\tLayaGIInput giInput;\n\t#ifdef LIGHTMAP\t\n\t\tgiInput.lightmapUV=v_LightMapUV;\n\t#endif\n\tvec3 globalDiffuse=layaGIBase(giInput,1.0,normal);\n\t\n\tvec4 mainColor=u_DiffuseColor;\n\t#ifdef DIFFUSEMAP\n\t\tvec4 difTexColor=texture2D(u_DiffuseTexture, v_Texcoord0);\n\t\tmainColor=mainColor*difTexColor;\n\t#endif \n\t#if defined(COLOR)&&defined(ENABLEVERTEXCOLOR)\n\t\tmainColor=mainColor*v_Color;\n\t#endif \n    \n\t#ifdef ALPHATEST\n\t\tif(mainColor.a<u_AlphaTestValue)\n\t\t\tdiscard;\n\t#endif\n  \n\t\n\tvec3 diffuse = vec3(0.0);\n\tvec3 specular= vec3(0.0);\n\tvec3 transmissionDiffuse = vec3(0.0);\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\n\t\tvec3 dif,spe,transmis;\n\t\tfloat transmissionFactor;\n\t\t#ifdef SPECULARMAP\n\t\t\tvec3 gloss=texture2D(u_SpecularTexture, v_Texcoord0).rgb;\n\t\t#else\n\t\t\t#ifdef DIFFUSEMAP\n\t\t\t\tvec3 gloss=vec3(difTexColor.a);\n\t\t\t#else\n\t\t\t\tvec3 gloss=vec3(1.0);\n\t\t\t#endif\n\t\t#endif\n\t\t#ifdef THICKNESSMAP\n\t\t\ttransmissionFactor = texture2D(u_ThinknessTexture, v_Texcoord0).r;\n\t\t#endif\n\t#endif\n\n\t\n\t\n\t#ifdef LEGACYSINGLELIGHTING\n\t\t#ifdef DIRECTIONLIGHT\n\t\t\tLayaAirBlinnPhongDiectionLight(u_MaterialSpecular,u_Shininess,normal,gloss,viewDir,u_DirectionLight,transmissionFactor,dif,spe,transmis);\n\t\t\t#if defined(CALCULATE_SHADOWS)//shader中自定义的宏不可用ifdef 必须改成if defined\n\t\t\t\t#ifdef SHADOW_CASCADE\n\t\t\t\t\tvec4 shadowCoord = getShadowCoord(vec4(v_PositionWorld,1.0));\n\t\t\t\t#else\n\t\t\t\t\tvec4 shadowCoord = v_ShadowCoord;\n\t\t\t\t#endif\n\t\t\t\tfloat shadowAttenuation=sampleShadowmap(shadowCoord);\n\t\t\t\tdif *= shadowAttenuation;\n\t\t\t\tspe *= shadowAttenuation;\n\t\t\t\ttransmis *=shadowAttenuation;\n\t\t\t#endif\n\t\t\tdiffuse+=dif;\n\t\t\tspecular+=spe;\n\t\t\ttransmissionDiffuse+=transmis;\n\t\t#endif\n\t\n\t\t#ifdef POINTLIGHT\n\t\t\tLayaAirBlinnPhongPointLight(v_PositionWorld,u_MaterialSpecular,u_Shininess,normal,gloss,viewDir,u_PointLight,transmissionFactor,dif,spe,transmis);\n\t\t\tdiffuse+=dif;\n\t\t\tspecular+=spe;\n\t\t\ttransmissionDiffuse+=transmis;\n\t\t#endif\n\n\t\t#ifdef SPOTLIGHT\n\t\t\tLayaAirBlinnPhongSpotLight(v_PositionWorld,u_MaterialSpecular,u_Shininess,normal,gloss,viewDir,u_SpotLight,transmissionFactor,dif,spe,transmis);\n\t\t\t#if defined(CALCULATE_SPOTSHADOWS)//shader中自定义的宏不可用ifdef 必须改成if defined\n\t\t\t\tvec4 spotShadowcoord = v_SpotShadowCoord;\n\t\t\t\tfloat spotShadowAttenuation = sampleSpotShadowmap(spotShadowcoord);\n\t\t\t\tdif *= spotShadowAttenuation;\n\t\t\t\tspe *= spotShadowAttenuation;\n\t\t\t\ttransmis *=spotShadowAttenuation;\n\t\t\t#endif\n\t\t\tdiffuse+=dif;\n\t\t\tspecular+=spe;\n\t\t\ttransmissionDiffuse+=transmis;\n\t\t#endif\n\t#else\n\t\t#ifdef DIRECTIONLIGHT\n\t\t\tfor (int i = 0; i < MAX_LIGHT_COUNT; i++) \n\t\t\t{\n\t\t\t\tif(i >= u_DirationLightCount)\n\t\t\t\t\tbreak;\n\t\t\t\tDirectionLight directionLight = getDirectionLight(u_LightBuffer,i);\n\t\t\t\t#if defined(CALCULATE_SHADOWS)//shader中自定义的宏不可用ifdef 必须改成if defined\n\t\t\t\t\tif(i == 0)\n\t\t\t\t\t{\n\t\t\t\t\t\t#ifdef SHADOW_CASCADE\n\t\t\t\t\t\t\tvec4 shadowCoord = getShadowCoord(vec4(v_PositionWorld,1.0));\n\t\t\t\t\t\t#else\n\t\t\t\t\t\t\tvec4 shadowCoord = v_ShadowCoord;\n\t\t\t\t\t\t#endif\n\t\t\t\t\t\tdirectionLight.color *= sampleShadowmap(shadowCoord);\n\t\t\t\t\t}\n\t\t\t\t#endif\n\t\t\t\tLayaAirBlinnPhongDiectionLight(u_MaterialSpecular,u_Shininess,normal,gloss,viewDir,directionLight,transmissionFactor,dif,spe,transmis);\n\t\t\t\tdiffuse+=dif;\n\t\t\t\tspecular+=spe;\n\t\t\t\ttransmissionDiffuse+=transmis;\n\t\t\t}\n\t\t#endif\n\t\t#if defined(POINTLIGHT)||defined(SPOTLIGHT)\n\t\t\tivec4 clusterInfo =getClusterInfo(u_LightClusterBuffer,u_View,u_Viewport, v_PositionWorld,gl_FragCoord,u_ProjectionParams);\n\t\t\t#ifdef POINTLIGHT\n\t\t\t\tfor (int i = 0; i < MAX_LIGHT_COUNT; i++) \n\t\t\t\t{\n\t\t\t\t\tif(i >= clusterInfo.x)//PointLightCount\n\t\t\t\t\t\tbreak;\n\t\t\t\t\tPointLight pointLight = getPointLight(u_LightBuffer,u_LightClusterBuffer,clusterInfo,i);\n\t\t\t\t\tLayaAirBlinnPhongPointLight(v_PositionWorld,u_MaterialSpecular,u_Shininess,normal,gloss,viewDir,pointLight,transmissionFactor,dif,spe,transmis);\n\t\t\t\t\tdiffuse+=dif;\n\t\t\t\t\tspecular+=spe;\n\t\t\t\t\ttransmissionDiffuse+=transmis;\n\t\t\t\t}\n\t\t\t#endif\n\t\t\t#ifdef SPOTLIGHT\n\t\t\t\tfor (int i = 0; i < MAX_LIGHT_COUNT; i++) \n\t\t\t\t{\n\t\t\t\t\tif(i >= clusterInfo.y)//SpotLightCount\n\t\t\t\t\t\tbreak;\n\t\t\t\t\tSpotLight spotLight = getSpotLight(u_LightBuffer,u_LightClusterBuffer,clusterInfo,i);\n\t\t\t\t\t#if defined(CALCULATE_SPOTSHADOWS)//shader中自定义的宏不可用ifdef 必须改成if defined\n\t\t\t\t\t\tif(i == 0)\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tvec4 spotShadowcoord = v_SpotShadowCoord;\n\t\t\t\t\t\t\tspotLight.color *= sampleSpotShadowmap(spotShadowcoord);\n\t\t\t\t\t\t}\n\t\t\t\t\t#endif\n\t\t\t\t\tLayaAirBlinnPhongSpotLight(v_PositionWorld,u_MaterialSpecular,u_Shininess,normal,gloss,viewDir,spotLight,transmissionFactor,dif,spe,transmis);\n\t\t\t\t\tdiffuse+=dif;\n\t\t\t\t\tspecular+=spe;\n\t\t\t\t\ttransmissionDiffuse+=transmis;\n\t\t\t\t}\n\t\t\t#endif\n\t\t#endif\n\t#endif\n\n\tgl_FragColor =vec4(mainColor.rgb*(globalDiffuse + diffuse),mainColor.a);\n\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\n\t\tgl_FragColor.rgb+=specular;\n\t#endif\n\n\t#ifdef ENABLETRANSMISSION\n\t\tgl_FragColor.rgb+= transmissionDiffuse;\n\t#endif\n\n\t  \n\t#ifdef FOG\n\t\tfloat lerpFact=clamp((1.0/gl_FragCoord.w-u_FogStart)/u_FogRange,0.0,1.0);\n\t\tgl_FragColor.rgb=mix(gl_FragColor.rgb,u_FogColor,lerpFact);\n\t#endif\n\n\t//gl_FragColor.rgb =transmissionDiffuse;\n}\n\n";

    var MeshBlinnPhongShadowCasterVS = "#include \"ShadowCasterVS.glsl\"\n\nvoid main()\n{\n\tvec4 positionCS =  shadowCasterVertex();\n\tgl_Position=remapGLPositionZ(positionCS);\n}";

    var MeshBlinnPhongShadowCasterPS = "#if defined(GL_FRAGMENT_PRECISION_HIGH)// 原来的写法会被我们自己的解析流程处理，而我们的解析是不认内置宏的，导致被删掉，所以改成 if defined 了\n\tprecision highp float;\n\tprecision highp int;\n#else\n\tprecision mediump float;\n\tprecision mediump int;\n#endif\n\n#include \"ShadowCasterFS.glsl\"\n\nvoid main()\n{\n\tgl_FragColor=shadowCasterFragment();\n}";

    var DepthNormalsTextureVS = "#if defined(GL_FRAGMENT_PRECISION_HIGH)// 原来的写法会被我们自己的解析流程处理，而我们的解析是不认内置宏的，导致被删掉，所以改成 if defined 了\n\tprecision highp float;\n\tprecision highp int;\n#else\n\tprecision mediump float;\n\tprecision mediump int;\n#endif\n\n#include \"Lighting.glsl\";\n\nattribute vec4 a_Position;\nattribute vec3 a_Normal;\n\n#ifdef BONE\n\tconst int c_MaxBoneCount = 24;\n\tattribute vec4 a_BoneIndices;\n\tattribute vec4 a_BoneWeights;\n\tuniform mat4 u_Bones[c_MaxBoneCount];\n#endif\n\n#ifdef GPU_INSTANCE\n\tattribute mat4 a_WorldMat;\n#else\n\tuniform mat4 u_WorldMat;\n#endif\n\nuniform mat4 u_ViewProjection;\nuniform vec4 u_ProjectionParams;\n\n//传入法线\nvarying vec4 depthNormals;\n\n\nvec4 depthNormalsVertex()\n{\n\tmat4 worldMat;\n\t#ifdef GPU_INSTANCE\n\t\tworldMat = a_WorldMat;\n\t#else\n\t\tworldMat = u_WorldMat;\n\t#endif\n\t\n\t#ifdef BONE\n\t\tmat4 skinTransform;\n\t \t#ifdef SIMPLEBONE\n\t\t\tfloat currentPixelPos;\n\t\t\t#ifdef GPU_INSTANCE\n\t\t\t\tcurrentPixelPos = a_SimpleTextureParams.x+a_SimpleTextureParams.y;\n\t\t\t#else\n\t\t\t\tcurrentPixelPos = u_SimpleAnimatorParams.x+u_SimpleAnimatorParams.y;\n\t\t\t#endif\n\t\t\tfloat offset = 1.0/u_SimpleAnimatorTextureSize;\n\t\t\tskinTransform =  loadMatFromTexture(currentPixelPos,int(a_BoneIndices.x),offset) * a_BoneWeights.x;\n\t\t\tskinTransform += loadMatFromTexture(currentPixelPos,int(a_BoneIndices.y),offset) * a_BoneWeights.y;\n\t\t\tskinTransform += loadMatFromTexture(currentPixelPos,int(a_BoneIndices.z),offset) * a_BoneWeights.z;\n\t\t\tskinTransform += loadMatFromTexture(currentPixelPos,int(a_BoneIndices.w),offset) * a_BoneWeights.w;\n\t\t#else\n\t\t\tskinTransform =  u_Bones[int(a_BoneIndices.x)] * a_BoneWeights.x;\n\t\t\tskinTransform += u_Bones[int(a_BoneIndices.y)] * a_BoneWeights.y;\n\t\t\tskinTransform += u_Bones[int(a_BoneIndices.z)] * a_BoneWeights.z;\n\t\t\tskinTransform += u_Bones[int(a_BoneIndices.w)] * a_BoneWeights.w;\n\t\t#endif\n\t\tworldMat = worldMat * skinTransform;\n\t#endif\n\n\tvec4 positionWS = worldMat * a_Position;\n\n\tmat3 worldInvMat;\n\t#ifdef BONE\n\t\tworldInvMat=INVERSE_MAT(mat3(worldMat*skinTransform));\n\t#else\n\t\tworldInvMat=INVERSE_MAT(mat3(worldMat));\n\t#endif  \n\n\tvec3 normalWS = normalize(a_Normal*worldInvMat);//if no normalize will cause precision problem\n\n\tdepthNormals.xyz = normalWS;\n\tvec4 positionCS = u_ViewProjection * positionWS;\n\tdepthNormals.w = (positionCS.z * 2.0 - positionCS.w)*u_ProjectionParams.w;\n\t\n    return positionCS;\n}\n\nvoid main()\n{\n\tvec4 positionCS =  depthNormalsVertex();\n\tgl_Position=remapGLPositionZ(positionCS);\n}";

    var DepthNormalsTextureFS = "#if defined(GL_FRAGMENT_PRECISION_HIGH)// 原来的写法会被我们自己的解析流程处理，而我们的解析是不认内置宏的，导致被删掉，所以改成 if defined 了\n\tprecision highp float;\n\tprecision highp int;\n#else\n\tprecision mediump float;\n\tprecision mediump int;\n#endif\n#include \"DepthNormalUtil.glsl\";\n\nvarying vec4 depthNormals;\n\nvoid main()\n{\n\tgl_FragColor=depthNormalsFragment(depthNormals);\n}";

    var Shader3D = Laya.Shader3D;
    var RenderState = Laya.RenderState;
    var Material = Laya.Material;
    var Vector4 = Laya.Vector4;
    class BlinnPhoneOutlineShader {
        static init() {
            var attributeMap = {
                'a_Position': Laya.VertexMesh.MESH_POSITION0,
                'a_Color': Laya.VertexMesh.MESH_COLOR0,
                'a_Normal': Laya.VertexMesh.MESH_NORMAL0,
                'a_Texcoord0': Laya.VertexMesh.MESH_TEXTURECOORDINATE0,
                'a_Texcoord1': Laya.VertexMesh.MESH_TEXTURECOORDINATE1,
                'a_BoneWeights': Laya.VertexMesh.MESH_BLENDWEIGHT0,
                'a_BoneIndices': Laya.VertexMesh.MESH_BLENDINDICES0,
                'a_Tangent0': Laya.VertexMesh.MESH_TANGENT0,
                'a_WorldMat': Laya.VertexMesh.MESH_WORLDMATRIX_ROW0,
                'a_SimpleTextureParams': Laya.VertexMesh.MESH_SIMPLEANIMATOR
            };
            var uniformMap = {
                'u_OutlineLightness': Laya.Shader3D.PERIOD_MATERIAL,
                'u_OutlineColor': Laya.Shader3D.PERIOD_MATERIAL,
                'u_OutlineWidth': Laya.Shader3D.PERIOD_MATERIAL,
                'v_ViewDir': Laya.Shader3D.PERIOD_MATERIAL,
                'u_Bones': Shader3D.PERIOD_CUSTOM,
                'u_DiffuseTexture': Shader3D.PERIOD_MATERIAL,
                'u_SpecularTexture': Shader3D.PERIOD_MATERIAL,
                'u_NormalTexture': Shader3D.PERIOD_MATERIAL,
                'u_AlphaTestValue': Shader3D.PERIOD_MATERIAL,
                'u_DiffuseColor': Shader3D.PERIOD_MATERIAL,
                'u_MaterialSpecular': Shader3D.PERIOD_MATERIAL,
                'u_Shininess': Shader3D.PERIOD_MATERIAL,
                'u_TilingOffset': Shader3D.PERIOD_MATERIAL,
                'u_TransmissionRate': Shader3D.PERIOD_MATERIAL,
                'u_BackDiffuse': Shader3D.PERIOD_MATERIAL,
                'u_BackScale': Shader3D.PERIOD_MATERIAL,
                'u_ThinknessTexture': Shader3D.PERIOD_MATERIAL,
                'u_TransmissionColor': Shader3D.PERIOD_MATERIAL,
                'u_WorldMat': Shader3D.PERIOD_SPRITE,
                'u_MvpMatrix': Shader3D.PERIOD_SPRITE,
                'u_LightmapScaleOffset': Shader3D.PERIOD_SPRITE,
                'u_LightMap': Shader3D.PERIOD_SPRITE,
                'u_LightMapDirection': Shader3D.PERIOD_SPRITE,
                'u_SimpleAnimatorTexture': Shader3D.PERIOD_SPRITE,
                'u_SimpleAnimatorParams': Shader3D.PERIOD_SPRITE,
                'u_SimpleAnimatorTextureSize': Shader3D.PERIOD_SPRITE,
                'u_CameraPos': Shader3D.PERIOD_CAMERA,
                'u_Viewport': Shader3D.PERIOD_CAMERA,
                'u_ProjectionParams': Shader3D.PERIOD_CAMERA,
                'u_View': Shader3D.PERIOD_CAMERA,
                'u_ViewProjection': Shader3D.PERIOD_CAMERA,
                'u_ReflectTexture': Shader3D.PERIOD_SCENE,
                'u_FogStart': Shader3D.PERIOD_SCENE,
                'u_FogRange': Shader3D.PERIOD_SCENE,
                'u_FogColor': Shader3D.PERIOD_SCENE,
                'u_DirationLightCount': Shader3D.PERIOD_SCENE,
                'u_LightBuffer': Shader3D.PERIOD_SCENE,
                'u_LightClusterBuffer': Shader3D.PERIOD_SCENE,
                'u_AmbientColor': Shader3D.PERIOD_SCENE,
                'u_ShadowBias': Shader3D.PERIOD_SCENE,
                'u_ShadowLightDirection': Shader3D.PERIOD_SCENE,
                'u_ShadowMap': Shader3D.PERIOD_SCENE,
                'u_ShadowParams': Shader3D.PERIOD_SCENE,
                'u_ShadowSplitSpheres': Shader3D.PERIOD_SCENE,
                'u_ShadowMatrices': Shader3D.PERIOD_SCENE,
                'u_ShadowMapSize': Shader3D.PERIOD_SCENE,
                'u_SpotShadowMap': Shader3D.PERIOD_SCENE,
                'u_SpotViewProjectMatrix': Shader3D.PERIOD_SCENE,
                'u_ShadowLightPosition': Shader3D.PERIOD_SCENE,
                'u_AmbientSHAr': Shader3D.PERIOD_SCENE,
                'u_AmbientSHAg': Shader3D.PERIOD_SCENE,
                'u_AmbientSHAb': Shader3D.PERIOD_SCENE,
                'u_AmbientSHBr': Shader3D.PERIOD_SCENE,
                'u_AmbientSHBg': Shader3D.PERIOD_SCENE,
                'u_AmbientSHBb': Shader3D.PERIOD_SCENE,
                'u_AmbientSHC': Shader3D.PERIOD_SCENE,
                'u_DirectionLight.color': Shader3D.PERIOD_SCENE,
                'u_DirectionLight.direction': Shader3D.PERIOD_SCENE,
                'u_PointLight.position': Shader3D.PERIOD_SCENE,
                'u_PointLight.range': Shader3D.PERIOD_SCENE,
                'u_PointLight.color': Shader3D.PERIOD_SCENE,
                'u_SpotLight.position': Shader3D.PERIOD_SCENE,
                'u_SpotLight.direction': Shader3D.PERIOD_SCENE,
                'u_SpotLight.range': Shader3D.PERIOD_SCENE,
                'u_SpotLight.spot': Shader3D.PERIOD_SCENE,
                'u_SpotLight.color': Shader3D.PERIOD_SCENE
            };
            var stateMap = {
                's_Cull': Shader3D.RENDER_STATE_CULL,
                's_Blend': Shader3D.RENDER_STATE_BLEND,
                's_BlendSrc': Shader3D.RENDER_STATE_BLEND_SRC,
                's_BlendDst': Shader3D.RENDER_STATE_BLEND_DST,
                's_DepthTest': Shader3D.RENDER_STATE_DEPTH_TEST,
                's_DepthWrite': Shader3D.RENDER_STATE_DEPTH_WRITE
            };
            var shader = Shader3D.add("BlinnPhoneOutline", null, null, true);
            var subShader = new Laya.SubShader(attributeMap, uniformMap);
            shader.addSubShader(subShader);
            subShader.addShaderPass(MeshBlinnPhongVS, MeshBlinnPhongPS, stateMap, "Forward");
            var shaderPass = subShader.addShaderPass(OutlineVS, OutlinePS, stateMap, "Forward");
            shaderPass.renderState.depthWrite = true;
            shaderPass.renderState.cull = RenderState.CULL_FRONT;
            shaderPass.renderState.blend = RenderState.BLEND_DISABLE;
            shaderPass.renderState.depthTest = RenderState.DEPTHTEST_LESS;
            subShader.addShaderPass(MeshBlinnPhongShadowCasterVS, MeshBlinnPhongShadowCasterPS, stateMap, "ShadowCaster");
            subShader.addShaderPass(DepthNormalsTextureVS, DepthNormalsTextureFS, stateMap, "DepthNormal");
        }
    }
    class BlinnPhongOutlineMaterial extends Material {
        constructor() {
            super();
            this._enableLighting = false;
            this._enableVertexColor = false;
            this._enableTransmission = false;
            this._albedoIntensity = 1.0;
            this._albedoColor = new Vector4(1.0, 1.0, 1.0, 1.0);
            this._outlineWidth = 0.2;
            this._outlineColor = new Vector4(1.0, 1.0, 1.0, 1.0);
            this._outlineLightness = 1;
            this._enableVertexColor = false;
            this._enableTransmission = false;
            this.setShaderName("BlinnPhoneOutline");
            this._albedoIntensity = 1.0;
            this._albedoColor = new Vector4(1.0, 1.0, 1.0, 1.0);
            var sv = this._shaderValues;
            sv.setVector(BlinnPhongOutlineMaterial.OUTLINECOLOR, new Vector4(1.0, 1.0, 1.0, 1.0));
            sv.setNumber(BlinnPhongOutlineMaterial.OUTLINELIGHTNESS, 1.0);
            sv.setNumber(BlinnPhongOutlineMaterial.OUTLINEWIDTH, 0.01);
            sv.setVector(BlinnPhongOutlineMaterial.ALBEDOCOLOR, new Vector4(1.0, 1.0, 1.0, 1.0));
            sv.setVector(BlinnPhongOutlineMaterial.MATERIALSPECULAR, new Vector4(1.0, 1.0, 1.0, 1.0));
            sv.setNumber(BlinnPhongOutlineMaterial.SHININESS, 0.078125);
            sv.setNumber(Material.ALPHATESTVALUE, 0.5);
            sv.setVector(BlinnPhongOutlineMaterial.TILINGOFFSET, new Vector4(1.0, 1.0, 0.0, 0.0));
            this._enableLighting = true;
            this.renderMode = BlinnPhongOutlineMaterial.RENDERMODE_OPAQUE;
            this.cull = Laya.RenderState.CULL_NONE;
        }
        static __initDefine__() {
            BlinnPhoneOutlineShader.init();
            BlinnPhongOutlineMaterial.SHADERDEFINE_DIFFUSEMAP = Shader3D.getDefineByName("DIFFUSEMAP");
            BlinnPhongOutlineMaterial.SHADERDEFINE_NORMALMAP = Shader3D.getDefineByName("NORMALMAP");
            BlinnPhongOutlineMaterial.SHADERDEFINE_SPECULARMAP = Shader3D.getDefineByName("SPECULARMAP");
            BlinnPhongOutlineMaterial.SHADERDEFINE_ENABLEVERTEXCOLOR = Shader3D.getDefineByName("ENABLEVERTEXCOLOR");
            BlinnPhongOutlineMaterial.SHADERDEFINE_ENABLETRANSMISSION = Shader3D.getDefineByName("ENABLETRANSMISSION");
            BlinnPhongOutlineMaterial.SHADERDEFINE_THICKNESSMAP = Shader3D.getDefineByName("THICKNESSMAP");
        }
        get outlineColorR() {
            return this._ColorR;
        }
        set outlineColorR(value) {
            this._ColorR = value;
        }
        get outlineColorG() {
            return this._ColorG;
        }
        set outlineColorG(value) {
            this._ColorG = value;
        }
        get outlineColorB() {
            return this._ColorB;
        }
        set outlineColorB(value) {
            this._ColorB = value;
        }
        get outlineColorA() {
            return this._ColorA;
        }
        set outlineColorA(value) {
            this._ColorA = value;
        }
        get outlineColor() {
            return this._outlineColor;
        }
        set outlineColor(value) {
            this._outlineColor = value;
            this._shaderValues.setVector(BlinnPhongOutlineMaterial.OUTLINECOLOR, this._outlineColor);
        }
        get outlineLightness() {
            return this._outlineLightness;
        }
        set outlineLightness(value) {
            this._outlineLightness = value;
            this._shaderValues.setNumber(BlinnPhongOutlineMaterial.OUTLINELIGHTNESS, this._outlineLightness);
        }
        get outlineWidth() {
            return this._outlineWidth;
        }
        set outlineWidth(value) {
            this._outlineWidth = value;
            this._shaderValues.setNumber(BlinnPhongOutlineMaterial.OUTLINEWIDTH, this._outlineWidth);
        }
        get _ColorR() {
            return this._albedoColor.x;
        }
        set _ColorR(value) {
            this._albedoColor.x = value;
            this.albedoColor = this._albedoColor;
        }
        get _ColorG() {
            return this._albedoColor.y;
        }
        set _ColorG(value) {
            this._albedoColor.y = value;
            this.albedoColor = this._albedoColor;
        }
        get _ColorB() {
            return this._albedoColor.z;
        }
        set _ColorB(value) {
            this._albedoColor.z = value;
            this.albedoColor = this._albedoColor;
        }
        get _ColorA() {
            return this._albedoColor.w;
        }
        set _ColorA(value) {
            this._albedoColor.w = value;
            this.albedoColor = this._albedoColor;
        }
        get _Color() {
            return this._shaderValues.getVector(BlinnPhongOutlineMaterial.ALBEDOCOLOR);
        }
        set _Color(value) {
            this.albedoColor = value;
        }
        get _SpecColorR() {
            return this._shaderValues.getVector(BlinnPhongOutlineMaterial.MATERIALSPECULAR).x;
        }
        set _SpecColorR(value) {
            this._shaderValues.getVector(BlinnPhongOutlineMaterial.MATERIALSPECULAR).x = value;
        }
        get _SpecColorG() {
            return this._shaderValues.getVector(BlinnPhongOutlineMaterial.MATERIALSPECULAR).y;
        }
        set _SpecColorG(value) {
            this._shaderValues.getVector(BlinnPhongOutlineMaterial.MATERIALSPECULAR).y = value;
        }
        get _SpecColorB() {
            return this._shaderValues.getVector(BlinnPhongOutlineMaterial.MATERIALSPECULAR).z;
        }
        set _SpecColorB(value) {
            this._shaderValues.getVector(BlinnPhongOutlineMaterial.MATERIALSPECULAR).z = value;
        }
        get _SpecColorA() {
            return this._shaderValues.getVector(BlinnPhongOutlineMaterial.MATERIALSPECULAR).w;
        }
        set _SpecColorA(value) {
            this._shaderValues.getVector(BlinnPhongOutlineMaterial.MATERIALSPECULAR).w = value;
        }
        get _SpecColor() {
            return this._shaderValues.getVector(BlinnPhongOutlineMaterial.MATERIALSPECULAR);
        }
        set _SpecColor(value) {
            this.specularColor = value;
        }
        get _AlbedoIntensity() {
            return this._albedoIntensity;
        }
        set _AlbedoIntensity(value) {
            if (this._albedoIntensity !== value) {
                var finalAlbedo = this._shaderValues.getVector(BlinnPhongOutlineMaterial.ALBEDOCOLOR);
                Vector4.scale(this._albedoColor, value, finalAlbedo);
                this._albedoIntensity = value;
                this._shaderValues.setVector(BlinnPhongOutlineMaterial.ALBEDOCOLOR, finalAlbedo);
            }
        }
        get _Shininess() {
            return this._shaderValues.getNumber(BlinnPhongOutlineMaterial.SHININESS);
        }
        set _Shininess(value) {
            value = Math.max(0.0, Math.min(1.0, value));
            this._shaderValues.setNumber(BlinnPhongOutlineMaterial.SHININESS, value);
        }
        get _MainTex_STX() {
            return this._shaderValues.getVector(BlinnPhongOutlineMaterial.TILINGOFFSET).x;
        }
        set _MainTex_STX(x) {
            var tilOff = this._shaderValues.getVector(BlinnPhongOutlineMaterial.TILINGOFFSET);
            tilOff.x = x;
            this.tilingOffset = tilOff;
        }
        get _MainTex_STY() {
            return this._shaderValues.getVector(BlinnPhongOutlineMaterial.TILINGOFFSET).y;
        }
        set _MainTex_STY(y) {
            var tilOff = this._shaderValues.getVector(BlinnPhongOutlineMaterial.TILINGOFFSET);
            tilOff.y = y;
            this.tilingOffset = tilOff;
        }
        get _MainTex_STZ() {
            return this._shaderValues.getVector(BlinnPhongOutlineMaterial.TILINGOFFSET).z;
        }
        set _MainTex_STZ(z) {
            var tilOff = this._shaderValues.getVector(BlinnPhongOutlineMaterial.TILINGOFFSET);
            tilOff.z = z;
            this.tilingOffset = tilOff;
        }
        get _MainTex_STW() {
            return this._shaderValues.getVector(BlinnPhongOutlineMaterial.TILINGOFFSET).w;
        }
        set _MainTex_STW(w) {
            var tilOff = this._shaderValues.getVector(BlinnPhongOutlineMaterial.TILINGOFFSET);
            tilOff.w = w;
            this.tilingOffset = tilOff;
        }
        get _MainTex_ST() {
            return this._shaderValues.getVector(BlinnPhongOutlineMaterial.TILINGOFFSET);
        }
        set _MainTex_ST(value) {
            this.tilingOffset = value;
        }
        get _Cutoff() {
            return this.alphaTestValue;
        }
        set _Cutoff(value) {
            this.alphaTestValue = value;
        }
        set renderMode(value) {
            switch (value) {
                case BlinnPhongOutlineMaterial.RENDERMODE_OPAQUE:
                    this.alphaTest = false;
                    this.renderQueue = Material.RENDERQUEUE_OPAQUE;
                    this.depthWrite = true;
                    this.cull = RenderState.CULL_BACK;
                    this.blend = RenderState.BLEND_DISABLE;
                    this.depthTest = RenderState.DEPTHTEST_LESS;
                    break;
                case BlinnPhongOutlineMaterial.RENDERMODE_CUTOUT:
                    this.renderQueue = Material.RENDERQUEUE_ALPHATEST;
                    this.alphaTest = true;
                    this.depthWrite = true;
                    this.cull = RenderState.CULL_BACK;
                    this.blend = RenderState.BLEND_DISABLE;
                    this.depthTest = RenderState.DEPTHTEST_LESS;
                    break;
                case BlinnPhongOutlineMaterial.RENDERMODE_TRANSPARENT:
                    this.renderQueue = Material.RENDERQUEUE_TRANSPARENT;
                    this.alphaTest = false;
                    this.depthWrite = false;
                    this.cull = RenderState.CULL_BACK;
                    this.blend = RenderState.BLEND_ENABLE_ALL;
                    this.blendSrc = RenderState.BLENDPARAM_SRC_ALPHA;
                    this.blendDst = RenderState.BLENDPARAM_ONE_MINUS_SRC_ALPHA;
                    this.depthTest = RenderState.DEPTHTEST_LESS;
                    break;
                default:
                    throw new Error("Material:renderMode value error.");
            }
        }
        get enableVertexColor() {
            return this._enableVertexColor;
        }
        set enableVertexColor(value) {
            this._enableVertexColor = value;
            if (value)
                this._shaderValues.addDefine(BlinnPhongOutlineMaterial.SHADERDEFINE_ENABLEVERTEXCOLOR);
            else
                this._shaderValues.removeDefine(BlinnPhongOutlineMaterial.SHADERDEFINE_ENABLEVERTEXCOLOR);
        }
        get tilingOffsetX() {
            return this._MainTex_STX;
        }
        set tilingOffsetX(x) {
            this._MainTex_STX = x;
        }
        get tilingOffsetY() {
            return this._MainTex_STY;
        }
        set tilingOffsetY(y) {
            this._MainTex_STY = y;
        }
        get tilingOffsetZ() {
            return this._MainTex_STZ;
        }
        set tilingOffsetZ(z) {
            this._MainTex_STZ = z;
        }
        get tilingOffsetW() {
            return this._MainTex_STW;
        }
        set tilingOffsetW(w) {
            this._MainTex_STW = w;
        }
        get tilingOffset() {
            return this._shaderValues.getVector(BlinnPhongOutlineMaterial.TILINGOFFSET);
        }
        set tilingOffset(value) {
            if (value) {
                this._shaderValues.setVector(BlinnPhongOutlineMaterial.TILINGOFFSET, value);
            }
            else {
                this._shaderValues.getVector(BlinnPhongOutlineMaterial.TILINGOFFSET).setValue(1.0, 1.0, 0.0, 0.0);
            }
        }
        get albedoColorR() {
            return this._ColorR;
        }
        set albedoColorR(value) {
            this._ColorR = value;
        }
        get albedoColorG() {
            return this._ColorG;
        }
        set albedoColorG(value) {
            this._ColorG = value;
        }
        get albedoColorB() {
            return this._ColorB;
        }
        set albedoColorB(value) {
            this._ColorB = value;
        }
        get albedoColorA() {
            return this._ColorA;
        }
        set albedoColorA(value) {
            this._ColorA = value;
        }
        get albedoColor() {
            return this._albedoColor;
        }
        set albedoColor(value) {
            var finalAlbedo = this._shaderValues.getVector(BlinnPhongOutlineMaterial.ALBEDOCOLOR);
            Vector4.scale(value, this._albedoIntensity, finalAlbedo);
            this._albedoColor = value;
            this._shaderValues.setVector(BlinnPhongOutlineMaterial.ALBEDOCOLOR, finalAlbedo);
        }
        get albedoIntensity() {
            return this._albedoIntensity;
        }
        set albedoIntensity(value) {
            this._AlbedoIntensity = value;
        }
        get specularColorR() {
            return this._SpecColorR;
        }
        set specularColorR(value) {
            this._SpecColorR = value;
        }
        get specularColorG() {
            return this._SpecColorG;
        }
        set specularColorG(value) {
            this._SpecColorG = value;
        }
        get specularColorB() {
            return this._SpecColorB;
        }
        set specularColorB(value) {
            this._SpecColorB = value;
        }
        get specularColorA() {
            return this._SpecColorA;
        }
        set specularColorA(value) {
            this._SpecColorA = value;
        }
        get specularColor() {
            return this._shaderValues.getVector(BlinnPhongOutlineMaterial.MATERIALSPECULAR);
        }
        set specularColor(value) {
            this._shaderValues.setVector(BlinnPhongOutlineMaterial.MATERIALSPECULAR, value);
        }
        get shininess() {
            return this._Shininess;
        }
        set shininess(value) {
            this._Shininess = value;
        }
        get albedoTexture() {
            return this._shaderValues.getTexture(BlinnPhongOutlineMaterial.ALBEDOTEXTURE);
        }
        set albedoTexture(value) {
            if (value)
                this._shaderValues.addDefine(BlinnPhongOutlineMaterial.SHADERDEFINE_DIFFUSEMAP);
            else
                this._shaderValues.removeDefine(BlinnPhongOutlineMaterial.SHADERDEFINE_DIFFUSEMAP);
            this._shaderValues.setTexture(BlinnPhongOutlineMaterial.ALBEDOTEXTURE, value);
        }
        get normalTexture() {
            return this._shaderValues.getTexture(BlinnPhongOutlineMaterial.NORMALTEXTURE);
        }
        set normalTexture(value) {
            if (value)
                this._shaderValues.addDefine(BlinnPhongOutlineMaterial.SHADERDEFINE_NORMALMAP);
            else
                this._shaderValues.removeDefine(BlinnPhongOutlineMaterial.SHADERDEFINE_NORMALMAP);
            this._shaderValues.setTexture(BlinnPhongOutlineMaterial.NORMALTEXTURE, value);
        }
        get specularTexture() {
            return this._shaderValues.getTexture(BlinnPhongOutlineMaterial.SPECULARTEXTURE);
        }
        set specularTexture(value) {
            if (value)
                this._shaderValues.addDefine(BlinnPhongOutlineMaterial.SHADERDEFINE_SPECULARMAP);
            else
                this._shaderValues.removeDefine(BlinnPhongOutlineMaterial.SHADERDEFINE_SPECULARMAP);
            this._shaderValues.setTexture(BlinnPhongOutlineMaterial.SPECULARTEXTURE, value);
        }
        get enableTransmission() {
            return this._enableTransmission;
        }
        set enableTransmission(value) {
            this._enableTransmission = value;
            if (value)
                this._shaderValues.addDefine(BlinnPhongOutlineMaterial.SHADERDEFINE_ENABLETRANSMISSION);
            else
                this._shaderValues.removeDefine(BlinnPhongOutlineMaterial.SHADERDEFINE_ENABLETRANSMISSION);
        }
        get transmissionRate() {
            return this._shaderValues.getNumber(BlinnPhongOutlineMaterial.TRANSMISSIONRATE);
        }
        set transmissionRata(value) {
            this._shaderValues.setNumber(BlinnPhongOutlineMaterial.TRANSMISSIONRATE, value);
        }
        get backDiffuse() {
            return this._shaderValues.getNumber(BlinnPhongOutlineMaterial.IBACKDIFFUSE);
        }
        set backDiffuse(value) {
            this._shaderValues.setNumber(BlinnPhongOutlineMaterial.IBACKDIFFUSE, Math.max(value, 1.0));
        }
        get backScale() {
            return this._shaderValues.getNumber(BlinnPhongOutlineMaterial.IBACKSCALE);
        }
        set backScale(value) {
            this._shaderValues.setNumber(BlinnPhongOutlineMaterial.IBACKSCALE, value);
        }
        get thinknessTexture() {
            return this._shaderValues.getTexture(BlinnPhongOutlineMaterial.THINKNESSTEXTURE);
        }
        set thinknessTexture(value) {
            if (value)
                this._shaderValues.addDefine(BlinnPhongOutlineMaterial.SHADERDEFINE_THICKNESSMAP);
            else
                this._shaderValues.removeDefine(BlinnPhongOutlineMaterial.SHADERDEFINE_THICKNESSMAP);
            this._shaderValues.setTexture(BlinnPhongOutlineMaterial.THINKNESSTEXTURE, value);
        }
        get transmissionColor() {
            return this._shaderValues.getVector(BlinnPhongOutlineMaterial.TRANSMISSIONCOLOR);
        }
        set transmissionColor(value) {
            this._shaderValues.setVector(BlinnPhongOutlineMaterial.TRANSMISSIONCOLOR, value);
        }
        clone() {
            var dest = new BlinnPhongOutlineMaterial();
            this.cloneTo(dest);
            return dest;
        }
        cloneTo(destObject) {
            super.cloneTo(destObject);
            var destMaterial = destObject;
            destMaterial._enableLighting = this._enableLighting;
            destMaterial._albedoIntensity = this._albedoIntensity;
            destMaterial._enableVertexColor = this._enableVertexColor;
            this._albedoColor.cloneTo(destMaterial._albedoColor);
        }
        copy(src) {
            src.cloneTo(this);
            this.cull = Laya.RenderState.CULL_NONE;
        }
    }
    BlinnPhongOutlineMaterial.RENDERMODE_OPAQUE = 0;
    BlinnPhongOutlineMaterial.RENDERMODE_CUTOUT = 1;
    BlinnPhongOutlineMaterial.RENDERMODE_TRANSPARENT = 2;
    BlinnPhongOutlineMaterial.ALBEDOTEXTURE = Shader3D.propertyNameToID("u_DiffuseTexture");
    BlinnPhongOutlineMaterial.NORMALTEXTURE = Shader3D.propertyNameToID("u_NormalTexture");
    BlinnPhongOutlineMaterial.SPECULARTEXTURE = Shader3D.propertyNameToID("u_SpecularTexture");
    BlinnPhongOutlineMaterial.ALBEDOCOLOR = Shader3D.propertyNameToID("u_DiffuseColor");
    BlinnPhongOutlineMaterial.MATERIALSPECULAR = Shader3D.propertyNameToID("u_MaterialSpecular");
    BlinnPhongOutlineMaterial.SHININESS = Shader3D.propertyNameToID("u_Shininess");
    BlinnPhongOutlineMaterial.TILINGOFFSET = Shader3D.propertyNameToID("u_TilingOffset");
    BlinnPhongOutlineMaterial.TRANSMISSIONRATE = Shader3D.propertyNameToID("u_TransmissionRate");
    BlinnPhongOutlineMaterial.IBACKDIFFUSE = Shader3D.propertyNameToID("u_BackDiffuse");
    BlinnPhongOutlineMaterial.IBACKSCALE = Shader3D.propertyNameToID("u_BackScale");
    BlinnPhongOutlineMaterial.THINKNESSTEXTURE = Shader3D.propertyNameToID("u_ThinknessTexture");
    BlinnPhongOutlineMaterial.TRANSMISSIONCOLOR = Shader3D.propertyNameToID("u_TransmissionColor");
    BlinnPhongOutlineMaterial.OUTLINECOLOR = Shader3D.propertyNameToID("u_OutlineColor");
    BlinnPhongOutlineMaterial.OUTLINELIGHTNESS = Shader3D.propertyNameToID("u_OutlineLightness");
    BlinnPhongOutlineMaterial.OUTLINEWIDTH = Shader3D.propertyNameToID("u_OutlineWidth");

    class StickMan extends Character {
        constructor() {
            super(...arguments);
            this.mat = null;
            this.mPoints = [];
            this.cupCount = 0;
            this.elementController = null;
            this.stickManState = StickManState.Idle;
            this.middleField = null;
            this.targetPosition = [];
            this.x = 0;
            this.y = 0;
            this.waitingTakeCup = null;
            this.screenPos = new Laya.Vector2();
            this.tartgetNode = new Laya.Vector2();
            this.startNode = new Laya.Vector2();
        }
        onAwake() {
            super.onAwake();
            Laya.stage.on(EventConst.Refresh_Game, this, this.onRefresh);
        }
        onEnable() {
            super.onEnable();
        }
        onPause() {
            this.isPause = true;
            this.playIdleAni();
        }
        onResume() {
            super.onResume();
        }
        onStart() {
            super.onStart();
            this.collider3d = this.sprite3d.getComponent(Laya.PhysicsCollider);
            this.collider3d.enabled = true;
            this.collider3d.isTrigger = true;
            this.collider3d.collisionGroup = CollisionConst.GROUP_ENMEY;
            this.collider3d.canCollideWith = CollisionConst.CAN_ENMEY;
            this.animatorController = this.sprite3d.getComponent(PlayerAnimatorController);
            if (this.animatorController) {
                this.animatorController.destroy();
                this.animatorController = null;
            }
            this.animatorController = this.sprite3d.addComponent(PlayerAnimatorController);
            this.animatorController.character = this;
            this.stickman_dustin_1 = this.sprite3d.getChildByName('Color').getChildByName('blue-stickman').getChildByName('stickman_dustin_1');
            this.stickman_dustin = this.sprite3d.getChildByName('Color').getChildByName('blue-stickman').getChildByName('stickman_dustin');
            this.mat = this.stickman_dustin.skinnedMeshRenderer.material.clone();
            this.initMan();
        }
        setOutLine() {
            var outlinemat = new BlinnPhongOutlineMaterial();
            outlinemat.copy(this.mat);
            outlinemat.outlineColor = new Laya.Vector4(0, 0, 0, 0);
            outlinemat.outlineWidth = 0.01;
            this.stickman_dustin_1.skinnedMeshRenderer.material = outlinemat;
            this.stickman_dustin.skinnedMeshRenderer.material = outlinemat;
        }
        init(x, y, colorId) {
            this.colorId = colorId;
            this.x = x;
            this.y = y;
        }
        resetXY(x, y) {
            this.x = x;
            this.y = y;
            this.stickManState = StickManState.Idle;
            this.isPause = true;
        }
        onRefresh() {
            if (this.stickManState != StickManState.Idle)
                return;
            this.transform.position = GameMgr.Instance().getManfield(this.x, this.y - 1).transform.position.clone();
            GameMgr.Instance().grid.setWalkable(this.x, this.y, 0);
            this.isPause = true;
            this.transform.localScale = new Laya.Vector3(0.5, 0.5, 0.5);
            Laya.Tween.to(this.transform, { localScaleX: 1, localScaleY: 1, localScaleZ: 1 }, 100, null, Laya.Handler.create(this, () => {
                this.isPause = false;
            }));
        }
        setRotation(angle) {
            let rotation = new Laya.Vector3(this.mtransform.rotationEuler.x, angle, this.mtransform.rotationEuler.z);
            this.mtransform.rotationEuler = rotation.clone();
            this.mtransform.getForward(this.dir);
        }
        initMan() {
            console.log('Khởi tạo');
            this.setColliderEnable(true);
            this.mPoints = [];
            this.mText = this.sprite3d.getChildByName('Text');
            this.mTray = this.sprite3d.getChildByName('Tray');
            this.mTray.active = false;
            this.cupCount = 0;
            let points = this.mTray.getChildByName('points');
            for (let index = 0; index < points.numChildren; index++) {
                let p = points.getChildByName('point' + index);
                this.mPoints.push(p);
                GameMgr.Instance().clearSprite(p, true);
            }
            this.playIdleAni();
            this.elementController = this.sprite3d.addComponent(ElementController);
            this.elementController.setBehavior(ScriptType.idle);
            GameMgr.Instance().clearSprite(this.mText, true);
            this.moveSpeed = fc.framework.GameFrame.gameCfg.movespeed;
            this.transform.localRotationEulerY = 0;
            this.transform.localScale = new Laya.Vector3(0.5, 0.5, 0.5);
            Laya.Tween.to(this.transform, { localScaleX: 1, localScaleY: 1, localScaleZ: 1 }, 100, null, Laya.Handler.create(this, () => {
                this.isPause = false;
            }));
        }
        updateText() {
            GameMgr.Instance().clearSprite(this.mText, true);
            let numbertexts = (this.cupCount).toString().split('');
            for (let index = 0; index < numbertexts.length; index++) {
                let totalWidth = 0.6 * (numbertexts.length - 1);
                let start = -(totalWidth * 0.5);
                let x = start + 0.6 * index;
                this.createNumber(numbertexts[index], -x);
            }
        }
        createNumber(name, offsetX) {
            GameMgr.Instance().createSprite3dAsyn("num", "num", this.mText, Laya.Handler.create(this, (offsetX, name, clone3d) => {
                clone3d.transform.localPosition = new Laya.Vector3(offsetX, 0, 0);
                clone3d.transform.localRotationEuler = new Laya.Vector3(90, 0, 0);
                clone3d.transform.localScale = new Laya.Vector3(1, 1, 1);
                Util.changMat(ResConst.MaterialPath + Number_Mat['_' + name], clone3d.meshRenderer);
            }, [offsetX, name]));
        }
        initEvent() {
            super.initEvent();
        }
        removeEvent() {
            super.removeEvent();
        }
        playIdleAni() {
            if (this.cupCount > 0) {
                this.animatorController && (this.animatorController.play(PlayerAnimatorController.Carrying));
            }
            else {
                this.animatorController && (this.animatorController.play(PlayerAnimatorController.Idle));
            }
        }
        playRunAni() {
            if (this.cupCount > 0) {
                this.animatorController && (this.animatorController.play(PlayerAnimatorController.Walking_1));
            }
            else {
                this.animatorController && (this.animatorController.play(PlayerAnimatorController.Walking));
            }
        }
        playWalkingAni() {
            this.animatorController && (this.animatorController.play(PlayerAnimatorController.Walking_1));
        }
        playCarryingAni() {
            this.animatorController && (this.animatorController.play(PlayerAnimatorController.Carrying));
        }
        onUpdate() {
            if (!this.isLife())
                return;
            if (GameData.data.gameFinish)
                return;
            if (Laya.timer.delta > 500)
                return;
        }
        update() {
            if (this.stickManState == StickManState.Waiting && Laya.MouseManager.enabled) {
                this.gotoTakeCup();
            }
        }
        onLateUpdate() {
            if (!this.isLife())
                return;
            if (GameData.data.gameFinish)
                return;
            if (Laya.timer.delta > 500)
                return;
            this.mText.transform.rotationEuler = new Laya.Vector3(0, 0, 0);
        }
        move(dir) {
            if (!dir || dir == null) {
                this.movevelocity.x = 0;
                this.movevelocity.z = 0;
                this.moveDir.setValue(0, 0, 0);
                return;
            }
            if ((dir.x == 0 && dir.z == 0))
                return;
            Laya.Vector3.normalize(dir, dir);
            this.moveDir.x = dir.x;
            this.moveDir.z = dir.z;
            let curSpeed = this.moveSpeed * Laya.timer.delta * 0.001;
            curSpeed = Math.min(0.2, curSpeed);
            this.movevelocity.x = -dir.x * curSpeed;
            this.movevelocity.y = 0;
            this.movevelocity.z = -dir.z * curSpeed;
        }
        rotationRole(angle) {
            let angleY = this.sprite3d.transform.rotationEuler.y;
            let rotateY = angle - angleY;
            if (rotateY != 0) {
                this.sprite3d.transform.rotate(new Laya.Vector3(0, rotateY, 0), false, false);
            }
        }
        onDestroy() {
            super.onDestroy();
            this.stickman_dustin_1.skinnedMeshRenderer.material = this.mat;
            this.stickman_dustin.skinnedMeshRenderer.material = this.mat;
            for (let index = 0; index < this.mPoints.length; index++) {
                let p = this.mPoints[index];
                GameMgr.Instance().clearSprite(p, true);
            }
            Laya.stage.off(EventConst.Refresh_Game, this, this.onRefresh);
        }
        isFull() {
            return this.cupCount >= 3;
        }
        takeCupToTray() {
            this.mTray.active = true;
            if (!this.isFull() && this.waitingTakeCup) {
                let laspoint = this.mPoints[this.cupCount];
                laspoint.addChild(this.waitingTakeCup.sprite3d);
                this.waitingTakeCup.mtransform.localPosition = Util.ZERO.clone();
                this.waitingTakeCup.mtransform.localRotationEuler = Util.ZERO.clone();
                this.waitingTakeCup.mtransform.localScale = Util.ONE.clone();
                this.cupCount++;
                AudioManager.Instance.playSfx('xiangzi.mp3');
                this.updateText();
                let _x = this.waitingTakeCup.x;
                this.waitingTakeCup.takenAway();
                GameMgr.Instance().takeTea(_x);
                this.waitingTakeCup = null;
                if (this.isFull()) {
                    this.goout();
                }
                else {
                    let cup = GameMgr.Instance().getCanTakeCupByColorId(this.colorId);
                    if (cup) {
                        this.gotoTakeCup();
                    }
                    else {
                        this.backtoMiddleField();
                    }
                }
            }
            else {
                this.backtoMiddleField();
                this.waitingTakeCup && (this.waitingTakeCup.CupState = CupState.CanTake);
            }
        }
        goout() {
            this.stickManState = StickManState.Full;
            this.middleField && (this.middleField.setStickMan(null));
            this.targetPosition = [];
            this.targetPosition.push(this.mtransform.position.clone());
            this.targetPosition.push(new Laya.Vector3((Util.random(0, 2) * 2 - 1) * GameMgr.Instance().OutPos.x, 0, GameMgr.Instance().OutPos.z));
            this.owner.event(Character.EVENT_CHANGESTATE, ScriptType.move);
            AudioManager.Instance.playSfx('sanxiao.mp3');
        }
        goCenter() {
            this.stickManState = StickManState.Center;
            this.middleField && (this.middleField.setStickMan(null));
            GameMgr.Instance().grid.setWalkable(this.x, this.y, 1);
            this.targetPosition = [];
            this.targetPosition.push(this.mtransform.position.clone());
            this.targetPosition.push(new Laya.Vector3(0, 0, 1));
            this.owner.event(Character.EVENT_CHANGESTATE, ScriptType.move);
            Laya.stage.event(EventConst.Open_Door);
        }
        reachCenter() {
            this.transform.localRotationEulerY = 0;
            let cups = GameMgr.Instance().getCupByColorId(this.colorId);
            for (let index = 0; index < cups.length; index++) {
                let cup = cups[index];
                this.flyCupToTray(cup);
            }
        }
        autoFull() {
            this.middleField && (this.middleField.setStickMan(null));
            this.transform.localRotationEulerY = 0;
            let cups = GameMgr.Instance().getCupByColorId(this.colorId, 3 - this.cupCount);
            for (let index = 0; index < cups.length; index++) {
                let cup = cups[index];
                this.flyCupToTray(cup);
            }
        }
        flyCupToTray(cup) {
            this.mTray.active = true;
            if (!this.isFull() && cup) {
                let laspoint = this.mPoints[this.cupCount];
                let position = cup.transform.position.clone();
                let rotationEuler = cup.transform.rotationEuler.clone();
                let scale = cup.transform.getWorldLossyScale().clone();
                laspoint.addChild(cup.sprite3d);
                cup.mtransform.position = position.clone();
                cup.mtransform.rotationEuler = rotationEuler.clone();
                cup.mtransform.setWorldLossyScale(scale);
                this.cupCount++;
                AudioManager.Instance.playSfx('xiangzi.mp3');
                this.updateText();
                cup.takenAway();
                cup.throwTrack(cup.mtransform.localPosition.clone(), Util.ZERO.clone());
                if (this.isFull()) {
                    this.owner.timerOnce(350, this, () => {
                        GameMgr.Instance().updateTea();
                        this.goout();
                        Laya.MouseManager.enabled = true;
                    });
                }
            }
        }
        setMiddleField(middle) {
            this.middleField = middle;
            this.middleField.setStickMan(this);
        }
        reachMiddleField() {
            this.transform.position = this.middleField.SlotPos.clone();
            this.stickManState = StickManState.Waiting;
            Laya.stage.event(EventConst.Game_Failed_Check);
        }
        gotoTakeCup() {
            let cup = GameMgr.Instance().getCanTakeCupByColorId(this.colorId);
            if (cup) {
                this.waitingTakeCup = cup;
                this.waitingTakeCup.CupState = CupState.WaitingTake;
                this.stickManState = StickManState.Carrying;
                this.targetPosition = [];
                this.targetPosition.push(this.mtransform.position.clone());
                this.targetPosition.push(new Laya.Vector3(cup.transform.position.x, 0, cup.transform.position.z - 0.5));
                this.owner.event(Character.EVENT_CHANGESTATE, ScriptType.move);
            }
            else {
                this.transform.localRotationEulerY = 180;
            }
        }
        gotoMiddleField() {
            let field = GameMgr.Instance().getEmptyMiddleField();
            if (field) {
                GameMgr.Instance().grid.setWalkable(this.x, this.y, 1);
                if (this.checkAstar()) {
                    this.stickManState = StickManState.Middle;
                    this.setMiddleField(field);
                    this.setColliderEnable(false);
                    this.targetPosition.push(new Laya.Vector3(this.middleField.transform.position.x, 0, this.middleField.transform.position.z));
                    this.owner.event(Character.EVENT_CHANGESTATE, ScriptType.move);
                    this.setOutLine();
                    return true;
                }
                else {
                    GameMgr.Instance().grid.setWalkable(this.x, this.y, 0);
                    this.shake();
                    GameLogic.cameraCtr.world2ScreenPos(this.mText.transform.position.clone(), this.screenPos);
                    Laya.stage.event(EventConst.Game_Angry_Tip, this.screenPos);
                    return false;
                }
            }
            else {
                this.shake();
                GameLogic.cameraCtr.world2ScreenPos(this.mText.transform.position.clone(), this.screenPos);
                Laya.stage.event(EventConst.Game_Angry_Tip, this.screenPos);
                return false;
            }
        }
        checkAstar() {
            this.targetPosition = [];
            this.startNode.setValue(this.x, this.y);
            let roads = [];
            this.tartgetNode.setValue(this.x, 0);
            roads = this.searchRoad(this.startNode.clone(), this.tartgetNode.clone());
            if (roads.length > 0) {
                this.setTrackPoints(roads);
                return true;
            }
            return false;
        }
        searchRoad(startNode, endNode) {
            var grid = GameMgr.Instance().grid;
            grid.setStartNode(startNode.x, startNode.y);
            grid.setEndNode(endNode.x, endNode.y);
            return GameMgr.Instance().astar.searchRoad(grid);
        }
        setTrackPoints(roads) {
            this.targetPosition = [];
            this.targetPosition.push(this.mtransform.position.clone());
            roads.pop();
            for (let index = 0; index < roads.length; index++) {
                let road = roads[index];
                let node = GameMgr.Instance().grid.getNode(road.x, road.y);
                let pos = new Laya.Vector3(node.posX, 0, node.posY);
                this.targetPosition.push(pos.clone());
            }
        }
        backtoMiddleField() {
            if (this.middleField) {
                this.stickManState = StickManState.BackMiddle;
                this.targetPosition = [];
                this.targetPosition.push(this.mtransform.position.clone());
                this.targetPosition.push(new Laya.Vector3(this.middleField.transform.position.x, 0, this.middleField.transform.position.z));
                this.owner.event(Character.EVENT_CHANGESTATE, ScriptType.move);
            }
        }
        getMovePoints() {
            return this.targetPosition;
        }
        reachTargetPos() {
            switch (this.stickManState) {
                case StickManState.Middle:
                case StickManState.BackMiddle:
                    this.reachMiddleField();
                    break;
                case StickManState.Full:
                    this.onFull();
                    break;
                case StickManState.Center:
                    this.reachCenter();
                    break;
                case StickManState.Carrying:
                    this.takeCupToTray();
                    break;
                default:
                    break;
            }
        }
        onFull() {
            if (!this.isPause) {
                this.onPause();
                GameMgr.Instance().removeStickMan(this);
                Laya.stage.event(EventConst.Level_Update);
            }
        }
        shake() {
            AudioManager.Instance.playSfx('movefail.mp3');
            let y = this.transform.localRotationEulerY;
            Laya.Tween.to(this.transform, { localRotationEulerY: y - 5 }, 100, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(this.transform, { localRotationEulerY: y + 5 }, 200, null, Laya.Handler.create(this, () => {
                    Laya.Tween.to(this.transform, { localRotationEulerY: y }, 100, null, Laya.Handler.create(this, () => {
                    }));
                }));
            }));
        }
    }

    class Obs extends GameObject {
        constructor() {
            super(...arguments);
            this.x = 0;
            this.y = 0;
        }
        onAwake() {
            super.onAwake();
            this.sprite3d = this.owner;
            this.mtransform = this.sprite3d.transform;
        }
        init(x, y) {
            this.x = x;
            this.y = y;
        }
        onEnable() {
            super.onEnable();
        }
        onDisable() {
            super.onDisable();
        }
        onDestroy() {
            super.onDestroy();
        }
        onStart() {
            super.onStart();
        }
    }

    class Multi extends GameObject {
        constructor() {
            super(...arguments);
            this.x = 0;
            this.y = 0;
            this.manList = [];
            this.doordir = DoorDir.Top;
        }
        onAwake() {
            super.onAwake();
            this.sprite3d = this.owner;
            this.mtransform = this.sprite3d.transform;
            Laya.stage.on(EventConst.Open_Door, this, this.openDoor);
        }
        init(x, y, manlist, dir) {
            this.x = x;
            this.y = y;
            this.manList = manlist;
            this.doordir = dir;
        }
        onEnable() {
            super.onEnable();
        }
        onDisable() {
            super.onDisable();
        }
        onDestroy() {
            super.onDestroy();
            Laya.stage.off(EventConst.Open_Door, this, this.openDoor);
        }
        onStart() {
            super.onStart();
            this.mtransform.localRotationEuler = new Laya.Vector3(0, this.doordir * 90, 0);
            this.mText = this.sprite3d.getChildByName("Multi").getChildByName('Text');
            this.updateText();
        }
        isEmpty() {
            return this.manList.length == 0;
        }
        resort() {
            if (this.isEmpty())
                return;
            this.manList.sort(function () { return Math.random() > 0.5 ? 1 : -1; });
        }
        updateText() {
            GameMgr.Instance().clearSprite(this.mText, true);
            let numbertexts = (this.manList.length).toString().split('');
            this.mText.transform.rotationEuler = new Laya.Vector3(0, 0, 0);
            for (let index = 0; index < numbertexts.length; index++) {
                let totalWidth = 0.6 * (numbertexts.length - 1);
                let start = -(totalWidth * 0.5);
                let x = start + 0.6 * index;
                this.createNumber(numbertexts[index], -x);
            }
        }
        createNumber(name, offsetX) {
            GameMgr.Instance().createSprite3dAsyn("num", "num", this.mText, Laya.Handler.create(this, (offsetX, name, clone3d) => {
                clone3d.transform.localPosition = new Laya.Vector3(offsetX, 0, 0);
                clone3d.transform.localRotationEuler = new Laya.Vector3(90, 0, 0);
                clone3d.transform.localScale = new Laya.Vector3(1, 1, 1);
                Util.changMat(ResConst.MaterialPath + Number_Mat['_' + name], clone3d.meshRenderer);
            }, [offsetX, name]));
        }
        openDoor() {
            if (!this.isEmpty()) {
                let _x = this.x;
                let _y = this.y;
                switch (this.doordir) {
                    case DoorDir.Top:
                        _y = this.y - 1;
                        break;
                    case DoorDir.Right:
                        _x = this.x + 1;
                        break;
                    case DoorDir.Left:
                        _x = this.x - 1;
                        break;
                    default:
                        break;
                }
                let grid = GameMgr.Instance().grid.getNode(_x, _y);
                if (grid && grid.walkable) {
                    GameMgr.Instance().grid.setWalkable(_x, _y, 0);
                    this.owner.timerOnce(100, this, () => {
                        GameMgr.Instance().createStickMan(_x, _y - 1, this.manList.pop(), GameMgr.Instance().Mangrids);
                        this.updateText();
                    });
                }
            }
        }
    }

    var Resource$2 = fc.framework.Resource;
    var ObjectPool$2 = fc.plugin.ObjectPool;
    class GameMgr {
        constructor() {
            this.teafieldList = [];
            this.manfieldList = [];
            this.teaList = [];
            this.teaIdList = [];
            this.middleList = [];
            this.multiList = [];
            this.manList = [];
            this.removeList = [];
            this.levelManTotal = 0;
            this.gooutManCount = 0;
            this.gameGrid = null;
            this.gridData = [];
            this._astar = null;
        }
        static Instance() {
            if (this.instance == null)
                this.instance = new GameMgr();
            return this.instance;
        }
        get curManTotal() {
            return this.levelManTotal;
        }
        get gooutManTotal() {
            return this.gooutManCount;
        }
        get OutPos() {
            return this.outpos.transform.position.clone();
        }
        get Mangrids() {
            return this.mMangrids;
        }
        get TeaList() {
            return this.teaList;
        }
        setTeaList(x, y, value) {
            this.teaList[x][y] = value;
        }
        getManfield(x, y) {
            if (this.manfieldList[y])
                return this.manfieldList[y][x];
            return null;
        }
        getTeafield(x, y) {
            if (this.teafieldList[x])
                return this.teafieldList[x][y];
            return null;
        }
        get grid() {
            return this.gameGrid;
        }
        get gridDatas() {
            return this.gridData;
        }
        get astar() {
            return this._astar;
        }
        init(parent) {
            this.parent = parent;
            this._astar = new AStar();
        }
        recoverSprite3d(player, target, isRecover = false) {
            for (let i = target.numChildren - 1; i >= 0; i--) {
                let el = target.getChildAt(i);
                if (el) {
                    if (el.transform.position.z - player.transform.position.z > 100) {
                        el.active && (el.active = false);
                    }
                    else if (player.transform.position.z - el.transform.position.z > 60) {
                        el.active = false;
                        if (isRecover) {
                            ResourceMgr.recoverSprite3d(el);
                            el.removeSelf();
                        }
                        else {
                            el.removeSelf();
                            el.destroy();
                        }
                    }
                    else {
                        !el.active && (el.active = true);
                    }
                }
            }
        }
        recoverRootSprite(player3d) {
        }
        recoverSubSprite(player3d, el) {
            let obstacle = el.getChildByName("Obstacle");
            obstacle && (this.recoverSprite3d(player3d, obstacle, true));
            let spawner = el.getChildByName("Spawner");
            spawner && this.recoverSprite3d(player3d, spawner, true);
        }
        clearRootSprite(sprite3d) {
            if (!sprite3d)
                return;
            this.clearSubSprite(sprite3d);
        }
        clearSubSprite(sprite3d) {
            if (!sprite3d)
                return;
            for (let index = 0; index < sprite3d.numChildren; index++) {
                const element = sprite3d.getChildAt(index);
                element && (this.clearSprite(element, true));
            }
        }
        clearSprite(sprite3d, isRecover = true) {
            if (!sprite3d)
                return;
            while (sprite3d.numChildren > 0) {
                let el = sprite3d.getChildAt(0);
                let scripts3d = el.getComponents(Laya.Script3D);
                if (scripts3d) {
                    for (let index = 0; index < scripts3d.length; index++) {
                        let script = scripts3d[index];
                        if (script) {
                            script.destroy();
                        }
                    }
                }
                let scripts = el.getComponents(Laya.Script);
                if (scripts) {
                    for (let index = 0; index < scripts.length; index++) {
                        let script = scripts[index];
                        if (script) {
                            script.destroy();
                        }
                    }
                }
                el.active = false;
                if (isRecover) {
                    ObjectPool$2.recoverSprite3d(el);
                    sprite3d.removeChild(el);
                }
                else {
                    let rigidBody = el.getComponent(Laya.Rigidbody3D);
                    if (rigidBody) {
                        let meshColliderShape = rigidBody.colliderShape;
                        if (meshColliderShape && meshColliderShape.mesh) {
                            meshColliderShape.mesh.destroy();
                            rigidBody.destroy();
                        }
                    }
                    el.removeSelf();
                    el.destroy();
                }
            }
        }
        initSceneById(levelid, onCompleted) {
            this.outpos = this.parent.getChildByName('outpos');
            this.mTeagrids = this.parent.getChildByName('Teagrids');
            this.mMangrids = this.parent.getChildByName('Mangrids');
            this.mTop = this.parent.getChildByName('Top');
            this.mMiddle = this.parent.getChildByName('Middle');
            this.mBottom = this.parent.getChildByName('Bottom');
            this.onDestroy();
            this.teafieldList = [];
            this.manfieldList = [];
            let topname = GameData.data.teacolum + '_5';
            Util.activeAllChild(this.mTop, false);
            let top = this.mTop.getChildByName(topname);
            top.active = true;
            let tstart = top.getChildByName('start');
            for (let x = 0; x < GameData.data.teacolum; x++) {
                let pos = new Laya.Vector3(0, 0, 0);
                this.teafieldList[x] = [];
                pos.x = tstart.transform.position.x - x;
                for (let y = 0; y < GameData.data.teamRowMax; y++) {
                    pos.z = tstart.transform.position.z + y;
                    let clone3d = this.createSprite3d("Field", "Field", this.mTeagrids);
                    clone3d.transform.position = pos.clone();
                    this.teafieldList[x][y] = (clone3d);
                    this.removeComponent(clone3d);
                    clone3d.addComponent(Field);
                }
            }
            this.middleList = [];
            for (let index = 0; index < this.mMiddle.numChildren; index++) {
                let middlefield = this.mMiddle.getChildAt(index);
                this.removeComponent(middlefield);
                let middlefieldSc = middlefield.addComponent(MiddleField);
                middlefieldSc.init(index);
                this.middleList.push(middlefieldSc);
            }
            let leveldata = GameData.data.getLevelData(levelid);
            if (leveldata.stickmancolum > 6) {
                GameLogic.cameraCtr.setFieldOfView(70);
            }
            else {
                GameLogic.cameraCtr.setFieldOfView(60);
            }
            let manname = leveldata.stickmancolum + '_6';
            Util.activeAllChild(this.mBottom, false);
            let bottom = this.mBottom.getChildByName(manname);
            bottom.active = true;
            let bstart = bottom.getChildByName('start');
            this.gridData[0] = [];
            for (let x = 0; x < leveldata.stickmancolum; x++) {
                this.gridData[0][x] = 1;
            }
            for (let y = 0; y < GameData.data.manRowMax; y++) {
                let bpos = new Laya.Vector3(0, 0, 0);
                this.manfieldList[y] = [];
                this.gridData[y + 1] = [];
                bpos.z = bstart.transform.position.z - y;
                for (let x = 0; x < leveldata.stickmancolum; x++) {
                    bpos.x = bstart.transform.position.x - x;
                    let clone3d = this.createSprite3d("Field", "Field", this.mMangrids);
                    clone3d.transform.position = bpos.clone();
                    this.manfieldList[y][x] = (clone3d);
                    this.gridData[y + 1][x] = 0;
                    this.removeComponent(clone3d);
                    clone3d.addComponent(Field);
                }
            }
            this.gameGrid = null;
            this.gameGrid = new Grid(this.gridData, [], 1, 1, bstart.transform.position.clone());
            let mantotal = GameData.data.manRowMax * leveldata.stickmancolum - leveldata.obscount - leveldata.multicount + leveldata.multicount * leveldata.multimancount;
            this.levelManTotal = mantotal;
            this.gooutManCount = 0;
            let color = Math.min(leveldata.colorcount, ResConst.Cups.length);
            let tempcolorid = [];
            for (let index = 0; index < ResConst.Cups.length; index++) {
                tempcolorid.push(index);
            }
            let colorids = [];
            for (let index = 0; index < color; index++) {
                let _index = Util.random(0, tempcolorid.length);
                colorids.push(tempcolorid[_index]);
                tempcolorid.splice(_index, 1);
            }
            let manids = [];
            let _mcount = Math.floor(mantotal / color);
            let _rcount = mantotal % color;
            for (let i = 0; i < colorids.length; i++) {
                for (let index = 0; index < _mcount; index++) {
                    manids.push(colorids[i]);
                }
            }
            for (let i = 0; i < _rcount; i++) {
                manids.push(colorids[i]);
            }
            manids.sort(function () { return Math.random() > 0.5 ? 1 : -1; });
            let teaids = [];
            for (let index = 0; index < manids.length; index++) {
                let _id = manids[index];
                teaids.push(_id);
                teaids.push(_id);
                teaids.push(_id);
            }
            teaids.sort(function () { return Math.random() > 0.5 ? 1 : -1; });
            this.teaIdList = [];
            for (let index = 0; index < GameData.data.teacolum; index++) {
                this.teaIdList[index] = [];
            }
            let _count = Math.floor(teaids.length / GameData.data.teacolum);
            let _tcount = teaids.length % GameData.data.teacolum != 0 ? 1 : 0;
            for (let index = 0; index <= _count + _tcount; index++) {
                for (let x = 0; x < GameData.data.teacolum; x++) {
                    if (teaids.length > 0) {
                        this.teaIdList[x].push(teaids.pop());
                    }
                }
            }
            for (let x = 0; x < this.teafieldList.length; x++) {
                this.teaList[x] = [];
                for (let y = 0; y < this.teafieldList[x].length; y++) {
                    let ids = this.teaIdList[x].pop();
                    this.createCup(x, y, ids, this.mTeagrids);
                }
            }
            let obsPoint = [];
            let tempPoint = [];
            for (let x = 0; x < leveldata.stickmancolum; x++) {
                for (let y = 1; y < GameData.data.manRowMax; y++) {
                    let point = new Laya.Vector2(x, y);
                    tempPoint.push(point);
                }
            }
            let doorPoints = [];
            while (doorPoints.length < leveldata.multicount) {
                let _index = Util.random(0, tempPoint.length);
                let point = tempPoint[_index];
                let dir = DoorDir.Top;
                let _x = point.x;
                let _y = point.y - 1;
                let doorindex = this.indexOfPoint(tempPoint, _x, _y);
                if (doorindex == -1) {
                    _x = point.x - 1;
                    _y = point.y;
                    doorindex = this.indexOfPoint(tempPoint, _x, _y);
                    if (doorindex == -1) {
                        _x = point.x + 1;
                        _y = point.y;
                        doorindex = this.indexOfPoint(tempPoint, _x, _y);
                        if (doorindex != -1) {
                            dir = DoorDir.Right;
                        }
                    }
                    else {
                        dir = DoorDir.Left;
                    }
                }
                else {
                    dir = DoorDir.Top;
                }
                if (doorindex != -1) {
                    let doorpoint = tempPoint[doorindex];
                    tempPoint.splice(_index, 1);
                    doorindex = tempPoint.indexOf(doorpoint);
                    tempPoint.splice(doorindex, 1);
                    let p = {
                        x: point.x,
                        y: point.y,
                        dir: dir
                    };
                    doorPoints.push(p);
                }
            }
            this.multiList = [];
            for (let index = 0; index < leveldata.multicount; index++) {
                let manlist = [];
                for (let i = 0; i < leveldata.multimancount; i++) {
                    let _index = Util.random(0, manids.length);
                    manlist.push(manids[_index]);
                    manids.splice(_index, 1);
                }
                let pos = doorPoints[index];
                let clone3d = this.createSprite3d("Multi", 'Multi', this.mMangrids);
                clone3d.transform.position = this.manfieldList[pos.y][pos.x].transform.position.clone();
                this.removeComponent(clone3d);
                let multi = clone3d.addComponent(Multi);
                let dir = pos.dir;
                multi.init(pos.x, pos.y + 1, manlist, dir);
                this.multiList.push(multi);
                manids.sort(function () { return Math.random() > 0.5 ? 1 : -1; });
            }
            let removePoint = [];
            for (let index = 0; index < tempPoint.length; index++) {
                let p = tempPoint[index];
                if (p.y == GameData.data.manRowMax - 1) {
                    removePoint.push(p);
                }
            }
            for (let index = 0; index < removePoint.length; index++) {
                let p = removePoint[index];
                let _index = tempPoint.indexOf(p);
                _index != -1 && (tempPoint.splice(_index, 1));
            }
            removePoint = [];
            for (let index = 0; index < leveldata.obscount; index++) {
                let _index = Util.random(0, tempPoint.length);
                let point = tempPoint[_index];
                tempPoint.splice(_index, 1);
                obsPoint.push(point);
            }
            for (let index = 0; index < obsPoint.length; index++) {
                let pos = obsPoint[index];
                this.createSprite3dAsyn("Obs", 'Obs', this.mMangrids, Laya.Handler.create(this, (x, y, clone3d) => {
                    clone3d.transform.position = this.manfieldList[y][x].transform.position.clone();
                    this.removeComponent(clone3d);
                    let obs = clone3d.addComponent(Obs);
                    obs.init(x, y + 1);
                }, [pos.x, pos.y]));
            }
            for (let y = 0; y < GameData.data.manRowMax; y++) {
                for (let x = 0; x < leveldata.stickmancolum; x++) {
                    let lock = false;
                    for (let index = 0; index < doorPoints.length; index++) {
                        let point = doorPoints[index];
                        if (point.x == x && point.y == y) {
                            lock = true;
                            break;
                        }
                    }
                    if (!lock) {
                        for (let index = 0; index < obsPoint.length; index++) {
                            let point = obsPoint[index];
                            if (point.x == x && point.y == y) {
                                lock = true;
                                break;
                            }
                        }
                    }
                    if (!lock) {
                        this.createStickMan(x, y, manids.pop(), this.mMangrids);
                    }
                }
            }
            manids = [];
            if (onCompleted) {
                onCompleted.run();
            }
        }
        updateTea() {
            for (let index = 0; index < this.teaList.length; index++) {
                this.takeTea(index);
            }
        }
        takeTea(curx) {
            if (curx == -1)
                return;
            let _x = curx;
            for (let index = 0; index < this.teaList[_x].length - 1; index++) {
                let curCup = this.teaList[_x][index];
                if (!curCup) {
                    for (let y = index + 1; y < this.teaList[_x].length; y++) {
                        let lastCup = this.teaList[_x][y];
                        if (lastCup) {
                            lastCup.moveToPosition(_x, index, this.teafieldList[_x][index].transform.position.clone());
                            this.teaList[_x][index] = lastCup;
                            this.teaList[_x][y] = null;
                            break;
                        }
                    }
                }
            }
            Laya.stage.timerOnce(250, this, (x) => {
                for (let index = 0; index < this.teaList[x].length; index++) {
                    let curCup = this.teaList[x][index];
                    if (!curCup && this.teaIdList[x].length > 0) {
                        let ids = this.teaIdList[x].pop();
                        this.createCup(x, index, ids, this.mTeagrids);
                    }
                }
            }, [_x], false);
        }
        getEmptyMiddleField() {
            let ret = null;
            for (let index = 0; index < this.middleList.length; index++) {
                let middle = this.middleList[index];
                if (middle.unLock() && middle.isEmpty()) {
                    ret = middle;
                    break;
                }
            }
            return ret;
        }
        getCanTakeCupByColorId(colorId) {
            let cup = null;
            for (let x = 0; x < this.teaList.length; x++) {
                let firstCup = this.teaList[x][0];
                if (firstCup && firstCup.CupState == CupState.CanTake && firstCup.colorId == colorId) {
                    cup = firstCup;
                    break;
                }
            }
            return cup;
        }
        getWaitingStickMan() {
            let list = [];
            for (let index = 0; index < this.manList.length; index++) {
                let man = this.manList[index];
                if (man.stickManState == StickManState.Waiting) {
                    list.push(man);
                }
            }
            list.sort((a, b) => b.cupCount - a.cupCount);
            return list;
        }
        getRandomStickMan() {
            let list = [];
            for (let index = 0; index < this.manList.length; index++) {
                let man = this.manList[index];
                if (man.stickManState == StickManState.Idle) {
                    list.push(man);
                }
            }
            return list[Util.random(0, list.length)];
        }
        getCupByColorId(colorId, count = 3) {
            let list = [];
            for (let x = 0; x < this.teaList.length; x++) {
                for (let y = 0; y < this.teaList[x].length; y++) {
                    let cup = this.teaList[x][y];
                    if (cup && cup.CupState == CupState.CanTake && cup.colorId == colorId && list.length < count) {
                        list.push(cup);
                    }
                }
            }
            if (list.length < count) {
                let ids = [];
                let left = count - list.length;
                for (let x = 0; x < this.teaList.length; x++) {
                    for (let y = 0; y < this.teaIdList[x].length; y++) {
                        let _id = this.teaIdList[x][y];
                        if (colorId == _id && ids.length < left) {
                            ids.push(_id);
                        }
                    }
                }
                for (let index = 0; index < ids.length; index++) {
                    let _id = ids[index];
                    let clone3d = this.createSprite3d(ResConst.Cups[_id], ResConst.Cups[_id], this.mTeagrids);
                    clone3d.transform.position = new Laya.Vector3(0, 0, 5);
                    this.removeComponent(clone3d);
                    let cup = clone3d.addComponent(Cup);
                    cup.init(-1, -1, _id);
                    list.push(cup);
                    for (let x = 0; x < this.teaList.length; x++) {
                        let _idnex = this.teaIdList[x].indexOf(_id);
                        if (_idnex != -1) {
                            this.teaIdList[x].splice(_idnex, 1);
                            break;
                        }
                    }
                }
            }
            return list;
        }
        refeshGame() {
            for (let x = 0; x < this.teaIdList.length; x++) {
                this.teaIdList[x].sort(function () { return Math.random() > 0.5 ? 1 : -1; });
            }
            let cupList = [];
            for (let x = 0; x < this.teaList.length; x++) {
                for (let y = 0; y < this.teaList[x].length; y++) {
                    let curCup = this.teaList[x][y];
                    let data = {
                        cup: curCup,
                        x: x,
                        y: y
                    };
                    cupList.push(data);
                }
            }
            for (let index = 0; index < cupList.length; index++) {
                let data1 = cupList[index];
                let _index = Util.random(0, cupList.length);
                let data2 = cupList[_index];
                let x1 = data1.x;
                let y1 = data1.y;
                let x2 = data2.x;
                let y2 = data2.y;
                if (data1.cup) {
                    data1.cup.resetXY(x2, y2);
                }
                data1.x = x2;
                data1.y = y2;
                cupList[index] = data1;
                GameMgr.Instance().setTeaList(x2, y2, data1.cup);
                if (data2.cup) {
                    data2.cup.resetXY(x1, y1);
                }
                data2.x = x1;
                data2.y = y1;
                cupList[_index] = data2;
                GameMgr.Instance().setTeaList(x1, y1, data2.cup);
            }
            for (let x = 0; x < this.multiList.length; x++) {
                let multi = this.multiList[x];
                multi.resort();
            }
            let manlist = [];
            for (let index = 0; index < this.manList.length; index++) {
                let man = this.manList[index];
                if (man && man.stickManState == StickManState.Idle) {
                    let data = {
                        cup: man,
                        x: man.x,
                        y: man.y
                    };
                    manlist.push(data);
                }
            }
            for (let y = 1; y < this.grid.numRows; y++) {
                for (let x = 0; x < this.grid.numCols; x++) {
                    let walkable = this.grid.getNode(x, y);
                    if (walkable && walkable.walkable == 1) {
                        let data = {
                            cup: null,
                            x: x,
                            y: y
                        };
                        manlist.push(data);
                    }
                }
            }
            for (let index = 0; index < manlist.length; index++) {
                let data1 = manlist[index];
                let _index = Util.random(0, manlist.length);
                let data2 = manlist[_index];
                let x1 = data1.x;
                let y1 = data1.y;
                let x2 = data2.x;
                let y2 = data2.y;
                if (data1.cup) {
                    data1.cup.resetXY(x2, y2);
                    GameMgr.Instance().grid.setWalkable(x2, y2, 0);
                }
                else {
                    GameMgr.Instance().grid.setWalkable(x2, y2, 1);
                }
                data1.x = x2;
                data1.y = y2;
                manlist[index] = data1;
                if (data2.cup) {
                    data2.cup.resetXY(x1, y1);
                    GameMgr.Instance().grid.setWalkable(x1, y1, 0);
                }
                else {
                    GameMgr.Instance().grid.setWalkable(x1, y1, 1);
                }
                data2.x = x1;
                data2.y = y1;
                manlist[_index] = data2;
            }
            Laya.stage.timerOnce(200, this, () => {
                Laya.stage.event(EventConst.Refresh_Game);
                this.updateTea();
                Laya.stage.timerOnce(300, this, () => {
                    Laya.stage.event(EventConst.Open_Door);
                    Laya.MouseManager.enabled = true;
                }, null, false);
            }, null, false);
        }
        getCanMoveStickMan() {
            let point = new Laya.Vector2();
            let isOk = false;
            for (let y = 1; y < this.grid.numRows; y++) {
                for (let x = 0; x < this.grid.numCols; x++) {
                    let walkable = this.grid.getNode(x, y);
                    if (walkable && walkable.walkable == 0 && !isOk) {
                        point.x = x;
                        point.y = y;
                        isOk = true;
                        break;
                    }
                }
                if (isOk) {
                    break;
                }
            }
            let man = null;
            for (let index = 0; index < this.manList.length; index++) {
                let _man = this.manList[index];
                if (_man && _man.stickManState == StickManState.Idle && point.x == _man.x && point.y == _man.y) {
                    man = _man;
                }
            }
            return man;
        }
        indexOf(list, _id) {
            let ret = -1;
            for (let index = 0; index < list.length; index++) {
                let data = list[index];
                if (data.id == _id) {
                    ret = index;
                    break;
                }
            }
            return ret;
        }
        indexOfPoint(list, x, y) {
            let ret = -1;
            for (let index = 0; index < list.length; index++) {
                let data = list[index];
                if (data.x == x && data.y == y) {
                    ret = index;
                    break;
                }
            }
            return ret;
        }
        createCup(x, y, colorId, parent) {
            this.createSprite3dAsyn(ResConst.Cups[colorId], ResConst.Cups[colorId], parent, Laya.Handler.create(this, (x, y, colorId, clone3d) => {
                clone3d.transform.position = this.teafieldList[x][y].transform.position.clone();
                this.removeComponent(clone3d);
                let plate = clone3d.addComponent(Cup);
                this.teaList[x][y] = plate;
                plate.init(x, y, colorId);
            }, [x, y, colorId]));
        }
        createStickMan(x, y, colorId, parent) {
            this.createSprite3dAsyn(ResConst.Stickmans[colorId], ResConst.Stickmans[colorId], parent, Laya.Handler.create(this, (x, y, colorId, clone3d) => {
                clone3d.transform.position = this.manfieldList[y][x].transform.position.clone();
                this.removeComponent(clone3d);
                let stickMan = clone3d.addComponent(StickMan);
                this.manList.push(stickMan);
                stickMan.init(x, y + 1, colorId);
            }, [x, y, colorId]));
        }
        createSprite3dByPosData(posdata, name = '', pkgName = null) {
            let resourceName = name.length > 0 ? name : posdata.name;
            console.log('resourceName', resourceName);
            var original = Resource$2.loadSprite3d(resourceName, pkgName);
            let element3d = ObjectPool$2.getSprite3d(original);
            element3d.name = resourceName;
            element3d.active = true;
            element3d.transform.position = new Laya.Vector3(posdata.posX / 100, posdata.posY / 100, posdata.posZ / 100);
            element3d.transform.rotation = new Laya.Quaternion(posdata.rX / 100, posdata.rY / 100, posdata.rZ / 100, posdata.rW / 100);
            element3d.transform.setWorldLossyScale(new Laya.Vector3(posdata.sX / 100, posdata.sY / 100, posdata.sZ / 100));
            return element3d;
        }
        createSprite3dByPosDataAsyn(posdata, onCompleted, name = '', pkgName = null) {
            let resourceName = name.length > 0 ? name : posdata.name;
            Resource$2.loadSprite3dAsyn(resourceName, Laya.Handler.create(this, (data, name, onCompleted, original) => {
                let element3d = ObjectPool$2.getSprite3d(original);
                element3d.name = name;
                element3d.active = true;
                element3d.transform.position = new Laya.Vector3(data.posX / 100, data.posY / 100, data.posZ / 100);
                element3d.transform.rotationEuler = new Laya.Vector3(data.rX / 100, data.rY / 100, data.rZ / 100);
                element3d.transform.setWorldLossyScale(new Laya.Vector3(data.sX / 100, data.sY / 100, data.sZ / 100));
                if (onCompleted) {
                    onCompleted.runWith(element3d);
                }
            }, [posdata, name, onCompleted]), null, pkgName);
        }
        createSprite3d(name, label, parent, pkgName = null) {
            let labelname = label.length > 0 ? label : name;
            var original = Resource$2.loadSprite3d(name, pkgName);
            let clone3d = ObjectPool$2.getSprite3d(original);
            clone3d.name = labelname;
            clone3d.active = true;
            parent.addChild(clone3d);
            return clone3d;
        }
        createSprite3dAsyn(name, label, parent, onCompleted, pkgName = null) {
            if (!name) {
                console.log('name', name);
            }
            Resource$2.loadSprite3dAsyn(name, Laya.Handler.create(this, (label, onCompleted, original) => {
                let clone3d = ObjectPool$2.getSprite3d(original);
                clone3d.name = label;
                clone3d.active = true;
                parent.addChild(clone3d);
                if (onCompleted) {
                    onCompleted.runWith(clone3d);
                }
            }, [label, onCompleted]), null, pkgName);
        }
        initPlayer() {
        }
        initTrialPlayerAsyn(name, onCompleted) {
        }
        initPlayerAsyn(onCompleted) {
        }
        removeStickMan(stickMan) {
            let index = this.manList.indexOf(stickMan);
            index != -1 && this.manList.splice(index, 1);
            index = this.removeList.indexOf(stickMan);
            index != -1 && this.removeList.splice(index, 1);
            let sprite3d = stickMan.sprite3d;
            this.removeComponent(sprite3d);
            sprite3d.active = false;
            ObjectPool$2.recoverSprite3d(sprite3d);
            this.gooutManCount++;
        }
        stickmanToRemoveList(balloon) {
            let index = this.manList.indexOf(balloon);
            index != -1 && this.manList.splice(index, 1);
            index = this.removeList.indexOf(balloon);
            if (index == -1) {
                this.removeList.push(balloon);
            }
        }
        onDestroy() {
            for (let i = this.manList.length - 1; i >= 0; i--) {
                let plate = this.manList[i];
                let sprite3d = plate.sprite3d;
                this.manList[i] = null;
                this.removeComponent(sprite3d);
                if (sprite3d && !sprite3d.destroyed) {
                    plate.destroy();
                    sprite3d.active = false;
                    plate = null;
                    ObjectPool$2.recoverSprite3d(sprite3d);
                }
            }
            for (let i = this.middleList.length - 1; i >= 0; i--) {
                let plate = this.middleList[i];
                let sprite3d = plate.sprite3d;
                this.middleList[i] = null;
                this.removeComponent(sprite3d);
            }
            for (let i = this.removeList.length - 1; i >= 0; i--) {
                let character = this.removeList[i];
                let sprite3d = character.sprite3d;
                this.removeList[i] = null;
                this.removeComponent(sprite3d);
                if (sprite3d && !sprite3d.destroyed) {
                    character.destroy();
                    sprite3d.active = false;
                    character = null;
                    ObjectPool$2.recoverSprite3d(sprite3d);
                }
            }
            this.manList = [];
            this.removeList = [];
            this.clearSprite(this.mTeagrids, true);
            this.clearSprite(this.mMangrids, true);
            this.manfieldList = [];
            this.teafieldList = [];
        }
        removeComponent(sprite3d) {
            if (sprite3d) {
                let scripts3d = sprite3d.getComponents(Laya.Script3D);
                if (scripts3d) {
                    for (let index = 0; index < scripts3d.length; index++) {
                        let script = scripts3d[index];
                        if (script) {
                            script.destroy();
                        }
                    }
                }
                let scripts = sprite3d.getComponents(Laya.Script);
                if (scripts) {
                    for (let index = 0; index < scripts.length; index++) {
                        let script = scripts[index];
                        if (script) {
                            script.destroy();
                        }
                    }
                }
            }
        }
    }
    GameMgr.instance = null;

    class FailPageUI extends fc.plugin.BaseView {
        initView(data) {
            if (data) {
            }
        }
        constructor() { super(); }
        onAwake() {
            super.onAwake();
            fc.framework.GameFrame.closeAllViews();
            fc.framework.GameFrame.overGame();
        }
    }

    class PassLevelPageUI extends fc.plugin.BaseView {
        constructor() {
            super();
            this.data = null;
        }
        initView(data) {
            if (data) {
                this.data = data.data;
            }
        }
        onAwake() {
            super.onAwake();
            this.cancelBtn = this.owner.getChildByName('middleUI').getChildByName('cancelBtn');
        }
        onEnable() {
            super.onEnable();
            this.cancelBtn.on(Laya.Event.CLICK, this, this.onClose);
            fc.framework.GameFrame.pause();
        }
        onDisable() {
            super.onDisable();
            this.cancelBtn.off(Laya.Event.CLICK, this, this.onClose);
            fc.framework.GameFrame.resume();
        }
        onDestroy() {
            super.onDestroy();
            this.onDisable();
        }
        onStart() {
            super.onStart();
            AudioManager.Instance.playSfx('win.mp3');
            this.updateUI();
        }
        updateUI() {
            GameData.data.isShowAddColum = true;
            this.MiddleUI.visible = true;
            this.MiddleUI.scaleX = 0.1;
            this.MiddleUI.scaleY = 0.1;
            Laya.Tween.to(this.MiddleUI, { scaleX: 1, scaleY: 1 }, 200, null);
            fc.framework.Device.vibrateLong();
        }
        onClose() {
            fc.framework.GameFrame.playClickSound();
            fc.framework.Channel.stopRecorder();
            fc.framework.GameFrame.closeView(this.View);
        }
    }

    class RevivePageUI extends fc.plugin.BaseView {
        constructor() {
            super();
            this.data = null;
        }
        initView(data) {
            if (data) {
                this.data = data.count;
            }
        }
        onAwake() {
            super.onAwake();
            this.cancelBtn = this.owner.getChildByName('middleUI').getChildByName('cancelBtn');
            this.videoBtn = this.owner.getChildByName('middleUI').getChildByName('videoBtn');
        }
        onEnable() {
            super.onEnable();
            this.videoBtn.on(Laya.Event.CLICK, this, this.onVideo);
            this.cancelBtn.on(Laya.Event.CLICK, this, this.onClose);
            fc.framework.GameFrame.pause();
        }
        onDisable() {
            super.onDisable();
            this.videoBtn.off(Laya.Event.CLICK, this, this.onVideo);
            this.cancelBtn.off(Laya.Event.CLICK, this, this.onClose);
            fc.framework.GameFrame.resume();
        }
        onDestroy() {
            super.onDestroy();
            this.onDisable();
        }
        onStart() {
            super.onStart();
            GameData.data.isVideoClose = false;
            console.log(fc.view.ActivityCenter.isMistakenActive());
            if (fc.view.ActivityCenter.isMistakenActive() && Math.random() > 0.5) {
                var cancelBtnY = this.cancelBtn.y;
                var videoBtnY = this.videoBtn.y;
                this.cancelBtn.y = videoBtnY;
                this.videoBtn.y = cancelBtnY;
            }
            this.updateUI();
            AudioManager.Instance.playSfx('fail.mp3');
        }
        updateUI() {
            this.MiddleUI.visible = true;
            this.MiddleUI.scaleX = 0.1;
            this.MiddleUI.scaleY = 0.1;
            Laya.Tween.to(this.MiddleUI, { scaleX: 1, scaleY: 1 }, 200, () => {
            });
            fc.framework.Device.vibrateLong();
        }
        onClose() {
            fc.framework.GameFrame.playClickSound();
            GameData.data.isVideoClose = false;
            GameData.data.isShowAddColum = GameData.data.teacolum < 5;
            fc.framework.Channel.stopRecorder();
            fc.framework.GameFrame.closeView(this.View);
        }
        onVideo() {
            fc.framework.GameFrame.playClickSound();
            if (fc.framework.Channel.isVideoEnable()) {
                fc.framework.Channel.playVideo(Laya.Handler.create(this, () => {
                    Laya.stage.event(EventConst.Use_Item, 3);
                    GameData.data.isVideoClose = true;
                    fc.framework.GameFrame.closeView(this.View);
                }), Laya.Handler.create(this, function () {
                    if (fc.platform.PlatformConfig.platformTag != 'ssjjh5') {
                        fc.framework.GameFrame.showToastMsg(fc.framework.GameFrame['langCfg'].novideotxt);
                    }
                }), Laya.Handler.create(this, function () {
                    if (fc.platform.PlatformConfig.platformTag != 'ssjjh5') {
                        fc.framework.GameFrame.showToastMsg(fc.framework.GameFrame['langCfg'].novideotxt);
                    }
                }));
            }
            else {
                if (fc.platform.PlatformConfig.platformTag != 'ssjjh5') {
                    fc.framework.GameFrame.showToastMsg(fc.framework.GameFrame['langCfg'].novideotxt);
                }
            }
        }
    }

    class ShowItemPageUI extends fc.plugin.BaseView {
        constructor() {
            super();
            this.isMaxVideoCount = false;
            this.data = null;
        }
        initView(data) {
            if (data) {
                this.data = data.data;
            }
        }
        onAwake() {
            super.onAwake();
            this.cancelBtn = this.owner.getChildByName('middleUI').getChildByName('cancelBtn');
            this.videoBtn = this.owner.getChildByName('middleUI').getChildByName('videoBtn');
            this.shareBtn = this.owner.getChildByName('middleUI').getChildByName('shareBtn');
            this.icon = this.owner.getChildByName('middleUI').getChildByName('icon');
            this.desc = this.owner.getChildByName('middleUI').getChildByName('desc');
            this.title = this.owner.getChildByName('middleUI').getChildByName('title');
            this.counttip = this.owner.getChildByName('middleUI').getChildByName('counttip');
        }
        onEnable() {
            super.onEnable();
            this.shareBtn.on(Laya.Event.CLICK, this, this.onShare);
            this.videoBtn.on(Laya.Event.CLICK, this, this.onVideo);
            this.cancelBtn.on(Laya.Event.CLICK, this, this.onClose);
            fc.framework.GameFrame.pause();
        }
        onDisable() {
            super.onDisable();
            this.shareBtn.off(Laya.Event.CLICK, this, this.onShare);
            this.videoBtn.off(Laya.Event.CLICK, this, this.onVideo);
            this.cancelBtn.off(Laya.Event.CLICK, this, this.onClose);
            fc.framework.GameFrame.resume();
        }
        onDestroy() {
            super.onDestroy();
            this.onDisable();
        }
        onStart() {
            super.onStart();
            if (fc.view.ActivityCenter.isMistakenActive() && Math.random() > 0.5) {
                var cancelBtnY = this.cancelBtn.y;
                var videoBtnY = this.videoBtn.y;
                this.cancelBtn.y = videoBtnY;
                this.videoBtn.y = cancelBtnY;
                this.shareBtn.y = cancelBtnY;
            }
            if (GameData.data.mShareCount == 0 && (fc.platform.PlatformConfig.platformTag == 'byte' || fc.platform.PlatformConfig.platformTag == 'ks')) {
                this.videoBtn.visible = false;
                this.shareBtn.visible = true;
            }
            else {
                this.videoBtn.visible = true;
                this.shareBtn.visible = false;
            }
            this.updateUI();
        }
        updateUI() {
            this.MiddleUI.visible = true;
            this.MiddleUI.scaleX = 0.1;
            this.MiddleUI.scaleY = 0.1;
            Laya.Tween.to(this.MiddleUI, { scaleX: 1, scaleY: 1 }, 200, null);
            this.icon.skin = this.data.icon;
            this.title.skin = this.data.id == 4 ? "gameui/sf.png" : "gameui/syx.png";
            this.desc.text = this.data.desc;
            this.counttip.visible = false;
        }
        onClose() {
            fc.framework.GameFrame.playClickSound();
            fc.framework.GameFrame.closeView(this.View);
        }
        onVideo() {
            fc.framework.GameFrame.playClickSound();
            if (fc.framework.Channel.isVideoEnable()) {
                fc.framework.Channel.playVideo(Laya.Handler.create(this, () => {
                    if (this.data.id == 4) {
                        GameData.data.teacolum = GameData.data.teacolum + 1;
                    }
                    if (this.data.id == 1) {
                        GameData.data.setItemCount(GameData.data.getItemCount('crushBtn') + 3, 'crushBtn');
                    }
                    if (this.data.id == 0) {
                        GameData.data.setItemCount(GameData.data.getItemCount('refreshBtn') + 1, 'refreshBtn');
                    }
                    if (this.data.id == 2) {
                        GameData.data.setItemCount(GameData.data.getItemCount('removeBtn') + 1, 'removeBtn');
                    }
                    Laya.stage.event(EventConst.Use_Item, this.data.id);
                    fc.framework.GameFrame.closeView(this.View);
                }), Laya.Handler.create(this, function () {
                    if (fc.platform.PlatformConfig.platformTag != 'ssjjh5') {
                        fc.framework.GameFrame.showToastMsg(fc.framework.GameFrame['langCfg'].novideotxt);
                    }
                }), Laya.Handler.create(this, function () {
                    if (fc.platform.PlatformConfig.platformTag != 'ssjjh5') {
                        fc.framework.GameFrame.showToastMsg(fc.framework.GameFrame['langCfg'].novideotxt);
                    }
                }));
            }
            else {
                if (fc.platform.PlatformConfig.platformTag != 'ssjjh5') {
                    fc.framework.GameFrame.showToastMsg(fc.framework.GameFrame['langCfg'].novideotxt);
                }
            }
        }
        onShare() {
            fc.framework.GameFrame.playClickSound();
            Laya.MouseManager.enabled = false;
            fc.framework.Channel.shareAppMessage({ title: fc.view.ActivityCenter.getShareTitle(), imageUrl: fc.view.ActivityCenter.getShareImage(), desc: fc.view.ActivityCenter.getShareDesc() }, Laya.Handler.create(this, function () {
                GameData.data.mShareCount = 1;
                if (this.data.id == 4) {
                    GameData.data.teacolum = GameData.data.teacolum + 1;
                }
                if (this.data.id == 1) {
                    GameData.data.setItemCount(GameData.data.getItemCount('crushBtn') + 3, 'crushBtn');
                }
                if (this.data.id == 0) {
                    GameData.data.setItemCount(GameData.data.getItemCount('refreshBtn') + 1, 'refreshBtn');
                }
                if (this.data.id == 2) {
                    GameData.data.setItemCount(GameData.data.getItemCount('removeBtn') + 1, 'removeBtn');
                }
                Laya.stage.event(EventConst.Use_Item, this.data.id);
                fc.framework.GameFrame.closeView(this.View);
                Laya.MouseManager.enabled = true;
            }), Laya.Handler.create(this, function () {
                Laya.MouseManager.enabled = true;
                fc.framework.GameFrame.showToastMsg(fc.framework.GameFrame['langCfg'].sharefailtxt);
            }));
        }
    }

    var EventId = fc.define.Event;
    var GameFrame$1 = fc.framework.GameFrame;
    class GameLogic extends Laya.Script {
        constructor() {
            super();
            this.isInitScene = false;
            this.efEesList = [];
        }
        onAwake() {
            Laya.MouseManager.enabled = false;
            BlinnPhongOutlineMaterial.__initDefine__();
            Laya.ClassUtils.regClass("fc.view.FailPage", FailPageUI);
            Laya.ClassUtils.regClass("fc.view.PassLevel", PassLevelPageUI);
            Laya.ClassUtils.regClass("fc.view.Revive", RevivePageUI);
            Laya.ClassUtils.regClass("fc.view.ShowItem", ShowItemPageUI);
            if (Laya.Browser.onWeiXin || Laya.Browser.onMiniGame || Laya.Browser.onQGMiniGame || Laya.Browser.onVVMiniGame || Laya.Browser.onQQMiniGame) {
            }
            this.mInitialize = false;
            this.mOnGameShow = false;
            Laya.stage.once(EventId.LAUNCH_COMPLETED, this, this.onGameLaunchReady);
            Laya.stage.on(EventId.GAME_HOME, this, this.onGameHome);
            Laya.stage.on(EventId.GAME_PREPARE, this, this.onGamePrepare);
            Laya.stage.on(EventId.GAME_START, this, this.onGameStart);
            Laya.stage.on(EventId.GAME_OVER, this, this.onGameOver);
            Laya.stage.on(EventId.GAME_RELIVE, this, this.onGameRelive);
            Laya.stage.on(EventId.GAME_RESET, this, this.onGameReset);
            Laya.stage.on(EventId.UI_VIEW_OPENED, this, this.onViewOpened);
            Laya.stage.on(EventId.UI_VIEW_CLOSED, this, this.onViewClosed);
            Laya.stage.on(EventId.STORE_USE_ITEM, this, this.onUseItem);
            Laya.stage.on(EventId.CHANGE_CUR_MODEL, this, this.onChangeMainRole);
            Laya.stage.on(EventId.FROM_SIDEBAR_CARD, this, this.fromSilderCard);
            Laya.stage.on(EventConst.SHOW_SUCCESS, this, this.onGameSuccess);
            Laya.stage.on(EventConst.SHOW_FAILED, this, this.onGameFailed);
            Laya.stage.on(EventConst.LOADRES_SUCCESS, this, this.load3dResSucess);
            Laya.stage.on(EventId.AD_VIDEO_CLOSED, this, this.onVideoClose);
            Laya.stage.on(EventId.AD_VIDEO_PLAY, this, this.onVideoPlay);
            Laya.stage.on(EventId.GAME_WAKEUP, this, this.onWakeUp);
            Laya.stage.on(EventId.GAME_SLEEP, this, this.onSleep);
            Laya.stage.on(EventId.GAME_BACK_HOME, this, this.onBackHome);
        }
        fromSilderCard() {
            console.log('侧边栏进入');
        }
        onDestroy() {
        }
        onVideoClose() {
            fc.framework.GameFrame.resume();
        }
        onVideoPlay() {
            fc.framework.GameFrame.pause();
        }
        onWakeUp() {
            Laya.stage.event(Character.EVENT_RESUME);
        }
        onSleep() {
            Laya.stage.event(Character.EVENT_PAUSE);
        }
        onBackHome() {
            this.efEesList = [];
            this.mOnGameShow = true;
            GameLogic.cameraCtr.initCameraByPlayer(null);
            GameFrame$1.closeView("Game");
            this.onGameHome();
            GameData.data.gameFinish = true;
        }
        onUpdate() {
            if (false == this.mInitialize ||
                this.mOnGameShow ||
                GameFrame$1.isGamePaused) {
                return;
            }
            if (GameFrame$1.gameSceneId != fc.define.SceneId.Game && GameFrame$1.gameSceneId != fc.define.SceneId.Failed) {
                return;
            }
            if (GameData.data.gameFinish)
                return;
            if (Laya.timer.delta > 600)
                return;
            let ret = GameMgr.Instance().getWaitingStickMan();
            if (ret.length > 0) {
                for (let index = 0; index < ret.length; index++) {
                    let man = ret[index];
                    man.update();
                }
            }
        }
        onGameLaunchReady() {
            console.log("GameLogic", EventId.LAUNCH_COMPLETED);
            this.mInitialize = true;
            var leveldata = Laya.loader.getRes("config/level.json");
            GameData.initData(leveldata);
            this.init();
            GameFrame$1.scene3d.active = false;
            ResourceMgr.preLoadRes(ResourceMgr.threeDResRootPath3, ResourceMgr.res3List);
            ResourceMgr.preLoadRes(ResourceMgr.threeDResRootPath2, ResourceMgr.res2List);
            ResourceMgr.preCreateRes();
        }
        load3dResSucess() {
            GameFrame$1.finishLoading();
            this.isInitScene = true;
            this.efEesList = ResourceMgr.efEesList.concat();
            Laya.MouseManager.enabled = true;
        }
        preLoadEffect() {
            this.efEesList.forEach(function (cfgUrl) {
                let ef = EffectMgr.Instance().createSpriteEffect(cfgUrl, true);
                ef.transform.position = new Laya.Vector3(0, 0, 120);
                Laya.Tween.to(GameFrame$1.scene3d, {}, 2000, null, Laya.Handler.create(this, (ef) => {
                    EffectMgr.Instance().removeSpriteEffect(ef);
                }, [ef]));
            });
        }
        onGameHome() {
            Laya.MouseManager.enabled = false;
            this.mOnGameShow = false;
            this.initGame();
            this.preLoadEffect();
            GameData.data.gameFinish = true;
            this.isInitScene = false;
        }
        onGamePrepare() {
            GameData.data.gameFinish = false;
            GameFrame$1.startGame();
        }
        onGameStart() {
            Laya.MouseManager.enabled = false;
            this.startGame();
        }
        startGame() {
            GameFrame$1.scene3d.active = true;
            this.initScene(Laya.Handler.create(this, () => {
                this.owner.timerOnce(100, this, () => {
                    Laya.MouseManager.enabled = true;
                    if (GameFrame$1.appInfo.bgm) {
                        fc.framework.Audio.playMusic(GameFrame$1.appInfo.bgm);
                    }
                }, null, false);
            }));
        }
        onGameOver() {
            this.efEesList = [];
        }
        onGameReset() {
        }
        onGameRelive() {
        }
        onGameSuccess() {
            var playerInfo = GameFrame$1.playerInfo;
            if (playerInfo.isInGuide == 1) {
                GameFrame$1.savePlayerInfo({ isInGuide: 0, isNew: 0 });
            }
            this.mOnGameShow = true;
            GameData.data.gameFinish = true;
            Laya.stage.mouseEnabled = false;
            GameLogic.cameraCtr.initCameraByPlayer(null);
            this.owner.timerOnce(500, this, () => {
                Laya.stage.mouseEnabled = true;
                GameFrame$1.showSuccessed({});
                GameFrame$1.closeAllViews();
            });
        }
        onGameFailed() {
            if (GameFrame$1.playerInfo.isNew == 1) {
                GameFrame$1.savePlayerInfo({ isNew: 0 });
            }
            this.mOnGameShow = true;
            GameData.data.gameFinish = true;
            fc.framework.Device.vibrateLong();
            GameLogic.cameraCtr.initCameraByPlayer(null);
            this.owner.timerOnce(500, this, () => {
                Laya.stage.mouseEnabled = true;
                GameFrame$1.showFailed({});
                GameFrame$1.closeAllViews();
            });
        }
        onViewClosed(viewName, viewId) {
            console.log("onViewClosed", viewName);
            if ('StorePage' == viewName || 'TrialPage' == viewName) {
                Laya.stage.event(fc.define.Event.TEXTURE_CAMERA_CLEAR);
            }
            if (viewName.indexOf('HomePage') != -1) {
                GameFrame$1.closeView("MainHome");
            }
            if (viewName.indexOf('GoldVideoPage') != -1) {
                Laya.Tween.to(GameFrame$1.scene3d, {}, 200, null, Laya.Handler.create(this, () => {
                    Laya.stage.event('resume');
                }));
            }
            if ('Revive' == viewId) {
                if (!GameData.data.isVideoClose) {
                    if (GameData.data.isShowAddColum) {
                        fc.framework.GameFrame.openView("ShowItem", { data: fc.framework.GameFrame.gameCfg.itemdata[4] }, null);
                    }
                    else {
                        if (fc.platform.PlatformConfig.platformTag == 'byte') {
                            fc.framework.GameFrame.openView("ShareRec", {}, Laya.Handler.create(this, () => {
                            }));
                        }
                        else {
                            fc.framework.GameFrame.go2Game();
                            fc.framework.GameFrame.closeAllViews();
                        }
                    }
                }
            }
            if ('ShareRec' == viewId) {
                fc.framework.GameFrame.go2Game();
                fc.framework.GameFrame.closeAllViews();
            }
            if ('PassLevel' == viewId) {
                GameData.data.gameLevel = GameData.data.gameLevel + 1;
                GameData.data.resetMiddlefield();
                GameData.data.teacolum = 3;
                fc.framework.GameFrame.openView("ShowItem", { data: fc.framework.GameFrame.gameCfg.itemdata[4] }, null);
            }
            if ('ShowItem' == viewId) {
                if (GameData.data.isShowAddColum) {
                    GameData.data.isShowAddColum = false;
                    if (fc.platform.PlatformConfig.platformTag == 'byte') {
                        fc.framework.GameFrame.openView("ShareRec", {}, Laya.Handler.create(this, () => {
                        }));
                    }
                    else {
                        fc.framework.GameFrame.go2Game();
                        fc.framework.GameFrame.closeAllViews();
                    }
                }
            }
        }
        onViewOpened(viewName, viewId) {
            console.log("onViewOpened", viewName);
            if ('WaveLoading' == viewId) {
            }
            if ('Home' == viewId) {
                fc.framework.GameFrame.go2Game();
                fc.framework.GameFrame.closeView('Home');
            }
        }
        onUseItem(type, data) {
            console.log(data.prefab);
        }
        onChangeMainRole(prefab) {
            console.log(prefab);
        }
        init() {
            Laya.MouseManager.multiTouchEnabled = false;
            GameFrame$1.scene3d.input.multiTouchEnabled = false;
            GameMgr.Instance().init(GameFrame$1.scene3d);
            BulletMgr.Instance().init(GameFrame$1.scene3d);
            EffectMgr.Instance().init(GameFrame$1.scene3d);
            GoldMgr.Instance().init(GameFrame$1.scene3d);
            GameLogic.cameraCtr = GameFrame$1.scene3d.getChildByName("CameraNodes").addComponent(CameraCtr);
            GameLogic.camera = GameLogic.cameraCtr.camera;
        }
        initGame() {
            this.destroyGame();
            GameData.data.gameFinish = false;
            Laya.MouseManager.enabled = true;
        }
        initScene(handler = null) {
            GameLogic.cameraCtr.playHomeAni();
            GameMgr.Instance().initSceneById(GameData.data.gameLevel, Laya.Handler.create(this, () => {
                Laya.MouseManager.enabled = true;
                if (handler) {
                    handler.run();
                }
            }));
        }
        initGameScene(handler = null) {
        }
        onNextLevel() {
        }
        onRefest() {
        }
        destroyGame() {
            GameMgr.Instance().onDestroy();
            EffectMgr.Instance().onDestroy();
            GoldMgr.Instance().onDestroy();
            BulletMgr.Instance().onDestroy();
        }
    }

    var GameFrame$2 = fc.framework.GameFrame;
    class GamePlayUI extends Laya.Script {
        constructor() {
            super();
            this.isMouseDown = false;
            this.touchId = -1;
            this.dir = new Laya.Vector3();
            this.lastMouseX = 0;
            this.lastMouseY = 0;
            this.curScreenPos = new Laya.Vector2(0, 0);
            this.guideStep = 0;
            this.isPause = false;
            this.screenPos = new Laya.Vector2();
            this.startObject = null;
            this.targetObject = null;
            this.selectPlateList = [];
            this.worldPos = new Laya.Vector3();
            this.pos = new Laya.Vector2();
            this.guideFinger = null;
        }
        onAwake() {
            super.onAwake();
            this.width = Laya.stage.width * Laya.stage.scaleX;
            this.height = Laya.stage.height * Laya.stage.scaleY;
            this.fullUi = this.owner.getChildByName('fullUI');
            fc.view.linkView2Script(this, this.owner, [
                "guide",
                "refreshBtn",
                "crushBtn",
                "removeBtn"
            ]);
            this.refreshBtn.on(Laya.Event.CLICK, this, this.onRefresh);
            this.crushBtn.on(Laya.Event.CLICK, this, this.onCrush);
            this.removeBtn.on(Laya.Event.CLICK, this, this.onRemove);
            Laya.stage.on(EventConst.Use_Item, this, this.useItem);
            Laya.stage.on(EventConst.Game_Angry_Tip, this, this.updateAngryTip);
            Laya.stage.on(fc.define.Event.GAME_WAKEUP, this, this.onWakeUp);
            Laya.stage.on(fc.define.Event.GAME_SLEEP, this, this.onSleep);
            Laya.stage.on(EventConst.Game_Failed_Check, this, this.onFailedCheck);
            this.guide.visible = false;
        }
        updaeVideo() {
            if (this.getItemCount(this.refreshBtn.name) == 0) {
                this.refreshBtn.getChildByName('video').visible = true;
                this.refreshBtn.getChildByName('dot').visible = false;
            }
            else {
                this.refreshBtn.getChildByName('dot').visible = true;
                this.refreshBtn.getChildByName('video').visible = false;
                this.refreshBtn.getChildByName('dot').getChildByName('count').text = this.getItemCount(this.refreshBtn.name).toString();
            }
            if (this.getItemCount(this.removeBtn.name) == 0) {
                this.removeBtn.getChildByName('video').visible = true;
                this.removeBtn.getChildByName('dot').visible = false;
            }
            else {
                this.removeBtn.getChildByName('dot').visible = true;
                this.removeBtn.getChildByName('video').visible = false;
                this.removeBtn.getChildByName('dot').getChildByName('count').text = this.getItemCount(this.removeBtn.name).toString();
            }
            if (this.getItemCount(this.crushBtn.name) == 0) {
                this.crushBtn.getChildByName('video').visible = true;
                this.crushBtn.getChildByName('dot').visible = false;
            }
            else {
                this.crushBtn.getChildByName('dot').visible = true;
                this.crushBtn.getChildByName('video').visible = false;
                this.crushBtn.getChildByName('dot').getChildByName('count').text = this.getItemCount(this.crushBtn.name).toString();
            }
        }
        onEnable() {
            super.onEnable();
            this.fullUi.on(Laya.Event.CLICK, this, this.onTouchStart);
        }
        onStart() {
            let view = this.owner;
            view.zOrder = 0;
            this.isCompleteLevel = false;
            if (fc.framework.GameFrame.pluginCfg.pg_item_default && this.getItemCount(this.refreshBtn.name) == 0 && this.getItemCount(this.removeBtn.name) == 0 && this.getItemCount(this.crushBtn.name) == 0) {
                switch (Util.random(0, 3)) {
                    case 0:
                        GameData.data.setItemCount(fc.framework.GameFrame.pluginCfg.pg_item_default, this.refreshBtn.name);
                        break;
                    case 1:
                        GameData.data.setItemCount(fc.framework.GameFrame.pluginCfg.pg_item_default, this.removeBtn.name);
                        break;
                    case 2:
                        GameData.data.setItemCount(fc.framework.GameFrame.pluginCfg.pg_item_default * 3, this.crushBtn.name);
                        break;
                    default:
                        break;
                }
            }
            this.updaeVideo();
        }
        onDisable() {
            super.onDisable();
            this.fullUi.off(Laya.Event.CLICK, this, this.onTouchStart);
            this.refreshBtn.off(Laya.Event.CLICK, this, this.onRefresh);
            this.crushBtn.off(Laya.Event.CLICK, this, this.onCrush);
            this.removeBtn.off(Laya.Event.CLICK, this, this.onRemove);
            Laya.stage.off(EventConst.Use_Item, this, this.useItem);
            Laya.stage.off(fc.define.Event.GAME_WAKEUP, this, this.onWakeUp);
            Laya.stage.off(fc.define.Event.GAME_SLEEP, this, this.onSleep);
            Laya.stage.off(EventConst.Game_Angry_Tip, this, this.updateAngryTip);
            Laya.stage.off(EventConst.Game_Failed_Check, this, this.onFailedCheck);
        }
        onDestroy() {
            super.onDestroy();
            this.onDisable();
        }
        onWakeUp() {
            this.isPause = false;
            this.owner.clearTimer(this, this.showCrushItem);
            this.owner.timerOnce(15000, this, this.showCrushItem);
            if (!GameData.data.gameFinish) {
                this.owner.clearTimer(this, this.checkGameState);
                this.owner.timerOnce(1500, this, this.checkGameState);
            }
            console.log('onWakeUp');
        }
        onSleep() {
            this.isPause = true;
            this.owner.clearTimer(this, this.showCrushItem);
            this.owner.clearTimer(this, this.checkGameState);
            console.log('onSleep');
        }
        getItemCount(name) {
            return GameData.data.getItemCount(name);
        }
        updateTip() {
        }
        onRefresh() {
            fc.framework.GameFrame.playClickSound();
            if (this.getItemCount(this.refreshBtn.name) == 0) {
                if (fc.framework.Channel.isVideoEnable()) {
                    this.owner.clearTimer(this, this.showCrushItem);
                    fc.framework.Channel.playVideo(Laya.Handler.create(this, () => {
                        GameData.data.setItemCount(this.getItemCount(this.refreshBtn.name) + 1, this.refreshBtn.name);
                        Laya.stage.event(EventConst.Use_Item, 0);
                    }), Laya.Handler.create(this, function () {
                        if (fc.platform.PlatformConfig.platformTag != 'ssjjh5') {
                            fc.framework.GameFrame.showToastMsg(fc.framework.GameFrame['langCfg'].novideotxt);
                        }
                    }), Laya.Handler.create(this, function () {
                        if (fc.platform.PlatformConfig.platformTag != 'ssjjh5') {
                            fc.framework.GameFrame.showToastMsg(fc.framework.GameFrame['langCfg'].novideotxt);
                        }
                    }));
                }
                else {
                    if (fc.platform.PlatformConfig.platformTag != 'ssjjh5') {
                        fc.framework.GameFrame.showToastMsg(fc.framework.GameFrame['langCfg'].novideotxt);
                    }
                }
            }
            else {
                this.useItem(0);
            }
        }
        onCrush() {
            fc.framework.GameFrame.playClickSound();
            if (this.getItemCount(this.crushBtn.name) == 0) {
                if (fc.framework.Channel.isVideoEnable()) {
                    this.owner.clearTimer(this, this.showCrushItem);
                    fc.framework.Channel.playVideo(Laya.Handler.create(this, () => {
                        GameData.data.setItemCount(this.getItemCount(this.crushBtn.name) + 3, this.crushBtn.name);
                        Laya.stage.event(EventConst.Use_Item, 1);
                    }), Laya.Handler.create(this, function () {
                        if (fc.platform.PlatformConfig.platformTag != 'ssjjh5') {
                            fc.framework.GameFrame.showToastMsg(fc.framework.GameFrame['langCfg'].novideotxt);
                        }
                    }), Laya.Handler.create(this, function () {
                        if (fc.platform.PlatformConfig.platformTag != 'ssjjh5') {
                            fc.framework.GameFrame.showToastMsg(fc.framework.GameFrame['langCfg'].novideotxt);
                        }
                    }));
                }
                else {
                    if (fc.platform.PlatformConfig.platformTag != 'ssjjh5') {
                        fc.framework.GameFrame.showToastMsg(fc.framework.GameFrame['langCfg'].novideotxt);
                    }
                }
            }
            else {
                this.useItem(1);
            }
        }
        onRemove() {
            fc.framework.GameFrame.playClickSound();
            if (this.getItemCount(this.removeBtn.name) == 0) {
                if (fc.framework.Channel.isVideoEnable()) {
                    this.owner.clearTimer(this, this.showCrushItem);
                    fc.framework.Channel.playVideo(Laya.Handler.create(this, () => {
                        GameData.data.setItemCount(this.getItemCount(this.removeBtn.name) + 1, this.removeBtn.name);
                        Laya.stage.event(EventConst.Use_Item, 2);
                    }), Laya.Handler.create(this, function () {
                        if (fc.platform.PlatformConfig.platformTag != 'ssjjh5') {
                            fc.framework.GameFrame.showToastMsg(fc.framework.GameFrame['langCfg'].novideotxt);
                        }
                    }), Laya.Handler.create(this, function () {
                        if (fc.platform.PlatformConfig.platformTag != 'ssjjh5') {
                            fc.framework.GameFrame.showToastMsg(fc.framework.GameFrame['langCfg'].novideotxt);
                        }
                    }));
                }
                else {
                    if (fc.platform.PlatformConfig.platformTag != 'ssjjh5') {
                        fc.framework.GameFrame.showToastMsg(fc.framework.GameFrame['langCfg'].novideotxt);
                    }
                }
            }
            else {
                this.useItem(2);
            }
        }
        showCrushItem() {
            if (GameData.data.getIsGuide(0) == 0)
                return false;
            if (fc.framework.GameFrame.pluginCfg.pg_item_showitem && fc.framework.GameFrame.pluginCfg.pg_item_showitem == 1) {
                this.owner.clearTimer(this, this.showCrushItem);
                if (GameMgr.Instance().getWaitingStickMan().length > 0) {
                    fc.framework.GameFrame.openView("ShowItem", { data: fc.framework.GameFrame.gameCfg.itemdata[Util.random(1, 3)] }, null);
                }
                else {
                    fc.framework.GameFrame.openView("ShowItem", { data: fc.framework.GameFrame.gameCfg.itemdata[1] }, null);
                }
            }
        }
        useItem(id) {
            switch (id) {
                case 0:
                    GameData.data.setItemCount(this.getItemCount(this.refreshBtn.name) - 1, this.refreshBtn.name);
                    this.gameRefresh();
                    break;
                case 1:
                    GameData.data.setItemCount(this.getItemCount(this.crushBtn.name) - 1, this.crushBtn.name);
                    this.gameCrush();
                    break;
                case 2:
                    GameData.data.setItemCount(this.getItemCount(this.removeBtn.name) - 1, this.removeBtn.name);
                    this.gameReMove();
                    break;
                case 3:
                    this.restartGame();
                    break;
                case 4:
                    break;
                case 5:
                    break;
                default:
                    break;
            }
            this.updaeVideo();
        }
        onFailedCheck() {
            if (!GameData.data.gameFinish) {
                this.owner.clearTimer(this, this.checkGameState);
                this.owner.timerOnce(1500, this, this.checkGameState);
            }
        }
        checkGameState() {
            console.log('Phát hiện trò chơi không thành công');
            if (GameData.data.gameFinish)
                return;
            let ret = GameMgr.Instance().getWaitingStickMan();
            let empty = GameMgr.Instance().getEmptyMiddleField();
            if (!empty && ret.length == GameData.data.getUnlockMiddlefield().length) {
                GameData.data.gameFinish = true;
                this.owner.clearTimer(this, this.showCrushItem);
                fc.framework.GameFrame.openView("Revive", { data: fc.framework.GameFrame.gameCfg.itemdata[3] }, null);
            }
        }
        restartGame() {
            let ret = GameMgr.Instance().getWaitingStickMan();
            if (ret.length > 0) {
                Laya.MouseManager.enabled = false;
                for (let index = 0; index < ret.length; index++) {
                    let man = ret[index];
                    man.autoFull();
                }
            }
            this.owner.timerOnce(400, this, () => {
                GameData.data.gameFinish = false;
            });
        }
        gameRefresh() {
            Laya.MouseManager.enabled = false;
            GameMgr.Instance().refeshGame();
            this.owner.clearTimer(this, this.showCrushItem);
        }
        gameCrush() {
            let ret = GameMgr.Instance().getRandomStickMan();
            if (ret) {
                Laya.MouseManager.enabled = false;
                ret.goCenter();
            }
            else {
                GameData.data.setItemCount(this.getItemCount(this.crushBtn.name) + 1, this.crushBtn.name);
            }
            this.owner.clearTimer(this, this.showCrushItem);
        }
        gameReMove() {
            let ret = GameMgr.Instance().getWaitingStickMan();
            if (ret.length > 0) {
                Laya.MouseManager.enabled = false;
                for (let index = 0; index < ret.length; index++) {
                    let man = ret[index];
                    man.autoFull();
                }
            }
            else {
                GameData.data.setItemCount(this.getItemCount(this.removeBtn.name) + 1, this.removeBtn.name);
            }
            this.owner.clearTimer(this, this.showCrushItem);
        }
        onTouchStart(e) {
            this.owner.clearTimer(this, this.showCrushItem);
            if (this.isPause)
                return;
            if (this.isMouseDown)
                return;
            if (fc.framework.GameFrame.isGamePaused || !Laya.MouseManager.enabled) {
                return;
            }
            this.lastMouseX = Laya.stage.mouseX;
            this.lastMouseY = Laya.stage.mouseY;
            this.touchId = e.touchId;
            this.curScreenPos.setValue(Laya.MouseManager.instance.mouseX, Laya.MouseManager.instance.mouseY);
            this.isMouseDown = true;
            let name = 'StickMan';
            let sprite = Util.raySpriteByName(name, GameFrame$2.scene3d, GameLogic.camera, this.curScreenPos, this.worldPos, CollisionConst.GROUP_RAY, CollisionConst.CAN_RAY);
            if (sprite) {
                console.log('Đối tượng được chọn', sprite.name);
                let baseScript = sprite.getComponent(BaseScript);
                if (baseScript) {
                    if (sprite.name.indexOf('MiddleField') != -1 && !baseScript.unLock()) {
                        let middle = baseScript;
                        middle.onUnLock();
                    }
                    if (sprite.name.indexOf('stickman') != -1) {
                        fc.framework.GameFrame.playClickSound();
                        let stickMan = baseScript;
                        let ret = stickMan.gotoMiddleField();
                        if (!ret) {
                            if (GameData.data.getIsGuide(0) == 0) {
                                let man = GameMgr.Instance().getCanMoveStickMan();
                                if (man) {
                                    GameLogic.cameraCtr.world2ScreenPos(man.mText.transform.position.clone(), this.screenPos);
                                    this.showGuide(this.screenPos);
                                }
                            }
                        }
                        else {
                            Laya.stage.event(EventConst.Open_Door);
                            this.hideGuide();
                        }
                    }
                }
            }
            this.onTouchEnd();
        }
        onTouchEnd() {
            this.isMouseDown = false;
            this.touchId = -1;
            this.owner.clearTimer(this, this.showCrushItem);
            this.owner.timerOnce(15000, this, this.showCrushItem);
        }
        showGuide(pos) {
            this.guide.visible = true;
            this.guide.x = pos.x;
            this.guide.y = pos.y - 50;
            Util.showNewGuide({ x: pos.x - 10, y: pos.y - 20, radius: 80 }, this.owner, false);
            this.guide.zOrder = 1001;
        }
        hideGuide() {
            if (this.guide.visible) {
                GameData.data.setIsGuide(1, 0);
                this.guide.visible = false;
                Util.hideGuide(this.owner);
            }
        }
        indexOf(list, _ids) {
            let ret = {};
            for (let index = 0; index < list.length; index++) {
                let data = list[index];
                if (data.ids == _ids) {
                    console.log('相同存在');
                    ret.data = data;
                    ret.index = index;
                    break;
                }
            }
            return ret;
        }
        createFinger(start, end) {
            if (this.guideFinger == null) {
                Laya.loader.load("fc-layout/prefab/guide/ef_finger.json", Laya.Handler.create(this, this.onPrefabReady, [start, end, this.owner]), null, Laya.Loader.PREFAB);
            }
            else {
                this.moveFinger(start, end);
            }
        }
        onPrefabReady(start, end, parent, prefab) {
            this.guideFinger = prefab.create();
            parent.addChild(this.guideFinger);
            this.guideFinger.name = 'newfinger';
            this.guideFinger.ef_finger.stop();
            this.guideFinger.ef_finger.play(0, true);
            this.guideFinger.zOrder = 101;
            this.moveFinger(start, end);
        }
        moveFinger(start, end) {
            this.guideFinger.visible = true;
            Laya.Tween.clearAll(this.guideFinger);
            this.guideFinger.pos(start.x, start.y);
            if (end) {
                Laya.Tween.to(this.guideFinger, { x: end.x, y: end.y }, 1000, null, Laya.Handler.create(this, () => {
                    this.moveFinger(start, end);
                }), 100);
            }
        }
        updateAngryTip(pos) {
            var tipLabel = Laya.Pool.getItemByCreateFun("angryTip", this.angryTipPrefab.create, this.angryTipPrefab);
            Laya.Tween.clearAll(tipLabel);
            tipLabel.visible = true;
            tipLabel.x = pos.x;
            tipLabel.y = pos.y - 20;
            tipLabel['ani1'].stop();
            tipLabel['ani1'].play(0, false);
            Laya.stage.addChild(tipLabel);
            Laya.Tween.to(tipLabel, {}, 500, null, Laya.Handler.create(this, () => {
                tipLabel.removeSelf();
                Laya.Pool.recover("angryTip", tipLabel);
            }));
        }
    }

    class ButtonClickAni extends Laya.Button {
        constructor() {
            super();
            this.scaleTime = 100;
            this.anchorX = this.anchorY = 0.5;
            this.on(Laya.Event.MOUSE_DOWN, this, this.scaleSmall);
            this.on(Laya.Event.MOUSE_UP, this, this.scaleBig);
            this.on(Laya.Event.MOUSE_OUT, this, this.scaleBig);
        }
        destroy(destroyChild) {
            Laya.Tween.clearAll(this);
            super.destroy(destroyChild);
        }
        scaleBig() {
            Laya.Tween.to(this, { scaleX: 1, scaleY: 1 }, this.scaleTime);
        }
        scaleSmall() {
            Laya.Tween.to(this, { scaleX: 0.9, scaleY: 0.9 }, this.scaleTime);
        }
    }

    class PrefabAniPlayCtr extends Laya.Script {
        constructor() {
            super();
        }
        onAwake() {
            super.onAwake();
        }
        onDisable() {
            super.onDisable();
        }
        onStart() {
            super.onStart();
            for (const key in this.owner) {
                if (Object.prototype.hasOwnProperty.call(this.owner, key)) {
                    const element = this.owner[key];
                    if (element && typeof element == 'object' && element instanceof Laya.FrameAnimation) {
                        let ani = element;
                        ani.stop();
                        ani.play(0, true);
                    }
                }
            }
        }
    }

    class LevelProgress extends Laya.Script {
        constructor() {
            super();
            this.level = 1;
        }
        onAwake() {
            super.onAwake();
            this.mProgressPanel = this.owner.getChildByName('ProgressPanel');
            Laya.stage.on(EventConst.Level_Update, this, this.onUpdateProgress);
            Laya.stage.on(fc.define.Event.GAME_START, this, this.onUpdateProgress);
        }
        onEnable() {
            super.onEnable();
        }
        onDestroy() {
            super.onDestroy();
            Laya.stage.off(EventConst.Level_Update, this, this.onUpdateProgress);
            Laya.stage.off(fc.define.Event.GAME_START, this, this.onUpdateProgress);
        }
        onStart() {
            this.level = (GameData.data.gameLevel - 1) % 5;
            let _lv = Math.floor((GameData.data.gameLevel - 1) / 5);
            this.mIcon = [];
            let box = this.mProgressPanel.getChildByName('gou');
            for (let index = 0; index < box.numChildren; index++) {
                let lv = box.getChildAt(index);
                lv.visible = false;
                this.mIcon.push(lv);
            }
            this.mLv = [];
            let level = this.owner.getChildByName('level');
            for (let index = 0; index < level.numChildren; index++) {
                let lv = level.getChildAt(index);
                lv.visible = false;
                let val = _lv * 5 + index + 1;
                lv.value = val.toString();
                let scale = Math.max(0.4, 1 - (val.toString().length - 1) * 0.2);
                lv.scaleX = scale;
                lv.scaleY = scale;
                this.mLv.push(lv);
            }
            this.onUpdateProgress();
        }
        onUpdateProgress() {
            for (let index = 0; index < this.mIcon.length; index++) {
                let lv = this.mIcon[index];
                lv.visible = this.level > index;
            }
            for (let index = 0; index < this.mLv.length; index++) {
                let lv = this.mLv[index];
                lv.visible = this.level <= index;
            }
            let progress = GameMgr.Instance().gooutManTotal / GameMgr.Instance().curManTotal;
            let width = progress * 64 + 109 * this.level;
            this.mProgressPanel.width = width;
            if (progress >= 1) {
                fc.framework.GameFrame.openView("PassLevel", { data: fc.framework.GameFrame.gameCfg.itemdata[5] }, null);
            }
        }
    }

    class StartNormalGame extends Laya.Script {
        constructor() {
            super();
        }
        onAwake() {
            super.onAwake();
            this.owner.on(Laya.Event.CLICK, this, this.startGame);
        }
        onDestroy() {
            this.owner.on(Laya.Event.CLICK, this, this.startGame);
        }
        onStart() {
        }
        startGame() {
            if (fc.view.ActivityCenter.isEnableStartVideo()) {
                fc.framework.Channel.playVideo(Laya.Handler.create(this, function () {
                    this.playGame();
                }), Laya.Handler.create(this, function () {
                    this.playGame();
                }), Laya.Handler.create(this, function () {
                    this.playGame();
                }));
            }
            else {
                this.playGame();
            }
        }
        playGame() {
            GameData.data.gameMode = GameMode.Normal;
            fc.framework.GameFrame.playClickSound();
            fc.framework.GameFrame.go2Game();
            fc.framework.GameFrame.closeView('Home');
        }
    }

    class GameConfig {
        constructor() { }
        static init() {
            var reg = Laya.ClassUtils.regClass;
            reg("effect/ImageClickAni.ts", ImageClickAni);
            reg("compUI/GamePlayUI.ts", GamePlayUI);
            reg("effect/ButtonClickAni.ts", ButtonClickAni);
            reg("effect/PrefabAniPlayCtr.ts", PrefabAniPlayCtr);
            reg("compUI/LevelProgress.ts", LevelProgress);
            reg("compUI/StartNormalGame.ts", StartNormalGame);
        }
    }
    GameConfig.width = 750;
    GameConfig.height = 1334;
    GameConfig.scaleMode = "fixedauto";
    GameConfig.screenMode = "none";
    GameConfig.alignV = "top";
    GameConfig.alignH = "left";
    GameConfig.startScene = "fc-layout/view/AdHomePage.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();

    var PlatformConfig = fc.platform.PlatformConfig;
    class Main {
        constructor() {
            if (window["Laya3D"])
                Laya3D.init(GameConfig.width, GameConfig.height);
            else
                Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            Laya.stage.bgColor = "#ffffff";
            Laya.stage.scaleMode = GameConfig.scaleMode;
            Laya.stage.screenMode = GameConfig.screenMode;
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
                Laya.enableDebugPanel();
            if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
                Laya["PhysicsDebugDraw"].enable();
            if (GameConfig.stat)
                Laya.Stat.show();
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            PlatformConfig.init();
            Laya.stage.addComponent(GameLogic);
        }
    }
    new Main();

}());
