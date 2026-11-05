class PlayerThrow extends FsmState {
    constructor(gameobject) {
        super(gameobject);
    }

    enter() {
        if (this.delay > 0) {
            return;
        }

        this.gameobject.view.gotoAndStop("throw", true);
        this.delay = this.gameobject.config.throw_delay;
        this.gameobject.shoot = false;
        this.gameobject.shootFrame = 0;
        this.gameobject.throw = false;

        this.gameobject.addBalloons(-1);
        this.gameobject.changeThrowWeapon(PLAYER_CONFIG.weapons.balloon);

        this.gameobject.granadeTarget.push(get_ranged_target(this.gameobject.position, PLAYER_CONFIG.weapons.balloon.bullets[0].range.x, PLAYER_CONFIG.weapons.balloon.bullets[0].range.y));
    }

    update(dt) {
        this.delay -= dt;
        if (this.delay <= 0) this.gameobject.fsm.change(PlayerIdle);
    }
}