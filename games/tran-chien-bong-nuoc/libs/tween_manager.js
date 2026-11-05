class TweenManager {
    constructor() {
        this.group = {};
        this.toRemove = {};
        createjs.Ticker.paused = true;
    }

    add(groupId, tween) {
        if (!this.group[groupId]) {
            this.group[groupId] = [];
            this.toRemove[groupId] = [];
        }
        this.group[groupId].push(tween);
        //tween.on("complete", this.remove.bind(this, groupId, tween));
    }

    updateGroups(dt, ...groupIds) {
        for (let i in groupIds) {
            let groupId = groupIds[i];
            if (!this.group[groupId]) continue;
            for (let j = 0; j < this.group[groupId].length; j++) {
                this.group[groupId][j].advance(dt * 1000);
                if (this.group[groupId][j].paused) {
                    this.remove(groupId, this.group[groupId][j]);
                }
            }
        }
        for (let i in this.toRemove) {
            for (let j = this.toRemove[i].length - 1; j > -1; j--) {
                let tween = this.toRemove[i][j];
                let tweenIndex = this.group[i].indexOf(tween);
                this.group[i].splice(tweenIndex, 1);
                let removeIndex = this.toRemove[i].indexOf(tween);
                this.toRemove[i].splice(removeIndex, 1);
            }
        }
    }

    remove(groupId, tween) {
        //console.log("remove: " + groupId, tween);
        this.toRemove[groupId].push(tween);
    }

    clear() {
        for (let j in this.group) {
            this.group[j].length = 0;
            delete this.group[j];
        }
        for (let j in this.toRemove) {
            this.toRemove[j].length = 0;
            delete this.toRemove[j];
        }

        createjs.Tween.removeAllTweens();
    }
}