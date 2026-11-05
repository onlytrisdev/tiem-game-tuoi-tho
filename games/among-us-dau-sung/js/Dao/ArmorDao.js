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
 * 关卡管理器
 * @author XuJian
 */
var ArmorDao = /** @class */ (function (_super) {
    __extends(ArmorDao, _super);
    function ArmorDao() {
        var _this = _super.call(this) || this;
        _this.m_Helmets = [31];
        _this.m_Cloths = [41];
        _this.m_CurHelmetID = -1;
        _this.m_CurClothID = -1;
        _this.armor_db = Laya.loader.getRes("db/armor_db.json").json;
        return _this;
    }
    ArmorDao.prototype.getEnergy = function (id) {
        var values = this.armor_db.values;
        for (var i = 0; i < values.length; i++) {
            var s = values[i];
            var sid = Number(s[0]);
            if (sid === id) {
                return Number(s[4]);
            }
        }
        return 0;
    };
    Object.defineProperty(ArmorDao.prototype, "clothID", {
        get: function () {
            return this.m_CurClothID;
        },
        set: function (value) {
            this.m_CurClothID = value;
            this.save();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArmorDao.prototype, "helmetID", {
        get: function () {
            return this.m_CurHelmetID;
        },
        set: function (value) {
            this.m_CurHelmetID = value;
            this.save();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArmorDao.prototype, "helmets", {
        get: function () {
            if (!this.m_Helmets) {
                this.m_Helmets = [31];
            }
            return this.m_Helmets;
        },
        enumerable: false,
        configurable: true
    });
    ArmorDao.prototype.pushHelmets = function (id) {
        if (this.m_Helmets.indexOf(id) < 0) {
            this.m_Helmets.push(id);
        }
        this.save();
    };
    ArmorDao.prototype.pushCloths = function (id) {
        if (this.m_Cloths.indexOf(id) < 0) {
            this.m_Cloths.push(id);
        }
        this.save();
    };
    ArmorDao.prototype.hasHelmetByID = function (id) {
        for (var i = 0; i < this.m_Helmets.length; i++) {
            var element = this.m_Helmets[i];
            if (element === id) {
                return true;
            }
        }
        return false;
    };
    ArmorDao.prototype.getHelmetByID = function (id) {
        for (var i = 0; i < this.m_Helmets.length; i++) {
            var element = this.m_Helmets[i];
            if (element === id) {
                return element;
            }
        }
        return null;
    };
    ArmorDao.prototype.hasClothByID = function (id) {
        for (var i = 0; i < this.m_Cloths.length; i++) {
            var element = this.m_Cloths[i];
            if (element === id) {
                return true;
            }
        }
        return false;
    };
    ArmorDao.prototype.getClothByID = function (id) {
        for (var i = 0; i < this.m_Cloths.length; i++) {
            var element = this.m_Cloths[i];
            if (element === id) {
                return element;
            }
        }
        return null;
    };
    ArmorDao.prototype.getArmorByID = function (id) {
        var values = this.armor_db.values;
        for (var i = 0; i < values.length; i++) {
            var s = values[i];
            var sid = Number(s[0]);
            if (sid === id) {
                return {
                    id: sid,
                    name: s[1],
                    icon: s[2],
                    cost: Number(s[3]),
                    energy: Number(s[4]),
                };
            }
        }
        return null;
    };
    ArmorDao.className = "ArmorDao";
    return ArmorDao;
}(BaseDao));
