class CustomInput {
    constructor() {

        this.startPos = { x: 0, y: 0 };
        this.initialPos = { x: 0, y: 0 };
        this.prevPos = { x: 0, y: 0 };
        this.actualPos = { x: 0, y: 0 };
        //direction
        this.dir = {
            x: 0,
            y: 0
        };
        this.swipeDelay = 0.25;
        this.swipeThreshold = 80;
        this.swipeRestraint = 40;
        this.dragGizmo = 10;
        this.drag = false;
        this.swipe = false;
        this.time = 0;

        this.promise = {
            swipe: false,
            drag: false
        }

        this.elem = document.getElementById('body');

        this.elem.addEventListener('touchstart', this.onTouchStart.bind(this));

        this.elem.addEventListener('touchend', this.onTouchUp.bind(this));
        this.elem.addEventListener('touchoutside', this.onTouchUp.bind(this));
        this.elem.addEventListener('touchcancel', this.onTouchUp.bind(this));
        this.elem.addEventListener('touchmove', this.onTouchMove.bind(this));

        this.down = this.keyboard("ArrowDown");
        this.right = this.keyboard("ArrowRight");
        this.left = this.keyboard("ArrowLeft");
        this.up = this.keyboard("ArrowUp");

        this.down.press = () => {
            console.log("PRESSED: " + this.down.value);
            //key object pressed
        };
        this.down.release = () => {
            console.log("RELEASED: " + this.down.value);
            //key object released
        };
    }

    onTouchStart(e) {
        this.startPos.x = e.touches[0].screenX;
        this.startPos.y = e.touches[0].screenY;

        this.actualPos.x = e.touches[0].screenX;
        this.actualPos.y = e.touches[0].screenY;

        this.initialPos.x = e.touches[0].screenX;
        this.initialPos.y = e.touches[0].screenY;

        this.prevPos.x = e.touches[0].screenX;
        this.prevPos.y = e.touches[0].screenY;

        this.time = 0;
        this.dir.x = 0;
        this.dir.y = 0;
    }

    onTouchUp(e) {
        for (let i in this.promise) {
            this[i] = false;
            this.promise[i] = false;
        }

        let distanceX = e.changedTouches[0].screenX - this.initialPos.x, distanceY = e.changedTouches[0].screenY - this.initialPos.y;

        if (this.time <= this.swipeDelay && Math.abs(distanceX) + Math.abs(distanceY) > this.swipeThreshold) {
            this.promise["swipe"] = true;
            this.promise["drag"] = false;
        }

        if (this.promise["swipe"]) {
            if (Math.abs(distanceX) > Math.abs(distanceY) + this.swipeRestraint) {
                this.dir.x = (distanceX < 0) ? -1 : 1;
                this.dir.y = 0;
                console.log("swipe horizontal: " + this.dir.x);
            } else {
                this.dir.x = 0;
                this.dir.y = (distanceY < 0) ? -1 : 1;
                console.log("swipe vertical: " + this.dir.y);
            }
        }
    }

    onTouchMove(e) {

        /* if (this.prevPos.x < e.touches[0].screenX && this.actualPos.x + this.dragGizmo < e.touches[0].screenX) {
            this.actualPos.x = e.touches[0].screenX;
            this.dir.x = 1;
        } else if (this.prevPos.x > e.touches[0].screenX && this.actualPos.x - this.dragGizmo > e.touches[0].screenX) {
            this.actualPos.x = e.touches[0].screenX;
            this.dir.x = -1;
        } */

        /* if (this.prevPos.x + this.dragGizmo < e.touches[0].screenX) {
            //this.actualPos.x = e.touches[0].screenX;
            this.dir.x = 1;
        } else if (this.prevPos.x - this.dragGizmo > e.touches[0].screenX) {
            //this.actualPos.x = e.touches[0].screenX;
            this.dir.x = -1;
        } */

        if (this.prevPos.x < e.touches[0].screenX && this.actualPos.x + this.dragGizmo < e.touches[0].screenX) {
            this.actualPos.x = e.touches[0].screenX;
            this.dir.x = 1;
        } else if (this.prevPos.x > e.touches[0].screenX && this.actualPos.x - this.dragGizmo > e.touches[0].screenX) {
            this.actualPos.x = e.touches[0].screenX;
            this.dir.x = -1;
        } 

        //if (this.time > this.swipeDelay) {
        this.promise["drag"] = true;
        //}

        this.prevPos.x = e.touches[0].screenX;
        this.prevPos.y = e.touches[0].screenY;
    }

    update(dt) {
        /* if (this.drag)
            console.log("drag " + this.dir.x); */
        for (let i in this.promise) {
            this[i] = this.promise[i];
            if (i.indexOf("drag") === -1)
                this.promise[i] = false;
        }
        this.time += dt;
    }

    dispose() {

    }

    keyboard(value) {
    let key = {};
    key.value = value;
    key.isDown = false;
    key.isUp = true;
    key.press = undefined;
    key.release = undefined;
    //The `downHandler`
    key.downHandler = event => {
        if (event.key === key.value) {
            if (key.isUp && key.press) key.press();
            key.isDown = true;
            key.isUp = false;
            event.preventDefault();
        }
    };

    //The `upHandler`
    key.upHandler = event => {
        if (event.key === key.value) {
            if (key.isDown && key.release) key.release();
            key.isDown = false;
            key.isUp = true;
            event.preventDefault();
        }
    };

    //Attach event listeners
    const downListener = key.downHandler.bind(key);
    const upListener = key.upHandler.bind(key);

    window.addEventListener(
        "keydown", downListener, false
    );
    window.addEventListener(
        "keyup", upListener, false
    );

    // Detach event listeners
    key.unsubscribe = () => {
        window.removeEventListener("keydown", downListener);
        window.removeEventListener("keyup", upListener);
    };

    return key;
}

}
