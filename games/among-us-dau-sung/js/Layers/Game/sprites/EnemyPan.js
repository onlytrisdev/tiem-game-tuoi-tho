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
var EnemyPan = /** @class */ (function (_super) {
    __extends(EnemyPan, _super);
    function EnemyPan(properties) {
        var _this = _super.call(this) || this;
        /**
         * 旋转
         */
        _this.m_status = EnemyStatus.WaitFire;
        _this.properties = properties;
        _this.bar.value = _this.properties.currentHP / _this.properties.maxHP;
        return _this;
    }
    EnemyPan.prototype.tryExecBehaviors = function () { };
    EnemyPan.prototype.isbulletHit = function (hiter) {
        if (!this.visible)
            return false;
        this.anchorX = this.anchorY = 0.5;
        var parent = hiter.parent;
        var pos = parent.localToGlobal(Laya.Point.TEMP.setTo(hiter.x, hiter.y));
        if (this.hitTestPoint(pos.x, pos.y)) {
            this.shoot.play(0, false);
            Audios.hit_01();
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
                this.properties.status = EnemyPropertiesStatus.OUT;
                this.m_status = EnemyStatus.Dead;
                Dispatcher.event(Events.GAME_ENEMY_DEAD, [this]);
            }
            return true;
        }
        return false;
    };
    EnemyPan.prototype.tryFire = function (x, y) { };
    return EnemyPan;
}(ui.Components.EnemyPanUI));
