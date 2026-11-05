class Signal {
    constructor() {
        this.functions = [];
    }

    add(func) {
        this.functions.push(func);
    }

    remove(func) {
        this.functions.splice(this.functions.indexOf(func), 1);
    }

    clear() {
        this.functions.length = 0;
    }

    emit() {
        for (let i = 0; i < this.functions.length; i += 1) {
            this.functions[i].apply(this, arguments);
        }
    }
}