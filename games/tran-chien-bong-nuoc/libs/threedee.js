class Camera3D {
    constructor(x = 0, y = 0, z = 0) {
        this.position = new Vec3(x, y, z);
        this.near = 0;
        this.far = 0;
        this.width = 0;
        this.height = 0;

        this.addElements = [];
        this.elements = [];
        this.removeElements = [];
    }

    add(element) {
        if (this.elements.indexOf(element) === -1 && this.addElements.indexOf(element) === -1) {
            this.addElements.push(element);
            //console.log("add element: " + this.elements.length);
        }
    }

    remove(element) {
        if (this.elements.indexOf(element) !== -1 && this.removeElements.indexOf(element) === -1) {
            this.removeElements.push(element);
        }
    }

    update(dt) {

        for (let i = 0; i < this.elements.length; i++) {
            let element = this.elements[i];
            this.project(element);
        }

        this.elements.sort((a, b) => {
            return b.position.y - a.position.y;
        })

        for (let i = this.elements.length - 1; i > -1; i--) {
            let element = this.elements[i];
            if (element.container.parent)
                element.container.parent.addChild(element.container);
        }

        for (let i = this.removeElements.length - 1; i > -1; i--) {
            let element = this.removeElements[i];
            let index = this.elements.indexOf(element);
            if (index !== -1) this.elements.splice(index, 1);
            this.removeElements.splice(i, 1);
            //console.log("remove element: " + i)
        }
        for (let i = this.addElements.length - 1; i > -1; i--) {
            let element = this.addElements[i];
            let index = this.elements.indexOf(element);
            if (index === -1) this.elements.push(element);
            this.addElements.splice(i, 1);
            //console.log("added: " + element.constructor.name);
        }
    }

    project(element) {
        if (element["body"] && element.body["position"]) {
            element.position.x = element.body.position.x;
            element.position.y = element.body.position.y;
        }
        element.scale = (((this.far - this.near) - (element.position.y - this.near)) / (this.far - this.near));
        /* if (element["body"] && element.body["position"]) {
            element.scale = (((this.far - this.near) - (element.position.y - this.near)) / (this.far - this.near));
        } else 
                element.scale = (((this.far - this.near) - (element.position.y - this.near)) / (this.far - this.near));
        } */
    }

    dispose() {

        this.addElements.length = 0;
        this.elements.length = 0;
        this.removeElements.length = 0;

        this.position = null;
        this.addElements = null;
        this.elements = null;
        this.removeElements = null;
    }
}

class Vec3 {
    constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    distance(x = 0, y = 0, z = 0) {
        return Math.sqrt(Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2) + Math.pow(this.z - z, 2));
    }

    subtract(vec) {
        this.x -= vec.x;
        this.y -= vec.y;
        this.z -= vec.z;

        return this;
    }

    normalize() {
        var magnitude = this.magnitude();
        if (magnitude > 0) {
            this.divide(magnitude);
        }
        return this;
    }

    magnitude() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }

    divide(scalar) {
        this.x /= scalar;
        this.y /= scalar;
        this.z /= scalar;

        return this;
    }

    scale(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        this.z *= scalar;

        return this;
    }
}

class ScreenData {
    constructor(x = 0, y = 0, scale = 1) {
        this.x = x;
        this.y = y;
        this.scale = scale;
    }
}