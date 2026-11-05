/**
 * 背景颜色管理
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
var BackgroundDB = /** @class */ (function () {
    function BackgroundDB() {
    }
    return BackgroundDB;
}());
var BackgroundDao = /** @class */ (function (_super) {
    __extends(BackgroundDao, _super);
    function BackgroundDao() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * 当前背景色
         */
        _this.m_color = "#81d0f0";
        /**拥有的背景色*/
        _this.m_colors = ["#81d0f0"];
        return _this;
    }
    BackgroundDao.prototype.clear = function () {
    };
    BackgroundDao.prototype.hasColor = function (color) {
        if (this.m_colors.indexOf(color) < 0) {
            return false;
        }
        return true;
    };
    Object.defineProperty(BackgroundDao.prototype, "color", {
        /**
         * 当前背景色
         */
        get: function () {
            return this.m_color || "#81d0f0";
        },
        set: function (value) {
            // this.m_color = value;
            // platform.getInstance().setStorageSync("background_color",this.m_color);
            // Laya.stage.bgColor = value;
            this.save();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackgroundDao.prototype, "colors", {
        get: function () {
            return this.m_colors;
        },
        enumerable: false,
        configurable: true
    });
    BackgroundDao.prototype.addColor = function (value) {
        if (this.m_colors.indexOf(value) < 0) {
            this.m_colors.push(value);
            this.save();
        }
    };
    BackgroundDao.COLORSARRAY = [
        { id: 111, color: "#81d0f0" },
        { id: 112, color: "#64ffa2", },
        { id: 113, color: "#8189f0", },
        { id: 114, color: "#ab86f0", },
        { id: 115, color: "#aeb78d", },
        { id: 116, color: "#f78d8d", },
        { id: 117, color: "#f1e499", },
        { id: 118, color: "#91ebec", },
        { id: 119, color: "#ff74a5", },
    ];
    BackgroundDao.className = "BackgroundDao";
    return BackgroundDao;
}(BaseDao));
