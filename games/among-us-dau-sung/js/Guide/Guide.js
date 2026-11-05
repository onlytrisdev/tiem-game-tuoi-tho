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
var Guide = /** @class */ (function (_super) {
    __extends(Guide, _super);
    function Guide() {
        var _this = _super.call(this) || this;
        _this.closeOnSide = false;
        _this.hand.zOrder = 2;
        _this.popupEffect = null;
        _this.closeEffect = null;
        var touched = new Laya.Sprite();
        touched.width = Laya.stage.width;
        touched.height = Laya.stage.height;
        _this.addChild(touched);
        touched.on(Laya.Event.CLICK, _this, _this.onClicked);
        _this.container = new Laya.Sprite();
        _this.container.cacheAs = "bitmap";
        _this.addChild(_this.container);
        //绘制遮罩区，含透明度，可见游戏背景
        _this.m_mask = new Laya.Sprite();
        _this.m_mask.alpha = 0.5;
        _this.m_mask.graphics.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#000000");
        _this.container.addChild(_this.m_mask);
        //绘制一个圆形区域，利用叠加模式，从遮罩区域抠出可交互区
        _this.interactionArea = new Laya.Sprite();
        //设置叠加模式
        _this.interactionArea.blendMode = "destination-out";
        _this.container.addChild(_this.interactionArea);
        _this.container.hitArea = new Laya.HitArea();
        _this.container.hitArea.hit.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#000000");
        _this.container.mouseEnabled = true;
        return _this;
    }
    Guide.prototype.step = function (_scene) {
        var guideDao = dao.find(GuideDao);
        var index = guideDao.index;
        if (index === 0) {
            var scene = _scene;
            this.m_scene = scene;
            this.m_target = scene.weapon;
        }
        else if (index === 1) {
            var scene = _scene;
            this.m_scene = scene;
            var cell = scene.weapons.getCell(0);
            var btn = cell.getChildByName("btn");
            this.m_target = btn;
        }
        else if (index === 3) {
            var scene = _scene;
            this.m_scene = scene;
            this.m_target = scene.armor;
        }
        else if (index === 4) {
            var scene = _scene;
            this.m_scene = scene;
            var cell = scene.page0.getCell(0);
            var btn = cell.getChildByName("btn");
            this.m_target = btn;
        }
        else if (index === 7) {
            var scene = _scene;
            this.m_scene = scene;
            this.m_target = scene.start;
        }
        else if (index === 8) {
            var scene = _scene;
            this.m_scene = scene;
            var cell = scene.list.getCell(0);
            this.m_target = cell.getChildByName("i1");
        }
        else if (index === 9) {
            var scene = _scene;
            this.m_scene = scene;
            this.m_target = scene.btnEnter;
        }
        else if (index === 10) {
            var scene = _scene;
            this.m_scene = scene;
            this.m_target = scene.m_enemys[0];
        }
    };
    Guide.prototype.popup = function () {
        this._open(false, false, false);
    };
    Guide.prototype.onClicked = function () {
        var guideDao = dao.find(GuideDao);
        var index = guideDao.index;
        guideDao.index++;
        guideDao.save();
        if (index === 0) {
            this.close();
            var scene = this.m_scene;
            scene.onWeaponClick();
            this.onResize();
        }
        else if (index === 1) {
            var scene = this.m_scene;
            var cell = scene.weapons.getCell(0);
            scene.onChangeWeapon(cell.dataSource.id);
            var btn = scene.getChildByName("close");
            this.m_target = btn;
            this.onResize();
        }
        else if (index === 2) {
            this.close();
            var scene = this.m_scene;
            scene.close();
        }
        else if (index === 3) {
            this.close();
            var scene = this.m_scene;
            scene.onArmorClick();
        }
        else if (index === 4) {
            var scene = this.m_scene;
            var cell = scene.page0.getCell(0);
            scene.onHelmetChange(cell.dataSource);
            cell = scene.tab.items[1];
            // let btn  = cell.getChildByName("btn") as Laya.Button;
            this.m_target = cell;
            this.onResize();
        }
        else if (index === 5) {
            var scene = this.m_scene;
            scene.tab.selectedIndex = 1;
            scene.onTabSelect(1);
            var cell = scene.page1.getCell(0);
            var btn = cell.getChildByName("btn");
            this.m_target = btn;
            this.onResize();
        }
        else if (index === 6) {
            var scene = this.m_scene;
            var cell = scene.page1.getCell(0);
            var btn = cell.getChildByName("btn");
            scene.onClothChange(cell.dataSource);
            this.close();
            scene.close();
        }
        else if (index === 7) {
            this.close();
            var scene = this.m_scene;
            scene.onStarClick();
        }
        else if (index === 8) {
            this.close();
            var scene = this.m_scene;
            scene.onSelectedClick(1);
        }
        else if (index === 9) {
            this.close();
            var scene = this.m_scene;
            scene.onEnterGame();
        }
        else if (index === 10) {
            var scene = this.m_scene;
            scene.checkEnemys();
            scene.onTouchBegin({ stageX: Laya.stage.mouseX, stageY: Laya.stage.mouseY });
            this.m_target = scene.m_roleTables[0];
            this.onResize();
        }
        else if (index === 11) {
            var scene = this.m_scene;
            var table = this.m_target;
            scene.enemysPause = false;
            table.onClicked();
            this.close();
        }
    };
    Guide.prototype.close = function (type, showEffect) {
        _super.prototype.close.call(this, type, showEffect);
        Dispatcher.event(Events.GUIDE_CLOSE);
    };
    Guide.prototype.onResize = function () {
        if (this.m_scene) {
            this.x = this.m_scene.x;
            this.y = this.m_scene.y;
            this.height = this.m_scene.height;
            this.width = this.m_scene.width;
            this.m_mask.graphics.clear();
            this.m_mask.graphics.drawRect(0, 0, this.width, this.height, "#000000");
            this.drawTarget();
        }
    };
    Guide.prototype.drawTarget = function () {
        Laya.Tween.clearAll(this.hand);
        // this.m_scene.localToGlobal
        var parent = this.m_target.parent;
        var pos = parent.localToGlobal(Laya.Point.TEMP.setTo(this.m_target.x, this.m_target.y));
        pos = this.globalToLocal(pos);
        //主页开始按钮锚点问题 特殊处理
        // let guide  = db_manager.get_guide();
        // if(guide === 7){
        pos.x = pos.x - this.m_target.width / 2;
        pos.y = pos.y - this.m_target.height / 2;
        // }
        this.hand.x = pos.x + this.m_target.width / 2 - this.hand.width / 2;
        this.hand.y = pos.y + this.m_target.height / 2;
        this.container.hitArea.unHit.clear();
        this.container.hitArea.unHit.drawRect(pos.x, pos.y, this.m_target.width, this.m_target.height, "#000000");
        this.interactionArea.graphics.clear();
        this.interactionArea.graphics.drawRect(pos.x, pos.y, this.m_target.width, this.m_target.height, "#000000");
        this.startAction();
    };
    Guide.prototype.onExit = function () {
        Laya.Tween.clearAll(this.hand);
    };
    Guide.prototype.onOpened = function () {
        this.onResize();
    };
    Guide.prototype.startAction = function () {
        Laya.Tween.clearAll(this.hand);
        Laya.Tween.to(this.hand, { y: this.hand.y + 30 }, 0.5e3, Laya.Ease.linearNone, Laya.Handler.create(this, this.onActionDone));
    };
    Guide.prototype.onActionDone = function () {
        Laya.Tween.to(this.hand, { y: this.hand.y + -30 }, 0.5e3, Laya.Ease.linearNone, Laya.Handler.create(this, this.startAction));
    };
    return Guide;
}(ui.Guide.GuideUI));
