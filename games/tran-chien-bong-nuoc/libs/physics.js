//import { PHYSICS_CONFIG } from "../js/config/gameplay.js";
//import { physics } from "../js/main.js";

//not supporting bounce, nor dynamic adding
class Physics {
    constructor() {
        this.drag = PHYSICS_CONFIG.drag || 0.1;
        this.bodies = [];
        this.pairs = [];
        this.projection3D = false;
    }

    createLine(user, category, mask, ...fixtures) {
        let body = new LineBody(user, category, mask, ...fixtures);
        this.bodies.push(body);

        return body;
    }

    createRectangle(user, category, mask, ...fixtures) {
        let body = new RectangleBody(user, category, mask, ...fixtures);
        body.position.x = -100000;
        body.position.y = -100000;
        this.bodies.push(body);

        return body;
    }

    update(dt, nobulletttimedt) {
        //loop, update and filter bodies
        for (let i = 0; i < this.bodies.length; i++) {
            if (this.bodies[i].bulletTime) this.bodies[i].update(dt, this.drag);
            else this.bodies[i].update(nobulletttimedt, this.drag);
            //collision filtering
            for (let j = 0; j < this.bodies.length; j++) {
                let shouldCollide = (this.bodies[i].mask & this.bodies[j].category) != 0 && (this.bodies[i].category & this.bodies[j].mask) != 0;
                if ((this.bodies[i] !== this.bodies[j]) && (this.bodies[i].enabled && this.bodies[j].enabled) && shouldCollide) {
                    let pairAdded = false;
                    for (let k = 0; k < this.pairs.length; k++) {
                        let pair = this.pairs[k];
                        if (pair.indexOf(this.bodies[i]) !== -1 && pair.indexOf(this.bodies[j]) !== -1) {
                            pairAdded = true;
                        }
                    }
                    if (!pairAdded)
                        this.pairs.push([this.bodies[i], this.bodies[j]]);
                }
            }
        }
        //resolve collisions in unique pairs of Rect vs Rect
        let lineVsRectsPairs = [];
        for (let i = this.pairs.length - 1; i > -1; i--) {
            let e1 = this.pairs[i][0],
                e2 = this.pairs[i][1];
            if (e1.constructor.name === RectangleBody.name && e2.constructor.name === RectangleBody.name) {
                this.rectVsRect(e1, e2);
            }/*  else if (e1.constructor.name === RectangleBody.name && e2.constructor.name === LineBody.name) {
                this.lineVsRect(e2, e1);
            } else if (e1.constructor.name === LineBody.name && e2.constructor.name === RectangleBody.name) {
                this.lineVsRect(e1, e2);
            } */
            else if (e1.constructor.name === RectangleBody.name && e2.constructor.name === LineBody.name) {
                let pair = this.lineVsRect(e2, e1);
                if (pair.length > 0) lineVsRectsPairs.push(pair);
            } else if (e1.constructor.name === LineBody.name && e2.constructor.name === RectangleBody.name) {
                let pair = this.lineVsRect(e1, e2);
                if (pair.length > 0) lineVsRectsPairs.push(pair);
            }

            this.pairs[i].length = 0;
        }
        this.pairs.length = 0;

        lineVsRectsPairs.sort(function (a, b) {
            return a[2] - b[2];
        });
        if (lineVsRectsPairs.length > 0) {
            lineVsRectsPairs[0][0].collide(lineVsRectsPairs[0][1]);
            lineVsRectsPairs[0][1].collide(lineVsRectsPairs[0][0]);
        }
        lineVsRectsPairs.length = 0;
        lineVsRectsPairs = null;
    }

    // RECTANGLE/RECTANGLE
    rectVsRect(body1, body2) {
        for (let i = 0; i < body1.fixtures.length; i++) {
            let fixtureA = body1.fixtures[i];
            for (let j = 0; j < body2.fixtures.length; j++) {
                let fixtureB = body2.fixtures[j];

                let r1x = fixtureA.position.x,
                    r1y = fixtureA.position.y,
                    r1w = fixtureA.projectionWidth,
                    r1h = fixtureA.projectionHeight,

                    r2x = fixtureB.position.x,
                    r2y = fixtureB.position.y,
                    r2w = fixtureB.projectionWidth,
                    r2h = fixtureB.projectionHeight;

                if (r1x + r1w >= r2x && r1x <= r2x + r2w && r1y + r1h >= r2y && r1y <= r2y + r2h) {

                    this.correctRectPos(body1, body2);
                    this.correctRectPos(body2, body1);

                    body1.collide(body2);
                    body2.collide(body1);
                }
            }
        }
    }

    correctRectPos(rect1, rect2) {
        if (rect1.static && !rect2.static && !rect2.sensor) {
            for (let i = 0; i < rect1.fixtures.length; i++) {
                let fixtureA = rect1.fixtures[i];
                for (let j = 0; j < rect2.fixtures.length; j++) {
                    let fixtureB = rect2.fixtures[j];

                    let r1x = fixtureA.position.x,
                        r1y = fixtureA.position.y,
                        r1w = fixtureA.projectionWidth,
                        r1h = fixtureA.projectionHeight,

                        r2x = fixtureB.position.x,
                        r2y = fixtureB.position.y,
                        r2w = fixtureB.projectionWidth,
                        r2h = fixtureB.projectionHeight;


                    if (r2x + r2w > r1x && r2x + r2w < r1x + r1w) {
                        //console.log("right correction");
                        rect2.position.x = r1x - (r2w / 2);
                    } else if (r2x > r1x && r2x < r1x + r1w) {
                        //console.log("left correction");
                        rect2.position.x = r1x + r1w + (r2w / 2);
                    }

                    //TODO: finish vertical correction
                    /* if (r2y + r2h > r1y && r2y + r2h < r1y + r1h) {
                        console.log("up correction");
                        rect2.position.y = r1y - (r1h / 2) + (r2h / 2);
                    } else if (r2y < r1y + r1h && r2y > r1y) {
                        console.log("down correction");
                        rect2.position.y = r1y + r1h;
                    } */
                    //NOTE: to make a bounce, just multiply the velocity negative by the bounce factor difference between the two bodies
                    rect2.velocity.x = 0;
                    rect2.velocity.y = 0;
                    rect2.acceleration.x = rect2.acceleration.y = 0;
                }
            }
        }
    }

    // LINE/RECTANGLE
    lineVsRect(line, body) {
        let collidedGroup = [],
            height = -1;
        for (let i = 0; i < line.fixtures.length; i++) {
            let fixtureA = line.fixtures[i];
            let x1 = fixtureA.end.x, y1 = fixtureA.end.y, x2 = fixtureA.start.x, y2 = fixtureA.start.y,
                rx = 0, ry = 0, rw = 0, rh = 0;
            for (let j = 0; j < body.fixtures.length; j++) {
                let fixtureB = body.fixtures[j];
                // check if the line has hit any of the rectangle's sides
                // uses the Line/Line function below
                rx = fixtureB.position.x;
                ry = fixtureB.position.y;
                rw = fixtureB.projectionWidth;
                rh = fixtureB.projectionHeight;

                /* let left = this.lineVsLine(x1, y1, x2, y2, rx, ry, rx, ry + rh, fixtureA);
                let right = this.lineVsLine(x1, y1, x2, y2, rx + rw, ry, rx + rw, ry + rh, fixtureA);
                let top = this.lineVsLine(x1, y1, x2, y2, rx, ry, rx + rw, ry, fixtureA); */
                let bottom = this.lineVsLine(x1, y1, x2, y2, rx, ry + rh, rx + rw, ry + rh, fixtureA);

                // if ANY of the above are true, the line
                // has hit the rectangle
                if (/* left || right || top ||  */bottom) {
                    let intersectionHeight = Math.abs(fixtureA.start.y - fixtureA.intersection.y);
                    if (intersectionHeight < height || height <= 0) {
                        height = intersectionHeight;
                        collidedGroup[0] = line;
                        collidedGroup[1] = body;
                        collidedGroup[2] = height;
                    }
                }
            }
        }

        /* if (collidedGroup.length > 0) {
            line.collide(body);
            body.collide(line);
            return collidedGroup;
        } */
        return collidedGroup;
    }

    // LINE/LINE
    lineVsLine(x1, y1, x2, y2, x3, y3, x4, y4, line1, line2) {

        // calculate the direction of the lines
        let uA = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));
        let uB = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));

        // if uA and uB are between 0-1, lines are colliding
        if (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1) {

            // optionally, draw a circle where the lines meet
            let intersectionX = x1 + (uA * (x2 - x1));
            let intersectionY = y1 + (uA * (y2 - y1));
            if (line1) {
                line1.intersection = { x: intersectionX, y: intersectionY };
            }
            if (line2) {
                line2.intersection = { x: intersectionX, y: intersectionY };
            }

            return true;
        }
        return false;
    }

    dispose() {
        for (let i = this.bodies.length - 1; i > -1; i--) {
            this.bodies[i].dispose();
            this.bodies[i] = null;
        }
        this.bodies.length = 0;
    }
};

class RectangleBody {
    constructor(user = null, category = 0x0000, mask = 0x0000, ...fixtures) {

        this.fixtures = [];

        this.position = { x: 0, y: 0 };
        this.acceleration = { x: 0, y: 0 };
        this.velocity = { x: 0, y: 0 };
        this.offset = { x: 0, y: 0 };

        this.drag = 1;//Drag value of the total drag value of the engine, optimal range (0-1)

        this.mask = mask;
        this.category = category;

        this.user = user;

        this.enabled = true;

        this.static = false;
        this.sensor = false;

        this.bulletTime = true;

        for (let i = 0; i < fixtures.length; i++) {
            let fixture = new RectangleFixture();
            fixture.width = fixtures[i].width || 50;
            fixture.height = fixtures[i].height || 50;
            fixture.projectionWidth = fixture.width;
            fixture.projectionHeight = fixture.height;
            fixture.offset.x = fixtures[i].x || 0;
            fixture.offset.y = fixtures[i].y || 0;
            fixture.mask = this.mask;
            fixture.category = this.category;
            this.fixtures.push(fixture);
        }
    }

    setEnable(value) {
        this.enabled = value;
    }

    collide(body) {
        this.user.physicsCollide(body);
    }

    update(dt, drag) {

        if (!this.static) {
            drag = drag * this.drag;

            this.velocity.x += this.acceleration.x * dt;
            this.velocity.x -= (this.velocity.x * drag) * dt;
            this.position.x += this.velocity.x * dt;

            this.velocity.y += this.acceleration.y * dt;
            this.velocity.y -= (this.velocity.y * drag) * dt;
            this.position.y += this.velocity.y * dt;
        }


        for (let i = 0; i < this.fixtures.length; i++) {
            if (physics.projection3D) {

                this.fixtures[i].projectionWidth = this.fixtures[i].width * this.user.scale;

                this.fixtures[i].projectionHeight = this.fixtures[i].height * this.user.scale;

                this.fixtures[i].position.x = (this.fixtures[i].offset.x * this.user.scale) + this.position.x - (this.fixtures[i].projectionWidth / 2);

                this.fixtures[i].position.y = (this.fixtures[i].offset.y * this.user.scale) + this.position.y - (this.fixtures[i].projectionHeight / 2);
            } else {
                this.fixtures[i].position.x = this.fixtures[i].offset.x + this.position.x;
                this.fixtures[i].position.y = this.fixtures[i].offset.y + this.position.y;
            }
        }

        this.acceleration.x = 0;
        this.acceleration.y = 0;
    }

    dispose() {
        this.position = null;
        this.acceleration = null;
        this.velocity = null;
        this.offset = null;

        this.mask = null;
        this.category = null;

        this.user = null;
    }
};

class LineBody {
    constructor(user = null, category = 0x0000, mask = 0x0000, ...fixtures) {

        this.fixtures = [];

        this.position = { x: 0, y: 0 };
        this.offset = { x: 0, y: 0 };

        this.mask = mask;
        this.category = category;

        this.user = user;

        this.enabled = true;

        this.static = false;
        this.sensor = false;

        for (let i = 0; i < fixtures.length; i++) {
            let fixture = new LineFixture();
            fixture.start.x = fixtures[i].x || 0;
            fixture.start.y = fixtures[i].y || 0;
            fixture.end.x = fixtures[i].x || 0;
            fixture.end.y = fixtures[i].y || 0;
            fixture.offset.x = fixtures[i].x || 0;
            fixture.offset.y = fixtures[i].y || 0;
            fixture.mask = this.mask;
            fixture.category = this.category;
            this.fixtures.push(fixture);
        }
    }

    setEnable(value) {
        this.enabled = value;
    }

    collide(body) {
        this.user.physicsCollide(body);
    }

    update(dt, drag) {

        for (let i = 0; i < this.fixtures.length; i++) {
            this.fixtures[i].start.x = (this.fixtures[i].offset.x * this.user.scale) + this.position.x;
            this.fixtures[i].start.y = (this.fixtures[i].offset.y * this.user.scale) + this.position.y;

            this.fixtures[i].intersection = null;
        }
    }

    dispose() {
        this.position = null;
        this.offset = null;

        this.mask = null;
        this.category = null;

        this.user = null;
    }
};

class LineFixture {
    constructor() {

        this.start = { x: 0, y: 0 };
        this.end = { x: 0, y: 0 };

        this.intersection = { x: null, y: null };

        this.enabled = true;

        this.static = false;
        this.sensor = false;

        this.mask = 0x0000;
        this.category = 0x0000;
        this.position = { x: 0, y: 0 };
        this.offset = { x: 0, y: 0 };

        this.length = 0;
    }
}

class RectangleFixture {
    constructor() {
        this.enabled = true;
        this.width = 1;
        this.height = 1;
        this.projectionWidth = this.width;
        this.projectionHeight = this.height;
        this.mask = 0x0000;
        this.category = 0x0000;
        this.position = { x: 0, y: 0 };
        this.offset = { x: 0, y: 0 };
    }
}

function create_physics_debug_view() {
    let view = new PIXI.Graphics();
    view.beginFill(0x004500, 0.3);
    view.lineStyle(5, 0x00FF00);

    return view;
}

function update_physics_debug_view(view) {
    view.clear();
    let lineSize = 1.5;
    for (let i = 0; i < physics.bodies.length; i++) {
        let body = physics.bodies[i];
        if (body.constructor.name === LineBody.name) {
            if (!body.enabled) {
                view.beginFill(0x808080, 1);
                view.lineStyle(3, 0x808080);
                for (let i = 0; i < body.fixtures.length; i++) {
                    view.moveTo(body.fixtures[i].start.x, body.fixtures[i].start.y);
                    view.lineTo(body.fixtures[i].end.x, body.fixtures[i].end.y);
                }
            } else {
                view.beginFill(0x00FF00, 1);
                view.lineStyle(3, 0x00FF00);

                for (let i = 0; i < body.fixtures.length; i++) {
                    view.moveTo(body.fixtures[i].start.x, body.fixtures[i].start.y);
                    if (body.fixtures[i].intersection !== null) {
                        view.drawCircle(body.fixtures[i].intersection.x, body.fixtures[i].intersection.y, 3);
                        view.lineTo(body.fixtures[i].intersection.x, body.fixtures[i].intersection.y);
                    } else {
                        view.drawCircle(body.fixtures[i].end.x, body.fixtures[i].end.y, 3);
                        view.lineTo(body.fixtures[i].end.x, body.fixtures[i].end.y);
                    }
                }
            }
        } else if (body.constructor.name === RectangleBody.name) {

            if (!body.enabled) {
                for (let i = 0; i < body.fixtures.length; i++) {
                    view.beginFill(0x808080, 0.3);
                    view.lineStyle(lineSize, 0x808080);
                    view.drawRect(body.fixtures[i].position.x, body.fixtures[i].position.y, body.fixtures[i].projectionWidth, body.fixtures[i].projectionHeight);
                    view.drawCircle(body.fixtures[i].position.x, body.fixtures[i].position.y, 3 * body.user.scale);
                    view.drawCircle(body.fixtures[i].position.x + (body.fixtures[i].projectionWidth / 2), body.fixtures[i].position.y + (body.fixtures[i].projectionHeight / 2), 3 * body.user.scale);
                    view.drawCircle(body.position.x, body.position.y, 3);
                }
            } else {
                for (let i = 0; i < body.fixtures.length; i++) {
                    view.beginFill(0x00FF00, 0.3);
                    view.lineStyle(lineSize, 0x00FF00);
                    view.drawRect(body.fixtures[i].position.x, body.fixtures[i].position.y, body.fixtures[i].projectionWidth, body.fixtures[i].projectionHeight);
                    view.drawCircle(body.fixtures[i].position.x, body.fixtures[i].position.y, 3 * body.user.scale);
                    view.drawCircle(body.fixtures[i].position.x + (body.fixtures[i].projectionWidth / 2), body.fixtures[i].position.y + (body.fixtures[i].projectionHeight / 2), 3 * body.user.scale);

                    view.lineStyle(lineSize, 0xFF0000);
                    view.drawCircle(body.position.x, body.position.y, 3);
                }
            }
        }
    }
}