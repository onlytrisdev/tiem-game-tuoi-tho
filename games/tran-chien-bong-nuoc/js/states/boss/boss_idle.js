class BossIdle extends FsmState {
    constructor(gameobject) {
        super(gameobject);

        this.delay = 1;
    }

    enter() {
        this.gameobject.view.gotoAndStop("idle");
        this.delay = 1 + (Math.random() * 0.5);
        this.gameobject.movedir *= -1;
        this.gameobject.launcherAnim = "idle";
        if (Math.random() < this.gameobject.config.attack_seq_prob && !this.gameobject.attackSeq) {
            this.gameobject.attackSeq = true;
            //console.log(this.constructor.name + " :: " + "will attack");
        }
    }

    update(dt) {
        this.delay -= dt;
        if (this.delay < 0) {
            this.gameobject.fsm.change(BossTurn);
        }
    }
}