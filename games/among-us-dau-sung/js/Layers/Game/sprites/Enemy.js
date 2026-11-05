/**
 * BattleRole
 * @author XuJian
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Enemy = /** @class */ (function (_super) {
    __extends(Enemy, _super);
    function Enemy(properties) {
        var _this = _super.call(this) || this;
        /**
         * 旋转
         */
        _this.m_status = EnemyStatus.WaitFire;
        _this.m_passTime = 0.6;
        _this.m_curBehaviorBeginTime = 0;
        _this.m_curBehaviorFinishTime = 0;
        _this.m_curBehaviorRemainTimes = 0;
        _this.m_curBehaviorIndex = 0;
        _this.anchorX = _this.anchorY = 0.5;
        _this.properties = properties;
        if (_this.properties.skin == "normal1") {
            _this.body.skin = "enemys/enemy_body2.png";
            _this.leg.skin = "enemys/enemy_leg2.png";
            _this.arm2.skin = "enemys/enemy_arm2.png";
        }
        else if (_this.properties.skin == "normal2") {
            _this.body.skin = "enemys/enemy_body3.png";
            _this.leg.skin = "enemys/enemy_leg3.png";
            _this.arm2.skin = "enemys/enemy_arm3.png";
        }
        else if (_this.properties.skin == "normal3") {
            _this.body.skin = "enemys/enemy_body4.png";
            _this.leg.skin = "enemys/enemy_leg4.png";
            _this.arm2.skin = "enemys/enemy_arm4.png";
        }
        else if (_this.properties.skin == "normal4") {
            _this.body.skin = "enemys/enemy_body5.png";
            _this.leg.skin = "enemys/enemy_leg5.png";
            _this.arm2.skin = "enemys/enemy_arm5.png";
        }
        // enemy.
        var helmetId = _this.properties.helmetId;
        if (helmetId === 31) {
            _this.helmet.skin = "enemys/enemy_helmet1.png";
        }
        else if (helmetId === 32) {
            _this.helmet.skin = "enemys/enemy_helmet2.png";
        }
        else if (helmetId === 33) {
            _this.helmet.skin = "enemys/enemy_helmet3.png";
        }
        else {
            _this.helmet.visible = false;
        }
        var clothId = _this.properties.clothId;
        if (clothId === 41) {
            _this.cloth.skin = "enemys/enemy_cloth1.png";
        }
        else if (clothId === 42) {
            _this.cloth.skin = "enemys/enemy_cloth2.png";
        }
        else if (clothId === 43) {
            _this.cloth.skin = "enemys/enemy_cloth3.png";
        }
        else {
            _this.cloth.visible = false;
        }
        _this.gun.skin = _this.properties.weaponSkin;
        var gunId = _this.properties.gunId;
        if (gunId === 11) {
            _this.temp.pos(-27, 36, true);
        }
        else if (gunId === 12) {
            _this.temp.pos(-46, 34, true);
        }
        else if (gunId === 13) {
            _this.temp.pos(-53, 30, true);
        }
        else if (gunId === 14) {
            _this.temp.pos(-54, 33, true);
        }
        else if (gunId === 15) {
            _this.temp.pos(-58, 33, true);
        }
        else if (gunId === 16) {
            _this.temp.pos(-56, 33, true);
        }
        else if (gunId === 17) {
            _this.temp.pos(-60, 33, true);
        }
        else if (gunId === 18) {
            _this.temp.pos(-60, 34, true);
        }
        _this.bar.value = _this.properties.currentHP / _this.properties.maxHP;
        return _this;
    }
    Enemy.prototype.isbulletHit = function (hiter) {
        if (!this.visible)
            return false;
        var t = this;
        var parent = hiter.parent;
        var pos = parent.localToGlobal(Laya.Point.TEMP.setTo(hiter.x, hiter.y));
        if (this.hitTestPoint(pos.x, pos.y)) {
            Audios.hit();
            var animation = new Laya.Animation();
            animation.loadAtlas("res/atlas/hits.atlas", null, "cache_hits");
            animation.x = hiter.x;
            animation.y = hiter.y;
            animation.pivot(20, 20);
            parent.addChild(animation);
            animation.on(Laya.Event.COMPLETE, animation, animation.removeSelf);
            animation.play(0, false);
            this.m_curBehaviorRemainTimes--;
            this.properties.calcDamage(hiter.power);
            this.bar.value = this.properties.currentHP / this.properties.maxHP;
            if (this.properties.currentHP <= 0) {
                Audios.dead();
                this.action_die.play(0, false);
                this.properties.isAlive = false;
                this.properties.status = EnemyPropertiesStatus.OUT;
                this.m_status = EnemyStatus.Dead;
                Dispatcher.event(Events.GAME_ENEMY_DEAD, [this]);
            }
            return true;
        }
        return false;
    };
    Enemy.prototype.tryFire = function (x, y) {
        if (this.m_status != EnemyStatus.WaitFire)
            return;
        if (this.getCurBehavior() != 2)
            return;
        if (this.properties.shootSpeed === 0)
            return;
        this.m_status = EnemyStatus.Firing;
        this.runRotation(x, y);
    };
    Enemy.prototype.runRotation = function (x, y) {
        var pos = this.arm.localToGlobal(Laya.Point.TEMP.setTo(this.temp.x, this.temp.y), true);
        var offsetX = pos.x - x;
        var offsetY = pos.y - y;
        var rad = Math.atan2(offsetY, offsetX);
        var degree = rad * 180 / Math.PI;
        this.body.rotation = degree;
        pos = this.arm.localToGlobal(Laya.Point.TEMP.setTo(this.temp.x, this.temp.y), true);
        offsetX = pos.x - x;
        offsetY = pos.y - y;
        var d = new Laya.Point(offsetX, offsetY);
        var bulletInfos = [];
        d.normalize();
        var u = {
            startPos: pos,
            dir: d,
            power: this.properties.damage,
            rotation: degree,
            gunId: this.properties.gunId,
            owner: this
        };
        bulletInfos.push(u);
        if (13 == this.properties.gunId) {
            var r = [-10, 10];
            var RADIAN2EULAR = 180 / Math.PI;
            for (var p = 0; p < r.length; p++) {
                var g = r[p];
                var f = Math.cos(g / RADIAN2EULAR);
                var h = Math.sin(g / RADIAN2EULAR);
                var sd = new Laya.Point(d.x * f - d.y * h, d.x * h + d.y * f);
                bulletInfos.push({
                    startPos: pos,
                    dir: sd,
                    power: this.properties.damage,
                    rotation: degree,
                    gunId: this.properties.gunId,
                    owner: this
                });
            }
        }
        ;
        this.fire(bulletInfos);
    };
    Enemy.prototype.fire = function (bulletInfos) {
        this.fireHandler && this.fireHandler.runWith([bulletInfos]);
        this.doShootAction();
    };
    Enemy.prototype.doShootAction = function () {
        this.shoot.play(0, false);
        Laya.timer.once(this.properties.shootSpeed + 0.8e3, this, function () {
            this.m_status = EnemyStatus.WaitFire;
        });
        Laya.Tween.to(this.body, { rotation: 0 }, 0.3e3, Laya.Ease.linearNone, null, 0, true);
    };
    Enemy.prototype.tryExecBehaviors = function () {
        if (this.m_status === EnemyStatus.Dead)
            return;
        this.m_passTime -= 0.0166;
        if (this.m_passTime < 0) {
            this.m_curBehaviorBeginTime += 0.0166;
            this.isCurBehaviorFinish() && this.execBehaviors();
        }
    };
    Enemy.prototype.isCurBehaviorFinish = function () {
        var e = this.m_curBehaviorFinishTime - this.m_curBehaviorBeginTime <= 0;
        switch (this.getCurBehavior()) {
            case 1:
            case 3:
            case 4:
                return e;
            case 2:
                return this.m_curBehaviorRemainTimes <= 0 && e;
        }
        return true;
    };
    Enemy.prototype.getCurBehavior = function () {
        return (this.properties.behaviors[this.m_curBehaviorIndex] || [-1])[0];
    };
    Enemy.prototype.execBehaviors = function () {
        var e = this.properties.behaviors;
        this.m_curBehaviorIndex == 3 && this.leaveWindow();
        this.m_curBehaviorIndex++, this.m_curBehaviorIndex >= e.length && (this.m_curBehaviorIndex = 0);
        var t = e[this.m_curBehaviorIndex];
        this.m_curBehaviorFinishTime = t[1];
        this.m_curBehaviorBeginTime = 0;
        switch (t[0]) {
            case 1:
                this.enterStandby();
                break;
            case 2:
                var o = t[1];
                this.m_curBehaviorRemainTimes = o;
                this.m_curBehaviorFinishTime = this.properties.shootSpeed * o;
                break;
            case 3:
                this.enterWindow();
                break;
            case 4:
                this.enterFillBullet();
                break;
        }
    };
    Enemy.prototype.enterStandby = function () {
        // this.leaveWindow();
    };
    Enemy.prototype.leaveWindow = function () {
        this.visible = true;
        Dispatcher.event(Events.GAME_ENEMY_LEAVE_WINDOW, [this.properties.windowIndex]);
    };
    Enemy.prototype.enterShoot = function () {
        if (this.getCurBehavior() == 2) {
        }
    };
    Enemy.prototype.enterWindow = function () {
        this.visible = false;
        Dispatcher.event(Events.GAME_ENEMY_ENTER_WINDOW, [this.properties.windowIndex]);
    };
    Enemy.prototype.enterFillBullet = function () {
    };
    return Enemy;
}(ui.Components.EnemyUI));
