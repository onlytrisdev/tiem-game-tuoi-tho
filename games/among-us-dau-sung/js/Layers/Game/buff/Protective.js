/**
 * Protective
 * @author XuJian
 */
var Protective = /** @class */ (function () {
    function Protective(target) {
        this.life = 5;
        this.m_traget = target;
        this.m_image = new Laya.Image();
        this.m_image.scale(2, 2);
        this.m_image.skin = "Buff/i_protective.png";
        this.m_traget.addChild(this.m_image);
        this.m_image.pos(-40, 0);
    }
    Protective.prototype.beAttack = function () {
        this.life--;
        if (this.life <= 0) {
            this.m_image.removeSelf();
        }
    };
    return Protective;
}());
