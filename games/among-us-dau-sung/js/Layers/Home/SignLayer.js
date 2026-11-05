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
var SignLayer = /** @class */ (function (_super) {
    __extends(SignLayer, _super);
    function SignLayer() {
        var _this = _super.call(this) || this;
        _this.m_days = [];
        _this.group = "CLOSE_WITH_DIAMOND_POP";
        for (var i = 1; i < 8; i++) {
            _this.m_days.push(_this.getChildByName("day" + i));
        }
        _this.refresh();
        return _this;
    }
    SignLayer.prototype.refresh = function () {
        var signDao = dao.find(SignDao);
        var db = signDao.values;
        var sign = signDao.sign;
        var item;
        var day;
        var array;
        var title;
        var count;
        // let sign_time = db_manager.get_sign_time()
        for (var i = 0; i < this.m_days.length; i++) {
            array = db[i];
            day = i + 1;
            item = this.m_days[i];
            title = item.getChildByName("title");
            count = item.getChildByName("txtCount");
            item.on(Laya.Event.CLICK, this, this.checkout, [i]);
            title.text = "Ngày " + day;
            count.text = "x" + array[6];
            if (day < sign) {
                count.text = "Received";
            }
            else if (day === sign) {
                this.btn.on(Laya.Event.CLICK, this, this.checkout, [i]);
                this.btn2.on(Laya.Event.CLICK, this, this.checkout2, [i]);
            }
        }
    };
    SignLayer.prototype.checkout = function (key) {
        var signDao = dao.find(SignDao);
        var db = signDao.values;
        var sign = signDao.sign;
        var day = key + 1;
        var array = db[key];
        var diamond = Number(array[6]);
        if (day < sign) {
            new MessagePop("Received!").popup();
            return;
        }
        else if (day === sign) {
            if (!signDao.canSign()) {
                new MessagePop("Not Available!").popup();
                return;
            }
        }
        else {
            new MessagePop("Not Available!").popup();
            return;
        }
        this.flush(key);
    };
    SignLayer.prototype.checkout2 = function (key) {
        var signDao = dao.find(SignDao);
        var db = signDao.values;
        var sign = signDao.sign;
        var day = key + 1;
        var array = db[key];
        var diamond = Number(array[6]);
        if (day < sign) {
            new MessagePop("Received!").popup();
            return;
        }
        else if (day === sign) {
            if (!signDao.canSign()) {
                new MessagePop("Not Available!").popup();
                return;
            }
        }
        else {
            new MessagePop("Not Available!").popup();
            return;
        }
        // ad_manager.video(YYG.TYPE.REWARD, YYG.EventHandler.create(this, this.flushVideo, [key, true]));
    };
    SignLayer.prototype.flushVideo = function (key, isVideo) {
        this.flush(key, isVideo);
    };
    SignLayer.prototype.flush = function (key, isVideo) {
        var signDao = dao.find(SignDao);
        var db = signDao.values;
        var sign = signDao.sign;
        var day = key + 1;
        var array = db[key];
        var diamond = Number(array[6]);
        if (isVideo) {
            diamond = diamond * 2;
        }
        signDao.sign++;
        var diamondDao = dao.find(DiamondDao);
        diamondDao.addDiamonds(diamond);
        this.refresh();
    };
    SignLayer.prototype.onDoubleBoxChangeHandler = function (selected) {
        selected && (this.btn.skin = "commons/button_video_get.png") || (this.btn.skin = "commons/button_get.png");
    };
    return SignLayer;
}(ui.Layers.Home.SignLayerUI));
