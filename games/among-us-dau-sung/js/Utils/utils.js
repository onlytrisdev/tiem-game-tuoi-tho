/**
 * 帮助类
 * @author XuJian
 */
var utils = /** @class */ (function () {
    function utils() {
    }
    // static calcBulletHit(power,t:EnemyProperties) {
    // 	let headHit = 0;
    // 	let hit = Math.ceil(power * utils.random(40, 60) / 100);
    // 	if(t.helmetHP > 0){
    // 		if(hit > t.helmetHP){
    // 			headHit = t.helmetHP;
    // 			t.helmetHP = 0;
    // 		}else{
    // 			headHit = hit ;
    // 			t.helmetHP -= hit;
    // 		}
    // 	}
    // 	hit =  power - headHit;
    // 	let clothHit = 0;
    // 	if(t.clothHP > 0){
    // 		if(hit > t.clothHP){
    // 			clothHit = t.clothHP;
    // 			t.clothHP = 0;
    // 		}else{
    // 			clothHit   = hit;
    // 			t.clothHP -= hit;
    // 		}
    // 	}
    // 	hit =  hit - clothHit;
    // 	if(t.baseHP > 0){
    // 		if(hit > t.baseHP){
    // 			t.baseHP = 0;
    // 		}else{
    // 			t.baseHP -= hit;
    // 		}
    // 	}
    // 	t.currentHP = t.helmetHP + t.clothHP + t.baseHP;
    // 	return {headHit: headHit,clothHit: clothHit,bodyHit: hit}
    // }
    utils.random = function (min, max) {
        return Math.random() * max + min;
    };
    utils.onTheSameDay = function (e, t) {
        var o = new Date(e), n = new Date(t);
        return o.getFullYear() == n.getFullYear() && o.getMonth() == n.getMonth() && o.getDate() == n.getDate();
    };
    utils.time = function () {
        return new Date().getTime();
    };
    return utils;
}());
