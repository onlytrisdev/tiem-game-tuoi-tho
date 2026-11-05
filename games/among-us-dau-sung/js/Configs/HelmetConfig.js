/**
 * 头盔配置
 */
var HelmetConfig = /** @class */ (function () {
    function HelmetConfig() {
    }
    HelmetConfig.getCongigById = function (id) {
        for (var i = 0; i < this.configs.length; i++) {
            var element = this.configs[i];
            if (element.id === id) {
                return element;
            }
        }
        return null;
    };
    // id:number;
    // name:string;
    // quality:number;
    // flag:number;
    // res:string;
    // desc:string;
    // defaultAmount:number;
    // autoSellMinAmount:number;
    // sellItemId:number;
    // sellItemAmount:number;
    // data:any;
    // buySource:number;
    HelmetConfig.configs = [
        { id: 31, name: "Cấp 1", skinRes: "helmets/icon_helmet1.png", type: 1, energy: 100, price: 0 },
        { id: 32, name: "Cấp 2", skinRes: "helmets/icon_helmet2.png", type: 1, energy: 300, price: 450 },
        { id: 33, name: "Cấp 3", skinRes: "helmets/icon_helmet3.png", type: 1, energy: 1000, price: 1000 },
        { id: 35, name: "Cấp 4", skinRes: "helmets/helmet_yt.png", type: 3, energy: 400, price: 500, stage: 21 },
        { id: 34, name: "Cấp 5", skinRes: "helmets/helmet_pineapple.png", type: 2, energy: 200, price: 0 },
        { id: 36, name: "Cấp 6", skinRes: "helmets/helmet_miaomi.png", type: 3, energy: 1100, price: 600, stage: 31 },
    ];
    return HelmetConfig;
}());
