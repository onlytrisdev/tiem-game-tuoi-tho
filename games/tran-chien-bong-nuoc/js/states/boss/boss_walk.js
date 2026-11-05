class BossWalk extends FsmState {
    constructor(gameobject) {
        super(gameobject);
    }

    enter() {
        this.gameobject.view.gotoAndStop("walk");
        
        if (this.gameobject.attackSeq && !this.gameobject.reachedAttackPoint) {
            this.gameobject.endpoint.x = 150 * (this.gameobject.movedir);
            //console.log(this.constructor.name + " :: " + "moving to attack start point");
            this.gameobject.launcherAnim = "idle";
        } else if (this.gameobject.attackSeq && this.gameobject.reachedAttackPoint) {
            this.gameobject.endpoint.x = 150 * (this.gameobject.movedir);
            console.log(this.constructor.name + " :: " + "moving to attack end point");
            this.gameobject.launcherAnim = "open_idle";
        } else {
            this.gameobject.endpoint.x = (50 + (Math.random() * 50)) * (this.gameobject.movedir);
            //console.log(this.constructor.name + " :: " + "moving to random point");
            this.gameobject.launcherAnim = "idle";
        }
    }

    update(dt) {

        this.gameobject.body.acceleration.x = this.gameobject.config.run_acceleration * this.gameobject.movedir;

        if (reached_stopping_distance(this.gameobject.body.position, this.gameobject.endpoint, this.gameobject.body.velocity.x, this.gameobject.body.drag)) {
            if (this.gameobject.attackSeq && !this.gameobject.reachedAttackPoint) {
                this.gameobject.reachedAttackPoint = true;
                console.log(this.constructor.name + " :: " + "reached attack start point");
            } else if (this.gameobject.attackSeq && this.gameobject.reachedAttackPoint) {
                this.gameobject.attackSeq = false;
                console.log(this.constructor.name + " :: " + "reached attack end point");
            }
            this.gameobject.fsm.change(BossTurnReverse);
        }
    }
}