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
 * 钻石管理器
 * @author XuJian
 */
var GIFTTYPE;
(function (GIFTTYPE) {
    GIFTTYPE[GIFTTYPE["NORMAL"] = 0] = "NORMAL";
    GIFTTYPE[GIFTTYPE["YUTU"] = 1] = "YUTU";
    GIFTTYPE[GIFTTYPE["MIAOMI"] = 2] = "MIAOMI";
})(GIFTTYPE || (GIFTTYPE = {}));
var AirGift = /** @class */ (function (_super) {
    __extends(AirGift, _super);
    function AirGift() {
        var _this = _super.call(this) || this;
        _this._giftType = GIFTTYPE.NORMAL;
        _this.on(Laya.Event.CLICK, _this, _this.onClicked);
        _this._giftType = GIFTTYPE.NORMAL;
        _this.m_icon.visible = false;
        return _this;
    }
    Object.defineProperty(AirGift.prototype, "giftType", {
        set: function (value) {
            this._giftType = value;
            if (value === GIFTTYPE.YUTU) {
                this.m_icon.visible = true;
            }
            else if (value === GIFTTYPE.MIAOMI) {
                this.m_icon.visible = true;
                this.m_icon.skin = "helmets/helmet_miaomi.png";
            }
            else {
                this.m_icon.visible = false;
            }
        },
        enumerable: false,
        configurable: true
    });
    AirGift.prototype.drop = function () {
        this.x = 370;
        this.y = -125;
        Laya.Tween.clearAll(this);
        this.fly.play(0, true);
        Laya.Tween.to(this, { y: 1211 }, 10e3, Laya.Ease.linearOut, Laya.Handler.create(this, this.dropDone));
    };
    AirGift.prototype.dropDone = function () {
        this.fly.stop();
        this.rotation = 0;
    };
    // clickedHandler:Laya.Handler;
    AirGift.prototype.onClicked = function () {
        switch (this._giftType) {
            case GIFTTYPE.NORMAL:
                new AirDropLayer().popup();
                break;
            case GIFTTYPE.YUTU:
                new AirYTDropLayer().popup();
                break;
            case GIFTTYPE.MIAOMI:
                new AirMaoMiDropLayer().popup();
                break;
            default:
                new AirDropLayer().popup();
                break;
        }
        // this.clickedHandler && this.clickedHandler.run();
    };
    return AirGift;
}(ui.Components.AirGiftUI));
