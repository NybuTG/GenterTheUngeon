class Bullet {
    constructor(sprite, pos, direction, maxDistance, playerOwned=true) {
        /**
         * sprite: The sprite is the bullet image
         * pos: The position is a vector of the start position of the bullet
         * direction: Direction is a vector which describes where the bullet should be going
         * lifespan: If lifespan is 0 the bullet gets deleted, should be in total amount of frames
         */

        this.sprite = sprite;
        this.start = pos.copy();
        this.pos = pos.copy();
        this.maxDistance = maxDistance;
        this.direction = direction.copy().mult(7);
        this.playerOwned = playerOwned;
    }

    update() {
        this.draw();
        // this.hitsPlayer();
        this.pos.add(this.direction);

    }

    draw() {
        fill("green");
        circle(this.pos.x, this.pos.y, 20);
    }

    getDist() {
        return this.start.dist(this.pos);
    }

    hits(pos) {
        if (this.pos.dist(pos) < 5) {
            console.log("Pew pew");
            return true;
        }
    }
}
