class BossEnter extends FsmState {
    constructor(gameobject) {
        super(gameobject);

        this.delay = 0;
    }

    enter() {
        this.gameobject.view.gotoAndStop("enter");
        this.delay = 1;

        globalsignal.emit(ge.UPDATE_INGAME_UI, { boss_health: true, Hp: 100, firstTime: true });
    }

    update(dt) {
        this.delay -= dt;
        if (this.delay < 0) this.gameobject.fsm.change(BossIdle);
    }
}