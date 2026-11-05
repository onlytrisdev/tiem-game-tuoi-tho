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
var RoleStatus;
(function (RoleStatus) {
    RoleStatus[RoleStatus["WaitFire"] = 0] = "WaitFire";
    RoleStatus[RoleStatus["Firing"] = 1] = "Firing";
    RoleStatus[RoleStatus["Dead"] = 2] = "Dead";
})(RoleStatus || (RoleStatus = {}));
var GameRole = /** @class */ (function (_super) {
    __extends(GameRole, _super);
    function GameRole() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.m_status = RoleStatus.WaitFire;
        _this.m_shootSpeed = 10e3;
        /**
         * 保护罩
         */
        _this.m_protective = null;
        return _this;
    }
    GameRole.prototype.setProtective = function (value) {
        this.m_protective = value;
    };
    GameRole.prototype.tryFire = function (x, y) {
        // console.log("tryRotation",this.sani);
        this.tryRotation(x, y);
    };
    GameRole.prototype.tryRotation = function (x, y) {
        var pos = this.armContainer.localToGlobal(Laya.Point.TEMP.setTo(this.bulletPos.x, this.bulletPos.y), true);
        var offsetX = x - pos.x;
        var offsetY = y - pos.y;
        var rad = Math.atan2(offsetY, offsetX);
        var degree = rad * 180 / Math.PI;
        if (degree < -90 || degree > 90)
            return;
        if (this.m_status == RoleStatus.Firing)
            return;
        this.bodyContainer.rotation = degree;
        pos = this.armContainer.localToGlobal(Laya.Point.TEMP.setTo(this.bulletPos.x, this.bulletPos.y), true);
        offsetX = x - pos.x;
        offsetY = y - pos.y;
        var d = new Laya.Point(offsetX, offsetY);
        this.m_status = RoleStatus.Firing;
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
                sd.normalize();
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
    GameRole.prototype.fire = function (bulletInfos) {
        this.properties.bulletCurCount--;
        //射击
        Audios.playSound(Audios.SOUNDS[this.properties.gunId]);
        Laya.timer.once(this.m_shootSpeed, this, function () { this.m_status = RoleStatus.WaitFire; });
        this.fireHandler && this.fireHandler.runWith([bulletInfos]);
        this.aciton_shoot.play(0, false);
        Laya.Tween.to(this.bodyContainer, { rotation: 0 }, 0.3e3, Laya.Ease.linearNone, null, 0.3e3, true);
    };
    GameRole.prototype.changeWeaponById = function (weaponId) {
        this.properties.changeWeapon(weaponId);
        this.updateWeapon();
    };
    GameRole.prototype.changeHelmetById = function (helmetId) {
        this.properties.changeHelmet(helmetId);
        this.updateHelmet();
    };
    GameRole.prototype.changeClothById = function (clothId) {
        this.properties.changeCloth(clothId);
        this.updateCloth();
    };
    GameRole.prototype.updateHelmet = function () {
        if (this.properties.helmetId) {
            this.helmet.skin = this.properties.helmeSkin;
            if (this.properties.helmetId === 35) //玉兔
             {
                this.helmet.pos(31, 3);
            }
            else {
                this.helmet.pos(37, 22);
            }
            this.helmet.alpha = 1;
            this.helmet.visible = true;
        }
    };
    GameRole.prototype.updateWeapon = function () {
        this.m_shootSpeed = this.properties.shootSpeed * 1000;
        this.weapon.skin = this.properties.weaponSkin;
        var gunId = this.properties.gunId;
        if (gunId === 11) {
            this.bulletPos.pos(210, 30, true);
            this.fireLight.pos(138, 25, true);
        }
        else if (gunId === 12) {
            this.bulletPos.pos(272, 23, true);
            this.fireLight.pos(195, 18, true);
        }
        else if (gunId === 13) {
            this.bulletPos.pos(305, 10, true);
            this.fireLight.pos(226, 4, true);
        }
        else if (gunId === 14) {
            this.bulletPos.pos(298, 20, true);
            this.fireLight.pos(222, 14, true);
        }
        else if (gunId === 15) {
            this.bulletPos.pos(307, 23, true);
            this.fireLight.pos(242, 17, true);
        }
        else if (gunId === 16) {
            this.bulletPos.pos(300, 20, true);
            this.fireLight.pos(234, 12, true);
        }
        else if (gunId === 17) {
            this.bulletPos.pos(311, 23, true);
            this.fireLight.pos(244, 18, true);
        }
        else if (gunId === 18 || gunId === 21) {
            this.bulletPos.pos(314, 25, true);
            this.fireLight.pos(250, 20, true);
        }
        else if (gunId === 19 || gunId === 20) { //AKM 玉兔
            this.bulletPos.pos(298, 20, true);
            this.fireLight.pos(222, 14, true);
        }
    };
    GameRole.prototype.updateCloth = function () {
        if (this.properties.clothId) {
            this.cloth.skin = this.properties.clothSkin;
            this.cloth.alpha = 1;
            this.cloth.visible = true;
        }
    };
    GameRole.prototype.setProperties = function (properties) {
        this.properties = properties;
        this.updateWeapon();
        this.updateHelmet();
        this.updateCloth();
        var heroDao = dao.find(HeroDao);
        if (heroDao.protective) {
            heroDao.protective = false;
            this.m_protective = new Protective(this);
        }
        this.bar.value = this.properties.hpPercentage();
        this.idle.play(0, false);
    };
    GameRole.prototype.isbulletHit = function (hiter) {
        var t = this;
        var parent = hiter.parent;
        var pos = parent.localToGlobal(Laya.Point.TEMP.setTo(hiter.x, hiter.y));
        if (this.hitTestPoint(pos.x, pos.y)) {
            // return true
            if (this.properties.clothId === 45) {
                Audios.playSound("res/sounds/hit_miaomi.mp3");
            }
            else {
            }
            var animation = new Laya.Animation();
            animation.loadAtlas("res/atlas/hits.atlas", null, "cache_hits");
            animation.x = hiter.x;
            animation.y = hiter.y;
            animation.pivot(20, 20);
            parent.addChild(animation);
            animation.on(Laya.Event.COMPLETE, animation, animation.removeSelf);
            animation.play(0, false);
            // "complete"
            if (this.m_protective) {
                this.m_protective.beAttack();
                if (this.m_protective.life <= 0) {
                    this.m_protective = null;
                }
                return true;
            }
            this.properties.calcDamage(hiter.power);
            this.bar.value = this.properties.hpPercentage();
            if (this.properties.currentHP <= 0) {
                Audios.dead();
                this.m_status = RoleStatus.Dead;
            }
            return true;
        }
        return false;
    };
    GameRole.prototype.bulletPercentage = function () {
    };
    return GameRole;
}(ui.Components.GameRoleUI));
