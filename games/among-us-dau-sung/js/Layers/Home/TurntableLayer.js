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
var TurntableLayer = /** @class */ (function (_super) {
    __extends(TurntableLayer, _super);
    function TurntableLayer() {
        var _this = _super.call(this) || this;
        _this._arrayList = [
            /**0*/ { type: 1, value: 15 },
            /**1*/ { type: 2, value: 10 },
            /**2 玉兔枪*/ { type: 3, value: 20 },
            /**3*/ { type: 2, value: 6 },
            /**4 钻石30*/ { type: 1, value: 30 },
            /**5 AWM*/ { type: 3, value: 21 },
            /**6*/ { type: 1, value: 20 },
            /**7*/ { type: 4, value: 35 },
        ];
        //转盘格子的总数量
        _this._num = 8;
        //每一个格子的弧度
        _this._perAngel = 360 / 8; //360度除 8个格子
        _this._index = 0;
        //当前的弧度
        _this._curAngel = 0;
        _this._isRolling = false;
        _this.closeOnSide = false;
        _this.btn.on(Laya.Event.CLICK, _this, _this.onTurntableVideo);
        return _this;
    }
    TurntableLayer.prototype.onTurntableVideo = function () {
        if (this._isRolling)
            return;
        // ad_manager.video(YYG.TYPE.REWARD, YYG.EventHandler.create(this, this.onTurntable));
    };
    TurntableLayer.prototype.random = function () {
        var r = utils.random(0, 100);
        if (r < 1) {
            return 5;
        }
        if (r < 15) {
            return 2;
        }
        if (r < 25) {
            return 7;
        }
        if (r < 35) {
            return 4;
        }
        if (r < 45) {
            return 1;
        }
        if (r < 55) {
            return 6;
        }
        if (r < 65) {
            return 3;
        }
        return 0;
    };
    TurntableLayer.prototype.onTurntable = function () {
        if (this._isRolling)
            return;
        this._isRolling = true;
        this._curAngel = this._perAngel * this._index;
        this._index = this.random();
        var offsetAngle = (this._num - this._index) * this._perAngel;
        var rotation = offsetAngle + this._curAngel;
        //不足一圈 + 一圈
        rotation += 360 * Math.floor(Math.random() * 3 + 2);
        //匀速旋转
        var duration = rotation / 300;
        // this.action_roll.play(0,true);
        Laya.Tween.to(this.pan, { rotation: this.pan.rotation + rotation }, duration * 1000, Laya.Ease.sineInOut, Laya.Handler.create(this, this.onTurntableDone));
    };
    TurntableLayer.prototype.onTurntableDone = function () {
        this._isRolling = false;
        // this.action_roll.stop();
        var item = this._arrayList[this._index];
        switch (item.type) {
            case 1:
                dao.find(DiamondDao).addDiamonds(item.value);
                break;
            case 2:
                dao.find(PowerDao).power += item.value;
                new ItemPop("Icons/icon_power.png", "Strength x" + item.value).popup();
                break;
            case 3:
                var weapon = WeaponConfig.getWeaponById(item.value);
                var gunDao = dao.find(GunDao);
                if (weapon && !gunDao.hasWeaponById(item.value)) {
                    gunDao.addRoleGuns({ id: item.value, powerLevel: 0, shootLevel: 0, bulletLevel: 0 });
                    new ItemPop(weapon.skin, weapon.name).popup();
                }
                else {
                    var pop = new ui.Layers.Home.TurntablePopUI();
                    pop.closeHandler = Laya.Handler.create(this, this.onTurntable);
                    pop.popup();
                }
                break;
            case 4:
                var helmet = HelmetConfig.getCongigById(item.value);
                var armorDao = dao.find(ArmorDao);
                if (helmet && !armorDao.hasHelmetByID(item.value)) {
                    armorDao.pushHelmets(item.value);
                    new ItemPop(helmet.skinRes, helmet.name).popup();
                }
                else {
                    var pop = new ui.Layers.Home.TurntablePopUI();
                    pop.closeHandler = Laya.Handler.create(this, this.onTurntable);
                    pop.popup();
                }
                break;
            default:
                break;
        }
        if (this.pan.rotation % 360 === 0) {
            this.pan.rotation = 0;
        }
        this.arrow.rotation = 0;
    };
    return TurntableLayer;
}(ui.Layers.Home.TurntableLayerUI));
