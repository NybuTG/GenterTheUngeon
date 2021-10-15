class Bullet {
    constructor(sprite, pos, direction) {
        this.sprite = sprite;
        this.pos = pos;
        this.direction = direction;
    }

    update() {
        this.draw();
        this.pos.add()
    }

    draw() {
        // noStroke();
        fill("green");
        circle(this.pos.x, this.pos.y, 20);
    }
}