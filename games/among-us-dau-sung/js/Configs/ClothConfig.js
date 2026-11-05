/**
 * 盔甲配置
 */
var ClothConfig = /** @class */ (function () {
    function ClothConfig() {
    }
    ClothConfig.getCongigById = function (id) {
        for (var i = 0; i < this.configs.length; i++) {
            var element = this.configs[i];
            if (element.id === id) {
                return element;
            }
        }
        return null;
    };
    ClothConfig.configs = [
        { id: 41, name: "Cấp 1", skin: "cloths/icon_define1.png", type: 1, energy: 100, price: 0 },
        { id: 42, name: "Cấp 2", skin: "cloths/icon_define2.png", type: 1, energy: 300, price: 450 },
        { id: 43, name: "Cấp 3", skin: "cloths/icon_define3.png", type: 1, energy: 1000, price: 1000 },
        { id: 44, name: "Cấp 4", skin: "cloths/cloths_yt.png", type: 3, energy: 400, price: 500, stage: 21 },
        { id: 45, name: "Cấp 5lock.skin ", skin: "cloths/cloths_miaomi.png", type: 3, energy: 1200, price: 500, stage: 31 },
    ];
    return ClothConfig;
}());
