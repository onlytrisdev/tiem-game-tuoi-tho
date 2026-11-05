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
 * GameView
 * @author XuJian
 */
var GameScene = /** @class */ (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.className = "GameScene";
        _this.m_enemyInfos = [];
        _this.m_haveBoss = false;
        _this.m_lastTimeGenerateEnemy = 0;
        _this.m_enemyTables = [];
        _this.m_roleTables = [];
        _this.m_enemys = [];
        _this.m_roleBullets = [];
        _this.m_enemyBullets = [];
        _this.m_isPause = false;
        _this.m_isRevive = false;
        /**
         * 换弹
         */
        _this.m_isChangingBullet = false;
        _this.enemysPause = false;
        _this.m_rolePos = [];
        _this.isGameOver = false;
        _this.isHelmetLost = false;
        _this.isClothLost = false;
        return _this;
    }
    GameScene.prototype.onEnter = function () {
        // if(patform.isWX){
        //     banner_manager.hide();
        // }
        Audios.setMusicVolume(0.2);
        this.role.fireHandler = new Laya.Handler(this, this.onRoleFire);
        this.buttonClose.on(Laya.Event.CLICK, this, this.toHome);
        Dispatcher.on(Events.ROLETABLE_OPENING, this, this.onDeskOpened);
        Dispatcher.on(Events.GAME_ENEMY_DEAD, this, this.onEnemyDead);
        Dispatcher.on(Events.GAME_ENEMY_LEAVE_WINDOW, this, this.onEnemyLeaveWindow);
        Dispatcher.on(Events.AIRDROP_SHOW, this, this.onAirDropShow);
        Dispatcher.on(Events.AIRDROP_HIDE, this, this.onAirDropHide);
        Dispatcher.on(Events.FAILE_VIDEO, this, this.onFailContinue);
        this.on(Laya.Event.MOUSE_DOWN, this, this.onTouchBegin);
        this.loadStageInfo();
        this.m_lastTimeGenerateEnemy = 0;
        this.m_enemyTables.length = 0;
        for (var i = 1; i <= 12; i++) {
            var element = this.getChildByName("e" + i);
            this.m_enemyTables.push(element);
        }
        this.m_enemyTables[-2] = this.getChildByName("e13");
        for (var i = 1; i <= 8; i++) {
            var element = (this.getChildByName("w" + i));
            this.m_roleTables.push(element);
        }
        var stageDao = dao.find(StageDao);
        var stage = stageDao.stage;
        var selectedStage = stageDao.selectedStage;
        var guideDao = dao.find(GuideDao);
        if (guideDao.index === 10) {
            this.m_roleTables[6].onClicked();
            this.tryGuide();
            Laya.timer.frameLoop(1, this, this.tryGuide);
        }
        else {
            this.m_roleTables[Math.floor(utils.random(0, 7))].onClicked();
            //   this.airGift.giftType = GIFTTYPE.MIAOMI;
            if (utils.random(0, 100) < 50) {
                if (stage < 20) {
                    this.airGift.giftType = GIFTTYPE.YUTU;
                }
                else {
                    this.airGift.giftType = GIFTTYPE.MIAOMI;
                }
            }
            selectedStage > 2 && Laya.timer.once(5e3, this.airGift, this.airGift.drop);
        }
        Laya.timer.frameLoop(1, this, this.onUpdate);
        this.limitTime.text = 50 + "";
        Laya.timer.loop(1e3, this, this.onLimitTime);
        RecorderManager.I.start();
    };
    GameScene.prototype.tryGuide = function () {
        var guideDao = dao.find(GuideDao);
        if (guideDao.index === 10) {
            var e = this.m_enemys[0];
            if (e) {
                this.enemysPause = true;
                Laya.timer.clear(this, this.tryGuide);
                var guide = new Guide();
                guide.step(this);
                guide.popup();
            }
        }
        else {
            Laya.timer.clear(this, this.tryGuide);
        }
    };
    GameScene.prototype.tryAirDorp = function () {
        // this.airDrop.visible = true;
        // this.m_airTween = Laya.Tween.to( this.airDrop,{y:920},5e3,null);
    };
    GameScene.prototype.onLimitTime = function () {
        if (this.m_isPause)
            return;
        if (this.isGameOver)
            return;
        var limit = Number(this.limitTime.text) - 1;
        this.limitTime.text = limit + "";
        if (limit <= 0) {
            (new FailLayer(this.m_isRevive)).popup();
            Laya.timer.clearAll(this);
        }
    };
    GameScene.prototype.resume = function () {
        if (this.m_isPause) {
            console.log("this.m_isPause2 ==", this.m_isPause);
            this.m_isPause = false;
        }
    };
    GameScene.prototype.onAirDropShow = function () {
        if (this.m_isPause === false)
            this.m_isPause = true;
    };
    GameScene.prototype.onAirDropHide = function (type) {
        Laya.timer.once(1e3, this, this.resume);
        if (type == "success") {
            var ids = [16, 17, 18];
            var index = Math.floor(Math.random() * ids.length);
            this.role.changeWeaponById(ids[index]);
            new MessagePop("Try" + this.role.properties.weaponName).popup();
            this.airGift.visible = false;
        }
        else if (type == "yt_success") {
            this.role.changeWeaponById(20);
            this.role.changeHelmetById(35);
            this.role.changeClothById(44);
            new MessagePop("Try Jade Bunny Suit").popup();
            this.airGift.visible = false;
        }
        else if (type == "miaomi_success") {
            this.role.changeHelmetById(36);
            this.role.changeClothById(45);
            new MessagePop("Try Kitty Suit").popup();
            this.airGift.visible = false;
        }
    };
    GameScene.prototype.onExit = function () {
        RecorderManager.I.start();
        Laya.timer.clearAll(this);
        Dispatcher.off(Events.ROLETABLE_OPENING, this, this.onDeskOpened);
        Dispatcher.off(Events.GAME_ENEMY_DEAD, this, this.onEnemyDead);
        Dispatcher.off(Events.GAME_ENEMY_LEAVE_WINDOW, this, this.onEnemyLeaveWindow);
        Dispatcher.off(Events.AIRDROP_SHOW, this, this.onAirDropShow);
        Dispatcher.off(Events.AIRDROP_HIDE, this, this.onAirDropHide);
        Dispatcher.off(Events.FAILE_VIDEO, this, this.onFailContinue);
        Dispatcher.off(Events.GAME_ENEMY_ENTER_WINDOW, this, this.onEnemyEnterWindow);
        this.off(Laya.Event.MOUSE_DOWN, this, this.onTouchBegin);
        this.buttonClose.off(Laya.Event.CLICK, this, this.toHome);
    };
    GameScene.prototype.onEnemyLeaveWindow = function (index) {
        var t = this.m_enemyTables[index];
        if (t) {
            this.m_enemyTables[index].closeDoor();
        }
    };
    GameScene.prototype.onEnemyEnterWindow = function (index) {
        var t = this.m_enemyTables[index];
        if (t) {
            this.m_enemyTables[index].onClicked();
        }
    };
    GameScene.prototype.onEnemyDead = function (target) {
        this.m_enemys.splice(this.m_enemys.indexOf(target), 1);
        target.destroy();
    };
    /**
     * 射击点击
     */
    GameScene.prototype.onTouchBegin = function (e) {
        if (this.m_isChangingBullet) {
            return;
        }
        if (this.isGameOver)
            return;
        var parent = this.parent;
        var x = e.stageX;
        var y = e.stageY;
        if (x < Laya.stage.width / 2)
            return;
        this.role.tryFire(x, y);
    };
    GameScene.prototype.onRoleFire = function (bullets) {
        this.addRoleBullet(bullets);
        this.updateRoleBulletNumber();
    };
    GameScene.prototype.addRoleBullet = function (bullets) {
        for (var o = 0; o < bullets.length; o++) {
            var n = bullets[o];
            n.startPos = this.globalToLocal(n.startPos, true);
            var bullet = new RoleBullet(n);
            this.addChild(bullet);
            this.m_roleBullets.push(bullet);
        }
    };
    GameScene.prototype.addEnemyBullet = function (bullets) {
        for (var o = 0; o < bullets.length; o++) {
            var n = bullets[o];
            n.startPos = this.globalToLocal(n.startPos, true);
            var bullet = BulletPool.getEnemyBullet();
            bullet.initWithData(n);
            this.addChild(bullet);
            this.m_enemyBullets.push(bullet);
        }
    };
    GameScene.prototype.toHome = function () {
        (new LoadingScene()).show();
        this.close();
    };
    GameScene.prototype.updateRoleBullets = function () {
        for (var i = 0; i < this.m_roleBullets.length; i++) {
            this.m_roleBullets[i].updateBullet();
        }
    };
    GameScene.prototype.updateEnemyBullets = function () {
        for (var i = 0; i < this.m_enemyBullets.length; i++) {
            this.m_enemyBullets[i].updateBullet();
        }
    };
    GameScene.prototype.onUpdate = function () {
        if (this.m_isPause)
            return;
        this.updateRoleBullets();
        this.tryGenerateEnemy();
        if (this.enemysPause === false) {
            this.updateEnemyBullets();
            this.checkEnemys();
            this.checkEnemyBullets();
        }
        this.checkHeroBullets();
        this.checkGameOver();
    };
    GameScene.prototype.checkEnemys = function () {
        var pos = this.getLastRolePos();
        if (pos === null)
            return;
        for (var o = 0; o < this.m_enemys.length; o++) {
            var n = this.m_enemys[o];
            n.tryExecBehaviors();
            n.tryFire(pos.x, pos.y);
        }
    };
    GameScene.prototype.onEnemyFire = function (b) {
        this.addEnemyBullet(b);
    };
    GameScene.prototype.getLastRolePos = function () {
        for (var i = this.m_rolePos.length - 1; i >= 0; i--) {
            var pos = this.m_rolePos[i];
            pos.time -= 0.016;
            if (pos.time <= 0) {
                return pos;
            }
        }
        return null;
    };
    GameScene.prototype.checkEnemyBullets = function () {
        if (this.isGameOver)
            return;
        var array = [];
        for (var o = 0; o < this.m_enemyBullets.length; o++) {
            var n = this.m_enemyBullets[o];
            if (this.isOutBoundary(n)) {
                array.push(n);
            }
            else {
                if (this.role.isbulletHit(n)) {
                    array.push(n);
                    this.updateRoleHelmetBlood();
                    this.updateRoleClothBlood();
                    break;
                }
            }
        }
        for (var i = 0; i < array.length; i++) {
            var bullet = array[i];
            this.m_enemyBullets.splice(this.m_enemyBullets.indexOf(bullet), 1);
            BulletPool.recoverEnemyBullet(bullet);
        }
    };
    GameScene.prototype.checkHeroBullets = function () {
        var array = [];
        for (var o = 0; o < this.m_roleBullets.length; o++) {
            var n = this.m_roleBullets[o];
            if (this.isOutBoundary(n)) {
                array.push(n);
            }
            else {
                for (var a = 0; a < this.m_enemys.length; a++) {
                    var i = this.m_enemys[a].isbulletHit(n);
                    if (i) {
                        array.push(n);
                        break;
                    }
                }
            }
        }
        for (var i = 0; i < array.length; i++) {
            var bullet = array[i];
            this.m_roleBullets.splice(this.m_roleBullets.indexOf(bullet), 1), bullet.destroy();
        }
    };
    GameScene.prototype.isOutBoundary = function (e) {
        return e.x < -100 || e.x > Laya.stage.width + 100 || e.y < -100 || e.y > Laya.stage.height + 100;
    };
    /**
     * 返回大厅
     */
    GameScene.prototype.onToLobbyClick = function () {
        (new HomeScene()).show();
    };
    GameScene.prototype.onDeskOpened = function (target) {
        this.role.x = target.x;
        this.role.y = target.y + 20;
        var pos = this.localToGlobal(Laya.Point.TEMP.setTo(this.role.x, this.role.y));
        this.m_rolePos.push({
            time: 0.5,
            x: pos.x,
            y: pos.y,
        });
        if (this.m_rolePos.length > 3) {
            this.m_rolePos.shift();
        }
    };
    /**
     * 生成敌人
     */
    GameScene.prototype.loadStageInfo = function () {
        var stageDao = dao.find(StageDao);
        var stage_id = stageDao.selectedStage;
        var db = stageDao.get_from_stage_db(stage_id);
        if (db === null)
            return;
        this.m_stageData = db;
        this.m_enemyInfos.length = 0;
        this.m_haveBoss = false;
        this.initRoleProperties();
        var enemyDao = dao.find(EnemyDao);
        for (var c = 0; c < db.enmeyDatas.length; c++) {
            var g = db.enmeyDatas[c];
            var enemyid = g[0];
            var windowIndex = g[1];
            this.m_haveBoss = enemyid < 200;
            var enemy = enemyDao.findEnemyById(enemyid);
            if (enemy === null)
                continue;
            var enemyProperties = new EnemyProperties(enemy);
            enemyProperties.windowIndex = windowIndex;
            this.m_enemyInfos.push(enemyProperties);
        }
    };
    GameScene.prototype.tryGenerateEnemy = function () {
        var t = 0;
        var o = 0;
        var enemyInfos = this.m_enemyInfos;
        var c = 0;
        for (var i = 0; i < enemyInfos.length; i++) {
            var enemy = enemyInfos[i];
            if (enemy.isAlive) {
                c++;
            }
            if (enemy.status == EnemyPropertiesStatus.ON && enemy.isAlive) {
                t++;
            }
            ;
            if (enemy.status == EnemyPropertiesStatus.None) {
                o++;
            }
        }
        this.enemyCountLabel.text = c + "/" + enemyInfos.length;
        if (t >= this.m_stageData.maxEnemyCount)
            return;
        this.m_lastTimeGenerateEnemy++;
        var generate = Math.random() * Number(this.m_stageData.generateSpaces[0]) + Number(this.m_stageData.generateSpaces[1]);
        if (this.m_lastTimeGenerateEnemy >= generate) {
            this.generateEnemy();
        }
    };
    GameScene.prototype.randomEnemyWindow = function () {
        var t = [];
        for (var n = 0; n < this.m_enemyTables.length; n++) {
            var window_1 = this.m_enemyTables[n];
            if (window_1.hasEnemy)
                continue;
            t.push(n);
        }
        var i = Math.floor(Math.random() * t.length);
        return t[i];
    };
    GameScene.prototype.generateEnemy = function () {
        var enemy = null;
        for (var a = 0; a < this.m_enemyInfos.length; a++) {
            var o = this.m_enemyInfos[a];
            if (o.status == EnemyPropertiesStatus.None && o.isAlive) {
                enemy = o;
                break;
            }
        }
        if (enemy) {
            var s = enemy.windowIndex;
            if (-1 === s) {
                s = this.randomEnemyWindow();
            }
            else if (-2 == s) {
            }
            else {
                var window_2 = this.m_enemyTables[s];
                if (window_2.hasEnemy) {
                    s = this.randomEnemyWindow();
                }
            }
            enemy.windowIndex = s;
            enemy.status = EnemyPropertiesStatus.ON;
            ;
            var u = this.m_enemyTables[s];
            if (!u)
                return;
            var sprite = void 0;
            if (enemy.view === "vGameBoss") {
                sprite = new EnemyBoss(enemy);
            }
            else {
                console.log("enemy.shootSpeed =", enemy.shootSpeed);
                if (enemy.shootSpeed > 0) {
                    sprite = new Enemy(enemy);
                }
                else {
                    sprite = new EnemyPan(enemy);
                }
            }
            sprite.fireHandler = new Laya.Handler(this, this.onEnemyFire);
            this.m_enemys.push(sprite);
            sprite.pos(u.x, u.y + 10);
            this.addChild(sprite);
            u.onClicked();
            u.hasEnemy = true;
            this.m_lastTimeGenerateEnemy = 0;
        }
    };
    GameScene.prototype.checkGameOver = function () {
        var isAlive = 0;
        for (var e = 0, t = 0; t < this.m_enemyInfos.length; t++) {
            this.m_enemyInfos[t].isAlive && isAlive++;
        }
        if (isAlive === 0 && this.isGameOver === false && this.m_stageData.id != 60) {
            this.isGameOver = true;
            Core.UI.Layer.manager.closeByGroup("AirDropLayer");
            Audios.victory();
            Laya.timer.once(0.5e3, this, function () {
                Laya.timer.clearAll(this);
                new VictoryLayer().popup();
            });
        }
        if (this.role.m_status == RoleStatus.Dead && this.isGameOver === false) {
            Audios.fail();
            Core.UI.Layer.manager.closeByGroup("AirDropLayer");
            this.isGameOver = true;
            var t_1 = this;
            Laya.timer.once(0.5e3, this, function () {
                new FailLayer(this.m_isRevive).popup();
            });
        }
    };
    GameScene.prototype.onFailContinue = function () {
        this.limitTime.text = 50 + "";
        this.role.m_status = RoleStatus.WaitFire;
        this.initRoleProperties();
        this.isHelmetLost = false;
        this.isClothLost = false;
        this.m_isRevive = true;
        var t = this;
        Laya.timer.once(1e3, this, function () {
            console.log("aaaaaaaaa");
            t.isGameOver = false;
        });
    };
    GameScene.prototype.initRoleProperties = function () {
        var roleProperties = new RoleProperties();
        this.role.setProperties(roleProperties);
        this.updateRoleBulletNumber();
        this.updateRoleHelmetBlood();
        this.updateRoleClothBlood();
        if (RoleProperties.hasTestWeapon) {
            RoleProperties.hasTestWeapon = false;
            this.role.changeWeaponById(RoleProperties.testWeaponId);
        }
    };
    GameScene.prototype.updateRoleBulletNumber = function () {
        if (this.m_isChangingBullet)
            return;
        this.bulletCountLabel.text = this.role.properties.bulletCurCount + "/" + this.role.properties.bulletMaxCount;
        this.bulletBar.value = this.role.properties.bulletPercentage();
        var t = this;
        if (this.role.properties.bulletCurCount <= 0) {
            this.m_isChangingBullet = true;
            this.bulletCountLabel.text = "Reloading";
            t.role.aciton_fullbullets.play(0, false);
            Audios.ChangeBullets();
            Laya.timer.once(0.8e3, this, function () {
                t.role.properties.bulletCurCount = t.role.properties.bulletMaxCount;
                t.m_isChangingBullet = false;
                t.updateRoleBulletNumber();
            });
        }
    };
    GameScene.prototype.updateRoleHelmetBlood = function () {
        this.hemletBar.value = this.role.properties.helmetPercentage();
        this.hemletLabel.text = (this.hemletBar.value * 100).toFixed(0) + "%";
        if (this.role.properties.currentHelmetHP <= 0 && this.role.helmet.visible) {
            if (!this.isHelmetLost) {
                this.isHelmetLost = true;
                Audios.HELMETLOST();
                this.role.action_hemletLost.play(0, false);
            }
        }
    };
    GameScene.prototype.updateRoleClothBlood = function () {
        this.clothBar.value = this.role.properties.clothPercentage();
        this.clothLabel.text = (this.clothBar.value * 100).toFixed(0) + "%";
        if (this.role.properties.currentClothHP <= 0 && this.role.cloth.visible) {
            if (!this.isClothLost) {
                this.isClothLost = true;
                Audios.HELMETLOST();
            }
            Laya.Tween.to(this.role.cloth, { x: -50, y: -35, alpha: 0 }, 0.3e3, null, Laya.Handler.create(this, this.onClothActionDone));
        }
    };
    GameScene.prototype.onClothActionDone = function () {
        this.role.cloth.visible = false;
    };
    return GameScene;
}(ui.Scenes.GameUI));
