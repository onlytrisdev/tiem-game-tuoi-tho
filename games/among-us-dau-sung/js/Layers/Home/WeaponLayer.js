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
 * LobbyView
 * @author XuJian
 */
var WeaponLayer = /** @class */ (function (_super) {
    __extends(WeaponLayer, _super);
    function WeaponLayer() {
        var _this = _super.call(this) || this;
        _this.m_selected = null;
        _this.m_testIndex = -1;
        _this._index = -1;
        _this.closeOnSide = false;
        _this.setBackgroudnColor(Laya.stage.bgColor);
        _this.weapons.vScrollBarSkin = '';
        _this.role.setProperties(new RoleProperties());
        if (RoleProperties.hasTestWeapon) {
            _this._index = WeaponConfig.indexOfId(RoleProperties.testWeaponId);
        }
        else {
            var gunDao = dao.find(GunDao);
            var used_gun = gunDao.getRoleUsedGun();
            if (used_gun) {
                _this._index = WeaponConfig.indexOfId(used_gun.id);
            }
        }
        _this.weapons.array = WeaponConfig.configs;
        _this.weapons.renderHandler = new Laya.Handler(_this, _this.onRenderWeapons);
        _this.btnAttackUp.on(Laya.Event.CLICK, _this, _this.onAttackUp);
        _this.btnShootUp.on(Laya.Event.CLICK, _this, _this.onShootUp);
        _this.btnBulletUp.on(Laya.Event.CLICK, _this, _this.onBulletUp);
        _this.btnFreeAttackUp.on(Laya.Event.CLICK, _this, _this.onFreeAttackUp);
        _this.btnFreeShootUp.on(Laya.Event.CLICK, _this, _this.onFreeShootUp);
        _this.btnFreeBulletUp.on(Laya.Event.CLICK, _this, _this.onFreeBulletUp);
        _this.refresh();
        _this.weapons.scrollTo(_this._index);
        return _this;
    }
    WeaponLayer.prototype.onResize = function () {
    };
    WeaponLayer.prototype.onExit = function () {
    };
    WeaponLayer.prototype.onOpened = function () {
        // if(patform.isWX){
        //     banner_manager.hide();
        //     banner_manager.show();
        // }
        var guideDao = dao.find(GuideDao);
        if (guideDao.index === 1) {
            var guide = new Guide();
            guide.step(this);
            guide.popup();
        }
    };
    WeaponLayer.prototype.onRenderWeapons = function (cell, index) {
        var data = cell.dataSource;
        var name = cell.getChildByName("txtName");
        var diamndContainer = cell.getChildByName("diamndContainer");
        var diamndLabel = diamndContainer.getChildByName("diamndLabel");
        var message = cell.getChildByName("message");
        var max = cell.getChildByName("max");
        var icon = cell.getChildByName("icon");
        var border = cell.getChildByName("border");
        var btn = cell.getChildByName("btn");
        var attack = cell.getChildByName("attack");
        var shoot = cell.getChildByName("shoot");
        var bullet = cell.getChildByName("bullet");
        diamndContainer.visible = false;
        message.visible = false;
        btn.visible = true;
        btn.offAll(Laya.Event.CLICK);
        icon.skin = data.skin;
        name.text = data.name;
        var gunDao = dao.find(GunDao);
        var stage = dao.find(StageDao).stage;
        var own_gun = gunDao.getRoleGunById(data.id);
        var powerLevel = 20;
        var shootLevel = 3;
        var bulletLevel = 3;
        if (own_gun) {
            btn.skin = "commons/button_equip.png";
            max.visible = false;
            powerLevel = own_gun.powerLevel;
            shootLevel = own_gun.shootLevel;
            bulletLevel = own_gun.bulletLevel;
            btn.on(Laya.Event.CLICK, this, this.onChangeWeapon, [data.id]);
        }
        else {
            if ((this.m_testIndex === -1 && !RoleProperties.hasTestWeapon && data.stage > 0 && stage < data.stage) || this.m_testIndex === index) {
                this.m_testIndex = index;
                btn.skin = "commons/button_test.png";
                btn.on(Laya.Event.CLICK, this, this.onTestWeapon, [data.id]);
            }
            else {
                if (stage >= data.stage && data.stage > 0) {
                    btn.skin = "commons/button_buy.png";
                    btn.on(Laya.Event.CLICK, this, this.onBuyWeapon, [data.id]);
                    diamndContainer.visible = true;
                    diamndLabel.text = data.cost + "";
                }
                else {
                    btn.visible = false;
                    message.text = data.stageLable;
                    max.visible = true;
                    message.visible = true;
                }
            }
        }
        attack.text = data.powers[powerLevel][0] + "";
        shoot.text = data.shoots[shootLevel][0] + "";
        bullet.text = data.bullets[bulletLevel][0] + "";
        if (RoleProperties.hasTestWeapon && RoleProperties.testWeaponId === data.id) {
            btn.visible = false;
        }
        else {
            var used_gun = gunDao.getRoleUsedGun();
            if (used_gun && used_gun.id === data.id) {
                btn.visible = false;
            }
        }
        border.visible = this._index === index;
        cell.on(Laya.Event.CLICK, this, this.onCellSected, [index]);
    };
    WeaponLayer.prototype.onCellSected = function (index) {
        this._index = index;
        this.weapons.refresh();
        this.refresh();
    };
    WeaponLayer.prototype.refresh = function () {
        var data = this.weapons.array[this._index];
        if (data) {
            this.role.setWeapon(data.skin);
            var gunDao = dao.find(GunDao);
            var own_gun = gunDao.getRoleGunById(data.id);
            var powerLevel = 20;
            var shootLevel = 3;
            var bulletLevel = 3;
            if (own_gun) {
                this.m_selected_own_gun = own_gun;
                powerLevel = own_gun.powerLevel;
                shootLevel = own_gun.shootLevel;
                bulletLevel = own_gun.bulletLevel;
            }
            this.attackContainer.visible =
                this.freeAttackContainer.visible =
                    this.shootContainer.visible =
                        this.freeShootContainer.visible =
                            this.bulletContainer.visible =
                                this.freeBulletContainer.visible = own_gun !== null;
            this.attackCost.text = data.powers[powerLevel][1] + "";
            this.shootCost.text = data.shoots[shootLevel][1] + "";
            this.bulletCost.text = data.bullets[bulletLevel][1] + "";
            this.attackBar.value = data.powers[powerLevel][0] / 5880;
            this.shootBar.value = (1.5 - data.shoots[shootLevel][0]) / 1.5;
            this.bulletBar.value = data.bullets[bulletLevel][0] / 100;
            this.attackBar.getChildByName("tValue").text = data.powers[powerLevel][0] + "";
            this.shootBar.getChildByName("tValue").text = data.shoots[shootLevel][0] + "";
            this.bulletBar.getChildByName("tValue").text = data.bullets[bulletLevel][0] + "";
            if (powerLevel >= 20) {
                this.attackContainer.visible = false;
                this.freeAttackContainer.visible = false;
            }
            if (shootLevel >= 3) {
                this.shootContainer.visible = false;
                this.freeShootContainer.visible = false;
            }
            if (bulletLevel >= 3) {
                this.bulletContainer.visible = false;
                this.freeBulletContainer.visible = false;
            }
        }
    };
    WeaponLayer.prototype.onAttackUp = function () {
        var attackCost = Number(this.attackCost.text);
        var diamondDao = dao.find(DiamondDao);
        var diamond = diamondDao.diamonds;
        if (attackCost && attackCost > 0 && diamond >= attackCost && this.m_selected_own_gun) {
            this.m_selected_own_gun.powerLevel++;
            if (this.m_selected_own_gun.powerLevel > 20) {
                return;
            }
            diamondDao.addDiamonds(-attackCost);
            var gunDao = dao.find(GunDao);
            gunDao.changeGuns(this.m_selected_own_gun);
            this.refresh();
            this.weapons.refresh();
        }
        else {
            new MessagePop("No More Diamonds!").popup();
        }
    };
    WeaponLayer.prototype.onShootUp = function () {
        var shootCost = Number(this.shootCost.text);
        var diamondDao = dao.find(DiamondDao);
        var diamond = diamondDao.diamonds;
        if (shootCost && shootCost > 0 && diamond >= shootCost && this.m_selected_own_gun) {
            this.m_selected_own_gun.shootLevel++;
            if (this.m_selected_own_gun.shootLevel > 3) {
                return;
            }
            diamondDao.addDiamonds(-shootCost);
            var gunDao = dao.find(GunDao);
            gunDao.changeGuns(this.m_selected_own_gun);
            this.refresh();
            this.weapons.refresh();
        }
        else {
            new MessagePop("No More Diamonds!").popup();
        }
    };
    WeaponLayer.prototype.onBulletUp = function () {
        var bulletCost = Number(this.bulletCost.text);
        var diamondDao = dao.find(DiamondDao);
        var diamond = diamondDao.diamonds;
        if (bulletCost && bulletCost > 0 && diamond >= bulletCost && this.m_selected_own_gun) {
            this.m_selected_own_gun.bulletLevel++;
            if (this.m_selected_own_gun.bulletLevel > 3) {
                return;
            }
            diamondDao.addDiamonds(-bulletCost);
            var gunDao = dao.find(GunDao);
            gunDao.changeGuns(this.m_selected_own_gun);
            this.refresh();
            this.weapons.refresh();
        }
        else {
            new MessagePop("No More Diamonds!").popup();
        }
    };
    WeaponLayer.prototype.onChangeWeapon = function (id) {
        this.m_testIndex = -1;
        RoleProperties.hasTestWeapon = false;
        var gunDao = dao.find(GunDao);
        var owner_gun = gunDao.getRoleGunById(id);
        gunDao.setRoleUsedGun(owner_gun);
        this._index = WeaponConfig.indexOfId(id);
        this.weapons.refresh();
        this.refresh();
    };
    WeaponLayer.prototype.onTestWeapon = function (id) {
        // ad_manager.video(YYG.TYPE.REWARD, YYG.EventHandler.create(this, function () {
            RoleProperties.hasTestWeapon = true;
            RoleProperties.testWeaponId = id;
            var wapon = WeaponConfig.getWeaponById(id);
            new ItemPop(wapon.skin, "Try" + wapon.name).popup();
            this.weapons.refresh();
        // }));
    };
    WeaponLayer.prototype.onBuyWeapon = function (id) {
        var wapon = WeaponConfig.getWeaponById(id);
        var diamondDao = dao.find(DiamondDao);
        if (diamondDao.diamonds >= wapon.cost) {
            diamondDao.addDiamonds(-wapon.cost);
            dao.find(GunDao).addRoleGuns({ id: id, powerLevel: 0, shootLevel: 0, bulletLevel: 0 });
            new ItemPop(wapon.skin, wapon.name).popup();
            this.weapons.refresh();
        }
    };
    WeaponLayer.prototype.onFreeAttackUp = function () {
        // ad_manager.video(YYG.TYPE.REWARD, YYG.EventHandler.create(this, this.doAttackUp));
    };
    WeaponLayer.prototype.doAttackUp = function () {
        if (this.m_selected_own_gun) {
            this.m_selected_own_gun.powerLevel++;
            if (this.m_selected_own_gun.powerLevel > 20) {
                return;
            }
            var gunDao = dao.find(GunDao);
            gunDao.changeGuns(this.m_selected_own_gun);
            this.refresh();
            this.weapons.refresh();
        }
    };
    WeaponLayer.prototype.onFreeShootUp = function () {
        // ad_manager.video(YYG.TYPE.REWARD, YYG.EventHandler.create(this, this.doShootUp));
    };
    WeaponLayer.prototype.doShootUp = function () {
        this.m_selected_own_gun.shootLevel++;
        if (this.m_selected_own_gun.shootLevel > 3) {
            return;
        }
        var gunDao = dao.find(GunDao);
        gunDao.changeGuns(this.m_selected_own_gun);
        this.refresh();
        this.weapons.refresh();
    };
    WeaponLayer.prototype.onFreeBulletUp = function () {
        //(YYG.TYPE.REWARD, YYG.EventHandler.create(this, this.doBulletUp));
    };
    WeaponLayer.prototype.doBulletUp = function () {
        this.m_selected_own_gun.bulletLevel++;
        if (this.m_selected_own_gun.bulletLevel > 3) {
            return;
        }
        var gunDao = dao.find(GunDao);
        gunDao.changeGuns(this.m_selected_own_gun);
        this.refresh();
        this.weapons.refresh();
    };
    return WeaponLayer;
}(ui.Layers.Home.WeaponLayerUI));
