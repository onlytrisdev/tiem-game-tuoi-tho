class SuperPool {
    constructor() {
        this.pool = {};
    }

    preAllocate(entityClass, amount) {
        let name = entityClass.name;
        this.pool[name] = {
            allocated: [],
            free: []
        };
        for (let i = 0; i < amount; i++) {
            let entity = new entityClass();
            //entity.init();
            this.pool[name].free.push(entity);
        }
    }

    get(entityClass, allocationUserId = "", index = 0) {
        let name = entityClass.name;
        //console.log("get::" + name);
        let entity = this.pool[name].free[0];
        if (entity !== undefined) {
            this.pool[name].free.splice(0, 1);
            this.pool[name].allocated.push(entity);
            if (allocationUserId.length > 0) {
                entity.userId = allocationUserId;
                entity.userIndex = index;
            }
            entity.reset();
        }

        if (allocationUserId.length > 0) {
            for (let j = 0; j < this.pool[name].allocated.length; j++) {
                let allocatedEntity = this.pool[name].allocated[j];
                if (allocatedEntity.userId === allocationUserId && allocatedEntity.userIndex === index) {
                    entity = allocatedEntity;
                    break;
                }
            }
        }

        //this.printPools();
        //if (entity === undefined) console.log("undefined: " + name, entity);
        return entity;
    }

    free(entity) {
        let name = entity.constructor.name;
        //console.log("free::" + name);
        let index = this.pool[name].allocated.indexOf(entity);
        if (index !== -1) {
            this.pool[name].allocated.splice(index, 1);
            this.pool[name].free.push(entity);
            entity.remove();
            //console.log("freeing instance of " + name);
        } else {
            //console.log("not enough allocated instances of " + name);
        }
        //this.printPools();
    }

    update() {
        for (let i in this.pool) {
            for (let j = this.pool[i].allocated.length - 1; j > -1; j--) {
                if (this.pool[i].allocated[j].kill) {
                    this.free(this.pool[i].allocated[j]);
                }
            }
        }
    }

    printPools() {
        for (let i in this.pool) {
            console.log(i + "--> allocated: " + this.pool[i].allocated.length + ", free: " + this.pool[i].free.length);
        }
    }

    dispose() {
        for (let i in this.pool) {
            for (let j = 0; j < this.pool[i].allocated.length; j++) {
                this.pool[i].allocated[j].dispose();
            }
            for (let k = 0; k < this.pool[i].free.length; k++) {
                this.pool[i].free[k].dispose();
            }
        }
        for (let i in this.pool) {
            delete this.pool[i];
        }
    }
}