class BossTurnReverse extends FsmState {
    constructor(gameobject) {
        super(gameobject);

        this.delay = 1;
    }

    enter() {
        this.gameobject.view.scale.x = this.gameobject.movedir;
        this.gameobject.view.gotoAndStop("turn");
        this.delay = 1;
        if (!this.gameobject.attackSeq && this.gameobject.reachedAttackPoint) {
            this.gameobject.reachedAttackPoint = false;
            //console.log(this.constructor.name + " :: " + "attack ended");
            this.gameobject.launcherAnim = "close";
        }
    }

    update(dt) {
        this.delay -= dt;
        if (this.delay < 0) {
            this.gameobject.fsm.change(BossIdle);
        }
    }
}