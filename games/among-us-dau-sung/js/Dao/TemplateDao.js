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
var Template = /** @class */ (function () {
    function Template() {
    }
    return Template;
}());
/**
 * 模板管理
 * @author XuJian
 */
var TemplateDao = /** @class */ (function (_super) {
    __extends(TemplateDao, _super);
    function TemplateDao() {
        var _this = _super.call(this) || this;
        _this.template_db = Laya.loader.getRes("db/template.json").json;
        return _this;
    }
    /**根据类型获取模板 */
    TemplateDao.prototype.getTemplatesByFlag = function (flag) {
        var templates = [];
        var values = this.template_db.values;
        for (var i = 0; i < values.length; i++) {
            var s = values[i];
            var sflag = Number(s[3]);
            if (sflag === flag) {
                templates.push({
                    id: Number(s[0]),
                    name: s[1],
                    quality: Number(s[2]),
                    flag: sflag,
                    res: s[4],
                    desc: s[5],
                    defaultAmount: s[6],
                    autoSellMinAmount: s[7],
                    sellItemId: s[8],
                    sellItemAmount: s[9],
                    data: s[10],
                    buySource: s[11],
                });
            }
        }
        return templates;
    };
    TemplateDao.className = "TemplateDao";
    return TemplateDao;
}(BaseDao));
