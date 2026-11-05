class Fsm {
    constructor(gameobject) {
        this.gameobject = gameobject;
        if (this.gameobject.signal) {
            this.gameobject.signal.add(this.onSignal.bind(this));
        }
        this.states = {};
        this.currentState;
    }

    add(state) {
        this.states[state.name] = new state(this.gameobject);
        ////console.log("FSM - adding "+state.name);
    }

    change(state) {
        if (!this.states[state.name]) {
            //console.log("FSM - state " + state.name + " missing");
        } else {
            if (this.currentState) {
                this.states[this.currentState].exit(state.name);
            }

            this.states[state.name].enter();
            this.currentState = state.name;
        }
    }

    update(dt) {
        if (this.currentState) {
            this.states[this.currentState].update(dt);
        }
    }

    onSignal(event) {
        if (this.currentState) {
            this.states[this.currentState].onSignal(event);
        }
    }

    clear() {
        for (let state in this.states) {
            ////console.log("disposing state: " + state);
            this.states[state].dispose();
        }
        this.states = {};
        this.currentState = null;
    }

    dispose() {
        this.clear();
    }
}

class FsmState {
    constructor(gameobject) {
        this.gameobject = gameobject;
    }

    enter() { }

    update(dt) { }

    hit(otherGameObject) { }

    exit() { }

    onSignal(event) {
        ////console.log("onSignal: "+event);
    }

    dispose() {
        this.gameobject = null;
    }
}