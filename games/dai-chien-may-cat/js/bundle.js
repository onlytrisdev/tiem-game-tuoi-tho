var canpp = 0; !
function() {
    "use strict";
    var s, d, t, i = Laya.Vector3;
    class c {
        static getTransformUp(t, e) {
            return e = e || new Laya.Vector3,
            t.getUp(e),
            i.normalize(e, e),
            e
        }
        static getTransformForward(t, e) {
            return e = e || new Laya.Vector3,
            t.getForward(e),
            i.normalize(e, e),
            e
        }
        static getTransformRight(t, e) {
            return e = e || new Laya.Vector3,
            t.getRight(e),
            i.normalize(e, e),
            e
        }
        static vector3Scale(t, e, a) {
            return a = a || new i,
            i.scale(t, e, a),
            a
        }
        static vector3Subtract(t, e, a) {
            return a = a || new i,
            i.subtract(t, e, a),
            a
        }
        static vector3Add(t, e, a) {
            return a = a || new i,
            i.add(t, e, a),
            a
        }
        static vector3Normalize(t, e) {
            return e = e || new i,
            i.normalize(t, e),
            e
        }
        static magnitude(t) {
            return Math.sqrt(this.sqrMagnitude(t))
        }
        static magHorizontal(t, e) {
            return Math.sqrt((t.x - e.x) * (t.x - e.x) + (t.z - e.z) * (t.z - e.z))
        }
        static mag(t, e, a, i) {
            return Math.sqrt((t - a) * (t - a) + (e - i) * (e - i))
        }
        static sqrMagnitude(t) {
            return t.x * t.x + t.y * t.y + t.z * t.z
        }
        static normalize(t) {
            var e = t.x * t.x + t.y * t.y;
            if (1 == e) return new Laya.Point(t.x, t.y);
            if (0 == e) return new Laya.Point(t.x, t.y);
            let a = new Laya.Point;
            e = 1 / Math.sqrt(e);
            return a.x = t.x * e,
            a.y = t.y * e,
            a
        }
        static normalizeSelf(t) {
            var e = t.x * t.x + t.z * t.z;
            if (1 == e) return t;
            if (0 == e) return t;
            e = 1 / Math.sqrt(e);
            return t.x = t.x * e,
            t.z = t.z * e,
            t
        }
        static mul(t, e) {
            let a = new Laya.Point;
            return a.x = t.x * e,
            a.y = t.y * e,
            a
        }
        static magSqr(t) {
            return t.x * t.x + t.y * t.y
        }
        static add(t, e) {
            let a = new Laya.Point;
            return a.x = t.x + e.x,
            a.y = t.y + e.y,
            new Laya.Point(a.x, a.y)
        }
        static dot(t, e) {
            return t.x * e.x + t.y * e.y
        }
        static distanceVector2(t, e) {
            var a = t.x - e.x,
            t = t.y - e.y;
            return a * a + t * t
        }
        static distanceSquared(t, e) {
            var a = t.x - e.x,
            t = t.y - e.y;
            return a * a + t * t
        }
        static rotateY(t, e) {
            var a = Math.sin(e),
            e = Math.cos(e),
            i = t.x;
            return t.x = e * i - a * t.z,
            t.z = a * i + e * t.z,
            t
        }
        static angleY(t, e) {
            var a = t.x - e.x,
            t = t.z - e.z;
            return 180 * Math.atan2(a, t) / Math.PI
        }
        static getTargetAngle(t, e) {
            var a = new Laya.Vector3;
            return Laya.Vector3.subtract(e, t, a),
            180 * Math.atan2(a.x, a.z) / Math.PI
        }
        static angleY2(t) {
            return 180 * Math.atan2(t.x, t.z) / Math.PI
        }
        static angleX(t, e) {
            var a = t.y - e.y,
            t = t.z - e.z;
            return 180 * Math.atan2( - a, t) / Math.PI
        }
        static angleZ(t, e) {
            var a = t.x - e.x,
            t = t.y - e.y;
            return 180 * Math.atan2( - a, t) / Math.PI
        }
        static angleZ2(t) {
            return 180 * Math.atan2( - t.x, t.y) / Math.PI
        }
        static angleDirection(t, e) {
            Laya.Vector3.normalize(t, t);
            t = Laya.Vector3.dot(t, e);
            return 90 - 180 * Math.acos(t) / Math.PI
        }
        static getVectorRotation(t, e) {
            var a = new Laya.Quaternion,
            i = c.vectorDirection(t, e),
            i = (Laya.Quaternion.rotationLookAt(i, c.UP, a), c.ZERO.clone()),
            a = (a.getYawPitchRoll(i), this.angleY(t, e));
            return new Laya.Vector3( - (180 * i.y / Math.PI), a, 0)
        }
        static cross(t, e) {
            return t.x * e.y - t.y * e.x
        }
        static angle(t, e) {
            var a = this.magSqr(t),
            i = this.magSqr(e);
            if (0 === a || 0 === i) return 0;
            t = this.dot(t, e) / Math.sqrt(a * i),
            t = this.clampf(t, -1, 1);
            return Math.acos(t)
        }
        static clampf(t, e, a) {
            var i;
            return a < e && (i = e, e = a, a = i),
            t < e ? e: t < a ? t: a
        }
        static clamp(t, e = Number.NEGATIVE_INFINITY, a = Number.POSITIVE_INFINITY) {
            var i;
            return a < e && (i = e, e = a, a = i),
            Math.max(e, Math.min(a, t))
        }
        static clamp01(t) {
            return Math.max(0, Math.min(1, t))
        }
        static random(t, e) {
            return Math.random() * (e - t) + t << 0
        }
        static probabilityCanHappen(t) {
            return this.random(0, 100) <= t
        }
        static scaleTo(t, e, a, i, s, o) {
            Laya.Tween.clearAll(t),
            Laya.Tween.to(t, {
                scaleX: e,
                scaleY: e
            },
            .5 * i, null, Laya.Handler.create(this, () =>{
                Laya.Tween.to(t, {
                    scaleX: a,
                    scaleY: a
                },
                .5 * i, null, Laya.Handler.create(s, o))
            }))
        }
        static scaleToDefault(t, e, a) {
            this.scaleTo(t, .8, 1, 200, e, a),
            this.delayMouseEnabled(t)
        }
        static scaleToDefault2(t, e, a) {
            this.scaleTo(t, .8, 1, 200, e, a)
        }
        static delayMouseEnabled(t) {
            t.mouseEnabled = !1,
            Laya.stage.timerOnce(500, this, () =>{
                t && (t.mouseEnabled = !0)
            })
        }
        static ComputeCollision(t, e, a, i, s) {
            var o = Math.min(i, .5 * t),
            o = Math.max(o, .5 * -t),
            t = Math.min(s, .5 * e),
            t = Math.max(t, .5 * -e);
            return (o - i) * (o - i) + (t - s) * (t - s) <= a * a
        }
        static IsCircleIntersectTriangle(t, e, a, i, s, o, r, n, l) {
            return !! this.PointinTriangle1(new Laya.Vector3(t, 0, e), new Laya.Vector3(i, 0, s), new Laya.Vector3(o, 0, r), new Laya.Vector3(n, 0, l)) || ( !! this.IsCircleIntersectLineSeg(t, e, a, i, s, o, r) || ( !! this.IsCircleIntersectLineSeg(t, e, a, o, r, n, l) || !!this.IsCircleIntersectLineSeg(t, e, a, n, l, i, s)))
        }
        static SameSide(t, e, a, i) {
            var s = new Laya.Vector3,
            o = new Laya.Vector3,
            r = new Laya.Vector3,
            e = (Laya.Vector3.subtract(e, t, s), Laya.Vector3.subtract(a, t, o), Laya.Vector3.subtract(i, t, r), new Laya.Vector3),
            a = new Laya.Vector3,
            i = (Laya.Vector3.cross(s, o, e), Laya.Vector3.cross(s, r, a), Laya.Vector3.dot(e, a));
            return 0 <= i
        }
        static PointinTriangle1(t, e, a, i) {
            return this.SameSide(t, e, a, i) && this.SameSide(e, a, t, i) && this.SameSide(a, t, e, i)
        }
        static IsCircleIntersectLineSeg(t, e, a, i, s, o, r) {
            var n = t - i,
            l = e - s,
            h = o - i,
            c = r - s;
            if (Math.abs(h) < 1e-5 && Math.abs(c) < 1e-5) return ! 1;
            var d = Math.sqrt(h * h + c * c),
            n = n * (h /= d) + l * (c /= d),
            l = 0,
            m = 0,
            m = n <= 0 ? (l = i, s) : d <= n ? (l = o, r) : (l = i + h * n, s + c * n);
            return (t - l) * (t - l) + (e - m) * (e - m) <= a * a
        }
        static computeDistanceBetweenPointAndLine(t, e, a, i, s, o) {
            var r = o - i,
            n = a - s;
            return Math.abs(r * t + n * e + (s * i - a * o)) / Math.sqrt(r * r + n * n)
        }
        static detectCircleAndRectCollision(t, e) {
            var a = Laya.Vector3.distance(e.vector2, e.vector1) / 2,
            i = Laya.Vector3.distance(e.vector1, e.vector4) / 2,
            s = c.vector3Subtract(e.vector2, e.vector1),
            o = c.vector3Subtract(e.vector3, e.vector1),
            r = c.vector3Subtract(e.vector4, e.vector1),
            n = e.x + o.x / 2,
            o = e.y + o.z / 2,
            l = e.x + s.x / 2,
            s = e.y + s.z / 2,
            h = e.x + r.x / 2,
            e = e.y + r.z / 2,
            r = this.computeDistanceBetweenPointAndLine(t.mtransform.position.x, t.mtransform.position.z, n, o, h, e);
            if (r > i + t.radius) return ! 1;
            h = this.computeDistanceBetweenPointAndLine(t.mtransform.position.x, t.mtransform.position.z, n, o, l, s);
            return ! (h > a + t.radius) && (r <= i || h <= a)
        }
        static segmentsIntr(t, e, a, i) {
            var s = (t.x - a.x) * (e.y - a.y) - (t.y - a.y) * (e.x - a.x),
            o = (t.x - i.x) * (e.y - i.y) - (t.y - i.y) * (e.x - i.x);
            if (0 <= s * o) return ! 1;
            a = (a.x - t.x) * (i.y - t.y) - (a.y - t.y) * (i.x - t.x);
            if (0 <= a * (a + s - o)) return ! 1;
            i = a / (o - s),
            a = i * (e.x - t.x),
            o = i * (e.y - t.y);
            return {
                x: t.x + a,
                y: t.y + o
            }
        }
        static judgeIntersect(t, e, a, i, s, o, r, n) {
            return Math.min(t, a) <= Math.max(s, r) && Math.min(o, n) <= Math.max(e, i) && Math.min(s, r) <= Math.max(t, a) && Math.min(e, i) <= Math.max(o, n) && (((s - t) * (i - e) - (a - t) * (o - e)) * ((r - t) * (i - e) - (a - t) * (n - e)) <= 1e-8 && ((t - s) * (n - o) - (r - s) * (e - o)) * ((a - s) * (n - o) - (r - s) * (i - o)) <= 1e-8)
        }
        static vectorDirection(t, e) {
            var a = new Laya.Vector3(0, 0, 0),
            e = (Laya.Vector3.subtract(e, t, a), new Laya.Vector3(0, 0, 0));
            return Laya.Vector3.normalize(a, e),
            e
        }
        static lerp(t, e, a) {
            return t + (e - t) * Math.min(1, a)
        }
        static IsNumber(t) {
            return ! (!/^\d+(\.\d+)?$/.test(t) && !/^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/.test(t))
        }
        static padding(t, e) {
            for (var a = (t + "").length; a < e; a = t.length) t = "0" + t;
            return t
        }
        static Reflect(t, e) {
            var a = new Laya.Vector3;
            return Laya.Vector3.normalize(t, t),
            Laya.Vector3.normalize(e, e),
            Laya.Vector3.scale(e, 2 * Laya.Vector3.dot(t, e), a),
            Laya.Vector3.subtract(t, a, a),
            a
        }
        static GetVerticalDir(t) {
            var e;
            return 0 == t.z ? new Laya.Vector3(0, 0, -1) : 0 == t.x ? new Laya.Vector3(1, 0, 0) : (e = new Laya.Vector3, Laya.Vector3.normalize(new Laya.Vector3( - t.z / t.x, 0, 1), e), e)
        }
        static WorldToScreen2(t, e) {
            var a = this.InverseTransformPoint(t.transform, e).z,
            i = new Laya.Vector3;
            return t.viewport.project(e, t.projectionViewMatrix, i),
            new Laya.Vector3(i.x / Laya.stage.clientScaleX, i.y / Laya.stage.clientScaleY, a)
        }
        static ScreenToWorld(t, e) {
            var a = .5 * t.fieldOfView * Math.PI / 180,
            a = e.z * Math.tan(a),
            i = a * t.aspectRatio,
            s = this.GetLowerLeft(t.transform, e.z, i, a),
            i = this.GetScreenScale(i, a),
            a = (new Laya.Vector3, this.InverseTransformPoint(t.transform, s)),
            s = new Laya.Vector3( - e.x / i.x, e.y / i.y, 0);
            return Laya.Vector3.add(a, s, s),
            this.TransformPoint(t.transform, s)
        }
        static GetScreenScale(t, e) {
            var a = new Laya.Vector3;
            return a.x = Laya.stage.width / t / 2,
            a.y = Laya.stage.height / e / 2,
            a
        }
        static GetLowerLeft(t, e, a, i) {
            var s = new Laya.Vector3,
            o = new Laya.Vector3,
            o = (t.getRight(o), Laya.Vector3.normalize(o, o), new Laya.Vector3(o.x * a, o.y * a, o.z * a)),
            a = (Laya.Vector3.add(t.position, o, s), new Laya.Vector3),
            o = (t.getUp(a), Laya.Vector3.normalize(a, a), new Laya.Vector3(a.x * i, a.y * i, a.z * i)),
            a = (Laya.Vector3.subtract(s, o, s), new Laya.Vector3),
            i = (t.getForward(a), Laya.Vector3.normalize(a, a), new Laya.Vector3(a.x * e, a.y * e, a.z * e));
            return Laya.Vector3.subtract(s, i, s),
            s
        }
        static InverseTransformPoint(t, e) {
            var a = new Laya.Vector3,
            i = (t.getRight(a), new Laya.Vector3),
            s = (t.getUp(i), new Laya.Vector3),
            s = (t.getForward(s), new Laya.Vector3( - s.x, -s.y, -s.z)),
            a = this.ProjectDistance(e, t.position, a),
            i = this.ProjectDistance(e, t.position, i),
            e = this.ProjectDistance(e, t.position, s);
            return new Laya.Vector3(a, i, e)
        }
        static TransformPoint(t, e) {
            var a = new Laya.Vector3;
            return Laya.Vector3.transformQuat(e, t.rotation, a),
            Laya.Vector3.add(a, t.position, a),
            a
        }
        static ProjectDistance(t, e, a) {
            var i = new Laya.Vector3,
            i = (Laya.Vector3.subtract(t, e, i), this.Angle2(i, a) * Math.PI / 180),
            a = Laya.Vector3.distance(t, e);
            return a *= Math.cos(i)
        }
        static localToWold(t, e) {
            var a = this.ZERO.clone();
            return Laya.Vector3.add(t, e, a),
            a
        }
        static woldToLocal(t, e) {
            var a = this.ZERO.clone();
            return Laya.Vector3.subtract(t, e, a),
            a
        }
        static Angle2(t, e) {
            t = (t.x * e.x + t.y * e.y + t.z * e.z) / (Math.sqrt(t.x * t.x + t.y * t.y + t.z * t.z) * Math.sqrt(e.x * e.x + e.y * e.y + e.z * e.z));
            return 1 < (t = t < -1 ? -1 : t) && (t = 1),
            180 * Math.acos(t) / Math.PI
        }
        static IsEqual(t, e) {
            return Math.abs(t - e) < 1e-5
        }
        static changMat(t, e) {
            var a = Laya.Loader.getRes(t);
            a ? e && (e.material = a) : Laya.Material.load(t, Laya.Handler.create(null,
            function(t) {
                t && e && (e.material = t)
            }))
        }
        static changShareMat(t, e) {
            var a = Laya.Loader.getRes(t);
            a ? e && (e.sharedMaterial = a) : Laya.Material.load(t, Laya.Handler.create(null,
            function(t) {
                t && e && (e.sharedMaterial = t)
            }))
        }
        static mutation(t, e) {
            if (t.length != e.length) return ! 1;
            for (var a = t.toLowerCase(), i = e.toLowerCase(), s = 0; s < i.length; s++) if ( - 1 === a.indexOf(i[s])) return ! 1;
            return ! 0
        }
        static isCollision(t, e, a, i, s, o) {
            return a <= t && t <= a + s && i <= e && e <= i + o
        }
        static isCollisionWithRect(t, e, a, i, s, o, r, n) {
            return ! (s <= t && s + r <= t) && (!(t <= s && t + a <= s) && (!(o <= e && o + n <= e) && !(e <= o && e + i <= o)))
        }
        static activeAllChild(a, i) {
            if (a) for (let e = 0; e < a.numChildren; e++) {
                let t = a.getChildAt(e);
                t.active = i
            }
        }
        static visibleAllChild(a, i) {
            if (a) for (let e = 0; e < a.numChildren; e++) {
                let t = a.getChildAt(e);
                t.visible = i
            }
        }
        static clearSprite(e) {
            if (e) for (; 0 < e.numChildren;) {
                let t = e.getChildAt(0);
                var a = e.getComponents(Laya.Script3D);
                if (a) for (let e = 0; e < a.length; e++) {
                    let t = a[e];
                    t && t.destroy()
                }
                var i = e.getComponents(Laya.Script);
                if (i) for (let e = 0; e < i.length; e++) {
                    let t = i[e];
                    t && t.destroy()
                }
                t.active = !1,
                t.removeSelf(),
                t.destroy(!0)
            }
        }
        static clearNode(e) {
            if (e) for (; 0 < e.numChildren;) {
                let t = e.getChildAt(0);
                t.destroy(!0)
            }
        }
        static removeComponent(t) {
            if (t) {
                var a = t.getComponents(Laya.Script3D);
                if (a) for (let e = 0; e < a.length; e++) {
                    let t = a[e];
                    t && t.destroy()
                }
                var i = t.getComponents(Laya.Script);
                if (i) for (let e = 0; e < i.length; e++) {
                    let t = i[e];
                    t && t.destroy()
                }
            }
        }
        static unique(t) {
            for (var e = [], a = [], i = t.length, s = 0; s < i; s++) {
                for (var o = s + 1; o < i; o++) t[s] === t[o] && (o = ++s);
                e.push(t[s]),
                a.push(s)
            }
            return e
        }
        static screen2worldPosByName(a, t, e, i, s, o = Laya.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER, r = Laya.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER) {
            var n = new Laya.Ray(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 0, 0)),
            l = [],
            i = new Laya.Vector2(i.x / (Laya.stage.width * Laya.stage.scaleX), i.y / (Laya.stage.height * Laya.stage.scaleY));
            e.normalizedViewportPointToRay(i, n),
            t.physicsSimulation.rayCastAll(n, l, 1e4, o, r);
            for (let e = 0, t = l.length; e < t; e++) {
                let t = l[e].collider.owner.name;
                if ( - 1 != t.indexOf(a)) return s.setValue(l[e].point.x, l[e].point.y, l[e].point.z),
                !0
            }
            return ! 1
        }
        static screen2worldPos(t, e, a, i, s = Laya.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER, o = Laya.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER) {
            var r = new Laya.Ray(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 0, 0)),
            n = new Laya.HitResult;
            a.setValue(a.x / (Laya.stage.width * Laya.stage.scaleX), a.y / (Laya.stage.height * Laya.stage.scaleY)),
            e.normalizedViewportPointToRay(a, r),
            t.physicsSimulation.rayCast(r, n, 1e4, s, o),
            n.succeeded && (console.log("碰撞的：", n.collider.owner.name), i.setValue(n.point.x, n.point.y, n.point.z), console.log("worldPos", i))
        }
        static raySpriteByName(a, t, e, i, s = Laya.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER, o = Laya.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER) {
            var r = new Laya.Ray(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 0, 0)),
            n = [],
            i = new Laya.Vector2(i.x / (Laya.stage.width * Laya.stage.scaleX), i.y / (Laya.stage.height * Laya.stage.scaleY));
            e.normalizedViewportPointToRay(i, r),
            t.physicsSimulation.rayCastAll(r, n, 1e4, s, o);
            for (let e = 0, t = n.length; e < t; e++) {
                let t = n[e].collider.owner.name;
                if ( - 1 != t.indexOf(a)) return n[e].collider.owner
            }
            return null
        }
        static rayCheckSprite(t, e, a, i, s = Laya.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER, o = Laya.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER) {
            a = c.vectorDirection(e, a),
            e = new Laya.Ray(e, a),
            a = new Laya.HitResult;
            return t.physicsSimulation.rayCast(e, a, 1e4, s, o),
            a && a.succeeded ? (i.setValue(a.point.x, a.point.y, a.point.z), a.collider.owner) : null
        }
        static shapeCheckSprite(t, e, a, i, s = Laya.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER, o = Laya.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER) {
            var r = new Laya.HitResult,
            n = new Laya.BoxColliderShape(1, 1, 1);
            return t.physicsSimulation.shapeCast(n, e, a, r, null, null, s, o),
            r && r.succeeded ? (i.setValue(r.point.x, r.point.y, r.point.z), r.collider.owner) : null
        }
        static getBaseURL(t, e, a) {
            let i = (e = e || "3dres") + "/Conventional/" + t;
            return null != a && 0 < a.trim().length && (i += "." + a),
            i
        }
        static formatter(t, e) {
            var a = [{
                value: 1,
                symbol: ""
            },
            {
                value: 1e3,
                symbol: "K"
            },
            {
                value: 1e6,
                symbol: "M"
            },
            {
                value: 1e9,
                symbol: "G"
            },
            {
                value: 1e12,
                symbol: "T"
            },
            {
                value: 1e15,
                symbol: "P"
            },
            {
                value: 1e18,
                symbol: "E"
            }];
            let i;
            for (i = a.length - 1; 0 < i && !(t >= a[i].value); i--);
            return (t / a[i].value).toFixed(e).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + a[i].symbol
        }
        static secondToTime(t) {
            var e = Math.floor(t / 86400),
            a = (t %= 86400, Math.floor(t / 3600)),
            i = (t %= 3600, Math.floor(t / 60));
            return t %= 60,
            0 < e ? e + "d" + a + "h" + i + "m" + t + "s": 0 < a ? a + "h" + i + "m" + t + "s": i + "m" + t + "s"
        }
        static numberToPerBit(t) {
            var e = Math.floor(t / 1e3),
            a = Math.floor(t / 100) % 10,
            i = Math.floor(t / 10) % 10,
            t = t % 10;
            let s = {};
            return s.thousand = e,
            s.hundreds = a,
            s.tens = i,
            s.ones = t,
            s
        }
        static drawText3d(t, e, a, i) {
            e.width = 256,
            e.height = 128,
            e.align = "center",
            e.valign = "middle",
            e.fontSize = 30,
            e.font = "Arial",
            e.color = "#000000",
            e.text = i,
            a.albedoTexture = t,
            Laya.stage.frameOnce(2, this,
            function() {
                e.drawToTexture(256, 128, 0, 0, t)
            },
            null, !1)
        }
    }
    c.UP = new Laya.Vector3(0, 1, 0),
    c.DOWN = new Laya.Vector3(0, -1, 0),
    c.LEFT = new Laya.Vector3(1, 0, 0),
    c.RIGHT = new Laya.Vector3( - 1, 0, 0),
    c.FORWARD = new Laya.Vector3(0, 0, 1),
    c.ONE = new Laya.Vector3(1, 1, 1),
    c.ZERO = new Laya.Vector3(0, 0, 0),
    c.RADIUS_TO_ANGLE = 180 / Math.PI,
    c.ANGLE_TO_RADIUS = Math.PI / 180,
    c.signAngle = function(t, e) {
        var a = this.angle(t, e);
        return this.cross(t, e) < 0 ? -a: a
    };
    class r {
        constructor() {
            this.levelCfg = [],
            this.curStageId = 1,
            this.gold = 0,
            this.stageGold = 0,
            this.selectRoleSkinId = 0,
            this.gameMode = 0,
            this.playRankList = [],
            this.gameFinish = !1,
            this.gameSuccess = !1,
            this.isLoading = !1,
            this.stageCount = 1
        }
        set gameGold(t) {
            this.gold = this.gameGold,
            this.gold += t,
            fc.framework.GameFrame.savePlayerInfo({
                gold: this.gold
            })
        }
        get gameGold() {
            var t = fc.framework.GameFrame.playerInfo.gold;
            return c.IsNumber(t) ? Number(t) : 0
        }
        get curStage() {
            return this.curStageId
        }
        set curStage(t) {
            let e = Math.max(1, t);
            t = Laya.LocalStorage.getItem("cutenemiesgamestage");
            c.IsNumber(t) && (e = Math.max(e, Number(t))),
            Laya.LocalStorage.setItem("cutenemiesgamestage", e.toString()),
            this.curStageId = e,
            fc.framework.GameFrame.savePlayerInfo({
                levelId: e
            })
        }
        static initLevelData(t) {
            t && (this.data.levelCfg = t.stageCfg, this.data.stageCount = this.data.levelCfg.length)
        }
        static updatePlayerInfo(t) {
            t && (this.data.gold = this.data.gameGold, this.data.selectRoleSkinId = fc.framework.GameFrame.playerInfo.goodsInUse[0], this.data.curStage = fc.framework.GameFrame.playerInfo.levelId, console.log("==========更新用户信息===========", fc.framework.GameFrame.playerInfo.goodsInBag[0]))
        }
        getGameLock(t) {
            return "1" == Laya.LocalStorage.getItem("gamemode" + t)
        }
        setGameLock(t, e) {
            let a = Math.max(0, t);
            Laya.LocalStorage.setItem("gamemode" + e, a.toString())
        }
        getGameScore(t) {
            t = Laya.LocalStorage.getItem("gamemodescore" + t);
            let e = 0;
            return e = c.IsNumber(t) ? Math.max(0, Number(t)) : e
        }
        setGameScore(t, e) {
            let a = Math.max(0, t);
            Laya.LocalStorage.setItem("gamemodescore" + e, a.toString())
        }
        getStageData(t) {
            return t = Math.min(t, this.levelCfg.length),
            this.levelCfg[t - 1]
        }
    }
    r.data = new r;
    class o {}
    o.LOADRES_SUCCESS = "LOADRES_SUCCESS",
    o.UI_DROP_ITEM_ANIM_COMPLETED = "UI_DROP_ITEM_ANIM_COMPLETED",
    o.SHOW_SUCCESS = "SHOW_SUCCESS",
    o.SHOW_FAILED = "SHOW_FAILED",
    o.CHANGE_CUR_MODEL = "CHANGE_CUR_MODEL",
    o.SHOW_GUIDE = "SHOW_GUIDE",
    o.HIDE_GUIDE = "HIDE_GUIDE",
    o.MOUSE_DOWN = "MOUSE_DOWN",
    o.HIDE_UP_GUIDE = "HIDE_UP_GUIDE",
    o.SHOW_UP_GUIDE = "SHOW_UP_GUIDE",
    o.Hide_Loading = "Hide_Loading",
    o.Show_Loading = "Show_Loading",
    o.Loading_Success = "Loading_Success",
    o.Game_Update_Gold = "Game_Update_Gold",
    o.Game_Count_Tip = "Game_Count_Tip",
    o.Update_Wave = "Update_Wave",
    o.Player_Run = "Player_Run",
    o.Brick_Reset = "Brick_Reset",
    o.Strong_Leg = "Strong_Leg",
    o.Game_FastTap_Tip = "Game_FastTap_Tip",
    o.Game_FastTap = "Game_FastTap",
    o.Game_Loading = "Game_Loading";
    class G extends Laya.Script {
        constructor() {
            super(),
            this.loadingBg = null
        }
        onAwake() {
            super.onAwake();
            let t = this.owner;
            t.width = Laya.stage.width * Laya.stage.scaleX,
            t.height = Laya.stage.height * Laya.stage.scaleY
        }
        onEnable() {
            super.onEnable(),
            Laya.stage.on(o.Hide_Loading, this, this.hideLoading)
        }
        onDestroy() {
            super.onDestroy(),
            Laya.stage.off(o.Hide_Loading, this, this.hideLoading)
        }
        onStart() {
            super.onStart();
            let t = this.owner;
            t.zOrder = 100,
            r.data.isLoading = !0,
            this.showLoading()
        }
        hideLoading() {
            Laya.stage.timerOnce(500, this, () =>{
                Laya.stage.event(o.Loading_Success),
                r.data.isLoading = !1,
                fc.framework.GameFrame.closeView("WaveLoading")
            },
            null, !1)
        }
        showLoading() {}
    }
    class m {}
    m.Sprite3d_Player = "Player",
    m.Sprite3d_Ai = "Ai",
    m.Sprite3d_Brick = "Block_Simple",
    m.MaterialPath = "3dres/Conventional/Assets/Materials/",
    m.water_mat = ["seaLave.lmat", "seawater.lmat"],
    m.skin_mat = ["BlockBasic0.lmat", "BlockBasic1.lmat", "BlockBasic2.lmat", "BlockBasic3.lmat", "BlockBasic4.lmat", "BlockBasic5.lmat", "BlockBasic6.lmat", "BlockBasic7.lmat", "BlockBasic8.lmat"],
    m.rank_img = ["gameui/img_skin_rank1.png", "gameui/img_skin_01.png", "gameui/img_skin_02.png", "gameui/img_skin_03.png", "gameui/img_skin_04.png", "gameui/img_skin_05.png", "gameui/img_skin_06.png", "gameui/img_skin_07.png", "gameui/img_skin_08.png"],
    m.Scale_Lv = [1, 1.3, 1.6, 1.9],
    m.WeaponScale_Lv = [3, 5, 7, 9],
    m.Gold_Lv = [100, 50, 40, 30, 20],
    m.Skin_Color = [new Laya.Vector4(248 / 255, 248 / 255, 248 / 255, 1), new Laya.Vector4(217 / 255, 217 / 255, 42 / 255, 1), new Laya.Vector4(242 / 255, 124 / 255, 1 / 255, 1), new Laya.Vector4(241 / 255, 43 / 255, 104 / 255, 1), new Laya.Vector4(248 / 255, 133 / 255, 172 / 255, 1), new Laya.Vector4(22 / 255, 229 / 255, 61 / 255, 1), new Laya.Vector4(61 / 255, 117 / 255, 228 / 255, 1), new Laya.Vector4(35 / 255, 214 / 255, 221 / 255, 1), new Laya.Vector4(188 / 255, 109 / 255, 212 / 255, 1)],
    m.sfx_put = ["sfx_put_01.mp3", "sfx_put_02.mp3", "sfx_put_03.mp3", "sfx_put_04.mp3", "sfx_put_05.mp3", "sfx_put_06.mp3", "sfx_put_07.mp3", "sfx_put_08.mp3", "sfx_put_09.mp3", "sfx_put_10.mp3"],
    m.sfx_got = ["simple1.mp3", "simple2.mp3", "simple3.mp3", "simple4.mp3", "simple5.mp3", "simple6.mp3", "simple7.mp3", "simple8.mp3", "simple9.mp3"],
    (t = s = s || {})[t.idle = 0] = "idle",
    t[t.fly = 1] = "fly",
    (t = d = d || {})[t.Zero = 0] = "Zero",
    t[t.One = 1] = "One",
    t[t.Two = 2] = "Two",
    t[t.Three = 3] = "Three",
    t[t.Four = 4] = "Four",
    t[t.Five = 5] = "Five",
    t[t.Six = 6] = "Six",
    t[t.Seven = 7] = "Seven",
    t[t.Eight = 8] = "Eight";
    class e extends Laya.Script {
        onAwake() {}
        onStart() {}
        onEnable() {
            super.onEnable()
        }
        onDisable() {
            super.onDestroy()
        }
        onAnimEvt() {}
        onAnimStateEnter(t, e) {}
        onAnimStateUpdate(t, e) {}
        onAnimStateExit(t, e) {}
        onDestroy() {
            this.animator = null,
            this.character = null,
            this.curClipName = null
        }
        stop() {}
        play(t) {
            this.animator && t && this.curClipName != t && this.character && (this.animator.play(t, 0, 0), this.curClipName = t, this.animator.speed = 1, console.log("newName", t))
        }
    }
    var O = fc.framework.GameFrame;
    class a extends Laya.Script3D {
        constructor() {
            super(...arguments),
            this.isPause = !0,
            this.dir = new Laya.Vector3
        }
        setScene3d(t) {
            this.scene3d = t
        }
        onAwake() {
            super.onAwake(),
            this.sprite3d = this.owner,
            this.mtransform = this.sprite3d.transform
        }
        onEnable() {
            super.onEnable(),
            this.initEvent()
        }
        onDisable() {
            super.onDisable(),
            this.removeEvent()
        }
        onStart() {
            super.onStart(),
            this.setScene3d(O.scene3d)
        }
        initEvent() {}
        removeEvent() {}
        setColliderEnable(t) {
            this.rigidbody3d && (this.rigidbody3d.enabled = t),
            this.collider3d && (this.collider3d.enabled = t)
        }
        activeSprite(t) {}
        on3dTriggerEnter(t, e) {}
        on3dTriggerExit(t, e) {}
        on3dTriggerStay(t, e) {}
        fcCollisionEnter(t, e) {}
        fcCollisionStay(t, e) {}
        fcCollisionExit(t, e) {}
    }
    class n extends Laya.Script3D {
        constructor() {
            super(),
            this.listener = null
        }
        static Init(t, e) { (t.getComponent(n) || t.addComponent(n)).listener = e
        }
        onCollisionEnter(t) {
            null != this.listener && this.listener.fcCollisionEnter && this.listener.fcCollisionEnter(this, t)
        }
        onCollisionExit(t) {
            null != this.listener && this.listener.fcCollisionExit && this.listener.fcCollisionExit(this, t)
        }
        onCollisionStay(t) {
            null != this.listener && this.listener.fcCollisionStay && this.listener.fcCollisionStay(this, t)
        }
        onDestroy() {
            this.listener = null
        }
    }
    class l {}
    l.GROUP_PLAYER = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CHARACTERFILTER,
    l.GROUP_RAY = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER1,
    l.GROUP_BRICK = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER2,
    l.GROUP_BRIDGEBRICK = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER3,
    l.GROUP_WEAPON = Laya.Physics3DUtils.COLLISIONFILTERGROUP_CUSTOMFILTER4,
    l.CAN_PLAYER = l.GROUP_WEAPON,
    l.CAN_WEAPON = l.GROUP_BRICK | l.GROUP_PLAYER | l.GROUP_WEAPON,
    l.CAN_RAY = Laya.Physics3DUtils.COLLISIONFILTERGROUP_ALLFILTER ^ l.GROUP_PLAYER,
    l.CAN_BRICK = l.GROUP_WEAPON,
    l.CAN_BRIDGEBRICK = l.GROUP_PLAYER;
    var h = fc.plugin.Trigger3dListener;
    class y extends a {
        constructor() {
            super(...arguments),
            this.isAi = !1,
            this.healthBar = null,
            this.isTouching = !1,
            this.mColorId = 0,
            this.mHp = 5,
            this.mTotalHp = 5,
            this.rank = 100,
            this.killCount = 0,
            this.lv = 1,
            this.isMoveing = !1,
            this.slashCountPlane = null,
            this.tipPosSp = null,
            this.name = "玩家",
            this.isDie = !1,
            this.movevelocity = new Laya.Vector3
        }
        getTouch() {
            return this.isTouching
        }
        setTouch(t) {
            this.isTouching = t
        }
        onAwake() {
            this.sprite3d = this.owner,
            this.mtransform = this.sprite3d.transform
        }
        onStart() {
            super.onStart(),
            this.rigidbody3d = this.sprite3d.getComponent(Laya.Rigidbody3D),
            this.collider3d = this.sprite3d.getComponent(Laya.PhysicsCollider),
            this.rigidbody3d ? (h.add(this.rigidbody3d, this), n.Init(this.sprite3d, this)) : this.collider3d && h.add(this.collider3d, this),
            this.animatorController = this.owner.getComponent(e)
        }
        reset() {}
        onPrepare() {}
        onRun() {}
        onIdle() {}
        initEvent() {
            Laya.stage.on(y.EVENT_PAUSE, this, this.onPause),
            Laya.stage.on(y.EVENT_RESUME, this, this.onResume)
        }
        removeEvent() {
            Laya.stage.off(y.EVENT_PAUSE, this, this.onPause),
            Laya.stage.off(y.EVENT_RESUME, this, this.onResume)
        }
        onResume() {
            this.isPause = !1
        }
        onPause() {
            this.isPause = !0
        }
        onDie() {
            this.isDie = !0,
            this.onPause()
        }
        onWin() {
            this.onPause()
        }
        onAtk() {}
        onDamage(t, e = 0, a) {}
        on3dTriggerEnter(t, e) {
            super.on3dTriggerEnter(t, e)
        }
        on3dTriggerExit(t, e) {
            super.on3dTriggerExit(t, e)
        }
        fcCollisionEnter(t, e) {
            super.fcCollisionEnter(t, e)
        }
        playIdleAni() {}
        playRunAni() {}
        playWinAni() {}
        playDieAni() {}
        setPath(t) {
            this.mtransform.position = t.clone()
        }
        setRotation(t) {
            let e = new Laya.Vector3(this.mtransform.rotationEuler.x, t, this.mtransform.rotationEuler.z);
            this.mtransform.rotationEuler = e.clone(),
            this.mtransform.getForward(this.dir)
        }
        setRotationTo(t) {
            let e = new Laya.Vector3;
            Laya.Vector3.add(this.mtransform.rotationEuler, t, e),
            this.mtransform.rotationEuler = e.clone(),
            this.mtransform.getForward(this.dir)
        }
        isLife() {
            return ! this.isPause && 0 < this.mHp
        }
        move(t) {}
        getObjectOfRang(t) {
            return []
        }
        rotationRole(t) {}
        colliderFall() {}
        rayCheckWall(t, e) {
            if (!t || null == t) return ! 1;
            var a = new Laya.Vector3(0, 0, 0),
            t = (Laya.Vector3.normalize(t, a), new Laya.Vector3(0, 0, 0)),
            i = new Laya.Vector3(0, 0, 0),
            s = (Laya.Vector3.scale(a, -e, i), Laya.Vector3.add(this.mtransform.position.clone(), i, t), new Laya.HitResult, this.mtransform.position.cloneTo(a), a.y += .1, t.y += .1, []),
            e = new Laya.BoxColliderShape(.5, .5, .5);
            this.scene3d.physicsSimulation.shapeCastAll(e, a, t, s, null, null, l.GROUP_RAY, l.CAN_RAY);
            for (let t = 0, e = s.length; t < e; t++) {
                console.log(s[t].collider.owner.name);
                var o = s[t].collider.owner;
                if (o.active) {
                    if (!o.parent || "hitPoint" != o.parent.name || !o.parent.parent) return ! 0;
                    o = o.parent.parent.getComponent(y);
                    if (!o || o != this) return ! 0
                }
            }
            return ! 1
        }
        getNearObjectOfRang() {}
        getRandomObjectOfRang() {}
        addCharacterName(t) { - 1 == fc.platform.PlatformConfig.platformTag.indexOf("iptv") && (this.slashCountPlane = new Laya.MeshSprite3D(Laya.PrimitiveMesh.createPlane(2, 2)), this.slashCountPlane.transform.rotate(new Laya.Vector3(90, 180, 0), !0, !1), this.sprite3d.addChild(this.slashCountPlane), this.slashCountPlane.transform.position = t, console.log(this.slashCountPlane.transform.rotationEuler), this.mat = new Laya.UnlitMaterial, this.slashCountPlane.meshRenderer.sharedMaterial = this.mat, this.cav = Laya.Browser.createElement("canvas"), this.cxt = this.cav.getContext("2d"), this.cav.width = 128, this.cav.height = 128, this.cxt.fillStyle = "rgb(0,0,0)", this.cxt.font = "bold 20px 宋体", this.cxt.textAlign = "center", this.cxt.textBaseline = "center", t = this.name.substr(0, Math.min(6, this.name.length)), this.cxt.fillText(t, 64, 120, 128), this.texture2D = new Laya.Texture2D(128, 128), this.texture2D.loadImageSource(this.cav), this.mat.renderMode = Laya.UnlitMaterial.RENDERMODE_TRANSPARENT, this.mat.albedoTexture = this.texture2D, this.slashCountPlane.meshRenderer.sharedMaterial.cull = Laya.RenderState.CULL_NONE)
        }
        removeCharacterName() { - 1 == fc.platform.PlatformConfig.platformTag.indexOf("iptv") && this.slashCountPlane && (this.cxt = null, this.cav = null, this.texture2D.destroy(), this.mat.destroy(), this.slashCountPlane.removeSelf(), this.slashCountPlane.destroy(), this.slashCountPlane = null)
        }
        resetNameRotation() {
            this.slashCountPlane && (this.slashCountPlane.transform.rotationEuler = new Laya.Vector3(90, 180, 0))
        }
    }
    y.EVENT_PAUSE = "pause",
    y.EVENT_RESUME = "resume",
    y.EVENT_REVIVE = "relive",
    y.EVENT_DIE = "die",
    y.EVENT_ATKED = "atked",
    y.EVENT_CHECKED = "checked",
    y.EVENT_CHANGESTATE = "changestate",
    y.EVENT_FIRE = "fire";
    class g {
        static preLoadRes(e, t) {
            t.forEach(function(t) {
                g.urls.push(g.get3dPrefabUrl(e, t))
            })
        }
        static preCreateRes() {
            0 < this.urls.length ? Laya.loader.create(this.urls, Laya.Handler.create(this, () =>{
                Laya.stage.event(o.LOADRES_SUCCESS)
            })) : Laya.stage.event(o.LOADRES_SUCCESS)
        }
        static get3dPrefabUrl(t, e) {
            return t + e + ".lh"
        }
        static loadSprite3d(t, e) {
            return Laya.loader.getRes(this.get3dPrefabUrl(t, e))
        }
        static getSprite3d(e) {
            var a = e.url;
            return Laya.Pool.getItemByCreateFun(a,
            function() {
                var t = Laya.Sprite3D.instantiate(e, null, !1, new Laya.Vector3(0, 0, 0));
                return t._fc_sign = a,
                t
            })
        }
        static recoverSprite3d(t) {
            t.removeSelf(),
            null != t._fc_sign && Laya.Pool.recover(t._fc_sign, t)
        }
        static load3dResAsyn(t, e, a) {
            Laya.loader.create(t, e, a)
        }
        static loadSprite3dAsyn(e, a, t, i) {
            if (a instanceof Array) {
                var s = [];
                for (let t = 0; t < a.length; t++) s.push(this.get3dPrefabUrl(e, a[t]));
                this.load3dResAsyn(s, t, i)
            } else {
                var o = this.get3dPrefabUrl(e, a);
                this.load3dResAsyn(o, t, i)
            }
        }
    }
    g.threeDResRootPath2 = "3dres2/Conventional/",
    g.threeDResRootPath3 = "3dres3/Conventional/",
    g.resList = [],
    g.efEesList = [],
    g.urls = [];
    var V = fc.framework.Resource,
    p = fc.plugin.ObjectPool;
    class f {
        constructor() {
            this.effectList = [],
            this.spriteEffectList = [],
            this.spriteOtherEfList = []
        }
        static Instance() {
            return null == this.instance && (this.instance = new f),
            this.instance
        }
        init(t) {
            this.parent = t
        }
        createSpriteEffect(t, e = !0) {
            var a = V.loadSprite3d(t);
            let i = p.getSprite3d(a);
            return i.name = t,
            e && this.parent && this.parent.addChild(i),
            i.active = !0,
            -1 == this.spriteEffectList.indexOf(i) && (this.spriteEffectList[this.spriteEffectList.length] = i),
            i
        }
        removeSpriteEffect(t, e = !0) {
            var a = this.spriteEffectList.indexOf(t); - 1 != a && this.spriteEffectList.splice(a, 1),
            e ? (t.active = !1, t && t.parent && p.recoverSprite3d(t)) : (t.removeSelf(), t.destroy(!0))
        }
        createSpriteEf2(t, e, a = !0) {
            t = g.loadSprite3d(t, e);
            if (null == t) return null;
            let i = g.getSprite3d(t);
            return null == i ? null: (i.name = e, a && this.parent && this.parent.addChild(i), i.active = !0, -1 == this.spriteOtherEfList.indexOf(i) && (this.spriteOtherEfList[this.spriteOtherEfList.length] = i), i)
        }
        removeSpriteE2(t, e = !0) {
            var a = this.spriteOtherEfList.indexOf(t); - 1 != a && this.spriteOtherEfList.splice(a, 1),
            e ? (t.active = !1, t && t.parent && p.recoverSprite3d(t)) : (t.removeSelf(), t.destroy(!0))
        }
        addEffect(t) {
            t && -1 == this.effectList.indexOf(t) && (this.effectList[this.effectList.length] = t)
        }
        removeEffect(t) {
            var e = this.effectList.indexOf(t); - 1 != e && this.effectList.splice(e, 1);
            let a = t.sprite3d;
            a.removeSelf(),
            a.destroy(!0),
            t.destroy()
        }
        onDestroy() {
            if (0 < this.effectList.length) {
                for (let t = this.effectList.length - 1; 0 <= t; t--) {
                    const i = this.effectList.pop();
                    let t = i.sprite3d;
                    i.destroy(),
                    t.active = !1,
                    t.removeSelf(),
                    t.destroy(!0)
                }
                this.effectList = []
            }
            if (0 < this.spriteEffectList.length) {
                for (let t = this.spriteEffectList.length - 1; 0 <= t; t--) {
                    var e = this.spriteEffectList.pop();
                    e && e.parent && p.recoverSprite3d(e)
                }
                this.spriteEffectList = []
            }
            if (0 < this.spriteOtherEfList.length) {
                for (let t = this.spriteOtherEfList.length - 1; 0 <= t; t--) {
                    var a = this.spriteOtherEfList.pop();
                    a && a.parent && p.recoverSprite3d(a)
                }
                this.spriteOtherEfList = []
            }
        }
    }
    f.instance = null;
    class u extends a {
        constructor() {
            super(...arguments),
            this.character = null,
            this.mColorId = 0,
            this.mStatus = s.idle,
            this.originPos = new Laya.Vector3,
            this.topOriginPos = new Laya.Vector3,
            this.topOriginScale = new Laya.Vector3,
            this.topOriginRotation = new Laya.Vector3,
            this.originParent = null,
            this.bottom3d = null,
            this.top3d = null
        }
        onAwake() {
            super.onAwake()
        }
        onEnable() {
            super.onEnable()
        }
        onDisable() {
            super.onDisable()
        }
        onStart() {
            super.onStart(),
            this.collider3d = this.sprite3d.getComponent(Laya.PhysicsCollider),
            this.collider3d.enabled = !0,
            this.collider3d.isTrigger = !0,
            this.collider3d.collisionGroup = l.GROUP_BRICK,
            this.collider3d.canCollideWith = l.CAN_BRICK,
            this.bottom3d = this.sprite3d.getChildByName("Bottom").getChildByName("Model"),
            this.top3d = this.sprite3d.getChildByName("Top").getChildByName("Model"),
            this.topOriginPos = this.top3d.transform.position.clone(),
            this.topOriginRotation = this.top3d.transform.rotationEuler.clone(),
            this.topOriginScale = this.top3d.transform.getWorldLossyScale().clone(),
            this.setColorId(this.mColorId)
        }
        setColorId(t) {
            this.mColorId = t;
            t = m.MaterialPath + m.skin_mat[this.mColorId];
            c.changMat(t, this.bottom3d.meshRenderer),
            c.changMat(t, this.top3d.meshRenderer)
        }
        setBottomColorId(t) {
            this.mColorId = t;
            t = m.MaterialPath + m.skin_mat[this.mColorId];
            c.changMat(t, this.bottom3d.meshRenderer)
        }
        setStatus(e, a) {
            if (this.sprite3d && this.mtransform && a) {
                if (this.character = a, e == s.fly && this.mStatus == s.idle) {
                    this.mStatus = e,
                    this.setColorId(this.character.mColorId);
                    let t = new Laya.Vector3;
                    var a = c.vectorDirection(this.character.mtransform.position, this.mtransform.position),
                    a = (Laya.Vector3.scale(a, 3 + .1 * c.random(0, 30), a), Laya.Vector3.add(this.top3d.transform.localPosition.clone(), a, t), t.y = this.top3d.transform.localPositionY, Laya.Tween.clearAll(this.top3d.transform), c.random(0, 180)),
                    i = c.random(0, 180);
                    Laya.Tween.to(this.top3d.transform, {
                        localPositionX: t.x,
                        localPositionZ: t.z,
                        localPositionY: t.y + .75,
                        localRotationEulerX: a,
                        localRotationEulerZ: i,
                        localScaleX: .1,
                        localScaleY: .1,
                        localScaleZ: .1
                    },
                    500, null, Laya.Handler.create(this, () =>{
                        this.top3d.active = !1,
                        Laya.Tween.to(this.mtransform, {},
                        c.random(500, 600), null, Laya.Handler.create(this, () =>{
                            this.reset()
                        }))
                    }))
                }
                e == s.fly && this.mStatus == s.fly && (this.mStatus = e, this.setBottomColorId(this.character.mColorId))
            }
        }
        reset() {
            if (this.sprite3d.active = !0, this.top3d.active = !0, this.setColliderEnable(!0), this.originParent && this.originPos && this.sprite3d && this.sprite3d.transform && this.sprite3d.transform.position) {
                this.top3d.transform.position = this.topOriginPos.clone(),
                this.top3d.transform.rotationEuler = this.topOriginRotation.clone(),
                this.top3d.transform.setWorldLossyScale(this.topOriginScale.clone()),
                this.setColorId(this.mColorId);
                let t = this.top3d.parent;
                Laya.Tween.clearAll(t.transform),
                t.transform.localScaleY = .1,
                Laya.Tween.to(t.transform, {
                    localScaleY: 1
                },
                50, null, Laya.Handler.create(this, () =>{
                    this.mStatus = s.idle
                }))
            }
        }
    }
    class L {
        constructor() {}
        static get Instance() {
            return null == L.instance && (L.instance = new L),
            L.instance
        }
        stopMusic() {
            fc.framework.Device.stopMusic()
        }
        playSound(t, e = !1) { - 1 == fc.platform.PlatformConfig.platformTag.indexOf("iptv") && "native" != fc.platform.PlatformConfig.platformTag || (t = t.replace(".mp3", ".ogg")),
            fc.framework.Audio.playSound(t, e)
        }
        stopSound(t) { - 1 == fc.platform.PlatformConfig.platformTag.indexOf("iptv") && "native" != fc.platform.PlatformConfig.platformTag || (t = t.replace(".mp3", ".ogg")),
            fc.framework.Audio.stopSound(t)
        }
        stopSfx(t) { - 1 == fc.platform.PlatformConfig.platformTag.indexOf("iptv") && "native" != fc.platform.PlatformConfig.platformTag || (t = t.replace(".mp3", ".ogg")),
            fc.framework.Audio.stopSound(L.AudioUrl + t)
        }
        playSfx(t, e = !1) { - 1 == fc.platform.PlatformConfig.platformTag.indexOf("iptv") && "native" != fc.platform.PlatformConfig.platformTag || (t = t.replace(".mp3", ".ogg")),
            fc.framework.Audio.playSound(L.AudioUrl + t, e)
        }
    }
    L.AudioUrl = "sound/";
    class U extends Laya.Script3D {
        constructor() {
            super(),
            this.camera = null,
            this.cameraApe = null,
            this.cameraTransform = null,
            this.defaultCamPosition = new Laya.Vector3,
            this.defaultCamRotation = new Laya.Vector3,
            this.curCamPosition = new Laya.Vector3,
            this.curCamRotation = new Laya.Vector3,
            this.offsetRotation = new Laya.Vector3,
            this.offsetPosition = new Laya.Vector3,
            this.animator = null,
            this.nodeAnimator = null,
            this.directionLight = null,
            this.isHomeing = !1
        }
        initCameraByPlayer(t) { (this.target = t) && (this.cameraApe.transform.position = this.defaultCamPosition.clone(), this.defaultCamPosition.cloneTo(this.curCamPosition), Laya.Vector3.subtract(this.curCamPosition, t.mtransform.position, this.offsetPosition), this.cameraApe.transform.rotationEuler = this.defaultCamRotation.clone(), this.defaultCamRotation.cloneTo(this.curCamRotation), Laya.Vector3.subtract(this.curCamRotation, t.mtransform.rotationEuler, this.offsetRotation))
        }
        resetCamera() {
            this.cameraTransform.position = this.defaultCamPosition.clone(),
            this.cameraTransform.rotationEuler = this.defaultCamRotation.clone()
        }
        setPosition(t) {
            this.cameraTransform.position = t.clone()
        }
        updateCameraByPlayer(t) {}
        updateRotation(t) {
            Laya.Tween.to(this.cameraApe.transform, {
                localRotationEulerY: -t
            },
            500, null, null)
        }
        world2ScreenPos(t, e) {
            var a = new Laya.Vector4;
            this.camera.viewport.project(t, this.camera.projectionViewMatrix, a),
            e.x = a.x / Laya.stage.clientScaleX,
            e.y = a.y / Laya.stage.clientScaleY
        }
        camera2PlayerDir() {
            return this.target ? c.vectorDirection(this.camera.transform.position, this.target.mtransform.position) : c.FORWARD
        }
        onAwake() {
            this.cameraApe = this.owner,
            this.camera = this.cameraApe.getChildByName("Main Camera"),
            this.animator = this.camera.getComponent(Laya.Animator),
            this.animator && (this.animator.speed = 0),
            this.nodeAnimator = this.cameraApe.getComponent(Laya.Animator),
            this.nodeAnimator && (this.nodeAnimator.speed = 0),
            this.cameraTransform = this.owner.transform,
            this.cameraApe.transform.position.cloneTo(this.defaultCamPosition),
            this.defaultCamPosition.cloneTo(this.curCamPosition),
            this.cameraApe.transform.rotationEuler.cloneTo(this.defaultCamRotation),
            this.defaultCamRotation.cloneTo(this.curCamRotation),
            this.directionLight = this.cameraApe.getChildByName("Directional Light"),
            this.directionLight.shadowMode = Laya.ShadowMode.None,
            this.directionLight.shadowDistance = 20,
            this.directionLight.shadowResolution = 1024,
            this.directionLight.shadowCascadesMode = Laya.ShadowCascadesMode.NoCascades,
            this.directionLight.shadowNormalBias = 4,
            Laya.stage.on("CameraTarget", this, this.initCameraByPlayer),
            -1 != fc.platform.PlatformConfig.platformTag.indexOf("iptv") ? this.camera.fieldOfView = 50 : this.camera.fieldOfView = 60
        }
        setShadowMode(t) {}
        onEnable() {
            this.animator
        }
        onStart() {}
        onDisable() {}
        onDestroy() {
            this.camera = null,
            this.cameraApe = null
        }
        onAnimStateEnter(t, e) {}
        onAnimStateUpdate(t, e) {}
        onAnimStateExit(t, e) {
            switch (t) {
            case "cameragame":
            case "cameraover":
                this.animator.speed = 0
            }
        }
        playHomeAni() {
            this.animator && this.play("home"),
            this.resetCamera(),
            this.isHomeing = !1
        }
        playGameAni() {
            this.isHomeing = !1,
            this.animator && this.play("lv1")
        }
        playGameByNameAni(t) {
            this.isHomeing = !1,
            this.animator && this.play(t)
        }
        playOverAni() {
            this.isHomeing = !1
        }
        play(t) {
            this.animator && t && (this.animator.play(t, 0, 0), this.curClipName = t, this.animator.speed = 1)
        }
        onLateUpdate() { ! this.target || this.isHomeing || (this.cameraTransform.position = this.target.mtransform.position.clone())
        }
    }
    var v = fc.define.Event,
    C = fc.plugin.TextureCamera,
    N = fc.framework.Resource;
    class H extends Laya.Script3D {
        constructor() {
            super(),
            this.mRenderCamera = null,
            this.mRenderModelSlot = null,
            this.mAnimator = null,
            this.mModel = null,
            this.mRenderTexture = null,
            this.mPrefab = null,
            this.mAnimState = null,
            this.mRenderLayer = 5
        }
        onAwake() {
            this.mRenderCamera = this.owner.getChildByName("renderCamera"),
            this.mRenderModelSlot = this.owner.getChildByName("renderModelSlot"),
            this.mRenderCamera.active = !1,
            this.mRenderModelSlot.active = !1;
            let t = 1; - 1 != fc.platform.PlatformConfig.platformTag.indexOf("iptv") && (t = 2),
            this.mRenderTexture = new Laya.RenderTexture(512 * t, 512 * t, Laya.RenderTexture.FORMAT_R8G8B8A8),
            this.mRenderCamera.renderTarget = this.mRenderTexture,
            this.mRenderCamera.renderingOrder = -1,
            this.mRenderCamera.cullingMask = 0,
            this.mRenderCamera.cullingMask = 1 << this.mRenderLayer,
            this.mRenderCamera.clearFlag = Laya.CameraClearFlags.SolidColor,
            this.mRenderCamera.clearColor = new Laya.Vector4(0, 0, 0, 0),
            C.RenderTexture = this.mRenderTexture,
            C.RenderTexture.lock = !0,
            Laya.stage.on(v.TEXTURE_CAMERA_INIT, this, this.onInitTextureCamera),
            Laya.stage.on(v.TEXTURE_CAMERA_CLEAR, this, this.onClearTextureCamera)
        }
        onDestroy() {
            Laya.stage.off(v.TEXTURE_CAMERA_INIT, this, this.onInitTextureCamera),
            Laya.stage.off(v.TEXTURE_CAMERA_CLEAR, this, this.onClearTextureCamera)
        }
        onStart() {}
        onInitTextureCamera(t, e, a) {
            this.mRenderCamera.active = !0,
            this.mRenderModelSlot.active = !0,
            this.renderModel(t, e, a)
        }
        onClearTextureCamera() {
            this.clearModel(),
            this.mRenderCamera.active = !1,
            this.mRenderModelSlot.active = !1
        }
        renderModel(t, e, a) {
            this.playAnimation(a),
            e != this.mPrefab && (this.mPrefab = e, a = N.loadSprite3d(m.Sprite3d_Player), this.onModelReady(e, a))
        }
        clearModel() {
            this.mAnimState = null,
            this.mAnimator = null,
            this.mPrefab = null,
            this.mModel && (Laya.Tween.clearAll(this.mModel.transform), this.mModel.removeSelf(), this.mModel.destroy()),
            this.mModel = null,
            r.data.selectRoleSkinId = fc.framework.GameFrame.playerInfo.goodsInUse[0],
            r.data.gold = r.data.gameGold
        }
        playAnimation(t) {
            this.mAnimState = t,
            this.mAnimator && this.mAnimState && this.mAnimator.play(this.mAnimState)
        }
        onModelReady(o, r) {
            if (this.mPrefab == o) {
                var n = this.mAnimState;
                this.clearModel(),
                this.mModel = g.getSprite3d(r),
                this.mRenderModelSlot.addChild(this.mModel),
                this.mModel.transform.localPosition.setValue(0, 0, 0),
                this.mModel.transform.rotationEuler = c.ZERO.clone(),
                this.mModel.active = !0,
                this.updateLayer(this.mModel),
                this.mAnimState = n,
                this.mAnimState && (this.mAnimator = this.findAnimator(this.mModel)),
                this.playAnimation(this.mAnimState);
                let t = this.mModel.getChildByName("MeshBot"),
                e = (t.transform.rotationEuler = c.ZERO.clone(), this.mModel.getChildByName("PlayerLevelUpEffect")),
                a = (e.active = !1, this.mModel.getChildByName("WeaponAttachPoint")),
                i = this.mModel.getChildByName("MeshBot").getChildByName("hat"),
                s = this.mModel.getChildByName("MeshBot").getChildByName("PlayerCrown");
                if (s.active = !1, c.activeAllChild(i, !1), c.activeAllChild(a, !1), -1 != o.indexOf("character")) {
                    i.getChildByName(o).active = !0;
                    let t = a.getChildAt(fc.framework.GameFrame.playerInfo.goodsInUse[1]),
                    e = (t.active = !0, c.activeAllChild(t, !1), t.getChildAt(0).active = !0, t.getChildAt(0).getChildByName("Trail"));
                    e.clear()
                } else {
                    i.getChildAt(fc.framework.GameFrame.playerInfo.goodsInUse[0]).active = !0;
                    let t = a.getChildByName(o),
                    e = (t.active = !0, c.activeAllChild(t, !1), t.getChildAt(0).active = !0, t.getChildAt(0).getChildByName("Trail"));
                    e.clear()
                }
                Laya.Tween.clearAll(this.mModel.transform),
                this.updrageAni(this.mModel)
            }
        }
        updrageAni(t) {
            t.transform && (t.transform.localRotationEulerY = 0, Laya.Tween.to(t.transform, {
                localRotationEulerY: 360
            },
            1e3, null, Laya.Handler.create(this, () =>{
                this.updrageAni(t)
            })))
        }
        updateLayer(e) {
            e.layer = this.mRenderLayer;
            for (let t = 0; t < e.numChildren; t++) {
                var a = e.getChildAt(t);
                this.updateLayer(a)
            }
        }
        findAnimator(e) {
            if (a = e.getComponent(Laya.Animator)) return a;
            for (let t = 0; t < e.numChildren; t++) {
                var a, i = e.getChildAt(t);
                if (null != (a = this.findAnimator(i))) return a
            }
            return null
        }
    }
    class S {
        constructor() {
            this.bulletList = []
        }
        static Instance() {
            return null == this.instance && (this.instance = new S),
            this.instance
        }
        init(t) {
            this.parent = t
        }
        createBullet(t) {
            var e = g.loadSprite3d(g.threeDResRootPath3, t);
            let a = g.getSprite3d(e);
            return a.name = t,
            a.active = !0,
            this.parent.addChild(a),
            a
        }
        addBullet(t) {
            t && -1 == this.bulletList.indexOf(t) && (this.bulletList[this.bulletList.length] = t)
        }
        getBulletList() {
            return this.bulletList
        }
        removeBullet(t, e = !0) {
            var a = this.bulletList.indexOf(t); - 1 != a && this.bulletList.splice(a, 1);
            let i = t.bullet3d;
            e ? (i.active = !1, g.recoverSprite3d(i)) : (i.removeSelf(), i.destroy(!0)),
            t.destroy()
        }
        onDestroy() {
            if (0 < this.bulletList.length) {
                for (let t = this.bulletList.length - 1; 0 <= t; t--) {
                    const e = this.bulletList.pop();
                    let t = e.bullet3d;
                    t.active = !1,
                    t.removeSelf(),
                    t.destroy(!0),
                    e.destroy()
                }
                this.bulletList = []
            }
        }
    }
    S.instance = null;
    var W = fc.framework.Resource,
    w = fc.plugin.ObjectPool;
    class E {
        constructor() {
            this.goldList = []
        }
        static Instance() {
            return null == this.instance && (this.instance = new E),
            this.instance
        }
        init(t) {
            this.parent = t
        }
        createGold(t) {
            var e = W.loadSprite3d(t);
            let a = w.getSprite3d(e);
            return a.name = t,
            this.parent.addChild(a),
            a.active = !0,
            -1 == this.goldList.indexOf(a) && (this.goldList[this.goldList.length] = a),
            a
        }
        removeGold(t) {
            var e = this.goldList.indexOf(t); - 1 != e && this.goldList.splice(e, 1),
            t.active = !1,
            w.recoverSprite3d(t)
        }
        onDestroy() {
            if (0 < this.goldList.length) {
                for (let t = this.goldList.length - 1; 0 <= t; t--) {
                    var e = this.goldList.pop();
                    w.recoverSprite3d(e)
                }
                this.goldList = []
            }
        }
        getGoldList() {
            return this.goldList
        }
        addGoldsY(t, s, o, r) {
            var n = Math.floor(360 / t) * Math.PI / 180;
            for (let i = 0; i < t; i++) {
                const d = this.createGold(s);
                d.transform.position = r.clone();
                var l = Math.sin(n * i) * o,
                h = Math.cos(n * i) * o;
                let t = d.transform.position.x + l;
                var c = d.transform.position.y + 2;
                let e = d.transform.position.y + .5,
                a = d.transform.position.z + h;
                Laya.Tween.to(d.transform, {
                    localPositionX: t - .5 * l,
                    localPositionY: c,
                    localPositionZ: a - .5 * h
                },
                150, Laya.Ease.strongIn, Laya.Handler.create(this, () =>{
                    Laya.Tween.to(d.transform, {
                        localPositionX: t,
                        localPositionY: e,
                        localPositionZ: a
                    },
                    150, Laya.Ease.strongIn, null)
                }))
            }
        }
        addGoldsZ(e, a, i, s, o) {
            var r = Math.floor(360 / a) * Math.PI / 180;
            for (let t = 0; t < a; t++) {
                const h = this.createGold(i);
                if (e.addChild(h), h && h.getComponent(Laya.PhysicsCollider)) {
                    let t = h.getComponent(Laya.PhysicsCollider);
                    t.enabled = !1
                }
                h.transform.position = o.clone();
                var n = Math.sin(r * t) * s,
                l = Math.cos(r * t) * s,
                n = o.x + n,
                l = o.y + l;
                h.transform.localPosition = new Laya.Vector3(n, l, o.z),
                Laya.Tween.to(h.transform, {
                    localPositionX: n,
                    localPositionY: l
                },
                200, Laya.Ease.strongIn, null)
            }
        }
    }
    E.instance = null;
    class P {
        constructor(t, e, a) {
            this._outPos = new Laya.Vector4,
            this.width = 130,
            Laya.loader.create("game/prefab/name.json", Laya.Handler.create(this, this.onPrefabReady, [t, e, a]), null, Laya.Loader.PREFAB)
        }
        static getHealthBarInPool(t, e, a) {
            let i = null;
            return i = 0 < this.healthBarPool.length ? this.healthBarPool.pop() : new P(t, e, a)
        }
        static getHealthBar(t, e, a = !0) {
            P.parent = P.parent || Laya.stage;
            let i = this.getHealthBarInPool(t, e, a);
            return i.hpBar && (i.hpProgress.width = i.width, 0 == r.data.gameMode ? i.hpProgress.getChildAt(0).skin = "gameui/progress_bar_fill_5.png": i.hpProgress.getChildAt(0).skin = "gameui/progress_bar_fill_3.png", i.hpProgress.parent.visible = !1, i.isAi = a, i.emoji.visible = !1, i.nickname && (i.nickname.text = "Lv." + e + " " + t)),
            i.setActive(!0),
            this.healthBars.push(i),
            i
        }
        static recover(t) {
            t && (this.recovertoPool(t), -1 != (t = this.healthBars.indexOf(t)) && this.healthBars.splice(t, 1))
        }
        static recovertoPool(t) {
            t && ( - 1 == this.healthBarPool.indexOf(t) && (this.healthBarPool[this.healthBarPool.length] = t), t.setActive(!1))
        }
        static setParent(t) {
            this.parent = t
        }
        onPrefabReady(t, e, a, i) {
            this.hpBar = i.create(),
            this.hpBar.visible = !1,
            P.parent.addChild(this.hpBar),
            this.hpProgress = this.hpBar.getChildByName("hpBox").getChildByName("progress"),
            this.nickname = this.hpBar.getChildByName("txt"),
            this.emoji = this.hpBar.getChildByName("emoji"),
            this.emoji.visible = !1,
            this.hpProgress.width = this.width,
            0 == r.data.gameMode ? this.hpProgress.getChildAt(0).skin = "gameui/progress_bar_fill_5.png": this.hpProgress.getChildAt(0).skin = "gameui/progress_bar_fill_3.png",
            this.hpProgress.parent.visible = !1,
            this.nickname && (this.nickname.text = "Lv." + e + " " + t)
        }
        setActive(t) {
            this.hpBar && (this.hpBar.visible = t)
        }
        setEmoji(t) {
            this.emoji && (this.emoji.visible = t),
            t && (Laya.Tween.clearAll(this.emoji), this.emoji.scaleX = .3, this.emoji.scaleY = .3, Laya.Tween.to(this.emoji, {
                scaleX: .8,
                scaleY: .8
            },
            400, null, Laya.Handler.create(this, () =>{
                Laya.Tween.to(this.emoji, {},
                400, null, Laya.Handler.create(this, () =>{
                    this.emoji.visible = !1
                }))
            })))
        }
        setHpProgress(t) {
            this.hpProgress && (this.hpProgress.parent.visible = t)
        }
        onDestroy() {
            this.hpBar.destroy(!0),
            this.hpBar = null
        }
        updatePosition(t) {
            var e;
            this.hpBar && (I.camera.viewport.project(t, I.camera.projectionViewMatrix, this._outPos), t = this._outPos.x / Laya.stage.clientScaleX, e = this._outPos.y / Laya.stage.clientScaleY, this.hpBar.pos(t, e))
        }
        static onRecoverAll() {
            for (let t = this.healthBars.length - 1; 0 <= t; t--) {
                var e = this.healthBars.pop();
                this.recovertoPool(e)
            }
            this.healthBars = []
        }
        static onDestroyAll() {
            for (let t = this.healthBarPool.length - 1; 0 <= t; t--) {
                const e = this.healthBarPool.pop();
                e.onDestroy()
            }
            this.healthBarPool = []
        }
        static onShowAll(e) {
            var a = this.healthBars.length;
            for (let t = 0; t < a; t++) {
                const i = this.healthBars[t];
                i.setActive(e)
            }
        }
        updateTxt(t, e, a) {
            this.hpBar && (a = Math.max(.001, Math.min(a, 1)), this.hpProgress.width = this.width * a, this.nickname && (this.nickname.text = "Lv." + e + " " + t))
        }
    }
    P.healthBarPool = [],
    P.healthBars = [];
    var R = fc.define.Event,
    M = fc.framework.GameFrame;
    class I extends Laya.Script {
        constructor() {
            super(),
            this.mCurStageId = 0,
            this.isStartGame = !1,
            this.efEesList = []
        }
        onAwake() {
            Laya.MouseManager.enabled = !0,
            Laya.Browser.onWeiXin || Laya.Browser.onMiniGame || Laya.Browser.onQGMiniGame || Laya.Browser.onVVMiniGame || Laya.Browser.onQQMiniGame,
            this.mInitialize = !1,
            this.mOnGameShow = !1,
            Laya.stage.once(R.LAUNCH_COMPLETED, this, this.onGameLaunchReady),
            Laya.stage.on(R.GAME_HOME, this, this.onGameHome),
            Laya.stage.on(R.GAME_PREPARE, this, this.onGamePrepare),
            Laya.stage.on(R.GAME_START, this, this.onGameStart),
            Laya.stage.on(R.GAME_OVER, this, this.onGameOver),
            Laya.stage.on(R.GAME_RELIVE, this, this.onGameRelive),
            Laya.stage.on(R.GAME_RESET, this, this.onGameReset),
            Laya.stage.on(R.UI_VIEW_OPENED, this, this.onViewOpened),
            Laya.stage.on(R.UI_VIEW_CLOSED, this, this.onViewClosed),
            Laya.stage.on(R.STORE_USE_ITEM, this, this.onUseItem),
            Laya.stage.on(R.CHANGE_CUR_MODEL, this, this.onChangeMainRole),
            Laya.stage.on(o.SHOW_SUCCESS, this, this.onGameSuccess),
            Laya.stage.on(o.SHOW_FAILED, this, this.onGameFailed),
            Laya.stage.on(o.LOADRES_SUCCESS, this, this.load3dResSucess),
            Laya.stage.on(o.Loading_Success, this, this.loadingSuccess),
            Laya.stage.on(R.GAME_WAKEUP, this, this.onWakeUp),
            Laya.stage.on(R.GAME_SLEEP, this, this.onSleep),
            Laya.stage.on(R.GAME_BACK_HOME, this, this.obBackHome)
        }
        onDestroy() {}
        onWakeUp() {
            M.gameSceneId == fc.define.SceneId.Game && Laya.stage.event(y.EVENT_RESUME)
        }
        onSleep() {
            P.onShowAll(!1),
            Laya.stage.event(y.EVENT_PAUSE)
        }
        obBackHome() {
            this.efEesList = [],
            P.onShowAll(!1),
            this.mOnGameShow = !0,
            I.cameraCtr.initCameraByPlayer(null),
            Laya.stage.event(y.EVENT_PAUSE),
            M.closeView("Game"),
            M.closeView("MainGame"),
            this.onGameHome()
        }
        onUpdate() {
            0 == this.mInitialize || this.mOnGameShow || M.isGamePaused || M.gameSceneId != fc.define.SceneId.Game && M.gameSceneId != fc.define.SceneId.Failed || !k.Instance().getPlayer() || r.data.gameFinish || !this.isStartGame || 600 < Laya.timer.delta || this.handleRank()
        }
        handleRank() {
            if (r.data.playRankList = k.Instance().getPlayerRank(), 0 == r.data.gameMode) {
                let e = 0;
                for (let t = 0; t < r.data.playRankList.length; t++) r.data.playRankList[t].isDie && e++;
                if (e == r.data.playRankList.length - 1) for (let t = 0; t < r.data.playRankList.length; t++) {
                    var a = r.data.playRankList[t];
                    a.isDie || k.Instance().getPlayer().mColorId != a.colorId || Laya.stage.event(o.SHOW_SUCCESS)
                }
            }
        }
        onGameLaunchReady() {
            console.log("GameLogic", R.LAUNCH_COMPLETED),
            this.mInitialize = !0;
            var t = Laya.loader.getRes("config/stageCfg.json");
            r.initLevelData(t),
            r.updatePlayerInfo(M.playerInfo),
            this.init(),
            g.preLoadRes(g.threeDResRootPath2, g.resList),
            g.preCreateRes()
        }
        load3dResSucess() {
            M.scene3d.getChildByName("cameraTexture").addComponent(H),
            M.finishLoading(),
            this.efEesList = g.efEesList.concat()
        }
        preLoadEffect() {
            this.efEesList.forEach(function(t) {
                let e = f.Instance().createSpriteEffect(t, !0);
                e.transform.position = new Laya.Vector3(0, -10, 0),
                Laya.Tween.to(M.scene3d, {},
                2e3, null, Laya.Handler.create(this, t =>{
                    f.Instance().removeSpriteEffect(t)
                },
                [e]))
            })
        }
        onGameHome() {
            this.mOnGameShow = !1,
            Laya.MouseManager.enabled = !1,
            this.initGame();
            if(0 < canpp){
                try {
                    window.ggmgr.xsi();
                } catch (error) {
                    
                }
            }
            canpp++,
            console.log("===================onGameHome==================123456")
        }
        onGamePrepare() {
            M.startGame()
        }
        onGameStart() {
            Laya.MouseManager.enabled = !1,
            fc.framework.GameFrame.openView("WaveLoading", {},
            null)
        }
        onGameOver() {
            r.data.curStage = fc.framework.GameFrame.playerInfo.levelId,
            r.data.gold = r.data.gameGold,
            this.efEesList = []
        }
        onGameReset() {}
        onGameRelive() {}
        onGameSuccess() {
            P.onRecoverAll(),
            r.data.gameFinish = !0,
            1 == M.playerInfo.isInGuide && M.savePlayerInfo({
                isInGuide: 0,
                isNew: 0
            }),
            Laya.stage.mouseEnabled = !1,
            L.Instance.playSfx("sfx_wow.mp3"),
            I.cameraCtr.playOverAni(),
            I.cameraCtr.initCameraByPlayer(null);
            let t = 1e3,
            e = ( - 1 != fc.platform.PlatformConfig.platformTag.indexOf("iptv") && (t = 1e3), 1);
            switch (r.data.gameMode) {
            case 0:
                e = 1;
                break;
            case 1:
                e = 3;
                break;
            case 2:
                e = 2
            }
            r.data.stageGold = e * m.Gold_Lv[Math.min(m.Gold_Lv.length - 1, this.getRankByColor(k.Instance().getPlayer().mColorId))],
            this.owner.timerOnce(t, this, () =>{
                this.mOnGameShow = !0,
                Laya.stage.mouseEnabled = !0,
                Laya.stage.event(y.EVENT_PAUSE),
                P.onRecoverAll(),
                M.showSuccessed({
                    award: r.data.stageGold
                }),
                M.closeAllViews(),
                L.Instance.playSfx("sfx_win.mp3")
            }),
            console.log("===============================================123456")
        }
        getRankByColor(e) {
            for (let t = 0; t < r.data.playRankList.length; t++) if (r.data.playRankList[t].colorId == e) return t;
            return 100
        }
        onGameFailed() {
            P.onRecoverAll(),
            1 == M.playerInfo.isNew && M.savePlayerInfo({
                isNew: 0
            }),
            this.mOnGameShow = !0,
            fc.framework.Device.vibrateLong(),
            r.data.gameFinish = !0;
            var e = this.getRankByColor(k.Instance().getPlayer().mColorId);
            if (e > m.Gold_Lv.length - 1) r.data.stageGold = 0;
            else {
                let t = 1;
                switch (r.data.gameMode) {
                case 0:
                    t = 1;
                    break;
                case 1:
                    t = 3;
                    break;
                case 2:
                    t = 2
                }
                r.data.stageGold = t * m.Gold_Lv[e]
            }
            Laya.stage.event(y.EVENT_PAUSE),
            this.owner.timerOnce(100, this, () =>{
                Laya.stage.mouseEnabled = !0,
                P.onRecoverAll(),
                M.showFailed({
                    award: r.data.stageGold
                }),
                M.closeAllViews()
            })
        }
        onViewClosed(t, e) {
            console.log("onViewClosed", t),
            "StorePage" != t && "TrialPage" != t || Laya.stage.event(fc.define.Event.TEXTURE_CAMERA_CLEAR),
            0 == t.indexOf("HomePage") && M.closeView("MainHome")
        }
        onViewOpened(t, e) {
            console.log("onViewOpened", t),
            "WaveLoading" == e && this.openLoadinSuccess()
        }
        onUseItem(t, e) {
            console.log("onUseItem" + t + e);
            e.prefab
        }
        onChangeMainRole(t) {
            console.log("onChangeMainRole" + t)
        }
        init() {
            Laya.MouseManager.multiTouchEnabled = !1,
            M.scene3d.input.multiTouchEnabled = !1,
            k.Instance().init(M.scene3d),
            S.Instance().init(M.scene3d),
            f.Instance().init(M.scene3d),
            E.Instance().init(M.scene3d),
            I.cameraCtr = M.scene3d.getChildByName("CameraNode").addComponent(U),
            I.camera = I.cameraCtr.camera
        }
        initGame() {
            this.destroyGame(),
            I.cameraCtr.playHomeAni(),
            r.data.gameFinish = !1,
            r.data.gameSuccess = !1,
            r.data.stageGold = 0,
            r.data.gameMode = 0,
            this.isStartGame = !1,
            this.mCurStageId = r.data.curStageId,
            this.mCurStageId > r.data.stageCount && (this.mCurStageId = 1 + c.random(0, r.data.stageCount)),
            0 == this.efEesList.length && fc.platform.PlatformConfig.platformTag.indexOf("iptv"),
            k.Instance().initStageById(this.mCurStageId, Laya.Handler.create(this, () =>{})),
            I.cameraCtr.setPosition(k.Instance().startPoint),
            k.Instance().initPlayerAsyn(Laya.Handler.create(this, t =>{
                k.Instance().getPlayer().isPause = !0,
                this.preLoadEffect(),
                Laya.MouseManager.enabled = !0,
                30 < 1e3 / Laya.timer.delta ? I.cameraCtr.setShadowMode(Laya.ShadowMode.Hard) : I.cameraCtr.setShadowMode(Laya.ShadowMode.None),
                -1 != fc.platform.PlatformConfig.platformTag.indexOf("iptv") && I.cameraCtr.setShadowMode(Laya.ShadowMode.None)
            }))
        }
        loadingSuccess() {
            I.cameraCtr.playGameAni(),
            Laya.stage.timerOnce(500, this, () =>{
                for (let e = 0; e < k.Instance().getPlayerList().length; e++) {
                    let t = k.Instance().getPlayerList()[e];
                    t && t.onPrepare(),
                    t && t.onRun()
                }
                Laya.stage.event(y.EVENT_RESUME),
                Laya.MouseManager.enabled = !0,
                this.isStartGame = !0
            },
            null, !1)
        }
        openLoadinSuccess() {
            k.Instance().initAi(),
            k.Instance().loadBrick(Laya.Handler.create(this, () =>{
                Laya.stage.event(o.Hide_Loading)
            }))
        }
        destroyGame() {
            k.Instance().onDestroy(),
            f.Instance().onDestroy(),
            E.Instance().onDestroy(),
            S.Instance().onDestroy(),
            P.onRecoverAll(),
            Laya.Resource.destroyUnusedResources()
        }
    }
    var F = fc.plugin.Trigger3dListener;
    class _ extends y {
        constructor() {
            super(...arguments),
            this.rotationDir = 0,
            this.isStrongLeg = !1,
            this.moveDir = new Laya.Vector3(0, 0, 0),
            this.gotCount = 0
        }
        onAwake() {
            super.onAwake()
        }
        onEnable() {
            super.onEnable()
        }
        onStart() {
            this.rigidbody3d = this.sprite3d.getChildByName("Collider_Weapon").getComponent(Laya.Rigidbody3D),
            this.collider3d = this.sprite3d.getChildByName("Collider_Body").getComponent(Laya.PhysicsCollider),
            this.rigidbody3d && (F.add(this.rigidbody3d, this), n.Init(this.sprite3d, this)),
            this.rigidbody3d && (this.rigidbody3d.angularFactor = new Laya.Vector3(0, 0, 0), this.rigidbody3d.angularVelocity = new Laya.Vector3(0, 0, 0), this.rigidbody3d.linearVelocity = new Laya.Vector3(0, 0, 0), this.rigidbody3d.collisionGroup = l.GROUP_WEAPON, this.rigidbody3d.canCollideWith = l.CAN_WEAPON, this.rigidbody3d.sleepLinearVelocity = 0, this.rigidbody3d.sleepAngularVelocity = 0, this.rigidbody3d.wakeUp(), this.rigidbody3d.enabled = !0, this.rigidbody3d.isTrigger = !0, this.rigidbody3d.isKinematic = !0),
            this.collider3d && (this.collider3d.enabled = !0, this.collider3d.isTrigger = !0, this.collider3d.collisionGroup = l.GROUP_PLAYER, this.collider3d.canCollideWith = l.CAN_PLAYER),
            this.mMeshBot = this.sprite3d.getChildByName("MeshBot"),
            this.mColliderWeapon = this.sprite3d.getChildByName("Collider_Weapon"),
            this.mColliderBody = this.sprite3d.getChildByName("Collider_Body"),
            this.mUpEffect = this.sprite3d.getChildByName("PlayerLevelUpEffect"),
            this.mWeapon3d = this.sprite3d.getChildByName("WeaponAttachPoint"),
            this.mHat3d = this.mMeshBot.getChildByName("hat"),
            this.mCrown = this.mMeshBot.getChildByName("PlayerCrown"),
            this.mCrown.active = !1,
            this.mHUDPoint = this.mMeshBot.getChildByName("HUDPoint"),
            this.setColliderEnable(!1),
            this.initPlayer(),
            this.rotationDir = 2 * c.random(0, 2) - 1,
            this.killCount = 0,
            Laya.stage.event("CameraTarget", this)
        }
        setRotationTo(t) {
            this.rotationSprite3d(t)
        }
        rotationSprite3d(t) {
            var e = new Laya.Vector3;
            Laya.Vector3.add(this.mtransform.rotationEuler.clone(), t, e),
            this.rotation2AngleGun(e)
        }
        rotation2AngleGun(t) {
            this.mtransform.rotationEuler = t.clone(),
            this.mtransform.getForward(this.dir)
        }
        reset() {
            this.onIdle()
        }
        onRun() {
            this.onResume(),
            this.setColliderEnable(!0),
            this.healthBar || (this.healthBar = P.getHealthBar(this.name, this.lv, !1), 2 == r.data.gameMode ? this.healthBar.setHpProgress(!1) : (this.mHp = 5, 1 == r.data.gameMode && (this.mHp = 3), this.mTotalHp = this.mHp, this.healthBar.setHpProgress(!0)))
        }
        onPrepare() {}
        onDamage(t) {
            L.Instance.playSfx("sfx_kill.mp3"),
            0 == r.data.gameMode ? (this.mHp -= t, 0 < this.mHp || this.onDie()) : 1 == r.data.gameMode ? (this.mHp -= t, 0 < this.mHp || this.relive()) : this.relive()
        }
        relive() {
            this.setColliderEnable(!1),
            this.onPause(),
            this.rotationDir = 0;
            var t = 90 * this.rotationDir,
            e = c.random(0, 360);
            Laya.Tween.to(this.mMeshBot.transform, {
                localRotationEulerX: t,
                localRotationEulerZ: e
            },
            1e3),
            fc.framework.Device.vibrateShort(),
            this.healthBar && this.healthBar.setActive(!1),
            this.owner.timerOnce(2e3, this, () =>{
                r.data.gameFinish || (this.setColliderEnable(!0), k.Instance().resetBrickByColorId(this.mColorId), this.healthBar && this.healthBar.setActive(!0), this.mHp = this.mTotalHp, this.sprite3d.transform.localRotationEuler = new Laya.Vector3(0, c.random(0, 360), 0), this.mMeshBot.transform.localRotationEuler = new Laya.Vector3(0, -90, 0), this.onResume(), this.rotationDir = 2 * c.random(0, 2) - 1, this.collider3d && (this.collider3d.enabled = !1), this.owner.timerOnce(3e3, this, () =>{
                    this.collider3d && (this.collider3d.enabled = !0)
                }))
            })
        }
        onDie() {
            super.onDie(),
            this.setColliderEnable(!1);
            var t = 90 * this.rotationDir,
            e = c.random(0, 90);
            Laya.Tween.to(this.mMeshBot.transform, {
                localRotationEulerX: t,
                localRotationEulerZ: e
            },
            1e3),
            fc.framework.Device.vibrateLong(),
            L.Instance.playSfx("sfx_over.mp3"),
            this.healthBar && this.healthBar.setActive(!1),
            this.owner.timerOnce(2e3, this, () =>{
                Laya.stage.event(o.SHOW_FAILED)
            })
        }
        onWin() {
            super.onWin(),
            this.playWinAni(),
            this.playWinEffect(this.mtransform.position.clone())
        }
        initEvent() {
            super.initEvent(),
            Laya.stage.on(fc.define.Event.STORE_USE_ITEM, this, this.switchPlayer),
            Laya.stage.on(fc.define.Event.CHANGE_CUR_MODEL, this, this.changePlayer),
            Laya.stage.on(o.SHOW_SUCCESS, this, this.onWin),
            Laya.stage.on(o.Player_Run, this, this.startGame),
            Laya.stage.on(o.Strong_Leg, this, this.strongLeg)
        }
        removeEvent() {
            super.removeEvent(),
            Laya.stage.off(fc.define.Event.STORE_USE_ITEM, this, this.switchPlayer),
            Laya.stage.off(fc.define.Event.CHANGE_CUR_MODEL, this, this.changePlayer),
            Laya.stage.off(o.SHOW_SUCCESS, this, this.onWin),
            Laya.stage.off(o.Player_Run, this, this.startGame),
            Laya.stage.off(o.Strong_Leg, this, this.strongLeg)
        }
        strongLeg() {
            this.isStrongLeg = !0,
            this.mWeaponLeves.getChildAt(3).active = !0,
            this.mTrail = this.mWeaponLeves.getChildAt(3).getChildByName("Trail"),
            this.mTrail.clear(),
            this.mColliderWeapon.transform.localScaleZ = m.WeaponScale_Lv[3]
        }
        onDestroy() {
            super.onDestroy()
        }
        startGame() {
            this.playRunAni(),
            Laya.stage.event(o.HIDE_GUIDE)
        }
        switchPlayer(t, e) {
            console.log("switchPlayer" + t + e);
            t = e.prefab;
            this.changePlayer(t)
        }
        changePlayer(t) {
            console.log("changePlayer" + t),
            -1 != t.indexOf("character") ? (c.activeAllChild(this.mHat3d, !1), this.mHat3d.getChildByName(t).active = !0) : (c.activeAllChild(this.mWeapon3d, !1), this.mWeaponLeves = this.mWeapon3d.getChildByName(t), this.mWeaponLeves.active = !0, c.activeAllChild(this.mWeaponLeves, !1), this.mWeaponLeves.getChildAt(this.lv - 1).active = !0, this.mTrail = this.mWeaponLeves.getChildAt(this.lv - 1).getChildByName("Trail"), this.mTrail.clear())
        }
        initPlayer() {
            c.activeAllChild(this.mHat3d, !1),
            this.mHat3d.getChildAt(fc.framework.GameFrame.playerInfo.goodsInUse[0]).active = !0,
            c.activeAllChild(this.mWeapon3d, !1),
            this.mWeaponLeves = this.mWeapon3d.getChildAt(fc.framework.GameFrame.playerInfo.goodsInUse[1]),
            this.mWeaponLeves.active = !0,
            c.activeAllChild(this.mWeaponLeves, !1),
            this.mWeaponLeves.getChildAt(this.lv - 1).active = !0,
            this.mTrail = this.mWeaponLeves.getChildAt(this.lv - 1).getChildByName("Trail"),
            this.mTrail.clear(),
            this.mColliderWeapon.transform.localScaleZ = m.WeaponScale_Lv[this.lv - 1],
            this.mColliderBody.transform.localScale = new Laya.Vector3(m.Scale_Lv[this.lv - 1], m.Scale_Lv[this.lv - 1], m.Scale_Lv[this.lv - 1]),
            this.mMeshBot.transform.localScale = new Laya.Vector3(m.Scale_Lv[this.lv - 1], m.Scale_Lv[this.lv - 1], m.Scale_Lv[this.lv - 1]),
            this.sprite3d.transform.localRotationEuler = new Laya.Vector3(0, -90, 0),
            this.mMeshBot.transform.localRotationEuler = new Laya.Vector3(0, -90, 0);
            var t = m.MaterialPath + m.skin_mat[this.mColorId];
            c.changMat(t, this.mMeshBot.getChildByName("MeshBot_01").meshRenderer),
            this.isStrongLeg = !1
        }
        onResume() {
            r.data.gameFinish || super.onResume()
        }
        onPause() {
            super.onPause()
        }
        removeEffect(t) {
            f.Instance().removeSpriteEffect(t)
        }
        move(t) {
            if (!t || null == t || 500 < Laya.timer.delta) return this.movevelocity.x = 0,
            this.movevelocity.z = 0,
            void this.moveDir.setValue(0, 0, 0);
            var e;
            0 == t.x && 0 == t.z || t.x == this.movevelocity.x && t.z == this.movevelocity.z || (Laya.Vector3.normalize(t, t), this.moveDir.x = t.x, this.moveDir.z = t.z, e = fc.framework.GameFrame.gameCfg.moveSpeed * Laya.timer.delta * .001, this.movevelocity.x = -t.x * e, this.movevelocity.y = 0, this.movevelocity.z = -t.z * e)
        }
        onUpdate() {
            if (! (500 < Laya.timer.delta || this.isDie)) {
                var e = fc.framework.GameFrame.gameCfg.rotationSpeed * Laya.timer.delta * .001 * this.rotationDir;
                let t = new Laya.Vector3;
                if (t.y = e, this.rotationSprite3d(t), !this.isPause) {
                    let t = this.mtransform.localPosition.clone();
                    e = this.movevelocity.clone();
                    t.z += e.z,
                    t.x += e.x,
                    this.mtransform.localPosition = t,
                    0 == this.moveDir.x && 0 == this.moveDir.z && this.move(null)
                }
            }
        }
        onLateUpdate() {
            if (! (500 < Laya.timer.delta || this.isPause || this.isDie)) {
                var t = r.data.playRankList;
                for (let e = 0; e < t.length; e++) {
                    var a = t[e];
                    if (a.colorId == this.mColorId) {
                        a = a.percent,
                        0 == e && this.rank != e && 10 < a && this.healthBar.setEmoji(!0),
                        0 == e ? this.mCrown.active = !0 : this.mCrown.active = !1,
                        this.rank = e;
                        let t = 1;
                        if (a < 20 ? t = 1 : 20 <= a && a < 30 ? t = 2 : 30 <= a && a < 40 ? t = 3 : 40 <= a && (t = 4), t > this.lv && -1 == fc.platform.PlatformConfig.platformTag.indexOf("iptv") && (this.mUpEffect.active = !0, this.owner.timerOnce(1e3, this, () =>{
                            this.mUpEffect.active = !1
                        },
                        null, !1)), this.lv != t) {
                            if (this.lv < t) switch (t) {
                            case 2:
                                I.cameraCtr.playGameByNameAni("lv1to2");
                                break;
                            case 3:
                                I.cameraCtr.playGameByNameAni("lv2to3");
                                break;
                            case 4:
                                I.cameraCtr.playGameByNameAni("lv3to4")
                            }
                            if (this.lv > t) switch (t) {
                            case 1:
                                I.cameraCtr.playGameByNameAni("lv2to1");
                                break;
                            case 2:
                                I.cameraCtr.playGameByNameAni("lv3to2");
                                break;
                            case 3:
                                I.cameraCtr.playGameByNameAni("lv4to3")
                            }
                            this.lv = t,
                            c.activeAllChild(this.mWeaponLeves, !1),
                            this.isStrongLeg ? (this.mWeaponLeves.getChildAt(3).active = !0, this.mTrail = this.mWeaponLeves.getChildAt(3).getChildByName("Trail"), this.mTrail.clear(), this.mColliderWeapon.transform.localScaleZ = m.WeaponScale_Lv[3]) : (this.mWeaponLeves.getChildAt(this.lv - 1).active = !0, this.mTrail = this.mWeaponLeves.getChildAt(this.lv - 1).getChildByName("Trail"), this.mTrail.clear(), this.mColliderWeapon.transform.localScaleZ = m.WeaponScale_Lv[this.lv - 1]);
                            a = new Laya.Vector3(m.Scale_Lv[this.lv - 1], m.Scale_Lv[this.lv - 1], m.Scale_Lv[this.lv - 1]);
                            Laya.Tween.clearAll(this.mMeshBot.transform),
                            Laya.Tween.to(this.mMeshBot.transform, {
                                localScaleX: a.x,
                                localScaleY: a.y,
                                localScaleZ: a.z
                            },
                            300, null, Laya.Handler.create(this, () =>{
                                this.mColliderBody.transform.localScale = new Laya.Vector3(m.Scale_Lv[this.lv - 1], m.Scale_Lv[this.lv - 1], m.Scale_Lv[this.lv - 1])
                            }))
                        }
                        break
                    }
                }
                this.healthBar.updateTxt(this.name, this.lv, this.mHp / this.mTotalHp),
                this.healthBar && this.healthBar.setActive(!0),
                this.healthBar && this.healthBar.updatePosition(this.mHUDPoint.transform.position),
                2 == r.data.gameMode ? this.healthBar.setHpProgress(!1) : this.healthBar.setHpProgress(!0)
            }
        }
        rotationRole(t) {
            t -= this.sprite3d.transform.rotationEuler.y;
            0 != t && (this.sprite3d.transform.rotate(new Laya.Vector3(0, t, 0), !1, !1), this.sprite3d.transform.getForward(this.dir))
        }
        on3dTriggerEnter(t, e) {
            r.data.gameFinish || this.isDie || (super.on3dTriggerEnter(t, e), (e = t.owner) && e.active && !this.isPause && ("Block_Simple" == e.name && this.collectBrick(e), "Collider_Body" == e.name && this.cutEnemy(e), "Collider_Weapon" == e.name && this.colliderWeapon(e)))
        }
        cutEnemy(t) {
            let e = t.parent.getComponent(y);
            e && e.mColorId != this.mColorId && (e.onDamage(1), L.Instance.playSfx("sfx_kill.mp3"), this.killCount++)
        }
        colliderWeapon(t) {
            t.parent.getComponent(y) && (this.rotationDir = -this.rotationDir, this.mTrail.clear(), L.Instance.playSfx("sfx_clash.mp3"), fc.framework.Device.vibrateShort())
        }
        collectBrick(e) {
            if (e) {
                let t = e.getComponent(u);
                t && (t.mStatus, s.idle, t.setStatus(s.fly, this))
            }
        }
        collectGold(t) {}
        playWinEffect(t) {
            let e = [];
            new Laya.Vector3(t.x - 2, t.y + 1, t.z);
            let a = f.Instance().createSpriteEffect("ef_win_01");
            a.transform.position = t,
            e.push(a),
            this.owner.timerOnce(5e3, this, this.removeWinEffect, [e], !1)
        }
        playWin2Effect(t) {
            let e = [],
            a = f.Instance().createSpriteEffect("ef_dqdzz_win_02");
            a.transform.position = t,
            e.push(a),
            this.owner.timerOnce(1e4, this, this.removeWinEffect, [e], !1)
        }
        removeWinEffect(e) {
            for (let t = 0; t < e.length; t++) f.Instance().removeSpriteEffect(e[t])
        }
    }
    class A {
        constructor() {
            this.angle = 0,
            this.lastMouseX = 0,
            this.lastMouseY = 0,
            this.isMouseDown = !1,
            this.isPlaying = !1
        }
        static Instance() {
            return null == this.instance && (this.instance = new A),
            this.instance
        }
        init(t, e, a, i) {
            this.listener = e,
            this.joyRing = a,
            this.joyDot = i,
            this.backToDefault(),
            this.initEvent()
        }
        initEvent() {
            this.listener && (this.listener.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown), this.listener.on(Laya.Event.MOUSE_UP, this, this.onMouseUp), this.isPlaying = !0)
        }
        removeEvent() {
            this.listener && (this.listener.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown), this.listener.off(Laya.Event.MOUSE_UP, this, this.onMouseUp), this.isPlaying && this.pauseMove())
        }
        pauseMove() {
            this.isMouseDown = !1,
            this.listener.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMove),
            Laya.stage.event(A.JoyUp),
            this.isPlaying = !1,
            this.backToDefault()
        }
        backToDefault() {
            var t = Laya.stage.width >> 1,
            e = .8 * Laya.stage.height;
            this.joyRing.pos(t, e),
            this.joyDot.pos(t, e)
        }
        onMouseDown(t) { ! this.isMouseDown && this.isPlaying && (this.showGameJoy(!0), this.isMouseDown = !0, this.joyId = t.touchId, this.lastMouseX = Laya.stage.mouseX, this.lastMouseY = Laya.stage.mouseY, this.joyRing.pos(this.lastMouseX, this.lastMouseY), this.joyDot.pos(this.lastMouseX, this.lastMouseY), Laya.stage.event(A.JoyDown), this.listener.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove))
        }
        onMouseMove(e) {
            if (this.isMouseDown && this.joyId == e.touchId && this.isPlaying) {
                var e = Laya.stage.mouseX - this.lastMouseX,
                a = Laya.stage.mouseY - this.lastMouseY;
                let t = new Laya.Point(e, a);
                this.angle = 180 * Math.atan2(e, a) / Math.PI;
                var e = c.magSqr(t),
                a = c.normalize(t),
                i = (this.joyRing.width >> 1) - 138; (t = i * i < e ? c.mul(a, i) : t).x += this.lastMouseX,
                t.y += this.lastMouseY,
                this.joyDot.pos(t.x, t.y),
                Laya.stage.event(A.JoyMove, new Laya.Vector3(a.x, 0, a.y))
            }
        }
        onMouseUp(t) {
            t.touchId == this.joyId && (this.isMouseDown = !1, this.listener.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMove), Laya.stage.event(A.JoyUp), this.joyDot.pos(this.lastMouseX, this.lastMouseY))
        }
        showGameJoy(t) {
            this.joyRing.visible = t,
            this.joyDot.visible = t
        }
    }
    A.instance = null,
    A.JoyDown = "JoyDown",
    A.JoyMove = "JoyMove",
    A.JoyUp = "JoyUp";
    class z extends Laya.Script {
        constructor() {
            super(...arguments),
            this.dir = null,
            this.isMouseDown = !1,
            this.curAtkTarget = null,
            this.touchId = -1,
            this.lastMouseX = 0,
            this.lastMouseY = 0,
            this.movex = 0,
            this.movey = 0,
            this.touchDir = 0,
            this.touchVDir = 0
        }
        onStart() {
            this.width = Laya.stage.width * Laya.stage.scaleX,
            this.character = this.owner.getComponent(y)
        }
        onEnable() {
            Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onTouchStart),
            this.initEvent(),
            Laya.stage.on(fc.define.Event.JOYSTICK_KEY_DOWN, this, this.onJoystickKeyDown),
            Laya.stage.on(fc.define.Event.JOYSTICK_KEY_UP, this, this.onJoystickKeyUp)
        }
        onDisable() {
            Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onTouchStart),
            this.removeEvent(),
            Laya.stage.off(fc.define.Event.JOYSTICK_KEY_DOWN, this, this.onJoystickKeyDown),
            Laya.stage.off(fc.define.Event.JOYSTICK_KEY_UP, this, this.onJoystickKeyUp)
        }
        initEvent() {
            Laya.stage.on(A.JoyDown, this, this.onTouchStart),
            Laya.stage.on(A.JoyMove, this, this.onTouchMove),
            Laya.stage.on(A.JoyUp, this, this.onTouchEnd)
        }
        removeEvent() {
            Laya.stage.off(A.JoyDown, this, this.onTouchStart),
            Laya.stage.off(A.JoyMove, this, this.onTouchMove),
            Laya.stage.off(A.JoyUp, this, this.onTouchEnd)
        }
        onJoystickKeyDown(t) {
            if (this.character && this.character.isLife() && !r.data.gameFinish && -1 != fc.platform.PlatformConfig.platformTag.indexOf("iptv")) switch (this.character && this.character.setTouch(!0), t) {
            case fc.define.JoystickCode.LEFT:
                this.touchDir = -1,
                this.touchVDir = 0;
                break;
            case fc.define.JoystickCode.RIGHT:
                this.touchDir = 1,
                this.touchVDir = 0;
                break;
            case fc.define.JoystickCode.UP:
                this.touchVDir = -1,
                this.touchDir = 0;
                break;
            case fc.define.JoystickCode.DOWN:
                this.touchVDir = 1,
                this.touchDir = 0;
                break;
            case fc.define.JoystickCode.OK:
                this.touchDir = 0,
                this.touchVDir = 0,
                this.character && this.character.move(null)
            }
        }
        onJoystickKeyUp(t) {
            this.touchDir = 0,
            this.touchVDir = 0,
            this.character && this.character.move(null)
        }
        onTouchStart() {
            this.isMouseDown || this.character && this.character.isLife() && !r.data.gameFinish && (this.isMouseDown = !0, this.character && this.character.isLife() && (this.lastMouseX = Laya.stage.mouseX, this.lastMouseY = Laya.stage.mouseY, this.character && this.character.setTouch(!0), Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onTouchStart)))
        }
        onTouchMove(t) {
            if (this.character && this.character.isLife() && !r.data.gameFinish) return 0 == this.lastMouseX && 0 == this.lastMouseY ? (this.lastMouseX = Laya.stage.mouseX, this.lastMouseY = Laya.stage.mouseY, this.character && this.character.setTouch(!0), void(this.isMouseDown = !0)) : void(this.isMouseDown && (t ? (this.dir = t.clone(), this.character.move(this.dir.clone())) : this.character.move(null)))
        }
        onTouchEnd() {
            this.isMouseDown = !1,
            this.touchId = -1,
            this.lastMouseX = 0,
            this.lastMouseY = 0,
            this.character && this.character.setTouch(!1),
            this.dir = null,
            this.character.move(null),
            this.character && this.character.isLife() && r.data.gameFinish
        }
        onLateUpdate() {
            if (this.character && this.character.isLife() && !r.data.gameFinish && -1 != fc.platform.PlatformConfig.platformTag.indexOf("iptv")) {
                var e = 30 * this.touchDir,
                a = 30 * this.touchVDir,
                e = 10 * e / this.width,
                a = 10 * a / this.width;
                this.lastMouseX = Laya.stage.mouseX,
                this.lastMouseY = Laya.stage.mouseY;
                let t = new Laya.Vector3(e, 0, a);
                this.character && this.character.move(t.clone())
            }
        }
    }
    var Y = fc.plugin.AnimStateListener;
    class T extends e {
        constructor() {
            super(...arguments),
            this.animEvents = null
        }
        onAwake() {
            this.animator = this.owner.getComponent(Laya.Animator),
            this.animator.speed = 0
        }
        onStart() {
            null == this.character && (this.character = this.owner.getComponent(y)),
            Y.add(this.animator, T.fall, this)
        }
        onEnable() {
            super.onEnable(),
            this.animator = this.owner.getComponent(Laya.Animator),
            this.animator.speed = 0
        }
        onDisable() {
            Y.remove(this.animator, T.fall, this),
            this.animEvents && this.animEvents.destroy(),
            this.onDestroy()
        }
        onAnimStateEnter(t, e) {}
        onAnimStateExit(t, e) {
            t === T.fall && 1 <= this.animator.speed && (this.curClipName = null, this.animator && this.animator.play(T.fall, 0, 0), this.animator.speed = -1)
        }
        onDestroy() {
            this.animator = null,
            this.character = null,
            this.curClipName = null
        }
        stop() {
            this.animator.speed = 0,
            this.curClipName = null
        }
    }
    T.idle = "Idle",
    T.run = "Run",
    T.die = "Defeat",
    T.fall = "HitBack",
    T.win = "Dance1";
    var j = fc.plugin.Trigger3dListener;
    class X extends y {
        constructor() {
            super(...arguments),
            this.rotationDir = 0,
            this.moveDir = new Laya.Vector3(0, 0, 0),
            this.gotCount = 0
        }
        onAwake() {
            super.onAwake(),
            this.isAi = !0
        }
        onEnable() {
            super.onEnable()
        }
        onStart() {
            this.rigidbody3d = this.sprite3d.getChildByName("Collider_Weapon").getComponent(Laya.Rigidbody3D),
            this.collider3d = this.sprite3d.getChildByName("Collider_Body").getComponent(Laya.PhysicsCollider),
            this.rigidbody3d && (j.add(this.rigidbody3d, this), n.Init(this.sprite3d, this)),
            this.rigidbody3d && (this.rigidbody3d.angularFactor = new Laya.Vector3(0, 0, 0), this.rigidbody3d.angularVelocity = new Laya.Vector3(0, 0, 0), this.rigidbody3d.linearVelocity = new Laya.Vector3(0, 0, 0), this.rigidbody3d.collisionGroup = l.GROUP_WEAPON, this.rigidbody3d.canCollideWith = l.CAN_WEAPON, this.rigidbody3d.sleepLinearVelocity = 0, this.rigidbody3d.sleepAngularVelocity = 0, this.rigidbody3d.wakeUp(), this.rigidbody3d.enabled = !0, this.rigidbody3d.isTrigger = !0, this.rigidbody3d.isKinematic = !0),
            this.collider3d && (this.collider3d.enabled = !0, this.collider3d.isTrigger = !0, this.collider3d.collisionGroup = l.GROUP_PLAYER, this.collider3d.canCollideWith = l.CAN_PLAYER),
            this.mMeshBot = this.sprite3d.getChildByName("MeshBot"),
            this.mColliderWeapon = this.sprite3d.getChildByName("Collider_Weapon"),
            this.mColliderBody = this.sprite3d.getChildByName("Collider_Body"),
            this.mUpEffect = this.sprite3d.getChildByName("PlayerLevelUpEffect"),
            this.mWeapon3d = this.sprite3d.getChildByName("WeaponAttachPoint"),
            this.mHat3d = this.mMeshBot.getChildByName("hat"),
            this.mCrown = this.mMeshBot.getChildByName("PlayerCrown"),
            this.mCrown.active = !1,
            this.mHUDPoint = this.mMeshBot.getChildByName("HUDPoint"),
            this.setColliderEnable(!1),
            this.initPlayer(),
            this.rotationDir = 2 * c.random(0, 2) - 1,
            this.killCount = 0
        }
        setRotationTo(t) {
            this.rotationSprite3d(t)
        }
        rotationSprite3d(t) {
            var e = new Laya.Vector3;
            Laya.Vector3.add(this.mtransform.rotationEuler.clone(), t, e),
            this.rotation2AngleGun(e)
        }
        rotation2AngleGun(t) {
            this.mtransform.rotationEuler = t.clone(),
            this.mtransform.getForward(this.dir)
        }
        reset() {
            this.onIdle()
        }
        onRun() {
            this.onResume(),
            this.setColliderEnable(!0),
            this.healthBar || (this.healthBar = P.getHealthBar(this.name, this.lv, !1), 2 == r.data.gameMode ? this.healthBar.setHpProgress(!1) : (this.mHp = 5, 1 == r.data.gameMode && (this.mHp = 3), this.mTotalHp = this.mHp, this.healthBar.setHpProgress(!0)))
        }
        onPrepare() {}
        onDamage(t) {
            0 == r.data.gameMode ? (this.mHp -= t, 0 < this.mHp || this.onDie()) : 1 == r.data.gameMode ? (this.mHp -= t, 0 < this.mHp || this.relive()) : this.relive()
        }
        relive() {
            this.setColliderEnable(!1),
            this.onPause();
            var t = 90 * this.rotationDir,
            e = c.random(0, 360);
            Laya.Tween.to(this.mMeshBot.transform, {
                localRotationEulerX: t,
                localRotationEulerZ: e
            },
            1e3),
            fc.framework.Device.vibrateShort(),
            this.healthBar && this.healthBar.setActive(!1),
            this.owner.timerOnce(2e3, this, () =>{
                r.data.gameFinish || (this.setColliderEnable(!0), k.Instance().resetBrickByColorId(this.mColorId), this.healthBar && this.healthBar.setActive(!0), this.mHp = this.mTotalHp, this.sprite3d.transform.localRotationEuler = new Laya.Vector3(0, c.random(0, 360), 0), this.mMeshBot.transform.localRotationEuler = new Laya.Vector3(0, -90, 0), this.onResume(), this.collider3d && (this.collider3d.enabled = !1), this.owner.timerOnce(1e3, this, () =>{
                    this.collider3d && (this.collider3d.enabled = !0)
                }))
            })
        }
        onDie() {
            super.onDie(),
            this.setColliderEnable(!1);
            var t = 90 * this.rotationDir,
            e = c.random(0, 360);
            Laya.Tween.to(this.mMeshBot.transform, {
                localRotationEulerX: t,
                localRotationEulerZ: e
            },
            1e3),
            fc.framework.Device.vibrateShort(),
            this.healthBar && this.healthBar.setActive(!1),
            this.owner.timerOnce(2e3, this, () =>{
                this.healthBar && this.healthBar.setActive(!1),
                this.sprite3d.active = !1
            })
        }
        onWin() {
            super.onWin()
        }
        initEvent() {
            super.initEvent()
        }
        removeEvent() {
            super.removeEvent()
        }
        onDestroy() {
            super.onDestroy()
        }
        startGame() {
            this.playRunAni()
        }
        switchPlayer(t, e) {
            console.log("switchPlayer" + t + e);
            t = e.prefab;
            this.changePlayer(t)
        }
        changePlayer(t) {
            console.log("changePlayer" + t),
            -1 != t.indexOf("character") ? (c.activeAllChild(this.mHat3d, !1), this.mHat3d.getChildByName(t).active = !0) : (c.activeAllChild(this.mWeapon3d, !1), this.mWeaponLeves = this.mWeapon3d.getChildByName(t), this.mWeaponLeves.active = !0, c.activeAllChild(this.mWeaponLeves, !1), this.mWeaponLeves.getChildAt(this.lv - 1).active = !0, this.mTrail = this.mWeaponLeves.getChildAt(this.lv - 1).getChildByName("Trail"), this.mTrail.clear())
        }
        initPlayer() {
            c.activeAllChild(this.mHat3d, !1),
            this.mHat3d.getChildAt(c.random(0, fc.framework.GameFrame.goodsCfg[0].length)).active = !0,
            c.activeAllChild(this.mWeapon3d, !1),
            this.mWeaponLeves = this.mWeapon3d.getChildAt(c.random(0, fc.framework.GameFrame.goodsCfg[1].length)),
            this.mWeaponLeves.active = !0,
            c.activeAllChild(this.mWeaponLeves, !1),
            this.mWeaponLeves.getChildAt(this.lv - 1).active = !0,
            this.mTrail = this.mWeaponLeves.getChildAt(this.lv - 1).getChildByName("Trail"),
            this.mTrail.clear(),
            this.mColliderWeapon.transform.localScaleZ = m.WeaponScale_Lv[this.lv - 1],
            this.mColliderBody.transform.localScale = new Laya.Vector3(m.Scale_Lv[this.lv - 1], m.Scale_Lv[this.lv - 1], m.Scale_Lv[this.lv - 1]),
            this.mMeshBot.transform.localScale = new Laya.Vector3(m.Scale_Lv[this.lv - 1], m.Scale_Lv[this.lv - 1], m.Scale_Lv[this.lv - 1]),
            this.sprite3d.transform.localRotationEuler = new Laya.Vector3(0, c.random(0, 360), 0),
            this.mMeshBot.transform.localRotationEuler = new Laya.Vector3(0, -90, 0);
            var t = m.MaterialPath + m.skin_mat[this.mColorId];
            c.changMat(t, this.mMeshBot.getChildByName("MeshBot_01").meshRenderer)
        }
        onResume() {
            r.data.gameFinish || super.onResume()
        }
        onPause() {
            super.onPause()
        }
        removeEffect(t) {
            f.Instance().removeSpriteEffect(t)
        }
        move(t) {
            if (!t || null == t || 500 < Laya.timer.delta) return this.movevelocity.x = 0,
            this.movevelocity.z = 0,
            void this.moveDir.setValue(0, 0, 0);
            var e;
            0 == t.x && 0 == t.z || t.x == this.movevelocity.x && t.z == this.movevelocity.z || (Laya.Vector3.normalize(t, t), this.moveDir.x = t.x, this.moveDir.z = t.z, e = fc.framework.GameFrame.gameCfg.aimoveSpeed * Laya.timer.delta * .001, this.movevelocity.x = -t.x * e, this.movevelocity.y = 0, this.movevelocity.z = -t.z * e)
        }
        onUpdate() {
            if (! (500 < Laya.timer.delta || this.isPause)) {
                let t = this.mtransform.position.clone();
                var a = this.movevelocity.clone(),
                a = (t.z += a.z, t.x += a.x, this.mtransform.position = t, 0 == this.moveDir.x && 0 == this.moveDir.z && this.move(null), fc.framework.GameFrame.gameCfg.rotationSpeed * Laya.timer.delta * .001 * this.rotationDir);
                let e = new Laya.Vector3;
                e.y = a,
                this.rotationSprite3d(e)
            }
        }
        onLateUpdate() {
            if (! (500 < Laya.timer.delta || this.isPause || this.isDie)) {
                var t = r.data.playRankList;
                for (let e = 0; e < t.length; e++) {
                    var a = t[e];
                    if (a.colorId == this.mColorId) {
                        a = a.percent,
                        0 == e && this.rank != e && 10 < a && this.healthBar.setEmoji(!0),
                        0 == e ? this.mCrown.active = !0 : this.mCrown.active = !1,
                        this.rank = e;
                        let t = 1;
                        a < 20 ? t = 1 : 20 <= a && a < 30 ? t = 2 : 30 <= a && a < 40 ? t = 3 : 40 <= a && (t = 4),
                        t > this.lv && -1 == fc.platform.PlatformConfig.platformTag.indexOf("iptv") && (this.mUpEffect.active = !0, this.owner.timerOnce(1e3, this, () =>{
                            this.mUpEffect.active = !1
                        },
                        null, !1)),
                        this.lv != t && (this.lv = t, c.activeAllChild(this.mWeaponLeves, !1), this.mWeaponLeves.getChildAt(this.lv - 1).active = !0, this.mTrail = this.mWeaponLeves.getChildAt(this.lv - 1).getChildByName("Trail"), this.mTrail.clear(), this.mColliderWeapon.transform.localScaleZ = m.WeaponScale_Lv[this.lv - 1], a = new Laya.Vector3(m.Scale_Lv[this.lv - 1], m.Scale_Lv[this.lv - 1], m.Scale_Lv[this.lv - 1]), Laya.Tween.clearAll(this.mMeshBot.transform), Laya.Tween.to(this.mMeshBot.transform, {
                            localScaleX: a.x,
                            localScaleY: a.y,
                            localScaleZ: a.z
                        },
                        300, null, Laya.Handler.create(this, () =>{
                            this.mColliderBody.transform.localScale = new Laya.Vector3(m.Scale_Lv[this.lv - 1], m.Scale_Lv[this.lv - 1], m.Scale_Lv[this.lv - 1])
                        })));
                        break
                    }
                }
                this.healthBar.updateTxt(this.name, this.lv, this.mHp / this.mTotalHp),
                r.data.gameFinish ? this.healthBar && this.healthBar.setActive(!1) : this.healthBar && this.healthBar.setActive(!0),
                this.healthBar && this.healthBar.updatePosition(this.mHUDPoint.transform.position),
                2 == r.data.gameMode ? this.healthBar.setHpProgress(!1) : this.healthBar.setHpProgress(!0)
            }
        }
        rotationRole(t) {
            t -= this.sprite3d.transform.rotationEuler.y;
            0 != t && (this.sprite3d.transform.rotate(new Laya.Vector3(0, t, 0), !1, !1), this.sprite3d.transform.getForward(this.dir))
        }
        on3dTriggerEnter(t, e) {
            r.data.gameFinish || this.isDie || (super.on3dTriggerEnter(t, e), (e = t.owner) && e.active && !this.isPause && ("Block_Simple" == e.name && this.collectBrick(e), "Collider_Body" == e.name && this.cutEnemy(e), "Collider_Weapon" == e.name && this.colliderWeapon(e)))
        }
        cutEnemy(t) {
            let e = t.parent.getComponent(y);
            e && e.mColorId != this.mColorId && (e.onDamage(1), this.killCount++)
        }
        colliderWeapon(t) {
            t.parent.getComponent(y) && (this.rotationDir = -this.rotationDir, this.mTrail.clear())
        }
        collectBrick(e) {
            if (e) {
                let t = e.getComponent(u);
                t && t.setStatus(s.fly, this)
            }
        }
        collectGold(t) {}
        getRandomObjectOfRang() {
            var t = k.Instance().getBrickList();
            return 0 < t.length ? t[c.random(0, t.length)].sprite3d: null
        }
    }
    class J extends Laya.Script {
        constructor() {
            super(...arguments),
            this.dir = null,
            this.moveTargetPos = null,
            this.delaytime = 0
        }
        onStart() {
            this.character = this.owner.getComponent(y),
            this.delaytime = 0
        }
        onEnable() {
            this.initEvent()
        }
        onDisable() {
            this.removeEvent()
        }
        initEvent() {}
        removeEvent() {}
        onUpdate() {
            let e = this.character;
            if (e.isLife()) {
                if (0 < this.delaytime) return this.delaytime -= Laya.timer.delta,
                void(this.delaytime <= 0 && (e.isMoveing = !1));
                if (!e.isMoveing) {
                    let t = e.getRandomObjectOfRang();
                    t ? (this.moveTargetPos = t.transform.position.clone(), e.isMoveing = !0) : this.moveTargetPos = null
                }
                var t;
                e && e.isLife() && this.moveTargetPos ? (t = c.vectorDirection(this.moveTargetPos.clone(), e.mtransform.position.clone()), e.move(t), t = e.mtransform.position, Laya.Vector3.distanceSquared(t, this.moveTargetPos) < .2 && (this.delaytime = 100 + c.random(0, 3e3), e.move(null))) : e.move(null)
            }
        }
    }
    class B {}
    B.nickname = ["Huy Quang", "Sa Thư", "Văn Vũ", "Chi Song", "Dũng Nhựt", "Kiên Châu", "Thương Hạ", "Kỳ Phi", "Vân Mộc", "Hà Chế", "Trâm Bùi", "Giàu Mai", "Nhật Hoàng", "Gái Quỳnh", "Vân Ninh"];
    var x = fc.framework.Resource,
    b = fc.plugin.ObjectPool;
    class k {
        constructor() {
            this.playerList = [],
            this.brickList = [],
            this.boradList = [],
            this.startPoints = [],
            this.startPoint = c.ZERO.clone(),
            this.playerTotal = 0,
            this.validRole = [1, 2, 3, 4, 5, 6, 7, 8],
            this.curRole = [],
            this.removeList = []
        }
        static Instance() {
            return null == this.instance && (this.instance = new k),
            this.instance
        }
        getPlayer() {
            return this.player
        }
        init(t) {
            this.parent = t
        }
        getPlayerList() {
            return this.playerList
        }
        clearRootSprite(t) {
            t && this.clearSprite(t, !1)
        }
        clearSubSprite(e) {
            if (e) for (let t = 0; t < e.numChildren; t++) {
                var a = e.getChildAt(t);
                a && this.clearSprite(a, !1)
            }
        }
        clearSprite(e, a = !0) {
            if (e) for (; 0 < e.numChildren;) {
                let t = e.getChildAt(0);
                var i = t.getComponents(Laya.Script3D);
                if (i) for (let e = 0; e < i.length; e++) {
                    let t = i[e];
                    t && t.destroy()
                }
                var s = t.getComponents(Laya.Script);
                if (s) for (let e = 0; e < s.length; e++) {
                    let t = s[e];
                    t && t.destroy()
                }
                if (t.active = !1, a) b.recoverSprite3d(t),
                e.removeChild(t);
                else {
                    let e = t.getComponent(Laya.Rigidbody3D);
                    if (e) {
                        let t = e.colliderShape;
                        t && t.mesh && (t.mesh.destroy(), e.destroy())
                    }
                    t.removeSelf(),
                    t.destroy(!0)
                }
            }
        }
        initStageById(t, e) {
            this.removeList = [],
            this.playerList = [],
            this.brickList = [],
            this.startPoints = [],
            this.boradList = [],
            this.playerTotal = 0;
            this.stageRoot3d = this.parent.getChildByName("Stage"),
            this.clearSprite(this.stageRoot3d),
            this.playerRoot3d = this.parent.getChildByName("Players"),
            this.clearSprite(this.playerRoot3d),
            this.brickRoot3d = this.parent.getChildByName("Bricks"),
            this.clearSprite(this.brickRoot3d),
            this.mStagedata = r.data.getStageData(t);
            for (let t = 0; t < this.mStagedata.datas.length; t++) {
                var a, i = this.mStagedata.datas[t];
                "StartPoint_Player" == i.name ? (this.startPoints.push(new Laya.Vector3(i.posX / 100, i.posY / 100, i.posZ / 100)), this.playerTotal++) : (a = this.createSprite3dByPosData(i), this.stageRoot3d.addChild(a), "Board" == i.name && this.boradList.push(a))
            }
            t = c.random(0, this.startPoints.length);
            this.startPoint = this.startPoints[t],
            this.startPoints.splice(t, 1),
            e && e.run()
        }
        loadBrick(t) {
            var s = t;
            let o = 0;
            for (let e = 0; e < this.boradList.length; e++) {
                let t = this.boradList[e];
                var a = t.transform.getWorldLossyScale().x,
                i = t.transform.getWorldLossyScale().z,
                r = Math.floor( + a),
                n = Math.floor( + i),
                l = new Laya.Vector3(t.transform.localPosition.x + .5 * a - .5, 0, t.transform.localPosition.z + .5 * i - .5),
                h = t.transform.rotationEuler.clone();
                o += r * n;
                for (let e = 0; e < r; e++) for (let t = 0; t < n; t++) {
                    var c = new Laya.Vector3(l.x - +e, l.y, l.z - +t);
                    Laya.stage.frameOnce((e + 1) * (t + 1), this, (t, e) =>{
                        let a = this.createSprite3d(m.Sprite3d_Brick, m.Sprite3d_Brick, this.brickRoot3d),
                        i = (a.transform.localPosition = t, a.transform.rotationEuler = e, a.active = !0, this.removeComponent(a), a.addComponent(u));
                        i.originPos = t.clone(),
                        i.originParent = this.brickRoot3d,
                        i.mColorId = d.Zero,
                        this.brickList.push(i),
                        .95 * o < this.brickList.length && s && (s.run(), s = null)
                    },
                    [c, h], !1)
                }
            }
            console.log("总方块:", o)
        }
        setBrickSkin(t) {
            if (t) for (let t = 0; t < this.brickList.length; t++) this.brickList[t] && this.brickList[t].sprite3d && this.brickList[t]
        }
        initBrickColor() {}
        getBrickList() {
            return this.brickList
        }
        getBrickByColorId(e) {
            let a = [];
            for (let t = 0; t < this.brickList.length; t++) {
                var i = this.brickList[t];
                i && i.mColorId == e && a.push(i)
            }
            return a
        }
        resetBrickByColorId(t) {
            var a = this.getBrickByColorId(t);
            for (let e = 0; e < a.length; e++) {
                let t = a[e];
                t && t.setColorId(d.Zero)
            }
        }
        getBrickByNoColorId(e) {
            let a = [];
            for (let t = 0; t < this.brickList.length; t++) {
                var i = this.brickList[t];
                i && i.mColorId != e && a.push(i)
            }
            return a
        }
        getPlayerRank() {
            let a = [];
            for (let e = 0; e < this.playerList.length; e++) {
                let t = {};
                var i = this.playerList[e];
                t.name = i.name,
                t.colorId = i.mColorId,
                t.isDie = i.isDie,
                t.percent = i.isDie ? -1 : Math.floor(this.getBrickByColorId(i.mColorId).length / this.brickList.length * 100),
                t.killcount = i.killCount,
                a.push(t)
            }
            return 2 == r.data.gameMode ? a.sort(function(t, e) {
                return e.killcount - t.killcount
            }) : a.sort(function(t, e) {
                return e.percent - t.percent
            }),
            a
        }
        sortPlank() {}
        createSprite3dByPosData(t, e = "") {
            e = 0 < e.length ? e: t.name,
            console.log("resourceName", e),
            e = x.loadSprite3d(e);
            let a = b.getSprite3d(e);
            return a.name = t.name,
            a.active = !0,
            a.transform.position = new Laya.Vector3(t.posX / 100, t.posY / 100, t.posZ / 100),
            a.transform.rotationEuler = new Laya.Vector3(t.rotationX / 100, t.rotationY / 100, t.rotationZ / 100),
            a.transform.setWorldLossyScale(new Laya.Vector3(t.scaleX / 100, t.scaleY / 100, t.scaleZ / 100)),
            a
        }
        createSprite3dByPosDataAsyn(s, t, e = "") {
            e = 0 < e.length ? e: s.name;
            x.load3dResAsyn(c.getBaseURL(e, "", "lh"), Laya.Handler.create(this, (t, e, a) =>{
                let i = b.getSprite3d(a);
                i.name = t.name,
                i.active = !0,
                i.transform.position = new Laya.Vector3(t.posX / 100, t.posY / 100, t.posZ / 100),
                i.transform.rotationEuler = new Laya.Vector3(s.rotationX / 100, s.rotationY / 100, s.rotationZ / 100),
                i.transform.setWorldLossyScale(new Laya.Vector3(t.scaleX / 100, t.scaleY / 100, t.scaleZ / 100)),
                e && e.runWith(i)
            },
            [s, t]), null, null)
        }
        createSprite3d(t, e, a) {
            e = 0 < e.length ? e: t,
            t = x.loadSprite3d(t);
            let i = b.getSprite3d(t);
            return i.name = e,
            i.active = !0,
            a.addChild(i),
            i
        }
        createSprite3dAsyn(t, e, s, a) {
            x.load3dResAsyn(c.getBaseURL(t, "", "lh"), Laya.Handler.create(this, (t, e, a) =>{
                let i = b.getSprite3d(a);
                i.name = t,
                i.active = !0,
                s.addChild(i),
                e && e.runWith(i)
            },
            [e, a]), null, null)
        }
        createOtherSprite3dAsyn(t, e, a, s, i) {
            g.loadSprite3dAsyn(t, e, Laya.Handler.create(this, (t, e, a) =>{
                let i = g.getSprite3d(a);
                i.name = t,
                i.active = !0,
                s.addChild(i),
                e && e.runWith(i)
            },
            [a, i]), null)
        }
        createOtherSprite3d(t, e, a, i) {
            t = g.loadSprite3d(t, e);
            let s = g.getSprite3d(t);
            return s.name = a,
            s.active = !0,
            i.addChild(s),
            s
        }
        initPlayer() {
            let t = this.parent.getChildByName(m.Sprite3d_Player),
            e = (t && (t.removeSelf(), t.destroy(!0)), (t = this.createOtherSprite3d(g.threeDResRootPath3, m.Sprite3d_Player, m.Sprite3d_Player, this.parent)).transform.localPosition = new Laya.Vector3(0, 0, 0), this.removeComponent(t), t.addComponent(_));
            return e.setScene3d(this.parent),
            t.active = !0,
            e.isPause = !0,
            t.addComponent(T),
            t.addComponent(z),
            this.player = e
        }
        initPlayerAsyn(t) {
            this.playerRoot3d = this.parent.getChildByName("Players"),
            this.clearSprite(this.playerRoot3d),
            this.curRole = [],
            this.validRole = [1, 2, 3, 4, 5, 6, 7, 8],
            this.createSprite3dAsyn(m.Sprite3d_Player, m.Sprite3d_Player, this.playerRoot3d, Laya.Handler.create(this, (t, e) =>{
                let a = e,
                i = (a.transform.position = this.startPoint, this.removeComponent(a), a.addComponent(_));
                a.addComponent(z),
                i.setScene3d(this.parent),
                a.active = !0,
                i.name = "Arcade";
                var e = c.random(0, this.validRole.length),
                s = this.validRole[e];
                this.validRole.splice(e, 1),
                this.curRole.push(s),
                i.mColorId = s,
                i.isPause = !0,
                this.player = i,
                this.playerList.push(i),
                t && t.runWith(i)
            },
            [t]))
        }
        initAi() {
            let e = this.playerTotal - 1;
            0 != r.data.gameMode && (e = Math.min(4, this.playerTotal - 1));
            var a = this.validRole.concat(),
            i = this.startPoints.concat();
            for (let t = 0; t < e; t++) {
                let t = this.createSprite3d(m.Sprite3d_Player, m.Sprite3d_Ai, this.playerRoot3d);
                var s = c.random(0, i.length),
                o = i[s];
                t.transform.position = o,
                i.splice(s, 1),
                this.removeComponent(t);
                let e = t.addComponent(X);
                t.addComponent(J),
                e.setScene3d(this.parent),
                t.active = !0,
                e.name = B.nickname[Math.floor(Math.random() * B.nickname.length)];
                o = c.random(0, a.length),
                s = a[o];
                a.splice(o, 1),
                this.curRole.push(s),
                console.log("colorId", s),
                e.mColorId = s,
                e.isPause = !0,
                this.playerList.push(e)
            }
        }
        remove(e) {
            let t = this.playerList.indexOf(e);
            if ( - 1 != t && this.playerList.splice(t, 1), -1 != (t = this.removeList.indexOf(e)) && this.removeList.splice(t, 1), e && e.sprite3d) {
                e.healthBar && (e.healthBar.setActive(!1), P.recover(e.healthBar));
                let t = e.sprite3d;
                this.removeComponent(t),
                t.active = !1,
                t.removeSelf(),
                t.destroy(!0)
            }
        }
        removeBrick(e) {
            var t = this.brickList.indexOf(e);
            if ( - 1 != t && this.brickList.splice(t, 1), e && e.sprite3d) {
                let t = e.sprite3d;
                this.removeComponent(t),
                t.active = !1,
                t.removeSelf(),
                t.destroy(!0)
            }
        }
        removefromlist(t) {
            let e = this.playerList.indexOf(t); - 1 != e && this.playerList.splice(e, 1),
            -1 == (e = this.removeList.indexOf(t)) && this.removeList.push(t)
        }
        onDestroy() {
            for (let e = this.playerList.length - 1; 0 <= e; e--) {
                const a = this.playerList[e];
                let t = a.sprite3d;
                a.healthBar && (a.healthBar.setActive(!1), P.recover(a.healthBar)),
                this.playerList[e] = null,
                a.destroy(),
                this.removeComponent(t),
                t.active = !1,
                b.recoverSprite3d(t)
            }
            for (let e = this.removeList.length - 1; 0 <= e; e--) {
                const i = this.removeList[e];
                let t = i.sprite3d;
                this.removeList[e] = null,
                i.destroy(),
                this.removeComponent(t),
                t.active = !1,
                b.recoverSprite3d(t)
            }
            for (let e = this.brickList.length - 1; 0 <= e; e--) {
                const s = this.brickList[e];
                let t = s.sprite3d;
                t && (this.brickList[e] = null, s.destroy(), this.removeComponent(t), t.active = !1, b.recoverSprite3d(t))
            }
            this.removeList = [],
            this.playerList = [],
            this.brickList = [],
            this.startPoints = [],
            this.clearSprite(this.stageRoot3d),
            this.clearSprite(this.playerRoot3d),
            this.clearSprite(this.brickRoot3d)
        }
        removeComponent(t) {
            if (t) {
                var a = t.getComponents(Laya.Script3D);
                if (a) for (let e = 0; e < a.length; e++) {
                    let t = a[e];
                    t && t.destroy()
                }
                var i = t.getComponents(Laya.Script);
                if (i) for (let e = 0; e < i.length; e++) {
                    let t = i[e];
                    t && t.destroy()
                }
            }
        }
    }
    k.instance = null;
    class Z extends fc.plugin.BaseView {
        constructor() {
            super(),
            this.isLoading = !1
        }
        onAwake() {
            super.onAwake(),
            Laya.stage.on(o.HIDE_GUIDE, this, this.hideGuide),
            Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onTouchStart),
            Laya.stage.on(o.Loading_Success, this, this.loadingSuccess)
        }
        onEnable() {
            super.onEnable()
        }
        onStart() {
            Laya.stage.event(fc.define.Event.GOLD_UPDATE),
            A.Instance().init(this.owner, this.gameJoy, this.joyRing, this.joyDot),
            this.joyRing.visible = !1,
            this.joyDot.visible = !1,
            this.isLoading = !1,
            r.data.isLoading || (this.isLoading = !0, this.initRank()),
            this.owner.updateZOrder()
        }
        loadingSuccess() {
            this.isLoading = !0,
            this.initRank()
        }
        initRank() {
            c.clearNode(this.rankBox);
            var e = k.Instance().getPlayerList();
            for (let t = 0; t < e.length; t++) {
                var a = e[t].mColorId,
                i = Laya.Pool.getItemByCreateFun("rankui", this.rankPre.create, this.rankPre);
                i.visible = !0,
                i.skin = m.rank_img[a],
                i.width = 200,
                i.y = 60 * t,
                i.getChildByName("txt").text = e[t].name,
                i.getChildByName("crown").visible = !1,
                this.rankBox.addChild(i)
            }
        }
        onUpdate() {
            if (!r.data.gameFinish && this.isLoading && r.data.playRankList.length == this.rankBox.numChildren) for (let a = 0; a < r.data.playRankList.length; a++) {
                var i = r.data.playRankList[a];
                for (let t = 0; t < this.rankBox.numChildren; t++) {
                    let e = this.rankBox.getChildAt(t);
                    if (e.skin == m.rank_img[i.colorId]) {
                        if (i.isDie) {
                            e.visible = !1;
                            break
                        }
                        e.y = 60 * a,
                        e.visible = !0;
                        let t = e.getChildByName("txt");
                        2 == r.data.gameMode ? (e.width = c.clamp(5 * i.killcount + 200, 200, 550), t.text = i.name + " defeat " + i.killcount) : (e.width = c.clamp(3.5 * i.percent + 200, 200, 550), t.text = i.name + " " + i.percent + "%"),
                        0 == a ? (t.x = 60, e.getChildByName("crown").visible = !0) : (t.x = 20, e.getChildByName("crown").visible = !1);
                        break
                    }
                }
            }
        }
        onDisable() {
            super.onDisable()
        }
        onDestroy() {
            super.onDestroy(),
            this.showGameJoy(!1),
            Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onTouchStart),
            Laya.stage.off(o.HIDE_GUIDE, this, this.hideGuide),
            Laya.stage.off(o.Loading_Success, this, this.loadingSuccess),
            c.clearNode(this.rankBox)
        }
        onTouchStart(t) {
            fc.framework.GameFrame.resume(),
            Laya.stage.event(o.Player_Run, this),
            Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onTouchStart)
        }
        hideGuide() {
            this.showGameJoy(!0)
        }
        gameFailed() {
            this.showGameJoy(!1)
        }
        showGameJoy(t) {
            t && !this.joyRing.visible ? A.Instance().initEvent() : t || A.Instance().removeEvent(),
            this.joyRing.visible = t,
            this.joyDot.visible = t
        }
    }
    class K extends Laya.Script {
        constructor() {
            super()
        }
        onAwake() {
            super.onAwake(),
            this.owner.on(Laya.Event.CLICK, this, this.onStartGame),
            !r.data.getGameLock(2) && -1 != fc.platform.PlatformConfig.platformTag.indexOf("iptv") ? this.owner.getChildByName("txt").text = "800 coins unlock": this.owner.getChildByName("txt").text = 0 < r.data.getGameScore(2) ? "Best:" + r.data.getGameScore(2) + "defeat": ""
        }
        onDestroy() {
            this.owner.on(Laya.Event.CLICK, this, this.onStartGame)
        }
        playGame() {
            r.data.gameMode = 2,
            fc.framework.GameFrame.go2Game(),
            fc.framework.GameFrame.closeView("Home")
        }
        onStartGame() {
            fc.framework.GameFrame.playClickSound(),
            -1 != fc.platform.PlatformConfig.platformTag.indexOf("iptv") ? r.data.getGameLock(2) ? 
            this.playGame() : 800 <= r.data.gameGold ? (r.data.gameGold = -800, r.data.setGameLock(1, 2), this.playGame()) : 
            fc.framework.GameFrame.showToastMsg("Thiếu xu!") : 
            (Laya.MouseManager.enabled = !0, this.playGame())
			/* (Laya.MouseManager.enabled = !1, gameapi.playReward(
            () =>{
                this.playGame(),
                Laya.MouseManager.enabled = !0
            })) */
			console.log("567");
        }
    }
    class q extends Laya.Script {
        constructor() {
            super()
        }
        onAwake() {
            super.onAwake(),
            this.owner.on(Laya.Event.CLICK, this, this.onStartGame),
            !r.data.getGameLock(1) && -1 != fc.platform.PlatformConfig.platformTag.indexOf("iptv") ? this.owner.getChildByName("txt").text = "1000 coins unlock": this.owner.getChildByName("txt").text = 0 < r.data.getGameScore(1) ? "Best: " + r.data.getGameScore(1) + "%": ""
        }
        onDestroy() {
            this.owner.on(Laya.Event.CLICK, this, this.onStartGame)
        }
        playGame() {
            r.data.gameMode = 1,
            fc.framework.GameFrame.go2Game(),
            fc.framework.GameFrame.closeView("Home")
        }
        onStartGame() {
            fc.framework.GameFrame.playClickSound();
            -1 != fc.platform.PlatformConfig.platformTag.indexOf("iptv") ? r.data.getGameLock(1) ? 
            this.playGame() : 1e3 <= r.data.gameGold ? (r.data.gameGold = -1e3, r.data.setGameLock(1, 1), this.playGame()) : 
            fc.framework.GameFrame.showToastMsg("Thiếu xu!") : 
            true ? (Laya.MouseManager.enabled = !0, this.playGame()) : fc.framework.GameFrame.showToastMsg(fc.framework.GameFrame.langCfg.novideotxt)
			/* true ? (Laya.MouseManager.enabled = !1, 
                gameapi.playReward(
            ()=> {
                console.error("Gọi lại")
                this.playGame(),
                Laya.MouseManager.enabled = !0
            })) : fc.framework.GameFrame.showToastMsg(fc.framework.GameFrame.langCfg.novideotxt) */
			console.log("2345");
        }
    }
    class Q extends Laya.Script {
        constructor() {
            super()
        }
        onAwake() {
            super.onAwake(),
            Laya.stage.on(o.SHOW_GUIDE, this, this.showGuide),
            Laya.stage.on(o.HIDE_GUIDE, this, this.hideGuide)
        }
        onEnable() {
            super.onEnable()
        }
        onDisable() {
            super.onDisable(),
            Laya.stage.off(o.SHOW_GUIDE, this, this.showGuide),
            Laya.stage.off(o.HIDE_GUIDE, this, this.hideGuide)
        }
        onStart() {
            this.owner && (this.owner.visible = !0);
            for (const t in this.owner) if (Object.prototype.hasOwnProperty.call(this.owner, t)) {
                var e = this.owner[t];
                if (e && "object" == typeof e && e instanceof Laya.FrameAnimation) {
                    let t = e;
                    t.stop(),
                    t.play(0, !0)
                }
            }
        }
        showGuide() {
            this.owner.visible = !0
        }
        hideGuide() {
            this.owner.visible = !1
        }
    }
    class $ extends Laya.Script {
        constructor() {
            super()
        }
        onAwake() {
            super.onAwake()
        }
        onEnable() {
            super.onEnable()
        }
        onStart() {
            if (this.rankBox) {
                var i = this.getRankByColor(k.Instance().getPlayer().mColorId);
                let t = 0,
                a = 1;
                var e = r.data.playRankList[i];
                switch (r.data.gameMode) {
                case 0:
                    a = 1;
                    break;
                case 1:
                    a = 3,
                    t = e.percent;
                    break;
                case 2:
                    a = 2,
                    t = e.killcount
                }
                var s, o = r.data.getGameScore(r.data.gameMode);
                t > o && r.data.setGameScore(t, r.data.gameMode),
                this.rankBox.getChildByName("playerRank").getChildByName("rankVal").text = "Số " + (i + 1);
                for (let e = 0; e < this.rankBox.numChildren - 1; e++) {
                    let t = this.rankBox.getChildAt(e);
                    t.getChildByName("arrow").visible = !1,
                    t.getChildByName("bg").visible = !1,
                    t.getChildByName("gold").text = "" + a * m.Gold_Lv[e],
                    e < r.data.playRankList.length ? (s = r.data.playRankList[e], t.getChildByName("name").text = s.name, i == e && (t.getChildByName("arrow").visible = !0, t.getChildByName("bg").visible = !0)) : t.visible = !1
                }
            }
        }
        onDisable() {
            super.onDisable()
        }
        onDestroy() {
            super.onDestroy()
        }
        getRankByColor(e) {
            for (let t = 0; t < r.data.playRankList.length; t++) if (r.data.playRankList[t].colorId == e) return t;
            return 100
        }
    }
    class tt extends Laya.Script {
        constructor() {
            super()
        }
        onAwake() {
            super.onAwake(),
            this.owner.on(Laya.Event.CLICK, this, this.strongGame)
        }
        onDestroy() {
            this.owner.on(Laya.Event.CLICK, this, this.strongGame)
        }
        strongGame() {
            //fc.framework.GameFrame.playClickSound(), fc.framework.GameFrame.pause(), 
            //this.owner.mouseEnabled = !1;
			this.owner.mouseEnabled = !0,
                Laya.stage.event(o.Strong_Leg),
                fc.framework.GameFrame.resume(),
                fc.framework.GameFrame.showToastMsg("You got super cut!")
            /* gameapi.playReward(() =>{
                this.owner.mouseEnabled = !0,
                Laya.stage.event(o.Strong_Leg),
                fc.framework.GameFrame.resume(),
                fc.framework.GameFrame.showToastMsg("You got super cut!")
            }) */
        }
    }
    class et extends Laya.Script {
        constructor() {
            super(),
            this.cooldown = 0
        }
        onAwake() {
            super.onAwake(),
            Laya.stage.on(o.Loading_Success, this, this.loadingSuccess)
        }
        onDisable() {
            this.owner.clearTimer(this, this.cooldowntime),
            Laya.stage.off(o.Loading_Success, this, this.loadingSuccess)
        }
        onDestroy() {
            this.owner.clearTimer(this, this.cooldowntime),
            Laya.stage.off(o.Loading_Success, this, this.loadingSuccess)
        }
        onStart() {
            r.data.isLoading || this.loadingSuccess()
        }
        loadingSuccess() {
            let t = this.owner.getChildByName("mode");
            switch (r.data.gameMode) {
            case 0:
                this.owner.visible = !1;
                break;
            case 1:
                this.cooldown = 18e4,
                t.text = "Trận chiến";
                break;
            case 2:
                this.cooldown = 24e4,
                t.text = "Sinh tồn"
            }
            this.txt = this.owner.getChildByName("txt"),
            0 < this.cooldown && (this.owner.clearTimer(this, this.cooldowntime), this.txt.text = c.secondToTime(this.cooldown / 1e3), this.owner.timerLoop(1e3, this, this.cooldowntime))
        }
        cooldowntime() {
            this.cooldown -= 1e3,
            this.txt.text = c.secondToTime(this.cooldown / 1e3),
            this.cooldown < 1e4 && L.Instance.playSfx("sfx_time.mp3"),
            this.cooldown <= 0 && (this.owner.clearTimer(this, this.cooldowntime), Laya.stage.event(o.SHOW_SUCCESS))
        }
    }
    class D {
        constructor() {}
        static init() {
            var t = Laya.ClassUtils.regClass;
            t("compUI/Loading.ts", G),
            t("compUI/GamePlayUI.ts", Z),
            t("compUI/BtnKillMode.ts", K),
            t("compUI/BtnPenMode.ts", q),
            t("compUI/InfiniteSlideGuideBox.ts", Q),
            t("compUI/LevelRank.ts", $),
            t("compUI/StrongBtn.ts", tt),
            t("compUI/DownTime.ts", et)
        }
    }
    D.width = 750,
    D.height = 1334,
    D.scaleMode = "fixedauto",
    D.screenMode = "none",
    D.alignV = "top",
    D.alignH = "left",
    D.startScene = "fc-layout/view/AdHomePage.scene",
    D.sceneRoot = "",
    D.debug = !1,
    D.stat = !1,
    D.physicsDebug = !1,
    D.exportSceneToJson = !0,
    D.init();
    var at = fc.platform.PlatformConfig;
    new class {
        constructor() {
            window.Laya3D ? Laya3D.init(D.width, D.height) : Laya.init(D.width, D.height, Laya.WebGL),
            Laya.Physics && Laya.Physics.enable(),
            Laya.DebugPanel && Laya.DebugPanel.enable(),
            Laya.stage.bgColor = "#ffffff",
            Laya.stage.scaleMode = D.scaleMode,
            Laya.stage.screenMode = D.screenMode,
            Laya.URL.exportSceneToJson = D.exportSceneToJson,
            !D.debug && "true" != Laya.Utils.getQueryString("debug") || Laya.enableDebugPanel(),
            D.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(),
            D.stat && Laya.Stat.show(),
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION)
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded))
        }
        onConfigLoaded() {
            at.init(),
            Laya.stage.addComponent(I)
        }
    }
} ();