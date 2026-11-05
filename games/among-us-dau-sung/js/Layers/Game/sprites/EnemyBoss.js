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
/**
 * EnemyBoss
 * @author XuJian
 */
var EnemyBoss = /** @class */ (function (_super) {
    __extends(EnemyBoss, _super);
    function EnemyBoss(properties) {
        var _this = _super.call(this) || this;
        _this.m_shootSpeed = 0;
        _this.m_passTime = 0.6;
        _this.m_curBehaviorBeginTime = 0;
        _this.m_curBehaviorFinishTime = 0;
        _this.m_curBehaviorRemainTimes = 0;
        _this.m_curBehaviorIndex = 0;
        /**
         * 旋转
         */
        _this.m_degree = 0;
        _this.m_status = EnemyStatus.WaitFire;
        _this.dir = 1;
        _this.m_rotation = 0;
        _this.anchorX = _this.anchorY = 0.5;
        _this.properties = properties;
        _this.m_shootSpeed = properties.shootSpeed * 1000;
        _this.bar.value = _this.properties.currentHP / _this.properties.maxHP;
        return _this;
    }
    EnemyBoss.prototype.tryExecBehaviors = function () {
        if (this.m_status === EnemyStatus.Dead)
            return;
        this.m_passTime -= 0.0166;
        if (this.m_passTime < 0) {
            this.m_curBehaviorBeginTime += 0.0166;
            this.isCurBehaviorFinish() && this.execBehaviors();
        }
    };
    EnemyBoss.prototype.isCurBehaviorFinish = function () {
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
    EnemyBoss.prototype.getCurBehavior = function () {
        return (this.properties.behaviors[this.m_curBehaviorIndex] || [-1])[0];
    };
    EnemyBoss.prototype.execBehaviors = function () {
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
                this.m_curBehaviorRemainTimes = o, this.m_curBehaviorFinishTime = this.properties.shootSpeed * o;
                this.enterShoot();
                break;
            case 3:
                this.enterWindow();
                break;
            case 4:
                this.enterFillBullet();
                break;
        }
    };
    EnemyBoss.prototype.enterStandby = function () {
        this.leaveWindow();
    };
    EnemyBoss.prototype.leaveWindow = function () {
        this.visible = true;
        Dispatcher.event(Events.GAME_ENEMY_LEAVE_WINDOW, [this.properties.windowIndex]);
    };
    EnemyBoss.prototype.enterShoot = function () {
        var t = this.properties.behaviors[this.m_curBehaviorIndex];
        if (1 == t[2]) {
            this.dir = 1;
        }
        else if (2 == t[2]) {
            this.dir = -1;
        }
    };
    EnemyBoss.prototype.enterWindow = function () {
        this.visible = false;
        Dispatcher.event(Events.GAME_ENEMY_ENTER_WINDOW, [this.properties.windowIndex]);
    };
    EnemyBoss.prototype.enterFillBullet = function () {
    };
    EnemyBoss.prototype.isbulletHit = function (hiter) {
        if (!this.visible)
            return false;
        var t = this;
        var parent = hiter.parent;
        var pos = parent.localToGlobal(Laya.Point.TEMP.setTo(hiter.x, hiter.y));
        if (this.hitTestPoint(pos.x, pos.y)) {
            this.shoot.play(0, false);
            Audios.hit();
            var animation = new Laya.Animation();
            animation.loadAtlas("res/atlas/hits.atlas", null, "cache_hits");
            animation.x = hiter.x;
            animation.y = hiter.y;
            animation.pivot(20, 20);
            parent.addChild(animation);
            animation.on(Laya.Event.COMPLETE, animation, animation.removeSelf);
            animation.play(0, false);
            this.properties.calcDamage(hiter.power);
            this.bar.value = this.properties.currentHP / this.properties.maxHP;
            if (this.properties.currentHP <= 0) {
                Audios.dead();
                this.properties.isAlive = false;
                this.properties.status = EnemyPropertiesStatus.None;
                this.m_status = EnemyStatus.Dead;
                Dispatcher.event(Events.GAME_ENEMY_DEAD, [this]);
            }
            return true;
        }
        return false;
    };
    EnemyBoss.prototype.tryFire = function (x, y) {
        if (this.m_status != EnemyStatus.WaitFire)
            return;
        if (this.getCurBehavior() != 2)
            return;
        this.m_status = EnemyStatus.Firing;
        var pos = this.arm.localToGlobal(new Laya.Point(this.temp.x, this.temp.y), true);
        var offsetX = 1;
        var offsetY = 0;
        var d = new Laya.Point(offsetX, offsetY);
        var RADIAN2EULAR = 180 / Math.PI;
        this.m_rotation += 10 * this.dir;
        var xx = Math.cos(this.m_rotation / RADIAN2EULAR);
        var yy = Math.sin(this.m_rotation / RADIAN2EULAR);
        if (this.m_rotation >= 70) {
            this.dir = -1;
        }
        else if (this.m_rotation <= 0) {
            this.dir = 1;
        }
        var sd = new Laya.Point(d.x * xx - d.y * yy, d.x * yy + d.y * xx);
        var rad = Math.atan2(sd.y, sd.x);
        var degree = rad * 180 / Math.PI;
        //TODO
        this.armPoint.rotation = degree;
        sd.normalize();
        var u = {
            startPos: pos,
            dir: sd,
            power: this.properties.damage,
            rotation: degree,
            gunId: this.properties.gunId,
            owner: this
        };
        var bulletInfos = [];
        bulletInfos.push(u);
        this.fire(bulletInfos);
    };
    EnemyBoss.prototype.fire = function (bulletInfos) {
        this.fireHandler && this.fireHandler.runWith([bulletInfos]);
        this.doShootAction();
    };
    EnemyBoss.prototype.doShootAction = function () {
        this.shoot.play(0, false);
        Laya.timer.once(this.m_shootSpeed, this, function () { this.m_status = EnemyStatus.WaitFire; });
    };
    return EnemyBoss;
}(ui.Components.EnemyBossUI));
