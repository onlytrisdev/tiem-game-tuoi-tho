class BulletTime {
    constructor() {
        this.sequence = [];
        this.time = 0;
        this.index = 0;
        this.multiplier = 1;
        this.currentMultiplierDt = 1;
        this.currentTime = 0;
        this.totalTime = 0;
        this.timeRatio = 0;
    }

    set(sequence) {
        this.clear();
        this.sequence = sequence;
        this.currentTime = 0;
        for (let i = 0; i < this.sequence.length; i++) {
            this.currentTime += this.sequence[i][1];
        }
        this.totalTime = this.currentTime;
        this.timeRatio = this.currentTime / this.totalTime;
        //console.log(this.totalTime);
    }

    update(dt) {
        if (this.index < this.sequence.length) {
            if (this.time === 0) {
                this.currentMultiplierDt = Number((this.sequence[this.index][0] - this.multiplier) / (this.sequence[this.index][1] / dt).toFixed(2));
            }
            this.time += dt;
            this.currentTime -= dt;

            if (this.time < this.sequence[this.index][1]) {
                this.multiplier += this.currentMultiplierDt;
                //console.log("dt multiplier: " + this.multiplier + ", " + this.time);
            }

            if (this.time > this.sequence[this.index][1]) {
                if (this.sequence[this.index].length > 2) {//means it has a callback
                    this.sequence[this.index][2]();
                }
                this.multiplier = this.sequence[this.index][0];
                this.time = 0;
                this.index++;
            }
            if (this.currentTime <= dt) this.currentTime = 0;
            this.timeRatio = this.currentTime / this.totalTime;
            
        }
        dt *= this.multiplier;
        return dt;
    }

    lerp(v0, v1, t) {
        return (1 - t) * v0 + t * v1;
    }

    clear() {
        this.time = 0;
        this.index = 0;
        this.sequence = [];
    }

    dispose() {
        this.clear();
        this.sequence = null;
    }
}