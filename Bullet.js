class Bullet {
    constructor(sprite, pos, direction, maxDistance) {
        /**
         * sprite: The sprite is the bullet image
         * pos: The position is a vector of the start position of the bullet
         * direction: Direction is a vector which describes where the bullet should be going
         * lifespan: If lifespan is 0 the bullet gets deleted, should be in total amount of frames
         */

        this.sprite = sprite;
        this.start = pos.copy();
        this.pos = pos.copy();
        this.direction = createVector(0.5, 1);
        this.maxDistance = maxDistance;
    }

    update() {
        this.draw();
        this.pos.add(this.direction);
        // this.direction.mult(deltaTime/40);
    }

    draw() {
        // noStroke();
        fill("green");
        circle(this.pos.x, this.pos.y, 20);
    }

    getDist() {
        return this.start.dist(this.pos);
    }
}